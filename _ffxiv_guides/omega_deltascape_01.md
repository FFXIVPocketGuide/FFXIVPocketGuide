---
layout: guide_post
title:  "[O1] Omega: Deltascape V1.0"
date:   2017-04-09 18:00:14 -0300
description: "Read our Guide on the 8 man raid Omega: Deltascape V1.0 where you'll face off against Alte Roite."
image:
    - url: "/assets/img/raids/delta_01.jpg"
    - urlSmall: "/assets/img/raids/small/delta_01.jpg"
patchNumber: 4.0
patchName: "Stormblood"
difficulty: "Normal"
plvl: 70
ilvl: 0
order: 70005
instanceType: "raid"
mtqvid: "https://youtu.be/lSuUWMpZSMM"
bossName: "Alte Roite"
attacks:
  - title: "Wyrmtail"
    phases:
      - phase: 01
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
    notes:
      - note: "This attack targets the primary threat target for moderate damage."
  - title: "Flame & Fire Orbs"
    phases:
      - phase: 01
    combo:
      - title: "Flame"
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack hits for raid wide damage."
      - title: "Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
        notes:
          - note: "Immediately after Flame, the boss will spawn one of many patterns of fire orbs."
          - note: "These orbs start small and then grow when they are about to explode - their explosions result in circular AoEs that give stacking Vulnerability Up debuffs."
          - note: "These orbs can be moved by both Breathwing and Downburst - be sure to be aware of where they are at all times."
  - title: "Roar"
    phases:
      - phase: 01
    roles:
      - role: "Healer"
    tags:
      - tag: "Raid Wide AoE"
    notes:
      - note: "This attack hits the group for raid wide damage - healers should keep an eye on players with stacks of Vulnerability Up debuffs."
  - title: "Breathwing"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Raid Wide AoE"
      - tag: "Knockback"
    notes:
      - note: "The boss will move to one side of the platform and hit the arena with an AoE that knocks back both players and Fire Orbs."
      - note: "Players should move next to the boss to avoid unnecessary complications."
  - title: "Twin Bolt"
    phases:
      - phase: 01
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
      - tag: "Mechanic"
    notes:
      - note: "This attack targets the main tank and the player physically closest to them."
      - note: "Off tanks can ensure that they take the hit by sticking close to the main tank during the cast."
  - title: "Clamp"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Column AoE"
    notes:
      - note: "This attack places a column AoE from the front of the boss - avoid as necessary."
  - title: "Thin Ice"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
    notes:
      - note: "This attack is telegraphed by a ring of mist around the edge of the arena."
      - note: "After some time, the arena will turn to ice and all players must <strong>STOP</strong> moving."
      - note: "Moving while the platform is iced will cause the player to slide a short distance - this can make future mechanics complicated to avoid if you are not positioned properly."
  - title: "Levin Bolt"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Marker"
      - tag: "Puddle AoE"
    notes:
      - note: "Players will be marked with purple markers and drop lightning AoE puddles where they stand."
      - note: "Players should keep their distance from each other to avoid overlap."
  - title: "Blaze"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Stack"
    notes:
      - note: "A single player will be marked with an orange stack marker - all players should stack to soak damage."
  - title: "The Classical Elements"
    phases:
      - phase: 01
    combo:
      - title: "Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
        notes:
          - note: "These orbs start small and then grow when they are about to explode - their explosions result in circular AoEs that give stacking Vulnerability Up debuffs."
          - note: "These orbs will be moved by Downburst - be sure to be aware of where they are at all times."
      - title: "Thin Ice"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "This attack is telegraphed by a ring of mist around the edge of the arena."
          - note: "After some time, the arena will turn to ice and all players must <strong>STOP</strong> moving."
          - note: "Moving while the platform is iced will cause the player to slide a short distance."
      - title: "Downburst"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
          - tag: "Knockback"
        notes:
          - note: "This attack places a large tornado in the center of the arena that will kill players if it hits them."
          - note: "All players will be knocked back towards the edge of the arena."
      - title: "Levin Bolt"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Circular AoE"
        notes:
          - note: "Players will be marked with purple markers and drop lightning AoE puddles where they stand."
          - note: "Players should keep their distance from each other to avoid overlap."
  - title: "Charybdis"
    phases:
      - phase: 01
    roles:
      - role: "Healer"
    tags:
      - tag: "Raid Wide AoE"
    notes:
      - note: "This attack takes all players to 1HP - healers need to get all players' health back up immediately."
      - note: "The boss will often follow this attack up with Roar."
sequence:
  - phase: 01
    attacks:
      - attack: "Wyrmtail"
      - attack: "Flame & Fire Orbs"
      - attack: "Roar"
      - attack: "Breathwing"
      - attack: "Twin Bolt"
      - attack: "Clamp"
      - attack: "Thin Ice"
      - attack: "Levin Bolt"
      - attack: "Blaze"
      - attack: "The Classical Elements"
      - attack: "Charybdis"
    alerts:
      - alert: "Healers should keep a close eye on stacks of Vulnerability Up on the group - these can make damage very tough to deal with."
      - alert: "A mist telegraph around the edge of the arena indicates that Thin Ice is about to cover the arena in ice - all players should stop moving."
      - alert: "The Classical Elements can be overwhelming - players should slide to the center after Downburst has knocked them back to avoid the Fire Orbs."
      - alert: "The second time The Classical Elements is cast, players should position themselves in between the Fire Orbs so that when Downburst is cast, the Fire Orbs in the middle of the room are pushed away from them."
      - alert: "These attacks will repeat with increased complexity as the fight progresses."
---
