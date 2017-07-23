---
layout: guide_post
title:  "[O4] Omega: Deltascape V4.0"
date:   2017-04-09 18:00:14 -0300
description: "Read our Guide on the 8 man raid Omega: Deltascape V4.0 where you'll face off against Exdeath."
image:
    - url: "/assets/img/raids/delta_04.jpg"
    - urlSmall: "/assets/img/raids/small/delta_04.jpg"
patchNumber: 4.0
patchName: "Stormblood"
difficulty: "Normal"
plvl: 70
ilvl: 0
order: 70008
instanceType: "raid"
mtqvid: "https://youtu.be/-QE38bqV1P0"
bossName: "Exdeath"
attacks:
  - title: "Doom"
    phases:
      - phase: 01
    roles:
      - role: "Healer"
    tags:
      - tag: "Debuff"
    notes:
      - note: "Marks 2 players with Doom - this must be dispelled or the marked players will die."
  - title: "Blizzard III"
    phases:
      - phase: 01
    variation:
      - title: "Normal"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Puddle AoE"
        notes:
          - note: "Marks many players with puddle AoEs - spread to avoid splashing others."
      - title: "Void"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Raid Wide AoE"
        notes:
          - note: "Void attacks are telegraphed by the boss absorbing energy from the void behind him."
          - note: "Hits the whole group for moderate damage."
          - note: "Players who are standing still will be frozen in place and given Vulnerability Up debuffs."
  - title: "Thunder III"
    phases:
      - phase: 01
    variation:
      - title: "Normal"
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
          - tag: "Debuff"
        notes:
          - note: "Hits the tank with high damage and explodes into a circular AoE."
          - note: "Gives players hit Lightning Resist Down debuffs - tankswap at 2 stacks."
      - title: "Void"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Point Blank AoE"
        notes:
          - note: "Void attacks are telegraphed by the boss absorbing energy from the void behind him."
          - note: "Large point blank AoE - move out of melee range."
          - note: "Players hit by this receive Paralysis and Vulnerability Up debuffs."
  - title: "Fire III"
    phases:
      - phase: 01
    variation:
      - title: "Normal"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Puddle AoE"
        notes:
          - note: "Players marked with a red marker will drop puddles where they stand."
      - title: "Void"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "Void attacks are telegraphed by the boss absorbing energy from the void behind him."
          - note: "Hits all players with moderate raid wide damage."
          - note: "All players will be given the Pyretic debuff - stop moving and attacking to avoid taking damage."
  - title: "Vacuum Wave"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Raid Wide AoE"
      - tag: "Knockback"
    notes:
      - note: "Hits the group for raid wide damage and knocks all players back."
      - note: "During Phase 2 players can be knocked off the edge of the arena - position yourself close to the center of the arena."
  - title: "Holy"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Stack"
    notes:
      - note: "Single player will be marked with a stack marker - all players move in to soak damage."
  - title: "The Decisive Battle"
    phases:
      - phase: 02
    variation:
      - title: "Version I"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Proximity AoE"
          - tag: "Cone AoE"
          - tag: "Debuff"
        notes:
          - note: "Multiple mechanics in a row - a proximity AoE drops at the center of the arena, run to the edge to mitigate damage."
          - note: "A large head will spawn at the center of the arena and hit with a large frontal cone that affects players with damage, Heavy, and Zombification debuffs."
          - note: "Stand behind the boss to avoid being hit."
      - title: "Version II"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Area AoE"
          - tag: "Proximity AoE"
          - tag: "Cone AoE"
          - tag: "Debuff"
        notes:
          - note: "Version II starts with vines that cover the arena with cone AoEs - the proximity AoE occurs at the same time."
          - note: "The cones overlap in a way that there is only 1 safe zone from both attacks."
          - note: "The large head will spawn at the center of the arena facing the safe zone and hit with a large frontal cone that affects players with damage, Heavy, and Zombification debuffs."
          - note: "Everyone needs to run behind the boss as fast as possible."
  - title: "Flare"
    phases:
      - phase: 02
    roles:
      - role: "Everyone"
    tags:
      - tag: "Spread"
    notes:
      - note: "3 players will be marked with white spread markers - spread away from other marked players."
  - title: "Meteor"
    phases:
      - phase: 02
    roles:
      - role: "Healer"
    tags:
      - tag: "Raid Wide AoE"
    notes:
      - note: "Hits the group for high raid wide damage - heal through."
  - title: "Black Hole"
    phases:
      - phase: 02
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
      - tag: "Raid Wide AoE"
    notes:
      - note: "Hits the group for moderate damage and then places many black hole orbs around the arena."
      - note: "These orbs will kill low HP players and give those who survive Vulnerability Up debuffs."
sequence:
  - phase: 01
    attacks:
      - attack: "Doom"
      - attack: "Blizzard III"
      - attack: "Thunder III"
      - attack: "Fire III"
      - attack: "Fire III (Void)"
      - attack: "Thunder III (Void)"
      - attack: "Blizzard III (Void)"
      - attack: "Blizzard III (Void)"
      - attack: "Fire III"
      - attack: "Thunder III"
      - attack: "Vacuum Wave"
      - attack: "Holy"
    alerts:
      - alert: "Healers should bring a means to dispel Doom from players."
      - alert: "Tanks should swap at 2 stacks of Lightning Resist Down."
      - alert: "Vacuum Wave can't knock players off the edge of the arena during this phase."
    mechanics:
      - title: "The Void & Void Attacks"
        notes:
          - note: "A large void behind the boss allows Exdeath to absorb energy and alter the nature of Blizzard, Thunder, and Fire."
          - note: "These attacks do not change names when enhanced, so it is incredibly important that you watch the boss to see if he is absorbing the void while casting."
  - phase: 02
    attacks:
      - attack: "The Decisive Battle (I)"
      - attack: "Holy"
      - attack: "Flare"
      - attack: "Meteor"
      - attack: "Black Hole"
      - attack: "[Repeat Mechanics]"
    alerts:
      - alert: "The Decisive Battle (I) requires players to move around the arena quickly - pay attention to the direction the giant head is facing when it spawns and run behind it."
      - alert: "The walls around the arena are destroyed during this phase - Vacuum Wave can knock players off now."
      - alert: "Black Hole causes orbs to spawn around the arena that can do high damage - tanks will need to be aware of where they're tanking the boss to help the rest of the group navigate around the orbs."
  - phase: 03
    attacks:
      - attack: "The Decisive Battle (II)"
      - attack: "Vacuum Wave"
      - attack: "Holy"
      - attack: "[Repeat Mechanics]"
    alerts:
      - alert: "The Decisive Battle (II) now severely limits the safe zone during the proximity AoE by combining it with cone AoEs from vines."
      - alert: "All mechanics will repeat until the boss is down."
---
