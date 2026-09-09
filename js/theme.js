// Runs before CSS to avoid a flash of the wrong saved theme.
(() => {
  let theme = "dark";
  try {
    if (localStorage.getItem("theme") === "light") theme = "light";
  } catch {
    // Storage may be unavailable in private or sandboxed browsing.
  }
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "light" ? "#f5f4ec" : "#141511");
})();
