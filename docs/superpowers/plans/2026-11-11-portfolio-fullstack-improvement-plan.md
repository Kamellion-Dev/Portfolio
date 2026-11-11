# Senior Fullstack Portfolio Improvement Implementation Plan

> **For agentic workers:** Implement directly, task by task, using superpowers:executing-plans. **Do not use subagents**, per the owner’s instruction. This task produces an audit and plan; it does not implement or deploy the website.

**Goal:** Present **Senior Fullstack Engineer | Node.js / NestJS / TypeScript** clearly and let hiring teams inspect relevant work, download the current résumé, and contact Mohamed reliably.

**Architecture:** Retain the current visual identity and GitHub Pages hosting under `/Portfolio/`. Repair existing interactions before adding static case-study pages. Follow the repository’s actual framework and conventions when source is available; no framework rewrite is required.

**Tech Stack:** Existing build framework/pipeline, not yet verified; semantic HTML, responsive CSS, local assets, accessible navigation, static case studies and PDF download. Node.js/NestJS/TypeScript are the target professional stack, not an assumption about the site source.

**Spec:** Original evidence-backed audit in the CV workspace; current source mapping and decisions are recorded in [the implementation ledger](../../implementation/2026-11-11-progress.md).

**Owner amendment during implementation:** Showcase only LedgerFlow, Nexus Core, Semsarco and Food Sawa under “Things I’ve built”. Remove commercial case studies, their screenshots and the commercial archive. Employer responsibilities remain in experience. This overrides Task 4’s former selection of commercial projects and the engineering-lab section. See [reference analysis](../../implementation/2026-11-11-reference-analysis.md).

## Global constraints

- Exact title: **Senior Fullstack Engineer | Node.js / NestJS / TypeScript**.
- **5 years of software development experience** means overall experience, not five years with every framework.
- Simple English, real implementation status, specific contributions and verifiable outcomes. Do not invent metrics, production usage, architecture, or completion.
- React.js, Next.js and Vue.js experience must remain visible alongside backend work.
- Current approved PDF: `final/Mohamed-Kamal-Senior-Fullstack-Engineer-Resume.pdf` in the CV workspace; retain German A1 and approved résumé content.
- Do not use the ATOM project name in proposed B2B copy. Do not expose private code/client data.
- Keep links/assets compatible with the GitHub Pages `/Portfolio/` base path.
- No subagents, unsolicited messages or unapproved form submissions. Release is separate from this audit task.

## Review focus

1. Direct case-study navigation/reloads must work under the Pages base path — Task 4.
2. Keyboard/touch visitors must find the same links as mouse users — Tasks 1, 2 and 4.
3. Narrow viewports, zoom and long content must not hide controls or create horizontal page scrolling — Task 2.
4. Anonymous visitors must receive the current PDF from every download control — Task 1.
5. An unfinished project must not appear as completed commercial work — Tasks 3 and 4.

## Source mapping prerequisite

Only the deployed site was inspected. Locate the actual portfolio repository, read its `AGENTS.md` and build/deployment configuration, and record actual source paths for the responsibilities below before editing. Do not assume the CV workspace contains the site source or invent verified framework filenames.

| Source responsibility to locate | Observed target | Change |
|---|---|---|
| Header/navigation | `nav`, hamburger, résumé link | Accessible menu and consistent URLs |
| Hero | `#about`, headings and two buttons | Exact positioning and working anchors |
| Project catalogue/cards/routes | `#projects`, eight detail links | Real case studies and concise summaries |
| Skills/assets | `#skills`, broken icons | Grouped capabilities, local icons |
| Contact/shared identity | `#contact`, GitHub links, form | Correct profiles and honest delivery behavior |
| Head/layout styles | Metadata, decorations, overlays | Sharing, reflow, focus and reduced motion |
| Static assets/Pages configuration | Public assets and base path | PDF and optimized images |

Proposed published assets: `/Portfolio/resume/Mohamed-Kamal-Senior-Fullstack-Engineer-Resume.pdf` and `/Portfolio/projects/<slug>/index.html`. These are output contracts, not existing source paths. Use the actual build tool’s base-path helpers where provided.

## Task 1: Repair navigation, identity links and résumé delivery — first

**Trace:** F01, F02, F06, F09. **Files:** mapped header, hero, owner/contact configuration and static PDF asset.

**Interfaces:** One owner profile supplies all social destinations; one résumé URL supplies every download control. Hero anchors consume existing `projects` and `contact` section IDs.

- [ ] Reproduce hero-click, mobile-menu, GitHub mismatch and stale-PDF failures in the local build.
- [ ] Replace hero actions with real links to `#projects` and `#contact`; apply section scroll margins for the fixed header.
- [ ] Implement a named mobile toggle with `aria-controls`, accurate `aria-expanded`, Escape closure and closure after navigation. Use ordinary navigation links, not application-menu semantics.
- [ ] Set every GitHub destination to `https://github.com/Kamellion-Dev`. Make MK return home; preserve correct email, LinkedIn and WhatsApp destinations.
- [ ] Copy the approved PDF into static assets and replace the old Drive URL everywhere with its base-path-correct site URL.
- [ ] Verify at 375px and 1440px: hero actions reach visible destinations, mobile menu opens/closes by pointer and keyboard, links are reachable, and GitHub URLs agree.
- [ ] Fetch/open the PDF anonymously. Confirm HTTP success, PDF content type, expected filename, exact professional title, five-year wording and German A1. Compare the PDF hash with the approved source if assets are copied unchanged.
- [ ] Commit the repair after browser checks pass.

**Acceptance:** No inert hero actions, hidden mobile navigation, mismatched GitHub account or stale résumé entry point.

## Task 2: Fix reflow, skill assets and focus visibility — first

**Trace:** F04, F05, F07. **Files:** mapped decorative/layout styles, skill assets and project-link styles.

**Interfaces:** Preserve the existing content/theme components; background decoration cannot enlarge document width.

- [ ] Reproduce overflow at 375px and 768px and identify the actual oversized rendered elements locally.
- [ ] Constrain decoration in its own container and fix content wrapping separately. Do not conceal meaningful content with blanket overflow hiding.
- [ ] Replace failing remote skill icons with licensed local SVGs or existing bundled icons. Keep readable skill names if an image fails.
- [ ] Make project links visible on touch and keyboard focus; add clear `:focus-visible` styling rather than requiring hover.
- [ ] Respect `prefers-reduced-motion` for decoration and scrolling.
- [ ] Verify `scrollWidth <= clientWidth` at 320px, 375px, 768px and 1440px. Check 400% zoom from a 1280px viewport, long tags and long titles without hidden content.
- [ ] Tab through navigation, hero, projects and contact in both themes. Confirm focus remains visible and unobscured, icons load and project lazy loading still works.
- [ ] Commit after these checks pass.

**Acceptance:** No horizontal page scrolling at tested sizes, failed skill icons or invisible focused links. This is targeted verification, not full WCAG certification.

## Task 3: Align content with senior fullstack work — next

**Trace:** F03, F08. **Files:** mapped hero, work-history, skills, credentials and contact content.

**Interfaces:** Content uses the owner identity from Task 1 and links major capabilities to Task 4’s evidence. Do not publish unsupported claims while evidence is pending.

- [ ] Show the exact requested role and concise hero copy proposed in the audit. Keep five years explicitly tied to total development experience. Primary actions: **View selected work** and **Download résumé**.
- [ ] Reduce the oversized greeting and excess spacing so role, useful summary and actions dominate the first screen. Preserve the portrait, blue identity and working themes.
- [ ] Add compact employment history using approved résumé titles/dates. For Softoio, describe user-reported React/Vue delivery, backend integrations, ERP/e-commerce/logistics work, payment integrations and AI-agent/RAG contributions with concrete responsibility wording.
- [ ] Use relevant keywords naturally where evidence supports them: **MyFatoorah, Clickpay, Axis, Paymob, payment gateway integration, logistics API integration, REST APIs, B2B platforms, RAG, LLM integration, pgvector, AI agents**. Do not add invented scale or percentages.
- [ ] Replace skill percentages with frontend, backend/APIs, data/messaging, AI/product integration, and delivery/tooling groups. List actual skills and link them to case studies instead of a large repetitive keyword block.
- [ ] Add compact education/credentials from the approved résumé, including the exact Law degree and Route diploma. Remove “Verified Developer” unless a genuine supporting credential can be linked.
- [ ] Change the freelancer-only contact heading to **Let’s build reliable products**, with a concise invitation for senior fullstack opportunities.
- [ ] Compare copy with the approved résumé and project evidence. Confirm frontend work and current project implementation details stay consistent across the site.
- [ ] Review mobile/desktop layout and commit the content update.

**Acceptance:** A visitor quickly understands the target role, overall experience, frontend/backend scope and commercial domains. No undefined proficiency percentages remain.

## Task 4: Replace placeholder links with useful case studies — next

**Trace:** F05, F08. **Files:** mapped catalogue/card component and static project pages.

**Interfaces:** Each project record provides `slug`, `title`, `status`, `workType`, `role`, `actualStack`, `summary`, `frontendContribution`, `backendContribution`, `evidence`, and optional shareable demo/repository links. Status distinguishes completed, in progress and prototype; work type distinguishes commercial/personal. These are content fields, not a mandated framework.

- [ ] Inventory the eight live projects and requested Node.js projects: actual stack, individual contribution, status, public-sharing permission, screenshots and verifiable results. Published marketing copy alone is not proof.
- [ ] Select 3–4 featured projects with the strongest evidence. Aim for a React logistics product, a Vue ERP/B2B product, an AI-agent/RAG product and demonstrable Node.js/NestJS work. Put remaining real work in a compact archive.
- [ ] Preserve requested names when included: **LedgerFlow — Event-Driven Fintech Platform**, **Nexus Core — Distributed Workflow Engine**, **Semsarco — AI-Driven Marketplace Discovery Platform**, **Food Sawa — Multi-Tenant Restaurant SaaS Platform**. Keep each project’s published stack and implementation details consistent across its card and case study.
- [ ] Simplify cards to title, one value statement, actual stack, personal role/status and a visible project-specific case-study link. Remove lengthy index-page highlight paragraphs.
- [ ] Create each case study with problem/users, personal responsibility, frontend behavior, backend design and one trade-off, integrations, testing/deployment actually used, screenshots/diagram, outcome/evidence and implementation status.
- [ ] Include demos/repos only where shareable. For private work, say the code is private and provide permitted anonymized evidence. Use specific observable outcomes when measurements do not exist.
- [ ] Replace every placeholder detail href with a real destination and identify its project in the accessible link name.
- [ ] Open each page by direct URL, refresh, go Back and follow Home in the built `/Portfolio/` site. Confirm no route/asset 404s, empty links, hidden touch actions or inaccurate status labels.
- [ ] Commit the case studies once evidence and public claims are reviewable.

**Acceptance:** Every displayed detail link reaches a substantive page. Featured work shows frontend delivery and backend reasoning without unsupported metrics or commercial claims.

## Task 5: Finish metadata, assets and contact reliability — after repairs

**Trace:** F10 and unverified contact flow. **Files:** mapped head/metadata, image assets and contact component/handler if present.

**Interfaces:** Metadata consumes the approved owner identity and role. Contact UI must match actual delivery capability.

- [ ] Set title to **Mohamed Kamal | Senior Fullstack Engineer | Node.js, NestJS, TypeScript** and write an accurate description that includes frontend scope.
- [ ] Add canonical `https://kamellion-dev.github.io/Portfolio/`, Open Graph title/type/URL/description and an absolute preview-image URL. Give detail pages appropriate metadata. Person structured data is optional and must contain verified facts.
- [ ] Replace oversized inline images with optimized responsive assets where the actual build supports them. Use explicit dimensions and lazy loading below the fold; prioritize the hero image appropriately.
- [ ] Measure before/after with the same lab device/network settings and available tooling. Do not use cached audit navigation timings as a benchmark or invent Core Web Vitals results.
- [ ] Inspect contact implementation. If no reliable delivery exists, remove the form and retain clear email/social links. If it exists, provide validation and honest pending/success/error states using established platform patterns.
- [ ] Test controlled delivery only with explicit authorization. Otherwise document it as unverified; do not imply a message was sent.
- [ ] Verify built metadata, anonymous public preview/PDF/image access and core navigation/theme behavior before committing.

**Acceptance:** Accurate share previews, working asset paths, measured performance changes and contact controls that reflect actual capability.

## Task 6: Verify the combined result before a separate release

**Files:** existing repository QA/release documentation and refreshed audit evidence. No new test framework is required for copy-only edits.

- [ ] Run the documented build and required checks; use existing regression-test infrastructure where appropriate for navigation behavior.
- [ ] Repeat visitor checks at 375 × 812, 768 × 1024 and 1440 × 1000 in both themes, plus 320px, 400% zoom, keyboard and reduced motion.
- [ ] Check internal/external links, direct detail-page reloads and current PDF content/filename from every entry point.
- [ ] Capture fresh screenshots and a mobile-menu/project-navigation recording. Mark F01–F10 passed, failed or unverified using actual evidence.
- [ ] Present the built preview and remaining limitations for review. Deployment occurs only as a separately authorized action after implementation; this plan does not publish changes.

**Acceptance:** Evidence supports the repaired behavior and professional claims; any unverified delivery/device/accessibility behavior is explicit.

## Dependencies and self-review

Tasks 1–2 restore basic access. Tasks 3–4 align positioning with supporting evidence. Task 5 follows stable content/assets; Task 6 verifies the combined result. Execute directly without subagents.

Self-review: F01–F10 are covered; functional repairs precede visual polish; all proposed public routes account for `/Portfolio/`; frontend evidence is retained; experience and project-status constraints are explicit. Source mapping remains a discovery prerequisite because the audit did not inspect the repository. No website implementation or deployment has occurred.
