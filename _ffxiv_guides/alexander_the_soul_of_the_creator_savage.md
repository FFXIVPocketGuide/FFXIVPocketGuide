---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title:  "Alexander: The Soul of the Creator"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the 8 man raid Alexander: The Soul of the Creator (Savage) where you'll face off against Alexander Prime."
#
# Primary Image (1500px Wide) & Thumbnail (500px Wide)
image:
    - url: "/assets/img/raids/alex_12_s.jpg"
    - urlSmall: "/assets/img/raids/small/alex_12_s.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "Heavensward"
    - term: "A12S"
    - term: "Alexander: The Soul of the Creator"
    - term: "Alexander Prime"
    - term: "Savage"
#
# Patch Information (Number & Name)
patchNumber: 3.4
patchName: "Soul Surrender"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Savage"
#
# Player Level
plvl: 60
#
# Item Level
ilvl: 245
#
# Order (Combine plvl & ilvl - 70310)
order: 60245
#
# Orchestrion Roll
orchestrion: "Moebius & Rise"
#
# Instance Type
instanceType: "raid"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/7R5LE8ZzBFw"
#
bossName: "Alexander Prime"
attacks:
  - title: "Divine Spear"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Cleave"
    notes:
      - note: "This frontal cleave has high damage - face Alexander to the north, away from the raid."
  - title: "Punishing Heat"
    phases:
      - phase: 01
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
    notes:
      - note: "This attack targets the tank for high damage - cooldown and heal as necessary."
  - title: "Blazing Scourge"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Marker"
    notes:
      - note: "2 players will be marked with red markers - move away from the group and prepare for multiple hits."
  - title: "Incinerating Heat"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Stack"
    notes:
      - note: "This attack targets a healer - all team members except those targeted by 'Blazing Scourge' should stack to soak damage."
  - title: "Mega Holy"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Raid-Wide AoE"
    notes:
      - note: "This raid-wide attack does high damage - prepare to shield and heal through it."
  - title: "Gravitational Anomaly"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "AoE Puddle"
    notes:
      - note: "AoE puddles will spawn underneath players - these begin small and quickly grow."
      - note: "It helps to stack up to bait the puddles into one area to help create more accessible safe zones."
  - title: "Sacrament"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Column AoE"
    notes:
      - note: "This column AoE shoots in 4 directions with Alexander at the center - safe zones are the boss' diagonals."
  - title: "Radiant Sacrament"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Donut AoE"
    notes:
      - note: "This attack covers the whole arena in a donut AoE - the only safe zone is inside Alexander's hitbox."
  - title: "Divine Judgement"
    phases:
      - phase: 02
    roles:
      - role: "Everyone"
    tags:
      - tag: "Ultimate"
    notes:
      - note: "This attack occurs after Alexander spawns 3 waves of adds."
      - note: "If <strong>ANY</strong> adds are alive when the cast goes off, you will wipe."
      - note: "Tanks must Limit Break 3 at 3-5 seconds on the timer in order for the group to survive."
  - title: "Chronofoil"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Animation"
    notes:
      - note: "Alexander will grow a pair of wings - use this time for DPS."
  - title: "Temporal Stasis 01"
    phases:
      - phase: 03
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
    notes:
      - note: "This attack will freeze time and combines multiple debuffs that complicate party placement."
      - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_defamation.png' alt='Defamation Icon' class='guide-trial__status-icon'> <strong>Defamation</strong>: causes a very large AoE to spawn on a player and applies a Magic Vulnerability Up Debuff."
      - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_shared_sentence.png' alt='Shared Sentence Icon' class='guide-trial__status-icon'> <strong>Shared Sentence</strong>: causes a small AoE and applies a Magic Vulnerability Up Debuff - this debuff requires another player that does not have Defamation or Shared Sentence."
      - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_restraining_order.png' alt='Restraining Order Icon' class='guide-trial__status-icon'> <strong>Restraining Order</strong>: tethers two players together with a blue tether - these players should be as far apart as possible."
      - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_house_arrest.png' alt='House Arrest Icon' class='guide-trial__status-icon'> <strong>House Arrest</strong>: tethers two players together with a green and red tether - these players should be as close together as possible."
      - note: "The debuffs will be distributed as such: <ul><li>3 DPS - Defamation</li><li>1 DPS & 1 Healer - Shared Sentence</li><li>2 Tanks - Restraining Order OR House Arrest</li><li>1 Healer - No Debuff</li></ul>"
    images:
      - url: "/assets/img/raids/alex_12_s/alex_12_s_stasis_01.png"
        alt: "Debuff Placement During Stasis 01."
  - title: "Temporal Stasis 02"
    phases:
      - phase: 04
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
    notes:
      - note: "This attack will freeze time and combines multiple debuffs that complicate party placement."
      - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_defamation.png' alt='Defamation Icon' class='guide-trial__status-icon'> <strong>Defamation</strong>: causes a very large AoE to spawn on a player and applies a Magic Vulnerability Up Debuff."
      - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_shared_sentence.png' alt='Shared Sentence Icon' class='guide-trial__status-icon'> <strong>Shared Sentence</strong>: causes a small AoE and applies a Magic Vulnerability Up Debuff - this debuff requires another player that does not have Defamation or Shared Sentence."
      - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_restraining_order.png' alt='Restraining Order Icon' class='guide-trial__status-icon'> <strong>Restraining Order</strong>: tethers two players together with a blue tether - these players should be as far apart as possible."
      - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_house_arrest.png' alt='House Arrest Icon' class='guide-trial__status-icon'> <strong>House Arrest</strong>: tethers two players together with a green and red tether - these players should be as close together as possible."
      - note: "The debuffs will be distributed as such: <ul><li>1 Tank & 1 Healer - Defamation</li><li>2 DPS - Shared Sentence</li><li>1 Tank & 1 Healer - Restraining Order OR House Arrest</li><li>2 DPS - Restraining Order OR House Arrest</li></ul>"
    images:
      - url: "/assets/img/raids/alex_12_s/alex_12_s_stasis_02.png"
        alt: "Debuff Placement During Stasis 02."
  - title: "Timegates"
    phases:
      - phase: 05
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
    notes:
      - note: "This attack will spawn 4 timegates and 4 adds - the adds will procede to enter their respective gate."
      - note: "Assign the following players to the appropriate add: <ul><li>North East / North West: The General's Wings = 1 DPS each.</li><li>South West: The General's Might = 1 Tank.</li><li>South East: The General's Time = 1 Healer.</li></ul>"
      - note: "These fights are tough given their solo nature - the healer should prioritize staying alive until the rest of the team can come to help."
  - title: "Judgement Crystal"
    phases:
      - phase: 05
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
    notes:
      - note: "Players will be marked with red markers for a large crystal to drop on them - it is important that these crystals are placed in the locations indicated in the image below."
      - note: "These crystals will explode causing 'Tetrashatter' if Alexander is close to them - this will be used to determine Alexander's location later in the fight."
      - note: "Judgement Crystal will alternate in the following pattern: 'Judgement Crystal' > 'Incinerating Heat' > 'Judgement Crystal' > '(Radiant) Sacrament' > 'Judgement Crystal' > 'Punishing Heat' > 'Judgement Crystal'."
    images:
      - url: "/assets/img/raids/alex_12_s/alex_12_s_crystal_drops.png"
        alt: "Judgement Crystal Placement"
  - title: "Inception 01 & Tetrashatter & Sacrament"
    phases:
      - phase: 05
    combo:
      - title: "Inception 01"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Alexander will disappear and reappear randomly at one of the red dots around the arena (grey circles on the image) - 'Tetrashatter' will be used to predict his location."
      - title: "Tetrashatter"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Proximity AoE"
        notes:
          - note: "'Tetrashatter' will be indicated by a proximity AoE field - the crystal that begins the attack will tell you that Alexander is about to land at one of the red dots next to this crystal."
          - note: "'Tetrashatter' will hit for 2K or 10K damage depending on your proximity."
      - title: "Sacrament"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "When he appears, Alexander will immediately cast Sacrament."
          - note: "Players should move as far away from Tetrashatter as possible while remaining in Sacrament's diagonal safe zones (see image)."
    images:
      - url: "/assets/img/raids/alex_12_s/alex_12_s_inception_01.png"
        alt: "Inception Safe Zone Example"
  - title: "Inception 02 & Tetrashatter & Sacrament"
    phases:
      - phase: 05
    combo:
      - title: "Inception 02"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Alexander will disappear and reappear randomly at one of the red dots around the arena (grey circles on the image) - 'Tetrashatter' will be used to predict his location."
          - note: "This time, players will have to deal with the following Debuffs:"
          - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_defamation.png' alt='Defamation Icon' class='guide-trial__status-icon'> <strong>Defamation</strong>: causes a very large AoE to spawn on a player and applies a Magic Vulnerability Up Debuff."
          - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_shared_sentence.png' alt='Shared Sentence Icon' class='guide-trial__status-icon'> <strong>Shared Sentence</strong>: causes a small AoE and applies a Magic Vulnerability Up Debuff - this debuff requires another player that does not have Defamation or Shared Sentence."
          - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_restraining_order.png' alt='Restraining Order Icon' class='guide-trial__status-icon'> <strong>Restraining Order</strong>: tethers two players together with a blue tether - these players should be as far apart as possible."
          - note: "<img src='/assets/img/raids/alex_12_s/alex_12_s_house_arrest.png' alt='House Arrest Icon' class='guide-trial__status-icon'> <strong>House Arrest</strong>: tethers two players together with a green and red tether - these players should be as close together as possible."
          - note: "The debuffs will be distributed as such: <ul><li>Main Tank - Defamation</li><li>1 Healer - Shared Sentence</li><li>Off Tank & 1 DPS - Restraining Order OR House Arrest</li><li>1 Healer & 1 DPS - Restraining Order OR House Arrest</li><li>2 DPS - Restraining Order OR House Arrest</li></ul>"
      - title: "Tetrashatter"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Proximity AoE"
        notes:
          - note: "'Tetrashatter' will be indicated by a proximity AoE field - the crystal that begins the attack will tell you that Alexander is about to land at one of the red dots next to this crystal."
          - note: "'Tetrashatter' will hit for 2K or 10K damage depending on your proximity."
      - title: "Sacrament"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "When he appears, Alexander will immediately cast Sacrament."
          - note: "Players should move as far away from Tetrashatter as possible while remaining in Sacrament's diagonal safe zones (see image)."
    images:
      - url: "/assets/img/raids/alex_12_s/alex_12_s_inception_02.png"
        alt: "Inception Safe Zone Example"
  - title: "Void of Repentance & Incinerating Heat"
    phases:
      - phase: 06
    combo:
      - title: "Void of Repentance"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "This attack spawns two large AoE puddles that require players to soak them up 3 times each."
          - note: "Soaking a pool will cause damage and a Magic Vulnerability Up Debuff."
          - note: "Pools should be soaked in the following order:<ul><li>DPS Pair 01</li><li>DPS Pair 02</li><li>Tank Pair</li></ul>"
          - note: "The DPS pair that hits the pools first are the only available team members to help soak damage from the following 'Incinerating Heat' - make your way to the healers."
      - title: "Incinerating Heat"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "This attack targets a healer - only the 2 DPS players who hit the 'Void of Repentance' pools first will be available to help soak damage."
  - title: "Holy Bleed"
    phases:
      - phase: 06
    roles:
      - role: "Everyone"
    tags:
      - tag: "Raid-Wide AoE"
    notes:
      - note: "This raid-wide AoE hits hard - healers be ready to shield, heal, and Limit Break if necessary."
  - title: "Holy Scourge"
    phases:
      - phase: 06
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
    notes:
      - note: "This attack will inflict Prey on the main tank for 4 hits - cooldown and heal as necessary."
  - title: "Chastening Heat"
    phases:
      - phase: 06
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
    notes:
      - note: "This attack must be tank swapped - Off Tanks prepare to 'Provoke' during the cast."
      - note: "Use cooldowns as necessary and expect a Physical Vulnerability Up Debuff."
  - title: "Void of Repentance & Incinerating Heat & Communion & Sacrament"
    phases:
      - phase: 06
    combo:
      - title: "Void of Repentance"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "This attack spawns two large AoE puddles (large red circles) that require players to soak them up 3 times each."
          - note: "Soaking a pool will cause damage and a Magic Vulnerability Up Debuff."
          - note: "Pools should be soaked in the following order:<ul><li>DPS Pair 01</li><li>DPS Pair 02</li><li>Tank Pair</li></ul>"
          - note: "The DPS pair that hits the pools first are the only available team members to help soak damage from the following 'Incinerating Heat' - make your way to the healers."
      - title: "Incinerating Heat"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "This attack targets a healer - only the 2 DPS players who hit the 'Void of Repentance' pools first will be available to help soak damage."
      - title: "Communion"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Puddle AoE"
        notes:
          - note: "While 'Void of Repentance' and 'Incinerating Heat' are happening, Alexander Fortress will mark players with red lasers indicating that they are being targeted by Communion."
          - note: "Communion will drop successive AoE puddles (small red circles) on players who must strategically place them while sticking to their soak order for 'Void of Repentance' - see diagrams below for options."
          - note: "These puddles will kill you instantly if stepped into - tanks should be careful to avoid them when running to their final soak."
      - title: "Sacrament"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This column AoE (orange rectangles) shoots in 4 directions with Alexander at the center - safe zones are the boss' diagonals."
          - note: "Tanks should position Alexander appropriately to ensure that Sacrament's columns to not overlap with 'Void of Repentance' pools."
    images:
      - url: "/assets/img/raids/alex_12_s/alex_12_s_repentance_01.png"
        alt: "Tanking Alexander in the North During Void of Repentance."
      - url: "/assets/img/raids/alex_12_s/alex_12_s_repentance_02.png"
        alt: "Tanking Alexander in the Center During Void of Repentance."
sequence:
  - phase: 01
    attacks:
      - attack: "Divine Spear"
      - attack: "Punishing Heat"
      - attack: "Divine Spear"
      - attack: "Blazing Scourge & Incinerating Heat"
      - attack: "Mega Holy"
      - attack: "Mega Holy"
      - attack: "Gravitational Anomaly"
      - attack: "(Radiant) Sacrament"
      - attack: "Divine Spear"
      - attack: "Punishing Heat"
    alerts:
      - alert: "Tanks should pull Alexander and face him to the north away from the raid while the rest of the group stacks behind him."
      - alert: "Players marked with Red Markers should move away from the group and not stack during 'Incinerating Heat'."
      - alert: "Healers should watch out for successive 'Mega Holys'."
      - alert: "Players should stack to bait 'Gravitational Anomaly' puddles into one area to maximize safe space."
      - alert: "Alexander will cast either Sacrament or Radiant Sacrament - safe spots are in his diagonals or in his hitbox respectively."
  - phase: 02
    attacks:
      - attack: "Wave 01"
      - attack: "Wave 02"
      - attack: "Wave 03"
      - attack: "Divine Judgement"
    alerts:
      - alert: "Keep 'The General's Might out of the AoE cast by 'The General's Time' to avoid buffing its strength."
      - alert: "If all three waves aren't killed fast enough, the raid will wipe."
      - alert: "Expect Alexander's Ultimate - Tanks should Limit Break 3 at 3-5 seconds on the timer."
    mechanics:
      - title: "Wave 01"
        tags:
          - tag: "Adds"
        notes:
          - note: "Expect 8 'Arrhidaeus' Lanners' to spawn - tank them together and DPS them down."
      - title: "Wave 02"
        tags:
          - tag: "Adds"
        notes:
          - note: "Expect 4 'The General's Wings' to spawn - these adds continue to cast a raid-wide AoE that increases their magic damage with each cast. DPS as fast as possible."
      - title: "Wave 03"
        tags:
          - tag: "Adds"
        notes:
          - note: "Expect 1 'The General's Might' and 1 'The General's Time' to spawn - Time will place an AoE that buffs Might - DPS Time down first and keep Might out of the AoE."
          - note: "Both of these spawns have heavy tankbusters - healers watch your tanks' health."
  - phase: 03
    attacks:
      - attack: "Chronofoil"
      - attack: "Temporal Stasis 01"
      - attack: "Gravitational Anomaly"
      - attack: "(Radiant) Sacrament"
      - attack: "Mega Holy"
      - attack: "Divine Spear"
      - attack: "Punishing Heat"
      - attack: "Divine Spear"
    alerts:
      - alert: "Chronofoil's cast is free DPS."
      - alert: "Temporal Stasis 01 requires communication and preparation - review and understand the debuffs to ensure you're in the correct location for your debuff when the cast goes off."
  - phase: 04
    attacks:
      - attack: "Temporal Stasis 02"
      - attack: "Gravitational Anomaly"
      - attack: "(Radiant) Sacrament"
      - attack: "Mega Holy"
      - attack: "Divine Spear"
      - attack: "Punishing Heat"
      - attack: "Divine Spear"
    alerts:
      - alert: "Temporal Stasis 02 requires communication and preparation - review and understand the debuffs to ensure you're in the correct location for your debuff when the cast goes off."
      - alert: "Temporal Stasis 02 has a different debuff distribution than Temporal Stasis 01."
  - phase: 05
    attacks:
      - attack: "Timegates"
      - attack: "Judgement Crystal"
      - attack: "Inception 01 & Tetrashatter & Sacrament"
      - attack: "Radiant Sacrament"
      - attack: "Punishing Heat"
      - attack: "Divine Spear"
      - attack: "Gravitational Anomaly & Incinerating Heat"
      - attack: "Inception 02 & Tetrashatter & Sacrament"
      - attack: "Punishing Heat"
      - attack: "Divine Spear"
      - attack: "Gravitational Anomaly & Incinerating Heat"
    alerts:
      - alert: "Players should determine who is responsible for each Timegate in advance."
      - alert: "Be sure to bait the Judgement Crystal drops in the proper locations (see images) to ensure you can detect Inception properly."
      - alert: "Players should be aware of the debuffs during the second Inception and react accordingly."
      - alert: "The final' Gravitational Anomaly' and 'Incinerating Heat' combination happens quickly - be sure to get to a safe zone to stack on the healer to soak damage."
    mechanics:
      - title: "Timegates"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "Be sure to assign players to the appropriate gates: <ul><li>North East / North West: The General's Wings = 1 DPS each.</li><li>South West: The General's Might = 1 Tank.</li><li>South East: The General's Time = 1 Healer.</li></ul>"
  - phase: 06
    attacks:
      - attack: "Summon Alexander Fortress"
      - attack: "Void of Repentance & Incinerating Heat"
      - attack: "Holy Bleed"
      - attack: "Holy Scourge"
      - attack: "Chastening Heat"
      - attack: "[Void of Repentance & Incinerating Heat & Communion & Sacrament"
      - attack: "Holy Bleed"
      - attack: "Mega Holy"
      - attack: "Holy Scourge"
      - attack: "Chastening Heat]"
      - attack: "Repeat"
    alerts:
      - alert: "Alexander will immediately summon 'Alexander Fortress'."
      - alert: "'Void of Repentance' pools should be soaked in the same order everytime: 2 DPS, the remaining 2 DPSs, and finally both Tanks last."
      - alert: "The first pair of DPS players to soak pools should make their way to the healers to help soak damage from 'Incinerating Heat'."
      - alert: "Healers will have a difficult time keeping up with damage in this phase - pay close attention to the 'Holy Bleed', 'Holy Scourge', and 'Chastening Heat' combination."
      - alert: "Tanks be wary of 'Chastening Heat' and remember to tank swap during the cast."
      - alert: "'Void of Repentance's' second cast requires attention to detail and movement - be sure to use the diagrams to prepare in advance so that players are dropping 'Communion' pools out of other players' way."
spawns:
  - title: "Arrhidaeus' Lanner"
    notes:
      - note: "These adds will spawn in the first wave of the add phase of the fight - tank them together and DPS them down."
  - title: "The General's Wing"
    attacks:
     - attack: "Raid-Wide AoE"
    notes:
      - note: "These adds repetitively hit the group with a raid-wide AoE that increases their magic damage each time it casts - kill them as soon as possible."
  - title: "The General's Might"
    attacks:
      - attack: "Tankbuster"
    notes:
      - note: "This spawn will gain a stacking physical damage up buff over time."
      - note: "When this add spawns with 'The General's Time', be sure to keep it out of the Time's AoE."
  - title: "The General's Time"
    attacks:
     - attack: "Tankbuster"
     - attack: "Circular AoE Buff"
    notes:
      - note: "This spawn will gain a stacking magic damage up buff over time - prioritize it over 'The General's Might'."
      - note: "When this add spawns with 'The General's Might', be sure to keep Might out of this add's AoE."
---
