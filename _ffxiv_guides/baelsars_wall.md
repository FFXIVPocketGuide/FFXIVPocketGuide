---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title: "Baelsar's Wall"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the dungeon Baelsar's Wall (Normal) where you'll face off against Magitek Predator, Armored Weapon, and The Griffin."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/dungeons/baelsars_wall.jpg"
    - urlSmall: "/assets/img/dungeons/small/baelsars_wall.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "Baelsar's Wall"
    - term: "Magitek Predator"
    - term: "Armored Weapon"
    - term: "The Griffin"
    - term: "Normal"
#
# Patch Information (Number & Name)
patchNumber: 3.5
patchName: "The Far Edge of Fate"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Normal"
#
# Player Level
plvl: 60
#
# Item Level
ilvl: 230
#
# Order (Combine plvl & ilvl - 70310)
order: 60230
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "dungeon"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/CdS3lto8nVw"
#
bosses:
  - title: "Magitek Predator"
    id: "boss01"
    attacks:
      - title: "Magitek Claw"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack does moderate damage to the tank - cooldown and heal through."
      - title: "Reinforcements"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "DPS"
        tags:
          - tag: "Spawns"
        notes:
          - note: "Adds will spawn and tether to DPS players - these can't be tanked."
          - note: "Kill these as soon as possible to avoid excess damage."
      - title: "Magitek Ray"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This is a long column AoE with a blue telegraph - dodge as necessary."
      - title: "Magitek Missiles"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Markers"
        notes:
          - note: "A player will be marked with a red sphere - move away from others and expect to be hit for high damage."
          - note: "Healers beware players marked by Magitek Missiles and tethered to an add as damage can get high."
    sequence:
      - phase: 01
        attacks:
          - attack: "Magitek Claw"
          - attack: "Reinforcements"
          - attack: "Magitek Ray"
          - attack: "Magitek Missiles"
        alerts:
          - alert: "Adds will spawn and tether to DPS players - these can't be tanked and should be killed as soon as possible."
          - alert: "Red Markers indicate that players should move away from others and expect high damage."
  - title: "Armored Weapon"
    id: "boss02"
    attacks:
      - title: "Launcher"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid-Wide AoE"
        notes:
          - note: "This attack is raid-wide AoE damage that must be healed through."
      - title: "Dynamic Sensory Jammer"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "This attack will hit all players with the 'Extreme Caution' debuff - look for red circular markers around your character."
          - note: "When hit with this attack, <strong>STOP MOVING AND ATTACKING</strong> to avoid taking damage."
      - title: "Diffractive Laser"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Puddle AoE"
        notes:
          - note: "This attack will target a single player and drop a circular puddle AoE on them."
      - title: "Magitek Bit"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "Bits will spawn around the arena and attack in a grid formation - stand in between the telegraphs to avoid damage."
      - title: "Distress Beacon"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawns"
        notes:
          - note: "Distress Beacon will summon a large number of adds that should be picked up by the tank and burned down as fast as possible."
    sequence:
      - phase: 01
        attacks:
          - attack: "Launcher"
          - attack: "Dynamic Sensory Jammer"
          - attack: "Diffractive Laser"
          - attack: "Magitek Bit"
          - attack: "Distress Beacon"
        alerts:
          - alert: "When players are hit with the 'Extreme Caution' debuff, <strong>STOP MOVING AND ATTACKING</strong> to avoid damage."
          - alert: "If you are targeted with Diffractive Laser while you have 'Extreme Caution', allow 'Extreme Caution' to fall off before moving out of the puddle."
  - title: "The Griffin"
    id: "boss03"
    attacks:
      - title: "Beak of the Griffin"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack does raid-wide damage and must be healed through."
      - title: "Flash Powder"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Gaze"
        notes:
          - note: "Look for the gaze indicator and face away from the boss to avoid a stun and accuracy debuff."
      - title: "Sanguine Blade"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Area AoE"
        notes:
          - note: "This attack is preceded by the boss leaping through the air - the attack covers a massive part of the arena, so prepare to run behind the boss to the safe zone."
      - title: "Claw of the Griffin"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack does high damage to the tank and should be cooldowned or healed through."
      - title: "Lionshead"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Lionshead will do raid-wide damage before summoning sword adds around the room."
          - note: "These adds will explode, so everyone should burn down the middle sword to create a safe zone from the attack."
      - title: "Restraint Collar"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
          - role: "DPS"
        tags:
          - tag: "Spawn"
        notes:
          - note: "The boss will place this add on the healer, rendering them useless."
          - note: "Kill this as soon as possible."
      - title: "Big Boot"
        phases:
          - phase: 01
        roles:
          - role: "DPS"
        tags:
          - tag: "Marker"
        notes:
          - note: "A red marker on a DPS player will indicate that the boss is about to kick them across the arena."
          - note: "Be wary of other AoE puddles when you are kicked."
    sequence:
      - phase: 01
        attacks:
          - attack: "Beak of the Griffin"
          - attack: "Flash Powder"
          - attack: "Sanguine Blade"
          - attack: "Claw of the Griffin"
          - attack: "Lionshead"
          - attack: "Restraint Collar"
          - attack: "Big Boot"
        alerts:
          - alert: "When the boss casts Lionshead, be sure to DPS down the middle sword to create a safe zone."
          - alert: "Pay attention to your healer and destroy the 'Restraint Collar' add as soon as it spawns on them."
          - alert: "A Red Marker indicates that the player is about to be kicked across the arena."
---
