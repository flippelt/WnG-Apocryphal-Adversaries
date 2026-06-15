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
> ⚠️ **Recommended companions — `wng-core` and `wng-apocrypha` (optional but
> strongly advised).** Both are listed as `recommends`, so this module installs
> and runs without them, **but elements will break without them:**
>
> - **`wng-core`** supplies the threats' tokens and item icons, and the **Smite**
>   psychic power some threats link to. Without it, those icons are missing and the
>   Smite link shows as "unlinked".
> - **`wng-apocrypha`** supplies the Ork **WAAAGH! psychic powers** (and other
>   shared content) that the psyker threats link to via compendium references.
>   Without it, those linked powers show as "unlinked".
>
> Install both for the full, linked experience.

## Status / Progress

Converted faction by faction from the source PDFs. See
[CONVERSION-STATUS.md](CONVERSION-STATUS.md).

- ✅ **Orks — complete (v0.2.0):** all 41 threats (Boyz, Nobz, walkers, psykers
  and every named Warlord up to Ghazghkull) plus a companion items compendium of
  19 Adversary Traits and 15 Shiny Gubbinz relics.
- ⏳ **To do:** Tyranids · Necrons · Daemonic Legions · Heretic Astartes ·
  Asuryani · Drukhari · T'au Empire · Malicious Miscellany.

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
