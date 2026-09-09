import { profile } from "../js/profile.js";
import { projects } from "../js/projects.js";
import { writingItems } from "../js/writing.js";
import { timelineItems } from "../js/timeline.js";

const site = "https://lordghostx.github.io";
const pages = [
  ["home", "Home", "index.html"],
  ["projects", "Projects", "projects.html"],
  ["writing", "Writing", "writing.html"],
  ["timeline", "Timeline", "timeline.html"],
];
const arrow = '<span aria-hidden="true">↗</span>';

const e = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
const recent = (items) =>
  [...items].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
const selected = (items) =>
  recent(items)
    .filter((item) => item.featured)
    .slice(0, 3);
const external = (url, text, className = "text-link") =>
  `<a class="${className}" href="${e(url)}"${/^https?:/.test(url) ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}${arrow}</a>`;
const tags = (items) =>
  `<ul class="tags" aria-label="Topics">${items.map((tag) => `<li>${e(tag)}</li>`).join("")}</ul>`;
const resume = profile.ctas.find((item) => item.label === "View Resume").href;

function header(active) {
  return `<a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="container nav-shell">
      <a class="brand" href="index.html" aria-label="LordGhostX — home">LordGhostX<span class="brand-period" aria-hidden="true">.</span></a>
      <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">${pages.map(([key, label, href]) => `<a href="${href}"${active === key ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav>
      <div class="nav-actions">
        <a class="nav-contact" href="#contact">Let’s talk ${arrow}</a>
        <button class="theme-toggle icon-button" type="button" aria-label="Switch to light theme" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg></button>
        <button class="menu-toggle" type="button" aria-controls="primary-nav" aria-expanded="false" hidden>Menu <span aria-hidden="true">+</span></button>
      </div>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer" id="contact">
    <div class="container">
      <div class="contact-heading"><p class="eyebrow">Have something in mind?</p><h2>Let’s make it <span class="serif">work.</span></h2></div>
      <div class="contact-body"><p>Engineering, documentation, or a genuinely interesting problem.<br>I’d love to hear what you’re working on.</p><div class="contact-actions">${external(profile.socials.find((item) => item.label === "Email").href, "Say hello", "button button-primary")}<button class="copy-email button button-quiet" type="button" hidden>Copy email <span aria-hidden="true">⧉</span></button><span class="copy-status" role="status"></span></div></div>
      <div class="footer-bottom"><a class="footer-name" href="index.html">Solomon Esenyi <span>/ LordGhostX</span></a><div class="social-links">${profile.socials
        .filter((item) => item.label !== "Email")
        .map((item) =>
          external(
            item.href,
            e(item.label === "Calendly" ? "Book a call" : item.label),
          ),
        )
        .join(
          "",
        )}</div><a class="back-top" href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
    </div>
  </footer>`;
}

function projectLinks(project) {
  return `${project.demoUrl ? external(project.demoUrl, project.demoUrl.includes("x.com/") ? "Project notes" : "Visit project") : ""}${project.githubUrl ? external(project.githubUrl, "View source") : ""}`;
}

function projectRow(project, index, archive = false) {
  return `<article class="project-row"${archive ? ` data-entry data-category="${e(project.category)}"` : ""}>
    <span class="item-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
    <div class="project-main"><p class="eyebrow">${e(project.type)}</p><${archive ? "h2" : "h3"}>${e(project.title)}</${archive ? "h2" : "h3"}><p>${e(project.description)}</p>${tags(project.stack)}</div>
    <div class="project-side"><time datetime="${e(project.sortDate)}">${e(project.date)}</time><div class="project-links">${projectLinks(project)}</div></div>
  </article>`;
}

function writingRow(item, index, archive = false) {
  return `<article class="writing-row"${archive ? ` data-entry data-category="${e(item.category)}"` : ""}>
    <div class="writing-meta"><span>${e(item.platform)}</span><time datetime="${e(item.sortDate)}">${e(item.date)}</time></div>
    <div class="writing-main"><${archive ? "h2" : "h3"}>${external(item.url, e(item.title), "article-title")}</${archive ? "h2" : "h3"}>${archive ? `<p>${e(item.summary)}</p>${tags(item.tags)}` : ""}</div>
    ${external(item.url, "Read Article", "read-link")}
  </article>`;
}

function home() {
  const picks = selected(projects);
  const lead = picks[0];
  const hasGrantlineLead =
    lead?.githubUrl === "https://github.com/LordGhostX/grantline";
  return `<section class="hero container" aria-labelledby="hero-title">
    <div class="hero-intro"><p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Solomon Esenyi <span class="slash">/</span> Engineer, writer, explorer</p><span class="edition mono">The personal portfolio of LordGhostX</span></div>
    <div class="hero-grid">
      <div class="hero-copy"><h1 id="hero-title">I build systems.<br>Then make them<br><span class="serif">make sense.</span></h1><p class="hero-description">Software engineer & technical writer working at the intersection of developer infrastructure, onchain systems, and financial markets.</p><div class="hero-actions"><a class="button button-primary" href="#selected-work">Explore my work <span aria-hidden="true">↓</span></a>${external(resume, "View résumé", "button button-quiet")}</div></div>
      <aside class="field-note" aria-label="What connects my work"><div class="note-heading"><span class="mono">A common thread</span><span aria-hidden="true">↙</span></div><div class="note-symbol" aria-hidden="true">✳</div><p class="note-title">Deep in the details.<br>Clear on the <span class="serif">why.</span></p><p class="note-description">From low-latency data pipelines to the docs that make them usable. I care about both sides of the system.</p><a class="text-link" href="timeline.html">A little more about me ${arrow}</a></aside>
    </div>
    <div class="hero-bottom"><span class="mono">Code with purpose. Words with clarity.</span><a href="#selected-work" class="scroll-link mono">Selected work <span aria-hidden="true">↓</span></a></div>
  </section>
  <section class="work-section section container" id="selected-work" aria-labelledby="work-heading">
    <div class="section-heading"><div><p class="eyebrow">01 / Things I’ve built</p><h2 id="work-heading">Selected <span class="serif">work.</span></h2></div><a class="text-link" href="projects.html">All projects <span class="count">${projects.length}</span> ${arrow}</a></div>
    ${hasGrantlineLead ? `<article class="lead-project"><div class="lead-copy"><div class="lead-meta"><p class="eyebrow">${e(lead.type)}</p><time datetime="${e(lead.sortDate)}">${e(lead.date)}</time></div><h3>${e(lead.title)}</h3><p>${e(lead.description)}</p>${tags(lead.stack)}<div class="lead-links">${projectLinks(lead)}</div></div><div class="authority-note"><span class="mono">The idea, in three steps</span><p>AI proposes.<br><span class="serif">Mandates decide.</span></p><ol class="authority-flow"><li><span>01</span> Agent intent</li><li><span>02</span> Authority check</li><li><span>03</span> Vault execution</li></ol><span class="mono authority-caption">Intent ≠ permission</span></div></article>` : ""}
    <div class="selected-projects">${picks
      .slice(hasGrantlineLead ? 1 : 0)
      .map((item, index) =>
        projectRow(item, index + (hasGrantlineLead ? 1 : 0)),
      )
      .join(
        "",
      )}${picks.length ? "" : `<a class="text-link" href="projects.html">Browse the projects archive ${arrow}</a>`}</div>
  </section>
  <section class="writing-section section" aria-labelledby="writing-heading"><div class="container writing-layout"><div class="writing-intro"><p class="eyebrow">02 / Making it make sense</p><h2 id="writing-heading">Beyond<br> the <span class="serif">code.</span></h2><p>Technical writing is part of the engineering. These are the guides, research, and explanations I leave along the way.</p><a class="text-link" href="writing.html">All writing <span class="count">${writingItems.length}</span> ${arrow}</a></div><div class="selected-writing">${selected(
    writingItems,
  )
    .map((item, index) => writingRow(item, index))
    .join("")}</div></div></section>
  <section class="about-section section container" aria-labelledby="about-heading"><div><p class="eyebrow">03 / The person behind the handle</p><h2 id="about-heading">Curiosity is the<br><span class="serif">through line.</span></h2></div><div class="about-copy"><p class="large-copy">My first program was a Windows Batch script. That curiosity became a practice: build something, understand it deeply, then help someone else do the same.</p><p>${e(profile.bio)}</p><div class="about-links"><a class="text-link" href="timeline.html">The story so far ${arrow}</a>${external(resume, "View résumé")}</div></div></section>`;
}

function pageIntro(number, eyebrow, title, italic, description, annotation) {
  return `<section class="page-intro container"><p class="eyebrow">${number} / ${eyebrow}</p><div class="page-title-row"><h1>${title}<span class="serif">${italic}</span></h1><span class="page-annotation mono">${annotation}</span></div><p class="page-description">${description}</p></section>`;
}

function archive(key) {
  const isProjects = key === "projects";
  const items = recent(isProjects ? projects : writingItems);
  const categories = [...new Set(items.map((item) => item.category))];
  const intro = isProjects
    ? pageIntro(
        "01",
        "Builds, experiments & open source",
        "The work",
        ".",
        "Protocols, trading systems, developer tools, and the occasional side quest. A collection of things I’ve built and contributed to.",
        `${items.length} projects / Newest first`,
      )
    : pageIntro(
        "02",
        "Documentation, tutorials & research",
        "The writing",
        ".",
        "Complex systems, explained with care. Guides, deep dives, and practical lessons from building software and helping developers use it.",
        `${items.length} pieces / Newest first`,
      );
  return `${intro}<section class="archive container" data-archive="${key}" aria-label="${isProjects ? "Project" : "Writing"} archive">
    <div class="archive-toolbar" hidden><div class="filters" role="group" aria-label="Filter by topic"><button type="button" class="filter" data-filter="all" aria-pressed="true">All ${key}</button>${categories.map((category) => `<button type="button" class="filter" data-filter="${e(category)}" aria-pressed="false">${e(category)}</button>`).join("")}</div><label class="search-field"><span aria-hidden="true">⌕</span><input type="search" aria-label="Search ${key}" placeholder="Search ${key}…" autocomplete="off" spellcheck="false"></label></div>
    <div class="archive-summary"><p class="mono result-count" role="status" aria-live="polite">${items.length} ${isProjects ? "projects" : "pieces"}</p><span class="mono">${isProjects ? "Built & contributed" : "Published across the web"}</span></div>
    <div class="archive-list">${items.map((item, index) => (isProjects ? projectRow(item, index, true) : writingRow(item, index, true))).join("")}</div>
    <div class="empty-state" hidden><h2>No matches. <span class="serif">Try another angle.</span></h2><p>Try a different search or reset the topic filter.</p><button class="button button-quiet reset-filters" type="button">Reset filters <span aria-hidden="true">↺</span></button></div>
  </section>`;
}

function timeline() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthNumber = (item) =>
    Math.max(...item.date.split(" - ").map((month) => months.indexOf(month)));
  const items = [...timelineItems].sort(
    (a, b) =>
      Number(b.year) - Number(a.year) || monthNumber(b) - monthNumber(a),
  );
  const years = [...new Set(items.map((item) => item.year))];
  return `${pageIntro("03", "A personal archive", "The story", ".", "First programs, new places, lessons learned, and a lot of building in between. The moments that shaped the person behind the work.", "2002 — 2023 / A living history")}
    <div class="container"><p class="archive-note">Preserved through 2023. For more recent work, explore the <a href="projects.html">projects archive</a>.</p></div>
    <div class="timeline-layout container"><nav class="year-nav" aria-label="Jump to year"><p class="eyebrow">Skip to a chapter</p>${years.map((year) => `<a href="#year-${year}">${year}</a>`).join("")}</nav><div class="timeline-list">${years
      .map(
        (year) =>
          `<section class="timeline-year" id="year-${year}" aria-labelledby="heading-${year}"><h2 id="heading-${year}">${year}<span class="serif">.</span></h2><ol>${items
            .filter((item) => item.year === year)
            .map(
              (item) =>
                `<li class="timeline-entry"><span class="mono">${e(item.date)}</span><p>${item.descriptionHtml}</p></li>`,
            )
            .join("")}</ol></section>`,
      )
      .join("")}</div></div>`;
}

export function renderPage(key) {
  const config = {
    home: {
      title: "Solomon Esenyi — Engineer, Writer & Explorer",
      description:
        "Software engineer and technical writer building developer infrastructure, blockchain systems, and trading research tools. Explore work by Solomon Esenyi (LordGhostX).",
      content: home,
    },
    projects: {
      title: "Projects — Solomon Esenyi",
      description:
        "Explore Solomon Esenyi’s projects in trading, blockchain, AI agents, developer tools, and open source.",
      content: () => archive("projects"),
    },
    writing: {
      title: "Writing — Solomon Esenyi",
      description:
        "Technical articles, API documentation, and protocol research by Solomon Esenyi. Browse guides on Solana, Rust, Go, Python, and more.",
      content: () => archive("writing"),
    },
    timeline: {
      title: "Timeline — Solomon Esenyi",
      description:
        "The personal and professional story of Solomon Esenyi (LordGhostX), from first programs to engineering, writing, and community.",
      content: timeline,
    },
    404: {
      title: "Page not found — Solomon Esenyi",
      description:
        "This page doesn’t exist. Find your way back to the work of Solomon Esenyi.",
      content: () =>
        '<section class="not-found container"><p class="eyebrow">404 / A wrong turn</p><h1>Page not found.<br><span class="serif">Curiosity, intact.</span></h1><p>This link may have moved, or the page may never have existed. There’s still plenty to explore.</p><a class="button button-primary" href="index.html">Back to the homepage <span aria-hidden="true">↗</span></a></section>',
    },
  }[key];
  if (!config) throw new Error(`Unknown page: ${key}`);
  const { title, description, content } = config;
  const canonical = `${site}/${key === "home" ? "" : `${key}.html`}`;
  const html = `<!doctype html>
<!-- Generated by scripts/build.mjs. Edit scripts/render.mjs and js/ content, then npm run build. -->
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${e(description)}">
  <meta name="theme-color" content="#141511">
  <title>${title}</title>
  <link rel="canonical" href="${canonical}">
${key === "404" ? '  <meta name="robots" content="noindex">' : ""}
  <meta property="og:type" content="website"><meta property="og:site_name" content="Solomon Esenyi / LordGhostX"><meta property="og:title" content="${title}"><meta property="og:description" content="${e(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${site}/assets/social-card.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Solomon Esenyi — I build systems. Then make them make sense."><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <script src="js/theme.js"></script>
  <link rel="preload" href="assets/fonts/space-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="css/site.css">
  <script src="js/site.js" defer></script>
</head>
<body id="top" data-page="${key}">
${header(key)}
<main id="main" tabindex="-1">${content()}</main>
${footer()}
</body>
</html>
`;
  // A 404 is served at arbitrary nested paths. Resolve only local files from
  // the site root; leave fragment links attached to the current document.
  return key === "404"
    ? html.replace(
        /\b(href|src)="(?![a-z][a-z\d+.-]*:|\/|#)([^"]+)"/gi,
        '$1="/$2"',
      )
    : html;
}
