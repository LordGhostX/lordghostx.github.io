import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { renderPage } from "../scripts/render.mjs";

const root = new URL("../", import.meta.url);
test("every local page asset and internal destination exists, including share image", async () => {
  for (const key of ["home", "projects", "writing", "timeline", "404"]) {
    const html = renderPage(key);
    for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:|#|\/)/.test(value)) continue;
      await assert.doesNotReject(
        access(new URL(value.split("#")[0], root)),
        `${key}: ${value}`,
      );
    }
  }
  const image = await readFile(new URL("assets/social-card.png", root));
  assert.equal(image.toString("hex", 0, 8), "89504e470d0a1a0a");
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
  const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");
  for (const path of ["", "projects.html", "writing.html", "timeline.html"]) {
    assert.ok(
      sitemap.includes(`<loc>https://lordghostx.github.io/${path}</loc>`),
    );
  }
  assert.match(
    await readFile(new URL("robots.txt", root), "utf8"),
    /Sitemap: https:\/\/lordghostx.github.io\/sitemap.xml/,
  );
});
