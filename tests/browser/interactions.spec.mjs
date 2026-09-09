import { test, expect } from "@playwright/test";

test("theme toggles, persists across navigation, and survives blocked storage", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByText("Projects", { exact: true })
    .click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new DOMException("Denied", "SecurityError");
      },
    });
  });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.reload();
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect(errors).toEqual([]);
});

test("mobile menu opens, closes with Escape and restores trigger focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu" });
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toBeHidden();
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});

test("email copy reports success and a useful permission failure", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: async (text) => {
          window.copiedEmail = text;
        },
      },
      configurable: true,
    });
  });
  await page.goto("/");
  await page.getByRole("button", { name: "Copy email" }).click();
  await expect(page.getByRole("status")).toContainText("Email copied");
  expect(await page.evaluate(() => window.copiedEmail)).toBe(
    "dosolomon5@gmail.com",
  );
  await page.evaluate(() => {
    navigator.clipboard.writeText = async () => {
      throw new Error("Permission denied");
    };
  });
  await page.getByRole("button", { name: "Copy email" }).click();
  await expect(page.getByRole("status")).toContainText("dosolomon5@gmail.com");
  await expect(page.getByRole("link", { name: "Say hello" })).toHaveAttribute(
    "href",
    "mailto:dosolomon5@gmail.com",
  );
});
