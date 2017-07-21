---
layout: guide_post
title:  "[Susano] The Pool of Tribute"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/trials/susano_ex.jpg"
    - urlSmall: "/assets/img/trials/small/susano_ex.jpg"
patchNumber: 4.0
patchName: "Stormblood"
difficulty: "Extreme"
plvl: 70
ilvl: 300
order: 70300
instanceType: "trial"
mtqvid: "https://youtu.be/CFWPZb9q_Zo"
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
  - title: "Churning"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
    notes:
      - note: "This attack will give 4 players the Churn debuff that lasts 10 seconds."
      - note: "At 3 seconds left on the timer, a die marker will spawn above players signalling that they should <strong>STOP</strong> moving and attacking."
      - note: "If players do not stop movement before the dice hit 0 they will be hit with a Lightning Resist Down debuff."
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
  - title: "Thunderhead"
    phases:
      - phase: 01
    roles:
      - role: "Column AoE"
    tags:
      - tag: "Everyone"
    notes:
      - note: "Clouds will spawn around the edge of the arena and target a single player with multiple column AoEs - this player can bait these columns away from the rest of the group."
      - note: "When cast in combination with Brightstorm, a single Thunderhead will target the player already targeted for Brightstorm - be wary of how you bait the column AoE."
      - note: "When cast in combination with Levin Bolt, the 2nd player marked will be targeted by the Thunderhead."
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
          - note: "Tanks should swap each Blade Shadow as it will apply a Slashing Resist Down debuff each time it hits."
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
      - note: "Healers should be wary of the damage from this attack."
      - note: "This attack will leave a <strong>PERMANENT</strong> column AoE puddle on the arena for the remainder of the fight that will kill players who stand in it for too long."
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
      - note: "Tank swapping is necessary as Stormsplitter applies a Slashing Resist Down II debuff to the player it hits."
  - title: "Levin Bolt I"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Marker"
      - tag: "AoE Puddle"
    notes:
      - note: "Audio Cue: Hark you to the tumultuous heavens!"
      - note: "4 players in a row will be marked with purple markers."
      - note: "Players marked for this attack will drop a heavy hitting lightning AoE - jump across to the other side of the arena (across the division) to drop this attack safely."
      - note: "When a Thunderhead appears during this attack, the Thunderhead will always target the second player marked for Levin Bolt."
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
          - note: "Audio Cue: Earth and stone at our beck and call!"
          - note: "This attack will encase one player in a stone prison and shuffle it amongst 3 other empty ones - players must free the trapped player before The Sealed Gate kills them."
          - note: "The correct prison will always be at the bottom of players' enmity list."
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
  - title: "Levin Bolt II"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Marker"
      - tag: "AoE Puddle"
    notes:
      - note: "Audio Cue: Now cometh our part! Make Way!"
      - note: "4 players in a row will be marked with purple markers."
      - note: "Players marked for this attack will be stunned and drop a heavy hitting lightning AoE."
      - note: "All other players should jump across the arena's division to the safe side."
sequence:
  - phase: 01
    attacks:
      - attack: "Assail"
      - attack: "Churning"
      - attack: "Brightstorm"
      - attack: "Assail"
      - attack: "Churning"
      - attack: "Rasen Kaikyo"
      - attack: "Brightstorm & Thunderhead"
    alerts:
      - alert: "Tank the boss in the center of the arena during this phase."
      - alert: "Players should stop all movement and attacks when they see dice markers above their heads."
      - alert: "Players targeted by Brightstorm and Thunderhead should be wary of how the column AoE is placed to avoid covering Brightstorm's safe zone."
  - phase: 02
    attacks:
      - attack: "[Blade Shadow & Shock Orbs]"
      - attack: "[Repeat]"
      - attack: "Blade"
    alerts:
      - alert: "A tank must claim the white marker during this phase to shield the group - they will have to mash a button to keep the raid alive."
      - alert: "While the off-tank deals with the Shock Orbs, all other players should focus on DPSing the large blades to avoid wiping during Susano's ultimate."
      - alert: "Tanks will have to swap positions after each Blade Shadow."
  - phase: 03
    attacks:
      - attack: "Stormsplitter"
      - attack: "Levin Bolt I"
      - attack: "Ukehi"
      - attack: "Brightstorm & Thunderhead"
      - attack: "Stormsplitter"
      - attack: "Levin Bolt I & Thunderhead"
      - attack: "Ukehi"
      - attack: "Earth and Stone & The Sealed Gate"
      - attack: "Rasen Kaikyo"
      - attack: "Stormsplitter"
      - attack: "Levin Bolt II"
      - attack: "Various Combinations"
    alerts:
      - alert: "The boss has an enrage timer that activates at around 14 minutes and 40 seconds - he will then continuously cast Ukehi until the group wipes."
      - alert: "Tank the boss next to the AoE left by his ultimate, towards the middle of the arena."
      - alert: "Tanks will have to swap continuously after each Stormsplitter."
      - alert: "Use the audio cues to determine which Levin Bolt is being cast as everyone will have to know how to respond."
      - alert: "During Earth and Stone it is helpful to mark the stone prison that contains your trapped teammate to ensure everyone breaks them out quickly."
    mechanics:
      - title: "Earth and Stone & The Sealed Gate"
        notes:
          - note: "This mechanic will trap a player in a stone prison and shuffle it with 3 empty ones - the player will die if not freed fast enough."
          - note: "The correct prison will always be at the bottom of players' enmity list."
      - title: "Churning & Rasen Kaikyo x2"
        notes:
          - note: "Eventually players will be hit with Churning, only to then be hit with Rasen Kaikyo twice in a row."
          - note: "Players should move out of the first Rasen Kaikyo - STOP to allow Churn to fall off - then immediately move out of the second Rasen Kaikyo."
---
