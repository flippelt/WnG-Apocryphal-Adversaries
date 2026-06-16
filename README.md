# An Abundance of Apocryphal Adversaries for Foundry VTT

A bestiary module for the **Wrath & Glory** system (Cubicle 7) on Foundry VTT,
adapting the **threats** from Nathan Dowdell's *An Abundance of Apocryphal
Adversaries* — the bestiary companion to *An Abundance of Apocrypha* — converted
here **with his permission**.

> Compatible with Foundry VTT **v11–v14**. Module id: `wng-apocryphal-adversaries`.
>
> Companion to the [An Abundance of Apocrypha](https://github.com/flippelt/WnG-Apocrypha-FoundryVTT)
> module (archetypes, talents, wargear, etc.).
>
> ⚠️ **Recommended companions (optional but strongly advised).** These are listed
> as `recommends`, so this module installs and runs without them, **but elements
> will break without them:**
>
> - **`wng-core`** supplies item icons and the **Smite** psychic power some threats
>   link to. Without it, those icons are missing and the Smite link shows as
>   "unlinked".
> - **`wng-apocrypha`** supplies the Ork **WAAAGH! psychic powers** (and other
>   shared content) that the psyker threats link to. Without it, those linked
>   powers show as "unlinked".
> - **`wng-xenos`** supplies the **Necron tokens**. Without it, Necron threats fall
>   back to a default token image.
> - Some mounted Ork bosses reference **Church of Steel (`wng-cos`)** for their
>   vehicles.
>
> Install them for the full, linked experience.

## Status / Progress

Converted faction by faction from the source PDFs. See
[CONVERSION-STATUS.md](CONVERSION-STATUS.md).

- ✅ **Orks — complete (v0.2.0):** all 41 threats (Boyz, Nobz, walkers, psykers
  and every named Warlord up to Ghazghkull) plus a companion items compendium of
  19 Adversary Traits and 15 Shiny Gubbinz relics.
- ✅ **Necrons — complete (v0.3.0):** 39 actors (Warriors, Immortals, Flayed Ones,
  Destroyers, Crypteks, Canoptek constructs, the three C'Tan Shards, every named
  Overlord and Lord from Imotekh the Stormlord to Trazyn the Infinite, and the
  Annihilation Barge, Night Scythe and Monolith war machines) plus 38 *Lords of
  the Necrontyr* items: Adversary Traits, Cryptek Arcana and Relics of the Aeons.
- ✅ **Tyranids — complete (v0.4.0):** all 28 threats (Hormagaunts and Termagants
  through Genestealers, Lictor, Carnifex, the synapse psykers — Broodlord, Hive
  Tyrant, Tervigon, Zoanthrope, Neurothrope, Maleceptor — and the big monsters
  Tyrannofex, Haruspex, Exocrine, Toxicrene, Trygon and Mawloc) plus the 13
  Powers of the Hive Mind, a full Bio-Weapons armoury and the seven Hive Fleet
  adaptations.
- ⏳ **To do:** Daemonic Legions · Heretic Astartes · Asuryani · Drukhari ·
  T'au Empire · Malicious Miscellany.

**v1.0.0 will be tagged once all nine faction PDFs are converted.**

## Development

The compendium ships as a LevelDB database under `packs/`, not meant to be
hand-edited. The editable source lives under `src/packs/` as YAML, with a small
build step (the [Foundry CLI](https://github.com/foundryvtt/foundryvtt-cli)):

```bash
npm install
npm run unpack   # LevelDB pack -> editable YAML in src/packs/
# ...edit / add threats...
npm run pack     # YAML sources -> LevelDB pack
```

`npm run unpack` must run where the packs open (Foundry host, Linux, or WSL).
Reload the module in Foundry after editing to confirm the compendium loads.

### Releasing

Create a GitHub Release on a `vX.Y.Z` tag and the
[release workflow](.github/workflows/release.yml) builds the zip, attaches it,
refreshes the `latest` manifest, and (if the `FVTT_RELEASE_TOKEN` secret is set)
registers with the Foundry Package Release API.

## Authors

- [@flippelt](https://www.github.com/flippelt)
- [Nathan Dowdell](https://twitter.com/n01h3r3) — author of *An Abundance of Apocryphal Adversaries*

## License

This module's own packaging/code is released under the **MIT License** — see
[LICENSE](LICENSE).

The adapted game content (*An Abundance of Apocryphal Adversaries*) is the
homebrew of **Nathan Dowdell**, converted here **with his permission**.
Warhammer 40,000 and Wrath & Glory are the intellectual property of **Games
Workshop** and **Cubicle 7**; this is an unofficial, non-commercial fan project,
not affiliated with or endorsed by them.
