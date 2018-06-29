---
title: Sample Guide
layout: guide_post_new
categories: A Realm Reborn
patchNumber: 4.0
difficulty: Savage
orchestrion: TBD
instanceType: Dungeon
date: 2018-06-29 00:00:00 +0000
slug: duty-name-difficulty
description: Read our Guide on the dungeon/trial/8-man raid/24-man raid NAME (DIFFICULTY)
  where you'll face off against Boss 01, Boss 02, and Boss 03.
image:
- url: "/assets/img/dungeons/asset.jpg"
  urlSmall: "/assets/img/dungeons/small/asset.jpg"
terms:
- term: Term 01
- term: Term 02
- term: Term 03
patchName: Stormblood
plvl: 70
ilvl: 500
order: 70500
mtqvid: http://google.com
mechanics:
- title: Sample Duty Mechanic 01
  steps:
  - step: 1
    notes:
    - note: Step Note 01
    - note: Step Note 02
  - notes:
    - note: Step Note 01
    - note: Step Note 02
    step: 2
- title: Sample Duty Mechanic 02
  steps:
  - step: 1
    notes:
    - note: Sample Note 01
    - note: Sample Note 02
bosses:
- title: Sample Boss Name 01
  id: 1
  phases:
  - phase: 1
    script:
    - attack: Sample Attack 01
      dutyAction: true
    - attack: Sample Attack 02
    - attack: Sample Attack 03
    alerts:
    - alert: This is an example alert 01.
    - alert: This is an example alert 02.
    mechanics:
    - notes:
      - note: Note 01
      - note: Note 02
      title: Phase Mechanic 01
    - title: Phase Mechanic 02
      notes:
      - note: Note 01
    attacks:
    - template: regular-attack
      roles:
      - Everyone
      title: Regular Attack
      tags:
      - Active Time Maneuver
      notes:
      - note: Attack Note 01
      - note: Attack Note 02
      images:
      - url: "/assets/img/dungeon/fractal_continuum_hard.jpg"
        alt: Sample Alt Text
    - template: combo-attack
      title: Combo Title
      notes:
      - note: Combo Note 01
      - note: Combo Note 02
      combo:
      - title: Combo Attack 01
        roles:
        - Tank
        - Healer
        dutyAction: Sample Duty Action
        tags:
        - Tankbuster
        notes:
        - note: Attack Note 01
        - note: Attack Note 02
      - title: Combo Attack 02
        roles:
        - Healer
        tags:
        - Raid Wide Damage
        notes:
        - note: Attack Note 01
    - template: attack-w-variations
      title: Variation Attack
      notes:
      - note: Variation Note 01
      - note: Variation Note 02
      variations:
      - title: Variation Attack Note 01
        roles:
        - Everyone
        tags:
        - Animation
        notes:
        - note: Attack Note
      - title: Variation Attack 02
        roles:
        - Everyone
        - Melee DPS
        dutyAction: Sample Duty Action
        tags:
        - AoE - Circular
        - AoE - Cone
        - AoE - Column
        notes:
        - note: Attack Note 01
        - note: Attack Note 02
  - phase: 2
    alerts:
    - alert: Phase 02 Alert
    attacks:
    - template: regular-attack
      roles:
      - Tank
      title: Regular Attack 02
      tags:
      - AoE - Column
      notes:
      - note: Attack Note 01
      - note: Attack Note 02
    - template: combo-attack
      title: Combo Attack 02
      combo:
      - title: Combo Attack w/ Overview Notes
        roles:
        - Healer
        dutyAction: Duty Action
        tags:
        - AoE - Circular
        notes:
        - note: Note!
---
