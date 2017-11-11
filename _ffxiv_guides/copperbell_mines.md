---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title: "Copperbell Mines"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the dungeon Copperbell Mines (Normal) where you'll face off against Kottos the Gigas, Ichorous Ire, and Gyges the Great."
#
# Primary Image (1500px Wide) & Thumbnail (300px Wide)
image:
    - url: "/assets/img/dungeons/copperbell_mines.jpg"
    - urlSmall: "/assets/img/dungeons/small/copperbell_mines.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "Copperbell Mines"
    - term: "Kottos the Gigas"
    - term: "Ichorous Ire"
    - term: "Gyges the Great"
    - term: "Normal"
#
# Patch Information (Number & Name)
patchNumber: 2.0
patchName: "A Realm Reborn"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Normal"
#
# Player Level
plvl: 17
#
# Item Level
ilvl: 000
#
# Order (Combine plvl & ilvl - 70310)
order: 17000
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "dungeon"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/cNKaKd1CBnw"
#
bosses:
  - title: "Kottos the Gigas"
    id: "boss01"
    sequence:
      - phase: 01
        attacks:
          - attack: "Auto Attack"
        alerts:
          - alert: "This boss will spawn after killing a few waves of adds."
        mechanics:
          - title: "Spriggan Sifter Waves"
            notes:
              - note: "Before the boss appears, the group will be bombarded by waves of Spriggan Sifter adds."
              - note: "Tanks should keep all adds off the healer and focused on them."
  - title: "Ichorous Ire"
    id: "boss02"
    sequence:
      - phase: 01
        attacks:
          - attack: "Auto Attack"
        alerts:
          - alert: "This boss can't be DPS'd down like a normal enemy, use the Improved Blasting device to break the boss apart 3 times."
          - alert: "Kill Spriggan adds before they can damage the Blasting Caps required to break the boss apart."
        mechanics:
          - title: "Improved Blasting Device"
            notes:
              - note: "This device will summon a Blasting Cap add that needs to be used to blow the boss into pieces."
              - note: "The Blasting Cap will telegraph a red circular AoE that the boss must be standing in."
              - note: "Do this 3 times and then you can finally damage the boss."
  - title: "Gyges the Great"
    id: "boss03"
    attacks:
      - title: "Colossal Slam"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Melee DPS"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "The boss will hit with a small frontal cone - tanks should keep him facing away from the group."
    sequence:
      - phase: 01
        attacks:
          - attack: "Colossal Slam"
        alerts:
          - alert: "This boss will break open a boulder that will begin to spawn Stone Servant adds - these adds should be prioritized by DPS."
          - alert: "Do not allow the adds to break the second boulder to avoid being overwhelmed."
---
