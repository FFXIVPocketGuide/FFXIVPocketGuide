---
layout: guide_post
title:  "Temple of the Fist"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/dungeons/temple_of_the_fist.jpg"
    - urlSmall: "/assets/img/dungeons/small/temple_of_the_fist.jpg"
patchNumber: 4.0
patchName: "Stormblood"
difficulty: "Normal"
plvl: 70
ilvl: 0
order: 70000
instanceType: "dungeon"
mtqvid: "https://youtu.be/qsvyVRhQ-pc"
bosses:
  - title: "Sruti & Smriti"
    id: "boss01"
    attacks:
      - title: "Coeurl AoEs"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
          - tag: "Circular AoE"
        notes:
          - note: "These attacks are replicas of basic Coeurl attacks - dodge the AoE telegraphs."
      - title: "Basic Instinct"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Buff"
        notes:
          - note: "If players kill one Coeurl before the other, the remaining boss will receive this buff, significantly increasing its damage."
      - title: "Electric Burst"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack will hit for moderate raid wide damage - heal as necessary."
    sequence:
      - phase: 01
        attacks:
          - attack: "Coeurl AoEs"
          - attack: "Basic Instinct"
          - attack: "Electric Burst"
        alerts:
          - alert: "These two bosses have a soft enrage in the form of Basic Instinct - if players kill one before the other, the remaining boss gets a buff that increases damage."
          - alert: "Kill both Coeurls at the same time to avoid complications and unnecessary damage."
  - title: "Arbuda"
    id: "boss02"
    attacks:
      - title: "Cardinal Shift"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack hits for moderate raid wide damage - heal as necessary."
      - title: "Fourfold Shear"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack is a multihit tankbuster - heal and cooldown as necessary."
      - title: "Port and Star & Fore and Aft"
        phases:
          - phase: 01
        combo:
          - title: "Port and Star"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Knockback"
            notes:
              - note: "This version of the attack hits from either side of the boss - stand in front of or behind the boss to avoid being hit."
              - note: "Players hit by this attack will be knocked back and receive a Vulnerability Up debuff."
          - title: "Fore and Aft"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Knockback"
            notes:
              - note: "This version of the attack hits from the front and back of the boss - stand on the boss' sides to avoid being hit."
              - note: "Players hit by this attack will be knocked back and receive a Vulnerability Up debuff."
      - title: "Hellseal"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Marker"
        notes:
          - note: "Players will be marked with either sun or moon markers - players should move to the spot on the floor that matches their marker to avoid taking damage and a Vulnerability Up debuff."
      - title: "Tapas"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Puddle AoE"
        notes:
          - note: "This attack drops multiple AoE puddles on players as they move - bait these around the edge of the arena and away from others."
      - title: "Killer Instinct"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Parry"
        notes:
          - note: "This attack places a parry barrier on 3 of the boss' 4 sides - players will take damage and be knocked back unless they attack the boss from the remaining open side."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Cardinal Shift"
          - attack: "Fourfold Shear"
          - attack: "Port and Star & Fore and Aft"
          - attack: "Hellseal"
          - attack: "Tapas"
          - attack: "Killer Instinct]"
          - attack: "[Repeat]"
        alerts:
          - alert: "This boss can be frustrating due to the multiple attacks that require positioning and movement."
          - alert: "Players should be aware of Port and Star & Fore and Aft as they require specific positioning and will stack Vulnerability Up debuffs with each hit."
          - alert: "Sun and moon markers indicate that players should stand on the floor tile that matches their marker."
  - title: "Ivon Coeurlfist"
    id: "boss03"
    attacks:
      - title: "Spirit Wave"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
          - tag: "Puddle AoE"
        notes:
          - note: "This attack hits the group for moderate damage and then places a tornado on a random player - heal and move away as necessary."
      - title: "Hurricane Kick"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Melee DPS"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "This attack has a 270 degree cone - melee DPS and tanks should look for the telegraph."
      - title: "Touch of Slaughter"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
          - role: "Healer"
        tags:
          - tag: "Marker"
        notes:
          - note: "1 player will be marked with a green marker and the boss will charge at them, knocking their HP down to single digits - be sure to avoid being hit until healers can top off your health."
      - title: "Dragonwall"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "This attack spawns Dragon's Head adds along edges of the arena in a wall - find the gap and pass through to avoid damage and a Vulnerability Up debuff."
      - title: "Silent Roar"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This attack is telegraphed with a long blue column AoE - dodge as necessary."
      - title: "Rhalgr's Piece & Rose of Destruction"
        phases:
          - phase: 01
        combo:
          - title: "Rhalgr's Piece"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Proximity AoE"
            notes:
              - note: "The boss will move to the center of the room and hit the group for proximity based damage."
          - title: "Rose of Destruction"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Stack"
            notes:
              - note: "Immediately following Rhalgr's Piece, 1 player will be marked for a stack - all players should move in to soak damage."
      - title: "Chakra Orbs & Furious Fists"
        phases:
          - phase: 01
        combo:
          - title: "Chakra Orbs"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
              - tag: "Buff"
            notes:
              - note: "The boss will spawn multiple orbs that will tether to him around the arena - orbs collected by the boss will buff his next attack and heal him."
              - note: "Players should collect the orbs before Furious Fists is cast to mitigate the damage done - orbs collected by players will hit for damage but also provide them with a Damage Up buff."
          - title: "Furious Fists"
            roles:
              - role: "Healer"
            tags:
              - tag: "Raid Wide AoE"
            notes:
              - note: "This raid wide hit's power is determined by how many orbs are left in the arena when the cast is complete."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Spirit Wave"
          - attack: "Hurricane Kick"
          - attack: "Touch of Slaughter"
          - attack: "Dragonwall"
          - attack: "Silent Roar"
          - attack: "Rhalgr's Piece & Rose of Destruction]"
          - attack: "[Repeat]"
          - attack: "Chakra Orbs & Furious Fists"
        alerts:
          - alert: "Healers should be wary of players marked by green markers - this attack will bring their health down to single digits."
          - alert: "Expect multiple mechanics to occur simultaneously as the fight progresses."
          - alert: "When Chakra Orbs is cast, players should all switch to collecting orbs to mitigate damage done by Furious Fists."
---
