---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title:  "The Royal City of Rabanastre"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the 24 man raid The Royal City of Rabanastre (Normal) where you'll face off against Mateus the Corrupt, Hashmal, Bringer of Order, Rofocale, and Argath Thadalfus."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/raids/rabanastre.jpg"
    - urlSmall: "/assets/img/raids/small/rabanastre.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "The Royal City of Rabanastre"
    - term: "Mateus the Corrupt"
    - term: "Hashmal, Bringer of Order"
    - term: "Rofocale"
    - term: "Argath Thadalfus"
    - term: "Normal"
#
# Patch Information (Number & Name)
patchNumber: 4.1
patchName: "The Legend Returns"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Normal"
#
# Player Level
plvl: 70
#
# Item Level
ilvl: 305
#
# Order (Combine plvl & ilvl - 70310)
order: 70305
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "raid"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/Zi99W7ejtz8"
#
# Partner Links
partners:
    - partner-title: "Best in Slot"
      partner-link: "https://www.bestinslot.co/ffxiv-the-royal-city-of-rabanastre-guide/"
#
# Paired Attack Tags: Marker
# AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
# Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
# Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
#
mechanics:
  - title: ""
    steps:
      - step: 01
        notes:
          - note: ""
bosses:
  - title: "Mateus the Corrupt"
    # Boss ID is required for sidebar menu linking purposes (e.g. boss01, boss02, boss03, etc.).
    id: "boss01"
    # Use "reg", "combo", "vari" to tab attack snippets in.
    attacks:
      - title: "Ice Azers"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
          - tag: "Point Blank AoE"
        notes:
          - note: "These adds should be destroyed as soon as possible - melee DPS and tanks should be wary that they explode with a point blank AoE upon death."
      - title: "Unbind & Rebind"
        phases:
          - phase: 01
        # These notes should be used to describe specific steps required to handle the combo as a whole.
        notes:
          - note: ""
        combo:
          - title: ""
            roles:
              - role: ""
            tags:
              - tag: ""
            notes:
              - note: ""
    sequence:
      - phase: 01
        attacks:
          - attack: "Ice Azers"
          - attack: "Unbind & Rebind"
          - attack: "Dualcast & Blizzard IV"
        alerts:
          - alert: ""
        mechanics:
          - title: ""
            notes:
              - note: ""
      - phase: 02
        attacks:
          - attack: "Breathless"
          - attack: "Flume Toads"
          - attack: "Ice Shards"
          - attack: "Flume Toads"
        alerts:
          - alert: ""
        mechanics:
          - title: ""
            notes:
              - note: ""
      - phase: 03
        attacks:
          - attack: "Blizzard Spheres"
          - attack: "Azure Guards"
          - attack: "Ice Azers"
          - attack: "Frostwave"
          - attack: "Unbind & Rebind"
          - attack: "Dualcast & Blizzard IV"
          - attack: "Puddle AoEs"
        alerts:
          - alert: ""
        mechanics:
          - title: ""
            notes:
              - note: ""
  - title: "Hashmal, Bringer of Order"
    # Boss ID is required for sidebar menu linking purposes (e.g. boss01, boss02, boss03, etc.).
    id: "boss02"
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
  - title: "Rofocale"
    # Boss ID is required for sidebar menu linking purposes (e.g. boss01, boss02, boss03, etc.).
    id: "boss03"
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
  - title: "Argath Thadalfus"
    # Boss ID is required for sidebar menu linking purposes (e.g. boss01, boss02, boss03, etc.).
    id: "boss04"
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

***
Mateus
***

Mateus The Corrupt

Ice Azer Adds - explode in circular AoE when killed

Unbind - Mechanic
Spawns ice spiral around the arena, orbs, aqua sphere adds, water spouts, and Skating Fiend add
all in a pattern - each alliance should burn down an aqua sphere
as skating lady skates around the spiral, she hits the objects in her path and causes them to do various things
small water orbs turn into Ice Slave adds - orbs can be popped first to avoid these - popping them does mild damage and gives the player "drenched" which makes them susceptible to being frozen by other mechanics
if she hits a water spout, it turns into a Blizzard III add that will tether to players - kill this asap or the tethered players will be turned into snowmen - spouts can be plugged up before she hits them by having 3 players stand on them at the same Time
if she skates into an aqua sphere, it will turn into an ice block that increases the damage from blizzard IV
when she reaches the end of the spiral, the boss casts rebind, which removes all elements

dualcast & blizzard IV - multiple proximity AoEs - run to the safe zones!

Underwater phase

Breathless debuff & Flume Toad adds
breathless stacks over time and will kill you at 10 stacks - kill toads to generate air bubbles that remove the status

Ice Shards - column aoes on many players
this column CAN destroy the bubbles, so players who are targeted by this should avoid placing a bubble between them and the ice shard targetting them

more toads

Phase 3

everyone has drenched now

Blizzard Spheres tether and target players with long column AoEs that WILL freeze anyone who is by them

mateus goes to the middle and becomes invulnerable

azure guard adds - each alliance should take one and separate it from the other groups - kill these before the duty guage (Mateus' Aether) reaches 100.

Watch out for more Ice Azers

frostwave - ultimate - shield and heal as necessary (duty guage at 100 = wipe)

unbind again

dualcast * blizzard IV again

puddle aoes on players

puddle aoes around the arena that affect players with Dropsie - this will persist fter the fight, so be careful.

***
Trash
***

watch out for the chocobo meteor!

***
Tower Guy
***

Hashmal, Bringer of Order

place markers for each alliance in the NW, NE, S - these are for sand orbs

Quake IV - raid wide aoe

Jagged Edge - red marker, targets multiple players with 3 successive aoes - run out of the telegraph to avoid damage - be careful where you're dropping these as you move

Control Tower & Sanction - column AoE and raid wide aoe - control tower spawns 1 or 2 towers and sanction slices them, causing them to fall in one direction - stay out of their way or you will die

Extreme Edge - Area AoE - boss will disappear to an edge of the arena and ONE of his arms will glow - you want to run to the OPPOSITE side of the arena before he dashes across

Rockcutter - Tankbuster

Earth Hammer - 1 or 3 proximity aoes - the attack has a REALLY short telegraph, look for the floating rocks in the sky and run to the farthest Edge

Command Tower - Mechanic, Add, Cone AoE, knockback
large tower in the middle, mild raid wide damage, needs to be destroyed before mana gauge reaches 100

jagged Edge

Sand Spheres & To Dust
alliances should splie up to kill these ASAP - THEY HAVE TO DIE BEFORE THEY FINISH THEIR CAST OR YOU wipe

Falling Boulder - stacks

Landwaster - ultimate - 100 mana = wipe

control towers

jagged Edge

extreme Edge

earth hammers

Pennantstone Golems x2
OTs should pick these up and they should be DPSd down as soon as fucking possible - the grow and do more damage with each attack

Submission Tower - alliances should go to their designated area to avoid 3x column attacks (N, SW, SE)

Sand Spheres & To Dust

falling Boulder

repeat basics

***
Chariot
***

Rofocale

Crush Helm - 4 attacks that apply physical vuln up debuffs followed by a massive tankbuster

Chariot - targets one player with a column aoe where the boss will rush down the column - the player targeted by this should run close to the boss to keep him from moving around too much on the rest of the group

Cry of Victory - area AoE - covers part of the arena in 180 degs, run behind the boss the avoid damage and vuln up debuffs

Crush Weapon - targets random players with puddle AoEs - stay out of these

Trample - knockback, firgure 8 aoe - get out of the blue telegraph - the small circular areas inside the 8 shape are safe zones too!

Maverick - boss disappears and 5 clones appear covering the arena in column AoEs tht only leave two small safe zones - use sprint

Repeat until boss moves to middle

3x Archaeodemons - adds confined within walls, alliances should group together and each take an add - boss will be charging around in a circle while this is happening, avoid AoEs and the boss as necessary. Kill these before the Aetherial Acceleration Duty Guage hits 100



***
Rayman
***
