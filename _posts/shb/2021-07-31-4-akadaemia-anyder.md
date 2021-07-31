---
categories: shb
patchNumber: 4
patchName: Shadowbringers
title: Akadaemia Anyder
slug: akadaemia-anyder
difficulty: Normal
plvl: 80
ilvl: 410
date: 2021-07-31
order: 80409
description: "Read our guide for the FFXIV dungeon Akadaemia Anyder, where
  you'll face off against Cladoselache, Doliodus, Marquis Morbol, and Guardian
  Force: Quetzalcoatl."
terms:
  - term: dungeon
  - term: shadowbringers
  - term: shb
  - term: Cladoselache
  - term: Doliodus
  - term: Marquis Morbol
  - term: Guardian Force Quetzalcoatl
instanceType: dungeon
mtqvid: https://youtu.be/I3GrCd_jNlA
bosses:
  - title: Cladoselache and Dodiolus
    id: boss01
    sequence:
      - phase: 1
        attacks:
          - attack: Protolithic Puncture
          - attack: Tidal Guillotine (on land)
          - attack: "[repeat]"
        alerts:
          - alert: Tanks should keep the boss facing away from the group and healers should
              watch out for Protolithic Puncture, the tankbuster.
      - phase: 2
        alerts:
          - alert: A second red-colored shark, Doliodus, will join the fight. The bosses
              will alternate being on the arena and in the water. Players should
              pay attention to their locations.
        attacks:
          - attack: Pelagic Cleaver (on land)
          - attack: Tidal Guillotine (in water)
          - attack: Protolithic Puncture
          - attack: Tidal Guillotine (on land)
          - attack: Aquatic Lance
          - attack: Pelagic Cleaver (in water)
          - attack: "[repeat]"
      - phase: 3
        alerts:
          - alert: When one of the two sharks dies, the remaining one will cast Marine
              Mayhem and continue its pattern.
        attacks:
          - attack: Marine Mayhem
          - attack: Boss Specific Attacks
          - attack: "[repeat]"
    attacks:
      - type: regular
        title: Protolithic Puncture
        roles:
          - Tank
          - Healer
        tags:
          - Tankbuster
        notes:
          - note: Heal and cooldown as necessary.
        phases:
          - phase: 1
      - type: variation
        title: Tidal Guillotine
        phases:
          - phase: 1
          - phase: 2
        variation:
          - title: Tidal Guillotine (on land)
            roles:
              - Everyone
            tags:
              - Point Blank AoE
            notes:
              - note: This attack will hit in a large circle around Cladoselache - move away to
                  avoid it.
          - title: Tidal Guillotine (in water)
            roles:
              - Everyone
            tags:
              - Circular AoE
            notes:
              - note: When Cladoselache is in the water, Tidal Guillotine changes.
              - note: Cladoselache will stop swimming and jump out of the water into a large
                  circular AoE directly in front of where it stopped. Avoid as
                  necessary.
      - type: variation
        title: Pelagic Cleaver
        phases:
          - phase: 2
        variation:
          - title: Pelagic Cleaver (on land)
            roles:
              - Everyone
            tags:
              - Cone AoE
            notes:
              - note: Doliodus will pick a direction and attack in a broad cone.
          - title: Pelagic Cleaver (in water)
            roles:
              - Everyone
            tags:
              - Cone AoE
            notes:
              - note: When Doliodus is in the water, Pelagic Cleaver is larger.
              - note: Doliodus will stop swimming and attack most of the arena with a frontal
                  cone AoE - move to the sides to avoid it.
      - type: regular
        title: Aquatic Lance
        roles:
          - Everyone
        tags:
          - Puddle AoE
          - Marker
        notes:
          - note: One player will be marked with a blue marker and a Puddle AoE will be
              dropped on their location. Avoid them, and if you're targeted,
              place the puddle out of the way.
        phases:
          - phase: 3
      - type: regular
        title: Marine Mayhem
        roles:
          - Healer
        tags:
          - Raid Wide AoE
        notes:
          - note: This attack will continue to hit the group until the final boss is dead.
              Healers need to pay attention each time it hits.
        phases:
          - phase: 3
layout: guide_post
cms: netlify-cms
---
