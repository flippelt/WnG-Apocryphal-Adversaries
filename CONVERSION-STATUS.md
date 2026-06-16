# Conversion status — *An Abundance of Apocryphal Adversaries* → Foundry VTT

Tracks conversion of the threat (NPC) stat blocks from Nathan Dowdell's
bestiary series into the `apocryphal-adversaries-threats` compendium.

Threats are W&G **Actors** of type `threat` (attributes, traits, weapons,
abilities, wounds/resilience/defence). Converted faction by faction.

## Source PDFs (9)

> **Source versions matter.** The *Source version* column records the exact PDF
> revision each faction was converted from. Nathan revises these supplements
> over time — when a newer revision drops, diff it against the recorded version
> to scope the update. Always update this column (and `Converted at` module
> version) when (re)converting a faction.

| Faction | Source version | Converted at | Status |
| --- | --- | --- | --- |
| Orks | An Abundance of Apocryphal Adversaries: Orks — **v1** (10/9/2022) | v0.2.0 | ✅ done — 41 threats + 34 items (Adversary Traits + Shiny Gubbinz) |
| Tyranids | The Tyranids — **v1** | v0.4.0 | ✅ done — 28 threats + 39 items (13 Hive-Mind powers, 19 Bio-Weapons, 7 Hive Fleet adaptations) |
| Necrons | The Necrons — **v2** (25/2/2021) | v0.3.0 | ✅ done — 39 actors (36 threats + 3 vehicles) + 38 items (Adversary Traits, Cryptek Arcana, Relics of the Aeons) |
| Daemonic Legions | Daemonic Legions — **v1** | — | ⬜ to do |
| Heretic Astartes | Heretic Astartes — **v1** | — | ⬜ to do |
| Asuryani (Aeldari) | The Asuryani — **v2** | — | ⬜ to do |
| Drukhari | The Drukhari — **v1** | — | ⬜ to do |
| T'au Empire | The T'au Empire — **v1** | — | ⬜ to do |
| Malicious Miscellany | Malicious Miscellany — **v1** | — | ⬜ to do |

## Plan

1. Scaffold the module + build pipeline. ✅
2. For each faction PDF: extract the threat stat blocks and author `threat`
   Actors (attributes, traits, weapons, abilities), filed in a per-faction
   folder, then `npm run pack`.
3. Verify in Foundry; release.
