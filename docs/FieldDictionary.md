# Field Dictionary

## Title

title | `string`

The name of the Duty. Should match what's in Duty Finder.

Ex. *Brayflox's Longstop*

## Slug

slug | `string`

The name of the Duty simplified. Spaces as dases and lower case.

Ex. *brayfloxs-longstop*

## Layout

layout | `hidden` `string`

.

Ex. 

## Date

date | `date` `hidden`

Date of when guide was created. Year-Month-Day

Ex. *2018-02-05*

## Categories

categories | `select`

The expansion of the duty is from. Lowercase simplified.

Ex. *arr, hw, shb, sb*

## Descritpion

description | `text`

Guide's description with name of duty and names of bosses within.

Ex. *Read our Guide on the 8 man raid Omega: Deltascape V2.0 (Normal) where you'll face off against Catastrophe.*

## Image

image | `image / file`
    url 
    urlSmall

Primary image (1500px Wide) and Thumbnail (500px Wide).

Ex. url */assets/img/raids/delta_02.jpg*
    urlSmall */assets/img/raids/small/delta_02.jpg*

## Terms

terms | `list` `string`

Search Terms (Include Nicknames, Name, Bosses, and Difficulty)

Ex. *Stormblood, SB, The Sirensong Sea, Lugat, The Governor, Lorelei, Normal*

## PatchNumber

patchNumber | `number`

Patch number.

Ex. *4.0*

## PatchName

patchName | `string`

The name of the patch that it's from.

Ex. *Stormblood, Dreams of Ice*

## Difficulty

difficulty | `select`

The difficulty of the duty.

Options:
* Normal
* Hard
* Extreme
* Savage
* Ultimate

## Player Level

plvl | `number`

Player level of the duty.

Ex. *61*

## Item Level

ilvl | `number`

Item level of the duty.

Ex. *435*

## Order

order | `number`

The combination of the player level and item level of the duty.

Ex. *61435*

## Orchestrion

orchestrion | `list` `string` | `optional`

The name of the orchestrion roll(s) that drop from the duty.

Ex. *Primal Judgement*

## Minion

minion | `list` `string` | `optional`

The name of the minion(s) that drop from the duty.

Ex. *Forgiven Hate*

## Triple Triad Card

card | `list` `string` | `optional`

The name of the card(s) that drop from the duty.

Ex. *Seeker of Solitude Card*

## Instance Type

instanceType | `select`

The type of duty.

Ex. *trial, dungeon, raid*

## MTQ Capture Video

mtqvid | `string` `custom`

Link connected to the MTQ youtube guide of duty.

Ex. *https://youtu.be/tT3-1Yb787w*

## Bosses

bosses | `string` `list`

Name of Boss(s).

Ex. *Otake-maru*

## Sequence

sequence | `string` `list`

Organization between phases.

Ex. *Phase #*

## Phases

phase | `list`

The phase name.

Ex. *Phase 1*

## Alert

alert | `text` `list`

Notes of the different phases.

Ex. *If the boss raises his arm, run out of melee range.*

## Mechanics

mechanics | `string` `list`

Main mechanics during the duty.

Ex. *Early in the dungeon, players will encounter wall type enemies - allow the tank some time to grab these as they must be picked up individually.*

## Notes

note | `text` `list`

Notes of specific attacks or mechanics.

Ex. *Throughout the fight, circular AoEs will appear at random, dropping boulders from the ceiling - avoid as necessary.*

## Attack Script

attack | `string` `list`

Sequence of attacks that boss uses.

Ex.
* Dreaming Kshatriya
* Stotram
* Hand of Grace
* The Pull of Light
* Stotram
* The Pull of Light
* The Path of Light
* Alluring Arm
* The Pull of Light
* Stotram
* The Pall of Light
* The Pull of Light

## Attacks

attacks | `string` `list`

Name of the different attacks the bosses do.

Ex. *100-tonze Swing*

## Roles

roles | `select`

Which role the attack is directed to.

Options:
* Tank
* Healer
* Melee DPS
* Ranged DPS
* Everyone

## Tags

tags | `select`

Which kind/type of attack is being used.

Ex. *Cone AoE, Circular AoE, Puddle AoE, Donut AoE, Column AoE, Area AoE, Point Blank AoE, Raid Wide AoE, Proximity AoE, Cross AoE, Figure 8 AoE, Knockback, Cleave, Buff, Debuff, Tankbuster, Stack, Spread, Tether, Stun, Mechanic, Animation, Spawn, Ultimate, Active Time Maneuver, Marker.*


