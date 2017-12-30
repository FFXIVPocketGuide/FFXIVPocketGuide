---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title:  "The Royal City of Rabanastre"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the 24 man raid The Royal City of Rabanastre (Normal) where you'll face off against Mateus the Corrupt, Hashmal, Bringer of Order, Rofocale, and Argath Thadalfus."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/raids/rabanastre.jpg"
    - urlSmall: "/assets/img/raids/small/rabanastre.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "Stormblood"
    - term: "Return to Ivalice"
    - term: "Final Fantasy Tactics"
    - term: "War of the Lions"
    - term: "The Royal City of Rabanastre"
    - term: "Mateus the Corrupt"
    - term: "Hashmal, Bringer of Order"
    - term: "Rofocale"
    - term: "Argath Thadalfus"
    - term: "Normal"
#
# Patch Information (Number & Name)
patchNumber: 4.1
patchName: "The Legend Returns"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Normal"
#
# Player Level
plvl: 70
#
# Item Level
ilvl: 305
#
# Order (Combine plvl & ilvl - 70310)
order: 70305
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "raid"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/Zi99W7ejtz8"
#
# Partner Links
partners:
    - partner-title: "Best in Slot"
      partner-link: "https://www.bestinslot.co/ffxiv-the-royal-city-of-rabanastre-guide/"
#
# Multiple Bosses ==============================================================
bosses:
  # Boss Name ==================================================================
  - title: "Mateus the Corrupt"
    # Boss ID (Used in Sidebar Menu)
    id: "boss01"
    # Fight Sequence
    sequence:
      # Fight Phase
      - phase: 01
        # Attack Script
        attacks:
          - attack: "Ice Azers"
          - attack: "Unbind & Rebind"
          - attack: "Dualcast & Blizzard IV"
        # Alerts
        alerts:
          - alert: "Place markers in the East, North, and West and assign an alliance to each."
          - alert: "Alliances should focus on killing their own Water Orb adds when Bind is cast."
      # Fight Phase
      - phase: 02
        # Attack Script
        attacks:
          - attack: "Breathless"
          - attack: "Flume Toads"
          - attack: "Ice Shards"
          - attack: "Flume Toads"
        # Alerts
        alerts:
          - alert: "Kill Flume Toad adds to create bubbles to remove the Breathless debuff."
          - alert: "Ice Shard add AoE attacks WILL pop the bubbles - direct them away."
      # Fight Phase
      - phase: 03
        # Attack Script
        attacks:
          - attack: "Blizzard Spheres"
          - attack: "Azure Guards"
          - attack: "Ice Azers"
          - attack: "Frostwave"
          - attack: "Unbind & Rebind"
          - attack: "Dualcast & Blizzard IV"
          - attack: "Puddle AoEs"
        # Alerts
        alerts:
          - alert: "Be sure to tank the Azure Guard adds away from each other as they will buff each other if they're too close."
        # Phase Mechanics (Include Duty Gauges)
        mechanics:
          - title: "Duty Gauge: Mateus' Aether"
            notes:
              - note: "Begins to fill when the 3 Azure Guard adds spawn - kill these before the gauge fills or the raid will wipe."
    #
    # Boss Attacks
    #
    # Paired Attack Tags: Marker
    # AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
    # Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
    # Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
    #
    # Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
    attacks:
      # Regular Attack *********************************************************
      - title: "Ice Azer"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
          - tag: "Point Blank AoE"
        notes:
          - note: "These adds explode for a medium point blank AoE upon their death - kill them as soon as possible and dodge as necessary."
      # Combination Attack *****************************************************
      - title: "Bind & Unbind"
        phases:
          - phase: 01
        # Notes (Tactics For This Mechanic)
        notes:
          - note: "Bind places a giant ice spiral on the arena with an arrangement of adds along the track."
          - note: "A Skating Fiend will spawn in the centre of the spiral and begin to skate along the path, touching the adds and activating their effects along the way."
          - note: "Each alliance should focus on taking down the Aqua Spheres while also popping Water Orbs and plugging up Water Spouts before the Skating Fiend reaches them."
        combo:
          - title: "Water Orbs"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Spawn"
            notes:
              - note: "Water Orbs can be popped by running into them."
              - note: "Popping these does mild damage and gives the player the Drenched debuff."
              - note: "Water Orbs that are touched by the Skating Fiend will turn into Ice Slave adds that should be killed."
          - title: "Aqua Sphere"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Spawn"
            notes:
              - note: "Each alliance should burn down one Aqua Sphere as soon as possible."
              - note: "Aqua Spheres that are touched by the Skating Fiend will turn into an Ice Block that will increase damage from Blizzard IV later in the fight."
          - title: "Water Spout"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Spawn"
            notes:
              - note: "These can be plugged by having 3 player stand on top of them."
              - note: "Water Spouts that are touched by the Skating Fiend before they are plugged will turn into a targetable Blizzard III add that will tether to players and eventually turn them into Snowmen - kill the Blizzard IIIs as soon as possible."
      # Combination Attack *****************************************************
      - title: "Dualcast & Blizzard IV"
        phases:
          - phase: 01
        combo:
          - title: "Dualcast"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Buff"
            notes:
              - note: "Allows for the consecutive double cast of Blizzard IV."
          - title: "Blizzard IV"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Proximity AoE"
            notes:
              - note: "Drops numerous proximity AoEs on the arena - all alliances should run to one of the few randomized safe zones."
      # Regular Attack *********************************************************
      - title: "Breathless"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Debuff"
        notes:
          - note: "This debuff stacks on all players and will instantly kill you when it reaches 10 stacks."
          - note: "Use bubbles created by killing Flume Toad adds to remove your stacks."
      # Regular Attack *********************************************************
      - title: "Flume Toad"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "These adds spawn bubbles that eliminate breathless stacks from players - kill the toads to generate bubbles and stand inside of them."
      # Regular Attack *********************************************************
      - title: "Ice Shards"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "These adds target random players with long column AoEs that will pop air bubbles created by dead Flume Toads."
          - note: "If you are targeted by this attack, ensure that the column does not pass through bubbles."
      # Regular Attack *********************************************************
      - title: "Blizzard Spheres"
        phases:
          - phase: 03
        roles:
          - role: "Everyone"
        tags:
          - tag: "Tether"
          - tag: "Column AoE"
        notes:
          - note: "These will tether to players and target them with long column AoEs that will Freeze players affected by the Drenched debuff."
      # Regular Attack *********************************************************
      - title: "Azure Guard"
        phases:
          - phase: 03
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "3 of these adds spawn - each should be taken by an alliance."
          - note: "These adds buff each other the closer they are together - separate them immediately."
          - note: "Kill these before Mateus' Duty Gauge reaches 100 or the raid will wipe."
      # Regular Attack *********************************************************
      - title: "Frostwave"
        phases:
          - phase: 03
        roles:
          - role: "Everyone"
        tags:
          - tag: "Ultimate"
        notes:
          - note: "Does raid wide damage based on how full the Duty Gauge is - if the gauge is at 100, the raid will wipe."
          - note: "Shield and heal through this as necessary."
      # Attack w/ Variations ***************************************************
      - title: "Puddle AoEs"
        phases:
          - phase: 03
        variation:
          - title: "Puddle AoE I"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Puddle AoE"
            notes:
              - note: "Targets players where they stand - move out of the telegraph to avoid damage."
          - title: "Puddle AoE II"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Puddle AoE"
              - tag: "Debuff"
            notes:
              - note: "Appears randomly around the arena and will affect players with the debuff Dropsie if they are hit - this persists after the fight, so avoid it at all costs."
  # Boss Name ==================================================================
  - title: "Hashmal, Bringer of Order"
    # Boss ID (Used in Sidebar Menu)
    id: "boss02"
    # Fight Sequence
    sequence:
      # Fight Phase
      - phase: 01
        # Attack Script
        attacks:
          - attack: "Quake IV"
          - attack: "Jagged Edge"
          - attack: "Control Tower & Sanction"
          - attack: "Extreme Edge"
          - attack: "Rockcutter"
          - attack: "Earth Hammer"
        # Alerts
        alerts:
          - alert: "Place markers in the North West, North East, and South for each alliance to rally around their Sand Spheres in the second phase."
          - alert: "When the boss disappears to attack with Extreme Edge, pay attention to which of his arms is glowing - run to the opposite side to avoid being hit as he rushes across the arena."
      # Fight Phase
      - phase: 02
        # Attack Script
        attacks:
          - attack: "Command Tower"
          - attack: "Jagged Edge"
          - attack: "Sand Sphere & To Dust"
          - attack: "Falling Boulder"
          - attack: "Landwasher"
          - attack: "Control Tower & Sanction"
          - attack: "Jagged Edge"
          - attack: "Extreme Edge"
          - attack: "Earth Hammer"
          - attack: "Pennantstone Golem x2"
        # Alerts
        alerts:
          - alert: "Each alliance should tackle their respective Sand Sphere AS SOON AS POSSIBLE when they spawn - the raid will wipe if they manage to cast To Dust."
          - alert: "All players should switch to attacking the Pennantstone Golems when they appear at the end of the phase."
        # Phase Mechanics (Include Duty Gauges)
        mechanics:
          - title: "Duty Gauge: Mana"
            notes:
              - note: "This gauge will fill while the Command Tower add is alive - if it reaches 100 the raid will wipe during Landwasher."
      # Fight Phase
      - phase: 03
        # Attack Script
        attacks:
          - attack: "Submission Tower"
          - attack: "Sand Sphere & To Dust"
          - attack: "Falling Boulder"
          - attack: "[Repeat Basic Attacks]"
        # Alerts
        alerts:
          - alert: "Again, each alliance should take down their respective Sand Sphere as soon as possible."
    #
    # Boss Attacks
    #
    # Paired Attack Tags: Marker
    # AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
    # Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
    # Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
    #
    # Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
    attacks:
      # Regular Attack *********************************************************
      - title: "Quake IV"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack hits the whole raid for moderate raid wide damage."
      # Regular Attack *********************************************************
      - title: "Jagged Edge"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Puddle AoE"
        notes:
          - note: "This attack targets multiple players with a red marker and then drops 3 successive puddle AoEs on their location."
          - note: "Move out of the telegraph to avoid damage, but be aware of where you're playing your AoEs to avoid dropping them on other players."
      # Combination Attack *****************************************************
      - title: "Control Tower & Sanction"
        phases:
          - phase: 01
        combo:
          - title: "Control Tower"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Column AoE"
            notes:
              - note: "1 or 2 of these towers will spawn and be sliced by Sanction - observe the slice direction and move out of the way."
          - title: "Sanction"
            roles:
              - role: "Healer"
            tags:
              - tag: "Raid Wide AoE"
            notes:
              - note: "This attack hits the raid for mild raid wide damage and also activates the Control Tower column AoEs by slicing the towers."
      # Regular Attack *********************************************************
      - title: "Extreme Edge"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Area AoE"
        notes:
          - note: "The boss will disappear to one side of the arena and 1 of his arms will begin to glow - players must move to the OPPOSITE side of the glowing arm before Hashmal dashes across the arena."
      # Regular Attack *********************************************************
      - title: "Rockcutter"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack hits the primary threat target for moderate damage."
      # Regular Attack *********************************************************
      - title: "Earth Hammer"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Proximity AoE"
        notes:
          - note: "This attack places 1-3 giant rocks above the arena that cast a shadow where they will drop."
          - note: "Players must use the shadows to anticipate the proximity location, as the typical proximity telegraph only appears VERY briefly before the rocks drop."
      # Regular Attack *********************************************************
      - title: "Command Tower"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Spawn"
          - tag: "Raid Wide AoE"
          - tag: "Knockback"
          - tag: "Cone AoE"
        notes:
          - note: "The boss will summon a large tower in the centre of the arena, knocking all players back and dealing mild raid wide damage."
          - note: "The tower must be destroyed before Hashmal's Mana Duty Gauge fills."
          - note: "Alliances should position themselves near their marker to prepare for the Sand Sphere spawns that occur during this attack."
          - note: "The tower will hit the arena with alternating cone AoE attacks."
      # Combination Attack *****************************************************
      - title: "Sand Sphere & To Dust"
        phases:
          - phase: 02
        combo:
          - title: "Sand Sphere"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Spawn"
            notes:
              - note: "3 of these adds will spawn at pre-determined locations (North West, North East, South) - place markers here before the beginning of the fight."
              - note: "Each Sand Sphere should be tackled by 1 alliance."
              - note: "These adds must die before their To Dust cast goes off or the raid will wipe."
          - title: "To Dust"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Raid Wide AoE"
            notes:
              - note: "This attack is being cast while the raid destroys the Sand Spheres - if it goes off, the raid will wipe."
      # Regular Attack *********************************************************
      - title: "Falling Boulder"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "One player from each alliance will be targeted with a stack marker - all remaining players should stack with their alliance member."
      # Regular Attack *********************************************************
      - title: "Landwasher"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Ultimate"
        notes:
          - note: "This attack does damage based on how full the Duty Gauge is by the time the Command Tower is destroyed."
          - note: "If the gauge is at 100, the raid will wipe."
      # Regular Attack *********************************************************
      - title: "Pennantstone Golem"
        phases:
          - phase: 02
        roles:
          - role: "Off Tank"
          - role: "DPS"
        tags:
          - tag: "Spawn"
        notes:
          - note: "These adds will spawn in a pair and will hit the group with raid wide damage each time they attack."
          - note: "The Golems grow with each attack, increasing the damage they deal until they eventually wipe the group."
      # Regular Attack *********************************************************
      - title: "Submission Tower"
        phases:
          - phase: 03
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "3 columns will spawn on the edge of the arena and fall inwards toward the centre - alliances should move to their markers and prepare for another round of Sand Spheres."
  # Boss Name ==================================================================
  - title: "Rofocale"
    # Boss ID (Used in Sidebar Menu)
    id: "boss03"
    # Fight Sequence
    sequence:
      # Fight Phase
      - phase: 01
        # Attack Script
        attacks:
          - attack: "[Crush Helm"
          - attack: "Chariot"
          - attack: "Cry of Victory"
          - attack: "Crush Weapon"
          - attack: "Trample"
          - attack: "Maverick (I)]"
          - attack: "[Repeat]"
          - attack: "Archaeodemon x3"
          - attack: "Aetherial Acceleration"
        # Alerts
        alerts:
          - alert: "If you are targeted by a column attack, run TOWARDS the boss to minimize the distance he moves."
          - alert: "Trample is a Figure 8 AoE - safe zones are outside the pattern or inside the holes in the 8."
          - alert: "Safe zones for the first version of Maverick are next to the outer most clones."
        # Phase Mechanics (Include Duty Gauges)
        mechanics:
          - title: "Duty Gauge: Aetherial Acceleration"
            notes:
              - note: "This gauge will fill while the Archaeodemon adds are alive - if it reaches 100 the raid will wipe when the boss finishes flying into the sky."
      # Fight Phase
      - phase: 02
        # Attack Script
        attacks:
          - attack: "Embrace"
          - attack: "Pomp and Circumstance"
          - attack: "Maverick (II)"
          - attack: "Dark Geas"
          - attack: "Maverick (I)"
          - attack: "Repeat"
        # Alerts
        alerts:
          - alert: "Pay close attention to where Embrace puddles are when they pulse to avoid stepping in them."
          - alert: "When the arena goes dark, be sure to INTERACT with all dark circle objects to avoid wiping the raid."
    #
    # Boss Attacks
    #
    # Paired Attack Tags: Marker
    # AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
    # Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
    # Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
    #
    # Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
    attacks:
      # Regular Attack *********************************************************
      - title: "Crush Helm"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "Hits the primary threat target with 4 attacks that apply Physical Vulnerability Up debuffs and is followed by a very strong tankbuster."
          - note: "Heal and cooldown as necessary."
      # Regular Attack *********************************************************
      - title: "Chariot"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This attack targets a random, single player for a column AoE that will cause the boss to charge across the telegraph."
          - note: "The player targeted by this attack should move TO the boss to avoid having him move around too much."
      # Regular Attack *********************************************************
      - title: "Cry of Victory"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Area AoE"
        notes:
          - note: "This attack covers the arena in 180 degrees."
          - note: "Stand near the boss to ensure you have enough time to avoid this attack."
      # Regular Attack *********************************************************
      - title: "Crush Weapon"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Puddle AoE"
        notes:
          - note: "Targets random players with consecutive Puddle AoEs - be aware of where you place these to avoid trapping other players."
      # Regular Attack *********************************************************
      - title: "Trample"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Figure 8 AoE"
          - tag: "Knockback"
        notes:
          - note: "The boss will turn towards a random direction and charge in a blue figure 8 shape."
          - note: "The exterior of the 8 and the interior holes of the 8 are safe zones."
      # Attack w/ Variations ***************************************************
      - title: "Maverick"
        phases:
          - phase: 01
        variation:
          - title: "Maverick (I)"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Area AoE"
            notes:
              - note: "The boss will disappear and 5 clones will appear along the edge of the arena and charge across in a straight line."
              - note: "There are 2 small safe zones next to the 2 outer most clones."
          - title: "Maverick (II)"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Column AoE"
            notes:
              - note: "2 clones will spawn on either side of the arena and charge across the center."
      # Regular Attack *********************************************************
      - title: "Archaeodemon"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
          - tag: "Mechanic"
        notes:
          - note: "3 of these will spawn and become trapped within walled prisons - each alliance should target 1."
          - note: "These adds must be killed before the Aetherial Acceleration Duty Gauge fills to 100."
          - note: "Players will have to dodge AoEs from the adds while also paying attention to Rofocale as he charges around the arena."
      # Regular Attack *********************************************************
      - title: "Aetherial Acceleration"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Ultimate"
        notes:
          - note: "This attack builds up power via the Aetherial Acceleration Gauge."
          - note: "If the gauge reaches 100, the group will wipe - kill all 3 Archaeodemon adds before the gauge fills."
      # Regular Attack *********************************************************
      - title: "Embrace"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Puddle AoE"
          - tag: "Debuff"
        notes:
          - note: "Places random blue puddle AoEs that are only visible when they pulse."
          - note: "If a player walks over one of these puddles, it will expand and bind all players it hits - Healers can dispel this bind."
      # Regular Attack *********************************************************
      - title: "Pomp and Circumstance"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Proximity AoE"
        notes:
          - note: "The boss will stop and telegraph this attack from wherever he is standing - move as far away as possible from him."
      # Regular Attack *********************************************************
      - title: "Dark Geas"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Debuff"
        notes:
          - note: "The room will go dark and the whole raid will be affected with a bleed debuff."
          - note: "Dark Circle objects will appear around the arena - INTERACTING with them destroys them - do this before the Bleed debuff kills everyone."
  # Boss Name ==================================================================
  - title: "Argath Thadalfus"
    # Boss ID (Used in Sidebar Menu)
    id: "boss04"
    # Fight Sequence
    sequence:
      # Fight Phase
      - phase: 01
        # Attack Script
        attacks:
          - attack: "Crippling Blow"
          - attack: "Crush Weapon"
          - attack: "Soulfix"
          - attack: "Divine Commandment"
          - attack: "Trepidation"
          - attack: "Unrelenting"
          - attack: "Judgement Blade & Coldblood (I)"
          - attack: "Royal Blood"
          - attack: "Empty Soul"
        # Alerts
        alerts:
          - alert: "1 player should stand in each meteor during Trepidation."
          - alert: "Players marked for Judgement Blade should stack in the center of the arena."
        # Phase Mechanics (Include Duty Gauges)
        mechanics:
          - title: "Masks & Divine Commandment"
            notes:
              - note: "This boss introduces a mechanic that will show each player 1 of 2 masks that affect the Divine Commandment mechanic."
              - note: "The Angel mask means follow the command, while the Demon mask means do the opposite of the command."
          - title: "Duty Gauge: Emptiness"
            notes:
              - note: "This gauge will fill while the Shards of Emptiness adds are alive - kill them before the gauge reaches 100 or the raid will wipe during Empty Soul."
      # Fight Phase
      - phase: 02
        # Attack Script
        attacks:
          - attack: "Gnawing Dread"
          - attack: "Coldblood (II)"
          - attack: "Fire IV"
          - attack: "Repeat Basics"
        # Alerts
        alerts:
          - alert: "The edge of the platform now turns you into a zombie, forcing you to attack other players and eventually kill yourself."
        # Phase Mechanics (Include Duty Gauges)
        mechanics:
          - title: "Gnawing Dread"
            notes:
              - note: "This attack puts a spinning arrow marker above each player's head."
              - note: "The marker spins while the player is still, and then forces the player to run in the direction it is facing when they begin to move."
    #
    # Boss Attacks
    #
    # Paired Attack Tags: Marker
    # AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
    # Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
    # Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
    #
    # Use "attk-reg", "attk-combo", "attk-vari" to insert Attack Snippets.
    attacks:
      # Regular Attack *********************************************************
      - title: "Crippling Blow"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack hits the main threat target for moderate damage - heal and cooldown as necessary."
      # Regular Attack *********************************************************
      - title: "Crush Weapon"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Puddle AoE"
        notes:
          - note: "Targets random players with consecutive Puddle AoEs - be aware of where you place these to avoid trapping other players."
      # Regular Attack *********************************************************
      - title: "Soulfix"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Point Blank AoE"
        notes:
          - note: "This attack hits from the boss' location - move out of melee range to avoid damage."
      # Combination Attack *****************************************************
      - title: "Divine Commandment"
        phases:
          - phase: 01
        # Notes (Tactics For This Mechanic)
        notes:
          - note: "This attack will show 1 of 2 masks on the screen and then mark all players with either a Gaze (eye) or Movement (arrow) marker."
          - note: "Receiving the angel mask means that you must do what your marker says."
          - note: "Receiving the demon mask means that you have to do the opposite of what your marker says."
          - note: "Doing the wrong task will result in stacks of Unnerved - at 3 stacks the player will be turned into a chicken and forced to run to the edge of the arena."
        combo:
          - title: "Masks"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
            notes:
              - note: "1 of 2 masks will appear on screen - an angel or a demon."
              - note: "If you receive an angel mask - do what your markers tell you."
              - note: "If you receive a demon mask - do the opposite of what your markers tell you."
          - title: "Gaze Marker"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Marker"
              - tag: "Gaze"
              - tag: "Mechanic"
            notes:
              - note: "If you get the Gaze marker and have an angel mask: look away from the boss."
              - note: "If you get the Gaze marker and have a demon mask: look towards the boss."
          - title: "Movement Marker"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Marker"
              - tag: "Mechanic"
            notes:
              - note: "If you get the Movement marker and have an angel mask: continue to move around until the attack finishes."
              - note: "If you get the Movement marker and have a demon mask: stop all action and stand still."
      # Regular Attack *********************************************************
      - title: "Trepidation"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Meteor"
        notes:
          - note: "Places multiple meteor AoEs around the arena - have at least 1 player stand in each meteor to mitigate damage to the group."
      # Regular Attack *********************************************************
      - title: "Unrelenting"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Cone AoE"
        notes:
          - note: "Hits with multiple narrow cone AoEs in a large cone from the front of the boss."
      # Regular Attack *********************************************************
      - title: "Judgement Blade"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Area AoE"
          - tag: "Marker"
          - tag: "Cross AoE"
        notes:
          - note: "This attack places multiple square AoEs around the arena that cause Bleeding."
          - note: "Multiple players will be targeted with a sword shaped marker and eventually drop a massive cross shaped AoE where they stand."
          - note: "All marked players should stack in the center of the arena and drop their AoE there to maximize the safe space for the rest of the group."
      # Attack w/ Variations ***************************************************
      - title: "Coldblood"
        phases:
          - phase: 01
        # Notes (Tactics For This Mechanic)
        notes:
          - note: ""
        variation:
          - title: "Coldblood (I)"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Proximity AoE"
            notes:
              - note: "The boss will disappear and drop a proximity AoE in one of the corners of the arena."
          - title: "Coldblood (II)"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Proximity AoE"
            notes:
              - note: "The telegraph for this version of Coldblood is different - the arena will be covered in an AoE with a small circle indicating the safest spot."
              - note: "Players must time their Gnawing Dread marker to ensure they reach the circle before the attack hits."
      # Regular Attack *********************************************************
      - title: "Royal Blood"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Tether"
          - tag: "Spawn"
        notes:
          - note: "Spawns numerous Shade adds that tether to players."
          - note: "Shades should be killed as soon as possible and will eventually explode doing raid wide damage and giving players Unnerved debuffs."
      # Regular Attack *********************************************************
      - title: "Empty Soul"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Ultimate"
        notes:
          - note: "Shards of Emptiness adds spawn and begin to fill the Emptiness Duty Gauge."
          - note: "Kill these adds before the gauge fills or the raid will wipe."
      # Regular Attack *********************************************************
      - title: "Gnawing Dread"
        phases:
          - phase: 02
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Mechanic"
        notes:
          - note: "Places a special spinning hand marker above players' heads."
          - note: "The marker will spin while players are standing still, and will stop and force the player to run in the direction it is facing the moment they start to move."
          - note: "This marker will stay during multiple mechanics - the player should only move when necessary to avoid running into other attacks."
          - note: "Stand still to allow the marker to spin to the correct direction you want to move in and then run the moment it's facing the correct orientation."
      # Regular Attack *********************************************************
      - title: "Fire IV"
        phases:
          - phase: 02
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack his the raid for mild raid wide damage."
---
