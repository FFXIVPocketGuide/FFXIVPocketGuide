---
layout: guide_post
title:  "Bardam's Mettle"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/dungeons/bardams_mettle.jpg"
    - urlSmall: "/assets/img/dungeons/small/bardams_mettle.jpg"
patchNumber: 4.0
patchName: "Stormblood"
difficulty: "Normal"
plvl: "65"
instanceType: "dungeon"
mtqvid: "https://youtu.be/yNgyWqajeHA"
bosses:
  - title: "Galura"
    id: "boss01"
    attacks:
      - title: "Heave"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "This attack will hit in a wide cone - face the boss away from the group at all times."
      - title: "Crumbling Crust"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "This attack will spawn multiple small circular AoEs around the arena - dodge as necessary."
      - title: "Rush"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
          - tag: "Tether"
          - tag: "Proximity AoE"
        notes:
          - note: "The boss will tether to a player and telegraph a column in their direction - this player should run as far away from the boss as possible to reduce the damage taken."
      - title: "Warcry & Earthquake"
        phases:
          - phase: 01
        combo:
          - title: "Warcry"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
            notes:
              - note: "Various groups of animals will be positioned around the edges of the arena - Warcry will activate animals close to the boss."
              - note: "Rams will cause column AoEs when activated."
              - note: "Sheep will run around the arena and cause small, circular AoEs when activated."
              - note: "Coeurls will cause massive cone AoEs when activated."
          - title: "Earthquake"
            roles:
              - role: "Healer"
            tags:
              - tag: "Raid Wide AoE"
            notes:
              - note: "Earthquake will hit the group for raid wide damage - heal as necessary."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Heave"
          - attack: "Crumbling Crust"
          - attack: "Rush"
          - attack: "Warcry & Earthquake]"
          - attack: "[Repeat]"
        alerts:
          - alert: "Players should be aware of Galura's attack Rush - the boss will charge at the tethered player and deal damage based on proximity."
          - alert: "The various animal mobs have different attack patterns - make note of which animals are near the boss when it casts Warcry."
  - title: "Bardam"
    id: "boss02"
    sequence:
      - phase: 01
        attacks:
          - attack: "Pull"
          - attack: "Gaze"
          - attack: "Grid AoE"
        alerts:
          - alert: "This fight is unique in that you do not have to attack anything - players should organize themselves in one quadrant of the arena each and dodge mechanics as necessary."
          - alert: "Players must successfully avoid being hit more than once each phase in order to win."
          - alert: "Phase 1 involves a single golem with a few basic AoE attacks."
      - phase: 02
        attacks:
          - attack: "Pillars"
          - attack: "Donut AoE"
          - attack: "Orange Marker"
          - attack: "Area AoE"
        alerts:
          - alert: "During this phase, players will be required to deal with extra mechanics - when pillars appear it is integral that at least one player stands in each pillar zone to avoid being hit."
          - alert: "The boss will attack with an area AoE that will cover 3 of 4 quadrants - all players should move into the safe quadrant to avoid damage."
      - phase: 03
        attacks:
          - attack: "Meteor"
        alerts:
          - alert: "During this final phase, 2 more golems will spawn and perform mechanics as well."
          - alert: "4 boulders will spawn and eventually be destroyed until 1 remains - this will be used to avoid damage from the meteor making its way to the arena. Players should place themselves between the meteor and the remaining boulder."
  - title: "Yol"
    id: "boss03"
    attacks:
      - title: "Feather Cut"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
        tags:
          - tag: "Cleave"
        notes:
          - note: "This attack has moderate to high damage - tanks should keep the boss facing away from the group at all times."
      - title: "Wind Unbound"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Raid Wide AoE"
          - tag: "Column AoE"
        notes:
          - note: "This attack will begin by hitting the group with raid wide damage - this will be followed up by the spawning of multiple different orbs."
          - note: "These orbs will cause column AoEs in random directions."
      - title: "Flutterfall"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Circular AoE"
        notes:
          - note: "Players will be marked with an orange marker and subsequently hit with a medium-sized AoE - avoid others to keep damage to yourself."
      - title: "Eye of the Fierce"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Gaze"
        notes:
          - note: "Players should face away from Yol during this cast to avoid a confusion debuff."
      - title: "Corpsecleaner Eagle"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "Yol will disappear from the platform and spawn these adds one at a time."
          - note: "While players are killing them, Yol will spawn around the edge of the arena and dash across - move out of his line of sight to avoid damage."
      - title: "Wingbeat"
        phases:
          - phase: 03
        roles:
          - role: "Everyone"
        tags:
          - tag: "Knockback"
        notes:
          - note: "This attack will knock players towards the edge of the arena - be ready to run back to the center to avoid damage from Yol's AoEs."
    sequence:
      - phase: 01
        attacks:
          - attack: "Feather Cut"
          - attack: "Wind Unbound"
          - attack: "Flutterfall"
          - attack: "Eye of the Fierce"
        alerts:
          - alert: "This boss has quite a few AoE patterns to keep an eye out for - while things might feel hectic, take each mechanic step by step and dodge as necessary."
          - alert: "Players marked with an orange marker should move away from others to avoid splash damage from Flutterfall."
      - phase: 02
        attacks:
          - attack: "Corpsecleaner Eagle x2"
        alerts:
          - alert: "Yol will leave the arena and spawn these adds one after the other."
          - alert: "As players focus these adds down, the boss will spawn along the edge of the arena and dash forward in a straight line - players should move out of his line-of-sight to avoid taking damage."
      - phase: 03
        attacks:
          - attack: "Wingbeat"
          - attack: "[Feather Cut"
          - attack: "Wind Unbound"
          - attack: "Flutterfall"
          - attack: "Eye of the Fierce]"
          - attack: "[Repeat]"
        alerts:
          - alert: "This phase begins by Yol beginning to glow - both of his wings will become targetable and should be DPS'd down as soon as possible."
          - alert: "During this phase, Yol will bombard the outer area of the arena with AoE attacks, avoid as necessary."
          - alert: "Once Yol's wings are destroyed, he will return to his regular attack pattern."
---
