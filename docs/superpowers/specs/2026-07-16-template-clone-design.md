# Template Clone Design Spec

Date: 2026-07-16
Project: Mohamed Kamal Aldin portfolio redesign
Goal: Replace the current portfolio presentation with an exact visual clone of the approved `TEMPLATE` design while swapping in Mohamed Kamal Aldin's identity, content, links, and metadata.

## Objective

The homepage should match the reference template's look and feel as closely as possible. The final result should preserve the template's premium dark presentation, section pacing, rounded glass surfaces, accent colors, typography scale, and responsive behavior, while presenting Mohamed Kamal Aldin as the portfolio owner.

## Scope

In scope:
- Clone the full landing-page visual design from `TEMPLATE/Ahmed Qompoz _ Full Stack Web Developer Portfolio.html`
- Rework the current static site so the delivered page is maintainable inside this repository
- Replace all template-owner references with Mohamed Kamal Aldin branding and portfolio content
- Keep or recreate the template's section ordering, hero composition, card styling, spacing system, and responsive behavior
- Update metadata and social-preview titles to match Mohamed Kamal Aldin branding

Out of scope:
- Building a new CMS or admin workflow
- Reproducing template-specific backend behavior or dynamic routes from the original hosted site
- Preserving the current site's existing visual identity

## Reference Inputs

Primary visual reference:
- `TEMPLATE/Ahmed Qompoz _ Full Stack Web Developer Portfolio.html`

Bundled exported assets:
- `TEMPLATE/Ahmed Qompoz _ Full Stack Web Developer Portfolio_files/`

Current target page:
- `index.html`
- `assets/css/style.css`
- `assets/js/script.js`

## Recommended Approach

Use a hard-clone rebuild inside the current static project.

This means the implementation should treat the saved template as the source of truth for layout, visual hierarchy, color treatment, card language, and spacing, but should not simply ship the exported page unchanged. Instead, the page should be rebuilt or heavily cleaned within the repo's own HTML, CSS, JS, and asset structure so the code is understandable and local.

Why this approach:
- It produces the closest visual result
- It avoids leaving brittle export artifacts in production
- It keeps the page editable in the existing repo without depending on Next.js runtime output from the saved page

## Visual System

The redesign should preserve these core qualities from the template:
- Dark premium backdrop with subtle depth and layered surfaces
- Strong blue accent color used for badges, highlights, calls to action, borders, hover states, and shadows
- Bold editorial typography with oversized hero headings and compact uppercase metadata labels
- Large rounded card shapes with glass-like transparency, soft borders, and luminous hover states
- Spacious section rhythm with strong contrast between headline blocks and card grids
- A polished portfolio feel that reads as modern, high-end, and product-focused

## Page Structure

The cloned page should follow the template's content rhythm as closely as possible:
- Header / navigation
- Hero section
- About / introduction section
- Skills or expertise section
- Featured projects grid
- Supporting sections mirrored from the template where appropriate
- Contact / call-to-action footer area

If the template contains decorative or supporting sections that are part of the overall pacing, they should be retained in equivalent form unless they depend on unavailable external data.

## Content Mapping

Every visible identity element must be converted from the template owner to Mohamed Kamal Aldin:
- Page title
- Social metadata
- Nameplates and hero copy
- About copy
- Tech stack and expertise labels
- Project titles, descriptions, tags, badges, and links
- Contact methods
- Avatar, logo, and personal imagery where applicable

If template content has no direct Mohamed equivalent yet, use the best available content from the current repo and existing portfolio materials. The design clone takes priority, but unresolved placeholders should be avoided in the shipped page.

## Implementation Boundaries

The implementation should prefer:
- Local assets over remote runtime dependencies when practical
- Cleaned static HTML/CSS/JS over raw saved-page output
- Existing repo structure when it does not fight the design goal

The implementation should avoid:
- Leaving `_next`-style export artifacts, generated runtime fragments, or unrelated saved-page boilerplate in the final page
- Linking production behavior to the original template owner's URLs
- Mixing old and new design systems in the same page

## Interaction and Behavior

The cloned experience should preserve the template's interactive feel where feasible in a static site:
- Hover elevation and accent glow on cards and buttons
- Responsive navigation behavior
- Smooth section spacing and reveal pacing
- Project card emphasis and call-to-action treatments

Where the exported template relies on framework-generated behavior that does not translate directly, equivalent static behavior should be implemented rather than omitted outright if it affects the perceived design.

## Responsive Expectations

The final page must work well on:
- Desktop large screens
- Standard laptop widths
- Tablet widths
- Mobile portrait widths

Mobile behavior should preserve the same visual family, not degrade into a separate generic layout.

## Risks and Mitigations

Risk: The saved template includes export-only markup, scripts, and framework artifacts.
Mitigation: Use the template as a visual reference and asset source, but rebuild or aggressively clean the delivered page structure.

Risk: The current portfolio content may not map one-to-one with the template's original sections.
Mitigation: Preserve the template's section rhythm while adapting available Mohamed content into equivalent slots.

Risk: Exact visual cloning can conflict with existing CSS and JS.
Mitigation: Replace or isolate the current landing-page styling rather than trying to partially merge both systems.

## Verification Criteria

The redesign is successful when:
- The page reads as an exact visual clone of the reference template at a glance
- Mohamed Kamal Aldin appears consistently as the portfolio owner
- No template-owner identity or external template links remain, except where intentionally reused as neutral third-party resources
- The page remains responsive and visually coherent across desktop and mobile
- The delivered code lives cleanly in this repository and does not depend on the template's original framework runtime

## Testing Strategy

Implementation verification should include:
- Manual visual comparison against the saved template
- Responsive review at desktop and mobile widths
- Checks for leftover owner names, metadata, and links
- Basic interaction checks for navigation, buttons, project cards, and contact actions

## Deliverable

A redesigned portfolio homepage in this repository that visually matches the approved template as closely as possible while representing Mohamed Kamal Aldin end to end.
