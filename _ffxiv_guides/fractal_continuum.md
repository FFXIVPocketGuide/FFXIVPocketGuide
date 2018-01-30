---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title: "The Fractal Continuum"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the dungeon The Fractal Continuum (Normal) where you'll face off against Phantom Ray, Minotaur, and The Curator."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/dungeons/fractal_continuum.jpg"
    - urlSmall: "/assets/img/dungeons/small/fractal_continuum.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "Heavensward"
    - term: "The Fractal Continuum"
    - term: "Phantom Ray"
    - term: "Minotaur"
    - term: "The Curator"
    - term: "Normal"
#
# Patch Information (Number & Name)
patchNumber: 3.0
patchName: "Heavensward"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Normal"
#
# Player Level
plvl: 60
#
# Item Level
ilvl: 145
#
# Order (Combine plvl & ilvl - 70310)
order: 60145
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "dungeon"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/65IIbIpaeGE"
#
# Multiple Bosses ==============================================================
bosses:
  # Boss Name ==================================================================
  - title: "Phantom Ray"
    # Boss ID (Used in Sidebar Menu)
    id: "boss01"
    # Fight Sequence
    sequence:
      # Fight Phase
      - phase: 01
        # Attack Script
        attacks:
          - attack: "[Double Sever (I)"
          - attack: "Rapid Sever"
          - attack: "Double Sever (II)]"
          - attack: "[Repeat]"
        # Alerts
        alerts:
          - alert: "This boss has a high amount of health and places a lot of AoE attacks at once - be ready to stay mobile."
    #
    # Boss Attacks
    #
    # Paired Attack Tags: Marker
    # AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE, Cross AoE, Figure 8 AoE
    # Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
    # Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
    #
    # Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
    attacks:
      # Attack w/ Variations ***************************************************
      - title: "Double Sever"
        phases:
          - phase: 01
        variation:
          - title: "Double Sever (I)"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Cone AoE"
            notes:
              - note: "This attack will hit multiple times in a row and alternate between the quarters of the arena."
              - note: "Each attack places 2 cones opposite of each other (North & South or Each & West)."
          - title: "Double Sever (II)"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Cone AoE"
              - tag: "Circular AoE"
            notes:
              - note: "Alongside the cones from the original version, this version places multiple circular AoEs randomly around the arena."
      # Regular Attack *********************************************************
      - title: "Rapid Sever"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack hits the primary threat target for high damage - heal and cooldown as necessary."
  # Boss Name ==================================================================
  - title: "Minotaur"
    # Boss ID (Used in Sidebar Menu)
    id: "boss02"
    # Fight Sequence
    sequence:
      # Fight Phase
      - phase: 01
        # Attack Script
        attacks:
          - attack: "[11-tonze Swipe"
          - attack: "111-tonze Swipe"
          - attack: "Disorienting Groan & 10-tonze Slash"
          - attack: "1111-tonze Swipe]"
          - attack: "[Repeat]"
        # Alerts
        alerts:
          - alert: "None of this boss' attacks have visual telegraphs - players should pay attention to the cast bar and react accordingly."
          - alert: "When players are standing near the boss, stand behind him to avoid cleaves."
        # Phase Mechanics (Include Duty Gauges)
        mechanics:
          - title: "1111-tonze Swipe & Continuum Conservators"
            notes:
              - note: "1111-tonze Swipe is an unavoidable raid wide AoE that will instantly wipe the group if it isn't interrupted by summoning a Continuum Conservator via the use of the Biomass Incubators around the arena."
    #
    # Boss Attacks
    #
    # Paired Attack Tags: Marker
    # AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE, Cross AoE, Figure 8 AoE
    # Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
    # Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
    #
    # Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
    attacks:
      # Regular Attack *********************************************************
      - title: "11-tonze Swipe"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
        tags:
          - tag: "Frontal Cleave"
        notes:
          - note: "This attack has no telegraph - tanks should keep the boss facing away from other members at all times."
      # Regular Attack *********************************************************
      - title: "111-tonze Swipe"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Melee DPS"
        tags:
          - tag: "Point Blank AoE"
          - tag: "Knockback"
        notes:
          - note: "This attack has no telegraph and hits within melee range in a circle for high damage and knockback."
      # Combination Attack *****************************************************
      - title: "Disorienting Groan & 10-tonze Slash"
        phases:
          - phase: 01
        combo:
          - title: "Disorienting Groan"
            roles:
              - role: "Healer"
            tags:
              - tag: "Raid Wide AoE"
            notes:
              - note: "The boss will hit the group with a raid wide attack and then proceed to charge at random party members, dealing further damage."
          - title: "10-tonze Slash"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Cone AoE"
            notes:
              - note: "Immediately after he is finished charging, the boss will face a direction and attack with a long frontal cone with no telegraph - stand behind the boss or far off to the sides to avoid being hit."
      # Regular Attack *********************************************************
      - title: "1111-tonze Swipe"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Spawn"
          - tag: "Buff"
        notes:
          - note: "This attack will wipe the group if it is not interrupted."
          - note: "The attack can be interrupted by interacting with one of the Biomass Incubator objects around the arena during the cast."
          - note: "This will summon a Continuum Conservator that will distract the boss."
          - note: "Players should kill this add the moment the boss' attack is interrupted as the boss will try to consume the add, buffing its strength."
  # Boss Name ==================================================================
  - title: "The Curator"
    # Boss ID (Used in Sidebar Menu)
    id: "boss03"
    # Fight Sequence
    sequence:
      # Fight Phase
      - phase: 01
        # Attack Script
        attacks:
          - attack: "[Sanctification"
          - attack: "Unholy"
          - attack: "The Educator"
          - attack: "Clockwork Alarums"
          - attack: "Mines]"
          - attack: "[Repeat]"
        # Alerts
        alerts:
          - alert: "DPS players should switch to Clockwork Alarum adds the moment they spawn."
          - alert: "Avoid standing on glowing floor tiles."
          - alert: "Players affected by the bomb debuff should avoid others until the debuff falls off."
        # Phase Mechanics (Include Duty Gauges)
        mechanics:
          - title: "Educator / Alarum Tiles"
            notes:
              - note: "When a tile in the arena is lit up, avoid touching it at all costs - players who stand on these tiles will be affected with a Vulnerability Down debuff."
          - title: "Aetherochemical Explosion"
            notes:
              - note: "Players will occasionally be affected by this debuff - move away from others to avoid hitting them with damage and knockback."
    #
    # Boss Attacks
    #
    # Paired Attack Tags: Marker
    # AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE, Cross AoE, Figure 8 AoE
    # Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
    # Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
    #
    # Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
    attacks:
      # Regular Attack *********************************************************
      - title: "Sanctification"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
        tags:
          - tag: "Cleave"
        notes:
          - note: "This boss will attack in a cone directly in front of it - tanks should keep the boss facing away from the group."
      # Regular Attack *********************************************************
      - title: "Unholy"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack hits the group for mild raid wide damage."
      # Regular Attack *********************************************************
      - title: "The Educator"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Debuff"
        notes:
          - note: "The boss will force a series of tiles on the floor to glow - these tiles will give any player who touches them a Vulnerability Down debuff."
      # Regular Attack *********************************************************
      - title: "Clockwork Alarum"
        phases:
          - phase: 01
        roles:
          - role: "DPS"
        tags:
          - tag: "Mechanic"
          - tag: "Spawn"
        notes:
          - note: "Over the course of the fight increasing numbers of Clockwork Alarum adds will spawn."
          - note: "Each add will stand on a tile and attempt to make it glow, giving it the same effect as The Educator."
          - note: "DPS players should switch to these adds the moment they spawn to avoid having the arena covered in glowing tiles."
      # Regular Attack *********************************************************
      - title: "Mines"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "The boss will occasionally spawn a number of mines on random tiles."
          - note: "After a short amount of time, these mines will explode and hit players for damage and a Paralysis debuff."
---
