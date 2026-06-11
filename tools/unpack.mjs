// Extract the Foundry LevelDB compendium pack(s) into editable YAML sources.
//
// Run in an environment where the packs open (the Foundry host, Linux, or WSL):
//   npm install
//   npm run unpack
//
import { extractPack } from "@foundryvtt/foundryvtt-cli";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));
const module = JSON.parse(await readFile(join(root, "module.json"), "utf8"));

for (const pack of module.packs ?? []) {
  const src = join(root, pack.path);
  const dest = join(root, "src", "packs", pack.name);
  console.log(`Unpacking ${pack.name}\n  ${src}\n  -> src/packs/${pack.name}`);
  await extractPack(src, dest, { yaml: true });
}

console.log("Done. Editable sources are under src/packs/.");
