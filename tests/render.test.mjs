import test from "node:test";
import assert from "node:assert/strict";

// The first slice: useful HTML must be present before a browser runs JS.
test("the homepage is pre-rendered with identity, work, writing and contact", async () => {
  const { renderPage } = await import("../scripts/render.mjs");
  const html = renderPage("home");
  assert.match(html, /<h1[\s>]/);
  assert.match(html, /Solomon Esenyi/);
  assert.match(html, /Grantline/);
  assert.match(html, /Perps Playground/);
  assert.match(html, /mailto:dosolomon5@gmail.com/);
  assert.match(html, /href="projects.html"/);
  assert.match(html, /href="writing.html"/);
  assert.match(html, /aria-current="page"/);
  assert.doesNotMatch(html, /bootstrap|fontawesome|cdn.jsdelivr/);
});

test("archives pre-render every entry with searchable categories and stable year anchors", async () => {
  const { renderPage } = await import("../scripts/render.mjs");
  const { projects } = await import("../js/projects.js");
  const { writingItems } = await import("../js/writing.js");
  const { timelineItems } = await import("../js/timeline.js");
  const work = renderPage("projects");
  const writing = renderPage("writing");
  const timeline = renderPage("timeline");
  assert.equal((work.match(/data-entry /g) || []).length, projects.length);
  assert.equal(
    (writing.match(/data-entry /g) || []).length,
    writingItems.length,
  );
  assert.equal(
    (timeline.match(/class="timeline-entry"/g) || []).length,
    timelineItems.length,
  );
  assert.match(work, /aria-label="Search projects"/);
  assert.match(writing, /aria-label="Search writing"/);
  assert.match(work, /data-category="Trading &amp; markets"/);
  assert.match(timeline, /id="year-2023"/);
  assert.match(timeline, /id="year-2002"/);
  assert.match(timeline, /Preserved through 2023/);
  assert.match(renderPage("404"), /Page not found/);
  for (const key of ["home", "projects", "writing", "timeline", "404"]) {
    const html = renderPage(key);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
    assert.match(html, /<meta property="og:title"/);
    assert.match(html, /<link rel="canonical"/);
    assert.doesNotMatch(html, /<script[^>]+src="https?:/);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length);
    for (const match of html.matchAll(/href="#([^"]+)"/g))
      assert.ok(ids.includes(match[1]), match[1]);
  }
});
