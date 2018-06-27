---
title: Sample Guide
layout: guide_post_new
categories: A Realm Reborn
patchNumber: 4.0
difficulty: Normal
orchestrion: TBD
instanceType: Dungeon
date: 2018-06-27 00:00:00 +0000
slug: page-slug
description: Read our Guide on the dungeon/trial/8-man raid/24-man raid NAME (DIFFICULTY)
  where you'll face off against Boss 01, Boss 02, and Boss 03.
image:
- url: "/assets/img/dungeons/asset.jpg"
  urlSmall: "/assets/img/dungeons/small/asset.jpg"
terms:
- term: term
patchName: Sample patch name
plvl: 70
ilvl: 890
order: 70890
mtqvid: google.com
bosses:
- id: 1
  phases:
  - phase: 1
    script:
    - attack: Sample Script
      dutyAction: true
    - attack: Sample Script 02
      dutyAction: true
    - attack: Sample Script 03
    alerts:
    - alert: Alert 01
    - alert: Alert 02
    - alert: Alert 03
    attacks:
    - template: regular-attack
      roles:
      - Healer
      - Everyone
      title: Regular Attack Name
      tags:
      - Animation
      notes:
      - note: Sample Note 01
      - note: Sample Note 02
      - note: Sample Note 03
    - template: regular-attack
      roles:
      - Everyone
      title: REgular Attack 02
      tags:
      - AoE - Circular
      notes:
      - note: Note 01
      - note: Note 02
      - note: Note 03
  title: Tsukuyomi
---
