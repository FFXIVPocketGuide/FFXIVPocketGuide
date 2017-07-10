---
layout: guide_post
title:  "[Sri Lakshmi] Emanation"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/trials/lakshmi.jpg"
    - urlSmall: "/assets/img/trials/small/lakshmi.jpg"
patchNumber: 4.0
patchName: "Stormblood"
plvl: 67
instanceType: "trial"
mtqvid: "https://youtu.be/GjlaH-p187o"
attacks:
  - title: "Dreaming Kshatriya"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Spawn"
    notes:
      - note: "The boss will be inaccessible until these adds are killed."
      - note: "They can use both a basic attack and gaze - be sure to turn away from them."
  - title: "Stotram"
    phases:
      - phase: 01
    roles:
      - role: "Healer"
    tags:
      - tag: "Raid Wide AoE"
    notes:
      - note: "This attack does raid wide damage while also healing both Dreaming Kshatriya adds."
  - title: "Hand of Grace"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Marker"
      - tag: "Column AoE"
    notes:
      - note: "2 players are marked with telegraphed column AoEs - both players should ensure that these do not overlap and should stop moving once in place to allow the rest of the raid to reach safety."
  - title: "The Pull of Light"
    phases:
      - phase: 01
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
    notes:
      - note: "This attack does moderate damage - heal and cooldown as necessary."
  - title: "Hand of Beauty"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Marker"
      - tag: "Circular AoE"
    notes:
      - note: "2 players are marked with telegraphed circular AoEs - once placed, these AoEs will grow in size."
      - note: "Marked players should try to place these puddles on the edge of the platform and next to each other to minimize the affected space."
  - title: "Seduce"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    dutyActions:
      - action: "Vril"
    tags:
      - tag: "Ultimate"
    notes:
      - note: "This is Lakshmi's ultimate and when she leaves the arena, all players should activate their Vril Bubble duty action in order to survive."
  - title: "Divine Denial"
    phases:
      - phase: 02
    roles:
      - role: "Everyone"
    dutyActions:
      - action: "Vril"
    tags:
      - tag: "Knockback"
      - tag: "Area AoE"
    notes:
      - note: "Lakshmi will move to the center of the arena and activate an area wide telegraph."
      - note: "All players should activate their Vril Bubble duty action and move towards the center to avoid being pushed off the edge."
  - title: "Path of Light"
    phases:
      - phase: 02
    roles:
      - role: "Off Tank"
    tags:
      - tag: "Marker"
      - tag: "Cone AoE"
    notes:
      - note: "This attack will target the second threat target - Off-tanks should position themselves away from the group to avoid hitting anyone else."
  - title: "The Pall of Light"
    phases:
      - phase: 02
    roles:
      - role: "Everyone"
    tags:
      - tag: "Stack"
    notes:
      - note: "A single player will be marked with an orange stack marker - all players not affected by another mechanic should move in to soak damage."
  - title: "Alluring Arm (Hand of Grace & Hand of Beauty)"
    phases:
      - phase: 02
    combo:
      - title: "Hand of Grace"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Column AoE"
        notes:
          - note: "2 players are marked with telegraphed column AoEs - both players should ensure that these do not overlap and should stop moving once in place to allow the rest of the raid to reach safety."
      - title: "Hand of Beauty"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Circular AoE"
        notes:
          - note: "2 players are marked with telegraphed circular AoEs - once placed, these AoEs will grow in size."
          - note: "Marked players should try to place these puddles on the edge of the platform and next to each other to minimize the affected space."
sequence:
  - phase: 01
    attacks:
      - attack: "Dreaming Kshatriya x2"
      - attack: "Stotram"
      - attack: "Hand of Grace"
      - attack: "The Pull of Light"
      - attack: "Hand of Beauty"
      - attack: "Seduce"
    alerts:
      - alert: "Both Hand of Grace and Hand of Beauty might feel overwhelming at first - marked players should move to a safe spot and <strong>STOP MOVING</strong> to allow the rest of the group to enter a safe zone."
      - alert: "Lakshmi's ultimate, Seduce, will wipe you if you do not activate your Vril Bubble duty action."
    mechanics:
      - title: "Duty Action: Vril"
        notes:
          - note: "This mechanic involves collecting Vril in order to unlock a special duty-specific skill called Vril Bubble."
          - note: "Blue bubbles will spawn around the arena that players can collect to replenish their Vril."
          - note: "This Bubble skill is used to negate damage from both Lakshmi's ultimate and Divine Denial."
  - phase: 02
    attacks:
      - attack: "Divine Denial"
      - attack: "Path of Light"
      - attack: "The Pall of Light"
      - attack: "Alluring Arm"
    alerts:
      - alert: "Alluring Arm is a combination of Hand of Grace and Hand of Beauty - expect telegraphs to consume a large portion of the arena."
      - alert: "Off tanks should be wary of Path of Light as it will do heavy damage to the rest of the raid if you do not face Lakshmi away."
---
