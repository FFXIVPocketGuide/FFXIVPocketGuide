---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title: "Cape Westwind"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the trial Cape Westwind (Normal) where you'll face off against Rhitahtyn sas Arvina."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/trials/cape_westwind.jpg"
    - urlSmall: "/assets/img/trials/small/cape_westwind.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "A Realm Reborn"
    - term: "Cape Westwind"
    - term: "Rihtahtyn sas Arvina"
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
plvl: 49
#
# Item Level
ilvl: 000
#
# Order (Combine plvl & ilvl - 70310)
order: 49000
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "trial"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/jZ5w0nbYTqo"
#
# Single Boss ==================================================================
#
# Boss Name
#
bossName: "Rhitahtyn sas Arvina"
# Fight Sequence
sequence:
  # Fight Phase
  - phase: 01
    # Attack Script
    attacks:
      - attack: "[Fire Puddle AoE"
      - attack: "Magitek Missile]"
      - attack: "[Repeat]"
      - attack: "Cohort Optio x2"
    # Alerts
    alerts:
      - alert: "This boss is relatively straight forward and will burn down quickly."
      - alert: "Melee attackers should move away from the boss when the text cue appears, indicating that the boss is about to hit the group with Magitek Missile in his immediate vicinity."
#
# Boss Attacks
#
# Paired Attack Tags: Marker
# AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
# Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
# Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
#
# Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
attacks:
  # Regular Attack *************************************************************
  - title: "Fire Puddle AoE"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Puddle AoE"
    notes:
      - note: "The boss will drop random fire Puddle AoEs around the arena - avoid as necessary."
  # Regular Attack *********************************************************
  - title: "Magitek Missile"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Area AoE"
    notes:
      - note: "The boss will target the area he's standing in with a massive AoE - tanks can help players avoid being hit by moving the boss away from the group when the text cue appears on screen that the boss is readying the attack."
  # Regular Attack *********************************************************
  - title: "Cohort Optio"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Spawn"
    notes:
      - note: "At around 2/3's of his HP, the boss will spawn two of these adds at the gate - the off-tank should pick them up and DPS should burn them down."
---
