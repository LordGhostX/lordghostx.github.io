import { chromium } from "@playwright/test";

// Run against the local preview server after changing social-card.html.
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.goto("http://127.0.0.1:8000/scripts/social-card.html");
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: "assets/social-card.png" });
  console.log("Generated assets/social-card.png (1200 × 630)");
} finally {
  await browser.close();
}
