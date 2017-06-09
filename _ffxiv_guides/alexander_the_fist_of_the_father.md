---
layout: ffxiv_guide
title:  "[A1] Alexander: The Fist of the Father"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/ffxiv/alex_fist.jpg"
    - alt: "Alexander: The Fist of the Father"
patch: "3.0 - Heavensward"
ilvl: "170"
instanceType: "raid"
mtqvid: "https://youtu.be/JR2anBXKVes"
bosses:
    - boss:
        - title: "Faust"
          types:
            - type: "Miniboss"
          alerts:
            - alert: "Burn this miniboss down while the off tank holds all other adds."
    - boss:
        - title: "Oppressor"
          types:
            - type: "Boss"
          phase: "01"
          alerts:
            - alert: "Tank this boss in the south of the room."
            - alert: "This boss has a wide frontal cleave, so be sure to tank away from the raid group."
            - alert: "Red Markers indicate multiple hits are incoming - avoid other players and heal as necessary."
          mechanics:
            - title: "Resin Bomb"
              tags:
                - tag: "AoE"
              notes:
                - note: "This is a circular AoE - avoid as necessary."
            - title: "Photon Spaser"
              tags:
                - tag: "AoE"
              notes:
                - note: "This is a column AoE - avoid as necessary."
            - title: "Gunnery Pod"
              tags:
                - tag: "AoE"
              notes:
                - note: "This raid-wide AoE is unavoidable - heal through it."
            - title: "Hydrothermal Missile"
              tags:
                - tag: "Markers"
              notes:
                - note: "Players marked with a red marker should prepare to be hit multiple times."
                - note: "Avoid other players until the attack is complete."
            - title: "Emergency Deployment"
              tags:
                - tag: "Add"
              notes:
                - note: "Two adds will spawn and tether to their targets."
                - note: "When killed, these adds will drop a timed puddle AoE to be avoided - make note of this as it will be used in a later mechanic."
    - boss:
        - title: "Oppressor 0.5"
          types:
            - type: "Boss"
          phase: "02"
          alerts:
            - alert: "This phase will begin around the 90 second mark."
            - alert: "A second boss will enter the arena and must be <strong>TANKED AWAY</strong> from the first boss - if they are too close together, they will buff each others' attack."
            - alert: "It is important to DPS these bosses equally - when one is killed, the second will wipe the raid if not killed fast enough."
            - alert: "Kill adds below the bomb indicators to mitigate their damage."
          mechanics:
            - title: "3000-Onze Missile & Emergency Deployment"
              tags:
                - tag: "Combo Mechanic"
              combo:
                - title: "3000-Onze Missile"
                  notes:
                    - note: "Vertical blue lasers will appear on the arena indicating bomb locations."
                    - note: "These will deal massive damage if not nullified."
                - title: "Emergency Deployment"
                  notes:
                    - note: "As before, adds will spawn and drop a puddle AoE when killed."
                    - note: "These adds should be killed directly under the bombs to nullify damage."
            - title: "Quick Landing"
              tags:
                - tag: "AoE"
              notes:
                - note: "Both bosses will leap into the air and place proximity markers on one side of the room."
                - note: "All players should run to the opposite side to mitigate damage - tanks be ready to pull the bosses apart when they land."
            - title: "Self Destruct"
              tags:
                - tag: "Mechanic"
              notes:
                - note: "When one boss is killed, the other will begin casting this attack - if successful it will wipe the raid."
                - note: "DPS both bosses equally during the fight so that you can avoid this mechanic."
---
