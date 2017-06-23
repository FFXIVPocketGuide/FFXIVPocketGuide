---
layout: guide_post
title:  "Xelphatol"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/dungeons/xelphatol.jpg"
    - urlSmall: "/assets/img/dungeons/small/xelphatol.jpg"
patchNumber: 3.4
patchName: "Soul Surrender"
ilvl: "210"
instanceType: "dungeon"
mtqvid: "https://youtu.be/5WXk2BWz-gQ"
mechanics:
  - title: "Warballoons"
    steps:
      - step: 01
        notes:
          - note: "After killing Dotoli Ciloc, you will emerge outside of the mountain and be faced with multiple groups of adds."
          - note: "While fighting these adds, warballoons will move across and dock to the platforms, spawning more enemies."
          - note: "The moment they dock, focus down these balloons before any other enemy."
bosses:
  - title: "Nuzal Hueloc"
    attacks:
      - title: "Short Burst"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "Focuses the Main Tank."
          - note: "Does moderate damage."
      - title: "Windblast"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This is a long column AoE - dodge as necessary."
      - title: "Lift & Hotblast"
        phases:
          - phase: 01
        combo:
          - title: "Lift"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
            notes:
              - note: "The boss will float into the air and summon adds - keep an eye on where the boss is."
              - note: "The add 'Floating Turret' is the key to this mechanic and should be killed last - killing it will trigger Hotblast."
          - title: "Hotblast"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
            notes:
              - note: "This attack will trigger when 'Floating Turret' is killed."
              - note: "All players will be shot into the air - position yourself under the boss to knock him out of the sky."
      - title: "Airstones"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "These adds will make the boss and/or 'Floating Turret' invulnerable - kill them immediately."
    sequence:
      - phase: 01
        attacks:
          - attack: "Short Burst"
          - attack: "Windblast"
          - attack: "Lift & Hotblast"
          - attack: "Airstones"
        alerts:
          - alert: "Prioritize killing the Airstone adds when they appear."
        mechanics:
          - title: "Lift & Hotblast"
            notes:
            - note: "The boss will periodically fly into the air - players must use the 'Floating Turret' spawn to knock them into the air, hitting the boss out of the sky."
            - note: "Killing this add will send all players into the sky - be sure to stand right below the boss."
  - title: "Dotoli Ciloc"
    attacks:
      - title: "On Low"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "This is a basic cone AoE - dodge as necessary."
      - title: "On High"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
          - tag: "Knockback"
        notes:
          - note: "The boss will move to the center of the room and cast this raid-wide AoE."
          - note: "This attack will knock players back, so stand in front of the barriers to avoid being pushed into the spikes."
      - title: "Swiftfeather"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
        notes:
          - note: "Players will be marked with red markers."
          - note: "Markers players will drop AoE tornados as they move around the platform - position these tornados along the edge, away from barriers."
    sequence:
      - phase: 01
        attacks:
          - attack: "On Low"
          - attack: "On High"
          - attack: "Swiftfeather"
        alerts:
          - alert: "When the boss moves to the center of the room, position yourself in front of a barrier to avoid being knocked off."
          - alert: "Red Markers will drop tornados where the player moves - place them on the edge of the arena away from barriers."
  - title: "Tozol Huatotl"
    attacks:
      - title: "Ixali Aero"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "Focuses the Main Tank."
          - note: "Does moderate damage."
      - title: "Ixali Aero III"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack is raid-wide and cannot be avoided."
      - title: "Hawk"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Stack"
        notes:
          - note: "This attack can occur as a marker or a stack - green markers indicate that you should avoid other players, while an orange stack indicator means you should get in close to soak damage."
      - title: "Ixali Aero II"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This attack is a long column AoE."
      - title: "Summon Garuda"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "The boss will occasionally move to the edge of the arena and summon Garuda."
          - note: "Players are required to avoid her AoE attacks and deal with mechanics at the same time."
          - note: "Garuda can use an arena-wide ranged AoE - move in to melee range to avoid it."
          - note: "She can also use a donut AoE - stay in the unmarked track to avoid damage."
    sequence:
      - phase: 01
        attacks:
          - attack: "Ixali Aero"
          - attack: "Ixali Aero III"
          - attack: "Hawk"
          - attack: "Ixali Aero II"
          - attack: "Summon Garuda"
        alerts:
          - alert: "The attack 'Hawk' can occur in two ways: Green Markers mean avoid other players, while the Orange Stack Marker indicates that all players should stack to soak damage."
          - alert: "When the boss moves to the edge of the arena, expect him to summon Garuda, who will attack with a ranged or donut AoE."
        mechanics:
          - title: "Summon Garuda"
            notes:
            - note: "The boss will occasionally summon Garuda at the center of the arena who will cast her own respective AoE attacks - dodge as necessary."
---
