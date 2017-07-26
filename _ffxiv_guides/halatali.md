---
layout: guide_post
title:  "Halatali"
date:   2017-04-09 18:00:14 -0300
description: "Read our Guide on the dungeon Halatali where you'll face off against Firemane, Thunderclap Guivre, and Tangata."
image:
    - url: "/assets/img/dungeons/halatali.jpg"
    - urlSmall: "/assets/img/dungeons/small/halatali.jpg"
patchNumber: 2.0
patchName: "A Realm Reborn"
difficulty: "Normal"
plvl: 20
ilvl: 0
order: 20000
instanceType: "dungeon"
mtqvid: "https://youtu.be/Lukm-U8aaOw"
bosses:
  - title: "Firemane"
    sequence:
      - phase: 01
        attacks:
          - attack: "Fire (Auto Attack)"
        alerts:
          - alert: "This boss is positioned next to a bonfire - prioritize killing the adds that spawn before they reach the bonfire to avoid raid wide damage."
        mechanics:
          - title: "Damantus & Noxius"
            notes:
              - note: "Damantus and Noxius adds will spawn from various locations and make their way to the bonfire near the boss."
              - note: "If they reach the bonfire, they will explode for moderate raid wide damage - prioritize killing these adds."
  - title: "Thunderclap Guivre"
    attacks:
      - title: "Cone AoE"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "The boss will attack in a cone directly in front of him - dodge as necessary."
      - title: "Thunder"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "This ranged attack hits a single target with a circular lightning AoE."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Cone AoE"
          - attack: "Thunder]"
          - attack: "[Repeat]"
        alerts:
          - alert: "Tanks should keep the boss up on the ramp to keep the party off the arena floor to avoid damage from Electrocution."
        mechanics:
          - title: "Electrocution"
            notes:
              - note: "The boss will occasionally become invulnerable and run to the center of the arena where he will electrocute the floor."
              - note: "Players can ignore this mechanic entirely by tanking and fighting the boss towards the base of the ramp into the arena."
              - note: "During this phase, Lightning Sprites will spawn that must be killed before the boss will return to the fight."
  - title: "Tangata"
    attacks:
      - title: "Point Blank AoE"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Point Blank AoE"
        notes:
          - note: "This attack places a permanent fire AoE around the boss while he immune to damage."
      - title: "Double Smash"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "This attack hits for heavy damage directly in front of the boss - tank facing away from the group."
      - title: "Firewater"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "Targets a single player with a circular fire AoE."
      - title: "Knockback"
        phases:
          - phase: 02
        roles:
          - role: "Tank"
        tags:
          - tag: "Knockback"
        notes:
          - note: "This is a basic attack that will knock the boss' target backwards."
    sequence:
      - phase: 01
        attacks:
          - attack: "Point Blank AoE"
        alerts:
          - alert: "The boss will surround himself with a fire AoE and become immune - kill the adds that spawn and he will eventually become mobile."
          - alert: "The boss will occasionally summon Fire Sprite adds - prioritize these after Damantus and Noxius adds."
        mechanics:
          - title: "Damantus & Noxius"
            notes:
              - note: "Damantus and Noxius adds will spawn from various locations and make their way to the boss."
              - note: "If they reach the boss, they will explode for moderate raid wide damage - prioritize killing these adds."
      - phase: 02
        attacks:
          - attack: "[Double Smash"
          - attack: "Firewater"
          - attack: "Knockback]"
          - attack: "[Repeat]"
        alerts:
          - alert: "The boss will continue to summons adds - kill these as necessary."
          - alert: "Tanks should try to keep the boss in the center of the room to allow DPS adequate time to take out Damantus and Noxius adds before they reach the boss."
---
