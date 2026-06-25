const projects = [
  {
    title: "Perps Playground",
    type: "Market Structure Lab",
    date: "June 2026",
    sortDate: "2026-06-24",
    description:
      "A visual market structure lab for perpetual futures. Browse supported perp exchanges, inspect live markets, compare funding and market behavior, and track a browser-local paper portfolio.",
    stack: ["Perpetual Futures", "Market Data", "Portfolio Tracking"],
    githubUrl: "",
    demoUrl: "https://perpsplayground.com",
    featured: true,
  },
  {
    title: "Prediction Market Trader",
    type: "Trading Automation",
    date: "March 2026",
    sortDate: "2026-03-30",
    description:
      "A research and execution system for hourly crypto prediction markets, with live market monitoring, trade bookkeeping, performance tracking, and a local analytics dashboard.",
    stack: ["Polymarket", "Trading Data", "Algorithmic Trading"],
    githubUrl: "",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Lighter Python SDK",
    type: "Open Source Contribution",
    date: "February 2026",
    sortDate: "2026-02-01",
    description:
      "Contributed to the Python SDK for Lighter, improving developer access to exchange infrastructure and programmatic trading workflows.",
    stack: ["Python", "Exchange APIs", "Trading Infrastructure"],
    githubUrl: "https://github.com/LordGhostX/lighter-python",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Crypto Market Engine",
    type: "Market Research Engine",
    date: "December 2025",
    sortDate: "2025-12-02",
    description:
      "A crypto market research engine used to explore market-making and execution behavior across venues including Hyperliquid, Paradex, Lighter, and other derivatives exchanges.",
    stack: ["Market Making", "Crypto", "Research"],
    githubUrl: "https://github.com/LordGhostX/dex-market-maker",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Quant Scrolls",
    type: "Research Archive",
    date: "August 2025",
    sortDate: "2025-08-26",
    description:
      "Contributed to a curated archive of quantitative finance, trading, MEV, market microstructure, execution, and decentralized market research materials.",
    stack: ["Quant Finance", "Trading Research", "Market Microstructure"],
    githubUrl: "https://github.com/LordGhostX/quant-scrolls",
    demoUrl: "",
    featured: true,
  },
  {
    title: "Paradex RS",
    type: "Open Source Contribution",
    date: "August 2025",
    sortDate: "2025-08-09",
    description:
      "Contributed to a high-performance Rust client library for Paradex with REST and WebSocket connectivity, focused on low-latency exchange API access.",
    stack: ["Rust", "Exchange APIs", "Trading"],
    githubUrl: "https://github.com/LordGhostX/paradex-rs",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Solana Atomic Arbitrage",
    type: "MEV Infrastructure",
    date: "July 2025",
    sortDate: "2025-07-08",
    description:
      "A Solana atomic arbitrage system using streaming transaction data, graph-based routing, token metadata enrichment, persistent logging, and Jupiter swap construction.",
    stack: ["Solana", "Yellowstone gRPC", "MEV"],
    githubUrl: "https://github.com/LordGhostX/solana-atomic-arbs",
    demoUrl: "",
    featured: true,
  },
  {
    title: "Maven Fund R&D",
    type: "Crypto Research",
    date: "September 2024",
    sortDate: "2024-09-30",
    description:
      "A research-focused project presenting Maven's crypto fund thesis, systematic market analysis, portfolio strategy, and risk-aware digital asset research.",
    stack: ["Crypto", "Portfolio Strategy", "Risk Management"],
    githubUrl: "",
    demoUrl: "https://lordghostx.eu.pythonanywhere.com",
    featured: false,
  },
  {
    title: "PyBit",
    type: "Open Source Contribution",
    date: "August 2024",
    sortDate: "2024-08-22",
    description:
      "Contributed to the official Python API connector for Bybit, supporting HTTP and WebSocket access for exchange integrations.",
    stack: ["Python", "Exchange APIs", "Trading Infrastructure"],
    githubUrl: "https://github.com/LordGhostX/pybit",
    demoUrl: "",
    featured: false,
  },
  {
    title: "GhostNet",
    type: "Protocol",
    date: "January 2024",
    sortDate: "2024-01-04",
    description:
      "A peer-to-peer, private, permissionless, and decentralized communication protocol inspired by Waku.",
    stack: ["P2P", "Privacy", "Decentralized Protocols"],
    githubUrl: "https://github.com/LordGhostX/GhostNet",
    demoUrl: "",
    featured: false,
  },
  {
    title: "BattleGrid",
    type: "Strategy Game",
    date: "December 14, 2023",
    sortDate: "2023-12-14",
    description:
      "A tactical strategy game played on an 11x11 grid, blending chess-like positioning with modern warfare units and unique abilities.",
    stack: ["Game Design", "Strategy", "Grid Systems"],
    githubUrl: "https://github.com/LordGhostX/battlegrid",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Binance DCA",
    type: "Trading Script",
    date: "October 2022",
    sortDate: "2022-10-10",
    description:
      "A Dollar Cost Averaging script for automating scheduled cryptocurrency purchases through a Binance account.",
    stack: ["Python", "Binance", "Crypto Automation"],
    githubUrl: "https://github.com/LordGhostX/binance-dca",
    demoUrl: "",
    featured: false,
  },
  {
    title: "animeX",
    type: "CLI Tool",
    date: "March 2022",
    sortDate: "2022-03-28",
    description:
      "A command-line tool for downloading anime directly to a local machine.",
    stack: ["Python", "CLI", "Automation"],
    githubUrl: "https://github.com/LordGhostX/animeX-v2",
    demoUrl: "",
    featured: false,
  },
  {
    title: "ReStatic",
    type: "Developer Tool",
    date: "December 2021",
    sortDate: "2021-12-10",
    description:
      "A Python script that converts static HTML files into Django or Flask templates by automatically formatting static asset references.",
    stack: ["Python", "Django/Flask", "Developer Tools"],
    githubUrl: "https://github.com/LordGhostX/restatic",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Crypto Arbitrage",
    type: "Arbitrage Platform",
    date: "November 2021",
    sortDate: "2021-11-26",
    description:
      "A basic crypto arbitrage platform designed to compare opportunities across centralized and decentralized exchanges.",
    stack: ["Crypto", "Arbitrage", "MEV"],
    githubUrl: "https://github.com/LordGhostX/cc-arbitrage",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Docs to Markdown CLI",
    type: "CLI Tool",
    date: "October 2021",
    sortDate: "2021-10-26",
    description:
      "A command-line tool for converting Google Docs files into Markdown.",
    stack: ["Markdown", "Google Docs", "Automation"],
    githubUrl: "https://github.com/LordGhostX/docs-to-md-cli",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Anime Hive",
    type: "Telegram Bot",
    date: "October 2020",
    sortDate: "2020-10-19",
    description:
      "A Telegram bot for downloading anime, getting recommendations, and fetching anime information without ads.",
    stack: ["Telegram Bot", "Python", "Automation"],
    githubUrl: "https://github.com/LordGhostX/animehive",
    demoUrl: "",
    featured: false,
  },
  {
    title: "DevJobHub",
    type: "Job Alert Bot",
    date: "September 2020",
    sortDate: "2020-09-12",
    description:
      "A Telegram-based job alert system that sends personalized programming job postings to users.",
    stack: ["Telegram Bot", "Jobs", "Automation"],
    githubUrl: "https://github.com/LordGhostX/devjobhub",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Pwned Passwords",
    type: "Security Tool",
    date: "March 2020",
    sortDate: "2020-03-28",
    description:
      "A security utility for checking whether a password has appeared in known data breaches.",
    stack: ["Security", "Passwords", "Data Breach Checks"],
    githubUrl: "https://github.com/LordGhostX/pwnedpasswords",
    demoUrl: "",
    featured: false,
  },
  {
    title: "QuickMed",
    type: "AI Healthcare",
    date: "December 2019",
    sortDate: "2019-12-30",
    description:
      "An online platform exploring the use of AI to automate hospital diagnostics, with early work across dashboards, backend integration, and model serving.",
    stack: ["AI", "Healthcare", "Diagnostics"],
    githubUrl: "https://github.com/LordGhostX/QuickMed",
    demoUrl: "",
    featured: false,
  },
  {
    title: "NNDraw",
    type: "Visualization Tool",
    date: "September 2019",
    sortDate: "2019-09-24",
    description: "A tool for visualizing neural network architectures.",
    stack: ["Neural Networks", "Visualization", "Machine Learning"],
    githubUrl: "https://github.com/LordGhostX/NNDraw",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Im-Conv",
    type: "Web Utility",
    date: "September 2019",
    sortDate: "2019-09-19",
    description:
      "A Django web application for converting images between formats including PNG, JPEG, GIF, TIFF, WebP, PDF, and more.",
    stack: ["Django", "Image Processing", "Web App"],
    githubUrl: "https://github.com/LordGhostX/Im-Conv",
    demoUrl: "",
    featured: false,
  },
  {
    title: "PVault",
    type: "Security CLI",
    date: "September 2019",
    sortDate: "2019-09-11",
    description:
      "A Python CLI password manager for generating, storing, and retrieving encrypted passwords using SQLite and encryption primitives.",
    stack: ["Python", "Encryption", "Security"],
    githubUrl: "https://github.com/LordGhostX/PVault",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Cert-Gen",
    type: "Automation Tool",
    date: "September 2019",
    sortDate: "2019-09-08",
    description:
      "A certificate generation tool that places participant data onto image templates using CSV inputs, built to remove repetitive manual certificate design work.",
    stack: ["Python", "Image Processing", "Automation"],
    githubUrl: "https://github.com/LordGhostX/Cert-Gen",
    demoUrl: "",
    featured: false,
  },
  {
    title: "HashDB",
    type: "Database Library",
    date: "August 2019",
    sortDate: "2019-08-15",
    description:
      "A lightweight NoSQL-style database library implemented with JSON-based data storage.",
    stack: ["Python", "NoSQL", "Database"],
    githubUrl: "https://github.com/LordGhostX/HashDB",
    demoUrl: "",
    featured: false,
  },
  {
    title: "IPYNB Viewer",
    type: "Developer Tool",
    date: "August 2019",
    sortDate: "2019-08-12",
    description:
      "A browser-based viewer for Jupyter Notebook files, letting users inspect notebook contents without launching Anaconda or Jupyter locally.",
    stack: ["Jupyter", "Browser Tool", "Developer Tools"],
    githubUrl: "https://github.com/LordGhostX/IPYNB-viewer",
    demoUrl: "",
    featured: false,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("projects-list");
  if (!target) {
    return;
  }

  const {
    escapeHtml,
    renderEmpty,
    renderProjectLinks,
    renderTags,
    sortRecentFirst,
  } = window.Portfolio;
  const sortedProjects = sortRecentFirst(projects);

  if (!sortedProjects.length) {
    renderEmpty(target, "Projects will appear here.");
    return;
  }

  target.innerHTML = sortedProjects
    .map(
      (project) => `
    <div class="col-md-6 col-xl-4">
      <article class="content-card">
        <div class="card-meta mb-2">${escapeHtml(project.type)} · ${escapeHtml(project.date)}</div>
        <h2 class="h4 mb-3">${escapeHtml(project.title)}</h2>
        <p class="text-secondary">${escapeHtml(project.description)}</p>
        <div class="d-flex flex-wrap gap-2 mt-4">${renderTags(project.stack)}</div>
        ${renderProjectLinks(project)}
      </article>
    </div>
  `,
    )
    .join("");
});
