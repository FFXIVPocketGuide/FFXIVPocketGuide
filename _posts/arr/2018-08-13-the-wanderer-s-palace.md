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
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_attacks:
    - template: attack-w-variations
      variation_name: Slash
      variation_attacks:
      - attack_name: Lateral Slash
        attack_roles:
        - Healer
        - Tank
        attack_tags:
        - Tankbuster
        attack_notes:
        - attack_note: This attack hits the primary threat target for low damage -
            shield and heal as necessary.
      - attack_name: Sharpened Knife
        attack_roles:
        - Healer
        - Tank
        attack_tags:
        - Buff
        - Tankbuster
        attack_notes:
        - attack_note: This attack buffs the boss Lateral Slash, causing higher damage
            to the primary threat target - shield and heal as necessary.
      variation_notes:
      - variation_note: Pay attention the boss's cast bar to determine whether it
          will hit with the lower or higher damage variation.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Scourge of Nym
      attack_tags:
      - Debuff
      attack_notes:
      - attack_note: This attack hits a random player and gives them the Heavy debuff.
    - template: combo-attack
      combo_name: Tonberries & Everybody's Grudge
      combo_attacks:
      - attack_name: Tonberries
        attack_roles:
        - Everyone
        attack_tags:
        - Buff
        - Spawn
        attack_notes:
        - attack_note: Tonberry adds will spawn around the arena and walk towards
            the boss, ignoring enmity until they reach his hitbox.
        - attack_note: Killing these adds gives the boss stacks of the Rancor buff,
            which increases damage from Everybody's Grudge.
        - attack_note: Players should only ever kill 3-4 of these adds before the
            boss uses Everybody's Grudge - the remaining adds should be kited around
            the arena until the boss uses the attack.
      - attack_name: Everybody's Grudge
        attack_roles:
        - Healer
        attack_tags:
        - Mechanic
        - Raid Wide Damage
        attack_notes:
        - attack_note: This attack hits the group for raid wide damage based on how
            many stacks of Rancor the boss has accumulated - healers be ready.
        - attack_note: Once this attack is used, the boss's stacks with reset, allowing
            players to kill more Tonberry adds.
      combo_notes:
      - combo_note: Tonberry adds should be killed in groups of 3-4 while the remaining
          adds are kited around the arena until the boss attacks with Everybody's
          Grudge.
      - combo_note: The damage dealt by Everybody's Grudge is tied to how many Tonberries
          are killed via the stacking Rancor buff on the boss - this should not exceed
          4 or healers will have a tough time keeping up.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Tonberry Slasher
      attack_tags:
      - Spawn
      attack_notes:
      - attack_note: During the later half of the fight, Tonberry Slasher adds will
          spawn around the edge of the arena and begin to slowly move towards the
          center.
      - attack_note: These adds will instantly kill players who get too close to them
          - players who are kiting smaller Tonberries during the fight should be especially
          wary.
    boss_phase_summary:
    - boss_phase_item: Tanks and healers should pay attention the boss's cast bar
        to determine which of the Tankbusters will be used (Lateral is weak, Sharpened
        is high).
    - boss_phase_item: Players should stay away from the Tonberry Slasher adds that
        spawn around the edge, as they will instantly kill you if you get too close.
    boss_phase_mechanics:
    - boss_phase_mechanic_title: Rancor Buff
      boss_phase_mechanic_notes:
      - boss_phase_mechanic_note: Tonberries will spawn and move towards the boss
          - killing these adds will give the boss stacks of Rancor that will increase
          the power of his raid wide attack Everybody's Grudge.
      - boss_phase_mechanic_note: Players should kill 3-4 Tonberries at a time and
          then kite the remaining adds until the boss attacks, which will reset his
          stacks.

---
