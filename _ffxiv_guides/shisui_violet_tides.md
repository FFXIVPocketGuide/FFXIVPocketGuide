---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title: "Shisui of the Violet Tides"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the dungeon Shisui of the Violet Tides (Normal) where you'll face off against Amikiri, Ruby Princess, and Shisui Yohi."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/dungeons/shisui.jpg"
    - urlSmall: "/assets/img/dungeons/small/shisui.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "Stormblood"
    - term: "Shisui of the Violet Tides"
    - term: "Amikiri"
    - term: "Ruby Princess"
    - term: "Shisui Yohi"
    - term: "Normal"
#
# Patch Information (Number & Name)
patchNumber: 4.0
patchName: "Stormblood"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Normal"
#
# Player Level
plvl: 63
#
# Item Level
ilvl: 000
#
# Order (Combine plvl & ilvl - 70310)
order: 63000
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "dungeon"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/1JJdTI2nI80"
#
bosses:
  - title: "Amikiri"
    id: "boss01"
    attacks:
      - title: "Sharpstrike"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack does moderate damage to the tank - heal and cooldown as necessary."
      - title: "Prey & Shuck"
        phases:
          - phase: 01
        combo:
          - title: "Prey"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
              - tag: "Puddle AoE"
            notes:
              - note: "This attack targets a single player and drops a puddle AoE on them that stuns anybody standing in it."
          - title: "Shuck"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
            notes:
              - note: "The boss will then move over to the stunned targets and begin to cast Shuck - if the cast is successful, the targeted player will die."
              - note: "During the cast, the boss' leg will become targetable - kill the leg to interrupt the cast and cause the boss to flip onto its back, providing an opportunity for extra DPS."
      - title: "Digest"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Puddle AoE"
        notes:
          - note: "Players will be targeted with blue AoEs that drop puddles where they stand - avoid other players."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Sharpstrike"
          - attack: "Prey & Shuck"
          - attack: "Kamikiri Spawn"
          - attack: "Digest]"
          - attack: "[Repeat]"
        alerts:
          - alert: "Players should switch to killing the boss' leg when it begins to cast Shuck."
        mechanics:
          - title: "Kamikiri Adds"
            notes:
              - note: "The boss will occasionally spawn an extra add - tanks should pick this up and players should kill it."
  - title: "Ruby Princess"
    id: "boss02"
    attacks:
      - title: "Tornadogenesis"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack does moderate tank damage and should be healed and cooldowned as necessary."
      - title: "Seduce & Coriolis Kick"
        phases:
          - phase: 01
        combo:
          - title: "Seduce"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
            notes:
              - note: "The boss will move to the center of the room and begin to cast Seduce."
              - note: "Players should go to their assigned chest and receive the Old buff to avoid Seduce."
              - note: "Players caught by Seduce will be drawn to the center where they will be bound in place and hit by Coriolis Kick."
          - title: "Coriolis Kick"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Circular AoE"
            notes:
              - note: "This attack follows Seduce and places a large circular AoE at the center of the arena - dodge as necessary."
      - title: "Abyssal Volcano"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
          - tag: "Puddle AoE"
        notes:
          - note: "This attack places a medium circular AoE in the center of the arena."
          - note: "2 players will also be targeted with repeating AoE puddles - keep moving until the attack ends."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Tornadogenesis"
          - attack: "Seduce & Coriolis Kick"
          - attack: "Abyssal Volcano]"
          - attack: "[Repeat]"
        alerts:
          - alert: "Players should go to their chest when the boss moves to the center to cast Seduce."
          - alert: "Players targeted by Abyssal Volcano's puddle AoEs should continue to move until the attack ends."
        mechanics:
          - title: "Chests & Seduce"
            notes:
              - note: "4 chests sit around the arena and will give players near them the Old buff."
              - note: "Players should assign chests at the beginning of the fight - they will be used to avoid the boss' attack Seduce."
  - title: "Shisui Yohi"
    id: "boss03"
    attacks:
      - title: "Foul Nail"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack will hit the tank multiple times - heal and cooldown as necessary."
      - title: "Thick Fog"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
          - tag: "Mechanic"
          - tag: "Spawn"
        notes:
          - note: "This attack begins by hitting the group for raid wide damage."
          - note: "Churn adds will then spawn and place Dropsy debuffs on players until they are killed."
          - note: "During this attack, the boss will be swimming underwater, creating ripples where it is."
          - note: "When all adds have been killed, the boss will burst out of the water, hitting anyone near it with damage and a Vulnerability Up debuff."
      - title: "Bite and Run"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "The shark adds that spawn will target players with these column AoE attacks and divebomb through the telegraph."
      - title: "Mad Stare"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Gaze"
        notes:
          - note: "Players should face away from the boss when it casts Mad Stare."
          - note: "Players hit by this attack will be feared."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Foul Nail"
          - attack: "Thick Fog"
          - attack: "Shark Spawns & Bite and Run"
          - attack: "Mad Stare]"
          - attack: "[Repeat]"
        alerts:
          - alert: "During Thick Fog, players should keep themselves away from the boss' ripples to avoid being hit when the final add is killed."
          - alert: "Players should DPS the shark adds down as soon as possible."
          - alert: "Watch out for the boss' gaze attack as it will fear anyone it hits."
---
