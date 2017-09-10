---
layout: guide_post
title:  "[Titan] The Navel"
date:   2017-04-09 18:00:14 -0300
description: "Read our Guide on the trial The Navel where you'll face off against Titan."
image:
    - url: "/assets/img/trials/titan.jpg"
    - urlSmall: "/assets/img/trials/small/titan.jpg"
patchNumber: 2.0
patchName: "A Realm Reborn"
difficulty: "Normal"
plvl: 34
ilvl: 0
# Order is a direct combination of plvl+ilvl (e.g. 23+000 = 23000, 70+310 = 70310).
order: 34000
instanceType: "trial"
mtqvid: "https://youtu.be/IJ2o_ytMZuE"
#
# Paired Attack Tags: Marker
# AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
# Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
# Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
#
bossName: "Titan"
# Use "reg", "combo", "vari" to tab attack snippets in.
attacks:
  - title: "Rock Buster"
    phases:
      - phase: 01
    roles:
      - role: "Tank"
    tags:
      - tag: "Cleave"
    notes:
      - note: "Face Titan away from the group at all times."
  - title: "Tumult"
    phases:
      - phase: 01
    roles:
      - role: "Healer"
    tags:
      - tag: "Raid Wide AoE"
    notes:
      - note: "Titan will stomp, hitting the group for moderate raid wide damage - be ready to heal through this."
  - title: "Geocrush"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
      - tag: "Proximity AoE"
    notes:
      - note: "Titan will leap into the air and a red AoE ring will appear at the edge of the arena."
      - note: "The red area indicates the portion of the platform that will be destroyed when Titan lands - players should stand on the inner edge of this area to take minimum damage and avoid being knocked off."
  - title: "Landslide"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Column AoE"
      - tag: "Knockback"
    notes:
      - note: "Titan will target a random player with a column telegraph - players should run out of this as soon as possible to avoid damage and being knocked off the arena."
  - title: "Granite Gaol"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
    notes:
      - note: "A single player will be trapped inside a Granite Gaol - all players must switch to attacking the goal to free the player as soon as possible."
  - title: "Titan's Heart & Earthen Fury"
    phases:
      - phase: 01
    combo:
      - title: "Titan's Heart"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "At 50% of his health, Titan will become invulnerable and his heart will be exposed - this must be destroyed before he casts Earthen Fury or the party will wipe."
      - title: "Earthen Fury"
        roles:
          - role: "Healer"
        tags:
          - tag: "Ultimate"
        notes:
          - note: "This attack does raid wide damage to the group - if Titan's Heart hasn't been destroyed, the party will wipe."
          - note: "Healers be ready to top the group up after this attack hits."
  - title: "Weight of the Land"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Puddle AoE"
    notes:
      - note: "1 or 2 players will be targeted for puddle AoEs - run out of these as soon as possible."
sequence:
  - phase: 01
    attacks:
      - attack: "[Rock Buster"
      - attack: "Tumult"
      - attack: "Geocrush"
      - attack: "Landslide"
      - attack: "Granite Gaol]"
      - attack: "[Repeat]"
      - attack: "Titan's Heart & Earthen Fury"
      - attack: "[Rock Buster"
      - attack: "Tumult"
      - attack: "Geocrush"
      - attack: "Landslide"
      - attack: "Granite Gaol"
      - attack: "Weight of the Land]"
      - attack: "[Repeat]"
    alerts:
      - alert: "Tanks should keep Titan facing away from the group at all times."
      - alert: "The arena will shrink in size each time Titan uses Geocrush - stand just outside the red ring to take minimal damage and avoid being knocked off."
      - alert: "All players should switch to attacking the Granite Gaol that traps a player."
      - alert: "All players should switch to attacking Titan's Heart as soon as it spawns to avoid death during Earthen Fury."
---
