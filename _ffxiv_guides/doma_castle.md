---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title: "Doma Castle"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the dungeon Doma Castle (Normal) where you'll face off against Magitek Rearguard, Magitek Hexadrone, and Hypertuned Grynewaht."
#
# Primary Image (1500px Wide) & Thumbnail (300px Wide)
image:
    - url: "/assets/img/dungeons/doma_castle.jpg"
    - urlSmall: "/assets/img/dungeons/small/doma_castle.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "Doma Castle"
    - term: "Magitek Rearguard"
    - term: "Magitek Hexadrone"
    - term: "Hypertuned Grynewaht"
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
plvl: 67
#
# Item Level
ilvl: 000
#
# Order (Combine plvl & ilvl - 70310)
order: 67000
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "dungeon"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/Z3rVn3UBy3w"
#
bosses:
  - title: "Magitek Rearguard"
    id: "boss01"
    attacks:
      - title: "Garlean Fire"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "The boss will target a single player and telegraph this attack with animated arrows in the player's direction."
          - note: "This attack hits the targeted player multiple times."
      - title: "Magitek Bits"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "Magitek bits will spawn off the arena and telegraph multiple column AoEs that will span the entire arena."
          - note: "This attack gets tougher to dodge over the course of the fight."
      - title: "Rearguard Mines"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "These adds will spawn on either side of the arena and travel across to the opposing side."
          - note: "These cannot be killed and will explode if a player hits them."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Garlean Fire"
          - attack: "Magitek Bits"
          - attack: "Rearguard Mines]"
          - attack: "[Repeat]"
        alerts:
          - alert: "Players should be aware of their positioning at all times during this fight - be sure not to step into an AoE while weaving away from the Rearguard Mine spawns."
  - title: "Magitek Hexadrone"
    id: "boss02"
    attacks:
      - title: "Circle of Death"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "This attack is a point-blank circular AoE - dodge as necessary."
      - title: "2-Tonze Magitek Missile"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "A single player will be marked with an orange stack marker - all players should move in to soak damage."
      - title: "Magitek Bits"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
          - tag: "Knockback"
        notes:
          - note: "Similarly to the previous fight, Bits will spawn off the arena and telegraph column AoEs across the arena."
          - note: "These columns are now persistent and include an orange tether - if these are hit by players, the player will be knocked back in the opposite direction."
      - title: "Magitek Missiles"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Pillar"
        notes:
          - note: "A pillar will spawn on the arena - all players should stand next to it to soak damage from this attack."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Circle of Death"
          - attack: "2-Tonze Magitek Missile"
          - attack: "Magitek Bits"
          - attack: "Magitek Missile]"
          - attack: "[Repeat]"
        alerts:
          - alert: "This fight takes positioning further and requires you to avoid excessive movement while the Magitek Bits' column AoEs are present - running into their orange tethers will send you flying backwards."
          - alert: "Players should all stand next to the pillar when it spawns to soak damage from Magitek Missiles."
  - title: "Hypertuned Grynewaht"
    id: "boss03"
    attacks:
      - title: "Chainsaw"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stab"
        notes:
          - note: "The boss will periodically use Chainsaw in front of him - this attack lasts a few seconds and players should move out of its way."
      - title: "Delay-Action Charge"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Puddle AoE"
        notes:
          - note: "Players will be marked with large red AoE circles - be sure to move away from others and avoid overlap."
      - title: "Gunsaw"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "The boss will target a player and continuously shoot them with Gunsaw - this player should avoid splashing the attack on others."
      - title: "Prey"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Proximity AoE"
        notes:
          - note: "A player will be marked for a circular AoE and then drop a proximity AoE where they are standing - players should run away from others and drop this near an edge."
          - note: "The player marked for this attack should run immediately after the AoE is dropped."
      - title: "Sawblades"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Sawblade adds will spawn in patterns around the arena and divebomb through telegraphed column AoEs."
      - title: "Magitek Bits"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
          - tag: "Knockback"
        notes:
          - note: "Similarly to the previous fight, Bits will spawn off the arena and telegraph column AoEs across the arena."
          - note: "These columns are now persistent and include an orange tether - if these are hit by players, the player will be knocked back in the opposite direction."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Chainsaw"
          - attack: "Delay-Action Charge"
          - attack: "Gunsaw"
          - attack: "Prey"
          - attack: "Sawblades"
          - attack: "Magitek Bits]"
          - attack: "[Repeat]"
        alerts:
          - alert: "Tanks should be wary of Chainsaw as it will continue to hit you unless you actively move out of the boss's range."
          - alert: "Players targeted by Prey should try to avoid trapping themselves with the rest of the group when the Magitek Bits spawn their knockback tethers."
          - alert: "When the Sawblades spawn, pay close attention to their AoE patterns to avoid being overwhelmed."
---
