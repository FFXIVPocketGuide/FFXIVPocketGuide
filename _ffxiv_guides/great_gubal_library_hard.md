---
layout: ffxiv_guide
title:  "The Great Gubal Library (Hard)"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/ffxiv/great_gubal_hard.jpg"
    - alt: "The Great Gubal Library (Hard)"
patch: "3.4 - Soul Surrender"
ilvl: "210"
instanceType: "dungeon"
mtqvid: "https://youtu.be/y2wp0wfMnXY"
bosses:
    - boss:
        - title: "Demon of the Tome"
          types:
            - type: "Boss"
          alerts:
            - alert: "Foil will drop books in quick succession in various AoE patterns - expect to move quickly."
          mechanics:
            - title: "Foil"
              tags:
                - tag: "AoE"
              notes:
                - note: "This attack calls down books in various AoE patterns - dodge as necessary."
            - title: "Frightful Roar"
              tags:
                - tag: "AoE"
              notes:
                - note: "This attack is a point-blank AoE circle."
            - title: "Triclip"
              tags:
                - tag: "Tankbuster"
              notes:
                - note: "Triclip will hit the main tank 3 times with moderate damage - cooldown and heal as necessary."
    - boss:
        - title: "Living Flame"
          types:
            - type: "Boss"
          alerts:
            - alert: "This boss has a cleave that isn't telegraphed - tanks should keep him facing away at all times."
            - alert: "When players are marked with Sun or Moon markers, position yourselves on the corresponding symbol on the floor."
            - alert: "When players are marked with '+' or '-' markers, players who match the boss' symbol should run towards him, while everyone else runs as far away as possible."
          mechanics:
            - title: "Searing Wind"
              tags:
                - tag: "AoE"
              notes:
                - note: "This cone cleave is not telegraphed - tanks should face the boss away from the rest of the group."
            - title: "Bibliocide"
              tags:
                - tag: "AoE"
              notes:
                - note: "This attack hits the group with raid-wide damage - heal as necessary."
            - title: "Sea of Flames"
              tags:
                - tag: "AoE"
              notes:
                - note: "Sea of Flames will cause puddles to erupt below players in succession."
                - note: "Keep moving and avoid teammates to stay safe."
            - title: "Slosh"
              tags:
                - tag: "Tether"
              notes:
                - note: "One player will be tethered by a purple line indicating that the boss is about to charge them."
                - note: "Move as far away from the boss as possible to reduce damage - other players be sure to not get caught in the middle of the charge."
            - title: "Seal of Night and Day"
              tags:
                - tag: "Mechanic"
              notes:
                - note: "This attack occurs if Living Flame takes the shape of a <strong>HAND</strong>."
                - note: "All players will be marked with either a sun or moon marker - players should run to the corresponding spot on the floor that contains their marker."
                - note: "If you don't reach your symbol, expect damage and a vulnerability debuff."
            - title: "Ferrofluid"
              tags:
                - tag: "Mechanic"
              notes:
                - note: "This attack occurs if Living Flame takes the shape of a <strong>TORNADO</strong>."
                - note: "The boss will cast a unique version of Bibliocide that will place fire in both the middle and around the edge of the arena."
                - note: "All players and the boss will be marked with either a '+' or '-' marker - players who match the boss should move towards him, while players who have the opposite symbol should get as far away as possible."
                - note: "Players who get caught will either be pulled or pushed into the fire."
    - boss:
        - title: "Apanda"
          types:
            - type: "Miniboss"
          alerts:
            - alert: "This miniboss will target Leylines with AoE attacks."
            - alert: "Kill this miniboss as soon as possible as its attack increases over time."
    - boss:
        - title: "Strix"
          types:
            - type: "Boss"
          alerts:
            - alert: "When the boss is casting 'On the Properties of Quakes' use the floating AoEs to avoid damage."
            - alert: "When the boss is casting 'On the Properties of Tornadoes' use the dark AoEs to avoid damage."
            - alert: "If you are turned into an imp, use the blue AoE puddles to end the transformation as soon as possible."
            - alert: "Use the boulders to line-of-sight Behemoth to shield yourself from damage when he casts meteor."
          mechanics:
            - title: "Check Out"
              tags:
                - tag: "Mechanic"
              notes:
                - note: "This attack drops books around the arena that spawn circular AoEs - make note of their locations as they will be used to counteract mechanics later in the fight."
            - title: "On the Properties of Quakes"
              tags:
                - tag: "AoE"
              notes:
                - note: "This attack will hit the group with Quake damage unless you stand in the floating AoE puddles spawned by the books."
            - title: "On the Properties of Darkness II"
              tags:
                - tag: "AoE"
              notes:
                - note: "This is a raid-wide AoE attack - heal as necessary."
            - title: "On the Properties of Tornadoes"
              tags:
                - tag: "AoE"
              notes:
                - note: "This attack will knock players into the air unless they stand in the dark AoE puddles spawned by the books - this will provide players with the 'Leaden' debuff, keeping them on the ground."
            - title: "On the Properties of Imps & On the Properties of Thunder III"
              tags:
                - tag: "Combo Mechanic"
              combo:
                - title: "On the Properties of Imps"
                  notes:
                    - note: "This attack will turn players into imps, increasingly vulnerability to Thunder."
                    - note: "Run into the blue puddle AoEs spawned by the books to end the transformation."
                - title: "On the Properties of Thunder III"
                  notes:
                    - note: "This attack will marker players with Purple Markers."
                    - note: "Players who are still imps when this cast goes off will take increased damage and receive a debuff."
            - title: "Behemoth"
              tags:
                - tag: "Mechanic"
              notes:
                - note: "A large book will drop in the center of the arena that opens to spawn a Behemoth."
                - note: "Behemoth will begin to cast meteor while he attacks with AoEs - dodge as necessary."
                - note: "Hide behind the boulders that spawn to avoid taking damage from meteor when the cast ends."
---

<!--
types: Boss, Miniboss, Add
phase: 01, 02, etc.
alerts: markers, special requirements, stack, raid organization, add phase
mechanic tags: tankbuster, AoE, mechanic, markers, combo mechanic, add, enrage timer, gaze, tether, stack
-->
