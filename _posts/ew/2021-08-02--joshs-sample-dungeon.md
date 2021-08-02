---
layout: new-guide
cms: netlify-cms
guide-type: Dungeon
title: Josh's Sample Dungeon
slug: joshs-sample-dungeon
categories: ew
patch: 6
difficulty: Normal
player-level: 90
item-level: 500
order: "{{ player-level }}{{ item-level }}"
description: Read our guide for the FFXIV dungeon Josh's Sample Dungeon
  (Normal), where you'll face off against Josh, Theo, and Joel.
hero-image: /assets/img/4-3.jpg
list-image: /assets/img/4-3.jpg
search-terms:
  - sample
  - test
  - things
  - otherstuff
video-url: https://google.com
instance-mechanics:
  - name: One Helluva Mechanic
    steps:
      - name: "1"
        notes:
          - Holy hell.
          - This one is really bad.
      - name: Step 2
        notes:
          - Even worse mate.
bosses:
  - name: Josh
    phases:
      - notes:
          - Josh will slap the whole party with sarcasm, Healers be ready to top
            the party's health up.
        script:
          - attack: Sarcasm
            duty-action: true
          - attack: Side Glare
            duty-action: true
          - attack: Snarky Remark
            duty-action: true
        attacks:
          - type: Regular
            name: Sarcasm
            duty-action:
              - Patience
            roles:
              - Healer
            tags:
              - Raid-wide Damage
            notes:
              - This one hits the whole party for heavy damage, but can be
                mitigated with the Patience Duty Action.
            images:
              - image: /assets/img/guide_index.jpg
                alt: There's a shark on my boat!
          - type: Combo
            name: Side Glare
            combos:
              - name: Side Glare (Left)
                roles:
                  - Everyone
                tags:
                  - AoE (Circle)
                  - Debuff
                notes:
                  - This one will give everyone heavy if you're standing in the
                    circle telegraph.
                images:
                  - image: /assets/img/guide_index_default.jpg
                    alt: Pretty!
              - name: Side Glare (Right)
                roles:
                  - Everyone
                tags:
                  - AoE (Cone)
                  - Knockback
                notes:
                  - This one hits in a cone, and will knock everyone inside back.
---
