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
      attack_notes:
      - attack_note: 3 nails will spawn and tether to a player, giving them a stacking
          debuff and Slow.
      - attack_note: Tethered players should run as far away from their nail as possible,
          ensuring that their stacking debuff reaches 1, until the attack is finished.
      - attack_note: Players who aren't tethered will be stunned for a long time if
          they run into a tether - avoid these at all costs.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Eruption
      attack_tags:
      - AoE - Puddle
      attack_notes:
      - attack_note: This attack targets random players and drops consecutive AoEs
          on their location as they move - be sure to avoid dropping these on other
          players.
    boss_phase_summary:
    - boss_phase_item: When clocks appear on the ground, stand in the slow moving
        ones until the fast ones explode, then immediately move into the free space
        to allow the slow ones to explode.
    - boss_phase_item: When the boss's clones begin to dash, be sure to take into
        account the arrows on the ground, as they will change direction when they
        hit them.
    - boss_phase_item: If you're tethered to a nail, run as far away from it as possible
        so that your stacking debuff is down to 1 - if you aren't tethered, avoid
        running into a tether or you will be stunned.
  - boss_phase_title: Phase 02
    boss_phase_mechanics:
    - boss_phase_mechanic_title: 'Duty Gauge: Mana'
      boss_phase_mechanic_notes:
      - boss_phase_mechanic_note: This phase centers around he boss filling his Mana
          Gauge, thus making his Ultimate attack stronger.
      - boss_phase_mechanic_note: Kill the Gigas adds as fast as possible to mitigate
          damage done.
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Gigas
      attack_tags:
      - Spawn
      attack_notes:
      - attack_note: The boss will spawn 3 Gigas adds - each alliance should split
          up and destroy their respective add before the boss' Duty Gauge fills.
      - attack_note: If the adds are two close together they will tether to each other,
          buffing their stats - separate them as far apart as possible.
    - template: regular-attack
      attack_roles:
      - Healer
      - Tank
      attack_name: Hellfire
      attack_tags:
      - Ultimate
      attack_notes:
      - attack_note: This attack will hit the group for damage based on how full the
          boss's Duty Gauge is - shield and heal as necessary.
    boss_phase_summary:
    - boss_phase_item: Each alliance should take 1 Gigas add and separate them as
        far away as possible - kill these as fast as possible to void the boss's Duty
        Gauge from filling.
  - boss_phase_title: Phase 03
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Time Bomb
      attack_tags:
      - AoE - Area
      - Mechanic
      attack_notes:
      - attack_note: This attack spawns 4 clocks towards the center of the arena that
          will each drop an AoE.
      - attack_note: The location of each clock's attack is determined by the clock's
          hands - they will be pointing to the square that the attack will fall in.
      - attack_note: Players can stand in the clock to change the hands, thus changing
          the location of the attack when the cast goes off - use this mechanic to
          place the attack in a square that will be occupied by another AoE attack
          to free up safe space.
    boss_phase_summary:
    - boss_phase_item: The boss's Phase 01 attacks will occur with more overlap.
    - boss_phase_item: When 4 clocks spawn on the arena, pay attention to the clock's
        hands as they indicate which squares Time Bomb's attacks will hit.
    - boss_phase_item: Players can walk into these clock spaces to move the hand,
        therefore changing the location of the attack - use this to move the attack
        and free up safe space if needed.
- boss_name: Construct 7
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Healer
      - Tank
      attack_name: Destroy
      attack_tags:
      - Tankbuster
      attack_notes:
      - attack_note: This attack hits the primary threat target for high damage -
          shield and heal as necessary.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Accelerate
      attack_tags:
      - Marker (Orange)
      - AoE - Circular
      - Stack
      attack_notes:
      - attack_note: 1 player will be marked with a stack marker, while random other
          players will be marked with orange markers, indicating that they will drop
          an AoE on their location.
      - attack_note: All players who aren't marked should stack on the appropriate
          player while orange marked players should spread out and avoid dropping
          their AoE on others.
    - template: combo-attack
      combo_name: Pulverize & Compress
      combo_attacks:
      - attack_name: Pulverize
        attack_roles:
        - Everyone
        attack_tags:
        - AoE - Point Blank
        attack_notes:
        - attack_note: This attack has no telegraph and hits in a circle immediately
            around the boss - stay out of melee range.
      - attack_name: Compress
        attack_roles:
        - Everyone
        attack_tags:
        - AoE - Column
        attack_notes:
        - attack_note: This attack immediately follows Pulverize and places a long
            column AoE - avoid as necessary.
      combo_notes:
      - combo_note: The boss will attack with a point blank AoE and then follow up
          with a column AoE - avoid as necessary.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Cogs
      attack_tags:
      - AoE - Puddle
      attack_notes:
      - attack_note: This attack places 6 large puddle AoEs on the arena that complicated
          further mechanics.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Ignite
      attack_tags:
      - AoE - Circular
      - Marker (Orange)
      - Divebomb
      attack_notes:
      - attack_note: The boss will appear along the edge of the arena and divebomb
          in the direction he is facing.
      - attack_note: During the divebomb random players will be marked with orange
          markers and circular AoEs will drop on their location - be sure to spread
          out so that you don't drop these on other players.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Lithobrake
      attack_tags:
      - Proximity
      attack_notes:
      - attack_note: This attack drops a proximity AoE at the center of the arena
          - run as far away as possible (don't forget to dodge the cog AoEs).
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Dispose
      attack_tags:
      - Mechanic
      - AoE - Cone
      attack_notes:
      - attack_note: The boss uses this attack multiple times in succession while
          rotating his position - all players should stand behind him while he attacks
          and move accordingly as he turns to attack again.
      - attack_note: Be sure to stay behind the boss until the attack is totally finished.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Computation Mode
      attack_tags:
      - Mechanic
      attack_notes:
      - attack_note: This mechanic requires a bit of basic on-the-fly math and occurs
          twice in a row each time it is cast.
      - attack_note: The boss will reduce all players health down to 1 digit between
          1 and 8.
      - attack_note: 4 AoE circles will appear, each with 1, 2, 3, and 4 icons in
          their markers. By standing in these circles, the player can add the number
          of icons to their health pool (e.g. 1HP + 4 icons = 5HP).
      - attack_note: The boss will then use a text cue to indicate what the player
          has to do by saying "Calibrate vitals to..." and then say either "a multiple
          of X" or "a prime number."
      - attack_note: In order to pass the mechanic, each player must force their health
          to meet the requirements - for example, if the boss says "Calibrate vitals
          to a multiple of 3" and I have 2HP, I need to stand in the AoE that has
          1 icon or 4 icons (3HP or 6HP respectively).
      - attack_note: Note that 1 is not a prime number - also note that players can
          remain outside the AoE circles if their HP already meets the criteria.
    - template: attack-w-variations
      variation_name: Tartarus Mode
      variation_notes:
      - variation_note: Each alliance will be teleported to an arena and face a "Construct
          7.1" add with a unique mechanic - destroy the add to proceed in the fight.
      variation_attacks:
      - attack_name: Alliance A - Polarity
        attack_roles:
        - Everyone
        attack_tags:
        - Mechanic
        - Tether
        attack_notes:
        - attack_note: Players in alliance A will be marked with either positive (+)
            or negative (-) markers and then be tethered to another player.
        - attack_note: If the player that you are tethered to matches your marker,
            stack with them.
        - attack_note: If the player you're tethered to has the opposite marker, move
            as far away from them as possible.
      - attack_name: Alliance B - Missiles
        attack_roles:
        - Everyone
        attack_tags:
        - AoE - Area
        attack_notes:
        - attack_note: Players in alliance B will have to watch out for missiles that
            will traverse the arena during the fight - avoid these or they will explode
            for extra damage.
      - attack_name: Alliance C - Acceleration Bombs
        attack_roles:
        - Everyone
        attack_tags:
        - Debuff
        - Mechanic
        attack_notes:
        - attack_note: Players in alliance C will be afflicted with a debuff that
            requires you to stop ALL actions when the dice markers count down to 1
            and the cast goes off.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Annihilation Mode
      attack_tags:
      - Buff
      - Mechanic
      attack_notes:
      - attack_note: This mode enhances the boss's phase 01 attacks.
      - attack_note: Compress now hits with 4 columns in a cross shape compared to
          the single column.
      - attack_note: Dispose now lasts longer - stick behind the boss's back until
          the whole attack is complete.
    boss_phase_mechanics:
    - boss_phase_mechanic_title: Computation Mode
      boss_phase_mechanic_notes:
      - boss_phase_mechanic_note: This mechanic requires some on-the-fly math - the
          boss will reduce HP down to a single digit between 1 and 8.
      - boss_phase_mechanic_note: This is followed by 4 AoE circles that will add
          1, 2, 3, and 4 points of HP to your health if you stand in them.
      - boss_phase_mechanic_note: The boss will use text cues to tell players to alter
          their HP to meet certain criteria (a multiple of a number, or a prime number)
          - stand in the relevant AoEs to ensure your health is the right value.
      - boss_phase_mechanic_note: Standing outside the AoEs keeps your HP the same
          (if it already meets the requirements).
    - boss_phase_mechanic_title: Tartarus Mode
      boss_phase_mechanic_notes:
      - boss_phase_mechanic_note: Each alliance faces an add with a different mechanic.
      - boss_phase_mechanic_note: Alliance A receives polarity tethers (stack with
          your partner if you match, spread if you are opposites), alliance B needs
          to dodge missiles, and alliance C receives a buff that requires them to
          stop ALL action when the dice markers reach 1-0)
    - boss_phase_mechanic_title: Annihilation Mode
      boss_phase_mechanic_notes:
      - boss_phase_mechanic_note: This mode alters the boss's previous attacks (e.g.
          Compress hits for 4 columns instead of 1, Dispose lasts longer, etc.).
    boss_phase_summary:
    - boss_phase_item: During Ignite be sure to be aware of where the boss is at all
        times so that you can appropriately avoid his divebomb.
    - boss_phase_item: Be sure to remain behind the boss for the entire time Dispose's
        consecutive cone AoEs are being used - the length of this attack can be misleading
        and changes towards the end of the fight.
- boss_name: Yiazmat
  boss_phases:
  - boss_phase_title: Phase 01
    boss_phase_attacks:
    - template: attack-w-variations
      variation_name: Rake
      variation_attacks:
      - attack_name: Tankbuster
        attack_roles:
        - Healer
        - Tank
        attack_tags:
        - Tankbuster
        attack_notes:
        - attack_note: This version of the attack hits the primary threat target for
            high damage - shield and heal as necessary.
      - attack_name: Circular AoEs
        attack_roles:
        - Everyone
        attack_tags:
        - AoE - Circular
        attack_notes:
        - attack_note: This version of the attack is telegraphed by arrows on the
            boss's body - the first arrow will indicate his starting direction, while
            subsequent arrows will indicate which direction he's about to turn.
        - attack_note: The boss will travel around the arena stomping large circular
            AoEs into the ground - avoid as necessary.
      variation_notes:
      - variation_note: This attack has 2 variations - the tankbuster version has
          no obvious telegraph, but the second version is indicated by a large orange
          arrow on the boss.
      - variation_note: If the arrow version occurs, pay attention to the arrows that
          appear during the attack as well, as they'll indicate which way the boss
          will turn.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Dark Gale
      attack_tags:
      - AoE - Circular
      attack_notes:
      - attack_note: This attack places consecutive circular AoEs under random players
          as they move - be sure to avoid dropping these on other players.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Stone Breath
      attack_tags:
      - Debuff
      - AoE - Area
      attack_notes:
      - attack_note: The boss will target a random player and stand on its hind legs.
      - attack_note: It will then attack with an extremely large AoE directly in front
          of it, causing high damage and a Petrifaction debuff.
      - attack_note: The only safe zone for this attack is behind the boss.
    - template: regular-attack
      attack_roles:
      - Healer
      attack_name: Dust Storm
      attack_tags:
      - Raid Wide Damage
      attack_notes:
      - attack_note: This attack hits the whole raid for moderate damage - shield
          and heal as necessary.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: White Breath
      attack_tags:
      - AoE - Donut
      attack_notes:
      - attack_note: This is an extremely large donut AoE with the only safe zone
          being the boss's hitbox.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Magnetic Lysis
      attack_tags:
      - Debuff
      - Mechanic
      attack_notes:
      - attack_note: This attack gives players either a positive (+) or negative (-)
          debuff and then divides the arena into two sections.
      - attack_note: Players who stand on the side that MATCHES their debuff will
          float in the air, exposing them to death during Cyclone.
      - attack_note: Players should do their best to always stand on the side of the
          arena OPPOSITE to their debuff to ensure they're always on the ground.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Summon
      attack_tags:
      - AoE - Column
      - Tether
      - Spawn
      attack_notes:
      - attack_note: This attack summons 3 Wind Azer adds that will tether to a random
          player and attack them with a long column AoE - kill these adds as soon
          as possible.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Deathstroke
      attack_tags:
      - Stack
      attack_notes:
      - attack_note: A player will be marked with a stack marker - all players should
          stack on their location to soak damage.
    - template: regular-attack
      attack_roles:
      - Healer
      attack_name: Cyclone
      attack_tags:
      - Mechanic
      - Raid Wide Damage
      attack_notes:
      - attack_note: This attack hits the whole raid for heavy damage and throws players
          into the air - any players levitating during Magnetic Lysis will be instantly
          killed by this attack - be sure to be on the ground when this cast goes
          off.
    boss_phase_summary:
    - boss_phase_item: Tanks and Healers should pay close attention to which version
        of Rake the boss is about to use (indicated by the absence or presence of
        an orange arrow).
    - boss_phase_item: If the boss stands up, all players should run behind him.
    - boss_phase_item: The only safe zone during White Breath is the boss' hitbox
        - stick as close to him as you can.
    boss_phase_mechanics:
    - boss_phase_mechanic_title: Magnetic Lysis
      boss_phase_mechanic_notes:
      - boss_phase_mechanic_note: This attack provides players with a positive (+)
          or negative (-) debuff that correlates with areas on the floor of the arena
          - standing in the matching side will force you to levitate, while standing
          in the opposite side will keep you stuck to the ground.
      - boss_phase_mechanic_note: During Cyclone, all players who are levitating will
          be instantly killed - be sure to stick to the correct side to avoid death!
  - boss_phase_title: Phase 02
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Archaeodemon
      attack_tags:
      - Spawn
      attack_notes:
      - attack_note: This phase begins by the boss summoning 3 Archaeodemons - each
          one should be taken by an alliance and burned down - the faster they die,
          the less the boss's Mana Duty Gauge will fill.
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Heart of the Dragon
      attack_tags:
      - Spawn
      attack_notes:
      - attack_note: When the 3 Archaeodemons are killed the boss's heart will become
          targetable - burn this down as fast as possible to mitigate damage from
          the boss's Ultimate that follows.
    - template: regular-attack
      attack_roles:
      - Healer
      - Tank
      attack_name: Solar Storm
      attack_tags:
      - Ultimate
      attack_notes:
      - attack_note: This attack will hit the raid for damage based on how full the
          boss's Mana Duty Gauge is - kill the adds during this phase as quickly as
          possible to mitigate damage.
    boss_phase_mechanics:
    - boss_phase_mechanic_title: 'Duty Gauge: Mana'
      boss_phase_mechanic_notes:
      - boss_phase_mechanic_note: Players must kill the 3 Archaeodemons and the Heart
          of the Dragon adds as fast as possible to mitigate damage from Solar Storm
          - it's damage is directly tied to how full the Duty Gauge is.
    boss_phase_summary:
    - boss_phase_item: Each alliance should take 1 Archaeodemon and burn it down as
        fast as possible before switching to the Heart of the Dragon add.
  - boss_phase_title: Phase 03
    boss_phase_attacks:
    - template: regular-attack
      attack_roles:
      - Everyone
      attack_name: Growing Threat
      attack_tags:
      - Buff
      attack_notes:
      - attack_note: This attack provides the boss with a buff to its damage - kill
          it as quickly as possible!
    boss_phase_summary:
    - boss_phase_item: The boss' mechanics will repeat until it is killed - be wary
        of Growing Threat, as it will buff the boss' damage during this phase.

---
