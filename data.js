/* =====================================================================
   Conference deadlines data — edit this file to update the page.

   Dates use the ISO format "YYYY-MM-DD" (Anywhere on Earth).
   st (status):  "ok"   = confirmed from the official call
                 "est"  = estimated from the previous edition
                 "roll" = rolling submissions, no deadline
   track:        "papers" | "posters" | "demos" | "dc"
   abs:          mandatory abstract deadline (optional)
   notif / cr:   notification and camera-ready dates (optional)
   sec: true     draws a smaller marker (secondary paper type)
   ===================================================================== */

window.LAST_VERIFIED = "2026-09-25";

window.CONFS = [
  {id:"ieeevr", name:"IEEE VR", where:"Melbourne · Feb 27 – Mar 3, 2027",
   bands:[{s:"2027-02-27",e:"2027-03-03",lbl:"VR 2027"}]},
  {id:"chi", name:"CHI", where:"Pittsburgh · May 10–14, 2027",
   bands:[{s:"2027-05-10",e:"2027-05-14",lbl:"CHI 2027"}]},
  {id:"icmi", name:"ICMI", where:"2027 venue not announced",
   bands:[{s:"2027-10-04",e:"2027-10-08",lbl:"~ICMI 2027",est:true}]},
  {id:"ismar", name:"ISMAR", where:"2027 venue not announced",
   bands:[{s:"2027-10-04",e:"2027-10-08",lbl:"~ISMAR 2027",est:true}]},
  {id:"cscw", name:"CSCW", where:"2027 venue not announced",
   bands:[{s:"2027-10-09",e:"2027-11-20",lbl:"CSCW 2027 · autumn?",est:true}]},
  {id:"vrst", name:"VRST", where:"2026: Sendai, Nov 16–18",
   bands:[{s:"2026-11-16",e:"2026-11-18",lbl:"VRST 2026"},{s:"2027-11-15",e:"2027-11-17",lbl:"~VRST 2027",est:true}]}
];

window.DEADLINES = [
  // IEEE VR
  {id:"vr27p", conf:"ieeevr", ed:"IEEE VR 2027", track:"papers", name:"Papers (TVCG + conference)", abs:"2026-08-24", sub:"2026-08-31", notif:"2026-11-30", cr:"2027-01-12", st:"ok",
   fmt:"4–9 pp. + 2 pp. refs, VGTC format, double-blind. Revision due Dec 31, final decision Jan 7."},
  {id:"vr27po", conf:"ieeevr", ed:"IEEE VR 2027", track:"posters", name:"Posters", abs:"2026-12-02", sub:"2026-12-07", notif:"2027-01-06", cr:"2027-01-12", st:"ok",
   fmt:"2-page extended abstract incl. refs, anonymized. Title and abstract due Dec 2."},
  {id:"vr27d", conf:"ieeevr", ed:"IEEE VR 2027", track:"demos", name:"Research demos", sub:"2026-12-07", notif:"2027-01-07", cr:"2027-01-12", st:"ok",
   fmt:"2-page abstract + layout schematic + 1–2 min video."},
  {id:"vr27dc", conf:"ieeevr", ed:"IEEE VR 2027", track:"dc", name:"Doctoral Consortium", sub:"2026-12-14", notif:"2027-01-18", st:"est",
   fmt:"2027 call not yet published. In 2026: submission Dec 15, notification Jan 19."},
  {id:"vr28p", conf:"ieeevr", ed:"IEEE VR 2028", track:"papers", name:"Papers", abs:"2027-08-23", sub:"2027-08-30", notif:"2027-11-29", st:"est",
   fmt:"Estimated from the 2027 schedule (abstract one week before)."},

  // CHI
  {id:"chi27p", conf:"chi", ed:"CHI 2027", track:"papers", name:"Papers", sub:"2026-09-10", notif:"2026-12-17", cr:"2027-02-18", st:"ok",
   fmt:"5,000–8,000 words encouraged; under 5,000 counts as a short paper. No separate abstract deadline. Revise & resubmit due Dec 3."},
  {id:"chi27po", conf:"chi", ed:"CHI 2027", track:"posters", name:"Posters", sub:"2027-01-21", notif:"2027-02-18", cr:"2027-03-18", st:"ok",
   fmt:"Up to 4 pp. single-column excl. refs + A0 poster, anonymized. Non-archival: can be reused in a later paper."},
  {id:"chi27d", conf:"chi", ed:"CHI 2027", track:"demos", name:"Interactive Demos", sub:"2027-01-21", notif:"2027-02-18", cr:"2027-03-18", st:"ok",
   fmt:"Up to 6 pp. single-column + video ≤ 5 min + still image, not anonymized. Authors of accepted papers must submit here too."},
  {id:"chi27src", conf:"chi", ed:"CHI 2027", track:"dc", name:"Student Research Competition", sub:"2027-01-21", notif:"2027-02-18", cr:"2027-03-18", st:"ok",
   fmt:"No Doctoral Consortium at CHI 2027. SRC: up to 5 pp.; graduate students submit single-author (no advisor), not anonymized."},
  {id:"chi28p", conf:"chi", ed:"CHI 2028", track:"papers", name:"Papers", sub:"2027-09-09", notif:"2027-12-16", st:"est",
   fmt:"Estimated: the CHI papers deadline has fallen between Sep 10 and Sep 14 in recent editions."},

  // ICMI
  {id:"icmi27p", conf:"icmi", ed:"ICMI 2027", track:"papers", name:"Long & short papers", abs:"2027-04-12", sub:"2027-04-19", notif:"2027-07-01", cr:"2027-07-22", st:"est",
   fmt:"In 2026: abstract Apr 13, paper Apr 23 (after extension), rebuttal in early June."},
  {id:"icmi27bs", conf:"icmi", ed:"ICMI 2027", track:"papers", name:"Blue Sky papers", sub:"2027-05-07", notif:"2027-06-22", st:"est", sec:true,
   fmt:"Vision papers. In 2026: May 8."},
  {id:"icmi27dc", conf:"icmi", ed:"ICMI 2027", track:"dc", name:"Doctoral Consortium", sub:"2027-05-19", notif:"2027-06-04", st:"est",
   fmt:"In 2026: May 20, notification June 5."},
  {id:"icmi27lbr", conf:"icmi", ed:"ICMI 2027", track:"posters", name:"Late-Breaking Results", sub:"2027-06-20", notif:"2027-07-14", st:"est",
   fmt:"In 2026: June 21, notification July 15."},
  {id:"icmi27d", conf:"icmi", ed:"ICMI 2027", track:"demos", name:"Demos & exhibits", sub:"2027-06-20", notif:"2027-07-14", st:"est",
   fmt:"In 2026: June 21, notification July 15."},

  // ISMAR
  {id:"ismar27p", conf:"ismar", ed:"ISMAR 2027", track:"papers", name:"Papers", abs:"2027-03-08", sub:"2027-03-15", st:"est",
   fmt:"In 2026: abstract Mar 9, paper Mar 16 (Bari, Oct 5–9)."},
  {id:"ismar27dc", conf:"ismar", ed:"ISMAR 2027", track:"dc", name:"Doctoral Consortium", sub:"2027-06-02", st:"est",
   fmt:"Position paper up to 2 pp. (VGTC). In 2026: June 3."},
  {id:"ismar27po", conf:"ismar", ed:"ISMAR 2027", track:"posters", name:"Posters", sub:"2027-06-24", st:"est",
   fmt:"In 2026: June 25."},
  {id:"ismar27d", conf:"ismar", ed:"ISMAR 2027", track:"demos", name:"Demos", sub:"2027-07-16", st:"est",
   fmt:"In 2026: July 17."},

  // CSCW
  {id:"cscwp", conf:"cscw", ed:"CSCW 2027+", track:"papers", name:"Papers (rolling)", st:"roll",
   fmt:"No deadline: submit to PACM HCI/CSCW (or ToCHI) whenever the paper is ready. Target ~4 months of review; presented at the next CSCW after acceptance."},
  {id:"cscw27po", conf:"cscw", ed:"CSCW 2027", track:"posters", name:"Posters", sub:"2027-05-14", notif:"2027-06-18", st:"est",
   fmt:"4–6 pp. single-column, not anonymized. In 2026: May 15."},
  {id:"cscw27d", conf:"cscw", ed:"CSCW 2027", track:"demos", name:"Demonstrations", sub:"2027-05-14", notif:"2027-06-18", st:"est",
   fmt:"4-page extended abstract + 1-page logistics summary. In 2026: May 15."},
  {id:"cscw27dc", conf:"cscw", ed:"CSCW 2027", track:"dc", name:"Doctoral Consortium", sub:"2027-05-14", notif:"2027-06-11", st:"est",
   fmt:"4 pp. single-author + 2-page CV + advisor letter. In 2026: May 15."},

  // VRST
  {id:"vrst26p", conf:"vrst", ed:"VRST 2026", track:"papers", name:"Papers", abs:"2026-06-17", sub:"2026-06-24", notif:"2026-08-28", cr:"2026-09-25", st:"ok",
   fmt:"2026 cycle closed (camera-ready Sep 25)."},
  {id:"vrst26pd", conf:"vrst", ed:"VRST 2026", track:"posters", name:"Posters", sub:"2026-09-04", notif:"2026-09-22", cr:"2026-09-25", st:"ok",
   fmt:"2026 cycle closed."},
  {id:"vrst27p", conf:"vrst", ed:"VRST 2027", track:"papers", name:"Papers", abs:"2027-06-16", sub:"2027-06-23", notif:"2027-08-27", st:"est",
   fmt:"4–9 pp. ACM double-column, double-blind. In 2026: abstract June 17, paper June 24."},
  {id:"vrst27po", conf:"vrst", ed:"VRST 2027", track:"posters", name:"Posters", sub:"2027-09-03", notif:"2027-09-21", st:"est",
   fmt:"2 pp. incl. refs, not anonymized. In 2026: Sep 4."},
  {id:"vrst27d", conf:"vrst", ed:"VRST 2027", track:"demos", name:"Demos", sub:"2027-09-03", notif:"2027-09-21", st:"est",
   fmt:"2 pp. incl. refs. In 2026: Sep 4 (VRST has no DC)."}
];

window.NOTES = [
  {conf:"ieeevr", title:"IEEE VR 2027 · Melbourne", items:[
    "Single review cycle: a paper is accepted as TVCG, accepted as conference paper, or rejected.",
    "Rejected papers are no longer moved to posters automatically; submit to the posters track (Dec 7) instead.",
    "All senior authors must volunteer as reviewers, or risk desk rejection.",
    "Workshops set their own deadlines; notifications by Jan 7, 2027 at the latest."],
   src:[["Papers","https://ieeevr.org/2027/contribute/papers/"],["Posters","https://ieeevr.org/2027/contribute/posters/"],["Demos","https://ieeevr.org/2027/contribute/demos/"],["DC 2026","http://ieeevr.org/2026/contribute/doctoral-consortium/"]]},
  {conf:"chi", title:"CHI 2027 · Pittsburgh", items:[
    "Papers closed Sep 10, 2026; reviews Nov 5, revise & resubmit Dec 3, decisions Dec 17.",
    "Posters, demos and SRC are all due Jan 21, 2027. A given piece of work can go to only one of them.",
    "No Doctoral Consortium in 2027. The seven categories are Papers, Posters, Interactive Demos, Panels, Workshops, Meet-ups and SRC.",
    "Workshop papers: around Feb 11, 2027, depending on each workshop.",
    "Posters: four authors must sign up as reviewers."],
   src:[["Papers","https://chi2027.acm.org/authors/papers/"],["Posters","https://chi2027.acm.org/authors/posters/"],["Demos","https://chi2027.acm.org/authors/interactive-demos/"],["SRC","https://chi2027.acm.org/authors/student-research-competition/"]]},
  {conf:"icmi", title:"ICMI 2027", items:[
    "2027 call not yet published; dates estimated from ICMI 2026 (Naples, Oct 5–9).",
    "Some 2026 deadlines were 23:59 PDT rather than AoE; check the 2027 call.",
    "Long and short papers share one deadline, with the abstract about ten days earlier."],
   src:[["2026 dates","https://icmi.acm.org/2026/important-dates/"]]},
  {conf:"ismar", title:"ISMAR 2027", items:[
    "2027 call not yet published; dates estimated from ISMAR 2026 (Bari, Oct 5–9).",
    "Papers are due in March, about six months before the conference: the earliest deadline of the autumn venues.",
    "2026 sequence: DC in early June, posters in late June, demos in mid-July."],
   src:[["ISMAR 2026","https://www.ieeeismar.net/2026/"],["DC 2026","https://www.ieeeismar.net/2026/call-for-doctoral-consortium/"]]},
  {conf:"cscw", title:"CSCW 2027 and beyond", items:[
    "Papers move to rolling submission: PACM HCI/CSCW, or ToCHI if in CSCW scope.",
    "No deadline for a given edition: a paper accepted after the program is set is presented the following year.",
    "Posters, demos and DC keep a fixed deadline (May 15 in 2026), estimated here as mid-May 2027.",
    "CSCW 2027 venue and dates not announced yet."],
   src:[["CSCW 2027+","https://cscw.acm.org/rolling.html"],["Posters 2026","https://cscw.acm.org/2026/posters.html"],["DC 2026","https://cscw.acm.org/2026/dc.html"]]},
  {conf:"vrst", title:"VRST", items:[
    "VRST 2026 (Sendai, Nov 16–18): all deadlines have passed.",
    "VRST 2027 estimate: papers late June, posters and demos early September, conference mid-November.",
    "No Doctoral Consortium in 2026.",
    "Posters and demos: 2 pp. incl. refs, light feedback, decision in about three weeks."],
   src:[["Papers 2026","https://vrst.acm.org/vrst2026/cfp/"],["Posters/Demos 2026","https://vrst.acm.org/vrst2026/call-for-posters-demos/"]]}
];
