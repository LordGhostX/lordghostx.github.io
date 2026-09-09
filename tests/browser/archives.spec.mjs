import { test, expect } from "@playwright/test";
import { projects } from "../../js/projects.js";
import { writingItems } from "../../js/writing.js";

for (const [key, items, topic, search] of [
  ["projects", projects, "Trading & markets", "python"],
  ["writing", writingItems, "Engineering", "rust"],
]) {
  test(`${key}: filters combine with search, survive reload, reset and support back navigation`, async ({
    page,
  }) => {
    await page.goto(`/${key}.html`);
    const entries = page.locator("[data-entry]:visible");
    await expect(entries).toHaveCount(items.length);
    await page.getByRole("button", { name: topic, exact: true }).click();
    await expect(entries).toHaveCount(
      items.filter((item) => item.category === topic).length,
    );
    await page.getByRole("searchbox").fill(search);
    expect(new URL(page.url()).searchParams.get("q")).toBe(search);
    const filteredCount = await entries.count();
    expect(filteredCount).toBeGreaterThan(0);
    expect(filteredCount).toBeLessThan(items.length);
    await page.reload();
    await expect(page.getByRole("searchbox")).toHaveValue(search);
    await expect(
      page.getByRole("button", { name: topic, exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
    await expect(entries).toHaveCount(filteredCount);
    await page.getByRole("searchbox").fill("zzzz-no-such-entry");
    await expect(entries).toHaveCount(0);
    await expect(
      page.getByRole("heading", { name: "No matches. Try another angle." }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Reset filters" }).click();
    await expect(entries).toHaveCount(items.length);
    await expect(page.getByRole("searchbox")).toBeFocused();
    await expect(page.locator(".result-count")).toContainText(
      String(items.length),
    );
    await page.getByRole("button", { name: topic, exact: true }).click();
    await page.goBack();
    await expect(entries).toHaveCount(items.length);
    await page.getByRole("searchbox").fill("  <img src=x onerror=alert(1)>  ");
    await expect(entries).toHaveCount(0);
    await expect(page.locator(".archive img")).toHaveCount(0);
  });
}

test("invalid topic in a shared URL falls back to all results", async ({
  page,
}) => {
  await page.goto("/projects.html?topic=nonexistent");
  await expect(page.locator("[data-entry]:visible")).toHaveCount(
    projects.length,
  );
  await expect(
    page.getByRole("button", { name: "All projects", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
});
