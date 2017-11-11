---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title:  "Alexander: The Fist of the Father"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the 8 man raid Alexander: The Fist of the Father (Normal) where you'll face off against Faust and Oppressor."
#
# Primary Image (1500px Wide) & Thumbnail (300px Wide)
image:
    - url: "/assets/img/raids/alex_1.jpg"
    - urlSmall: "/assets/img/raids/small/alex_1.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "A1"
    - term: "Alexander: The Fist of the Father"
    - term: "Faust"
    - term: "Oppressor"
    - term: "Normal"
#
# Patch Information (Number & Name)
patchNumber: 3.0
patchName: "Heavensward"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Normal"
#
# Player Level
plvl: 60
#
# Item Level
ilvl: 170
#
# Order (Combine plvl & ilvl - 70310)
order: 60170
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "raid"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/JR2anBXKVes"
#
bosses:
  - title: "Faust"
    id: "boss01"
    sequence:
      - phase: 01
        alerts:
          - alert: "Burn this miniboss down while the off tank holds all other adds."
  - title: "Oppressor"
    id: "boss02"
    attacks:
      - title: "Resin Bomb"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "This is a circular AoE - avoid as necessary."
      - title: "Photon Spaser"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This is a column AoE - avoid as necessary."
      - title: "Gunnery Pod"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This raid-wide AoE is unavoidable - heal through it."
      - title: "Hydrothermal Missile"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
        notes:
          - note: "Players marked with a red marker should prepare to be hit multiple times."
          - note: "Avoid other players until the attack is complete."
      - title: "Emergency Deployment"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "Two adds will spawn and tether to their targets."
          - note: "When killed, these adds will drop a timed puddle AoE to be avoided - make note of this as it will be used in a later mechanic."
      - title: "3000-Onze Missile & Emergency Deployment"
        phases:
          - phase: 02
        combo:
          - title: "3000-Onze Missile"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Meteor"
            notes:
              - note: "Vertical blue lasers will appear on the arena indicating bomb locations."
              - note: "These will deal massive damage if not nullified."
          - title: "Emergency Deployment"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Spawn"
            notes:
              - note: "As before, adds will spawn and drop a puddle AoE when killed."
              - note: "These adds should be killed directly under the bombs' laser beams to nullify damage."
      - title: "Quick Landing"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Proximity AoE"
        notes:
          - note: "Both bosses will leap into the air and place proximity markers on one side of the room."
          - note: "All players should run to the opposite side to mitigate damage - tanks be ready to pull the bosses apart when they land."
      - title: "Self Destruct"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "When one boss is killed, the other will begin casting this attack - if successful it will wipe the raid."
          - note: "DPS both bosses equally during the fight so that you can avoid this mechanic."
    sequence:
      - phase: 01
        attacks:
          - attack: "Resin Bomb"
          - attack: "Photon Spaser"
          - attack: "Gunnery Pod"
          - attack: "Hydrothermal Missile"
          - attack: "Emergency Deployment"
        alerts:
          - alert: "Tank this boss in the south of the room."
          - alert: "This boss has a wide frontal cleave, so be sure to tank away from the raid group."
          - alert: "Red Markers indicate multiple hits are incoming - avoid other players and heal as necessary."
      - phase: 02
        attacks:
          - attack: "3000-Onze Missile & Emergency Deployment"
          - attack: "Quick Landing"
          - attack: "Self Destruct"
        alerts:
          - alert: "This phase will begin around the 90 second mark."
          - alert: "A second boss will enter the arena and must be <strong>TANKED AWAY</strong> from the first boss - if they are too close together, they will buff each others' attack."
          - alert: "It is important to DPS these bosses equally - when one is killed, the second will wipe the raid if not killed fast enough."
          - alert: "Kill adds below the laser beam bomb indicators to mitigate their damage."
---
