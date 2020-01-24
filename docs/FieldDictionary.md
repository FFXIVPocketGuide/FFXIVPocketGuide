# Field Dictionary
This page provides reference for the fields used to create a Guide on the site.

## Summary Information
The following fields provide basic information about the duty.

### Title

title | `string`

The name of the Duty. Should match what's in Duty Finder.

Ex. *Brayflox's Longstop*

### Slug

slug | `string`

Simplified name of the duty for use in the URL and file name. Use hyphens for spaces and lower case, only characters.

Ex. *brayfloxs-longstop*

### Expansion

categories | `select`

The expansion to which the duty belongs. Used by front-end for categorizing the Guide.

<details>
<summary>Options</summary>

* Shadowbringers (`shb`)
* Stormblood (`sb`)
* Heavensward (`hw`)
* A Realm Reborn (`arr`)

(Values to store in data indicated in parentheses.)

</details>

### Description

description | `text`

Guide's description with name of duty and names of bosses within.

Ex. *Read our Guide on the 8 man raid Omega: Deltascape V2.0 (Normal) where you'll face off against Catastrophe.*

### Image

image | `image`

Upload an image representing the duty. Provide two images, a Primary image (1500px Wide) and Thumbnail (500px Wide).

Ex. of File Path
   * url */assets/img/raids/delta_02.jpg*
   * urlSmall */assets/img/raids/small/delta_02.jpg*

### Terms

terms | `list` `string`

Search Terms (Include Nicknames, Name, Bosses, and Difficulty)

Ex. *Stormblood, SB, The Sirensong Sea, Lugat, The Governor, Lorelei, Normal*

### PatchNumber

patchNumber | `number`

Patch number.

Ex. *4.0*

### PatchName

patchName | `string`

The name of the patch that it's from.

Ex. *Stormblood, Dreams of Ice*

### Difficulty

difficulty | `select`

The difficulty of the duty.

<details>
<summary>Options</summary>

* Normal
* Hard
* Extreme
* Savage
* Ultimate

</details>

### Player Level

plvl | `number`

Player level of the duty.

Ex. *61*

### Item Level

ilvl | `number`

Minimum item level of the duty.

Ex. *435*

### Orchestrion

orchestrion | `list` `string` | `optional`

The name of the orchestrion roll(s) that drop from the duty.

Ex. *Primal Judgement*

### Minion

minion | `list` `string` | `optional`

The name of the minion(s) that drop from the duty.

Ex. *Forgiven Hate*

### Triple Triad Card

card | `list` `string` | `optional`

The name of the card(s) that drop from the duty.

Ex. *Seeker of Solitude Card*

### Instance Type

instanceType | `select`

The type of duty.

Ex. *trial, dungeon, raid*

### MTQ Capture Video

mtqvid | `string` `custom`

Link connected to the MTQ youtube guide of duty.

Ex. *https://youtu.be/tT3-1Yb787w*

<details>
<summary>Hidden Fields (Site Administration Only)</summary>

### Date

date | `date` `hidden`

Date of when guide was created. 

Supported Value: `Year-Month-Day`

Ex. *2018-02-05*

### Order

order | `number` `hidden`

The combination of the player level and item level of the duty.

Supported Value: `{{plvl}}{{ilvl}}`

Ex. *61435*

### Layout

layout | `hidden` `string`

Supported Value:  `guide_post`

Controls which front-end template is used to render the Guide content.

</details>

## Bosses & Related Fields
Each Boss added to a Guide uses the following fields. Sections allowing multiple items within a list, which have their own set of fields are separated by dividers.

bosses | `list` of `object`


### Boss Name

title | `string`

Name of Boss(s).

Ex. *Otake-maru*

***

### Phases

sequence | `list` of `object` 

List of Phases within the boss. For bosses without phases, add all information under "Phase 1".

Ex. *Phase #*

### Phase Number

phase | `number`

The number of the phase.

Ex. *01*

### Alert

alerts | `list` of `string`

Notes about the phase.

Ex. *If the boss raises his arm, run out of melee range.*

### Mechanics

mechanics | `list` of `text`

Main mechanics during that phase.

### Mechanic Title

mechanics | `string`

Title of the mechanic.

Ex. *Duty Gauge: Mateus' Aether*

### Notes

notes | `list` of `text`

Notes of specific attacks or mechanics.

Ex. *Throughout the fight, circular AoEs will appear at random, dropping boulders from the ceiling - avoid as necessary.*

### Attack Sequence

attacks | `list` of `string`

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

***

## Boss Attacks
Each boss's attack will use the following fields.

attacks | `list` of `object` (Will be at the same hierarchy of Phases, not to be confused with the Attack Sequence defined within each phase.)

### Attack Name

title | `string`

Name of the attack.

Ex. *100-tonze Swing*

### Related Phases

phases | `list` of `number`

The first Phase the attack appears in.

Ex. *02*

### Roles

roles | `select` `multiple`

Which role the attack is directed to.

<details>
<summary>Options</summary>

* Tank
* Healer
* Melee DPS
* Ranged DPS
* Everyone

</details>

### Tags

tags | `select` `multiple`

Which kind/type of attack is being used.

<details>
<summary>Options</summary>

* Cone AoE
* Circular AoE
* Puddle AoE
* Donut AoE
* Column AoE
* Area AoE
* Point Blank AoE
* Raid Wide AoE
* Proximity AoE
* Cross AoE
* Figure 8 AoE
* Knockback
* Cleave
* Buff
* Debuff
* Tankbuster
* Stack
* Spread
* Tether
* Stun
* Mechanic
* Animation
* Spawn
* Ultimate
* Active Time Maneuver
* Marker

</details>

### Duty Actions

dutyActions | `list` of `string`

Ex. *Vril*

### Notes

notes | `list` of `text`

Notes about the attack.

Ex. *Throughout the fight, circular AoEs will appear at random, dropping boulders from the ceiling - avoid as necessary.*