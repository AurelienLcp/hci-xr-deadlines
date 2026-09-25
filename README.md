# HCI & XR Deadlines 2026–27

Submission planner for CHI, CSCW, IEEE VR, ISMAR, VRST and ICMI: papers, posters / late-breaking work, demos and doctoral consortia, shown as a filterable timeline and table.

The site is two static files with no build step:

| File | Purpose |
|---|---|
| `index.html` | Page layout, styles and rendering logic |
| `data.js` | All conferences, deadlines and notes: edit this file to update the page |

## Publish on GitHub Pages

1. Create a new public repository on GitHub, for example `hci-xr-deadlines`.
2. Upload `index.html`, `data.js` and `README.md` to the root of the repository (**Add file → Upload files**, then **Commit changes**).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder, then click **Save**.
5. Wait one or two minutes. The site is then live at `https://<your-username>.github.io/hci-xr-deadlines/`. The URL also appears at the top of **Settings → Pages**.

Using the command line instead:

```bash
git init hci-xr-deadlines && cd hci-xr-deadlines
cp /path/to/index.html /path/to/data.js /path/to/README.md .
git add . && git commit -m "Add deadlines page"
git branch -M main
git remote add origin https://github.com/<your-username>/hci-xr-deadlines.git
git push -u origin main
```

Then enable Pages as in steps 3–4.

## Update the deadlines

Edit `data.js` directly on GitHub (pencil icon) and commit. The page redeploys automatically within a minute or two.

- Dates are `YYYY-MM-DD`, Anywhere on Earth.
- When a call for papers is published, replace the estimated date and change `st: "est"` to `st: "ok"`.
- Update `window.LAST_VERIFIED` so visitors know how fresh the data is.
- To add a new edition (for example CHI 2028 posters), copy an existing entry and give it a unique `id`.

## Notes

- The “My project” column and the filters are saved in each visitor's browser (localStorage). They are not shared and are not stored in the repository.
- The page follows the visitor's light or dark system theme.
- Fonts load from Google Fonts; the page falls back to system fonts if they are unavailable.
