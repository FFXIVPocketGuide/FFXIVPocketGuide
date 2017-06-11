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
  - title: "Flare Star"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "AoE Puddle"
    notes:
      - note: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
  - title: "Soar & Flaming Halberd"
    phases:
      - phase: 02
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
  - title: "Demonic Dive"
    phases:
      - phase: 02
    roles:
      - role: "Everyone"
    tags:
      - tag: "Stack"
      - tag: "Marker"
    notes:
      - note: "This attack will place a stack marker on one player and a red marker on another."
      - note: "All players except the one marked with the red marker should stack, while the marked player flees."
  - title: "Biting Halberd"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Cone AoE"
    notes:
      - note: "Zurvan will face a random direction and begin this massive cone AoE."
      - note: "The only safe spot is <strong>DIRECTLY BEHIND</strong> him."
  - title: "Southern Cross"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "AoE Puddle"
    notes:
      - note: "Places an ice AoE puddle on all players - stack together to drop the AoEs in the same location and then move out to one side to avoid being hit."
      - note: "The main tank should move to the <strong>OPPOSITE</strong> side of the raid."
  - title: "Ciclicle"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Donut AoE"
    notes:
      - note: "Large donut AoE - the only safe space is within melee range of the boss."
  - title: "Tail End"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Circular AoE"
    notes:
      - note: "Large circular AoE - the only safe space is at the edge of the arena - don't forget to avoid the fire at the edge!"
  - title: "Infinite Fire/Ice"
    phases:
      - phase: 05
    roles:
      - role: "Everyone"
    tags:
      - tag: "Tether"
    notes:
      - note: "Players will be tethered with either a red or blue tether representing fire or ice respectively."
      - note: "Tethered players should never move farther apart than the width of the boss' hitbox - you will suffer massive DoT damage otherwise."
  - title: "Wave Cannon"
    phases:
      - phase: 05
    roles:
      - role: "Everyone"
    tags:
      - tag: "Marker"
      - tag: "Column AoE"
    notes:
      - note: "Player will be marked with a blue marker - they should move to a designated side of the arena."
      - note: "This long column AoE will cause bleed to other players around it."
  - title: "Tyrfing"
    phases:
      - phase: 05
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
    notes:
      - note: "The tank will be hit 5 times and then hit with Fire III - cooldown and heal as necessary."
  - title: "Broken Seal"
    phases:
      - phase: 05
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
  - title: "Broken Seal - Follow Up"
    phases:
      - phase: 05
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
  - title: "The Demon's Claw & Wave Cannon"
    phases:
      - phase: 05
    roles:
      - role: "Everyone"
    combo:
      - title: "The Demon's Claw"
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack targets the main tank with high damage, a magic damage up debuff, knockback, and stun."
          - note: "It is important for the tank to avoid being knocked off the edge - flip the boss around to be knocked back into the middle of the arena."
      - title: "Wave Cannon"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This attack will be telegraphed with a blue column and focus on the main tank."
          - note: "Players can either stack in front of the tank to soak the damage or the tanks can use Hallowed Ground/Living Dead."
sequence:
  - phase: 01
    attacks:
      - attack: "Flare Star"
    alerts:
      - alert: "Tanks should be sure to keep Zurvan facing away from the raid as he has a heavy cleave."
      - alert: "Players can fall off when Zurvan destroys each quadrant of the platform - mind the telegraphs to avoid this."
    mechanics:
      - mechanic:
        - title: "Platform Quadrants"
          tags:
            - tag: "Mechanic"
          notes:
            - note: "Zurvan will eventually knock off each quadrant of the platform. The order is: East, North, West, South - be sure not to fall off."
  - phase: 02
    attacks:
      - attack: "Soar & Flaming Halberd"
      - attack: "Demonic Dive"
    alerts:
      - alert: "The soar phase of the fight can be skipped provided that the raid team executes proper openers and has sufficient DPS."
      - alert: "Soar's orientation is determined by the direction Zurvan is facing - the images assume you are tanking him facing the <strong>North</strong>."
      - alert: "Safe zones for each player should be determined before the raid begins."
  - phase: 03
    attacks:
      - attack: "Biting Halberd"
      - attack: "Southern Cross"
      - attack: "Ciclicle"
      - attack: "Tail End"
    alerts:
      - alert: "An ice pad appears under the boss preventing you from passing through him."
      - alert: "This phase includes a number of AoEs - pay attention to the boss' cast bar."
      - alert: "After Biting Halberd, ensure the group stays stacked so that the ice puddle AoEs drop in the same location and then move quickly to avoid damage."
  - phase: 04
    attacks:
      - attack: "Wave 01"
      - attack: "Wave 02"
      - attack: "Wave 03"
    alerts:
      - alert: "This phase contains 3 waves of adds."
      - alert: "Wits are the most important to destroy as they will cast meteor."
      - alert: "Wiles will cast a gaze that afflicts you with fear - face away."
    mechanics:
      - mechanic:
        - title: "Wave 01"
          tags:
            - tag: "Add"
          notes:
            - note: "Expect 4 'Thews' and 1 'Will' to spawn in the north."
            - note: "The tank should grab these and everyone should DPS them down - beware 'Wills' as they do heavy tank damage."
      - mechanic:
        - title: "Wave 02"
          tags:
            - tag: "Add"
          notes:
            - note: "Expect 2 'Wills' in the west, 1 'Wile' in the south, and 1 'Wit' in the east."
      - mechanic:
        - title: "Wave 03"
          tags:
            - tag: "Add"
          notes:
            - note: "Expect 1 'Will' in the south, 1 'Wile' in the north, 1 'Wit' in the west, and 3 'Thews' in the east."
  - phase: 05
    attacks:
      - attack: "[Infinite Fire/Ice"
      - attack: "Wave Cannon"
      - attack: "Tyrfing"
      - attack: "Southern Cross"
      - attack: "Broken Seal"
      - attack: "Broken Seal - Follow Up]"
      - attack: "Repeat"
      - attack: "Soar & Flaming Halberd"
      - attack: "Demonic Dive"
      - attack: "The Demon's Claw & Wave Cannon"
    alerts:
      - alert: "Organization and communication is key in this phase - tethered players must stick together."
      - alert: "Designate a side for players targeted with a blue marker - everyone else avoid them."
      - alert: "The pattern of meteors during Broken Seal will determine the follow up AoE attack."
      - alert: "Soar's orientation is determined by the direction Zurvan is facing - the images assume you are tanking him facing the <strong>North</strong>."
      - alert: "Soar safe zones for each player should be determined before the raid begins."
spawns:
  - title: "Thews"
    notes:
      - note: "These are a basic add - focus them down last when they are with the other spawns."
  - title: "Will"
    notes:
      - note: "These adds do heavy tank damage - healers keep an eye out for them."
  - title: "Wile"
    attacks:
     - attack: "Gaze (Fear)"
    notes:
      - note: "Face away from these adds as they cast a gaze that will fear your character."
  - title: "Wit"
    attacks:
     - attack: "Meteor"
    notes:
      - note: "Focus these adds down first as if they succeed in casting meteor, the raid will wipe."
---
