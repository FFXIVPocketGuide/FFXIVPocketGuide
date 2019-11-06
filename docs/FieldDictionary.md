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

Ex. *Normal, Hard, Extreme, Savage, Ultimate*

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

orchestrion | `list` `string`

The name of the orchestrion roll(s) that drop from the duty.

Ex. *Primal Judgement*

## Minion

minion | `list` `string`

The name of the minion(s) that drop from the duty.

Ex. *Forgiven Hate*

## Triple Triad Card

card | `list` `string`

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

bosses | `string`

## 