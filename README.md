# Rahul Sharma — Personal CV Site

A single-page CV site inspired by the editorial layout of [Te Arai Links Golf](https://tearai.com/golf/): Playfair Display headings, Montserrat body copy, a full-bleed hero, white intro sections, and immersive experience panels.

## View locally

From this folder, start a simple static server:

```bash
ruby -run -e httpd . -p 8080
```

Then open [http://127.0.0.1:8080](http://127.0.0.1:8080).

You can also open `index.html` directly in a browser, but a local server is recommended so fonts and assets load consistently.

## Deploy

This is a static site — no build step required.

- **GitHub Pages:** push the repo, enable Pages from the `main` branch root.
- **Netlify / Cloudflare Pages:** connect the repo or drag-and-drop the folder.
- **Custom domain:** point DNS at your host and upload these files.

## Customize

Before publishing, update:

1. **LinkedIn URL** in `index.html` — currently set to `https://www.linkedin.com/in/rahulsharma`.
2. **Hero and panel images** — replace the Unsplash URLs with your own photos in `index.html`.
3. **Copy** — edit section text directly in `index.html`.
4. **Contact emails** — confirm `hello@rahulsharma.co` and `r.sharma.nz@gmail.com` are correct.

## Project structure

```
index.html      Page content and sections
css/styles.css  Layout, typography, responsive styles
js/main.js      Header state and mobile navigation
```
