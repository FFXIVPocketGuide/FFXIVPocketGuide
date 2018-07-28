---
title: The Ridorana Lighthouse
layout: guide
page_type: guide
categories: sb
difficulty: Normal
orchestrion: TBD
instance_type: Raid
date: 2018-07-27 00:00:00 +0000
slug: the-ridorana-lighthouse
description: Read our Guide on the 24-man raid The Ridorana Lighthouse (Normal) where
  you'll face off against Famfrit the Darkening Cloud, Belias the Gigas, Construct
  7, and Yiazmat.
cover: "/uploads/ridorana.jpg"
terms:
- term: Yiazmat
- term: Construct 7
- term: Belias, the Gigas
- term: Famfrit, the Darkening Cloud
- term: Normal
- term: War of the Lions
- term: Final Fantasy Tactics
- term: The Ridorana Lighthouse
- term: sb
- term: Stormblood
patch_number: 4.3
patch_name: Under the Moonlight
plvl: 70
ilvl: 335
order: 70335
mtq_vid: https://youtu.be/yQk1HYmdN5U
duty_mechanics: []
bosses:
- boss_name: Famfrit, the Darkening Cloud
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Healer
      - Tank
      attack_name: Tidepod
      attack_tags:
      - Tankbuster
      attack_notes:
      - attack_note: This attack hits the primary threat target for high damage -
          shield and heal as necessary.
    - template: regular-attack
      attack_roles:
      - Healer
      attack_name: Water IV
      attack_tags:
      - Raid Wide Damage
      attack_notes:
      - attack_note: This attack hits the whole raid for moderate damage - shield
          and heal as necessary.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Briny Cannonade
      attack_tags:
      - AoE - Circular
      - Marker (Purple)
      attack_notes:
      - attack_note: This attack targets multiple players with purple markers - circular
          AoEs will eventually drop on their location - spread out and avoid dropping
          these on other players.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Tsunami
      attack_tags:
      - AoE - Area
      - AoE - Column
      - Knockback
      - Raid Wide Damage
      attack_notes:
      - attack_note: The boss will move to the center and knock everyone back to the
          edge of the arena causing raid wide damage.
      - attack_note: This is followed up by either a column AoE or an attack that
          covers half of the arena - the only telegraph is the direction the boss
          is pointing his jug - pay attention to this and move accordingly.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Dark Rain
      attack_tags:
      - AoE - Puddle
      attack_notes:
      - attack_note: This attack drops consecutive puddles on players as they move
          - be sure to drop your AoEs away from other players.
    - template: attack-w-variations
      variation_name: Dark Ewer
      variation_attacks:
      - attack_name: Column AoE
        attack_roles:
        - Everyone
        attack_tags:
        - AoE - Column
        attack_notes:
        - attack_note: This version of the attack drops three hurricanes along the
            edge of the arena that will move across the arena in a straight line,
            directly through the center (see image.
        attack_images:
        - "/uploads/ridorana_dark_ewer_1.png"
      - attack_name: Area AoE
        attack_roles:
        - Everyone
        attack_tags:
        - AoE - Area
        attack_notes:
        - attack_note: This attack places three hurricanes on the arena - 1 in the
            center ring, 1 in the middle ring, and 1 along the edge.
        - attack_note: These hurricanes will move in circles around their ring (see
            image) - avoid them as necessary.
        attack_images:
        - "/uploads/ridorana_dark_ewer_2.png"
      variation_notes:
      - variation_note: This attack spawns 3 hurricanes on the arena - pay attention
          to their layout when they spawn to determine if they will move in a circular
          motion or across the arena in a line.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Darkening Rainfall
      attack_tags:
      - Debuff
      - Spawn
      - AoE - Puddle
      attack_notes:
      - attack_note: This attack begins by placing 3-4 blue puddle AoEs on the arena
          - these add difficulty to Tsunami's knockback.
      - attack_note: 3 "Dark Rain" adds will spawn - each alliance should take one
          and burn it down before its cast goes off, or the whole raid will suffer
          high damage and Magic Vulnerability Up debuffs.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Dark Cannonade
      attack_tags:
      - Stack
      - Marker (Red)
      attack_notes:
      - attack_note: Players will be marked with red triangle markers indicating that
          they should stack with at least one other player to avoid high damage and
          being knocked into the sky.
    boss_phase_mechanics: []
    boss_phase_summary:
    - boss_phase_item: Pay attention to the direction the boss is pointing his jug
        during Tsunami as it will indicate the direction the following column/area
        AoE will land.
    - boss_phase_item: Each alliance should preparing to focus down a "Dark Rain"
        add during Darkening Rainfall.
    - boss_phase_item: Stack with another player when you are marked with a red triangle.
- boss_name: Belias, the Gigas
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Healer
      - Tank
      attack_name: Fire
      attack_tags:
      - Tankbuster
      attack_notes:
      - attack_note: This attack hits the primary threat target for high damage -
          shield and heal as necessary.
    - template: regular-attack
      attack_roles:
      - Healer
      attack_name: Fire IV
      attack_tags:
      - Raid Wide Damage
      attack_notes:
      - attack_note: This attack hits the raid for moderate damage - shield and heal
          as necessary.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Time Eruption
      attack_tags:
      - AoE - Area
      - Mechanic
      attack_notes:
      - attack_note: The arena is divided into a grid - each square will receive a
          clock-face during this attack and will either spin fast or slow.
      - attack_note: If the square's clock is spinning fast, it will detonate first,
          if the square is spinning slowly, it will detonate second.
      - attack_note: Players should stand in the slow moving clocks until the fast
          ones detonate and then move into the newly freed space to avoid the slow
          clocks.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Crimson Cyclone
      attack_tags:
      - AoE - Column
      - Mechanic
      attack_notes:
      - attack_note: The boss will disappear and summon 2 clones that will dash across
          the arena.
      - attack_note: These clones will eventually run into giant arrows on the arena
          and will change direction based on the direction the arrow is pointing.
      - attack_note: Determine both clones' paths and move into a safe zone.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Hand of Time
      attack_tags:
      - Stun
      - Mechanic
      - Debuff
      - Tether
  - boss_phase_title: Phase 02
  - boss_phase_title: Phase 03
- boss_name: Construct 7
- boss_name: Yiazmat

---
