---
layout: guide_post
title:  "Sastasha"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/dungeons/sastasha.jpg"
    - urlSmall: "/assets/img/dungeons/small/sastasha.jpg"
patchNumber: 2.0
patchName: "A Realm Reborn"
plvl: "15"
instanceType: "dungeon"
mtqvid: "https://youtu.be/tT3-1Yb787w"
mechanics:
  - title: "Coloured Coral"
    steps:
      - step: 01
        notes:
          - note: "Early in the dungeon there is a room off to the side with an item that can be interacted with - it contains a message with a colour on it."
      - step: 02
        notes:
          - note: "In order to reach the first boss, Chopper, the player must unlock the entrance by selecting the correct colour of coral."
          - note: "If the incorrect colour is interacted with, enemies may spawn."
bosses:
  - title: "Chopper"
    attacks:
      - title: "Circular AoE"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "This attack is telegraphed with a large red circle."
    sequence:
      - phase: 01
        attacks:
          - attack: "Circular AoE"
        alerts:
          - alert: "A memo item early on in the dungeon will tell players which colour of coral to interact with in order to enter this fight."
          - alert: "This boss is intended to teach the basics of a tank and spank - simply DPS him down."
  - title: "Captain Madison"
    attacks:
      - title: "Scurvy Dogs"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "The boss will summon a number of adds when he is killed - tanks prepare to pick them up so that DPS can AoE them down."
    sequence:
      - phase: 01
        alerts:
          - alert: "Focus down the adds and the boss becomes a simple tank and spank."
      - phase: 02
        attacks:
          - attack: "Scurvy Dogs"
        alerts:
          - alert: "Similarly to the first encounter, this boss is a tank and spank."
          - alert: "Tanks prepare for the boss to summon 'Scurvy Dog' adds at the end of the encounter."
  - title: "Denn the Orcatoothed"
    attacks:
      - title: "Frontal Cone AoE"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "The boss will periodically attack in a frontal cone - move out of the telegraph to avoid being hit."
      - title: "Unnatural Ripples"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "The 4 'Unnatural Ripples' adds around the room will periodically begin to bubble."
          - note: "If left alone, they will spawn adds - interact with them when they are bubbling to prevent the spawn."
    sequence:
      - phase: 01
        attacks:
          - attack: "Frontal Cone AoE"
          - attack: "Unnatural Ripples"
        alerts:
          - alert: "Watch out for the emote 'Bubbles begin forming on the water's surface' - it indicates that the grates around the room are about to spawn adds."
---
