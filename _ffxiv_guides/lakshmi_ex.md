---
layout: guide_post
title:  "[Sri Lakshmi] Emanation"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/trials/lakshmi_ex.jpg"
    - urlSmall: "/assets/img/trials/small/lakshmi_ex.jpg"
patchNumber: 4.0
patchName: "Stormblood"
difficulty: "Extreme"
ilvl: 300
instanceType: "trial"
mtqvid: "https://youtu.be/ek_FAZTuHWU"
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
      - note: "3 players are marked with telegraphed column AoEs - players should ensure that these do not overlap and should stop moving once in place to allow the rest of the raid to reach safety."
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
  - title: "Path of Light"
    phases:
      - phase: 01
    roles:
      - role: "Off Tank"
    tags:
      - tag: "Marker"
      - tag: "Cone AoE"
    notes:
      - note: "This attack will target the second threat target - Off-tanks should position themselves away from the group to avoid hitting anyone else."
  - title: "Alluring Arm"
    phases:
      - phase: 01
    combo:
      - title: "Hand of Grace"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Column AoE"
        notes:
          - note: "Players are marked with telegraphed column AoEs - these players should ensure that they do not overlap with others and should stop moving once in place to allow the rest of the raid to reach safety."
      - title: "Hand of Beauty"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Circular AoE"
        notes:
          - note: "Players are marked with telegraphed circular AoEs - once placed, these AoEs will grow in size."
          - note: "Marked players should try to place these puddles on the edge of the platform and next to each other to minimize the affected space."
  - title: "The Pall of Light"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Stack"
    notes:
      - note: "A single player will be marked with an orange stack marker - all players not affected by another mechanic should move in to soak damage."
  - title: "Chanchala"
    phases:
      - phase: 02
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
      - tag: "Buff"
    notes:
      - note: "This attack will buff the boss' damage and alter mechanics to make them more difficult."
      - note: "Attacks enhaned by Chanchala are telegraphed by blue and black flames engulfing the boss and indicate that players targeted by that attack should activate Vril."
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
  - title: "Enhanced Hand of Beauty"
    phases:
      - phase: 02
    roles:
      - role: "Healers"
    dutyActions:
      - action: "Vril"
    tags:
      - tag: "Marker"
      - tag: "Circular AoE"
    notes:
      - note: "2 Healers are marked with telegraphed circular AoEs - once placed, targeted players will be hit with a Heavy debuff and these AoEs will grow in size."
      - note: "Using Vril here prevents the Heavy debuff and allows the players to escape the AoE."
      - note: "Marked players should try to place these puddles on the edge of the platform and next to each other to minimize the affected space."
  - title: "Enhanced The Pull of Light"
    phases:
      - phase: 02
    roles:
      - role: "Tank"
      - role: "Healer"
    dutyActions:
      - action: "Vril"
    tags:
      - tag: "Tankbuster"
    notes:
      - note: "The enhanced version of this attack hits much harder and the Main Tank is required to use Vril to reduce the damage - healers keep an eye out for this one."
  - title: "Enhanced The Path of Light"
    phases:
      - phase: 02
    roles:
      - role: "Off Tank"
    dutyActions:
      - action: "Vril"
    tags:
      - tag: "Marker"
      - tag: "Cone AoE"
    notes:
      - note: "This attack will target the second threat target - Off-tanks should position themselves away from the group to avoid hitting anyone else."
      - note: "Players targeted by this enhanced attack will now be required to use Vril to survive."
  - title: "Divine Desire"
    phases:
      - phase: 02
    roles:
      - role: "Everyone"
    dutyActions:
      - action: "Vril"
    tags:
      - tag: "Pull"
      - tag: "Area AoE"
    notes:
      - note: "Lakshmi will move to the center of the arena and activate and begin to cast."
      - note: "All players should activate their Vril Bubble duty action and move away from the boss."
      - note: "Players who don't activate Vril will be pulled into the AoE and hit with a Bleed debuff."
  - title: "Water III"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Marker"
      - tag: "Puddle AoE"
    notes:
      - note: "This attack is cast by Dreaming Shudra adds during the add phase."
      - note: "Players will be marked with an orange marker and should move away from others to avoid splashing damage."
  - title: "Alluring Embrace"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    dutyActions:
      - action: "Vril"
    tags:
      - tag: "Ultimate"
    notes:
      - note: "This is Lakshmi's ultimate and when she leaves the arena, all players should activate their Vril Bubble duty action in order to survive."
  - title: "Divine Doubt"
    phases:
      - phase: 04
    roles:
      - role: "Everyone"
    dutyActions:
      - action: "Vril"
    tags:
      - tag: "Debuff"
    notes:
      - note: "The boss will move to the center of the arena and hit all players with an unavoidable Confusion debuff."
      - note: "Players should pair off to avoid ganging up on each other."
      - note: "Using Vril during this attack halves the debuff's timer."
  - title: "Vril Restoration I"
    phases:
      - phase: 04
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
      - tag: "Column AoE"
    notes:
      - note: "The boss will cast multiple AoEs that will have Vril bubbles in their telegraphs - players can replenish their Vril by collecting these before the AoEs hit."
      - note: "Pattern 01: Z shape - Tanks should watch out for The Pull of Light."
      - note: "Pattern 02: Line shape - Off-tanks should watch out for The Path of Light."
  - title: "Enhanced The Pall of Light"
    phases:
      - phase: 05
    roles:
      - role: "Everyone"
    dutyActions:
      - action: "Vril"
    tags:
      - tag: "Stack"
    notes:
      - note: "A single player will be marked with an orange stack marker - all players not affected by another mechanic should move in to soak damage."
      - note: "Activating Vril during this enhanced attack prevents a nasty Bleed debuff."
  - title: "Vril Restoration II"
    phases:
      - phase: 05
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
      - tag: "Column AoE"
    notes:
      - note: "The boss will cast multiple AoEs that will have Vril bubbles in their telegraphs - players can replenish their Vril by collecting these before the AoEs hit."
      - note: "Pattern 01: Donut shape - Players will have to deal with Divine Desire during this pattern (move away from the center just outside of the donut AoE and use Vril)."
      - note: "Pattern 02: Z shape - Players will have to deal with Enhanced The Pall of Light during this pattern (stack and Vril)."
  - title: "Enhanced Stotram"
    phases:
      - phase: 05
    roles:
      - role: "Everyone"
    dutyActions:
      - action: "Vril"
    tags:
      - tag: "Raid Wide AoE"
    notes:
      - note: "The enhanced version of this attack does extremely heavy damage - players are required to use a Vril here and healers should expect heavy healing immediately afterwards."
sequence:
  - phase: 01
    attacks:
      - attack: "Dreaming Kshatriya x2"
      - attack: "Stotram"
      - attack: "Hand of Grace"
      - attack: "The Pull of Light"
      - attack: "Stotram"
      - attack: "The Pull of Light"
      - attack: "The Path of Light"
      - attack: "Alluring Arm"
      - attack: "The Pull of Light"
      - attack: "Stotram"
      - attack: "The Pall of Light"
      - attack: "The Pull of Light"
    alerts:
      - alert: "No Vril should be used during this phase."
      - alert: "The boss is immune to damage until the 2 adds are killed - focus down 1 of the adds first before the first Stotram is cast."
      - alert: "In this phase, Alluring Arm will hit 1 player with Hand of Grace and 2 players with Hand of Beauty."
  - phase: 02
    attacks:
      - attack: "Chanchala"
      - attack: "Divine Denial"
        dutyActions: true
      - attack: "Enhanced Hand of Beauty"
        dutyActions: true
      - attack: "Enhanced The Pull of Light"
        dutyActions: true
      - attack: "Enhanced The Path of Light"
        dutyActions: true
      - attack: "Divine Desire"
        dutyActions: true
      - attack: "Chanchala ENDS"
      - attack: "The Pull of Light"
      - attack: "The Path of Light"
      - attack: "Stotram"
    alerts:
      - alert: "Chanchala buffs the boss' attacks and renders Vril absolutely necessary - these attacks are telegraphed by black and blue flames around the boss."
      - alert: "'Enhanced' attacks require the use of Vril to survive or avoid debuffs."
    mechanics:
      - title: "Duty Action: Vril"
        notes:
          - note: "Players have 3 uses of Vril before it must be recharged during the add phase or Vril Restoration attacks."
          - note: "Players should be conservative with their Vril during this fight as the times in which they can recharge it are limited."
  - phase: 03
    attacks:
      - attack: "Dreaming Shudra x4"
      - attack: "[Water III]"
      - attack: "[Repeat]"
      - attack: "Alluring Embrace"
        dutyActions: true
    alerts:
      - alert: "The goal of this phase is to recharge the whole group's Vril usage before the boss casts her Ultimate."
      - alert: "Don't forget to activate Vril when the boss begins to cast Alluring Embrace."
    mechanics:
      - title: "Add Phase"
        notes:
          - note: "4 adds will spawn and a single Vril bubble will hop from add to add every 10 seconds."
          - note: "Damage all 4 adds to 15%-20% health before switching to the add with the Vril bubble."
          - note: "Killing an add when it has the bubble will recharge 2 players' Vril."
          - note: "The Vril bubble buffs the add's defense and will revive any add that is killed when it reaches it."
  - phase: 04
    attacks:
      - attack: "Chanchala"
      - attack: "Divine Doubt"
        dutyActions: true
      - attack: "Enhanced The Path of Light"
        dutyActions: true
      - attack: "Enhanced The Pull of Light"
        dutyActions: true
      - attack: "Chanchala ENDS"
      - attack: "Vril Restoration I"
      - attack: "The Pall of Light"
      - attack: "Alluring Arm"
      - attack: "The Path of Light"
      - attack: "Stotram"
    alerts:
      - alert: "This provides the opportunity for players to recharge their Vril during the Vril Restoration attack - bubbles will appear within AoE telegraphs that can be collected before the attack goes off."
      - alert: "In this phase, Alluring Arm will hit 2 players with Hand of Grace and 1 player with Hand of Beauty."
  - phase: 05
    attacks:
      - attack: "[Chanchala"
      - attack: "Divine Doubt"
        dutyActions: true
      - attack: "Enhanced The Pall of Light"
        dutyActions: true
      - attack: "Vril Restoration II"
      - attack: "Enhanced Stotram"
        dutyActions: true
      - attack: "Chanchala ENDS"
      - attack: "Alluring Arm"
      - attack: "The Pall of Light"
      - attack: "The Path of Light]"
      - attack: "[Repeat]"
      - attack: "Enrage"
    alerts:
      - alert: "Both The Pall of Light and Stotram are now enhanced and deal much more damage - prepare to use Vril."
      - alert: "In this phase, Alluring Arm will hit 2 players with Hand of Grace and 1 player with Hand of Beauty."
      - alert: "The boss will soft enrage when players run out of Vril and can no longer handle Divine and enhanced mechanics."
      - alert: "A hard enrage will occur where the boss will hit with Divine Denial until the raid has wiped."
---
