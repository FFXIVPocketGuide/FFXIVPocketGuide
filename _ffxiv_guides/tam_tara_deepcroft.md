---
layout: guide_post
title:  "The Tam-Tara Deepcroft"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/dungeons/tam_tara.jpg"
    - urlSmall: "/assets/img/dungeons/small/tam_tara.jpg"
patchNumber: 2.0
patchName: "A Realm Reborn"
difficulty: "Normal"
plvl: 16
ilvl: 0
order: 16000
instanceType: "dungeon"
mtqvid: "https://youtu.be/_8xWuLi7iVM"
bosses:
  - title: "Void Soulcounters"
    id: "boss01"
    attacks:
      - title: "Enthunder"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Buff"
        notes:
          - note: "The Void Soulcounters will cast this buff on themselves immdiately after spawning."
          - note: "This buff adds lightning damage to the Soulcounter's auto-attacks - interrupting this attack will prevent extra damage."
    sequence:
      - phase: 01
        attacks:
          - attack: "Enthunder"
        alerts:
          - alert: "These minibosses will spawn at each orb platform throughout the dungeon."
          - alert: "Allow the tank to build enough enmity before DPSing them down."
  - title: "Galvanth the Dominator"
    id: "boss02"
    attacks:
      - title: "Mind Blast"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "This attack is a point blank AoE - dodge as necessary."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Mind Blast]"
          - attack: "Wave 01"
          - attack: "Wave 02"
          - attack: "Wave 03"
        alerts:
          - alert: "Galvanth will attack his primary target with recurring 'Water' spells."
          - alert: "This boss has 3 add phases that occur at 75%, 50%, and 25% of the boss' health bar."
        mechanics:
          - title: "Wave 01"
            notes:
              - note: "At 75% health, Galvanth will summon 1 'Inconspicuous Imp' add that will tether to him, providing him with immunity."
              - note: "Focus down this add to continue damaging the boss."
          - title: "Wave 02"
            notes:
              - note: "At 50% health, Galvanth will summon 1 'Inconspicuous Imp' add, 2 'Skeleton Soldier' adds, and 1 'Deepcroft Miteling' add."
              - note: "Focus down the 'Inconspicuous Imp' first to continue damaging the boss."
          - title: "Wave 03"
            notes:
              - note: "At 25% health, Galvanth will summon 2 'Inconspicuous Imp' adds, 2 'Skeleton Soldier' adds, and 2 'Deepcroft Miteling' adds."
              - note: "Focus down the 'Inconspicuous Imp' adds first to continue damaging the boss."
---
