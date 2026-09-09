# Solomon Esenyi / LordGhostX

A static portfolio for software engineering, technical writing, and developer infrastructure, with dark and light themes, locally hosted fonts, and searchable archives. Built with HTML, CSS, and JavaScript, without a framework or runtime dependencies.

## Preview

The root HTML files are ready to serve. No installation or build is needed to preview them:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Use the local server for previews: opening files directly from disk can break the 404 page's root-relative asset links and restrict clipboard or URL-history behavior.

## GitHub Pages

The site is prepared for `https://lordghostx.github.io/`, with generated HTML, CSS, JavaScript, and assets at the repository root. For branch-based publishing, select the branch containing these files and `/ (root)` in the repository's Pages settings. No Node.js build is required during deployment; publish the generated files alongside their assets.

When content or templates change, run `npm run build` locally and include the generated HTML with the source changes. `npm run check` detects stale generated pages. Neither command commits or pushes.

GitHub Pages automatically serves the generated `404.html` for missing URLs. Its asset and page links resolve from the site root, so the design also works at nested missing paths; skip and contact links stay on the current page. Python's preview server has its own default 404 response, so visit `http://127.0.0.1:8000/404.html` to preview the custom page.

## Editing

Node.js 22+ is needed only to regenerate pages or run tests. The generator uses Node built-ins; `npm run build` works without installing dependencies.

| Source               | Purpose                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------- |
| `js/profile.js`      | Biography, résumé and contact links; some page copy lives in the renderer                |
| `js/projects.js`     | Projects, categories, dates, descriptions and destinations                               |
| `js/writing.js`      | Published writing, categories, summaries and links                                       |
| `js/timeline.js`     | Preserved personal chronology through 2023                                               |
| `scripts/render.mjs` | Shared layout, page copy, metadata and HTML rendering                                    |
| `scripts/build.mjs`  | Generates `index.html`, `projects.html`, `writing.html`, `timeline.html`, and `404.html` |
| `css/site.css`       | Design tokens, layouts, responsive behavior and print styles                             |
| `js/theme.js`        | Applies the saved theme before styles load                                               |
| `js/site.js`         | Theme toggle, mobile menu, search/filters and email copy                                 |

Edit the source files, then regenerate the root HTML; direct edits to generated pages are overwritten by the next build. The homepage uses the three most recent `featured: true` entries in each archive. The Grantline explanation appears only when Grantline is the lead project, and an empty project selection falls back to the archive link. Project and writing filters use each entry's explicit `category`. Search matches all entered words across a record, and search/topic state is shareable in the URL. Topic changes support browser back/forward.

All content, navigation, and outbound links remain available without JavaScript. Only enhancement controls are hidden when JS is unavailable. Dark is the default; explicit light/dark preferences are saved locally, with graceful fallback when storage is blocked. Motion respects `prefers-reduced-motion`.

Timeline `descriptionHtml` is rendered as trusted, repository-authored markup. The timeline currently ends in 2023; newer work appears in the project and writing archives.

## Verification

```sh
npm ci
npx playwright install chromium webkit
npm test
npm run check
npm run test:e2e
```

The browser suite starts a preview server if needed. It exercises Chromium and WebKit, desktop and mobile layouts, light/dark contrast, keyboard navigation, reduced motion, no-JavaScript content, blocked storage, clipboard failure, combined filters, URL state and empty results. axe checks cover automatically testable WCAG A/AA rules; they are not a substitute for a full manual accessibility audit.

With the preview server running:

```sh
node scripts/screenshots.mjs
node scripts/social-card.mjs
```

Screenshots go to ignored `.preview/screenshots/`. The social-card script rebuilds `assets/social-card.png` from `scripts/social-card.html`; the resulting image is included in Open Graph metadata. Fonts are self-hosted WOFF2 files, with their SIL Open Font Licenses in `assets/fonts/`.

## License

Site code is MIT licensed; see [LICENSE.txt](LICENSE.txt). Bundled fonts retain their own licenses.
