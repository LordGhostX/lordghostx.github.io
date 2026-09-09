import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

await mkdir(".preview/screenshots", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
  reducedMotion: "reduce",
});
for (const [name, path, width, theme] of [
  ["home-dark", "index.html", 1440, "dark"],
  ["home-light", "index.html", 1440, "light"],
  ["home-mobile", "index.html", 390, "dark"],
  ["projects", "projects.html", 1440, "dark"],
  ["writing", "writing.html", 1440, "light"],
  ["timeline", "timeline.html", 1440, "dark"],
  ["projects-mobile", "projects.html", 390, "light"],
  ["home-tablet", "index.html", 768, "dark"],
  ["home-narrow", "index.html", 320, "light"],
]) {
  await page.setViewportSize({ width, height: 1000 });
  await page.goto(`http://127.0.0.1:8000/${path}`);
  await page.evaluate((value) => {
    document.documentElement.dataset.theme = value;
  }, theme);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: `.preview/screenshots/${name}.png`,
    fullPage: path === "index.html",
  });
  console.log(`.preview/screenshots/${name}.png`);
}
await browser.close();
