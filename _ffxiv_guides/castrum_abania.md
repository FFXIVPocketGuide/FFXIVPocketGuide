---
layout: guide_post
title:  "Castrum Abania"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/dungeons/castrum_abania.jpg"
    - urlSmall: "/assets/img/dungeons/small/castrum_abania.jpg"
patchNumber: 4.0
patchName: "Stormblood"
difficulty: "Normal"
plvl: 69
ilvl: 0
order: 69000
instanceType: "dungeon"
mtqvid: "https://youtu.be/cz4_gJ7Mbd8"
bosses:
  - title: "Magna Roader"
    id: "boss01"
    attacks:
      - title: "Wheel"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This is a heavy hitting tankbuster - heal and cooldown as necessary."
      - title: "Magitek Fire II"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "This attack will drop a circular AoE puddle - stay out of it to avoid damage."
      - title: "Magitek Fire III"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack hits for raid wide damage - healers keep an eye out."
      - title: "Wild Speed"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "This attack makes the boss immune and he will begin to telegraph column AoEs through which he will divebomb."
          - note: "While this is happening, Legion adds will spawn and take control of the turrets on either side of the room."
          - note: "DPS down the adds, take control of one of the turrets and hit the boss to knock him out of this stance."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Wheel"
          - attack: "Magitek Fire II"
          - attack: "Magitek Fire III"
          - attack: "Wild Speed]"
          - attack: "[Repeat]"
        alerts:
          - alert: "This boss has an attack that renders him immune to damage until he is hit with cannon fire from either of the turrets on the edge of the arena - when he begins to divebomb across the arena, DPS the Legion adds that run in and take control of the turrets to stop him."
  - title: "Number XXIV"
    id: "boss02"
    attacks:
      - title: Stab
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This is a heavy hitting tankbuster - heal and cooldown as necessary."
      - title: Gale Cut
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "This attack drops multiple circular AoEs around the arena."
      - title: "Elemental Pillars & Barrier Shift"
        phases:
          - phase: 01
        combo:
          - title: "Elemental Pillars"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
              - tag: "Pillar"
            notes:
              - note: "3 pillars will drop into the arena and spawn a circular AoE aspected to either Fire, Ice, or Lightning."
              - note: "Stepping into these AoEs will provide the player will a buff that aspects them to that particular element."
          - title: "Barrier Shift"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Buff"
            notes:
              - note: "The boss will use barrier shift to give itself an elemental buff - players who do NOT have a matching buff will take damage and be knocked back each time they hit the boss."
              - note: "Players should run into the pillar AoE that <strong>MATCHES</strong> the boss' elemental buff to continue damaging him."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Stab"
          - attack: "Gale Cut"
          - attack: "Elemental Pillars & Barrier Shift]"
          - attack: "[Repeat]"
        alerts:
          - alert: "The primary mechanic in this fight revolves around ensuring you have a buff that matches the buff the boss has - the buff you have is determined by the pillars scattered around the arena."
  - title: "Inferno"
    id: "boss03"
    attacks:
      - title: "Ketu Slash"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This is a heavy hitting tankbuster that should be cooldowned and healed through."
      - title: "Rahu Blaster"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This is a large column AoE - move out of the way to avoid damage."
      - title: "Ketu & Rahu"
        phases:
          - phase: 01
        combo:
          - title: "Ketu"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Circular AoE"
            notes:
              - note: "Cast alongside Rahu, Ketu places a large circular AoE on the arena."
          - title: "Rahu"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Puddle AoE"
            notes:
              - note: "Cast alongside Ketu, one player will be marked for a large red puddle AoE - drop this away from others."
      - title: "Roids"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "The boss will move to the edge of the arena and begin to take medicine, initiating the next phase with more difficult attacks."
      - title: "Empowered Ketu Slash I"
        phases:
          - phase: 02
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "Alongside its original heavy damage, this tankbuster now adds a stacking bleed debuff."
      - title: "Empowered Ketu & Rahu I"
        phases:
          - phase: 02
        combo:
          - title: "Ketu"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Radial AoE"
            notes:
              - note: "Cast alongside Rahu, Ketu is now an arena wide radial AoE - stand between the telegraphs to avoid damage."
          - title: "Rahu"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Proximity AoE"
            notes:
              - note: "Cast alongside Ketu, one player will now be marked for a proximity AoE - drop this away from others and move as far away as possible."
      - title: "Deathclaws & Packer"
        phases:
          - phase: 03
        combo:
          - title: "Deathclaws"
            roles:
              - role: "DPS"
            tags:
              - tag: "Spawn"
              - tag: "Tether"
            notes:
              - note: "2 Deathclaw adds will spawn at the beginning of this phase and tether to 2 players."
              - note: "These adds will stun the players if they reach them - DPS them down as fast as possible."
          - title: "Packer"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Spawn"
            notes:
              - note: "This larger add will also spawn and move slowly towards the machine that animates for the attack Roids."
              - note: "This add should be prioritized as it will reload the machine with new medicine for the boss."
      - title: "Empowered Ketu Slash II"
        phases:
          - phase: 03
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "Alongside its original heavy damage and new bleed, this tankbuster now adds a stacking vulnerability up debuff."
      - title: "Empowered Ketu & Rahu II"
        phases:
          - phase: 03
        combo:
          - title: "Ketu"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Radial AoE"
            notes:
              - note: "Cast alongside Rahu, Ketu is now an arena wide radial AoE - stand between the telegraphs to avoid damage."
          - title: "Rahu"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Proximity AoE"
              - tag: "Puddle AoE"
            notes:
              - note: "Cast alongside Ketu, one player will now be marked for a proximity AoE - drop this away from others and move as far away as possible."
              - note: "Rahu now brings its original mechanic back and marks 2 players for circular AoE puddles - drop these away from others."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Ketu Slash"
          - attack: "Rahu Blaster"
          - attack: "Ketu & Rahu]"
          - attack: "[Repeat]"
          - attack: "Roids"
        alerts:
          - alert: "This phase has a few basic AoEs - dodge as necessary until the boss moves to the edge to take his medicine."
      - phase: 02
        attacks:
          - attack: "[Empowered Ketu Slash I"
          - attack: "Empowered Ketu & Rahu I]"
          - attack: "[Repeat]"
          - attack: "Roids"
        alerts:
          - alert: "Healers be wary of Ketu Slash as the fight progresses - tanks will take stacking debuffs over time."
          - alert: "The first round of Roids alters Ketu & Rahu drastically - instead of 2 circular AoEs, expect a radial arena-wide AoE and a proximity AoE on one player."
      - phase: 03
        attacks:
          - attack: "Deathclaws & Packer"
          - attack: "[Empowered Ketu Slash II"
          - attack: "Empowered Ketu & Rahu II]"
          - attack: "[Repeat]"
        alerts:
          - alert: "Right after Roids, adds will spawn that should be focused down before returning to the boss."
          - alert: "The second round of Roids increases the difficulty of Ketu and Rahu further, making the AoEs more complex with less room for safety."
---
