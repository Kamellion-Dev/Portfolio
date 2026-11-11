# Cloud Portfolio Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Retheme the existing static portfolio with an original, restrained cloud-infrastructure visual system while preserving its content, behavior, accessibility, and performance.

**Architecture:** Extend the current semantic token system in `assets/css/portfolio.css`, then restyle existing components rather than changing page structure. Use CSS-only gradients and pseudo-elements for the data-grid motif, and regenerate static HTML with the existing build script.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node.js build/test scripts

**Spec:** `docs/superpowers/specs/2026-11-11-cloud-portfolio-theme-design.md`

## Global Constraints

- Preserve existing content, navigation, project structure, portrait, and interactions.
- Do not copy ScaleOps branding, text, or supplied artwork.
- Add no runtime dependency and no heavy animation library.
- Maintain 4.5:1 text contrast, visible focus, reduced-motion support, and no horizontal scrolling.
- Do not use subagents.

## Review Focus

- The decorative data grid must never obscure text or intercept pointer events.
- Light mode must remain coherent rather than inheriting dark-only decorative colors.
- Long headings and tags must reflow without clipping at 375px.
- Interactive elements must retain visible hover and keyboard-focus states.
- The exact portrait and all project routes must continue to load after the static build.

---

### Task 1: Establish the cloud-engineering design tokens and background

**Files:**
- Modify: `assets/css/portfolio.css`
- Verify: `tests/site.test.mjs`

**Interfaces:**
- Consumes: Existing `:root` and `:root[data-theme=light]` semantic variables.
- Produces: Extended theme tokens for background glow, glass surfaces, teal/violet/pink accents, and technical typography.

- [x] **Step 1: Extend the semantic token sets**

Add exact dark/light tokens for canvas, surface, foreground, muted text, borders, focus ring, accent colors, glass backgrounds, and decorative grid opacity.

- [x] **Step 2: Build the original CSS background treatment**

Use layered radial gradients on `body` plus a non-interactive fixed pseudo-element for a sparse pixel data grid. Scope opacity by theme and keep all content above it.

- [x] **Step 3: Run structural tests**

Run: `npm run check`
Expected: 6 tests pass and 5 static pages build.

### Task 2: Restyle the existing component system

**Files:**
- Modify: `assets/css/portfolio.css`
- Verify: generated `_site/index.html` and project pages

**Interfaces:**
- Consumes: Theme tokens from Task 1 and existing component class names.
- Produces: Updated header, buttons, hero, profile panel, proof strip, project cards, architecture visuals, experience, skills, contact, footer, and project-detail styling.

- [x] **Step 1: Apply typography and interaction hierarchy**

Use IBM Plex Sans for body content and JetBrains Mono for technical labels; keep large headings in a strong sans-serif stack. Ensure minimum 44px controls and a 2px high-contrast focus ring.

- [x] **Step 2: Apply restrained glass and cloud-system styling**

Use translucent surfaces, subtle borders, teal primary actions, violet supporting highlights, and tiny pink data points. Keep glow effects low-intensity and never apply them to body copy.

- [x] **Step 3: Preserve motion and accessibility behavior**

Keep transitions in the 150–300ms range, retain reduced-motion overrides, and ensure decoration is `aria`-neutral CSS only.

- [x] **Step 4: Run structural tests**

Run: `npm run check`
Expected: 6 tests pass and every internal asset resolves.

### Task 3: Responsive and visual verification

**Files:**
- Modify if needed: `assets/css/portfolio.css`
- Regenerate: `index.html`

**Interfaces:**
- Consumes: Completed theme CSS and built `_site` pages.
- Produces: Verified desktop/mobile release ready for GitHub Pages.

- [x] **Step 1: Build and serve the static output**

Run: `npm run check`, then serve `_site` locally.
Expected: Build succeeds without runtime errors.

- [x] **Step 2: Verify responsive layouts**

Check 375px, 768px, 1024px, and 1440px viewports. Assert `document.documentElement.scrollWidth === window.innerWidth`, portrait loads, navigation remains operable, and text does not clip.

- [x] **Step 3: Verify visual quality and theme modes**

Capture home-page desktop/mobile screenshots, inspect card hierarchy and background restraint, then toggle light mode and confirm readable foreground, surfaces, accents, and focus states.

- [x] **Step 4: Run final checks and commit**

Run: `npm run check` and `git diff --check`
Expected: All tests pass and no whitespace errors remain.

