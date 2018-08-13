---
title: The Wanderer's Palace
layout: guide
page_type: guide
categories: arr
difficulty: Normal
orchestrion: TBD
instance_type: Dungeon
date: 2018-08-13 00:00:00 +0000
slug: wanderers-palace
description: Read our Guide on the dungeon The Wanderer's Palace (Normal) where you'll
  face off against Keeper of Halidom, Giant Bavarois, and Tonberry King.
cover: "/uploads/wanderers_palace_normal.jpg"
terms:
- term: Tonberry King
- term: Giant Bavarois
- term: Keeper of Halidom
- term: Normal
- term: The Wanderer's Palace
- term: arr
- term: A Realm Reborn
patch_number: 2.0
patch_name: A Realm Reborn
plvl: 50
ilvl: 0
order: 50000
mtq_vid: https://youtu.be/xlKKLpQSzZs
duty_mechanics:
- duty_mechanic_title: Tonberries
  duty_mechanic_steps:
  - duty_mechanic_step_title: Small Tonberries
    duty_mechanic_step_notes:
    - duty_mechanic_step_note: Killing these adds drops oil which can be used to open
        doors and progress through the dungeon.
  - duty_mechanic_step_title: Large Tonberries
    duty_mechanic_step_notes:
    - duty_mechanic_step_note: These adds wander the halls slowly - if they catch
        up to one of your party members they will instantly kill them.
bosses:
- boss_name: Keeper of Halidom
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_summary:
    - boss_phase_item: This boss is relatively straight forward - move out of AoEs.
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Inhale
      attack_tags:
      - Pull
      - AoE - Cone
      attack_notes:
      - attack_note: The boss will turn and face a random player, attacking them with
          a cone AoE - players caught in the AoE will be pulled to the boss.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Moldy Phlegm
      attack_tags:
      - AoE - Circular
      attack_notes:
      - attack_note: The boss will target a random player with a circular AoE - move
          out of the telegraph to avoid damage.
- boss_name: Giant Bavarois
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_summary:
    - boss_phase_item: Kill all spawns as they arrive, prioritizing the blue one,
        as it will heal the boss.
    boss_phase_mechanics:
    - boss_phase_mechanic_title: Enmity
      boss_phase_mechanic_notes:
      - boss_phase_mechanic_note: Occasionally the boss will ignore enmity and chase
          down a random player - this player should constantly run away until the
          boss returns to the tank.
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Bavarois Army
      attack_tags:
      - Spawn
      attack_notes:
      - attack_note: The boss will spawn randomly coloured minions that should be
          gathered up and burned down.
      - attack_note: Players should always prioritize the blue minion, as it will
          heal the boss if left alive.
- boss_name: Tonberry King

---
