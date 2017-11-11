---
#
# Page Layout (Leave As Is)
layout: guide_post
#
# Duty Metadata ================================================================
#
# Guide Title
title:  "Omega: Deltascape V3.0"
#
# Guide Description (Shows Up in Google Search)
description: "Read our Guide on the 8 man raid Omega: Deltascape V3.0 (Savage) where you'll face off against Halicarnassus."
#
# Primary Image (1500px Wide) & Thumbnail (300px Wide)
image:
    - url: "/assets/img/raids/delta_03_s.jpg"
    - urlSmall: "/assets/img/raids/small/delta_03_s.jpg"
#
# Search Terms (Include Nicknames, Name, Bosses, Difficulty)
terms:
    - term: "O3S"
    - term: "V3S"
    - term: "Omega: Deltascape V3.0"
    - term: "Version"
    - term: "Halicarnassus"
    - term: "Savage"
#
# Patch Information (Number & Name)
patchNumber: 4.0
patchName: "Stormblood"
#
# Difficulty (Normal, Hard, Extreme, Savage, Ultimate)
difficulty: "Savage"
#
# Player Level
plvl: 70
#
# Item Level
ilvl: 320
#
# Order (Combine plvl & ilvl - 70310)
order: 70320
#
# Orchestrion Roll
orchestrion: "TBD"
#
# Instance Type
instanceType: "raid"
#
# MTQ Capture Video Link
mtqvid: "https://youtu.be/binii62IQPw"
#
#
#
#
#
#
#
# Paired Attack Tags: Marker
# AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
# Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
# Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
#
bossName: "Halicarnassus"
# Use "reg", "combo", "vari" to tab attack snippets in.
attacks:
  - title: "Critical Hit"
    phases:
      - phase: 01
    roles:
      - role: "Tank"
      - role: "Healer"
    tags:
      - tag: "Tankbuster"
    notes:
      - note: "This is an extremely high damage tankbuster - tankswap if you run out of cooldowns."
  - title: "Spellblade Holy & Pole Shift"
    phases:
      - phase: 01
    # These notes should be used to describe specific steps required to handle the combo as a whole.
    notes:
      - note: "2 Holy Edge players will be tethered together by Pole Shift."
      - note: "The remaining Holy Edge player will be tethered to the Holy Blur player."
      - note: "Pole Shift will cause tethered players to SWAP PLACES."
      - note: "The 2 Holy Edge players should stand apart and away from the boss and main group."
      - note: "The remaining Holy Edge player should stand directly on the boss, while the Holy Blur player should stand away from the group."
      - note: "When Pole Shift goes off, the Holy Blur player will be moved onto the boss while the Holy Edge players will be kept away from the group."
      - note: "Players who are free should stack on the boss to soak the Holy Blur damage."
    combo:
      - title: "Holy Edge"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Puddle AoE"
        notes:
          - note: "Marks 3 players with orange markers and eventually drops circular AoEs on the ground - do not allow these to overlap."
      - title: "Holy Blur"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Stack"
        notes:
          - note: "Marks 1 player with a stack marker - players should aim to stack on the boss to prepare for Pole Shift."
      - title: "Pole Shift"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Tether"
        notes:
          - note: "Tethers 2 Holy Edge players together and 1 Holy Edge and 1 Holy Blur player together."
          - note: "When the cast goes off, players tethered together swap places."
  - title: "The Queen's Waltz"
    phases:
      - phase: 01
    # These notes should be used to describe specific steps required to handle the combo as a whole.
    notes:
      - note: "During the last phase of the fight, the boss will leap to random tiles that will determine which variation of The Queen's Waltz will be executed. Pay close attention to the tile she's standing on to determine the correct course of action."
    variation:
      - title: "The Queen's Waltz (Swords)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Cone AoE"
        notes:
          - note: "The default version (normal tiles) of The Queen's Waltz targets ALL players with thin cone AoEs at once."
          - note: "Assign positions in a star around the boss to avoid overlap of this attack."
          - note: "This version of the attack has no telegraph - players must know their position in advance."
      - title: "The Queen's Waltz (Vines)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Tether"
        notes:
          - note: "All players will be tethered to another player with vines - run away from your partner to break the tether."
          - note: "During the 2nd phase of the fight, only a diagonal row of tiles are safe - be sure to run along these tiles to the corners of the arena."
          - note: "When paired with Mindjack, be sure to point your debuff icon towards the corner you want to run towards."
      - title: "The Queen's Waltz (Spikes)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Area AoE"
        notes:
          - note: "COMING SOON"
      - title: "The Queen's Waltz (Folios)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
          - tag: "Area AoE"
        notes:
          - note: "COMING SOON"
  - title: "Haste"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Buff"
    notes:
      - note: "The boss will buff herself with haste for 6s and often follow up with a variation of Spellblade X."
  - title: "Spellblade X"
    phases:
      - phase: 01
    variation:
      - title: "Spellblade Thunder III"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "Targets 1 player with a long column AoE that will cause Paralysis and Vulnerability Up debuffs."
      - title: "Spellblade Fire III"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Donut AoE"
        notes:
          - note: "A large donut AoE that will cause Fire and Vulnerability Up debuffs."
          - note: "Safe zones are at close melee range and max ranged distance."
      - title: "Spellblade Blizzard III"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Point Blank AoE"
        notes:
          - note: "A point blank AoE with a short telegraph - causes Freezing and Vulnerability Up debuffs."
  - title: "Dimensional Wave"
    phases:
      - phase: 01
    roles:
      - role: "Healer"
    tags:
      - tag: "Raid Wide AoE"
    notes:
      - note: "This attack hits the whole group for high damage - healers beware."
  - title: "The Playing Field"
    phases:
      - phase: 01
    # These notes should be used to describe specific steps required to handle the combo as a whole.
    notes:
      - note: ""
    variation:
      - title: "The Playing Field (I)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "COMING SOON"
      - title: "The Playing Field (II)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "COMING SOON"
  - title: "Oink"
    phases:
      - phase: 01
    roles:
      - role: "Everyone"
    tags:
      - tag: "Marker"
      - tag: "Stack"
      - tag: "Debuff"
    notes:
      - note: "All players will be marked with red triangle markers - stack with at least 1 other player or you will be turned into a pig."
  - title: "Panel Swap"
    phases:
      - phase: 02
    # These notes should be used to describe specific steps required to handle the combo as a whole.
    notes:
      - note: "This attack transforms the arena and indicates the beginning of a new phase."
      - note: "The current type of tiles on the floor affect which variation of The Queen's Waltz Halicarnassus will execute."
    variation:
      - title: "Panel Swap (Briar Tiles)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "COMING SOON"
      - title: "Panel Swap (Cave Tiles)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "COMING SOON"
      - title: "Panel Swap (Book Tiles)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "COMING SOON"
      - title: "Panel Swap (All Tiles)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Mechanic"
        notes:
          - note: "COMING SOON"
  - title: "Place Token"
    phases:
      - phase: 02
    # These notes should be used to describe specific steps required to handle the combo as a whole.
    notes:
      - note: ""
    variation:
      - title: "Place Token (White Flame)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "COMING SOON"
      - title: "Place Token (Great Dragon)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "COMING SOON"
      - title: "Place Token (Apanda)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "COMING SOON"
      - title: "Place Token (Iron Giant & Ninjas)"
        roles:
          - role: "Everyone"
        tags:
          - tag: "Spawn"
        notes:
          - note: "COMING SOON"
  - title: "Mindjack"
    phases:
      - phase: 02
    roles:
      - role: "Everyone"
    tags:
      - tag: "Mechanic"
      - tag: "Debuff"
    notes:
      - note: "This attack gives all players a debuff that will force them to run in the direction indicated by their debuff icon based on the direction they are facing."
      - note: "Often paired with other mechanics, the best way to handle this attack is to face your buff icon on the UI in the direction you want your character to move in."
sequence:
  - phase: 01
    attacks:
      - attack: "Critical Hit"
      - attack: "Spellblade Holy & Pole Shift"
      - attack: "The Queen's Waltz (Swords)"
      - attack: "Haste"
      - attack: "Spellblade X"
      - attack: "Dimensional Wave"
      - attack: "The Playing Field (I) & Oink"
    alerts:
      - alert: ""
    mechanics:
      - title: ""
        notes:
          - note: ""
  - phase: 02
    attacks:
      - attack: "Panel Swap (Briar Tiles)"
      - attack: "The Queen's Waltz (Vines)"
      - attack: "Haste"
      - attack: "Spellblade X (Thunder III)"
      - attack: "Critical Hit"
      - attack: "Dimensional Wave"
      - attack: "Place Token (White Flame)"
      - attack: "Haste"
      - attack: "Spellblade X (Blizzard III)"
      - attack: "Mindjack"
      - attack: "The Queen's Waltz (Vines)"
      - attack: "Spellblade X (Fire III)"
      - attack: "Dimensional Wave"
    alerts:
      - alert: ""
    mechanics:
      - title: ""
        notes:
          - note: ""
  - phase: 03
    attacks:
      - attack: "Panel Swap (Cave Tiles)"
      - attack: "Place Token (Great Dragon)"
      - attack: "The Queen's Waltz (Spikes)"
      - attack: "Ribbit"
      - attack: "Dimensional Wave"
      - attack: "Critical Hit"
      - attack: "Place Dark Token (I)"
      - attack: "Haste"
      - attack: "Spellblade X"
      - attack: "Dimensional Wave"
    alerts:
      - alert: ""
    mechanics:
      - title: ""
        notes:
          - note: ""
  - phase: 04
    attacks:
      - attack: "Panel Swap (Book Tiles)"
      - attack: "The Queen's Waltz (Folios)"
      - attack: "Oink"
      - attack: "Place Token (Apanda)"
      - attack: "The Queen's Waltz (Folios)"
      - attack: "Squelch"
      - attack: "Dimensional Wave"
      - attack: "Critical Hit"
      - attack: "Dimensional Wave"
      - attack: "Spellblade Holy & The Queen's Waltz (Folios)"
      - attack: "Dimensional Wave"
    alerts:
      - alert: ""
    mechanics:
      - title: ""
        notes:
          - note: ""
  - phase: 05
    attacks:
      - attack: "Panel Swap (All Tiles)"
      - attack: "The Playing Field (II) & Ribbit & Oink & Squelch"
      - attack: "The Queen's Waltz (Random)"
      - attack: "Spellblade Holy & Poleshift"
      - attack: "Critical Hit"
      - attack: "Mindjack & Place Dark Token (II)"
      - attack: "The Queen's Waltz (Random)"
      - attack: "Dimensional Wave"
      - attack: "Haste"
      - attack: "Spellblade X x2"
      - attack: "Dimensional Wave"
      - attack: "Place Token (Iron Giant & Ninjas)"
      - attack: "Haste III"
      - attack: "Dimensional Wave x4"
      - attack: "The Queen's Waltz (Random)"
      - attack: "Spellblade X"
      - attack: "Dimensional Wave"
      - attack: "Critical Hit"
      - attack: "The Queen's Waltz (Random)"
      - attack: "Spellblade Holy"
      - attack: "Critical Hit"
      - attack: "Mindjack & Place Dark Token (II)"
      - attack: "The Queen's Waltz (Random)"
      - attack: "Dimensional Wave"
      - attack: "Haste"
      - attack: "Spellblade X x2"
      - attack: "Dimensional Wave"
      - attack: "Enrage"
    alerts:
      - alert: ""
    mechanics:
      - title: ""
        notes:
          - note: ""
---
Halicarnassus

Critical Hit
tankbuster - tankswap if you run out of CDs
very high damage

spellblade holy (holy edge & holy blur) & pole shift
3 holy edge markers
one stack holy blur Marker
2 HE players are tethered, while the remaining is tethered to the holy blur
2 tethered holy edge players move far away from the group
remaining holy edge player stays on boss while holy blur player moves away from group
pole shift swapes all marked players spots with their tether partner
the holy blur player should be moved onto the boss where the remaining unmarked players are already standing to soak the stack damage

the queens waltz (normal floor tiles)
high damage blades at all players
assign positions in a star around the boss to avoid overlapping damage
no telegraph

Haste - 6s haste Buff
typically followed by spellblade variation

Spellblade
spellblade thunder III
column aoe on single player - paralysis and vuln up

spellblade fire III
donut aoe with tight melee safe zone - fire and vuln up

spellblade blizzard III
point blank Circular
freeze and vuln up

dimensional wave
high raid wide AoE

the playing field & the game
normal version
6 role tiles and oink - don't get turned into a pig by stacking together and stand in your role tile



Phase 02

panel swap 01 - Briar & Flower tiles
briar tiles (thorns) are bad (slow and deal damage)

tile diagrams

the queen's waltz (briar tiles)
vine tethers on all players - run away from your tether to break them
if you don't break them fast enough - debuffs or death
tanks and healers will be tethered to DPS - DPS run in one direction, while the tanks and healers run in the Other

spellblade fire III

haste

spellblade thunder III

critical hit

dimensional wave

place token
white flame add
separate the add from the boss as soon as possible
add does pretty heavy damage
casts large point blank aoe that will heal the main boss if she's standing in it

haste

spellblade blizzard III

mindjack
assigns all players a timed buff that will eventually force them to run in the direction of the buff icon - this will be cast alongside the queen's waltz - line your buff icon up with the direction you have to run to break your tether so that you're forced in the proper corner

the queens waltz (briar tiles)

spellblade fire III

dimensional wave



Phase 03

panel swap 02 - cave tiles
blue tiles are safe, black are dangerous

place token
great dragon add
frost breath cleave - OT should face the add away from the group

the queens waltz (cave tiles)
raid wide aoe + black tiles explode
stand on blue tiles to avoid

ribbit
huge frontal cone on random player
turns players into frogs - move behind boss to avoid

dimensional wave

critical hit

place dark token
soul reaper adds that rush across the platform in columns
soul reaper add in the middle with point blank circle
paired with the queen's waltz - renders only 1 blue tile safe from everything - find this tile quickly and sprint there

haste

random spellblade

dimensional wave




Phase 04

panel swap 03 - library phase

8 "book tiles" that can be consumed by players if you stand in them. These provide specific vulnerability down debuffs and will be required during the phase to avoid mechanics - DONT STAND IN THEM UNTIL NECESSARY

the queens waltz (library tiles)
drops folio books down on all players - each book is the size of one tile - each player needs to be in a unique tile of the 8 blank tiles. high damage - healers will have to heal through this

oink

place token
apanda add
OT should pick this up and everyone should burn it down asap
add casts magic hammer - massive circular aoes under ALL players - bait them together

the queen's waltz
this happens at the same time as magic hammer - diagram

squelch
gaze that turns players into a imp

dimensional wave

critical hit

dimensional wave

Spellblade holy
2 holy blurs
4 holy edges
2 unmarked
not enough players to handle everything - use the books.
holy blur and unmarked players grab blue books
holy edge players grab green books
books provide magic/phys up but also stop actions for 8 seconds
queens waltz is happening at the same time
- green players hang out in their unique waltz tiles
- blue and unmarker players have to stand in their own unique waltz tiles BUT have to be close enough together to be considered stacked
BEWARE - healers will be out of actions for some time after the attacks go off - be careful

dimensional wave



Phase 05

Panel Swap 04 - All tiles - diagram

fight boss in center at all times so that you have the most advanced notice for queens waltz

the playing field - 2 frogs, 2 imps, 2 pigs
Ribbit - Oink - Squelch in random order
1 player in each tile or wipe
healers get hit first, tanks second, DPS third to maximize damage
The game
If executed properly, you get instant LB3!

the queen's waltz - type depends on which tile she's standing on

spellblade holy & pole shift

critical hit

mindjack & place dark token
GRDFSHGFHSGHDGHDGH

Queen's Waltz

Dimensional Wave

Haste

Spellblade X

Different Spellblade X

Dimensional Wave

Place Token
1 Iron Giant & 6 Ninja Adds - MT gets the nins, OT gets the giant
Iron Giant cleaves and can try to buff itself with Overheat - silence this
kill adds ASAP with cooldowns and LBs

haste III - longer haste buff

dimensional wave x4

Queen's waltz

spellblade X

Dimensional wave

critical hit

queen's waltz

spellblade holy

critical hit

mindjack + place dark token
FGDFGDFGDFGDF

queens waltz

dimensional wave

haste

spellblade X

spellblade X

dimensional wave

Enrage
