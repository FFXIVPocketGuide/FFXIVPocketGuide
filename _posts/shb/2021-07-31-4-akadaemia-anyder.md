---
layout: new-guide
cms: netlify-cms
guide-type: Dungeon
title: Akadaemia Anyder
slug: akadaemia-anyder
categories: shb
patch: 5
difficulty: Normal
player-level: 80
item-level: 410
order: 80410
description: "Read our guide for the FFXIV dungeon Akadaemia Anyder (Normal),
  where you'll face off against Cladoselache, Doliodus, Marquis Morbol, and
  Guardian Force: Quetzalcoatl."
hero-image: /assets/img/akadaemia-anyder-full.jpg
list-image: /assets/img/akadaemia-anyder-small.jpg
search-terms:
  - dungeon
  - shadowbringers
  - shb
  - Cladoselache
  - Doliodus
  - Marquis Morbol
  - Guardian Force Quetzalcoatl
video-url: https://youtu.be/I3GrCd_jNlA
bosses:
  - name: Cladoselache and Dodiolus
    phases:
      - notes:
          - Tanks should keep the boss facing away from the group and healers
            should watch out for Protolithic Puncture, the tankbuster.
        script:
          - attack: Protolithic Puncture
            duty-action: false
          - attack: Tidal Guillotine (on land)
            duty-action: false
          - attack: "[repeat]"
            duty-action: false
        attacks:
          - name: Protolithic Puncture
            type: Regular
            roles:
              - Tank
              - Healer
            tags:
              - Tankbuster
            notes:
              - Heal and cooldown as necessary.
          - name: Tidal Guillotine
            type: Variation
            variations:
              - name: Tidal Guillotine (on land)
                roles:
                  - Everyone
                tags:
                  - Point Blank AoE
                notes:
                  - This attack will hit in a large circle around Cladoselache -
                    move away to avoid it.
              - name: Tidal Guillotine (while swimming)
                roles:
                  - Everyone
                tags:
                  - Circular AoE
                notes:
                  - When Cladoselache is in the water, Tidal Guillotine changes.
                  - Cladoselache will stop swimming and jump out of the water
                    into a large circular AoE directly in front of where it
                    stopped. Avoid as necessary.
      - notes:
          - A second red-colored shark, Doliodus, will join the fight. The
            bosses will alternate being on the arena and in the water. Players
            should pay attention to their locations.
        script:
          - attack: Pelagic Cleaver (on land)
            duty-action: false
          - attack: Tidal Guillotine (in water)
            duty-action: false
          - attack: Protolithic Puncture
            duty-action: false
          - attack: Tidal Guillotine (on land)
            duty-action: false
          - attack: Aquatic Lance
            duty-action: false
          - attack: Pelagic Cleaver (in water)
            duty-action: false
          - attack: "[repeat]"
            duty-action: false
        attacks:
          - name: Pelagic Cleaver
            type: Variation
            variations:
              - name: Pelagic Cleaver (on land)
                roles:
                  - Everyone
                tags:
                  - Cone AoE
                notes:
                  - Doliodus will pick a direction and attack in a broad cone.
              - name: Pelagic Cleaver (while swimming)
                roles:
                  - Everyone
                tags:
                  - Cone AoE
                notes:
                  - When Doliodus is in the water, Pelagic Cleaver is larger.
                  - Doliodus will stop swimming and attack most of the arena
                    with a frontal cone AoE - move to the sides to avoid it.
          - name: Aquatic Lance
            type: Regular
            roles:
              - Everyone
            tags:
              - Puddle AoE
              - Marker (Blue)
            notes:
              - One player will be marked and a Puddle AoE will be dropped on
                their location. Avoid them, and if you're targeted, place the
                puddle out of the way.
      - notes:
          - When one of the two sharks dies, the remaining one will cast Marine
            Mayhem and continue its pattern.
        script:
          - attack: Marine Mayhem
            duty-action: false
          - attack: Boss Specific Attacks
            duty-action: false
          - attack: "[repeat]"
            duty-action: false
        attacks:
          - name: Marine Mayhem
            type: Regular
            roles:
              - Healer
            tags:
              - Raid-wide AoE
            notes:
              - This attack will continue to hit the group until the final boss
                is dead. Healers need to pay attention each time it hits.
  - name: Marquis Morbol
    phases:
      - notes:
          - When the boss raises its tendrils, it will slam them down - stand
            between them, and stick to the boss' side to avoid the bile at the
            end.
          - Avoid the glowing purple sections of the arena.
        attacks:
          - name: Sap Shower
            type: Regular
            roles:
              - Everyone
            tags:
              - Circular AoE
              - Marker (Orange)
            notes:
              - All players will be targeted with an orange marker. Avoid
                overlapping with others.
          - name: Arbor Storm
            type: Regular
            roles:
              - Healer
            tags:
              - Raid-wide AoE
            notes:
              - Healers should keep an eye on the group when this is cast.
          - name: Extensible Tendrils and Bile Vomit
            type: Combo
            combos:
              - name: Extensible Tendrils
                roles:
                  - Everyone
                tags:
                  - Area AoE
                notes:
                  - The boss will raise its tendrils and slam them down onto the
                    ground.
                  - Stand in its "armpits" to avoid taking damage.
                  - This will happen 5 times in a row before Bile Vomit.
              - name: Bile Vomit
                roles:
                  - Everyone
                tags:
                  - Cone AoE
                notes:
                  - This attack has no cast bar.
                  - The boss will use this attack directly in front immediately
                    after the 5th tendril slam. Tanks should avoid the front of
                    the boss by standing to its sides.
          - name: Blossom
            type: Regular
            roles:
              - Everyone
            tags:
              - Area AoE
              - Debuff
            notes:
              - The boss will cause various flowered areas in the arena to glow
                purple.
              - Avoid standing in these or you'll receive heavy and
                vulnerability up debuffs.
  - name: "Guardian Force: Quetzalcoatl"
    phases:
      - notes:
          - After the boss targets everyone with circle AoEs, run into the
            purple orbs to get a damage up buff.
          - After the boss knocks everyone back, run into its hit box to avoid
            damage.
        attacks:
          - name: Shockbolt
            type: Regular
            roles:
              - Tank
              - Healer
            tags:
              - Tankbuster
            notes:
              - Cooldown and heal as necessary.
          - name: Thunderbolt
            type: Regular
            roles:
              - Healer
            tags:
              - Raid-wide AoE
            notes:
              - Healers should top everyone up in preparation for this heavy
                raid-wide damage.
          - name: Thunderstorm
            type: Regular
            roles:
              - Everyone
            tags:
              - Circular AoE
              - Buff
            notes:
              - Players and the arena will be targeted by circle AoEs. Avoid
                overlapping with other players.
              - After the AoE hits, some will drop purple orbs that can be
                collected for a damage up buff.
          - name: Shocking Plumage
            type: Regular
            roles:
              - Everyone
            tags:
              - Cone AoE
            notes:
              - 4 cone AoEs will spawn from the boss in all directions. Stand
                between them.
          - name: Winding Current
            type: Regular
            roles:
              - Everyone
            tags:
              - Knockback
              - Area AoE
            notes:
              - The boss will teleport to the south side of the arena and knock
                all players north.
              - Orb AoEs will be scattered around the arena that grow during the
                cast - these get very large so try to avoid them.
              - The boss will hit the entire arena with damage - the only safe
                zone is directly in its hitbox - players will need to cross the
                arena, dodging the orb AoEs.
---
