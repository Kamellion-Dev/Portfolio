# Mohamed Kamal Aldin — Portfolio

**Senior Fullstack Engineer | Node.js / NestJS / TypeScript**

[Live portfolio](https://kamellion-dev.github.io/Portfolio/)

A static, accessible portfolio with personal projects, professional experience, technical capabilities, credentials and direct contact links. The project section contains only **LedgerFlow, Nexus Core, Semsarco and Food Sawa**. Employer work is summarized in experience rather than published as commercial case studies.

## Build and preview

Node.js 22 or later is required; CI uses Node.js 24. There are no npm dependencies to install.

```powershell
npm run check
npm run preview
```

Open `http://localhost:8000`. `npm run check` builds `_site` and validates the public pages, local link/asset graph, navigation markup, PDF assets and personal-project-only release scope. For a different preview server, serve `_site` as the document root.

## Editable source

| Path | Responsibility |
|---|---|
| `site/content.mjs` | Identity, project records, skills, employment and credentials |
| `site/render.mjs` | Semantic page layouts and static project overviews |
| `assets/css/portfolio.css` | Responsive dark/light design system |
| `assets/js/portfolio.js` | Mobile menu, theme persistence and legacy worker retirement |
| `assets/images/portfolio/` | Local portrait, favicon and social preview |
| `resume/` | Approved public PDF |
| `scripts/build.mjs` | Dependency-free static build with an explicit asset allowlist |
| `tests/site.test.mjs` | Release checks using Node’s built-in test runner |
| `.github/workflows/static.yml` | Build, test and GitHub Pages deployment |

`index.html` is a generated homepage convenience copy. Edit `site/` and rebuild rather than changing that file directly. The full site, including project pages, is in `_site`.

Legacy `src/`, old assets/configuration, and `old-index.html` remain in repository history/source for reference. They are not part of the published build. Do not restore the saved-page editor scripts into the public site.

## Content and release rules

- Keep five years explicitly tied to overall software development experience.
- Keep project status and technical claims consistent across cards, project pages and the résumé.
- Add repository/demo URLs only when genuinely public. Do not invent metrics, testimonials or client claims.
- Replace the PDF in `resume/` when the approved résumé changes; update `owner.resume` if its filename changes.
- Update the social-preview PNG when professional positioning changes.
- The contact section uses email/social links and makes no claim of form delivery.

## Deployment

Push reviewed changes to `main`. The GitHub Actions workflow runs `npm run check`, uploads **only `_site`**, and deploys that artifact to GitHub Pages. Relative links support both local preview and the `/Portfolio/` production base path. Every personal-project overview has a real static directory route that supports direct reloads.

The replacement `sw.js` retires the old cache-first worker and its named portfolio cache for returning visitors. No new service worker is registered.

Before pushing, check the mobile menu using keyboard/touch, theme persistence, 320/375/768/1440px layouts, reduced motion, all project routes, and the PDF download. Record remaining browser/device limitations honestly.

Implementation decisions and reference analysis are in `docs/implementation/`.
