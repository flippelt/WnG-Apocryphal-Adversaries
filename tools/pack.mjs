// Compile the editable YAML sources under src/packs/<name>/ back into the
// distributable Foundry LevelDB compendium pack(s) under packs/.
//
//   npm run pack
//
// Reload the module in Foundry afterwards to confirm the compendium loads.
import { compilePack } from "@foundryvtt/foundryvtt-cli";
import { readFile, access, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));
const module = JSON.parse(await readFile(join(root, "module.json"), "utf8"));

for (const pack of module.packs ?? []) {
  const src = join(root, "src", "packs", pack.name);
  const dest = join(root, pack.path);
  try {
    await access(src);
  } catch {
    await mkdir(src, { recursive: true });
    console.warn(`No sources yet at src/packs/${pack.name} — created an empty folder; compiling an empty pack.`);
  }
  console.log(`Packing src/packs/${pack.name}\n  -> ${dest}`);
  await compilePack(src, dest, { yaml: true });
}

console.log("Done. Distributable packs under packs/ are up to date.");
