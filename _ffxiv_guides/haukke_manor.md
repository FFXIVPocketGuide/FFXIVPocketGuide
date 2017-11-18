---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title:  "Haukke Manor"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the dungeon Haukke Manor (Normal) where you'll face off against Manor Claviger, Manor Jester and Manor Steward, and Lady Amandine."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/dungeons/haukke_manor.jpg"
    - urlSmall: "/assets/img/dungeons/small/haukke_manor.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "Hauke Manor"
    - term: "Hawke"
    - term: "Manor Claviger"
    - term: "Manor Jester"
    - term: "Manor Steward"
    - term: "Lady Amandine"
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
plvl: 28
#
# Item Level
ilvl: 000
#
# Order (Combine plvl & ilvl - 70310)
order: 28000
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "dungeon"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/n8KhwmjBKII"
#
# Dungeon Mechanics ============================================================
mechanics:
  - title: "Locked Doors"
    steps:
      - step: 01
        notes:
          - note: "Defeat Manor Claviger to obtain the Green Key, which unlocks the Ivy Door."
          - note: "Pick up the Yellow Key in the basement, which unlocks the Carnation Door."
          - note: "Defeat the Manor Jester and Manor Steward to obtain the Bloody Parchment, which unlocks the Sealed Barrier, leading upstairs."
  - title: "Return"
    steps:
      - step: 01
        notes:
          - note: "After defeating the Manor Jester and Manor Steward in the basement, use your Return spell to teleport back to the beginning of the dungeon - you'll be continuing upstairs."
#
# Multiple Bosses ==============================================================
bosses:
  # Boss Name ==================================================================
  - title: "Manor Claviger"
    # Boss ID (Used in Sidebar Menu)
    id: "boss01"
    # Fight Sequence
    sequence:
      # Fight Phase
      - phase: 01
        # Attack Script
        attacks:
          - attack: "[Cleave"
          - attack: "Void Fire II"
          - attack: "Dark Mist]"
          - attack: "[Repeat]"
        # Alerts
        alerts:
          - alert: "This boss drops the Green Key, allowing you to unlock the Ivy Door and proceed into the basement."
    #
    # Boss Attacks
    #
    # Paired Attack Tags: Marker
    # AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
    # Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
    # Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
    #
    # Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
    attacks:
      # Regular Attack *********************************************************
      - title: "Cleave"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Melee DPS"
        tags:
          - tag: "Cleave"
        notes:
          - note: "The boss will swipe in a frontal cone - avoid the telegraph."
      # Regular Attack *********************************************************
      - title: "Void Fire II"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "Attacks a single player with a circular AoE - move out of the telegraph."
      # Regular Attack *********************************************************
      - title: "Dark Mist"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Point Blank AoE"
        notes:
          - note: "The boss will attack with a large point blank AoE - move out of melee range to avoid being hit."
  # Boss Name ==================================================================
  - title: "Manor Jester and Manor Steward"
    # Boss ID (Used in Sidebar Menu)
    id: "boss02"
    # Fight Sequence
    sequence:
      # Fight Phase
      - phase: 01
        # Attack Script
        attacks:
          - attack: "Soul Drain"
        # Alerts
        alerts:
          - alert: "The Manor Jester is a ranged caster and should be DPS'd down first."
          - alert: "The Manor Steward has higher health and defense and should be tackled second."
    #
    # Boss Attacks
    #
    # Paired Attack Tags: Marker
    # AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
    # Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
    # Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
    #
    # Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
    attacks:
      # Regular Attack *********************************************************
      - title: "Soul Drain"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Point Blank AoE"
        notes:
          - note: "Only the Manor Steward performs this attack - avoid it as necessary."
  # Boss Name ==================================================================
  - title: "Lady Amandine"
    # Boss ID (Used in Sidebar Menu)
    id: "boss03"
    # Fight Sequence
    sequence:
      # Fight Phase
      - phase: 01
        # Attack Script
        attacks:
          - attack: "[Void Fire III"
          - attack: "Void Thunder III"
          - attack: "Lady's Candle"
          - attack: "Dark Mist]"
          - attack: "[Repeat]"
        # Alerts
        alerts:
          - alert: "Players should immediately kill Lady's Candle adds as they spawn, otherwise they will explode with a point blank AoE."
        # Phase Mechanics (Include Duty Gauges)
        mechanics:
          - title: "Void Lamps"
            notes:
              - note: "During the fight, each corner of the room will activate a Void Lamp that will occasionally pulse high raid wide damage to the group."
              - note: "Interact with a lamp to deactivate it - players should each claim a lamp and deactivate theirs when the time comes."
      # Fight Phase
      - phase: 02
        # Attack Script
        attacks:
          - attack: "Stoneskin"
          - attack: "Lady's Handmaiden (x2)"
          - attack: "Manor Sentry"
        # Alerts
        alerts:
          - alert: "This phase begins when the boss's health reaches a low threshold."
          - alert: "The boss will cast Stoneskin and significantly boost its defense while summoning 3 adds - kill these adds before progressing to the boss."
          - alert: "The boss will continue to use attacks from Phase 01 during this phase."
    #
    # Boss Attacks
    #
    # Paired Attack Tags: Marker
    # AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
    # Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
    # Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
    #
    # Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
    attacks:
      # Regular Attack *********************************************************
      - title: "Void Fire III"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack hits the primary threat target for mild damage."
      # Regular Attack *********************************************************
      - title: "Void Thunder III"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack hits the primary threat target for mild damage."
      # Regular Attack *********************************************************
      - title: "Lady's Candle"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
          - tag: "Point Blank AoE"
        notes:
          - note: "These adds will spawn periodically and explode with a point blank AoE unless they are killed."
      # Regular Attack *********************************************************
      - title: "Dark Mist"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Point Blank AoE"
        notes:
          - note: "The boss will telegraph a large point blank AoE - move out of melee range to avoid being hit."
      # Regular Attack *********************************************************
      - title: "Stoneskin"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Buff"
        notes:
          - note: "This attack will trigger at a low health threshold and significantly boost the boss' defense."
      # Regular Attack *********************************************************
      - title: "Lady's Handmaiden"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "The boss will spawn 2 of these adds alongside the Manor Sentry - all of these adds should be killed before progress on the boss can be made."
      # Regular Attack *********************************************************
      - title: "Manor Sentry"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "The boss will spawn 1 of these adds alongside the Lady's Handmaidens - all of these adds should be killed before progress on the boss can be made."
---
