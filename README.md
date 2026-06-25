# LordGhostX Portfolio

A simple static portfolio for LordGhostX, built with HTML, Bootstrap CDN, CSS, and plain JavaScript data files. It is designed to run directly on GitHub Pages without a build step.

## Pages

- `index.html` - portfolio homepage with bio, focus areas, featured projects, and featured writing.
- `projects.html` - project cards rendered from `js/projects.js`.
- `writing.html` - writing cards rendered from `js/writing.js`.
- `timeline.html` - migrated personal timeline rendered from `js/timeline.js`.

## Editing Content

Most content lives in small JavaScript files:

- `js/profile.js` - name, headline, bio, focus areas, calls to action, and social links.
- `js/projects.js` - project descriptions, dates, stack tags, GitHub links, and project links.
- `js/writing.js` - writing summaries, platforms, tags, dates, and article links.
- `js/timeline.js` - preserved timeline entries from the original site.

Set `featured: true` on writing or project items to show them on the homepage.

## Local Preview

You can open the HTML files directly in a browser. To preview through a local server:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit:

```text
http://127.0.0.1:8000
```

## Built With

- HTML
- CSS
- Bootstrap 5.3 via CDN
- Font Awesome via CDN
- Plain JavaScript

## License

This project currently uses the MIT License. That is a good default for a public portfolio site because it is permissive, familiar, and simple. See [LICENSE.txt](LICENSE.txt) for details.
