const writingItems = [
  {
    title: "How to Build and Deploy a Solana Program Using Pinocchio",
    platform: "GitHub Gist",
    date: "August 2025",
    sortDate: "2025-08-07",
    summary:
      "A hands-on guide to building, structuring, deploying, and integrating a low-level Solana program using the Pinocchio Rust library.",
    tags: ["Solana", "Rust", "Blockchain Development"],
    url: "https://gist.github.com/LordGhostX/52ccaaf5752e6829b29646620d1a9ce7",
    featured: false,
  },
  {
    title:
      "Reducing Global Payment Friction with Stablecoins, Blockchains, and Solana",
    platform: "Medium",
    date: "June 2025",
    sortDate: "2025-06-06",
    summary:
      "A research-focused article exploring how stablecoins and Solana can reduce cross-border payment friction, improve settlement speed, and expand financial access.",
    tags: ["Solana", "Stablecoins", "Payments"],
    url: "https://medium.com/@hrknsinst/reducing-global-payment-friction-with-stablecoins-blockchains-and-solana-edfad5e83e04",
    featured: true,
  },
  {
    title: "SIMD-0204: Building the Foundation for Slashing on Solana",
    platform: "Hashnode",
    date: "May 2025",
    sortDate: "2025-05-10",
    summary:
      "An analysis of Solana’s SIMD-0204 proposal and how slashing could strengthen validator accountability and network security.",
    tags: ["Solana", "Validators", "Protocol Research"],
    url: "https://lordghostx.hashnode.dev/simd-0204-building-the-foundation-for-slashing-on-solana",
    featured: false,
  },
  {
    title: "Solana at Web2 Speed: Real-Time Performance Without Fragmentation",
    platform: "Hashnode",
    date: "May 2025",
    sortDate: "2025-05-07",
    summary:
      "A research article on Solana’s real-time performance goals, covering latency, throughput, responsiveness, and infrastructure for consumer-grade blockchain apps.",
    tags: ["Solana", "Performance", "Web3 Infrastructure"],
    url: "https://lordghostx.hashnode.dev/solana-at-web2-speed-real-time-performance-without-fragmentation",
    featured: true,
  },
  {
    title: "Starknet Improvement Proposals (SNIPs)",
    platform: "Hashnode",
    date: "April 2025",
    sortDate: "2025-04-24",
    summary:
      "An overview of Starknet Improvement Proposals and how they support protocol governance, ecosystem coordination, and network evolution.",
    tags: ["Starknet", "Governance", "Protocol Research"],
    url: "https://lordghostx.hashnode.dev/starknet-improvement-proposals-snips",
    featured: false,
  },
  {
    title: "Decentralizing Starknet: Architecture, Plans, and MEV Impact",
    platform: "DEV Community",
    date: "September 2024",
    sortDate: "2024-09-11",
    summary:
      "An exploration of Starknet’s decentralization roadmap, sequencer architecture, and the potential impact of decentralization on MEV dynamics.",
    tags: ["Starknet", "MEV", "Blockchain Architecture"],
    url: "https://dev.to/lordghostx/decentralizing-starknet-architecture-plans-and-mev-impact-7ck",
    featured: true,
  },
  {
    title: "Queries to Insights: Visualizing Starknet Data with Dune",
    platform: "DEV Community",
    date: "August 2024",
    sortDate: "2024-08-09",
    summary:
      "A practical guide to transforming Starknet on-chain data into dashboards and visual insights using Dune’s querying and visualization tools.",
    tags: ["Starknet", "Dune Analytics", "Onchain Data"],
    url: "https://dev.to/lordghostx/queries-to-insights-visualizing-starknet-data-with-dune-j8p",
    featured: false,
  },
  {
    title: "Starknet Protocols: Key Features and MEV Opportunities",
    platform: "DEV Community",
    date: "July 2024",
    sortDate: "2024-07-31",
    summary:
      "A survey of Starknet protocols and decentralized applications, highlighting their core features and potential MEV opportunities.",
    tags: ["Starknet", "DeFi", "MEV"],
    url: "https://dev.to/lordghostx/starknet-protocols-key-features-and-mev-opportunities-574i",
    featured: false,
  },
  {
    title: "Introduction to MEV on Starknet",
    platform: "DEV Community",
    date: "July 2024",
    sortDate: "2024-07-25",
    summary:
      "An introductory article explaining maximal extractable value, common MEV strategies, and how MEV applies to Starknet’s Layer 2 ecosystem.",
    tags: ["Starknet", "MEV", "Blockchain"],
    url: "https://dev.to/lordghostx/introduction-to-mev-on-starknet-1o0l",
    featured: false,
  },
  {
    title: "The state of Rust GUI libraries",
    platform: "LogRocket",
    date: "January 2024",
    sortDate: "2024-01-03",
    summary:
      "A comparison of Rust GUI libraries and frameworks, including Tauri, Druid, Xilem, Slint, gtk-rs, iced, egui, and Yew.",
    tags: ["Rust", "GUI Development", "Frontend Tooling"],
    url: "https://blog.logrocket.com/state-rust-gui-libraries",
    featured: false,
  },
  {
    title: "Best methods for unzipping files in Node.js",
    platform: "LogRocket",
    date: "June 2023",
    sortDate: "2023-06-02",
    summary:
      "A practical comparison of Node.js packages and methods for extracting ZIP files, including decompress, adm-zip, zlib, unzipper, and jszip.",
    tags: ["Node.js", "File Handling", "JavaScript"],
    url: "https://blog.logrocket.com/best-methods-unzipping-files-node-js/",
    featured: false,
  },
  {
    title: "Create and manage windows in your Rust app with Winit",
    platform: "LogRocket",
    date: "May 2023",
    sortDate: "2023-05-15",
    summary:
      "A Rust tutorial introducing Winit for creating windows, handling input, and building cross-platform GUI or game-development foundations.",
    tags: ["Rust", "Winit", "GUI Development"],
    url: "https://blog.logrocket.com/create-manage-windows-rust-app-with-winit/",
    featured: false,
  },
  {
    title: "Build an application with Node.js and PouchDB",
    platform: "LogRocket",
    date: "April 2023",
    sortDate: "2023-04-19",
    summary:
      "A tutorial on building a Node.js application with PouchDB, covering database setup and CRUD endpoints.",
    tags: ["Node.js", "PouchDB", "CRUD APIs"],
    url: "https://blog.logrocket.com/build-application-with-node-js-pouchdb/",
    featured: false,
  },
  {
    title: "How to build a blockchain with Go",
    platform: "LogRocket",
    date: "March 2023",
    sortDate: "2023-03-30",
    summary:
      "A Go tutorial explaining blockchain fundamentals by building blocks, hashes, mining logic, transactions, and chain validation.",
    tags: ["Golang", "Blockchain", "Backend Development"],
    url: "https://blog.logrocket.com/build-blockchain-with-go",
    featured: false,
  },
  {
    title: "Best GUI frameworks for Go",
    platform: "LogRocket",
    date: "March 2023",
    sortDate: "2023-03-10",
    summary:
      "A comparison of Go GUI frameworks, including go-gtk, qt, fyne, walk, and gioui, with guidance on choosing between them.",
    tags: ["Golang", "GUI Development", "Frameworks"],
    url: "https://blog.logrocket.com/best-gui-frameworks-go/",
    featured: false,
  },
  {
    title: "Go migration guide: Node.js, Python, and Rust",
    platform: "LogRocket",
    date: "January 2023",
    sortDate: "2023-01-26",
    summary:
      "A migration-focused guide comparing how teams can move codebases and concepts from Node.js, Python, and Rust into Go.",
    tags: ["Golang", "Migration", "Backend Development"],
    url: "https://blog.logrocket.com/go-migration-guide-node-js-python-rust/",
    featured: false,
  },
  {
    title: "Leverage Go workspaces for multi-module local development",
    platform: "LogRocket",
    date: "January 2023",
    sortDate: "2023-01-18",
    summary:
      "A guide to Go workspaces for managing multi-module projects, local development, version control, and open source collaboration.",
    tags: ["Golang", "Workspaces", "Developer Tooling"],
    url: "https://blog.logrocket.com/go-workspaces-multi-module-local-development/",
    featured: false,
  },
  {
    title: "Swift vs. Rust: Comparison guide",
    platform: "LogRocket",
    date: "October 2022",
    sortDate: "2022-10-27",
    summary:
      "A comparison of Swift and Rust, covering language features, safety, performance, expressivity, advantages, and tradeoffs.",
    tags: ["Rust", "Swift", "Programming Languages"],
    url: "https://blog.logrocket.com/swift-vs-rust-comparison-guide/",
    featured: false,
  },
  {
    title: "Comparing Rust and Nim",
    platform: "LogRocket",
    date: "October 2022",
    sortDate: "2022-10-07",
    summary:
      "A language comparison covering Rust and Nim features, use cases, interoperability, memory management, and developer experience.",
    tags: ["Rust", "Nim", "Programming Languages"],
    url: "https://blog.logrocket.com/comparing-rust-nim/",
    featured: false,
  },
  {
    title: "Integrating MongoDB into Go applications",
    platform: "LogRocket",
    date: "September 2022",
    sortDate: "2022-09-23",
    summary:
      "A tutorial on connecting Go applications to MongoDB and performing CRUD operations using the official MongoDB Go driver.",
    tags: ["Golang", "MongoDB", "Database"],
    url: "https://blog.logrocket.com/integrating-mongodb-go-applications",
    featured: false,
  },
  {
    title: "Exploring Carbon, the new superset of C++",
    platform: "LogRocket",
    date: "August 2022",
    sortDate: "2022-08-26",
    summary:
      "An introduction to Carbon, covering its goals as a C++ successor, language features, interoperability, memory safety, and syntax.",
    tags: ["Carbon", "C++", "Programming Languages"],
    url: "https://blog.logrocket.com/exploring-carbon-new-superset-c-plus-plus",
    featured: false,
  },
  {
    title: "Using CSS subgrids with container queries",
    platform: "LogRocket",
    date: "June 2022",
    sortDate: "2022-06-29",
    summary:
      "A frontend tutorial explaining CSS subgrid and container queries for building more adaptive, responsive layouts.",
    tags: ["CSS", "Responsive Design", "Frontend Development"],
    url: "https://blog.logrocket.com/using-css-subgrids-container-queries/",
    featured: false,
  },
  {
    title: "Comparing tools for optimizing performance in React",
    platform: "LogRocket",
    date: "June 2022",
    sortDate: "2022-06-10",
    summary:
      "A comparison of React performance optimization tools and techniques, including the Profiler API, React.memo, and React Developer Tools.",
    tags: ["React", "Performance", "Frontend Development"],
    url: "https://blog.logrocket.com/comparing-tools-optimizing-performance-react/",
    featured: false,
  },
  {
    title: "How to create a Solana wallet with Go",
    platform: "LogRocket",
    date: "October 2021",
    sortDate: "2021-10-25",
    summary:
      "A blockchain tutorial showing how to use Go to interact with Solana and build a wallet for storing, receiving, and transferring tokens.",
    tags: ["Golang", "Solana", "Blockchain"],
    url: "https://blog.logrocket.com/how-to-create-solana-wallet-go/",
    featured: false,
  },
  {
    title: "Documenting Go web APIs with Swag",
    platform: "LogRocket",
    date: "October 2021",
    sortDate: "2021-10-04",
    summary:
      "A guide to documenting Go web APIs with Swag and Swagger to make API documentation easier to create, maintain, and publish.",
    tags: ["Golang", "API Documentation", "Swagger"],
    url: "https://blog.logrocket.com/documenting-go-web-apis-with-swag/",
    featured: false,
  },
  {
    title: "Build and deploy a web app with Python, Flask, and Doppler",
    platform: "DEV Community",
    date: "October 2021",
    sortDate: "2021-10-04",
    summary:
      "A tutorial on building and deploying a Flask application while using Doppler to manage secrets and environment variables.",
    tags: ["Python", "Flask", "Secrets Management"],
    url: "https://dev.to/lordghostx/build-and-deploy-a-web-app-with-python-flask-and-doppler-9jm",
    featured: false,
  },
  {
    title: "A comprehensive guide to data structures in Go",
    platform: "LogRocket",
    date: "September 2021",
    sortDate: "2021-09-07",
    summary:
      "A Go-focused guide to core data structures, including arrays, slices, maps, structs, and practical code examples.",
    tags: ["Golang", "Data Structures", "Programming Fundamentals"],
    url: "https://blog.logrocket.com/comprehensive-guide-data-structures-go/",
    featured: false,
  },
  {
    title: "Build a profanity filter API with GraphQL",
    platform: "LogRocket",
    date: "August 2021",
    sortDate: "2021-08-05",
    summary:
      "A tutorial on building a GraphQL API with Python and Flask to detect and filter profanity in user-generated text.",
    tags: ["Python", "GraphQL", "API Development"],
    url: "https://blog.logrocket.com/build-profanity-filter-api-graphql/",
    featured: false,
  },
  {
    title: "Implementing User Authentication in a Python Application",
    platform: "LoginRadius",
    date: "July 2021",
    sortDate: "2021-07-07",
    summary:
      "A tutorial on implementing authentication and identity management in a Python Flask application using LoginRadius.",
    tags: ["Python", "Authentication", "Flask"],
    url: "https://www.loginradius.com/blog/engineering/guest-post/user-authentication-in-python",
    featured: false,
  },
  {
    title: "Building a Contact Manager with Python, Flask, and HarperDB",
    platform: "DEV Community",
    date: "June 2021",
    sortDate: "2021-06-02",
    summary:
      "A tutorial on building a Flask contact manager with HarperDB, covering database setup and CRUD functionality.",
    tags: ["Python", "Flask", "HarperDB"],
    url: "https://dev.to/lordghostx/building-a-contact-manager-with-python-flask-and-harperdb-1h53",
    featured: false,
  },
  {
    title:
      "Implementing Two-factor Authentication with Flask, PyOTP, and Fauna",
    platform: "DEV Community",
    date: "April 2021",
    sortDate: "2021-04-23",
    summary:
      "A tutorial on adding two-factor authentication to a Flask app using PyOTP and Fauna’s authentication features.",
    tags: ["Python", "Two-Factor Authentication", "Fauna"],
    url: "https://dev.to/lordghostx/implementing-two-factor-authentication-with-flask-pyotp-and-fauna-4jf3",
    featured: false,
  },
  {
    title:
      "How To Implement Biometric 2FA in a Cryptocurrency Wallet with Python, Flask and TypingDNA",
    platform: "DEV Community",
    date: "April 2021",
    sortDate: "2021-04-16",
    summary:
      "A security tutorial showing how to add biometric two-factor authentication and risk-based authentication to a Flask cryptocurrency wallet.",
    tags: ["Python", "Biometric Authentication", "Security"],
    url: "https://dev.to/typingdna/how-to-implement-biometric-2fa-in-a-cryptocurrency-wallet-with-flask-and-typingdna-3o41",
    featured: false,
  },
  {
    title: "Managing User Authentication and Sessions with Fauna and Flask",
    platform: "DEV Community",
    date: "March 2021",
    sortDate: "2021-03-25",
    summary:
      "A Flask tutorial covering authentication, authorization, user identity, and session management with Fauna.",
    tags: ["Python", "Authentication", "Fauna"],
    url: "https://dev.to/lordghostx/managing-user-authentication-and-sessions-with-fauna-and-flask-5h5h",
    featured: false,
  },
  {
    title: "Building Faunabin: A Pastebin Clone with Python and Fauna",
    platform: "DEV Community",
    date: "January 2021",
    sortDate: "2021-01-19",
    summary:
      "A project-based tutorial for building and deploying a Pastebin-style application with Python, Flask, Fauna, and Heroku.",
    tags: ["Python", "Flask", "Fauna"],
    url: "https://dev.to/lordghostx/building-faunabin-a-pastebin-clone-with-python-and-fauna-436b",
    featured: false,
  },
  {
    title: "How to Host Flask Applications on Namecheap cPanel",
    platform: "DEV Community",
    date: "December 2020",
    sortDate: "2020-12-27",
    summary:
      "A deployment guide showing how to host Flask applications on cPanel-based hosting platforms such as Namecheap.",
    tags: ["Python", "Flask", "Deployment"],
    url: "https://dev.to/lordghostx/how-to-host-flask-applications-on-namecheap-cpanel-299b",
    featured: false,
  },
  {
    title: "A Friendly Introduction to Cybersecurity",
    platform: "DEV Community",
    date: "December 2020",
    sortDate: "2020-12-22",
    summary:
      "A beginner-friendly introduction to cybersecurity concepts, cyber threats, attacks, and basic defensive thinking.",
    tags: ["Cybersecurity", "Security", "Programming Fundamentals"],
    url: "https://dev.to/lordghostx/a-friendly-introduction-to-cybersecurity-1e3a",
    featured: false,
  },
  {
    title: "The Zen of Python; An In-depth Explanation",
    platform: "DEV Community",
    date: "December 2020",
    sortDate: "2020-12-22",
    summary:
      "An explanatory guide to the Zen of Python and how its principles shape readable, maintainable Python code.",
    tags: ["Python", "Programming Fundamentals", "Code Quality"],
    url: "https://dev.to/lordghostx/the-zen-of-python-an-in-depth-explanation-45fm",
    featured: false,
  },
  {
    title: "Build and Deploy a Serverless URL Shortener with Python and Fauna",
    platform: "DEV Community",
    date: "December 2020",
    sortDate: "2020-12-17",
    summary:
      "A project tutorial for building and deploying a serverless URL shortener with Python, Flask, Fauna, and Heroku.",
    tags: ["Python", "Serverless", "Fauna"],
    url: "https://dev.to/lordghostx/build-and-deploy-a-serverless-url-shortener-with-python-and-fauna-3077",
    featured: false,
  },
  {
    title: "Building a Telegram Bot with Python and Fauna",
    platform: "DEV Community",
    date: "December 2020",
    sortDate: "2020-12-01",
    summary:
      "A tutorial on building a Telegram todo-list bot with Python while using Fauna as a serverless database backend.",
    tags: ["Python", "Telegram Bot", "Fauna"],
    url: "https://dev.to/lordghostx/building-a-telegram-bot-with-python-and-fauna-494i",
    featured: false,
  },
  {
    title:
      "Building a QR Code Identity System with Fernet Symmetric Encryption Algorithm in Python",
    platform: "DEV Community",
    date: "April 2020",
    sortDate: "2020-04-01",
    summary:
      "A Python security tutorial showing how to encrypt identity data with Fernet and represent it through QR codes.",
    tags: ["Python", "Encryption", "Cybersecurity"],
    url: "https://dev.to/lordghostx/building-a-qr-code-identity-system-with-fernet-symmetric-encryption-algorithm-in-python-2ffd",
    featured: false,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("writing-list");
  if (!target) {
    return;
  }

  const {
    escapeHtml,
    linkAttributes,
    renderEmpty,
    renderTags,
    sortRecentFirst,
  } = window.Portfolio;
  const sortedWriting = sortRecentFirst(writingItems);

  if (!sortedWriting.length) {
    renderEmpty(target, "Writing will appear here.");
    return;
  }

  target.innerHTML = sortedWriting
    .map(
      (item) => `
    <div class="col-md-6 col-xl-4">
      <article class="content-card">
        <div class="card-meta mb-2">${escapeHtml(item.platform)} · ${escapeHtml(item.date)}</div>
        <h2 class="h4 mb-3">${escapeHtml(item.title)}</h2>
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
});
