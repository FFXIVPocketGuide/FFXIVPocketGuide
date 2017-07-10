---
layout: guide_post
title:  "Temple of the Fist"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/dungeons/temple_fist.jpg"
    - urlSmall: "/assets/img/dungeons/small/temple_fist.jpg"
patchNumber: 4.0
patchName: "Stormblood"
plvl: "70"
instanceType: "dungeon"
mtqvid: ""
bosses:
  - title: "Lugat"
    attacks:
      - title: "Amorphous Applause"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Area AoE"
        notes:
          - note: "This attack targets a single player and hits with a 180 degree area AoE - run behind the boss to avoid taking damage."
    sequence:
      - phase: 01
        attacks:
          - attack: "Amorphous Applause"
          - attack: "Hydroball"
          - attack: "Sea Swallows All & Concussive Oscillation"
          - attack: "Overtow"
        alerts:
          - alert: "This boss has a few attacks that will push and pull players - be ready to move out of AoEs."
---
