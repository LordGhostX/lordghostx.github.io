import test from "node:test";
import assert from "node:assert/strict";
import { projects } from "../js/projects.js";
import { renderPage } from "../scripts/render.mjs";

test("Grantline-specific explanation never appears beside a different lead project", () => {
  const grantline = projects.find((item) => item.title === "Grantline");
  const featured = grantline.featured;
  try {
    grantline.featured = false;
    const html = renderPage("home");
    assert.match(html, /Perps Playground/);
    assert.doesNotMatch(html, /Mandates decide/);
  } finally {
    grantline.featured = featured;
  }
});

test("empty featured selection does not break the homepage", () => {
  const flags = projects.map((item) => item.featured);
  try {
    projects.forEach((item) => {
      item.featured = false;
    });
    const html = renderPage("home");
    assert.match(html, /Browse the projects archive/);
    assert.match(html, /href="projects.html"/);
    assert.doesNotMatch(html, /Mandates decide/);
  } finally {
    projects.forEach((item, index) => {
      item.featured = flags[index];
    });
  }
});
