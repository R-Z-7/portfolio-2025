<!-- .github/copilot-instructions.md - Project-specific guidance for AI coding agents -->

# Quick context

- This is a minimal static portfolio site composed of two main files: [index.html](index.html) and [styles.css](styles.css).
- No build system, package manager, or tests. The site is served as static files (HTML/CSS, tiny inline JS).

# Big picture

- Single-page static site. Structure: semantic sections (`<section class="section" id="...">`) wrapped in a `.container` for layout.
- Visual styling is centralized in `styles.css` using CSS custom properties in `:root` (see `--bg`, `--accent`, `--max`). Prefer changing variables for theme adjustments.
- Minimal client-side JS: one inline script updates the copyright year (`document.getElementById("year").textContent = new Date().getFullYear();`).

# What AI agents should do first

- Do not introduce a build tool unless requested. Keep changes compatible with static hosting (GitHub Pages, static CDN).
- When editing markup, follow existing structure: each major block is a `<section class="section">` with an inner `.container` and cards using `.card`.
- When adding visuals/components, reuse existing utility classes: `.container`, `.card`, `.grid`, `.pill`, `.meta`, `.btn`, `.cta`, `.nav`.

# Coding conventions & patterns (concrete examples)

- Layout: use `.container{max-width:var(--max)}` to constrain width; place content inside `.container`.
- Grids: use `.grid` which defaults to two columns and collapses under 900px; prefer `.grid` for 2-column layouts.
- Cards: add content inside `<div class="card">...</div>` to get consistent padding, border, and hover effects.
- Buttons/links: use `<a class="btn primary">` or `<a class="btn">` to match existing styles.
- Pills: short metadata labels use `<span class="pill">` as in `About` section.

# Styling guidance

- Prefer editing `styles.css` variables in `:root` for global color/spacing changes.
- Keep selectors simple; the stylesheet is small and scoped to utility-like classes rather than a complex component system.
- Avoid adding new frameworks or large resets — this project intentionally keeps CSS minimal.

# Developer workflows (how to preview, test, and validate changes)

- Preview locally by opening [index.html](index.html) in a browser or running a simple static server from the project root:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

- No tests or CI configured. For visual checks, validate at common viewport widths (mobile/tablet/desktop).

# Integration points & assets

- The anchor to the CV references `Ramees-Kallan-CV.pdf` at site root; add or update that file in the project root when changing the CV.
- External links (LinkedIn) open with `target="_blank" rel="noopener"` — preserve these attributes when adding external anchors.

# Change recommendations for common tasks

- Adding a new section: copy an existing `<section class="section">` block, set a unique `id`, wrap content in `.container`.
- Theme tweak: change colors in `:root` (`--accent`, `--bg`, `--panel`, `--text`).
- Accessibility: ensure link text is descriptive and interactive controls remain keyboard-focusable.

# What *not* to do

- Do not introduce build tools, Node dependencies, or frameworks without explicit approval.
- Do not move files into nested folders unless updating references (this site uses root-level paths like `Ramees-Kallan-CV.pdf`).

# Where to look for examples

- Layout and components: [index.html](index.html)
- Theme and variables: [styles.css](styles.css)

---
If anything here is unclear or you'd like the instructions to cover additional workflows (e.g., CI, deploying to GitHub Pages, or support for SASS/Tooling), tell me which area to expand.
