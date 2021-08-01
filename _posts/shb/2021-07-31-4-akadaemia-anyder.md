---
categories: shb
patchNumber: 4
patchName: Shadowbringers
title: Akadaemia Anyder
slug: akadaemia-anyder
difficulty: Normal
plvl: 80
ilvl: 410
date: 2021-07-31
order: 80409
description: "Read our guide for the FFXIV dungeon Akadaemia Anyder, where
  you'll face off against Cladoselache, Doliodus, Marquis Morbol, and Guardian
  Force: Quetzalcoatl."
image:
  url: /assets/img/akadaemia-anyder-full.jpg
  urlSmall: /assets/img/akadaemia-anyder-small.jpg
terms:
  - term: dungeon
  - term: shadowbringers
  - term: shb
  - term: Cladoselache
  - term: Doliodus
  - term: Marquis Morbol
  - term: Guardian Force Quetzalcoatl
instanceType: dungeon
mtqvid: https://youtu.be/I3GrCd_jNlA
bosses:
  - title: Cladoselache and Dodiolus
    id: boss01
    sequence:
      - phase: 1
        attacks:
          - attack: Protolithic Puncture
          - attack: Tidal Guillotine (on land)
          - attack: "[repeat]"
        alerts:
          - alert: Tanks should keep the boss facing away from the group and healers should
              watch out for Protolithic Puncture, the tankbuster.
      - phase: 2
        alerts:
          - alert: A second red-colored shark, Doliodus, will join the fight. The bosses
              will alternate being on the arena and in the water. Players should
              pay attention to their locations.
        attacks:
          - attack: Pelagic Cleaver (on land)
          - attack: Tidal Guillotine (in water)
          - attack: Protolithic Puncture
          - attack: Tidal Guillotine (on land)
          - attack: Aquatic Lance
          - attack: Pelagic Cleaver (in water)
          - attack: "[repeat]"
      - phase: 3
        alerts:
          - alert: When one of the two sharks dies, the remaining one will cast Marine
              Mayhem and continue its pattern.
        attacks:
          - attack: Marine Mayhem
          - attack: Boss Specific Attacks
          - attack: "[repeat]"
    attacks:
      - type: regular
        title: Protolithic Puncture
        roles:
          - Tank
          - Healer
        tags:
          - Tankbuster
        notes:
          - note: Heal and cooldown as necessary.
        phases:
          - phase: 1
      - type: variation
        title: Tidal Guillotine
        phases:
          - phase: 1
          - phase: 2
        variation:
          - title: Tidal Guillotine (on land)
            roles:
              - Everyone
            tags:
              - Point Blank AoE
            notes:
              - note: This attack will hit in a large circle around Cladoselache - move away to
                  avoid it.
          - title: Tidal Guillotine (in water)
            roles:
              - Everyone
            tags:
              - Circular AoE
            notes:
              - note: When Cladoselache is in the water, Tidal Guillotine changes.
              - note: Cladoselache will stop swimming and jump out of the water into a large
                  circular AoE directly in front of where it stopped. Avoid as
                  necessary.
      - type: variation
        title: Pelagic Cleaver
        phases:
          - phase: 2
        variation:
          - title: Pelagic Cleaver (on land)
            roles:
              - Everyone
            tags:
              - Cone AoE
            notes:
              - note: Doliodus will pick a direction and attack in a broad cone.
          - title: Pelagic Cleaver (in water)
            roles:
              - Everyone
            tags:
              - Cone AoE
            notes:
              - note: When Doliodus is in the water, Pelagic Cleaver is larger.
              - note: Doliodus will stop swimming and attack most of the arena with a frontal
                  cone AoE - move to the sides to avoid it.
      - type: regular
        title: Aquatic Lance
        roles:
          - Everyone
        tags:
          - Puddle AoE
          - Marker
        notes:
          - note: One player will be marked with a blue marker and a Puddle AoE will be
              dropped on their location. Avoid them, and if you're targeted,
              place the puddle out of the way.
        phases:
          - phase: 3
      - type: regular
        title: Marine Mayhem
        roles:
          - Healer
        tags:
          - Raid Wide AoE
        notes:
          - note: This attack will continue to hit the group until the final boss is dead.
              Healers need to pay attention each time it hits.
        phases:
          - phase: 3
  - title: Marquis Morbol
    id: boss02
    sequence:
      - phase: 1
        alerts:
          - alert: When the boss raises its tendrils, it will slam them down - stand between
              them, and stick to the boss' side to avoid the bile at the end.
          - alert: Avoid the glowing purple sections of the arena.
    attacks:
      - type: regular
        title: Sap Shower
        roles:
          - Everyone
        tags:
          - Circular AoE
          - Marker
        notes:
          - note: All players will be targeted with an orange marker. Avoid overlapping with
              others.
        phases:
          - phase: 2
      - type: regular
        title: Arbor Storm
        roles:
          - Healer
        tags:
          - Raid Wide AoE
        notes:
          - note: Healers should keep an eye on the group when this is cast.
        phases:
          - phase: 2
      - type: combo
        title: Extensible Tendrils and Bile Vomit
        phases:
          - phase: 1
        combo:
          - title: Extensible Tendrils
            roles:
              - Everyone
            tags:
              - Area AoE
            notes:
              - note: The boss will raise its tendrils and slam them down onto the ground.
              - note: Stand in its "armpits" to avoid taking damage.
              - note: This will happen 5 times in a row before Bile Vomit.
          - title: Bile Vomit
            roles:
              - Everyone
            tags:
              - Cone AoE
            notes:
              - note: This attack has no cast bar.
              - note: The boss will use this attack directly in front immediately after the 5th
                  tendril slam. Tanks should avoid the front of the boss by
                  standing to its sides.
      - type: regular
        title: Blossom
        roles:
          - Everyone
        tags:
          - Area AoE
          - Debuff
        phases:
          - phase: 1
        notes:
          - note: The boss will cause various flowered areas in the arena to glow purple.
          - note: Avoid standing in these or you'll receive heavy and vulnerability up
              debuffs.
  - title: "Guardian Force: Quetzalcoatl"
    id: boss03
    sequence:
      - phase: 1
        alerts:
          - alert: After the boss targets everyone with circle AoEs, run into the purple
              orbs to get a damage up buff.
          - alert: After the boss knocks everyone back, run into its hit box to avoid
              damage.
    attacks:
      - type: regular
        title: Shockbolt
        roles:
          - Tank
          - Healer
        tags:
          - Tankbuster
        notes:
          - note: Cooldown and heal as necessary.
        phases:
          - phase: 1
      - type: regular
        title: Thunderbolt
        roles:
          - Healer
        tags:
          - Raid Wide AoE
        phases:
          - phase: 1
        notes:
          - note: Healers should top everyone up in preparation for this heavy raid-wide
              damage.
      - type: regular
        title: Thunderstorm
        roles:
          - Everyone
        tags:
          - Circular AoE
          - Buff
        phases:
          - phase: 1
        notes:
          - note: Players and the arena will be targeted by circle AoEs. Avoid overlapping
              with other players.
          - note: After the AoE hits, some will drop purple orbs that can be collected for a
              damage up buff.
      - type: regular
        title: Shocking Plumage
        roles:
          - Everyone
        tags:
          - Cone AoE
        phases:
          - phase: 1
        notes:
          - note: 4 cone AoEs will spawn from the boss in all directions. Stand between
              them.
      - type: regular
        title: Winding Current
        roles:
          - Everyone
        tags:
          - Area AoE
          - Knockback
        notes:
          - note: The boss will teleport to the south side of the arena and knock all
              players north.
          - note: Orb AoEs will be scattered around the arena that grow during the cast -
              these get very large so try to avoid them.
          - note: The boss will hit the entire arena with damage - the only safe zone is
              directly in its hitbox - players will need to cross the arena,
              dodging the orb AoEs.
        phases:
          - phase: 1
layout: guide_post
cms: netlify-cms
---