---
layout: guide_post
title:  "Ala Mhigo"
date:   2017-04-09 18:00:14 -0300
image:
    - url: "/assets/img/dungeons/ala_mhigo.jpg"
    - urlSmall: "/assets/img/dungeons/small/ala_mhigo.jpg"
patchNumber: 4.0
patchName: "Stormblood"
difficulty: "Normal"
plvl: 70
ilvl: 0
order: 70000
instanceType: "dungeon"
mtqvid: "https://youtu.be/I1Le_MATl5k"
bosses:
  - title: "Magitek Scorpion"
    id: "boss01"
    attacks:
      - title: "Electromagnetic Field"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack will hit the whole group for moderate damage - healers keep an eye out."
      - title: "Target Search"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Puddle AoE"
        notes:
          - note: "Players will be marked with AoE circles that will follow them around - wait for the AoE circle to 'Lock On' by turning dark red and then move out to safety."
      - title: "Tail Laser"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This attack will hit in a column pattern that will split the arena in two for a period of time."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Electromagnetic Field"
          - attack: "Target Search"
          - attack: "Tail Laser]"
          - attack: "[Repeat]"
        alerts:
          - alert: "The boss' attacks will overlap with increased difficulty as the fight progresses - be sure to avoid puddles splashed around the arena."
  - title: "Aulus Mal Asina"
    id: "boss02"
    attacks:
      - title: "Mana Burst"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack will hit the group for moderate damage."
      - title: "Orders to Charge & Orders to Fire"
        phases:
          - phase: 01
        combo:
          - title: "Orders to Charge"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Spawn"
            notes:
              - note: "Orders to Charge will summon multiple Magitek Bits around the arena that cannot be targeted."
          - title: "Orders to Fire"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Circular AoE"
              - tag: "Donut AoE"
            notes:
              - note: "The Magitek Bits will then attack in various AoE patterns - dodge as necessary."
      - title: "Magitek Disruptor & Mindjack"
        phases:
          - phase: 01
        combo:
          - title: "Magitek Disruptor"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Stun"
            notes:
              - note: "This attack will stun all players and then pull them in towards the boss."
          - title: "Mindjack"
            roles:
              - role: "Everyone"
            tags:
              - tag: "Mechanic"
            notes:
              - note: "This attack knocks all players out of their bodies, preventing them from attacking."
              - note: "Players must make their way back to their bodies while avoiding column AoE attacks and Deathclaw adds who will grab and stun you."
              - note: "Once players reach their bodies they can begin killing the adds to help remaining players get back."
      - title: "Demimagicks"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Marker"
          - tag: "Puddle AoE"
        notes:
          - note: "Players will be marked with orange markers and puddle AoEs will drop where they stand - be sure to avoid other players."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Mana Burst"
          - attack: "Orders to Charge & Orders to Fire"
          - attack: "Magitek Disruptor & Mindjack"
          - attack: "Demimagicks]"
          - attack: "[Repeat]"
        alerts:
          - alert: "Players should watch out for a combination of Orders to Charge & Orders to Fire and Demimagicks as it results in quite a few AoEs to dance around."
        mechanics:
          - title: "Mindjack"
            notes:
              - note: "Players will be knocked out of their bodies, preventing attacks."
              - note: "You'll have to dodge column AoEs and Deathclaw adds while you make your way back to your body before you can continue damaging the boss."
  - title: "Zenos Yae Galvus"
    id: "boss03"
    attacks:
      - title: "Art of the Storm"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Melee DPS"
        tags:
          - tag: "Circular AoE"
        notes:
          - note: "This attack damages and paralyzes players in melee range - stand away from the boss to avoid it."
      - title: "Art of the Swell"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
          - tag: "Knockback"
        notes:
          - note: "The boss will hit the group with raid wide damage and a knockback that can knock players into the outer edge."
          - note: "Players should move into melee range of the boss during this cast to remain safe."
      - title: "Unmoving Troika"
        phases:
          - phase: 01
        roles:
          - role: "Tank"
          - role: "Healer"
        tags:
          - tag: "Tankbuster"
        notes:
          - note: "This attack will hit the tank multiple times - heal and cooldown as necessary."
      - title: "Art of the Sword"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Column AoE"
        notes:
          - note: "This attack hits all players with a column AoE starting from the boss - players should spread out to avoid overlap."
      - title: "Veinsplitter"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Circular AoE"
          - tag: "Mechanic"
        notes:
          - note: "This attack is telegraphed with a large circular AoE."
          - note: "Clones summoned by Zenos can also cast this attack, covering a large portion of the arena."
      - title: "Lightless Spark"
        phases:
          - phase: 01
        roles:
          - role: "Everyone"
        tags:
          - tag: "Tether"
          - tag: "Cone AoE"
        notes:
          - note: "A single player will be targeted with a tether and then subsequently be hit with a large cone AoE - this player should bait the attack away from the rest of the group, ideally towards the edge closest to the boss."
      - title: "Concentrativity"
        phases:
          - phase: 01
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This attack hits all players for moderate to high damage - healers keep an eye out."
      - title: "Storm, Swell, Sword"
        phases:
          - phase: 02
        roles:
          - role: "Healer"
        tags:
          - tag: "Raid Wide AoE"
        notes:
          - note: "This raid wide AoE's power is determined by how high the duty gauge has filled."
    sequence:
      - phase: 01
        attacks:
          - attack: "[Art of the Storm"
          - attack: "Art of the Swell"
          - attack: "Unmoving Troika"
          - attack: "Art of the Sword"
          - attack: "Veinsplitter"
          - attack: "Lightless Spark"
          - attack: "Concentrativity]"
          - attack: "[Repeat]"
        alerts:
          - alert: "The outer edge of the arena is covered in an AoE that will give players Damage Down and Bleed debuffs - avoid standing in this."
          - alert: "The first phase of this fight does relatively high damage with multiple raid wide hits - healers beware."
          - alert: "Melee DPS should look out for Art of the Storm and move away from the boss when possible."
          - alert: "Players tethered to the boss should try to bait the cone AoE that will target them away from the rest of the group."
      - phase: 02
        attacks:
          - attack: "Add Phase"
          - attack: "Storm, Swell, Sword"
          - attack: "[Concentrativity]"
          - attack: "[Repeat]"
        alerts:
          - alert: "The boss will throw his swords around the arena and begin to fill the duty gauge."
          - alert: "Once he has hit the group with Storm, Swell, Sword, the boss will chain cast Concentrativity until he's killed."
        mechanics:
          - title: "Duty Gauge: Aether Transfer"
            notes:
              - note: "When the boss' swords spawn as adds, ALL players should focus them down as soon as possible."
              - note: "The longer these adds are alive, the higher the duty gauge will fill and the stronger Storm, Swell, Sword will be."
---
