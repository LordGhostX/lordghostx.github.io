import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { renderPage } from "./render.mjs";

const root = new URL("../", import.meta.url);
const pages = {
  "index.html": "home",
  "projects.html": "projects",
  "writing.html": "writing",
  "timeline.html": "timeline",
  "404.html": "404",
};
const check = process.argv.includes("--check");
let stale = false;
for (const [file, key] of Object.entries(pages)) {
  const output = renderPage(key);
  const target = new URL(file, root);
  if (check) {
    const current = await readFile(target, "utf8").catch(() => "");
    if (current !== output) {
      console.error(`Stale generated page: ${file}. Run npm run build.`);
      stale = true;
    }
  } else {
    await writeFile(target, output);
    console.log(`Built ${fileURLToPath(target)}`);
  }
}
if (stale) process.exitCode = 1;
else if (check) console.log("All generated pages are up to date.");
