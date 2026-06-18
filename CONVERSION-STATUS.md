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
| Orks | Orks — **v2** (V2 expands Kommandos + Tankbustas/Wreckas) | v0.2.0 (from v1) | ✅ v0.2.0 done (41 threats + 34 items); 🔧 **updating to source v2** (delta-only: new Kommandos + expanded Tankbustas/Wreckas) on branch `feat/orks-v2-update` |
| Tyranids | The Tyranids — **v1** | v0.4.0 | ✅ done — 28 threats + 39 items (13 Hive-Mind powers, 19 Bio-Weapons, 7 Hive Fleet adaptations) |
| Necrons | The Necrons — **v2** (25/2/2021) | v0.3.0 | ✅ done — 39 actors (36 threats + 3 vehicles) + 38 items (Adversary Traits, Cryptek Arcana, Relics of the Aeons) |
| Daemonic Legions | Daemonic Legions — **v1** (30/01/2023) | — | 🔧 in progress (branch `feat/daemonic-legions`, targets v0.8.0) |
| Heretic Astartes | Heretic Astartes — **v1** | — | ⬜ to do |
| Asuryani (Aeldari) | The Asuryani — **v2** | v0.7.0 | ✅ done — 45 actors (41 threats + 4 vehicles) + 33 items (5 Craftworld adaptations, 12 Adversary Traits, 16 Remnants of Glory) |
| Drukhari | The Drukhari — **v3** (24/11/2024) | v0.5.0 (earlier rev) | ✅ v0.5.0 done (29 threats + 50 items); 🔧 **v3 delta to apply** (Hand of the Archon + Mandrake threats, modified Power Through Pain) — diff against shipped content |
| T'au Empire | The T'au Empire — **v1** | v0.6.0 | ✅ done — 59 actors (52 threats + 7 vehicles) + 50 items (Sept adaptations, Support Systems, Adversary Traits, Prototype & Signature Systems) |
| Malicious Miscellany | Malicious Miscellany — **v1** | — | ⬜ to do |
| Astra Militarum | The Astra Militarum — **v1** (1/12/2024) | — | ⬜ to do — new faction (89pp, ~78 stat blocks) |
| Adeptus Astartes | The Adeptus Astartes — **v0 wip** | — | ⏸️ deferred — draft/incomplete (178pp, "First Complete Version: #"); convert once a complete version drops. Loyalist Space Marines (≠ Heretic Astartes) |

## Plan

1. Scaffold the module + build pipeline. ✅
2. For each faction PDF: extract the threat stat blocks and author `threat`
   Actors (attributes, traits, weapons, abilities), filed in a per-faction
   folder, then `npm run pack`.
3. Verify in Foundry; release.
