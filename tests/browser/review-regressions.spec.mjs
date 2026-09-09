import { test, expect } from "@playwright/test";

test("keyboard users can open the mobile menu and follow a navigation link", async ({
  page,
  browserName,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu" });
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(
    page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Home", exact: true }),
  ).toBeFocused();
  await page.keyboard.press(browserName === "webkit" ? "Alt+Tab" : "Tab");
  await expect(
    page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Projects", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/projects.html$/);
});

for (const javaScriptEnabled of [true, false]) {
  test(`nested 404 keeps fragments on this page and loads root assets (JS ${javaScriptEnabled})`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const missing = [];
    page.on("response", (response) => {
      if (
        response.status() >= 400 &&
        !response.url().includes("nested/missing")
      )
        missing.push(response.url());
    });
    await page.route("**/nested/missing", (route) =>
      route.fulfill({
        status: 404,
        contentType: "text/html",
        path: "404.html",
      }),
    );
    await page.goto("http://127.0.0.1:8000/nested/missing");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await skip.focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL("http://127.0.0.1:8000/nested/missing#main");
    await expect(page.locator("main")).toBeFocused();
    await page.getByRole("link", { name: "Let’s talk" }).click();
    await expect(page).toHaveURL(
      "http://127.0.0.1:8000/nested/missing#contact",
    );
    await page.getByRole("link", { name: "Back to top" }).click();
    await expect(page).toHaveURL("http://127.0.0.1:8000/nested/missing#top");
    await expect(
      page.getByRole("link", { name: "Back to the homepage" }),
    ).toHaveAttribute("href", "/index.html");
    expect(missing).toEqual([]);
    await context.close();
  });
}

test("mobile writing heading retains word spacing when its line break is hidden", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator("#writing-heading")).toHaveText(
    "Beyond the code.",
    { useInnerText: true },
  );
});
