---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title: "Guide Name"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the dungeon NAME (DIFFICULTY) where you'll face off against Boss 01, Boss 02, and Boss 03."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/dungeons/asset.jpg"
    - urlSmall: "/assets/img/dungeons/small/asset.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "Search Term"
    - term: "Search Term"
#
# Patch Information (Number & Name)
patchNumber: 0.0
patchName: "Sample Name"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Normal"
#
# Player Level
plvl: 00
#
# Item Level
ilvl: 000
#
# Order (Combine plvl & ilvl - 70310)
order: 00000
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "dungeon/trial/raid"
#
# MTQ Capture Video Link
mtqvid: "YouTube URL"
#
# Dungeon Mechanics ============================================================
mechanics:
  - title: ""
    steps:
      - step: 01
        notes:
          - note: ""
#
# Multiple Bosses ==============================================================
bosses:
  # Boss Name ==================================================================
  - title: ""
    # Boss ID (Used in Sidebar Menu)
    id: "boss01"
    # Fight Sequence
    sequence:
      # Fight Phase
      - phase: 01
        # Attack Script
        attacks:
          - attack: ""
            # Duty Action (Include When Necessary)
            dutyActions:
        # Alerts
        alerts:
          - alert: ""
        # Phase Mechanics (Include Duty Gauges)
        mechanics:
          - title: ""
            notes:
              - note: ""
    #
    # Boss Attacks
    #
    # Paired Attack Tags: Marker
    # AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE, Cross AoE, Figure 8 AoE
    # Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
    # Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
    #
    # Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
    attacks:
      # Regular Attack *********************************************************
      - title: "Attack Name"
        phases:
          - phase: 01
        roles:
          - role: ""
        # Duty Action (Include When Necessary)
        dutyActions:
          - action: ""
        tags:
          - tag: ""
        notes:
          - note: ""
        images:
          - url: "/assets/img/image-path.png"
            alt: "Image Description"
#
# Single Boss ==================================================================
#
# Boss Name
#
bossName: ""
# Fight Sequence
sequence:
  # Fight Phase
  - phase: 01
    # Attack Script
    attacks:
      - attack: ""
        # Duty Action (Include When Necessary)
        dutyActions:
    # Alerts
    alerts:
      - alert: ""
    # Phase Mechanics (Include Duty Gauges)
    mechanics:
      - title: ""
        notes:
          - note: ""
#
# Boss Attacks
#
# Paired Attack Tags: Marker
# AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE, Cross AoE, Figure 8 AoE
# Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
# Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
#
# Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
attacks:
  # Regular Attack *************************************************************
  - title: "Attack Name"
    phases:
      - phase: 01
    roles:
      - role: ""
    # Duty Action (Include When Necessary)
    dutyActions:
      - action: ""
    tags:
      - tag: ""
    notes:
      - note: ""
    images:
      - url: "/assets/img/image-path.png"
        alt: "Image Description"
---
