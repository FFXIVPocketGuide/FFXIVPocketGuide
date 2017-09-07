---
layout: guide_post
title:  "[O2S] Omega: Deltascape V2.0"
date:   2017-04-09 18:00:14 -0300
description: "Read our Guide on the 8 man raid Omega: Deltascape V2.0 (Savage) where you'll face off against Catastrophe."
image:
    - url: "/assets/img/raids/delta_02_s.jpg"
    - urlSmall: "/assets/img/raids/small/delta_02_s.jpg"
patchNumber: 4.0
patchName: "Stormblood"
difficulty: "Savage"
plvl: 70
ilvl: 315
# Order is a direct combination of plvl+ilvl (e.g. 23+000 = 23000, 70+310 = 70310).
order: 70315
instanceType: "raid"
mtqvid: "https://youtu.be/X6--0cKBkVs"
#
# Paired Attack Tags: Marker
# AoE Attack Tags: Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE
# Other Attack Tags: Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun
# Unique Attack Tags: Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver
#
bossName: "Catastrophe"
# Use "reg", "combo", "vari" to tab attack snippets in.
attacks:
  - title: "Antilight"
    phases:
      - phase: 01
    # These notes should be used to describe specific steps required to handle the combo as a whole.
    notes:
      - note: ""
    variation:
      - title: ""
        roles:
          - role: ""
        dutyActions:
          - action: ""
        tags:
          - tag: ""
        notes:
          - note: ""
sequence:
  - phase: 01
    attacks:
      - attack: "Tremblor x2"
        dutyActions: true
      - attack: "Earthquake"
        dutyActions: true
      - attack: 100Gs
      - attack: "Antilight 01"
        dutyActions: true
      - attack: "Gravitational Wave"
      - attack: "Gravitational Manipulation"
        dutyActions: true
      - attack: "Aetherial Rift"
        dutyActions: true
      - attack: "Paranormal Wave x2"
      - attack: "Evilsphere"
      - attack: "Paranormal Wave"
    alerts:
      - alert: ""
    mechanics:
      - title: ""
        notes:
          - note: ""
  - phase: 02
    attacks:
      - attack: "Maniacal Probe (Tanks & Healers) & Death's Gaze & Epicenter"
      - attack: "Gravitational Wave"
      - attack: "Main Quake"
      - attack: "Gravitational Wave"
      - attack: "Paranormal Wave"
      - attack: "Gravitational Manipulation"
        dutyActions: true
      - attack: "Paranormal Wave"
      - attack: "Evilsphere"
      - attack: "Paranormal Wave"
      - attack: "-100Gs & Death's Gaze"
      - attack: "100Gs"
      - attack: "Antilight 02"
      - attack: "Unstable Gravity (Tanks & Healers) & Long Drop"
        dutyActions: true
      - attack: "100Gs"
      - attack: "Antilight 03"
        dutyActions: true
      - attack: "Tremblor x2"
        dutyActions: true
      - attack: "Earthquake"
        dutyActions: true
      - attack: "100Gs"
    alerts:
      - alert: ""
    mechanics:
      - title: ""
        notes:
          - note: ""
  - phase: 03
    attacks:
      - attack: "Maniacal Probe (DPS) & Death's Gaze & Epicenter"
    alerts:
      - alert: ""
    mechanics:
      - title: ""
        notes:
          - note: ""
  - phase: 04
    attacks:
      - attack: "Maniacal Probe & Death's Gaze & Epicenter"
    alerts:
      - alert: ""
    mechanics:
      - title: ""
        notes:
          - note: ""
---
Catastrophe

levitate right away to avoid tremblors and earthquake

main tank and one other player are affected by blue gravity markers
returns the players standing near them to the ground

raid should stack together begind boss for whole fight

no raid wide 100gs to bring everyone back down

antilight 01 = both white and black and the only safe zone is on the floor in the middle of the arena
petrification, vuln up debuffs and death

gravitational wave
high raid wide AoE

gravitational manipulation
two stack markers on a healer and DPS
one is levitated automatically
each stack marker MUST be shared by 4 players
have all DPS levitate and stack while everyone else stays on the floor and stacks
if missed aoe gives vuln up debuffs

aetherial rift = everyone needs to levitate

paranormal wave
high damage cleave and petrification debuff
tank must face boss away from group
tankswap necessary at 2 stacks - 3 stacks kills you

paranormal wave again

evilsphere
Tankbuster
heavy damage

paranormal wave again





maniacal probe
both tanks and both healers with tentacle markers
each player should move to an assigned spot on the cardinal points to drop their tentacle

death's gaze
turn away = petrification + Debuff

epicenter activates the tentacles

gravitational wave

tentacles activate and the safe one can be determined - everyone should sprint here so that they can take advantage of the blue gravity markers to bring the whole group back to the floor

other 3 tentacles then explode for main quake - aoes

gravitational wave > paranormal wave > gravitational manip > paranormal wave > evilsphere > paranormal wave

-100gs - safe zones in the north and south but this time veryone has aoe markers - spread out in the safe zones to avoid hitting others

avoid death's gaze

everyone should use the gravity markers to return to the ground

antilight 02 - safe zone in the center, but on either the ground OR levitating

tanks and healers are affected by unstable gravity - MASSIVE AoE
These cannot overlap or you'll die

to handle this, tanks and healers should levitate during antilight

long drop stack marker

tanks and healers who are levitating should stand on the "arrows" of the stack marker as long drop will send them flying away from the center. Use this to quickly spread the unstable gravity aoes by getting knocked to your assigned cardinal Point

gravity markers

antilight 03 - white orbs in the air, everyone is on the ground so gg

earthquake - wait for orbs to explode and levitate

gravity markers again






maniacal probe - targets DPS this time, everyone run to cardinal point to drop tentacles

death's gaze

epicenter

move to safe tentacle and deal with gravitational manipulation

antilight 04 - center safe zone

gravity markers

unstable gravity on DPS

stack for long drop, get knocked away to your cardinal point, explode

paranormal wave x2

evilsphere

paranormal wave

antilight 05 - white orbs and gravity markers - stack together to bring everyone down to the floor







maniacal probe on tanks and healers against

death's gaze

grav manip and stack on safe tentacle

antilight 06 - safe zone in center with tanks and healers targeted for unstable gravity - everyone stack, unstable gravity people float, long drop knocks them away

levitate for aetherial rift and turn away from death's gaze

grav wave > para wave

antilight 07 - white orbs and gravity markers - stack and hit the floor

para wave happens during this, to tanks keep the boss facing away

evilsphere, para wave, grav manip, aetherial rift

antilight 08 - white orbs and grav markers - stack and hit the floor

levitate to avoid earthquake
