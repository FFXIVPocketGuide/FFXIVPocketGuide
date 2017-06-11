---
layout: guide_trial
title:  "[Zurvan] Containment Bay Z1T9"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/ffxiv/zurvan_ex.jpg"
patchNumber: 3.5
patchName: "The Far Edge of Fate"
difficulty: "Extreme"
ilvl: 250
instanceType: "trial"
mtqvid: "https://youtu.be/WdtOPon2eQk"
attacks:
  - attack:
      - title: "Flare Star"
        roles:
          - role: "Everyone"
        tags:
          - tag: "AoE Puddle"
        notes:
          - note: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
  - attack:
      - title: "Soar & Flaming Halberd"
        roles:
          - role: "Everyone"
        combo:
          - title: "Soar"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Column AoE"
              - tag: "Divebomb"
            notes:
              - note: "This attack combines a linear AoE (indicated by the orange rectangles) and a divebomb that sweeps across the length of the arena (indicated by the red arrows)."
              - note: "Zurvan will begin by telegraphing 1 of 2 patterns (see images) that will tell players how they should arrange themselves - please note the images below assume you are tanking Zurvan in the <strong>North</strong>."
              - note: "The boss will split into 3 and follow the orange AoE telegraphs. He will then divebomb back through the original telegraphs, following through across the entire arena."
          - title: "Flaming Halberd"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Marker"
            notes:
              - note: "6 players will be marked (red circles) for this attack and it is crucial that they do not overlap - this is difficult as there are few safe areas during Soar."
              - note: "Players (blue dots) should arrange themselves according to the pattern Zurvan attacks with (see images for player locations)."
        images:
          - url: "/assets/img/ffxiv/zurvan/zurvan_ex_soar_01.png"
            alt: "Soar Layout - Even"
          - url: "/assets/img/ffxiv/zurvan/zurvan_ex_soar_02.png"
            alt: "Soar Layout - Cluster"
  - attack:
      - title: "Demonic Dive"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
          - tag: "Marker"
        notes:
          - note: "This attack will place a stack marker on one player and a red marker on another."
          - note: "All players except the one marked with the red marker should stack, while the marked player flees."
  - attack:
      - title: "Biting Halberd"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "Zurvan will face a random direction and begin this massive cone AoE."
          - note: "The only safe spot is <strong>DIRECTLY BEHIND</strong> him."
  - attack:
      - title: "Southern Cross"
        roles:
          - role: "Everyone"
        tags:
          - tag: "AoE Puddle"
        notes:
          - note: "Places an ice AoE puddle on all players - stack together to drop the AoEs in the same location and then move out to one side to avoid being hit."
          - note: "The main tank should move to the <strong>OPPOSITE</strong> side of the raid."
  - attack:
      - title: "Ciclicle"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Donut AoE"
        notes:
          - note: "Large donut AoE - the only safe space is within melee range of the boss."
  - attack:
      - title: "Tail End"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "Large circular AoE - the only safe space is at the edge of the arena - don't forget to avoid the fire at the edge!"
  - attack:
      - title: "Infinite Fire/Ice"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Tether"
        notes:
          - note: "Players will be tethered with either a red or blue tether representing fire or ice respectively."
          - note: "Tethered players should never move farther apart than the width of the boss' hitbox - you will suffer massive DoT damage otherwise."
  - attack:
      - title: "Wave Cannon"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Column AoE"
        notes:
          - note: "Player will be marked with a blue marker - they should move to a designated side of the arena."
          - note: "This long column AoE will cause bleed to other players around it."
  - attack:
      - title: "Tyrfing"
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "The tank will be hit 5 times and then hit with Fire III - cooldown and heal as necessary."
  - attack:
      - title: "Broken Seal"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Spawns red and blue meteors in 1 of 3 patterns (see images)."
          - note: "Players tethered with fire should stand in the red, ice in the blue - be sure to stay near your tether partner!"
          - note: "The pattern that occurs decides the next AoE attack (see follow up)."
        images:
          - url: "/assets/img/ffxiv/zurvan/zurvan_ex_broken_seal_cluster.png"
            alt: "Broken Seak Layout - Side Clusters"
          - url: "/assets/img/ffxiv/zurvan/zurvan_ex_broken_seal_inner.png"
            alt: "Broken Seak Layout - Inner Circle"
          - url: "/assets/img/ffxiv/zurvan/zurvan_ex_broken_seal_outer.png"
            alt: "Broken Seak Layout - Outer Circle"
  - attack:
      - title: "Broken Seal - Follow Up"
        roles:
          - role: "Everyone"
        combo:
          - title: "(Side Clusters) Biting Halberd"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Cone AoE"
            notes:
              - note: "Zurvan will face a random direction and begin this massive cone AoE."
              - note: "The only safe spot is <strong>DIRECTLY BEHIND</strong> him."
          - title: "(Inner Circle) Tail End"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Circular AoE"
            notes:
              - note: "Large circular AoE - the only safe space is at the edge of the arena - don't forget to avoid the fire at the edge!"
          - title: "(Outer Circle) Ciclicle"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Donut AoE"
            notes:
              - note: "Large circular AoE - the only safe space is within melee range of the boss."
spawns:
  - spawn:
    - title: "Thews"
      notes:
        - note: ""
  - spawn:
    - title: "Will"
      notes:
        - note: ""
  - spawn:
    - title: "Wile"
      attacks:
       - attack: "Gaze (Fear)"
      notes:
        - note: ""
  - spawn:
    - title: "Wit"
      attacks:
       - attack: "Meteor"
      notes:
        - note: ""
sequence:
  - phase: "01"
    attacks:
      - attack: "Attack Name"
      - attack: "Attack Name"
    alerts:
      - alert: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
      - alert: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
    mechanics:
      - mechanic:
        - title: "Attack 01"
          notes:
            - note: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
  - phase: "02"
    attacks:
      - attack: "Attack Name"
      - attack: "Attack Name"
    alerts:
      - alert: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
      - alert: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
    mechanics:
      - mechanic:
        - title: "Attack 01"
          notes:
            - note: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
  - phase: "03"
    attacks:
      - attack: "Attack Name"
      - attack: "Attack Name"
    alerts:
      - alert: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
      - alert: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
    mechanics:
      - mechanic:
        - title: "Attack 01"
          notes:
            - note: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
---

<!--
types: Boss, Miniboss, Add
phase: 01, 02, etc.
alerts: markers, special requirements, stack, raid organization, add phase
mechanic tags: tankbuster, AoE, mechanic, markers, combo mechanic, variation, add, enrage timer, gaze, tether, stack
-->
