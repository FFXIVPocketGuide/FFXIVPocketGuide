---
title: The Keeper of the Lake
layout: guide
page_type: guide
categories: arr
difficulty: Normal
orchestrion: TBD
instance_type: Dungeon
date: 2018-07-27 00:00:00 +0000
slug: the-keeper-of-the-lake
description: Read our Guide on the dungeon The Keeper of the Lake (Normal) where you'll
  face off against Einhander, Magitek Gunship, and Midgardsormr.
cover: "/uploads/keeper_lake_normal.jpg"
terms:
- term: Midgardsormr
- term: Magitek Gunship
- term: Einhander
- term: Normal
- term: The Keeper of the Lake
- term: arr
- term: A Realm Reborn
patch_number: 2.5
patch_name: Before the Fall
plvl: 50
ilvl: 90
order: 50090
mtq_vid: https://youtu.be/F7rbsXNqRtY
duty_mechanics: []
bosses:
- boss_name: Einhander
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_mechanics:
    - boss_phase_mechanic_title: Ceruleum Tanks
      boss_phase_mechanic_notes:
      - boss_phase_mechanic_note: Auxiliary (small) and Main (big) ceruleum tanks
          will drop around the arena.
      - boss_phase_mechanic_note: Small tanks can be attacked to knock them across
          the arena - do this to move all tanks away from the boss.
      - boss_phase_mechanic_note: Tanks will eventually begin to glow, indicating
          that they are about to explode - at this point they can no longer be moved
          and players should avoid them.
    boss_phase_attacks:
    - template: attack-w-variations
      variation_name: Weapons
      variation_attacks:
      - attack_name: Gun
        attack_roles:
        - Everyone
        attack_tags:
        - AoE - Column
        attack_notes:
        - attack_note: When the boss is carrying a gun it will attack random players
            with a column AoE that should be avoided.
      - attack_name: Staff
        attack_roles:
        - Everyone
        attack_tags:
        - Pull
        attack_notes:
        - attack_note: If the boss is carrying a staff, it will pull all players AND
            small ceruleum tanks to its location - all players should move out as
            quickly as possible to avoid exploding tanks.
      variation_notes:
      - variation_note: If the boss has  a gun it will fire a column, if it has a
          staff, it will pull all players and small ceruleum tanks to its location.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Mark XLIII Mini Cannon
      attack_tags:
      - AoE - Circular
      attack_notes:
      - attack_note: This attack targets random players with circular AoEs - dodge
          as necessary.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Heavy Swing
      attack_tags:
      - Cleave
      attack_notes:
      - attack_note: This attack hits directly in front of the boss - tanks should
          keep the boss facing away from players at all time.
    boss_phase_summary:
    - boss_phase_item: Attack small ceruleum tanks to move them away from the boss.
    - boss_phase_item: If the boss pulls the group in to its location, move out as
        fast as possible.
- boss_name: Magitek Gunship
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_summary:
    - boss_phase_item: Tanks should keep the boss facing away at all times and be
        sure to not run back into the Flamethrower too early.
    - boss_phase_item: If targeted by an orange marker, bait the boss along the edge
        of the arena so that it drops its fire AoEs out of the way of others.
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Tank
      attack_name: Flamethrower
      attack_tags:
      - AoE - Cone
      attack_notes:
      - attack_note: This attack hits directly in front of the boss in a large cone
          - tanks should keep the boss facing away from the group AND be sure not
          to run back into the attack too soon.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Garlean Fire
      attack_tags:
      - AoE - Puddle
      - Marker (Orange)
      attack_notes:
      - attack_note: The boss will mark a single player with an orange marker and
          then follow them around while dropping large fire puddle AoEs - bait the
          boss around the edge to avoid the puddles from consuming too much space.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Cohort Vanguard
      attack_tags:
      - Spawn
      attack_notes:
      - attack_note: These enemies will spawn during the fight and should be picked
          up and killed as quickly as possible.
- boss_name: Midgardsormr
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_summary:
    - boss_phase_item: Tanks should tank the orange Mirage Dragon far away from the
        boss, while tanking the blue Mirage Dragon as close to the boss as possible.
    - boss_phase_item: Players need to activate the magitek shield generator to avoid
        being hit for heavy damage during Animadversion - tanks be sure to keep dragon
        adds facing away so that they do not interrupt the activation.
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Disdain
      attack_tags:
      - AoE - Circular
      attack_notes:
      - attack_note: This attack targets a random player and hits their location with
          a cirular AoE - move out of the telegraph to avoid damage.
      - attack_note: During the second half of this fight, the attack will leave a
          puddle in its place - avoiding running into these.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Admonishment
      attack_tags:
      - AoE - Column
      attack_notes:
      - attack_note: This attack begins with a large column down the center of the
          arena, followed by multiple smaller column AoEs - dodge as necessary.
    - template: attack-w-variations
      variation_name: Turmoil
      variation_attacks:
      - attack_name: Inner Turmoil
        attack_roles:
        - Everyone
        attack_tags:
        - AoE - Area
        attack_notes:
        - attack_note: This attack hits the inner half (closest to the boss) with
            an AoE - avoid as necessary.
      - attack_name: Outer Turmoil
        attack_roles:
        - Everyone
        attack_tags:
        - AoE - Area
        attack_notes:
        - attack_note: This attack hits the outer area of the arena in a large half
            donut - stand within melee range to avoid damage.
      variation_notes:
      - variation_note: Observe the name of the cast to determine where to stand.
    - template: attack-w-variations
      variation_name: Mirage Dragons
      variation_attacks:
      - attack_name: Mirage Dragon (Orange)
        attack_roles:
        - Everyone
        attack_tags:
        - AoE - Circular
        - Buff
        - Tether
        - Spawn
        attack_notes:
        - attack_note: The boss will go invulnerable and revive the orange mirage
            dragon first.
        - attack_note: This dragon will tether to the boss if it is standing too close
            to Midgardsormr - tans should keep it facing away from the group and closer
            to the outer edge of the arena.
      - attack_name: Mirage Dragon (Blue)
        attack_roles:
        - Everyone
        attack_tags:
        - AoE - Circular
        - Buff
        - Tether
        - Spawn
        attack_notes:
        - attack_note: The boss will revive the blue Mirage Dragon second - this dragon
            will tether to the boss if it is too far away - tanks should keep it confined
            to melee range of the boss to avoid this.
      variation_notes:
      - variation_note: The boss will always revive the orange dragon first, and the
          blue dragon second.
      - variation_note: These adds receive buffs if they are standing too close or
          too far away from the boss, respectively.
      - variation_note: During Animadversion, tanks should be sure to keep the boss
          facing away from the shield generator or they will interrupt other players
          trying to activate it.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Animadversion
      attack_tags:
      - Mechanic
      - Ultimate
      attack_notes:
      - attack_note: This attack is signaled by an Astraea add flying into the arena
          - killing this add will drop a magitek field generator.
      - attack_note: Players can interact with this generator to trigger a bubble
          that will render them immune to Animadversion's damage - all players should
          stand inside this bubble.
      - attack_note: Tanks be sure to keep adds facing away from the player who is
          trying to interact with the generator - adds' attacks can interrupt the
          action, preventing the shield from being activated in time.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Antipathy
      attack_tags:
      - AoE - Circular
      attack_notes:
      - attack_note: This attack places a circular AoE under a random player which
          then grows over time before detonating - the targeted player needs to move
          out of this the moment they notice it or they will be hit.

---
