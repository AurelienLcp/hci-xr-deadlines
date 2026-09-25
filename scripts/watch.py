#!/usr/bin/env python3
"""Deadline watcher for the HCI & XR Deadlines page.

Runs from GitHub Actions. It never edits data.js: it only opens issues
so a person (or the monthly Claude task) can update the dates.

1. new_editions: a page that returned an error goes live -> issue "new-call".
2. calls: the dates listed after the anchor text change -> issue "date-change".

State (what was seen last time) is kept in watch-state.json, which the
workflow restores and saves with actions/cache. On the very first run the
script only records a baseline and opens no issues.

Environment:
  GITHUB_TOKEN, GITHUB_REPOSITORY  set by GitHub Actions
  WATCH_DRY_RUN=1                  print issues instead of creating them
  WATCHLIST, WATCH_STATE           override file paths (for local tests)
"""
import hashlib, html, json, os, re, sys, urllib.error, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
WATCHLIST = os.environ.get("WATCHLIST", os.path.join(HERE, "watchlist.json"))
STATE = os.environ.get("WATCH_STATE", "watch-state.json")
DRY = os.environ.get("WATCH_DRY_RUN") == "1"
REPO = os.environ.get("GITHUB_REPOSITORY", "")
TOKEN = os.environ.get("GITHUB_TOKEN", "")
UA = "Mozilla/5.0 (compatible; hci-xr-deadlines-watcher; +https://github.com/%s)" % REPO

MONTH = r"(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|June?|July?|Aug(?:ust)?|Sept?(?:ember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)"
DAY = r"\d{1,2}(?:st|nd|rd|th)?"
DATE_RE = re.compile(
    rf"\b(?:{MONTH}\.?\s+{DAY}(?:,?\s+\d{{4}})?|{DAY}\s+(?:of\s+)?{MONTH}\.?(?:,?\s+\d{{4}})?|\d{{4}}-\d{{2}}-\d{{2}})\b",
    re.I)
WINDOW = 3000  # characters read after the anchor


def fetch(url):
    """Return (status, final_url, text). status 0 means a network error."""
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.status, r.geturl(), r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, url, ""
    except Exception as e:  # DNS failure, timeout, TLS error...
        print(f"  ! {url}: {e}", file=sys.stderr)
        return 0, url, ""


def to_text(page):
    page = re.sub(r"(?is)<(script|style|noscript)\b.*?</\1>", " ", page)
    page = re.sub(r"(?is)<(del|s|strike)\b[^>]*>", " [struck: ", page)
    page = re.sub(r"(?is)</(del|s|strike)>", "] ", page)
    page = re.sub(r"(?s)<[^>]+>", "\n", page)
    page = html.unescape(page)
    return re.sub(r"[ \t\r\f\v]+", " ", re.sub(r"\n\s*\n+", "\n", page)).strip()


def signature(text, anchor):
    i = text.lower().find(anchor.lower()) if anchor else -1
    window = text[i:i + WINDOW] if i >= 0 else text
    dates, seen = [], set()
    for m in DATE_RE.finditer(window):
        d = re.sub(r"\s+", " ", m.group(0)).strip()
        if d.lower() not in seen:
            seen.add(d.lower()); dates.append(d)
    digest = hashlib.sha256(window.encode()).hexdigest()[:16]
    return {"anchor_found": i >= 0, "dates": dates, "hash": digest}


def is_live(status, final_url, url, text):
    if status != 200 or len(text) < 500:
        return False
    # Some hosts redirect a missing page to their home page: treat that as not live.
    want = url.rstrip("/").split("/", 3)[-1]
    got = final_url.rstrip("/").split("/", 3)[-1]
    return want == "" or want in got


# ---------------- GitHub issues ----------------

def gh(method, path, body=None):
    req = urllib.request.Request(
        f"https://api.github.com/repos/{REPO}{path}", method=method,
        data=json.dumps(body).encode() if body is not None else None,
        headers={"Authorization": f"Bearer {TOKEN}", "Accept": "application/vnd.github+json",
                 "User-Agent": UA, "X-GitHub-Api-Version": "2022-11-28"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.loads(r.read() or b"null")
    except urllib.error.HTTPError as e:
        if e.code == 422:  # label already exists
            return None
        raise


LABELS = {"new-call": ("1f6feb", "A new call for papers is online"),
          "date-change": ("d97706", "Dates changed on an official call"),
          "correction": ("8250df", "A wrong or outdated date on the page")}


def open_issue(title, body, label):
    if DRY or not TOKEN:
        print(f"\n=== [{label}] {title}\n{body}")
        return
    for name, (color, desc) in LABELS.items():
        gh("POST", "/labels", {"name": name, "color": color, "description": desc})
    existing = gh("GET", f"/issues?state=open&labels={label}&per_page=100") or []
    if any(i.get("title") == title for i in existing):
        print(f"  = issue already open: {title}")
        return
    gh("POST", "/issues", {"title": title, "body": body, "labels": [label]})
    print(f"  + opened issue: {title}")


# ---------------- main ----------------

def main():
    cfg = json.load(open(WATCHLIST))
    try:
        state = json.load(open(STATE))
    except (FileNotFoundError, json.JSONDecodeError):
        state = {}
    baseline = not state
    if baseline:
        print("No previous state: recording a baseline, no issues will be opened.")
    new_state = {}
    checklist = ("\n\n**To do**\n- [ ] Read the official call\n"
                 "- [ ] Update `data.js` (dates, `st: \"ok\"`, `LAST_VERIFIED`)\n"
                 "- [ ] If this page was in `new_editions`, move it to `calls` in `scripts/watchlist.json`")

    for e in cfg.get("new_editions", []):
        url = e["url"]
        status, final, page = fetch(url)
        live = is_live(status, final, url, page)
        before = state.get(url, {}).get("live")
        print(f"[edition] {e['name']}: HTTP {status} -> {'live' if live else 'not live'}")
        if status == 0 and url in state:  # network error: keep old state
            new_state[url] = state[url]; continue
        new_state[url] = {"live": live}
        if live and before is False and not baseline:
            sig = signature(to_text(page), "Important Dates")
            dates = "\n".join(f"- {d}" for d in sig["dates"][:25]) or "_No dates found on the home page yet._"
            open_issue(f"New call online: {e['name']}",
                       f"The page {url} is now online.\n\nDates spotted on the page:\n{dates}{checklist}",
                       "new-call")

    for c in cfg.get("calls", []):
        url = c["url"]
        status, final, page = fetch(url)
        if status != 200:
            print(f"[call] {c['name']}: HTTP {status}, skipped")
            if url in state:
                new_state[url] = state[url]
            continue
        sig = signature(to_text(page), c.get("anchor", ""))
        new_state[url] = sig
        old = state.get(url)
        print(f"[call] {c['name']}: {len(sig['dates'])} dates, anchor {'found' if sig['anchor_found'] else 'missing'}")
        if baseline or not old:
            continue
        changed = sig["dates"] != old.get("dates") if (sig["dates"] or old.get("dates")) else sig["hash"] != old.get("hash")
        if changed:
            added = [d for d in sig["dates"] if d not in old.get("dates", [])]
            removed = [d for d in old.get("dates", []) if d not in sig["dates"]]
            fmt = lambda xs: "\n".join(f"- {x}" for x in xs) or "- (none)"
            open_issue(f"Dates changed: {c['name']}",
                       f"The dates section of {url} changed since the last check.\n\n"
                       f"**Added**\n{fmt(added)}\n\n**Removed**\n{fmt(removed)}\n\n"
                       f"**Current list**\n{fmt(sig['dates'])}{checklist}",
                       "date-change")

    json.dump(new_state, open(STATE, "w"), indent=1, sort_keys=True)


if __name__ == "__main__":
    main()
