# An Abundance of Apocryphal Adversaries for Foundry VTT

[![Release](https://img.shields.io/github/v/release/flippelt/WnG-Apocryphal-Adversaries)](https://github.com/flippelt/WnG-Apocryphal-Adversaries/releases) ![Foundry](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fflippelt%2FWnG-Apocryphal-Adversaries%2Fmain%2Fmodule.json&query=%24.compatibility.verified&prefix=v&label=Foundry&color=fe6a1f) [![CI](https://img.shields.io/github/actions/workflow/status/flippelt/WnG-Apocryphal-Adversaries/ci.yml?label=CI)](https://github.com/flippelt/WnG-Apocryphal-Adversaries/actions/workflows/ci.yml) [![Last commit](https://img.shields.io/github/last-commit/flippelt/WnG-Apocryphal-Adversaries)](https://github.com/flippelt/WnG-Apocryphal-Adversaries/commits) [![License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/flippelt/WnG-Apocryphal-Adversaries/blob/main/LICENSE)

A bestiary module for **Wrath & Glory** (Cubicle 7) on Foundry VTT. It converts
the threats from Nathan Dowdell's *An Abundance of Apocryphal Adversaries* — the
bestiary companion to *An Abundance of Apocrypha* — **with his permission**.

Drop ready-to-play enemies onto the map: infantry, walkers, grav-tanks, psykers,
C'tan, daemon primarchs and named warlords, each with weapons, talents, abilities
and threat-tier options.

**Ten factions, complete.** 594 actors and 580 items in two compendia. The only
outstanding supplement is the work-in-progress Adeptus Astartes, which will be
added once Nathan finalises it.

> Compatible with Foundry VTT **v11–v14**, verified on **v14**. Module id:
> `wng-apocryphal-adversaries`.
>
> Wrath & Glory **8.0.0+ is Foundry v14 exclusive**, so a current system install
> is on v14. Older Foundry generations still work with correspondingly older
> system releases.
>
> Companion to
> [An Abundance of Apocrypha](https://github.com/flippelt/WnG-Apocrypha-FoundryVTT)
> (archetypes, talents, wargear).

## Install

This module is **not yet listed** in the Foundry package browser. Install it
from the manifest:

1. In Foundry, open **Add-on Modules** → **Install Module**.
2. Paste this **Manifest URL**:

```
https://github.com/flippelt/WnG-Apocryphal-Adversaries/releases/latest/download/module.json
```

3. Install, then enable **Wrath & Glory - An Abundance of Apocryphal Adversaries**
   in the world.
4. Open the **Apocryphal Adversaries** folder in the compendium directory and
   drag threats onto the canvas.

Requires the [Wrath & Glory](https://github.com/moo-man/WrathAndGlory-FoundryVTT)
system (`wrath-and-glory`, 4.0.1+, verified on 8.1.2).

Most entries are `threat` actors. Grav-tanks, aircraft and war machines that
the source prints as vehicles are `vehicle` actors. Adversary traits, relics and
psychic disciplines live in the items pack — drop them onto an NPC or keep them
as reference.

## Recommended companions

These are listed as `recommends` in `module.json`, so this module **installs and
runs without them**. Without them, some icons, tokens and linked powers break:

| Module | What it supplies | Without it |
| --- | --- | --- |
| **`wng-core`** | Item icons and the **Smite** psychic power | Missing icons; Smite shows as unlinked |
| **`wng-apocrypha`** | Ork **WAAAGH!** and Aeldari **Runes** psychic powers | Those linked powers show as unlinked |
| **`wng-xenos`** | Necron, T'au and Aeldari tokens | Those threats fall back to a default token |
| **`wng-cos`** (Church of Steel) | Vehicles ridden by some mounted Ork bosses | Those mounts are missing |

Install them for the full, linked experience.

## Contents

| Faction | Actors | Items | Highlights |
| --- | ---: | ---: | --- |
| Orks | 55 | 34 | Boyz through Ghazghkull; Kommandos and Wrecka Krews; Shiny Gubbinz |
| Necrons | 39 | 38 | C'tan Shards; Annihilation Barge, Night Scythe, Monolith |
| Tyranids | 28 | 39 | Synapse psykers; Powers of the Hive Mind; bio-weapons |
| Drukhari | 54 | 50 | Kabals, Wych Cults, Covens, Mandrakes; Pain Tokens |
| T'au Empire | 59 | 50 | Battlesuits, drones, Kroot and Vespid; grav-tanks |
| Asuryani | 45 | 33 | Aspect shrines, Phoenix Lords, Engines of Vaul |
| Daemonic Legions | 52 | 86 | Four gods and Be'Lakor; four psychic disciplines |
| Astra Militarum | 88 | 42 | Cadia, Catachan, Krieg; Tempestus; named heroes |
| Malicious Miscellany | 63 | 27 | Slaugth, Hrud, Seraphon, Agents of the Imperium |
| Heretic Astartes | 111 | 181 | Base legion plus Death Guard, Emperor's Children, Thousand Sons, World Eaters |
| **Total** | **594** | **580** | |

Source PDF revisions and per-faction conversion notes live in
[CONVERSION-STATUS.md](CONVERSION-STATUS.md).

The Adeptus Astartes supplement (loyalist Space Marines) is **deferred** until
Nathan publishes a complete version.

## Development

You do not need this section to play. The compendium ships as LevelDB under
`packs/` (not meant to be hand-edited). Editable source lives under `src/packs/`
as YAML, compiled with the
[Foundry CLI](https://github.com/foundryvtt/foundryvtt-cli).

```bash
npm install
npm run unpack
```

Edit or add threats under `src/packs/`. Sources must stay **flat** in each pack
directory — `compilePack` does not recurse into subfolders.

```bash
npm run validate
npm run pack
```

`validate` checks YAML parse, unique 16-character ids, `_key` agreement, and the
flat layout. Pull requests run `validate` + `pack` via
[CI](.github/workflows/ci.yml). Reload the module in Foundry after packing to
confirm the compendium loads.

Pack and unpack run on macOS, Linux, and Windows. LevelDB files are marked
binary in `.gitattributes` so Git does not corrupt them with line-ending
conversion.

### Releasing

Bump `version` (and the `download` tag) in `module.json`, then create a GitHub
Release on a `vX.Y.Z` tag. The
[release workflow](.github/workflows/release.yml) builds the zip, attaches it,
refreshes the `latest` manifest, and (if the `FVTT_RELEASE_TOKEN` secret is set)
registers with the Foundry Package Release API. The workflow can also be run
manually against an existing tag, with a dry-run option.

## Related modules

| Module | Role |
| --- | --- |
| [An Abundance of Apocrypha](https://github.com/flippelt/WnG-Apocrypha-FoundryVTT) | Player-facing archetypes, species, talents, wargear |
| [Wrath & Glory](https://github.com/moo-man/WrathAndGlory-FoundryVTT) | The game system this module requires |

## Authors

- [@flippelt](https://github.com/flippelt)
- [Nathan Dowdell](https://twitter.com/n01h3r3) — author of *An Abundance of Apocryphal Adversaries*

## License

This module's own packaging/code is released under the **MIT License** — see
[LICENSE](LICENSE).

The adapted game content (*An Abundance of Apocryphal Adversaries*) is the
homebrew of **Nathan Dowdell**, converted here **with his permission**.
Warhammer 40,000 and Wrath & Glory are the intellectual property of **Games
Workshop** and **Cubicle 7**; this is an unofficial, non-commercial fan project,
not affiliated with or endorsed by them. The MIT license covers only this
module's own packaging/code, not that third-party content.
