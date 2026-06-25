(function () {
  const pages = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "projects", label: "Projects", href: "projects.html" },
    { key: "writing", label: "Writing", href: "writing.html" },
    // { key: "timeline", label: "Timeline", href: "timeline.html" },
  ];

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function currentPage() {
    return document.body.dataset.page || "home";
  }

  function linkAttributes(url) {
    if (!url) {
      return "";
    }

    const isExternal = /^https?:\/\//i.test(url);
    return isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
  }

  function renderTags(tags = []) {
    return tags
      .slice(0, 3)
      .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
      .join("");
  }

  function renderSocialLinks(items = []) {
    return items
      .map(
        (item) => `
        <a class="social-link" href="${escapeHtml(item.href)}" aria-label="${escapeHtml(item.label)}"${linkAttributes(item.href)}>
          <i class="${escapeHtml(item.icon)}" aria-hidden="true"></i>
        </a>
      `,
      )
      .join("");
  }

  function renderNav() {
    const target = document.getElementById("site-nav");
    if (!target) {
      return;
    }

    const active = currentPage();
    target.innerHTML = `
      <nav class="navbar navbar-expand-lg sticky-top site-nav" aria-label="Primary navigation">
        <div class="container">
          <a class="navbar-brand fw-bold" href="index.html">${escapeHtml(profile.brandName)}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNav" aria-controls="primaryNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="primaryNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              ${pages
                .map(
                  (page) => `
                <li class="nav-item">
                  <a class="nav-link${page.key === active ? " active" : ""}" href="${page.href}"${page.key === active ? ' aria-current="page"' : ""}>${page.label}</a>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>
        </div>
      </nav>
    `;
  }

  function renderFooter() {
    const target = document.getElementById("site-footer");
    if (!target) {
      return;
    }

    target.innerHTML = `
      <footer class="site-footer">
        <div class="container d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
          <div>
            <strong>${escapeHtml(profile.brandName)}</strong>
            <span class="d-block d-sm-inline ms-sm-2">${escapeHtml(profile.footerText)}</span>
          </div>
          <div class="small">&copy; ${new Date().getFullYear()} ${escapeHtml(profile.brandName)}</div>
        </div>
      </footer>
    `;
  }

  function renderEmpty(target, message) {
    if (!target) {
      return;
    }

    target.innerHTML = `
      <div class="col-12">
        <div class="content-card">
          <p class="mb-0 text-secondary">${escapeHtml(message)}</p>
        </div>
      </div>
    `;
  }

  function featured(items = [], limit = 3) {
    return sortRecentFirst(items.filter((item) => item.featured)).slice(
      0,
      limit,
    );
  }

  function sortRecentFirst(items = []) {
    return [...items].sort((a, b) => dateValue(b) - dateValue(a));
  }

  function sortTimelineRecentFirst(items = []) {
    return [...items].sort(
      (a, b) => timelineDateValue(b) - timelineDateValue(a),
    );
  }

  function dateValue(item) {
    const source = item.sortDate || item.date || "";
    const value = Date.parse(source);
    return Number.isNaN(value) ? 0 : value;
  }

  function timelineDateValue(item) {
    const year = Number.parseInt(item.year, 10) || 0;
    return year * 100 + monthValue(item.date);
  }

  function monthValue(date = "") {
    const months = {
      january: 1,
      february: 2,
      march: 3,
      april: 4,
      may: 5,
      june: 6,
      july: 7,
      august: 8,
      september: 9,
      october: 10,
      november: 11,
      december: 12,
    };
    const matches =
      String(date)
        .toLowerCase()
        .match(/[a-z]+/g) || [];
    const values = matches.map((word) => months[word]).filter(Boolean);
    return values.length ? values[values.length - 1] : 0;
  }

  function renderHome() {
    const heroName = document.getElementById("hero-name");
    if (!heroName) {
      return;
    }

    const projectItems = typeof projects !== "undefined" ? projects : [];
    const articleItems =
      typeof writingItems !== "undefined" ? writingItems : [];

    heroName.textContent = profile.displayName;
    document.getElementById("hero-headline").textContent = profile.headline;
    document.getElementById("hero-bio").textContent = profile.bio;

    document.getElementById("hero-roles").innerHTML = profile.roles
      .map((role) => `<span class="tag">${escapeHtml(role)}</span>`)
      .join("");

    document.getElementById("focus-list").innerHTML = profile.focus
      .map(
        (item) =>
          `<li><i class="fas fa-check-circle" aria-hidden="true"></i><span>${escapeHtml(item)}</span></li>`,
      )
      .join("");

    document.getElementById("hero-socials").innerHTML = renderSocialLinks(
      profile.socials,
    );

    document.getElementById("hero-actions").innerHTML = profile.ctas
      .map((cta) => {
        return `
          <a class="btn btn-outline-primary" href="${escapeHtml(cta.href)}"${linkAttributes(cta.href)}>
            <i class="fas ${escapeHtml(cta.icon)} me-2" aria-hidden="true"></i>${escapeHtml(cta.label)}
          </a>
        `;
      })
      .join("");

    renderProjectCards(
      document.getElementById("featured-projects"),
      featured(projectItems),
    );
    renderWritingCards(
      document.getElementById("featured-writing"),
      featured(articleItems),
    );
  }

  function renderProjectCards(target, items) {
    if (!items.length) {
      renderEmpty(target, "Projects will appear here.");
      return;
    }

    target.innerHTML = items
      .map(
        (project) => `
      <div class="col-md-6 col-xl-4">
        <article class="content-card">
          <div class="card-meta mb-2">${escapeHtml(project.type)} · ${escapeHtml(project.date)}</div>
          <h3 class="h4 mb-3">${escapeHtml(project.title)}</h3>
          <p class="text-secondary">${escapeHtml(project.description)}</p>
          <div class="d-flex flex-wrap gap-2 mt-4">${renderTags(project.stack)}</div>
          ${renderProjectLinks(project)}
        </article>
      </div>
    `,
      )
      .join("");
  }

  function renderWritingCards(target, items) {
    if (!items.length) {
      renderEmpty(target, "Writing will appear here.");
      return;
    }

    target.innerHTML = items
      .map(
        (item) => `
      <div class="col-md-6 col-xl-4">
        <article class="content-card">
          <div class="card-meta mb-2">${escapeHtml(item.platform)} · ${escapeHtml(item.date)}</div>
          <h3 class="h4 mb-3">${escapeHtml(item.title)}</h3>
          <p class="text-secondary">${escapeHtml(item.summary)}</p>
          <div class="d-flex flex-wrap gap-2 mt-4">${renderTags(item.tags)}</div>
          <a class="btn btn-outline-primary mt-4" href="${escapeHtml(item.url)}"${linkAttributes(item.url)}>
            <i class="fas fa-arrow-right me-2" aria-hidden="true"></i>Read
          </a>
        </article>
      </div>
    `,
      )
      .join("");
  }

  function renderProjectLinks(project) {
    const url = project.demoUrl || project.githubUrl;
    if (!url) {
      return "";
    }

    return `
      <div class="d-flex flex-wrap gap-2 mt-4">
        <a class="btn btn-outline-primary" href="${escapeHtml(url)}"${linkAttributes(url)}>
          <i class="fas fa-arrow-right me-2" aria-hidden="true"></i>Open Project
        </a>
      </div>
    `;
  }

  window.Portfolio = {
    escapeHtml,
    featured,
    linkAttributes,
    renderEmpty,
    renderFooter,
    renderNav,
    renderSocialLinks,
    renderTags,
    renderProjectLinks,
    sortRecentFirst,
    sortTimelineRecentFirst,
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderNav();
    renderFooter();
    renderHome();
  });
})();
