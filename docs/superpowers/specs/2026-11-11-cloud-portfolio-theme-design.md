# Cloud Engineering Portfolio Theme Design

## Intent

Refresh Mohamed Kamal's portfolio with an original visual system inspired by the supplied cloud-infrastructure event artwork. The result should strengthen his senior full-stack and Node.js positioning without copying ScaleOps branding, event copy, or artwork.

## Goals

- Preserve the existing recruiter-focused page structure, content, portrait, project pages, navigation, and interactions.
- Use a deep navy/indigo canvas, highly readable off-white text, teal primary accents, and restrained violet/pink data-grid details.
- Add subtle translucent panels and technical system motifs without turning the portfolio into a gaming or conference-poster design.
- Keep body text at least 16px on mobile, maintain visible keyboard focus, respect reduced motion, and avoid horizontal overflow at 375px, 768px, 1024px, and 1440px.
- Keep the static HTML/CSS/JavaScript architecture and introduce no runtime dependency.

## Non-goals

- Do not use the supplied ScaleOps image as a literal background.
- Do not reproduce its logo, event copy, plane illustration, or exact composition.
- Do not restructure the portfolio, change project content, or replace the portrait.
- Do not add heavy animation, WebGL, GSAP, or external image services.

## Selected Approach

Apply a restrained cloud-engineering theme through the existing semantic CSS variables and component styles. Build the background from CSS radial gradients and a sparse pixel/data-grid pseudo-element, use teal for primary actions and status, retain violet/blue as supporting system colors, and reserve pink for tiny decorative data points. Use translucent surfaces with modest blur only on major cards and navigation.

## Alternatives Considered

- Literal background image: rejected because it contains another company's branding and event information and would weaken personal ownership.
- Full neon poster redesign: rejected because it would reduce recruiter readability and make the portfolio feel promotional rather than senior and credible.
- Restrained technical theme: selected because it creates the desired cloud-native mood while preserving clarity, performance, and professional credibility.

## UI/UX Pro Max Guidance Applied

- Dark technical palette with 4.5:1 minimum text contrast.
- IBM Plex Sans for body copy and JetBrains Mono for compact technical labels, with system-font fallbacks if web fonts are unavailable.
- Glass surfaces only where layered depth helps hierarchy.
- Minimum 44px touch targets, visible 2px focus indicators, 150–300ms interactions, and reduced-motion support.
- Responsive verification at 375px, 768px, 1024px, and 1440px.

## Success Criteria

- The visual theme is clearly inspired by cloud infrastructure and distributed systems but is original to Mohamed's portfolio.
- All existing automated tests pass.
- The home page and every project page retain complete content and working navigation.
- Screenshots show clean hierarchy and legible text in dark and light modes with no horizontal overflow.

