// Progressive enhancements only: the complete site is usable without this file.
(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  if (themeButton) {
    const updateThemeLabel = () => {
      themeButton.setAttribute(
        "aria-label",
        `Switch to ${root.dataset.theme === "light" ? "dark" : "light"} theme`,
      );
    };
    updateThemeLabel();
    themeButton.hidden = false;
    themeButton.addEventListener("click", () => {
      const theme = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = theme;
      try {
        localStorage.setItem("theme", theme);
      } catch {
        /* The toggle still works without persistence. */
      }
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", theme === "light" ? "#f5f4ec" : "#141511");
      updateThemeLabel();
    });
  }

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (menu && nav) {
    nav.dataset.collapsible = "true";
    menu.hidden = false;
    const closeMenu = () => {
      nav.dataset.open = "false";
      menu.setAttribute("aria-expanded", "false");
    };
    menu.addEventListener("click", (event) => {
      const open = menu.getAttribute("aria-expanded") !== "true";
      nav.dataset.open = String(open);
      menu.setAttribute("aria-expanded", String(open));
      if (open && event.detail === 0) nav.querySelector("a").focus();
    });
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        menu.getAttribute("aria-expanded") === "true"
      ) {
        closeMenu();
        menu.focus();
      }
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);
  }

  const archive = document.querySelector("[data-archive]");
  if (archive) {
    const search = archive.querySelector("input[type='search']");
    const buttons = [...archive.querySelectorAll("[data-filter]")];
    const entries = [...archive.querySelectorAll("[data-entry]")].map(
      (element) => ({
        element,
        text: element.textContent.toLowerCase(),
        category: element.dataset.category,
      }),
    );
    const status = archive.querySelector(".result-count");
    const empty = archive.querySelector(".empty-state");
    let topic = "all";
    const applyFilters = () => {
      const words = search.value
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);
      let count = 0;
      for (const entry of entries) {
        const match =
          (topic === "all" || entry.category === topic) &&
          words.every((word) => entry.text.includes(word));
        entry.element.hidden = !match;
        if (match) count += 1;
      }
      for (const button of buttons)
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.filter === topic),
        );
      const noun =
        archive.dataset.archive === "projects"
          ? count === 1
            ? "project"
            : "projects"
          : count === 1
            ? "piece"
            : "pieces";
      status.textContent = `${count} of ${entries.length} ${noun}`;
      empty.hidden = count !== 0;
    };
    const restoreFilters = () => {
      const params = new URLSearchParams(location.search);
      topic = buttons.some(
        (button) => button.dataset.filter === params.get("topic"),
      )
        ? params.get("topic")
        : "all";
      search.value = params.get("q") || "";
      applyFilters();
    };
    const saveFilters = (method) => {
      const url = new URL(location.href);
      if (topic === "all") url.searchParams.delete("topic");
      else url.searchParams.set("topic", topic);
      if (search.value) url.searchParams.set("q", search.value);
      else url.searchParams.delete("q");
      try {
        history[method](null, "", url);
      } catch {
        /* file:// or sandbox restrictions should not break filtering. */
      }
      applyFilters();
    };
    search.addEventListener("input", () => saveFilters("replaceState"));
    for (const button of buttons) {
      button.addEventListener("click", () => {
        if (topic === button.dataset.filter) return;
        topic = button.dataset.filter;
        saveFilters("pushState");
      });
    }
    archive.querySelector(".reset-filters").addEventListener("click", () => {
      topic = "all";
      search.value = "";
      saveFilters("pushState");
      search.focus();
    });
    window.addEventListener("popstate", restoreFilters);
    restoreFilters();
    archive.querySelector(".archive-toolbar").hidden = false;
  }

  const copy = document.querySelector(".copy-email");
  const emailLink = document.querySelector(
    '.contact-actions a[href^="mailto:"]',
  );
  const copyStatus = document.querySelector(".copy-status");
  if (copy && emailLink && copyStatus) {
    copy.hidden = false;
    copy.addEventListener("click", async () => {
      const email = emailLink.getAttribute("href").slice(7);
      copy.disabled = true;
      try {
        await navigator.clipboard.writeText(email);
        copyStatus.textContent = "Email copied to clipboard.";
      } catch {
        copyStatus.textContent = `Copy unavailable. Email me at ${email}.`;
      } finally {
        copy.disabled = false;
      }
    });
  }
})();
