---
layout: guide_post
title:  "Guide Name"
date:   2017-04-09 18:00:14 -0300
description: "Read our Guide on the 8 man raid Omega: Deltascape V1.0 where you'll face off against Alte Roite."
image:
    - url: "/assets/img/dungeons/.jpg"
    - urlSmall: "/assets/img/dungeons/small/.jpg"
patchNumber: 0.0
patchName: "Sample Name"
difficulty: "Normal"
plvl: 00
ilvl: 000
# Order is a direct combination of plvl+ilvl (e.g. 23+000 = 23000, 70+310 = 70310).
order: 00000
instanceType: "trial/raid"
mtqvid: "YouTube URL"
#
# Paired Attack Tags: Marker
# AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
# Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
# Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
#
bossName: ""
# Use "reg", "combo", "vari" to tab attack snippets in.
attacks:
  - title: "Attack Name"
    phases:
      - phase: 01
    roles:
      - role: ""
    dutyActions:
      - action: ""
    tags:
      - tag: ""
    notes:
      - note: ""
sequence:
  - phase: 01
    attacks:
      - attack: ""
        # Include dutyActions: true only if the attack requires the use of a Duty Action.
        dutyActions: true
    alerts:
      - alert: ""
    mechanics:
      - title: ""
        notes:
          - note: ""
---
