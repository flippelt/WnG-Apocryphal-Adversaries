# Editable source — threats

This folder holds the editable YAML source for the **Apocryphal Adversaries –
Threats** compendium pack (`type: Actor`, `threat`).

Threats are converted faction by faction from Nathan Dowdell's *An Abundance of
Apocryphal Adversaries* PDFs and organised into folders per faction (Orks,
Tyranids, Necrons, Daemonic Legions, Heretic Astartes, Asuryani, Drukhari,
T'au Empire, Malicious Miscellany).

Workflow: `npm run unpack` fills this folder from the LevelDB pack; edit/add
threats here; `npm run pack` rebuilds the pack. See the top-level
[README](../../../README.md#development).
