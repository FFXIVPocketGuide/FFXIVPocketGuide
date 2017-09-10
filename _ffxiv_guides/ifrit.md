---
layout: guide_post
title:  "[Ifrit] The Bowl of Embers"
date:   2017-04-09 18:00:14 -0300
description: "Read our Guide on the trial The Bowl of Embers where you'll face off against Ifrit."
image:
    - url: "/assets/img/trials/ifrit.jpg"
    - urlSmall: "/assets/img/trials/small/ifrit.jpg"
patchNumber: 2.0
patchName: "A Realm Reborn"
difficulty: "Normal"
plvl: 20
ilvl: 0
# Order is a direct combination of plvl+ilvl (e.g. 23+000 = 23000, 70+310 = 70310).
order: 20000
instanceType: "trial"
mtqvid: "https://youtu.be/N9znuSkZ89E"
#
# Paired Attack Tags: Marker
# AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
# Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
# Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
#
bossName: "Ifrit"
# Use "reg", "combo", "vari" to tab attack snippets in.
attacks:
  - title: "Incinerate"
    phases:
      - phase: 01
    roles:
      - role: "Tank"
    tags:
      - tag: "Cleave"
    notes:
      - note: "Tanks should face Ifrit away from the group at all times to avoid hitting them with this wide cleave."
  - title: "Eruption"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Puddle AoE"
    notes:
      - note: "A single random player will be targeted by this attack - it is indicated by glowing cracks below their feet - run out of the affected area as soon as possible."
  - title: "Infernal Nail & Hellfire"
    phases:
      - phase: 01
    combo:
      - title: "Infernal Nail"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "Players need to switch to attacking the nail immediately after it spawns - if it is left alive when Ifrit casts Hellfire, the party will wipe."
      - title: "Hellfire"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Ultimate"
        notes:
          - note: "Ifrit will leap into the air and hit the entire arena with a fire AoE - kill the Infernal Nail to avoid death and heal/cooldown as necessary."
  - title: "Radiant Plume"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Area AoE"
    notes:
      - note: "This attack has two patterns that place circular AoEs on large portions of the arena."
      - note: "The first pattern places them at the center of the arena, while the second pattern places them around the outer edge - avoid as necessary."
sequence:
  - phase: 01
    attacks:
      - attack: "[Incinerate"
      - attack: "Eruption]"
      - attack: "[Repeat]"
      - attack: "Infernal Nail & Hellfire"
      - attack: "[Incinerate"
      - attack: "Eruption"
      - attack: "Radiant Plume]"
      - attack: "[Repeat]"
    alerts:
      - alert: "Tanks should keep Ifrit facing away from the group at all times."
      - alert: "All players should switch to attacking the Infernal Nail as soon as it spawns to avoid death during Hellfire."
---
