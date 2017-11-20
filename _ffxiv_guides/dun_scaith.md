---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title: "Dun Scaith"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the 24 man raid Dun Scaith (Normal) where you'll face off against Death Gaze Hollow, Ferdiad Hollow, Shadowcourt Handmaiden, Proto Ultima, Scathach, and Diabolos."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/raids/dun_scaith.jpg"
    - urlSmall: "/assets/img/raids/small/dun_scaith.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "Dun Scaith"
    - term: "Death Gaze Hollow"
    - term: "Ferdiad Hollow"
    - term: "Shadowcourt Handmaiden"
    - term: "Proto Ultima"
    - term: "Scathach"
    - term: "Diabolos"
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
ilvl: 235
#
# Order (Combine plvl & ilvl - 70310)
order: 60235
#
# Orchestrion Roll
orchestrion: "Promises & Shadow of the Body"
#
# Instance Type
instanceType: "raid"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/uNrzJdfTNLs"
#
bosses:
  - title: "Death Gaze Hollow"
    id: "boss01"
    attacks:
      - title: "Spike of Darkness"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "Focuses the Main Tank."
          - note: "Does moderate damage."
      - title: "Void Death"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Places a large puddle in the middle of the ship."
          - note: "Pulls all players in - run towards edge of ship to avoid."
          - note: "Will pull twice before instantly killing anyone inside."
      - title: "Void Aero II"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
        notes:
          - note: "Drops green markers on 1 player in each alliance."
          - note: "Run away from group, marker drops tornado."
      - title: "Void Blizzard III"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "White, striped telegraphed cone AoE."
          - note: "Stand between stripes to avoid."
      - title: "Void Aero III & Bolt of Darkness"
        phases:
          - phase: 01
        combo:
          - title: "Void Aero III"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Circular AoE"
              - tag: "Knockback"
            notes:
              - note: "Places a large tornado in the middle of the ship."
              - note: "Knocks players back - be sure to be in line with the walls."
          - title: "Bolt of Darkness"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Area AoE"
            notes:
              - note: "Large column attack that hits one half of the ship."
              - note: "Players should use Void Aero III to knock them onto the empty side."
      - title: "Void Blizzard IV & Void Aero IV"
        phases:
          - phase: 01
        combo:
          - title: "Void Blizzard IV"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Proximity AoE"
            notes:
              - note: "Drops 2 proximity markers on 1 side of the ship"
              - note: "These drop large ice crystals."
          - title: "Void Aero IV"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Raid Wide AoE"
              - tag: "Knockback"
            notes:
              - note: "After Void Blizzard IV, the boss will switch to the other side of the ship."
              - note: "Knocks players off the ship - place yourself in front of an ice crystal to survive."
      - title: "Void Death IV"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Enrage Timer"
          - tag: "Area AoE"
        notes:
          - note: "Dark squares will checker the floor."
          - note: "These are safe until Void Death IV is being cast - get out or you’ll die."
          - note: "These squares will fill the ship if the boss is not killed fast enough."
    sequence:
      - phase: 01
        attacks:
          - attack: "Spike of Darkness"
          - attack: "Void Death"
          - attack: "Void Aero II"
          - attack: "Void Blizzard III"
          - attack: "Void Aero III & Bolt of Darkness"
          - attack: "Void Blizzard IV & Void Aero IV"
          - attack: "Void Death IV"
        alerts:
          - alert: "You can fall off the edge of the ship."
          - alert: "Green Markers drop tornados."
          - alert: "Stand in front of the ice crystals that drop to avoid being pushed off the edge."
          - alert: "Dark squares on the floor will kill you when Void Death IV is cast. These act as the boss’ enrage timer and will fill the ship if the boss is not killed fast enough."
  - title: "Ferdiad Hollow"
    id: "boss02"
    attacks:
      - title: "Abyssal Scythe"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
        notes:
          - note: "Drops orange markers on players."
          - note: "These will eventually drop lasting scythe AoEs."
      - title: "Wormhole"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Spawns blue and yellow “Atomos” adds."
          - note: "These adds tether to orb and donut markers."
          - note: "Find the Atomos that is tethered to the donut marker and make note of its colour."
          - note: "Run to the Atomos of the <strong>SAME COLOUR</strong> that is <strong>NOT</strong> tethered to the donut."
          - note: "This Atomos will drop a large donut AoE - stand beneath it to avoid damage and a debuff."
      - title: "Jester’s Reap"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "A large frontal cone telegraphed AoE."
      - title: "Jongleur’s X"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "Does high damage, so prepare to heal/cooldown."
      - title: "Debilitator & Flameflow"
        phases:
          - phase: 01
        combo:
          - title: "Debilitator"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Debuff"
            notes:
              - note: "Adds either Fire Resist Down or Water Resist Down to the whole raid."
          - title: "Flameflow"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
            notes:
              - note: "Spawns blue and orange puddles around the arena."
              - note: "These puddles change colour when a player runs into them."
              - note: "If the raid has Fire Resist Down: turn all the puddles blue."
              - note: "If the raid has Water Resist Down: turn all the puddles orange."
      - title: "Blackbolt"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "Places a stack marker on a single player."
      - title: "Blackfire"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Puddle AoE"
        notes:
          - note: "Drops puddles around the arena that grow over time."
    sequence:
      - phase: 01
        attacks:
          - attack: "Abyssal Scythe"
          - attack: "Wormhole"
          - attack: "Jester’s Reap"
          - attack: "Jongleur’s X"
          - attack: "Debilitator & Flameflow"
          - attack: "Blackbolt"
          - attack: "Blackfire"
        alerts:
          - alert: "Orange Markers drop scythes."
          - alert: "The Debilitator & Flameflow combo mechanic requires raid-wide organization."
          - alert: "Blackbolt requires the raid to stack and will place a stack marker on the appropriate player."
          - alert: "<strong>Add Phase</strong> - kill adds and watch out for the large AoE that covers half the arena."
  - title: "Shadowcourt Handmaiden"
    id: "boss03"
    sequence:
      - phase: 01
        alerts:
          - alert: "Coming Soon!"
  - title: "Proto Ultima"
    id: "boss04"
    sequence:
      - phase: 01
        alerts:
          - alert: "Coming Soon!"
  - title: "Scathach"
    id: "boss05"
    attacks:
      - title: "Thirty Thorns"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
          - role: "Melee DPS"
        tags:
          - tag: "Tankbuster"
          - tag: "Circular AoE"
        notes:
          - note: "Begins by hitting the tanks 3 times."
          - note: "Followed up with near-immediate melee range AoE."
          - note: "Look for her jump animation."
      - title: "Thirty Arrows"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Puddle AoE"
          - tag: "Column AoE"
        notes:
          - note: "Places a puddle that drops an array of weapons."
          - note: "These weapons expand into columns (blue columns) - be far enough away to dodge this entirely."
      - title: "Shadespin"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "Produces cone telegraphed AoEs on either side of the boss."
          - note: "Stand in front or in behind of her <strong>WINGS</strong> to avoid it."
      - title: "Thirty Sickles"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Knockback"
          - tag: "Circular AoE"
        notes:
          - note: "Begins with a circular knockback."
          - note: "The boss will then jump into a random spot on the arena, dropping an AoE telegraph."
      - title: "Shadowlinks"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "When the floor goes dark, stop moving."
          - note: "Moving or using attacks that move you spawn hands from the floor that will do damage over time."
          - note: "It is safe to move when the floor clears."
      - title: "Thirty Souls"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This is a raid-wide AoE that must be healed through."
      - title: "Connla"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
          - tag: "Proximity AoE"
        notes:
          - note: "This add will spawn a proximity marker in the center of the arena when it spawns."
          - note: "Tank this add away from the boss and destroy it as quickly as possible."
      - title: "Nox Orbs"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
        notes:
          - note: "Players will be markers with red and black markers."
          - note: "These marks will drop consecutive black orbs on each player as they move around - run around the edge to avoid splashing the rest of the raid."
      - title: "Shadethrust"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This attack has no telegraph - watch for her to turn away from the tank to a random player."
          - note: "The other obvious indicator for this attack is a large circular symbol appearing on the boss’ back."
          - note: "This attack is a column AoE, so move away from her front."
      - title: "Shadow Limbs"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Tether"
        notes:
          - note: "Shadow Limb adds will spawn and tether to an individual."
          - note: "Tethered players should look AT their add to freeze the add in place."
          - note: "If the add reaches the player, they die."
      - title: "Meteors"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Meteor"
        notes:
          - note: "Meteor telegraphs will spawn around the edge of the arena."
          - note: "At least one player should stand in these circles to soak damage."
      - title: "Thirty Cries"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "Places a stack marker on the <strong>MAIN TANK</strong>."
          - note: "Stack up to soak the damage."
    sequence:
      - phase: 01
        attacks:
          - attack: "Thirty Thorns"
          - attack: "Thirty Arrows"
          - attack: "Shadespin"
          - attack: "Thirty Sickles"
          - attack: "Shadowlinks"
          - attack: "Thirty Souls"
          - attack: "Connla"
          - attack: "Nox Orbs"
          - attack: "Shadethrust"
          - attack: "Shadow Limbs"
          - attack: "Meteors"
          - attack: "Thirty Cries"
        alerts:
          - alert: "AoEs are extremely fast - look for tells instead. Getting hit by an AoE adds Vulnerability stacks."
          - alert: "Tank “Connla” away from the boss and kill it as soon as possible."
          - alert: "Black and Red Markers drop consecutive orbs as you move. Kite them around the edge."
          - alert: "<strong>Add Phase</strong> - kill chimaeras while avoiding meteors. At least one player should stand in the meteor circle to soak up damage."
          - alert: "Thirty Cries requires the raid to stack and will place a stack marker on the <strong>MAIN TANK</strong>."
  - title: "Diabolos"
    id: "boss06"
    attacks:
      - title: "Nightmare"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Gaze"
        notes:
          - note: "Turn away from the boss to avoid this."
          - note: "Players will be put to sleep if hit."
      - title: "Ultimate Terror"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Donut AoE"
        notes:
          - note: "This is a donut AoE - stand in melee range or at max range to avoid being hit."
      - title: "Deathgates"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "These adds will summon more adds if left alive - kill immediately."
      - title: "Ruinous Omen"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack is raid-wide and does heavy damage."
          - note: "Stack and shield to survive."
      - title: "Night Terror"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "Places a stack marker on a single player."
          - note: "Stack up to soak the damage."
      - title: "Lifegate & Deathgates"
        phases:
          - phase: 01
        combo:
          - title: "Lifegate"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Spawn"
            notes:
              - note: "This gate must be killed 4 times before it stays down."
          - title: "Deathgates"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Spawn"
            notes:
              - note: "Prioritize these as they spawn."
              - note: "These gates will spawn more adds if left alive."
      - title: "Hollow Camisado"
        phases:
          - phase: 02
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack is heavy and should be watched for - cooldown and heal as necessary."
      - title: "Shadethrust"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This attack has no telegraph - watch for him to turn away from the tank to a random player."
          - note: "The other obvious indicator for this attack is a large circular symbol appearing on the boss’ back."
          - note: "This attack is a column AoE, so move away from his front."
      - title: "Nox Orbs"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
        notes:
          - note: "Players will be markers with red and black markers."
          - note: "These marks will drop consecutive black orbs on each player as they move around - run around the edge to avoid splashing the rest of the raid."
      - title: "Hollow Night"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
          - tag: "Gaze"
        notes:
          - note: "Places a stack marker on a single player with an extra gaze."
          - note: "Stack up to soak the damage."
          - note: "Face AWAY from the affected player while stacked to avoid the gaze."
      - title: "Particle Beam"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Cause meteors to spawn around the arena."
          - note: "At least one player should place themselves in each meteor to soak damage."
          - note: "The center meteor requires more players."
      - title: "Diabolic Gate"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Pre-assigned players should enter this gate and kill the dragon add immediately."
      - title: "Critical Gravity"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Orbs will spawn around the arena - off tanks should pop these away from other players."
      - title: "Hollow Terror"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Donut AoE"
        notes:
          - note: "This is a donut AoE - stand in melee range or at max range to avoid being hit."
          - note: "Players hit by this will be given Shadowlinks and take damage over time."
      - title: "Hollow Omen"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This is a heavy raid-wide AoE that must be shielded and healed through."
      - title: "Blindside"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "Places a stack marker on the <strong>MAIN TANK</strong>."
          - note: "Stack up to soak the damage."
      - title: "Earthshaker"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
        notes:
          - note: "Drops blue markers on players."
          - note: "These will eventually drop column AoEs that cross the arena."
    sequence:
      - phase: 01
        attacks:
          - attack: "Nightmare"
          - attack: "Ultimate Terror"
          - attack: "Deathgates"
          - attack: "Ruinous Omen"
          - attack: "Night Terror"
          - attack: "Lifegate & Deathgates"
        alerts:
          - alert: "This is a two part fight - if you wipe during the second part, the first part will <strong>NOT</strong> repeat."
          - alert: "Watch out for gaze attacks - turn away from the boss."
          - alert: "Night Terror requires the raid to stack and will place a stack marker on the appropriate player."
      - phase: 02
        attacks:
          - attack: "Hollow Camisado"
          - attack: "Shadethrust"
          - attack: "Nox Orbs"
          - attack: "Hollow Night"
          - attack: "Particle Beam"
          - attack: "Deathgates"
          - attack: "Diabolic Gate"
          - attack: "Critical Gravity"
          - attack: "Hollow Terror"
          - attack: "Hollow Omen"
          - attack: "Blindside"
          - attack: "Earthshaker"
        alerts:
          - alert: "This is a two part fight - if you wipe during the second part, the first part will <strong>NOT</strong> repeat."
          - alert: "The boss now has attacks from the previous boss, Scathach."
          - alert: "Black and Red Markers drop consecutive orbs as you move. Kite them around the edge."
          - alert: "Hollow Night requires the raid to stack on a player, however, all players should face <strong>AWAY</strong> from this player once stack to avoid the gaze."
          - alert: "Diabolic Gate requires raid-wide organization. Assigned players need to enter the Diabolic Gate and kill the add as fast as possible."
          - alert: "Healers should dispel Doom and bleed debuffs."
          - alert: "When the boss casts Hollow Omen, the raid should stack, shield, and mass heal."
          - alert: "Blindside requires the raid to stack and will place a stack marker on the <strong>MAIN TANK</strong>."
          - alert: "Blue Markers will drop column AoEs."
---
