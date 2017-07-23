---
layout: guide_post
title:  "[O4S] Omega: Deltascape V4.0"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/raids/delta_04_savage.jpg"
    - urlSmall: "/assets/img/raids/small/delta_04_savage.jpg"
patchNumber: 4.0
patchName: "Stormblood"
difficulty: "Savage"
plvl: 70
ilvl: 310
order: 70313
instanceType: "raid"
mtqvid: ""
bosses:
  - title: "Catastrophe"
    id: "boss01"
    attacks:
      - title: "Tremblor"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This hits for moderate raid wide damage - heal as necessary."
      - title: "Earthquake"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        dutyActions:
          - action: "Levitate"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack hits for high raid wide damage and will give players a stacking Vulnerability Up debuff if hit."
          - note: "Use your Duty Action to avoid this attack."
      - title: "100 Gs"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "This attack pulls all players who are levitating back to the ground."
          - note: "During a normal Antilight, the boss will use this attack to pull players back to the ground, making the only safe zone accessible."
      - title: "Evilsphere"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack hits the tank for moderate damage - heal and cooldown as necessary."
      - title: "Aetherial Rift"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        dutyActions:
          - action: "Levitate"
        tags:
          - tag: "Puddle AoE"
        notes:
          - note: "This attack covers the floor in a purple AoE that will slowly draw players into the ground, killing them if it is successful."
          - note: "Players should use their Duty Action to avoid this."
      - title: "Gravitational Explosion"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "This attack will mark 1 player with an orange stack marker."
          - note: "Beware - all players <strong>MUST</strong> be on the same level to share the damage - if the player is levitating, all other players should also levitate using their Duty Action."
      - title: "Paranormal Wave"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "This attack hits hard and has no cast - tanks should face the boss away from the group at all times."
      - title: "Maniacle Probe & Epicenter"
        phases:
          - phase: 01
        combo:
          - title: "Maniacle Probe"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Spawn"
            notes:
              - note: "The boss will begin this combo by spawning 4 Fleshy Member adds."
              - note: "Each tentacle will be marked with an eyeball marker - this marker indicates which of the tentacles will hit with Epicenter."
          - title: "Epicenter"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
              - tag: "Circular AoE"
            notes:
              - note: "This attack is a large circular AoE - players should run to the Fleshy Member adds that <strong>DO NOT</strong> have eyeball markers."
              - note: "Every time the boss spawns Fleshy Members, they will all begin with eyeball markers."
              - note: "For the first cast, the markers will disappear until 1 tentacle is left - this is the tentacle that will cast Epicenter."
              - note: "The second cast, 2 tentacles will cast Epicenter."
              - note: "The third cast, 3 tentacles will cast Epicenter."
      - title: "Antilight"
        phases:
          - phase: 01
        dutyActions:
          - action: "Levitate"
        combo:
          - title: "Antilight"
            roles:
              - role: "Everyone"
            dutyActions:
              - action: "Levitate"
            tags:
              - tag: "Mechanic"
              - tag: "Circular AoE"
            notes:
              - note: "Petrospheres are black orbs that hit with large circular AoEs on the <strong>GROUND LEVEL</strong>."
              - note: "Potent Petrospheres are white orbs that hit with large circular AoEs on the <strong>UPPER LEVEL</strong>."
              - note: "The regular version of this attack places patterns of both types - the only safe zone is on the <strong>GROUND LEVEL</strong> at the very center of the arena."
              - note: "The boss will cast 100 Gs during this attack and pull all levitating players to the ground."
          - title: "Antilight & Demon's Gaze"
            roles:
              - role: "Everyone"
            dutyActions:
              - action: "Levitate"
            tags:
              - tag: "Mechanic"
              - tag: "Circular AoE"
              - tag: "Gaze"
            notes:
              - note: "This version of the attack combines Petrospheres (Black Orbs, Ground Level) with a gaze attack."
              - note: "Players should levitate and face away from the boss to avoid Petrification and a stacking Vulnerability Up debuff."
          - title: "Antilight & Aetherial Rift"
            roles:
              - role: "Everyone"
            dutyActions:
              - action: "Levitate"
            tags:
              - tag: "Mechanic"
              - tag: "Circular AoE"
              - tag: "Raid Wide AoE"
            notes:
              - note: "This version of the attack places Potent Petrospheres (White Orbs, Upper Level) and is followed up by Aetherial Rift."
              - note: "Players should wait until the Potent Petrospheres explode before using their Duty Action to lift themselves out of the Aetherial Rift."
          - title: "Antilight & Earthquake"
            roles:
              - role: "Everyone"
            dutyActions:
              - action: "Levitate"
            tags:
              - tag: "Mechanic"
              - tag: "Circular AoE"
              - tag: "Raid Wide AoE"
            notes:
              - note: "This version of the attack places Potent Petrospheres (White Orbs, Upper Level) and is followed up by Earthquake."
              - note: "Players should wait until the Potent Petrospheres explode before using their Duty Action to lift themselves out of Earthquake's way."
      - title: "-100 Gs"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Circular AoE"
        notes:
          - note: "3 Petrospheres and 3 Potent Petrospheres will cover the arena."
          - note: "Safe Zones are in the north and south."
          - note: "All players should make their way to these safe zones before the boss knocks everyone into the air to avoid being hit."
      - title: "Gravitational Wave"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack hits for high raid wide damage - healers keep an eye out for this attack."
    sequence:
      - phase: 01
        attacks:
          - attack: "Tremblor"
          - attack: "Earthquake"
            dutyActions: true
          - attack: "100 Gs"
          - attack: "Evilsphere"
          - attack: "Aetherial Rift"
            dutyActions: true
          - attack: "Gravitational Explosion"
          - attack: "Paranormal Wave"
          - attack: "Maniacle Probe & Epicenter"
          - attack: "Antilight & Demon's Gaze"
            dutyActions: true
          - attack: "Antilight"
            dutyActions: true
          - attack: "Maniacle Probe & Epicenter"
          - attack: "-100 Gs"
          - attack: "Gravitational Wave"
          - attack: "Antilight & Aetherial Rift"
            dutyActions: true
          - attack: "Maniacle Probe & Epicenter"
          - attack: "Antilight & Earthquake"
            dutyActions: true
        alerts:
          - alert: "This boss uses a new mechanic in which attacks can hit on 1 of 2 'levels'."
          - alert: "Earthquake, Aetherial Rift, Gravitational Explosion, and certain versions of Antilight (Black AoEs) all hit players on the ground level."
          - alert: "Gravitational Explosion and certain versions of Antilight (White AoEs) can hit players who are levitating (Upper Level)."
          - alert: "When Antilight is cast with both Black and White AoEs, all players should run to the center of the arena where there is a small safe zone on the ground level."
          - alert: "Players should stay far away from Fleshy Member adds with eyeball markers above them."
        mechanics:
          - title: "Duty Action: Levitate"
            notes:
              - note: "Players can activate their Levitate ability to lift themselves off the floor, allowing them to dodge certain mechanics."
              - note: "Players who are levitating have no way of getting back to the ground except the boss' attack 100 Gs - be very careful when you use this ability."
---
