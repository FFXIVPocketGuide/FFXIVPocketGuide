---
layout: guide_post
title:  "[Ravana] Thok ast Thok"
date:   2017-04-09 18:00:14 -0300
description: "Read our Guide on the trial Thok ast Thok (Hard) where you'll face off against Ravana."
image:
    - url: "/assets/img/trials/thok_ast_thok.jpg"
    - urlSmall: "/assets/img/trials/small/thok_ast_thok.jpg"
patchNumber: 3.0
patchName: "Heavensward"
difficulty: "Hard"
plvl: 53
ilvl: 0
order: 53000
instanceType: "trial"
mtqvid: "https://youtu.be/HQ7GAofEJBw"
bossName: "Ravana"
attacks:
  - title: "Blinding Blade"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Cleave"
    notes:
      - note: "This frontal cleave has high damage - face Ravana away from the raid."
  - title: "Tapasya"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Cleave"
      - tag: "Knockback"
    notes:
      - note: "This frontal cleave will hit 3 times."
  - title: "The Seeing Wing"
    phases:
      - phase: 01
    roles:
      - role: "Physical DPS"
    tags:
      - tag: "Knockback"
    notes:
      - note: "This attack will damage and knock back all physical attacks."
  - title: "Prelude to Slaughter"
    phases:
      - phase: 01
    combo:
      - title: "Phase 01"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "Prelude has a 15 second cast timer - use this to effectively move out of range to avoid Ravana's first large AoE spin."
      - title: "Phase 02"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "The cirular AoE is followed by Ravana jumping into the air and placing many overlapping column AoEs all over the arena - run to a safe area to avoid damage."
      - title: "Phase 03"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Donut AoE"
        notes:
          - note: "The final phase of this attack is an arena-wide donut AoE - run to the center of the arena to avoid damage."
  - title: "Slaughter"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Combo Mechanic"
    combo:
      - title: "Phase 01"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "Slaughter has a 15 second cast timer - use this to effectively move directly behind Ravana to avoid damage."
      - title: "Phase 02A"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "After the cone, Ravana will jump into the air and place 2 column AoEs in an 'X' pattern - stand in the safe zones to avoid damage, but watch out for the purple markers placed on members of your party."
      - title: "Phase 02B"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Markers"
        notes:
          - note: "During the column AoEs, Ravana will mark two players with larger purple AoEs - spread apart and avoid other players."
  - title: "Bloody Fuller"
    phases:
      - phase: 02
    roles:
      - role: "Everyone"
    tags:
      - tag: "Ultimate"
    notes:
      - note: "This attack's strength is determined by how long 'Spirit Ghana' and 'Moon Ghana' spawns are allowed to live."
      - note: "Spawns will summon swords as time passes, increasing the damage Bloody Fuller will do."
      - note: "Ravana will throw the entire raid into the air when he executes this attack."
  - title: "Pillars of Heaven"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Raid-Wide AoE"
      - tag: "Knockback"
    notes:
      - note: "This attack does raid-wide damage and will hit the whole team with knockback - use the remaining walls on the arena to keep from falling off."
  - title: "Rose Orbs"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Tether"
    notes:
      - note: "Orbs will spawn around the arena and tether to players."
      - note: "These orbs will add a vulnerability up debuff if they hit players - run away from them until the tether breaks."
  - title: "Swift Slaughter"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Combo Mechanic"
    combo:
      - title: "Phase 01"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Markers"
        notes:
          - note: "4 players will be marked with up to 4 swords - Ravana will attack each player in the order of their sword marker (1, 2, 3, 4)."
      - title: "Phase 02"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Donut AoE"
        notes:
          - note: "Ravana will immediately follow these markers up with a arena-wide donut AoE - run to the center to avoid taking damage."
      - title: "Phase 03"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "The final step in this attack is a large circular AoE - run towards the edge of the arena to avoid damage."
  - title: "Atma-Linga"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Raid-Wide AoE"
    notes:
      - note: "Ravana will do a raid-wide stomp, doing moderate damage."
sequence:
  - phase: 01
    attacks:
      - attack: "Blinding Blade"
      - attack: "Tapasya"
      - attack: "The Seeing Wing"
      - attack: "Prelude to Slaughter"
      - attack: "Slaughter"
    alerts:
      - alert: "Note that Ravana receives a stacking damage-up buff as the fight goes on - kill him as fast as possible."
      - alert: "Due his long cleave, tanks should face Ravana away from the raid at all times."
      - alert: "The arena for this fight is small and surrounded by fences that will be broken during the course of the fight - pay attention to whether the remaining fences are to avoid being knocked of the edge during 'Pillars of Heaven'."
  - phase: 02
    attacks:
      - attack: "Ghana Spawns"
      - attack: "Bloody Fuller"
    alerts:
      - alert: "This phase begins when Ravana begins summoning adds - all players should focus down these adds to prevent extra damage during Bloody Fuller."
    mechanics:
      - title: "Spirit & Moon Ghana Spawns"
        notes:
          - note: "Spirit and Moon Ghana adds will spawn and should be focused down as fast as possible - note that Moon Ghanas have much more health."
          - note: "The longer these adds are left alive, the more swords will spawn, increasing 'Bloody Fuller's' damage."
  - phase: 03
    attacks:
      - attack: "Pillars of Heaven"
      - attack: "Rose Orbs"
      - attack: "Swift Slaughter"
      - attack: "Atma-Linga"
      - attack: "Repeat"
    alerts:
      - alert: "Be aware of which parts of the arena still contain fences - you'll need them to prevent yourself from falling off during 'Pillars of Heaven'."
      - alert: "All players should stack behind Ravana when he begins to cast 'Swift Slaughter' to avoid damage."
    mechanics:
      - title: "Defensive Stance"
        notes:
          - note: "During the fight, Ravana will switch to his defensive stance and focus the second threat target - tanks should keep him facing away from the raid while everyone else stacks behind him."
stances:
  - title: "Parry Stance"
    attacks:
      - attack: "The Seeing Wing"
    notes:
      - note: "Ravana will enter this stance when he executes 'The Seeing Wing' - physical damage dealers should be wary of knockback."
  - title: "Damage Stance"
    attacks:
      - attack: "Prelude to Slaughter"
      - attack: "Slaughter"
      - attack: "Swift Slaughter"
    notes:
      - note: "When in his damage stance, Ravana will execute one of the 3 slaughter attacks - pay attention to his cast bar to prepare for the appropriate one."
  - title: "Defensive Stance"
    attacks:
      - attack: "Rose Orbs"
    notes:
      - note: "During his defensive stance, Ravana will fixate on the second threat target."
      - note: "All other players should stay behind him and avoid 'Rose Orb' tethers as necessary."
spawns:
  - title: "Spirit Ghana"
    notes:
      - note: "Along with Moon Ghana adds, Spirit Ghanas act as a minor DPS check."
      - note: "The faster these adds are killed, the lower the damage Ravana will do when he executes 'Bloody Fuller'."
  - title: "Moon Ghana"
    notes:
      - note: "Moon Ghana adds have much more health than Spirit Ghanas and act as a minor DPS check."
      - note: "The faster these adds are killed, the lower the damage Ravana will do when he executes 'Bloody Fuller'."
---
