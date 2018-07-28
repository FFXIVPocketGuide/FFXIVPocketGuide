---
title: The Sunken Temple of Qarn
layout: guide
page_type: guide
categories: arr
difficulty: Hard
orchestrion: TBD
instance_type: Dungeon
date: 2018-07-27 00:00:00 +0000
slug: the-sunken-temple-of-qarn-hard
description: Read our Guide on the dungeon The Sunken Temple of Qarn (Hard) where
  you'll face off against Damaged Adjudicator, Sabotender Emperatriz, and Vicegerent
  to the Warden.
cover: "/uploads/sunken_tempe_qarn_hard.jpg"
terms:
- term: Vicegerent to the Warden
- term: Sabotender Emperatriz
- term: Damaged Adjudicator
- term: Hard
- term: The Sunken Temple of Qarn
- term: arr
- term: A Realm Reborn
patch_number: 2.4
patch_name: Dreams of Ice
plvl: 50
ilvl: 80
order: 50080
mtq_vid: https://youtu.be/4xWYTcomHzw
duty_mechanics: []
bosses:
- boss_name: Damaged Adjudicator
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_summary:
    - boss_phase_item: Players should always target the boss's limb that has the red
        orb.
    - boss_phase_item: Always move out of the Shifting Sands AoE or your character
        will sink and die.
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Limbs
      attack_tags:
      - Spawn
      - Mechanic
      attack_notes:
      - attack_note: During this fight, the boss's limbs will be targetable alongside
          his main body - always target the limb with the red orb - once his limbs
          are all destroyed, finish of the rest of his body.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Ruins Crawler
      attack_tags:
      - Spawn
      attack_notes:
      - attack_note: These adds will periodically spawn during the fight - tanks should
          pick them up so that they can be burned down.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Dust to Dust
      attack_tags:
      - AoE - Puddle
      - Marker (Orange)
      attack_notes:
      - attack_note: This attack will mark a player with an orange marker signifying
          that a sand ball will drop on their location - these sand balls eventually
          explode for large puddle AoEs.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Column AoE
      attack_tags:
      - AoE - Column
      attack_notes:
      - attack_note: The boss will target a random player and attack with a column
          AoE - move out of the telegraph.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Shifting Sands
      attack_tags:
      - Mechanic
      - AoE - Area
      attack_notes:
      - attack_note: This attack places a large sand pit AoE on the ground that players
          will sink into - if you don't manage to escape before your character sinks
          you will die.
- boss_name: Sabotender Emperatriz
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_summary:
    - boss_phase_item: Attack the boss the moment it begins to cast 100,000 Needles
        or the group will wipe.
    - boss_phase_item: Players need to kill the Guardia add the moment it spawns,
        as it will prevent the group from interrupting 100,000 Needles.
    boss_phase_attacks:
    - template: attack-w-variations
      variation_name: Sabotender Army
      variation_attacks:
      - attack_notes:
        - attack_note: These adds can be rounded up and burned down as fast as possible
            - always be sure to switch focus to the boss during 100,000 Needles though.
        attack_name: Soldado & Campeador
        attack_roles:
        - Everyone
        attack_tags:
        - Spawn
      - attack_name: Guardia
        attack_roles:
        - Everyone
        attack_tags:
        - Buff
        - Spawn
        attack_notes:
        - attack_note: This add must be killed the moment it spawns - it will cast
            cover on the boss, preventing you from damaging it and therefore preventing
            you from interrupting its 100,000 Needles attack.
      variation_notes:
      - variation_note: Adds can be picked up and burned down as long as players always
          switch to the boss during 100,000 Needles.
      - variation_note: The Guardia add must be killed the moment it spawns, as it
          will prevent you from damaging the boss and interrupting the cast.
    - template: regular-attack
      attack_roles:
      - Healer
      - Tank
      attack_name: Sabotendash
      attack_tags:
      - Tankbuster
      attack_notes:
      - attack_note: This attack hits the primary threat target for moderate damage
          - shield and heal as necessary.
    - template: regular-attack
      attack_roles:
      - Healer
      attack_name: 3000 Needles
      attack_tags:
      - Raid Wide Damage
      attack_notes:
      - attack_note: This attack hits the whole group for moderate damage - shield
          and heal as necessary.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: 100,000 Needles
      attack_tags:
      - Mechanic
      - Raid Wide Damage
      attack_notes:
      - attack_note: This attack will wipe the group if it manages to be cast - players
          can interrupt this attack by causing a certain amount of damage to the boss.
      - attack_note: When the Guardia add spawns, the boss will begin to cast this
          attack - players must kill the add before they can damage the boss to interrupt
          the cast.
- boss_name: Vicegerent to the Warden
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_summary:
    - boss_phase_item: Players should keep an eye on mummies spawning along the edges
        of the arena - always position yourself in a save zone.
    - boss_phase_item: When the boss faces a random player, all players should move
        out of it's line-of-sight.
    - boss_phase_item: If the boss tethers to a player, stun it to interrupt the attack.
    boss_phase_mechanics:
    - boss_phase_mechanic_title: Curse of the Mummy
      boss_phase_mechanic_notes:
      - boss_phase_mechanic_note: This is a stacking debuff that accumulates throughout
          the fight and can be received by being hit by the boss's attacks.
      - boss_phase_mechanic_note: When a player receives 4 stacks they will be placed
          into a coffin and transformed into a mummy - in this state they will run
          across the arena uncontrollably, giving stacks of the debuff to any player
          in their way.
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Healer
      - Tank
      attack_name: Smite of Fury
      attack_tags:
      - Tankbuster
      attack_notes:
      - attack_note: This attack hits the primary threat target for moderate damage
          - shield and heal as necessary.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Wall of the Mummy
      attack_tags:
      - Mechanic
      - AoE - Area
      attack_notes:
      - attack_note: Lines of mummies will regularly spawn on the edge of the arena
          during the fight and run across, afflicting anyone they hit with the Curse
          of the Mummy debuff - players should be sure to position themselves in the
          safe zones when they see the mummies spawn.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Light of Anathema
      attack_tags:
      - AoE - Column
      attack_notes:
      - attack_note: This attack hits for a long column and has no telegraph - the
          boss will randomly face a player and all players should move out of his
          line-of-sight.
      - attack_note: Getting hit by this attack will cause players to receive a Curse
          of the Mummy debuff.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Flurry of Rage
      attack_tags:
      - Cleave
      attack_notes:
      - attack_note: This attack hits right in front of the boss multiple times and
          will give players stacks of Cure of the Mummy each time it hits them - move
          out from in front of the boss when necessary.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Mummification
      attack_tags:
      - Debuff
      - Tether
      attack_notes:
      - attack_note: The boss will tether to a player and follow them around, inflicting
          them with multiple Curse of the Mummy debuffs - players can stun the boss
          to interrupt this attack.

---
