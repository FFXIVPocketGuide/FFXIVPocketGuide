---
layout: guide_post
title:  "Kugane Castle"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/dungeons/kugane_castle.jpg"
    - urlSmall: "/assets/img/dungeons/small/kugane_castle.jpg"
patchNumber: 4.0
patchName: "Stormblood"
difficulty: "Normal"
plvl: 70
ilvl: 0
order: 70000
instanceType: "dungeon"
mtqvid: "https://youtu.be/iW0d0r6R9pc"
bosses:
  - title: "Zuiko-maru"
    id: "boss01"
    attacks:
      - title: "Clearout"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "This attack hits directly in front of the boss - move out of the telegraph to avoid it."
      - title: "Harakiri Kosho"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
          - tag: "Tether"
        notes:
          - note: "Up to 2 Harakiri Kosho adds will spawn and tether to individual players - if they reach these players they will stun them, trapping them within their bomb radius."
          - note: "These adds should be DPS'd down as soon as possible to bait the AoE they drop - this AoE is rather large, so players should try to keep them together."
      - title: "Kenki Release"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack hits for mild raid wide damage - heal as necessary."
      - title: "Helm Crack"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "1 player will be marked with an orange stack marker - all players should stack up to soak damage."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Clearout"
          - attack: "Harakiri Kosho"
          - attack: "Kenki Release"
          - attack: "Helm Crack]"
          - attack: "[Repeat]"
        alerts:
          - alert: "Harakiri Kosho adds will stun the player they are tethered to if they get too close - DPS should run away from their tethered add and focus on the opposite add to avoid being caught."
  - title: "Dojun-maru"
    id: "boss02"
    attacks:
      - title: "Clockwork Medium"
        phases:
          - phase: 01
        combo:
          - title: "Tatami-gaeshi"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Column AoE"
            notes:
              - note: "If the Joi Onmitsu adds are spawned on the exterior of the arena they will use wide column AoEs that will knock players into the air."
          - title: "Joi Onmitsu"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Spawn"
              - tag: "Column AoE"
            notes:
              - note: "If the Joi Onmitsu adds are spawned inside the arena they should be DPS'd down as soon as possible - failure to do so results in heavy raid wide damage."
              - note: "These adds will also cast targeted column AoEs."
      - title: "Clockwork Raiton"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "1 player will be targeted for a circular AoE telegraphed with lightning - avoid splashing others."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Clockwork Medium"
          - attack: "Clockwork Raiton]"
          - attack: "[Repeat]"
        alerts:
          - alert: "Joi Onmitsu adds will explode for heavy raid wide damage if they are not killed fast enough."
  - title: "Yojimbo"
    id: "boss03"
    attacks:
      - title: "Payday & Zanmato"
        phases:
          - phase: 01
        combo:
          - title: "Payday"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
            notes:
              - note: "The boss will summon multiple piles of gold that can be collected by players."
              - note: "Yojimbo's dog will hop from pile to pile knocking players back and filling the Duty Gauge - players must collect the gold before the dog to minimize damage from Zanmato."
          - title: "Zanmato"
            roles:
              - role: "Healer"
            tags:
              - tag: "Raid Wide AoE"
            notes:
              - note: "This attack will hit the group with damage based on how full the Duty Gauge was during Payday."
      - title: "Metta-giri"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack his for mild raid wide damage - heal as necessary."
      - title: "Inoshi-katcho"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "This attack summons blue butterflies that drop circular AoEs."
          - note: "4 will land in the middle of the arena, followed by 8 around the exterior - players should move out of the center and then back in after the original 4 hit."
      - title: "Iai-giri"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Melee DPS"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "This is a point-black circular AoE that hits immediately after Inoshi-katcho - Tanks and Melee DPS should move away from the boss to avoid damage."
      - title: "Dragon's Lair"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
          - tag: "Column AoE"
        notes:
          - note: "This attack summons 4 Dragon's Head adds that will travel around the edge of the arena and target players with long column AoEs."
          - note: "This attack is often cast alongside Payday - focus these adds down while collecting gold."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Payday & Zanmato"
          - attack: "Metta-giri"
          - attack: "Inoshi-katcho"
          - attack: "Iai-giri"
          - attack: "Dragon's Lair]"
          - attack: "[Repeat]"
        alerts:
          - alert: "During Payday, all players should focus on collecting gold - DPS can kill the low health Dragon's Head adds at the same time during Dragon's Lair."
          - alert: "While Yojimbo's dog isn't targetable, it will still knock players back if they get in its way during a leap."
        mechanics:
          - title: "Duty Gauge: Payday"
            notes:
              - note: "The primary mechanic during this fight is Payday - the boss will summon piles of gold that can be collected by players."
              - note: "Yojimbo's dog will hop around the arena attempting to collect gold, filling the Duty Gauge - the higher the gauge, the more damage the following Zanmato will hit for."
---
