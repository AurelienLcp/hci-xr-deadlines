/* =====================================================================
   Conference deadlines data — edit this file to update the page.

   Dates use the ISO format "YYYY-MM-DD" (Anywhere on Earth).
   st (status):  "ok"   = confirmed from the official call
                 "est"  = estimated from the previous edition
                 "roll" = rolling submissions, no deadline
   track:        "papers" | "posters" | "demos" | "dc" | "ws" | "sv"
   abs:          mandatory abstract deadline (optional)
   notifLbl:     optional label for notif (default "Notification" / "Final decision")
   notif / cr:   final decision and camera-ready / publication-ready dates (optional)
   steps:        intermediate milestones, e.g. [{d:"2026-11-05", lbl:"Reviews released"},
                 {d:"2026-12-03", lbl:"Resubmission due", act:true}]  act = author action
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
  {id:"vr27p", conf:"ieeevr", ed:"IEEE VR 2027", track:"papers", name:"Papers (TVCG + conference)", abs:"2026-08-24", sub:"2026-08-31", notif:"2027-01-07", cr:"2027-01-12",
   steps:[{d:"2026-11-30", lbl:"Initial decision"}, {d:"2026-12-31", lbl:"Revision due", act:true}], st:"ok",
   fmt:"4–9 pp. + 2 pp. refs, VGTC format, double-blind. Initial decision Nov 30, revision due Dec 31."},
  {id:"vr27po", conf:"ieeevr", ed:"IEEE VR 2027", track:"posters", name:"Posters", abs:"2026-12-02", sub:"2026-12-07", notif:"2027-01-06", cr:"2027-01-12", st:"ok",
   fmt:"2-page extended abstract incl. refs, anonymized. Title and abstract due Dec 2."},
  {id:"vr27d", conf:"ieeevr", ed:"IEEE VR 2027", track:"demos", name:"Research demos", sub:"2026-12-07", notif:"2027-01-07", cr:"2027-01-12", st:"ok",
   fmt:"2-page abstract + layout schematic + 1–2 min video."},
  {id:"vr27dc", conf:"ieeevr", ed:"IEEE VR 2027", track:"dc", name:"Doctoral Consortium", sub:"2026-12-14", notif:"2027-01-18", cr:"2027-01-27", st:"est",
   fmt:"2027 call not yet published. In 2026: submission Dec 15, notification Jan 19."},
  {id:"vr28p", conf:"ieeevr", ed:"IEEE VR 2028", track:"papers", name:"Papers", abs:"2027-08-23", sub:"2027-08-30", notif:"2028-01-06", cr:"2028-01-11",
   steps:[{d:"2027-11-29", lbl:"Initial decision"}, {d:"2027-12-30", lbl:"Revision due", act:true}], st:"est",
   fmt:"Estimated from the 2027 schedule (abstract one week before)."},
  {id:"vr27sv", conf:"ieeevr", ed:"IEEE VR 2027", track:"sv", name:"Student volunteers", sub:"2027-01-09", notif:"2027-01-30", st:"ok",
   fmt:"Applications open Dec 1. About 25–30 h of work + orientation on Feb 26. Free registration, which cannot be used to register a paper."},
  {id:"vr27wsp", conf:"ieeevr", ed:"IEEE VR 2027", track:"ws", name:"Workshop proposals (organisers)", sub:"2026-09-28", notif:"2026-10-12", st:"ok",
   fmt:"Proposal and the workshop's call for papers are due together. Workshops run Feb 27–28, 2027."},

  // CHI
  {id:"chi27p", conf:"chi", ed:"CHI 2027", track:"papers", name:"Papers", sub:"2026-09-10", notif:"2026-12-17", cr:"2027-02-18",
   steps:[{d:"2026-10-26", lbl:"Desk-reject notices (approx.)"}, {d:"2026-11-05", lbl:"Reviews released"}, {d:"2026-12-03", lbl:"Resubmission due", act:true}, {d:"2027-01-07", lbl:"E-rights form", act:true}, {d:"2027-01-14", lbl:"TAPS upload", act:true}, {d:"2027-03-04", lbl:"Registration + presentation video", act:true}], st:"ok",
   fmt:"5,000–8,000 words encouraged; under 5,000 counts as a short paper. No separate abstract deadline."},
  {id:"chi27po", conf:"chi", ed:"CHI 2027", track:"posters", name:"Posters", sub:"2027-01-21", notif:"2027-02-18", cr:"2027-03-18",
   steps:[{d:"2027-02-25", lbl:"E-rights form", act:true}, {d:"2027-03-04", lbl:"TAPS upload", act:true}], st:"ok",
   fmt:"Up to 4 pp. single-column excl. refs + A0 poster, anonymized. Non-archival: can be reused in a later paper."},
  {id:"chi27d", conf:"chi", ed:"CHI 2027", track:"demos", name:"Interactive Demos", sub:"2027-01-21", notif:"2027-02-18", cr:"2027-03-18",
   steps:[{d:"2027-02-25", lbl:"E-rights form", act:true}, {d:"2027-03-04", lbl:"TAPS upload", act:true}], st:"ok",
   fmt:"Up to 6 pp. single-column + video ≤ 5 min + still image, not anonymized. Authors of accepted papers must submit here too."},
  {id:"chi27src", conf:"chi", ed:"CHI 2027", track:"dc", name:"Student Research Competition", sub:"2027-01-21", notif:"2027-02-18", cr:"2027-03-18",
   steps:[{d:"2027-02-25", lbl:"E-rights form", act:true}, {d:"2027-03-04", lbl:"TAPS upload", act:true}], st:"ok",
   fmt:"No Doctoral Consortium at CHI 2027. SRC: up to 5 pp.; graduate students submit single-author (no advisor), not anonymized."},
  {id:"chi28p", conf:"chi", ed:"CHI 2028", track:"papers", name:"Papers", sub:"2027-09-09", notif:"2027-12-16",
   steps:[{d:"2027-11-04", lbl:"Reviews released"}, {d:"2027-12-02", lbl:"Resubmission due", act:true}], st:"est",
   fmt:"Estimated: the CHI papers deadline has fallen between Sep 10 and Sep 14 in recent editions."},
  {id:"chi27sv", conf:"chi", ed:"CHI 2027", track:"sv", name:"Student volunteers (lottery)", sub:"2027-01-22", notif:"2027-01-25", st:"est",
   fmt:"Lottery on new.chisv.org. In 2026: opened Oct 15, closed Jan 23, results Jan 26; accepted volunteers confirm within two weeks."},
  {id:"chi27wsp", conf:"chi", ed:"CHI 2027", track:"ws", name:"Workshop proposals (organisers)", sub:"2026-10-01", notif:"2026-11-19", cr:"2026-12-17",
   steps:[{d:"2026-11-26", lbl:"E-rights form", act:true}, {d:"2026-12-03", lbl:"TAPS upload", act:true}], st:"ok",
   fmt:"Workshop jurors apply by Sep 28. The call for participation and the list of accepted workshops go out Dec 17."},

  // ICMI
  {id:"icmi27p", conf:"icmi", ed:"ICMI 2027", track:"papers", name:"Long & short papers", abs:"2027-04-12", sub:"2027-04-19", notif:"2027-07-01", cr:"2027-07-22",
   steps:[{d:"2027-06-07", lbl:"Rebuttal opens"}, {d:"2027-06-12", lbl:"Rebuttal due", act:true}], st:"est",
   fmt:"In 2026: abstract Apr 13, paper Apr 23 (after extension), rebuttal in early June."},
  {id:"icmi27bs", conf:"icmi", ed:"ICMI 2027", track:"papers", name:"Blue Sky papers", sub:"2027-05-07", notif:"2027-06-22", cr:"2027-07-09", st:"est", sec:true,
   fmt:"Vision papers. In 2026: May 8."},
  {id:"icmi27dc", conf:"icmi", ed:"ICMI 2027", track:"dc", name:"Doctoral Consortium", sub:"2027-05-19", notif:"2027-06-04", cr:"2027-07-06", st:"est",
   fmt:"In 2026: May 20, notification June 5."},
  {id:"icmi27lbr", conf:"icmi", ed:"ICMI 2027", track:"posters", name:"Late-Breaking Results", sub:"2027-06-20", notif:"2027-07-14", cr:"2027-08-01", st:"est",
   fmt:"In 2026: June 21, notification July 15."},
  {id:"icmi27d", conf:"icmi", ed:"ICMI 2027", track:"demos", name:"Demos & exhibits", sub:"2027-06-20", notif:"2027-07-14", cr:"2027-08-01", st:"est",
   fmt:"In 2026: June 21, notification July 15."},
  {id:"icmi27wsp", conf:"icmi", ed:"ICMI 2027", track:"ws", name:"Workshop proposals (organisers)", sub:"2027-01-22", notif:"2027-02-12", st:"est",
   fmt:"In 2026: proposals Jan 23 (after extension), notification Feb 13."},

  // ISMAR
  {id:"ismar27p", conf:"ismar", ed:"ISMAR 2027", track:"papers", name:"Papers", abs:"2027-03-08", sub:"2027-03-15", notif:"2027-06-21", cr:"2027-07-20",
   steps:[{d:"2027-05-23", lbl:"Reviews released"}, {d:"2027-05-30", lbl:"Rebuttal due", act:true}, {d:"2027-09-03", lbl:"Presentation video", act:true}], st:"est",
   fmt:"In 2026: abstract Mar 9, paper Mar 16 (Bari, Oct 5–9)."},
  {id:"ismar27dc", conf:"ismar", ed:"ISMAR 2027", track:"dc", name:"Doctoral Consortium", sub:"2027-06-02", notif:"2027-06-30", cr:"2027-07-23",
   steps:[{d:"2027-07-07", lbl:"Confirm attendance", act:true}], st:"est",
   fmt:"Position paper up to 2 pp. (VGTC). In 2026: June 3."},
  {id:"ismar27po", conf:"ismar", ed:"ISMAR 2027", track:"posters", name:"Posters", sub:"2027-06-29", abs:"2027-06-24", notif:"2027-07-29", cr:"2027-08-04", st:"est",
   fmt:"In 2026: title and abstract June 25, paper June 30."},
  {id:"ismar27d", conf:"ismar", ed:"ISMAR 2027", track:"demos", name:"Demos", sub:"2027-07-16", notif:"2027-07-28", cr:"2027-08-04", st:"est",
   fmt:"In 2026: July 17."},
  {id:"ismar27sv", conf:"ismar", ed:"ISMAR 2027", track:"sv", name:"Student volunteers", sub:"2027-07-14", notif:"2027-07-28", st:"est",
   fmt:"In 2026: opened June 8, closed July 15, notification July 29. About 20 h; PhD students prioritised."},
  {id:"ismar27wsp", conf:"ismar", ed:"ISMAR 2027", track:"ws", name:"Workshop proposals (organisers)", sub:"2027-05-21", notif:"2027-06-04", st:"est",
   fmt:"In 2026: proposals May 22, notification June 5."},

  // CSCW
  {id:"cscwp", conf:"cscw", ed:"CSCW 2027+", track:"papers", name:"Papers (rolling)", st:"roll",
   fmt:"No deadline: submit to PACM HCI/CSCW (or ToCHI) whenever the paper is ready. Target ~4 months of review; presented at the next CSCW after acceptance."},
  {id:"cscw27po", conf:"cscw", ed:"CSCW 2027", track:"posters", name:"Posters", sub:"2027-05-14", notif:"2027-06-18", cr:"2027-07-09", st:"est",
   fmt:"4–6 pp. single-column, not anonymized. In 2026: May 15."},
  {id:"cscw27d", conf:"cscw", ed:"CSCW 2027", track:"demos", name:"Demonstrations", sub:"2027-05-14", notif:"2027-06-18", cr:"2027-07-09", st:"est",
   fmt:"4-page extended abstract + 1-page logistics summary. In 2026: May 15."},
  {id:"cscw27dc", conf:"cscw", ed:"CSCW 2027", track:"dc", name:"Doctoral Consortium", sub:"2027-05-14", notif:"2027-06-11", cr:"2027-06-25", st:"est",
   fmt:"4 pp. single-author + 2-page CV + advisor letter. In 2026: May 15."},
  {id:"cscw27sv", conf:"cscw", ed:"CSCW 2027", track:"sv", name:"Student volunteers (lottery)", sub:"2027-05-31", notif:"2027-06-14", st:"est",
   fmt:"Lottery on new.chisv.org. In 2026: opened Mar 18, closed June 1, notification June 15. 20 h; travel and housing not covered."},
  {id:"cscw27wsp", conf:"cscw", ed:"CSCW 2027", track:"ws", name:"Workshop proposals (organisers)", sub:"2027-04-09", notif:"2027-05-04", cr:"2027-05-20", st:"est",
   fmt:"In 2026: proposals Apr 10, notification May 5, web description and camera-ready May 21."},

  // VRST
  {id:"vrst26p", conf:"vrst", ed:"VRST 2026", track:"papers", name:"Papers", abs:"2026-06-17", sub:"2026-06-24", notif:"2026-09-13", cr:"2026-09-25",
   steps:[{d:"2026-08-28", lbl:"Initial decision"}, {d:"2026-09-06", lbl:"Revision due", act:true}], st:"ok",
   fmt:"2026 cycle closed."},
  {id:"vrst26pd", conf:"vrst", ed:"VRST 2026", track:"posters", name:"Posters", sub:"2026-09-04", notif:"2026-09-22", cr:"2026-09-25", st:"ok",
   fmt:"2026 cycle closed."},
  {id:"vrst26sv", conf:"vrst", ed:"VRST 2026", track:"sv", name:"Student volunteers", sub:"2026-09-30", notif:"2026-10-05", st:"ok",
   fmt:"20–25 h, arrive in Sendai by Nov 15. Free registration, meals and social events."},
  {id:"vrst27p", conf:"vrst", ed:"VRST 2027", track:"papers", name:"Papers", abs:"2027-06-16", sub:"2027-06-23", notif:"2027-09-12", cr:"2027-09-24",
   steps:[{d:"2027-08-27", lbl:"Initial decision"}, {d:"2027-09-05", lbl:"Revision due", act:true}], st:"est",
   fmt:"4–9 pp. ACM double-column, double-blind. In 2026: abstract June 17, paper June 24."},
  {id:"vrst27po", conf:"vrst", ed:"VRST 2027", track:"posters", name:"Posters", sub:"2027-09-03", notif:"2027-09-21", cr:"2027-09-24", st:"est",
   fmt:"2 pp. incl. refs, not anonymized. In 2026: Sep 4."},
  {id:"vrst27d", conf:"vrst", ed:"VRST 2027", track:"demos", name:"Demos", sub:"2027-09-03", notif:"2027-09-21", cr:"2027-09-24", st:"est",
   fmt:"2 pp. incl. refs. In 2026: Sep 4 (VRST has no DC)."},
  {id:"vrst27sv", conf:"vrst", ed:"VRST 2027", track:"sv", name:"Student volunteers", sub:"2027-09-29", notif:"2027-10-04", st:"est",
   fmt:"In 2026: Sep 30, notification Oct 5."}
];

window.NOTES = [
  {conf:"ieeevr", title:"IEEE VR 2027 · Melbourne", items:[
    "Single review cycle: a paper is accepted as TVCG, accepted as conference paper, or rejected.",
    "Rejected papers are no longer moved to posters automatically; submit to the posters track (Dec 7) instead.",
    "All senior authors must volunteer as reviewers, or risk desk rejection.",
    "Workshop proposals close Sep 28, 2026; results Oct 12.",
    "Student volunteers: the free registration cannot be used to register an accepted paper."],
   src:[["Papers","https://ieeevr.org/2027/contribute/papers/"],["Posters","https://ieeevr.org/2027/contribute/posters/"],["Demos","https://ieeevr.org/2027/contribute/demos/"],["DC 2026","http://ieeevr.org/2026/contribute/doctoral-consortium/"],["SVs","https://ieeevr.org/2027/contribute/student-volunteers/"],["Workshops","https://ieeevr.org/2027/contribute/workshops/"]]},
  {conf:"chi", title:"CHI 2027 · Pittsburgh", items:[
    "Papers closed Sep 10, 2026; reviews Nov 5, revise & resubmit Dec 3, decisions Dec 17.",
    "Posters, demos and SRC are all due Jan 21, 2027. A given piece of work can go to only one of them.",
    "No Doctoral Consortium in 2027. The seven categories are Papers, Posters, Interactive Demos, Panels, Workshops, Meet-ups and SRC.",
    "Workshop proposals close Oct 1, 2026; accepted workshops are announced Dec 17.",
    "Posters: four authors must sign up as reviewers.",
    "Student volunteers are picked by lottery on new.chisv.org; the 2027 call is not out yet."],
   src:[["Papers","https://chi2027.acm.org/authors/papers/"],["Posters","https://chi2027.acm.org/authors/posters/"],["Demos","https://chi2027.acm.org/authors/interactive-demos/"],["SRC","https://chi2027.acm.org/authors/student-research-competition/"],["SVs 2026","https://chi2026.acm.org/2025/10/16/call-for-svs/"],["Workshops","https://chi2027.acm.org/authors/workshops/"]]},
  {conf:"icmi", title:"ICMI 2027", items:[
    "2027 call not yet published; dates estimated from ICMI 2026 (Naples, Oct 5–9).",
    "Some 2026 deadlines were 23:59 PDT rather than AoE; check the 2027 call.",
    "Long and short papers share one deadline, with the abstract about ten days earlier.",
    "No student volunteer call was published on the ICMI 2026 site.",
    "Workshop proposals in 2026: Jan 23 (after extension), notification Feb 13."],
   src:[["2026 dates","https://icmi.acm.org/2026/important-dates/"],["Workshops 2026","https://icmi.acm.org/2026/workshops/"]]},
  {conf:"ismar", title:"ISMAR 2027", items:[
    "2027 call not yet published; dates estimated from ISMAR 2026 (Bari, Oct 5–9).",
    "Papers are due in March, about six months before the conference: the earliest deadline of the autumn venues.",
    "2026 sequence: DC in early June, posters in late June, demos in mid-July.",
    "Student volunteers in 2026: applications June 8 – July 15, about 20 h of work, registration waived.",
    "Workshop proposals in 2026: May 22, notification June 5."],
   src:[["ISMAR 2026","https://www.ieeeismar.net/2026/"],["DC 2026","https://www.ieeeismar.net/2026/call-for-doctoral-consortium/"],["SVs 2026","https://www.ieeeismar.net/2026/call-for-student-volunteers/"],["Workshops 2026","https://www.ieeeismar.net/2026/call-for-workshops/"]]},
  {conf:"cscw", title:"CSCW 2027 and beyond", items:[
    "Papers move to rolling submission: PACM HCI/CSCW, or ToCHI if in CSCW scope.",
    "No deadline for a given edition: a paper accepted after the program is set is presented the following year.",
    "Posters, demos and DC keep a fixed deadline (May 15 in 2026), estimated here as mid-May 2027.",
    "CSCW 2027 venue and dates not announced yet.",
    "Student volunteers: lottery on new.chisv.org, 20 h of work; travel, housing and meals at your own cost (lunch provided).",
    "Workshop proposals in 2026: Apr 10, notification May 5."],
   src:[["CSCW 2027+","https://cscw.acm.org/rolling.html"],["Posters 2026","https://cscw.acm.org/2026/posters.html"],["DC 2026","https://cscw.acm.org/2026/dc.html"],["SVs 2026","https://cscw.acm.org/2026/sv.html"],["Workshops 2026","https://cscw.acm.org/2026/workshops.html"]]},
  {conf:"vrst", title:"VRST", items:[
    "VRST 2026 (Sendai, Nov 16–18): all deadlines have passed.",
    "VRST 2027 estimate: papers late June, posters and demos early September, conference mid-November.",
    "No Doctoral Consortium in 2026.",
    "Posters and demos: 2 pp. incl. refs, light feedback, decision in about three weeks.",
    "VRST 2026 student volunteer applications close Sep 30, 2026.",
    "VRST has no workshop track."],
   src:[["Papers 2026","https://vrst.acm.org/vrst2026/cfp/"],["Posters/Demos 2026","https://vrst.acm.org/vrst2026/call-for-posters-demos/"],["SVs 2026","https://vrst.acm.org/vrst2026/call-for-student-volunteers/"]]}
];
