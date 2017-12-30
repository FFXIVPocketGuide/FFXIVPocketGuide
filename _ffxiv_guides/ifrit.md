---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title: "The Bowl of Embers"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the trial The Bowl of Embers (Normal) where you'll face off against Ifrit."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/trials/ifrit.jpg"
    - urlSmall: "/assets/img/trials/small/ifrit.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "A Realm Reborn"
    - term: "Ifrit"
    - term: "The Bowl of Embers"
    - term: "Normal"
#
# Patch Information (Number & Name)
patchNumber: 2.0
patchName: "A Realm Reborn"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Normal"
#
# Player Level
plvl: 20
#
# Item Level
ilvl: 000
#
# Order (Combine plvl & ilvl - 70310)
order: 20000
#
# Orchestrion Roll
orchestrion: "Primal Judgement"
#
# Instance Type
instanceType: "trial"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/N9znuSkZ89E"
#
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
