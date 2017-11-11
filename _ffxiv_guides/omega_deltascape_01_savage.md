---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title: "Omega: Deltascape V1.0"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the 8 man raid Omega: Deltascape V1.0 (Savage) where you'll face off against Alte Roite."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/raids/delta_01_s.jpg"
    - urlSmall: "/assets/img/raids/small/delta_01_s.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "O1S"
    - term: "V1S"
    - term: "Omega: Deltascape V1.0"
    - term: "Version"
    - term: "Alte Roite"
    - term: "Savage"
#
# Patch Information (Number & Name)
patchNumber: 4.0
patchName: "Stormblood"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Savage"
#
# Player Level
plvl: 70
#
# Item Level
ilvl: 310
#
# Order (Combine plvl & ilvl - 70310)
order: 70310
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "raid"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/osm1NxHqAuA"
#
bossName: "Alte Roite"
attacks:
  - title: "The Classical Elements (Breakdown)"
    phases:
      - phase: 01
    notes:
      - note: "This section breaks down all attacks possible during The Classical Elements - see each individual attack for specific combos and special instructions."
      - note: "The group should assign players to a specific spot to drop Levin Bolt throughout the fight - see the image below."
    combo:
      - title: "Inner Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
        notes:
          - note: "Places orbs at the center of the arena that eventually grow and explode."
          - note: "When paired with Downburst, these orbs can be knocked from the center outwards."
      - title: "Outer Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
        notes:
          - note: "Places orbs around the edge of the arena that eventually grow and explode."
      - title: "T-Shape Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
        notes:
          - note: "Places orbs in a T-shape on the arena that eventually grow and explode."
          - note: "When paired with Downburst, players should stand at the top of the T."
      - title: "Downburst"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
          - tag: "Knockback"
        notes:
          - note: "Places a tornado at the center of the room that will kill players it touches."
          - note: "Knocks back both players and Fire Orbs - be careful to not get knocked off the edge or into a Fire Orb explosion."
      - title: "Thin Ice"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Turns the arena to ice - moving will slide your character in a fixed direction for a short distance."
      - title: "Blaze"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "A healer will be targeted with a stack marker - players should stack to soak damage."
      - title: "Breathwing"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
          - tag: "Knockback"
        notes:
          - note: "Similar to Downburst but from one side - boss flies to edge and knocks players and Fire Orbs across the arena."
      - title: "Clamp"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This attack has no telegraph and places a column AoE from the front of the boss - keep to his sides."
      - title: "Levin Bolt"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Circular AoE"
        notes:
          - note: "Players are marked with purple markers and then drop a small lightning AoE where they stand."
        images:
          - url: "/assets/img/raids/omega_01_s/omega_01_s_levin_bolt.png"
            alt: "Levin Bolt Layout"
  - title: "Wyrmtail"
    phases:
      - phase: 01
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
    notes:
      - note: "This attack targets the primary threat target for high damage."
  - title: "Twin Bolt"
    phases:
      - phase: 01
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
      - tag: "Mechanic"
    notes:
      - note: "This attack targets the main tank and the player physically closest to them."
      - note: "Off tanks can ensure that they take the hit by sticking close to the main tank during the cast."
      - note: "This hits more frequently and with more damage in Savage."
  - title: "The Classical Elements (I)"
    phases:
      - phase: 01
    notes:
      - note: "Players should stand just outside of the boss' target circle - far enough away from Downburst's tornado but close enough to the center to avoid being knocked off."
      - note: "Once knocked back, players should slide towards the middle to dodge the Fire Orb explosions and then immediately slide to their Levin Bolt position."
    combo:
      - title: "Inner Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
      - title: "Downburst"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
          - tag: "Knockback"
      - title: "Thin Ice"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
      - title: "Levin Bolt"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Circular AoE"
  - title: "Roar"
    phases:
      - phase: 01
    roles:
      - role: "Healer"
    tags:
      - tag: "Raid Wide AoE"
    notes:
      - note: "This attack hits the group for high raid wide damage - healers should keep an eye on players with stacks of Vulnerability Up debuffs."
  - title: "Clamp"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Column AoE"
    notes:
      - note: "This attack has no telegraph and places a column AoE from the front of the boss - keep to his sides."
  - title: "The Classical Elements (II)"
    phases:
      - phase: 01
    notes:
      - note: "Players should stand in the center to avoid the Outer Fire Orb explosions."
      - note: "Everyone should then move into their Levin Bolt position to drop the attack and avoid being hit by the Inner Fire Orbs."
      - note: "All players should then return and stack for Blaze."
    combo:
      - title: "Outer Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
      - title: "Levin Bolt"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Circular AoE"
      - title: "Inner Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
      - title: "Blaze"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
  - title: "Charybdis"
    phases:
      - phase: 02
    roles:
      - role: "Healer"
    tags:
      - tag: "Raid Wide AoE"
    notes:
      - note: "This attack takes all players to 1HP - healers need to get all players' health back up immediately."
      - note: "The boss will often follow this attack up with Roar."
  - title: "The Classical Elements (III)"
    phases:
      - phase: 02
    notes:
      - note: "Players should stand at the top of the T created by the Fire Orbs so that they are knocked back into the only safe zone."
      - note: "When Downburst is over, all players should slide back to the center to dodge the Fire Orbs and then slide into their Levin Bolt position."
    combo:
      - title: "T-Shape Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
      - title: "Downburst"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
          - tag: "Knockback"
      - title: "Thin Ice"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
      - title: "Levin Bolt"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Circular AoE"
    images:
      - url: "/assets/img/raids/omega_01_s/omega_01_s_t_fire_orbs.png"
        alt: "T-Shape Fire Orb Layout"
  - title: "The Classical Elements (IV)"
    phases:
      - phase: 02
    notes:
      - note: "The boss will fly to one edge - all players should stack in front of him to avoid being knocked off by Breathwing."
      - note: "Once Thin Ice is cast, slide out of Clamp's range, off to the boss' side."
    combo:
      - title: "Inner Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
      - title: "Thin Ice"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
      - title: "Breathwing"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
          - tag: "Knockback"
      - title: "Clamp"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
  - title: "Blaze"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Stack"
    notes:
      - note: "1 healer will be marked with an orange stack marker - all players should stack to soak damage."
  - title: "The Classical Elements (V)"
    phases:
      - phase: 03
    notes:
      - note: "Pre-position yourself in your Levin Bolt spot until it has been cast."
      - note: "Once they've dropped Levin Bolt, players should run to the center to avoid Outer Fire Orb explosions and then immediately move out of Clamp's range."
    combo:
      - title: "Inner Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
      - title: "Levin Bolt"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Circular AoE"
      - title: "Outer Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
      - title: "Clamp"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
  - title: "The Classical Elements (VI)"
    phases:
      - phase: 03
    notes:
      - note: "Players should stand in between 2 of the Inner Fire Orbs so that they are knocked back into a safe zone by Downburst."
      - note: "All players should slide back to the center to stack for Blaze."
    combo:
      - title: "Outer Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
      - title: "Inner Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
      - title: "Thin Ice"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
      - title: "Downburst"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
          - tag: "Knockback"
      - title: "Blaze"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
  - title: "The Classical Elements (VII)"
    phases:
      - phase: 04
    notes:
      - note: "Players should remain in the center to avoid Outer Fire Orb explosions and then move to their Levin Bolt position to drop the attack."
      - note: "Wait for the Inner Fire Orbs to explode and then move back to the center to stack for Blaze."
    combo:
      - title: "Outer Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
      - title: "Levin Bolt"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Circular AoE"
      - title: "Inner Fire Orbs"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
      - title: "Blaze"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
sequence:
  - phase: 01
    attacks:
      - attack: "Wyrmtail"
      - attack: "Twin Bolt"
      - attack: "The Classical Elements (I)"
      - attack: "Roar"
      - attack: "Wyrmtail"
      - attack: "Wyrmtail"
      - attack: "Twin Bolt"
      - attack: "Clamp"
      - attack: "The Classical Elements (II)"
    alerts:
      - alert: "Players should note that there are no longer barriers around the arena - you can be knocked off by Downburst and Breathwing."
      - alert: "The Classical Elements now combines a handful of attacks in various patterns."
      - alert: "Players should assign Levin Bolt locations before the fight begins."
  - phase: 02
    attacks:
      - attack: "Wyrmtail"
      - attack: "Wyrmtail"
      - attack: "Twin Bolt"
      - attack: "Roar"
      - attack: "Roar"
      - attack: "Charybdis"
      - attack: "Roar"
      - attack: "The Classical Elements (III)"
      - attack: "The Classical Elements (IV)"
    alerts:
      - alert: "Healers should be wary of Charybdis - heal the group before the following Roar is cast."
      - alert: "The Classical Elements (III) has a unique T-Shaped Fire Orb pattern - see the diagram."
  - phase: 03
    attacks:
      - attack: "Blaze"
      - attack: "Roar"
      - attack: "Wyrmtail"
      - attack: "Wyrmtail"
      - attack: "Charybdis"
      - attack: "Twin Bolt"
      - attack: "The Classical Elements (V)"
      - attack: "Roar"
      - attack: "Roar"
      - attack: "The Classical Elements (VI)"
    alerts:
      - alert: "Healers and Tanks will have to watch out for repeating Wyrmtails and Roars."
  - phase: 04
    attacks:
      - attack: "Roar"
      - attack: "Wyrmtail"
      - attack: "Wyrmtail"
      - attack: "Twin Bolt"
      - attack: "Clamp"
      - attack: "The Classical Elements (VII)"
      - attack: "Enrage"
    alerts:
      - alert: "The boss will enrage at 13:30 by placing Fire Orbs all over the arena."
---
