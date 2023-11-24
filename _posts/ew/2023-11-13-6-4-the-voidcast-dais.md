---
layout: new-guide
cms: netlify-cms
guide-type: Trial
title: The Voidcast Dais
slug: the-voidcast-dais
categories: ew
patch: 6.4
difficulty: Normal
player-level: 90
item-level: 615
order: 90614
description: Read our guide for the FFXIV [dungeon, trial, raid] [instance name]
  ([difficulty]), where you'll face off against [boss 1], [boss 2], and [boss
  3].
search-terms:
  - voidcast-Golbez-Azdaja
video-url: https://www.youtube.com/watch?v=f0h9cB0AOqg
instance-mechanics:
  - name: Crescent Blade
    steps:
      - notes:
          - 'Boss faces a random player and cleaves half the room. Move behind
            boss. '
        name: '1'
  - name: Shadow Crescent
    steps:
      - notes:
          - 'Evolution of Crescent Blade in second phase: Large cleave followed
            by AoE, move behind boo AND away. '
        name: '1'
bosses:
  - name: Golbez
    phases:
      - notes:
          - Keep an eye on Crescent Blades
        attacks:
          - type: Regular
            name: Terrastorm
            duty-action: []
            roles:
              - Everyone
            tags:
              - AoE (Area)
            notes:
              - Forms rock above random corner that will explode in a large,
                briefly telegraphed circular AoE. Move away to avoid.
          - type: Regular
            name: Crescent Blade
            roles:
              - Everyone
            tags:
              - Cleave
            notes:
              - Faces a random player and uses a 180 degree frontal cleave. Move
                behind the boss to avoid.
          - type: Regular
            name: Arctic Assault
            roles:
              - Everyone
            tags:
              - AoE (Column)
            notes:
              - Creates 2 walls of ice with spikes on one side of each, pointing
                toward the incoming area of effect. Step behind the spikes and
                into the safe areas
          - type: Regular
            name: Void Meteor
            roles:
              - Tank
              - Healer
            tags:
              - Tankbuster
            notes:
              - On both tanks
          - type: Regular
            name: Lingering Spark
            roles:
              - Everyone
            tags:
              - AoE (Point-blank)
            notes:
              - Multiple baited circle AoEs under players. Move away.
          - type: Regular
            name: Binding Cold
            roles:
              - Everyone
            tags:
              - Raid-wide Damage
            notes:
              - Raid-wide damage  and damage-over-time
        script: []
      - notes:
          - 'Crescent Blade is now Shadow Crescent: Large front cleave followed
            immediately by an AoE'
        attacks:
          - type: Regular
            name: Azdaja's Shadow
            duty-action: []
            roles:
              - Everyone
            notes:
              - Phase transition
            tags:
              - Animation
          - type: Regular
            name: Black Fang
            roles:
              - Everyone
            tags:
              - Raid-wide Damage
          - type: Regular
            name: Shadow Crescent
            roles:
              - Everyone
            tags:
              - Cleave
              - AoE (Circle)
            notes:
              - 'Evolution of Crescent Blade: The large cleave is followed
                immediately by an AoE: Move behind the boss and back away.'
          - type: Regular
            name: Burning Shade
            roles:
              - Everyone
            tags:
              - Spread
            notes:
              - Spread markers on all players. Do not overlap.
          - type: Regular
            name: Meteor Phase
            duty-action: []
            roles:
              - Everyone
              - Healer
            tags:
              - Stack
            notes:
              - 'Soak towers in East and West, which may require multiple
                people. One healer will receive a knockback marker. '
              - 'Marked healer should stand still near/south of center. All
                other players are knocked into towers to soak, or they can
                pre-position and use knockback immune abilities. '
              - Healer tethered to dragon after knockback. Line attack in that
                direction – pull away from raid.
          - type: Regular
            name: Double Meteor
            roles:
              - Everyone
            notes:
              - Two proximity damage effects centered on either the north or
                south corners. Move to opposite side to minimize damage.
            tags:
              - AoE (Circle)
          - type: Regular
            name: Gale Sphere
            roles:
              - Everyone
            tags:
              - AoE (Column)
            notes:
              - Spawns four clones in clockwise or counterclockwise pattern.
                Clones attack in the order they spawn so keep an eye on that
                order. Green orbs creates line AoE, find the safe spot between
                them.
          - type: Regular
            name: Void Stardust
            roles:
              - Everyone
            tags:
              - AoE (Area)
            notes:
              - Two circle telegraphs appear in opposite corners. Move down the
                platform edges and return through the center.
          - type: Regular
            name: Eventide Fall
            roles:
              - Everyone
              - Healer
            tags:
              - Stack
            notes:
              - Targets each healer for a line attack. Split into light parties
                to share damage.
          - type: Regular
            name: Immolating Shade
            roles:
              - Everyone
            notes:
              - One player marked for stack-up. Stack up to share damage.
            tags:
              - Stack
        script: []
---
