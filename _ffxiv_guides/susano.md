---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title: "The Pool of Tribute"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the trial The Pool of Tribute (Hard) where you'll face off against Susano."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/trials/susano.jpg"
    - urlSmall: "/assets/img/trials/small/susano.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "Stormblood"
    - term: "Susano"
    - term: "The Pool of Tribute"
    - term: "Hard"
#
# Patch Information (Number & Name)
patchNumber: 4.0
patchName: "Stormblood"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Hard"
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
orchestrion: "Revelation"
#
# Instance Type
instanceType: "trial"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/tMHjAazDxfs"
#
bossName: "Susano"
attacks:
  - title: "Assail"
    phases:
      - phase: 01
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
    notes:
      - note: "This attack does moderate damage and has no telegraph but is cast after each 'set' of mechanics."
  - title: "Rasen Kaikyo"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Puddle AoE"
    notes:
      - note: "All players will be targeted by this attack and drop a puddle where they stand - run out of these as soon as possible to avoid high damage and lightning resist debuffs."
  - title: "Brightstorm"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Marker"
      - tag: "Knockback"
      - tag: "Stack"
      - tag: "Area AoE"
    notes:
      - note: "A player will be marked with an orange marker and be knocked back across the arena - they will then be immediately targeted with a stack marker and should back up to the group to help soak damage."
      - note: "Audio Cue: The seas part for we alone!"
      - note: "This audio cue is followed by an arena-wide AoE that has a single, thin column safe zone - this area will be determined by the direction the player knocked back by Brightstorm has traveled."
      - note: "Stand in the safe zone to avoid being knocked into the air and a lightning resist debuff."
  - title: "Dark Cloud"
    phases:
      - phase: 01
    roles:
      - role: "Column AoE"
    tags:
      - tag: "Everyone"
    notes:
      - note: "Clouds will spawn around the edge of the arena and target a single player with multiple column AoEs - this player can bait these columns away from the rest of the group."
  - title: "Blade Shadow & Shock Orbs"
    phases:
      - phase: 02
    combo:
      - title: "Blade Shadow"
        roles:
          - role: "Tank"
        tags:
          - tag: "Active Time Maneuver"
        notes:
          - note: "Susano will leave the arena and pick up a giant sword - a tank should click on the white and purple marker that spawns to shield the group from the attack."
          - note: "The tank that takes the mechanic will have to repeatedly mash a button to keep the raid safe."
          - note: "DPS should focus down the giant sword as soon as possible."
      - title: "Shock Orbs"
        roles:
          - role: "Tank"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Purple orbs will spawn around the arena and the off-tank should run around bursting them to keep them away from the group."
  - title: "Blade"
    phases:
      - phase: 02
    roles:
      - role: "Everyone"
    tags:
      - tag: "Ultimate"
    notes:
      - note: "Susano's ultimate will wipe the raid if the group has not DPS'd down both blades during the previous mechanic."
      - note: "This attack will place a red column AoE through the middle of the arena - avoid this."
  - title: "Stormsplitter"
    phases:
      - phase: 03
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
    notes:
      - note: "This attack does high damage - tanks will be required to cooldown through it."
      - note: "Tank swap if necessary."
  - title: "Earth and Stone & The Sealed Gate"
    phases:
      - phase: 03
    combo:
      - title: "Earth and Stone"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "This attack will encase one player in a stone prison and shuffle it amongst 2 other empty ones - players must free the trapped player before The Sealed Gate kills them."
      - title: "The Sealed Gate"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "The player targeted by Earth and Stone will be subjected to this attack - if they are not freed from the stone prison, this attack will immediately kill them."
  - title: "Ukehi"
    phases:
      - phase: 03
    roles:
      - role: "Healer"
    tags:
      - tag: "Raid Wide AoE"
    notes:
      - note: "Healers should watch out for this cast and heal through it as necessary."
sequence:
  - phase: 01
    attacks:
      - attack: "Assail"
      - attack: "Rasen Kaikyo"
      - attack: "Brightstorm"
      - attack: "Dark Cloud"
    alerts:
      - alert: "Players might feel overwhelmed during Brightstorm - take these mechanics one step at a time and it will get easier to deal with."
      - alert: "Dark Cloud column AoEs will cover large portions of the arena - try and bait them away from the group when you can."
  - phase: 02
    attacks:
      - attack: "[Blade Shadow & Shock Orbs]"
      - attack: "[Repeat]"
      - attack: "Blade"
    alerts:
      - alert: "A tank must claim the white marker during this phase to shield the group - they will have to mash a button to keep the raid alive."
      - alert: "While the off-tank deals with the Shock Orbs, all other players should focus on DPSing the large blades to avoid wiping during Susano's ultimate."
  - phase: 03
    attacks:
      - attack: "[Assail"
      - attack: "Rasen Kaikyo"
      - attack: "Brightstorm"
      - attack: "Dark Cloud"
      - attack: "Stormsplitter"
      - attack: "Earth and Stone & The Sealed Gate"
      - attack: "Ukehi]"
    alerts:
      - alert: "This phase will see all the mechanics above repeat until the boss is killed."
      - alert: "During Earth and Stone it is helpful to mark the stone prison that contains your trapped teammate to ensure everyone breaks them out quickly."
    mechanics:
      - title: "Earth and Stone & The Sealed Gate"
        notes:
          - note: "This mechanic will trap a player in a stone prison and shuffle it with 2 empty ones - the player will die if not freed fast enough."
---
