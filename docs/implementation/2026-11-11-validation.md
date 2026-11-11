# Portfolio validation

Date: 11 November 2026. Scope: desktop browser automation and Node.js static release checks, with no subagents.

## Automated release checks

`npm run check` builds five HTML pages and runs five Node.js tests:

1. One main heading and unique IDs on each page.
2. Every published internal link, local asset and fragment resolves.
3. Local, named images with explicit dimensions.
4. Named mobile-menu controls and real PDF assets on all pages.
5. Only the four selected personal-project routes; no commercial showcases or development files in public output.

The original exported homepage failed three baseline checks. The final suite passes all five. `git diff --check` is clean. Syntax checks passed for the renderer and browser JavaScript.

## Browser checks

Served `_site` under `/Portfolio/` to exercise the production base path. Checked the homepage and all four project routes at 320, 375, 768 and 1440px: all 20 route/viewport combinations fit without horizontal document overflow, and no local image failures were observed.

Verified menu expansion, focus transfer to navigation, Escape closure with focus restoration, closure after selecting Work, working hero anchor, real project navigation and reload, light-theme persistence across reload, and reduced-motion media behavior. Reviewed desktop/mobile screenshots, including both themes. Browser console/error capture was empty in the observed final flows.

Downloaded preview PDF is identical to the approved final résumé. Its text includes the exact Senior Fullstack Engineer title, five-year overall experience and German A1.

Evidence screenshots, recordings and route measurements are retained locally in `X:\CV Makeover\output\portfolio-implementation`. Reference screenshots are from the owner-requested public reference site and are not published as portfolio assets.

## Limits

No contact message was sent. Real-device testing, a complete screen-reader pass, formal WCAG conformance, measured contrast, actual 400% browser zoom and field Core Web Vitals are outside these checks. No benchmark, production-usage metric or accessibility score is fabricated.

## Release

The GitHub Pages workflow builds and checks before publishing only `_site`. Deployment result is reported in the final user response after push and live verification.
