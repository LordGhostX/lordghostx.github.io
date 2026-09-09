import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { projects } from "../../js/projects.js";
import { writingItems } from "../../js/writing.js";
import { timelineItems } from "../../js/timeline.js";

const pages = [
  "index.html",
  "projects.html",
  "writing.html",
  "timeline.html",
  "404.html",
];
for (const path of pages) {
  test(`${path}: responsive, local assets, no errors, accessible in both themes`, async ({
    page,
  }) => {
    const errors = [];
    const external = [];
    const broken = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("request", (request) => {
      if (!request.url().startsWith("http://127.0.0.1:8000"))
        external.push(request.url());
    });
    page.on("response", (response) => {
      if (response.status() >= 400) broken.push(response.url());
    });
    await page.goto(`/${path}`);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toHaveCount(1);
    for (const width of [1440, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      );
      expect(overflow, `${path} at ${width}px must not overflow`).toBe(false);
    }
    for (const width of [320, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const theme of ["dark", "light"]) {
        await page.evaluate(async (value) => {
          document.documentElement.dataset.theme = value;
          await Promise.all(
            document.getAnimations().map((animation) => animation.finished),
          );
        }, theme);
        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze();
        const violations = results.violations.map(({ id, nodes }) => ({
          id,
          nodes: nodes.map(({ target, failureSummary }) => ({
            target,
            failureSummary,
          })),
        }));
        expect(violations, `${path}, ${width}px, ${theme}`).toEqual([]);
      }
    }
    expect(errors).toEqual([]);
    expect(external).toEqual([]);
    expect(broken).toEqual([]);
  });
}

test("all content and navigation remain available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  for (const [path, selector, count] of [
    ["projects.html", "[data-entry]", projects.length],
    ["writing.html", "[data-entry]", writingItems.length],
    ["timeline.html", ".timeline-entry", timelineItems.length],
  ]) {
    await page.goto(`http://127.0.0.1:8000/${path}`);
    await expect(page.locator(selector)).toHaveCount(count);
    await expect(
      page.getByRole("navigation", { name: "Main navigation" }),
    ).toBeVisible();
    await expect(page.locator(".archive-toolbar")).toBeHidden();
  }
  await page.goto("http://127.0.0.1:8000/");
  await expect(
    page.getByRole("heading", { name: "Grantline", exact: true }),
  ).toBeVisible();
  await context.close();
});

test("keyboard skip link and year navigation work with reduced motion", async ({
  page,
  browserName,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/timeline.html");
  // macOS WebKit follows the OS default: Option+Tab includes links.
  await page.keyboard.press(browserName === "webkit" ? "Alt+Tab" : "Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page
    .getByRole("navigation", { name: "Jump to year" })
    .getByRole("link", { name: "2015", exact: true })
    .click();
  await expect(page).toHaveURL(/#year-2015$/);
  expect(
    await page.locator("#year-2015").evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.top < innerHeight;
    }),
  ).toBe(true);
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});
