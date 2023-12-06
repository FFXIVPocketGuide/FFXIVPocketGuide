---
layout: new-guide
cms: netlify-cms
guide-type: Trial
title: The Voidcast Dais
slug: voidcast-dais
categories: ew
patch: 6.4
difficulty: Normal
player-level: 90
item-level: 615
order: 90615
description: Read our guide for the FFXIV [dungeon, trial, raid] [instance name]
  ([difficulty]), where you'll face off against [boss 1], [boss 2], and [boss
  3].
search-terms:
  - endwalker
  - voidcast
  - dais
  - golbez
  - azdaja
video-url: https://www.youtube.com/watch?v=f0h9cB0AOqg
instance-mechanics: []
bosses:
  - phases:
      - notes:
          - "Crescent Balade (later Azdaja's Shadow): Bow turns to random player
            for massive frontal cleave on half the room. Move behind the boss."
        attacks:
          - type: Regular
            name: Terrastorm
            roles:
              - Everyone
            tags:
              - AoE (Area)
            notes:
              - Large rock appears and will crash for a large AoE attack with
                short telegraph.
          - type: Regular
            name: Crescent Blade
            roles:
              - Everyone
            tags:
              - Cleave
            notes:
              - Boss turns to random player for a frontal cleave on on half of
                the platform. Move behind the boss.
          - type: Regular
            name: Arctic assault
            roles:
              - Everyone
            tags:
              - AoE (Area)
            notes:
              - 2 walls of ice with spikes on one side. These quadrants will be
                targeted for AoE. Move behind the walls
          - type: Regular
            name: Void Meteors
            roles:
              - Tank
            tags:
              - Tankbuster
            notes:
              - targets both tanks.
          - type: Regular
            name: Lingering spark
            roles:
              - Everyone
            tags:
              - AoE (Point-blank)
            notes:
              - Several circle AoEs under the players. Keep moving until
                finished.
          - type: Regular
            name: Binding cold
            notes:
              - Frost damage over time.
            tags:
              - Raid-wide Damage
            roles:
              - Everyone
      - notes:
          - "Azdaja's Shadow: Same frontal cleave as Crescent blade, followed
            immediately by AoE under the boss. Move behind the boss and away
            from them."
          - "Meteor phase: 2 columns appear on each side of the arena and will
            require soaking from the players. Before they do, one of the healer
            is marked with a pushback marker before being targeted for a column
            attack. Targeted healer should move to the end of the arena to allow
            the players to be pushed into the column for soaking, and so that
            the following column AoE doesn't cover too much of the arena."
          - "Gale sphere: keep an eye on the order in which they appear, as they
            will create column AoE in the same order."
        attacks:
          - type: Regular
            tags:
              - Animation
            name: "Azdaja's shadow: phase transition"
            roles:
              - Everyone
          - type: Regular
            name: Black fang
            roles:
              - Everyone
            tags:
              - Raid-wide Damage
          - type: Regular
            name: Azdaja's shadow
            roles:
              - Everyone
            tags:
              - Cleave
              - AoE (Circle)
            notes:
              - "Azdaja's Shadow: Same frontal cleave as Crescent blade,
                followed immediately by AoE under the boss. "
          - type: Regular
            name: Burning Shade
            roles:
              - Everyone
            tags:
              - Spread
          - type: Regular
            name: Meteor phase
            roles:
              - Everyone
              - Healer
            tags:
              - Knockback
              - Stack
              - AoE (Column)
            notes:
              - 2 columns appear on each side of the arena and will require
                soaking from the players. Before they do, one of the healer  is
                marked with a pushback marker before being targeted for a column
                attack. Targeted healer should move to the end of the arena to
                allow the players to be pushed into the column for soaking, and
                so that the following column AoE doesn't cover too much of the
                arena.
          - type: Regular
            name: Double meteor
            roles:
              - Everyone
            tags:
              - AoE (Circle)
            notes:
              - 2 large rocks appear above the arena and will create large AoE
                attacks with short telegraph. Move away.
          - type: Regular
            name: Gale Sphere
            roles:
              - Everyone
            notes:
              - Spheres appear in order and will initiate column AoE across the
                arena in the same order.
            tags:
              - AoE (Column)
          - type: Regular
            name: Void Stardust
            roles:
              - Everyone
            tags:
              - AoE (Area)
            notes:
              - Circle AoE will move long each side before coming back in the
                centre. Move to centre first then to the side.
          - type: Regular
            name: Eventide Fall
            roles:
              - Everyone
              - Healer
            tags:
              - Line-of-sight
              - Stack
            notes:
              - The 2 healers are marked by line attacks with stack markers.
                Split the group in 2 to soak up both attacks.
          - type: Regular
            name: Immolating shade
            roles:
              - Everyone
            tags:
              - Stack
    name: Golbez
---
