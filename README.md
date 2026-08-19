# Personal Portfolio — Israel "Ray" Chavez

A clean, fast, single-page portfolio. Plain HTML, CSS, and a little JavaScript — no frameworks, no build step. Dark-mode friendly with a light-mode toggle.

## Files

- `index.html` — all content and structure
- `styles.css` — styling and theming
- `script.js` — footer year + theme toggle
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a repo (e.g. `portfolio-site`) and push these files to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio-site.git
   git push -u origin main
   ```

2. In the repo on GitHub: **Settings → Pages → Build and deployment**.
   Set **Source** to *Deploy from a branch*, branch **main**, folder **/ (root)**. Save.

3. Your site will be live at `https://<your-username>.github.io/portfolio-site/`
   in a minute or two. For a root URL (`<your-username>.github.io`), name the repo
   `<your-username>.github.io` instead.

## Links used

- GitHub: `https://github.com/SoyIsrael`
- LinkedIn: `https://www.linkedin.com/in/raychavez4/`
- DI2 project overview: `https://di2accelerator.wustl.edu/.../application-of-artificial-intelligence.../`
- AI & SDOH project site: `https://washu-dev.github.io/ai-and-sdoh/`

The four project cards link to repos under `github.com/SoyIsrael/`. If any repo
name or visibility differs, update the `href`s in `index.html`.
