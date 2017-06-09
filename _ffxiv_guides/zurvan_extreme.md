---
layout: ffxiv_guide
title:  "[Zurvan] Containment Bay Z1T9 (Extreme)"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/ffxiv/zurvan_ex.jpg"
    - alt: "[Zurvan] Containment Bay Z1T9 (Extreme)"
patch: "3.5 - The Far Edge of Fate"
ilvl: "250"
instanceType: "trial"
mtqvid: "https://youtu.be/WdtOPon2eQk"
bosses:
    - boss:
        - title: "Zurvan"
          types:
            - type: "Phase 01"
          phase: "01"
          alerts:
            - alert: "Tanks should be sure to keep Zurvan facing away from the raid as he has a heavy cleave."
            - alert: "Players can fall off when Zurvan destroys each quadrant of the platform - mind the telegraphs to avoid this."
          mechanics:
            - title: "Platform Quadrants"
              tags:
                - tag: "Mechanic"
              notes:
                - note: "Zurvan will eventually knock off each quadrant of the platform. The order is: East, North, West, South - be sure not to fall off."
            - title: "Flare Star"
              tags:
                - tag: "AoE"
              notes:
                - note: "This AoE will drop on random players - it's important to stack before the cast goes off in order to bait where the AoE will drop and maintain your safe space."
    - boss:
        - title: "Zurvan (Soar)"
          types:
            - type: "Phase 02"
          phase: "02"
          alerts:
            - alert: "The soar phase of the fight can be skipped provided that the raid team executes proper openers and has sufficient DPS."
            - alert: "Soar's orientation is determined by the direction Zurvan is facing - the images assume you are tanking him facing the <strong>North</strong>."
            - alert: "Safe zones for each player should be determined before the raid begins."
          mechanics:
            - title: "Soar & Flaming Halberd"
              tags:
                - tag: "Combo Mechanic"
              combo:
                - title: "Soar"
                  notes:
                    - note: "This attack combines a linear AoE (indicated by the orange rectangles) and a divebomb that sweeps across the length of the arena (indicated by the red arrows)."
                    - note: "Zurvan will begin by telegraphing 1 of 2 patterns (see images) that will tell players how they should arrange themselves - please note the images below assume you are tanking Zurvan in the <strong>North</strong>."
                    - note: "The boss will split into 3 and follow the orange AoE telegraphs. He will then divebomb back through the original telegraphs, following through across the entire arena."
                - title: "Flaming Halberd"
                  notes:
                    - note: "6 players will be marked (red circles) for this attack and it is crucial that they do not overlap - this is difficult as there are few safe areas during Soar."
                    - note: "Players (blue dots) should arrange themselves according to the pattern Zurvan attacks with (see images for player locations)."
              images:
                - url: "/assets/img/ffxiv/zurvan/zurvan_ex_soar_01.png"
                  alt: "Soar Layout - Even"
                - url: "/assets/img/ffxiv/zurvan/zurvan_ex_soar_02.png"
                  alt: "Soar Layout - Cluster"
            - title: "Demonic Dive"
              tags:
                - tag: "Stack"
                - tag: "Markers"
              notes:
                - note: "This attack will place a stack marker on one player and a red marker on another."
                - note: "All players except the one marked with the red marker should stack, while the marked player flees."
    - boss:
        - title: "Zurvan"
          types:
            - type: "Phase 03"
          phase: "03"
          alerts:
            - alert: "An ice pad appears under the boss, preventing you from passing through him."
            - alert: "This phase includes a number of AoEs - pay attention to the boss' cast bar."
            - alert: "After Biting Halberd, ensure the group stays stacked so that the ice puddle AoEs drop in the same location."
          mechanics:
            - title: "Biting Halberd"
              tags:
                - tag: "AoE"
              notes:
                - note: "Zurvan will face a random direction and begin this massive cone AoE."
                - note: "The only safe spot is <strong>DIRECTLY BEHIND</strong> him."
            - title: "Southern Cross"
              tags:
                - tag: "AoE"
              notes:
                - note: "Places an ice AoE puddle on all players - stack together to drop the AoEs in the same location and then move out to one side to avoid being hit."
                - note: "The main tank should move to the <strong>OPPOSITE</strong> side of the raid."
            - title: "Ciclicle"
              tags:
                - tag: "AoE"
              notes:
                - note: "Large circular AoE - the only safe space is within melee range of the boss."
            - title: "Tail End"
              tags:
                - tag: "AoE"
              notes:
                - note: "Large circular AoE - the only safe space is at the edge of the arena - don't forget to avoid the fire at the edge!"
    - boss:
        - title: "Add Phase"
          types:
            - type: "Add"
          alerts:
            - alert: "This phase contains 3 waves of adds."
            - alert: "Wits are the most important to destroy as they will cast meteor."
            - alert: "Wiles will cast a gaze that afflicts you with fear - face away."
          mechanics:
            - title: "Wave 01"
              tags:
                - tag: "Add"
              notes:
                - note: "Expect 4 'Thews' and 1 'Will' to spawn in the north."
                - note: "The tank should grab these and everyone should DPS them down - beware 'Wills' as they do heavy tank damage."
            - title: "Wave 02"
              tags:
                - tag: "Add"
              notes:
                - note: "Expect 2 'Wills' in the west, 1 'Wile' in the south, and 1 'Wit' in the east."
                - note: "All DPS should focus down the 'Wit' as it will cast meteor."
                - note: "All players should face away from the 'Wile' as it will cast a Gaze that will afflict you with fear."
            - title: "Wave 03"
              tags:
                - tag: "Add"
              notes:
                - note: "Expect 1 'Will' in the south, 1 'Wile' in the north, 1 'Wit' in the west, and 3 'Thews' in the east."
                - note: "All DPS should focus down the 'Wit' as it will cast meteor."
                - note: "All players should face away from the 'Wile' as it will cast a Gaze that will afflict you with fear."
    - boss:
        - title: "Zurvan"
          types:
            - type: "Phase 04"
          phase: "04"
          alerts:
            - alert: "Organization and communication is key in this phase - tethered players must stick together."
            - alert: "Designate a side for players targeted with a blue marker - everyone else avoid them."
            - alert: "The pattern of meteors during Broken Seal will determine the follow up AoE attack."
            - alert: "Soar's orientation is determined by the direction Zurvan is facing - the images assume you are tanking him facing the <strong>North</strong>."
            - alert: "Soar safe zones for each player should be determined before the raid begins."
          mechanics:
            - title: "Infinite Fire/Ice"
              tags:
                - tag: "Tether"
              notes:
                - note: "Players will be tethered with either a red or blue tether representing fire or ice respectively."
                - note: "Tethered players should never move farther apart than the width of the boss' hitbox - you will suffer massive DoT damage otherwise."
            - title: "Wave Cannon"
              tags:
                - tag: "Markers"
              notes:
                - note: "Player will be marked with a blue marker - they should move to a designated side of the arena."
                - note: "This long column AoE will cause bleed to other players around it."
            - title: "Tyrfing"
              tags:
                - tag: "Tankbuster"
              notes:
                - note: "The tank will be hit 5 times and then hit with Fire III - cooldown and heal as necessary."
            - title: "Southern Cross"
              tags:
                - tag: "AoE"
              notes:
                - note: "Places an ice AoE puddle on all players - stack together to drop the AoEs in the same location and then move out to avoid being hit."
                - note: "After this attack, tethered players should split up evenly to prepare for Broken Seal."
            - title: "Broken Seal"
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
              tags:
                - tag: "Variation"
              combo:
                - title: "(Side Clusters) Biting Halberd"
                  notes:
                    - note: "Zurvan will face a random direction and begin this massive cone AoE."
                    - note: "The only safe spot is <strong>DIRECTLY BEHIND</strong> him."
                - title: "(Inner Circle) Tail End"
                  notes:
                    - note: "Large circular AoE - the only safe space is at the edge of the arena - don't forget to avoid the fire at the edge!"
                - title: "(Outer Circle) Ciclicle"
                  notes:
                    - note: "Large circular AoE - the only safe space is within melee range of the boss."
            - title: "Repeat Mechanics"
              tags:
                - tag: "Mechanic"
              notes:
                - note: "At this point, the fight will repeat Infinite Fire/Ice, Wave Cannon, Tyrfing, Southern Cross, Broken Seal, and the follow up AoE."
            - title: "Soar & Flaming Halberd"
              tags:
                - tag: "Combo Mechanic"
              combo:
                - title: "Soar"
                  notes:
                    - note: "This attack combines a linear AoE (indicated by the orange rectangles) and a divebomb that sweeps across the length of the arena (indicated by the red arrows)."
                    - note: "Zurvan will begin by telegraphing 1 of 2 patterns (see images) that will tell players how they should arrange themselves - please note the images below assume you are tanking Zurvan in the <strong>North</strong>."
                    - note: "The boss will split into 3 and follow the orange AoE telegraphs. He will then divebomb back through the original telegraphs, following through across the entire arena."
                - title: "Flaming Halberd"
                  notes:
                    - note: "6 players will be marked (red circles) for this attack and it is crucial that they do not overlap - this is difficult as there are few safe areas during Soar."
                    - note: "Players (blue dots) should arrange themselves according to the pattern Zurvan attacks with (see images for player locations)."
              images:
                - url: "/assets/img/ffxiv/zurvan/zurvan_ex_soar_01.png"
                  alt: "Soar Layout - Even"
                - url: "/assets/img/ffxiv/zurvan/zurvan_ex_soar_02.png"
                  alt: "Soar Layout - Cluster"
            - title: "Demonic Dive"
              tags:
                - tag: "Stack"
                - tag: "Markers"
              notes:
                - note: "This attack will place a stack marker on one player and a red marker on another."
                - note: "All players except the one marked with the red marker should stack, while the marked player flees."
            - title: "The Demon's Claw & Wave Cannon"
              tags:
                - tag: "Combo Mechanic"
              combo:
                - title: "The Demon's Claw"
                  notes:
                    - note: "This attack targets the main tank with high damage, a magic damage up debuff, knockback, and stun."
                    - note: "It is important for the tank to avoid being knocked off the edge - flip the boss around to be knocked back into the middle of the arena."
                - title: "Wave Cannon"
                  notes:
                    - note: "This attack will be telegraphed with a blue column and focus on the main tank."
                    - note: "Players can either stack in front of the tank to soak the damage or the tanks can use Hallowed Ground/Living Dead."
---

<!--
types: Boss, Miniboss, Add
phase: 01, 02, etc.
alerts: markers, special requirements, stack, raid organization, add phase
mechanic tags: tankbuster, AoE, mechanic, markers, combo mechanic, variation, add, enrage timer, gaze, tether, stack
-->
