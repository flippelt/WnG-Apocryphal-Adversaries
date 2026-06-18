# Conversion status — *An Abundance of Apocryphal Adversaries* → Foundry VTT

Tracks conversion of the threat (NPC) stat blocks from Nathan Dowdell's
bestiary series into the `apocryphal-adversaries-threats` compendium.

Threats are W&G **Actors** of type `threat` (attributes, traits, weapons,
abilities, wounds/resilience/defence). Converted faction by faction.

## Source PDFs (11)

> **Source versions matter.** The *Source version* column records the exact PDF
> revision each faction was converted from. Nathan revises these supplements
> over time — when a newer revision drops, diff it against the recorded version
> to scope the update. Always update this column (and `Converted at` module
> version) when (re)converting a faction.

| Faction | Source version | Converted at | Status |
| --- | --- | --- | --- |
| Orks | Orks — **v2** (10/9/2022; V2 expands Kommandos + Tankbustas/Wreckas) | v0.7.1 (from v2) | ✅ done — 55 threats + 34 items. v0.7.1 added the v2 delta: 9 Kommando specialists + base Kommando reworked, and the Wrecka Krews (Tankbusta Gunner/Rokkiteer, Wrecka Boss Nob, Breaka Boy Demolisha/Fighter/Krusha); old standalone Tankbusta superseded by Tankbusta Gunner |
| Tyranids | The Tyranids — **v1** | v0.4.0 | ✅ done — 28 threats + 39 items (13 Hive-Mind powers, 19 Bio-Weapons, 7 Hive Fleet adaptations) |
| Necrons | The Necrons — **v2** (25/2/2021) | v0.3.0 | ✅ done — 39 actors (36 threats + 3 vehicles) + 38 items (Adversary Traits, Cryptek Arcana, Relics of the Aeons) |
| Daemonic Legions | Daemonic Legions — **v1** (30/01/2023) | v0.8.0 | ✅ done — 52 actors (47 threats + 5 vehicles) + 86 items (4 psychic disciplines: Warprot/Soulstain/Pandaemoniac/Noctic; per-god Adversary Traits, Exalted Greater Daemons & Relics; Disciples of Be'Lakor) |
| Heretic Astartes | Heretic Astartes — **v1.1** (1/6/2024) | v0.9.1 (base) | 🔧 in progress — base legion done (71 actors + 52 items, v0.9.1). Split per legion: base → v0.9.1, **Death Guard → v0.9.4** (17 actors + 40 items); remaining Emperor's Children → v0.9.6, Thousand Sons → v0.9.8, World Eaters → **v1.0.0** (= final legion + all factions complete) |
| Asuryani (Aeldari) | The Asuryani — **v2** | v0.7.0 | ✅ done — 45 actors (41 threats + 4 vehicles) + 33 items (5 Craftworld adaptations, 12 Adversary Traits, 16 Remnants of Glory) |
| Drukhari | The Drukhari — **v3** (24/11/2024) | v0.7.2 (from v3) | ✅ done — 54 actors (51 threats + 3 vehicles) + 50 items. v0.7.2 brought full v3 parity: Power Through Pain reworked to Pain Tokens (24 actors), Poisonous→Fleshbane sweep, + Hand of the Archon (8), Reaver, Mandrake variants (5), 8 named lords, 3 vehicles (Razorwing Jetfighter, Voidraven Bomber, Dias of Destruction) |
| T'au Empire | The T'au Empire — **v1** | v0.6.0 | ✅ done — 59 actors (52 threats + 7 vehicles) + 50 items (Sept adaptations, Support Systems, Adversary Traits, Prototype & Signature Systems) |
| Malicious Miscellany | Malicious Miscellany — **v1** | v0.9.0 | ✅ done — 63 actors (grab-bag of unrelated groups: Slaugth, Hrud Skavengers, Seraphon, and a big Agents of the Imperium block — Custodes, Sisters of Silence, Arbites, Inquisition, Astropath, Navis, Assassins) + 27 items (4 psychic disciplines: Warpvolt, Ruin, Celestial, Telethesia) in 4 group folders |
| Astra Militarum | The Astra Militarum — **v1** (1/12/2024) | v0.8.5 | ✅ done — 88 actors (85 threats + 3 vehicles) + 42 items (Psykana discipline, Hymns of Battle, Adversary Traits, Heirlooms of Conquest) |
| Adeptus Astartes | The Adeptus Astartes — **v0 wip** | — | ⏸️ deferred — draft/incomplete (178pp, "First Complete Version: #"); convert once a complete version drops. Loyalist Space Marines (≠ Heretic Astartes) |

## Plan

1. Scaffold the module + build pipeline. ✅
2. For each faction PDF: extract the threat stat blocks and author `threat`
   Actors (attributes, traits, weapons, abilities), filed in a per-faction
   folder, then `npm run pack`.
3. Verify in Foundry; release.
