# Four Credence systems pages

Implemented October 17, 2026 in the existing Next.js 16.4.2 App Router application, using the existing Tailwind v4 setup. No dependencies, configuration, or global CSS were changed.

## Reference evidence and assets

Inspected each public HTML response and its published JavaScript. This was source inspection, **not visual browser inspection**:

- https://www.growwithcredence.com/systems/linkedin/
- https://www.growwithcredence.com/systems/social/
- https://www.growwithcredence.com/systems/email/
- https://www.growwithcredence.com/systems/web/

All four use a hero, alternating four-stage execution timeline, dark founder/philosophy panel, floating booking button, and shared footer. Social, Email and Website additionally have a separate closing CTA. LinkedIn does not have that section in the accessible reference. All four hero badges say “System Status: Verified”; no additional Favikon badge or metric was invented.

Existing local asset inventory:

| Asset | Use |
| --- | --- |
| `public/credence/credence-logo.png` | Shared navbar |
| `public/credence/blossom-headshot.webp` | All four founder panels, original crop and grayscale treatment |
| `public/credence/fonts/inter.woff2` | Body/navigation font via `next/font/local` |
| `public/credence/fonts/outfit.woff2` | Heading font via `next/font/local` |

No new raster assets are needed. The blueprint grid, connectors, numbered nodes, card borders, glows, strike-throughs and arrows use Tailwind utilities and inline SVG geometry.

## Verified design details

These are source declarations, not rendered measurements:

- Background `#FAFAFA`, body brown `#3c2f21`, primary gold `#ffbc16`, dark panels `#1A1A1A`.
- Hero `pt-32 pb-16 md:pt-40 md:pb-24`; max-width 1152px container, 16px horizontal padding; content max-width 896px.
- Hero headings: 48/60/72px across default/sm/md, line-height .95, tight tracking; LinkedIn adds 96px at lg. Explicit reference line breaks retained.
- Hero body: 18/20/24px, gold 2px left rule and 24px inset, max-width 600px on LinkedIn and 650px on the other three.
- Social: green `#00c896` glow/status/portrait accents and struck-through opening line. LinkedIn: gold accents and only “invisible” struck through. Email: gold second line. Website: slate `#64748b` accents and 40px blueprint grid.
- Pipeline: 1024px container, `py-24 md:py-32`, stages separated by 64px/128px, left rail on mobile and central rail from md, alternating desktop cards. All 16 stage names, focus lines and content paragraphs retained.
- Cards: white, 32px corner radius, subtle border/shadow, gold tracing outline. Original desktop stage headings use 48px at lg in this implementation.
- Philosophy: original founder portrait, eyebrow, quote/heading, optional supporting text, “B.A” signature. LinkedIn highlights the last clause in gold. Social uses green accents; Website uses slate.
- Closing CTAs retain page-specific headings and body copy; button and floating CTA match the published gold pill treatments.
- Shared footer retains published availability text, service links and copyright. Original heading font-weight overrides were reproduced with Tailwind descendant utilities.

## Architecture and navigation

The four explicit route files retain distinct hero markup and section composition; page content lives separately in `system-data.ts`. Presentation is split into SystemHero, ActionPipeline, SystemPhilosophy, SystemCTA, SystemShell and SystemMotion. `app/systems/layout.tsx` loads local fonts and applies shared Tailwind typography/focus/reduced-motion utilities.

Existing Header, Footer, ServicesNavigation, MobileNavigation and CredenceInteractions are reused. Homepage cards, footer service links and desktop/mobile navigation now resolve to local system routes. The service dropdown marks the current page. Mobile navigation exposes all four service links and scrolls when needed. The existing 1000px navigation breakpoint is retained.

All CTAs use the existing booking dialog and its actual published destinations:

- Free: https://calendly.com/growwithcredence/30min
- Paid: https://www.coachli.co/blossomaffia/session/pick-my-brain-in-60-minutes?id=8446

The dialog now accepts a booking persona (LinkedIn, Social, Email or Web), reproduces the published system-specific challenge choices, and carries that context into the calendar URL. General remains the default for homepage/contact. Changing systems remounts the interaction subtree so stale animation elements and booking state are discarded.

## Animation approach

GSAP is not installed and was not added. Published source uses Motion-style hero reveals and scroll-driven timeline progress. The implementation uses:

- Tailwind/tw-animate-css hero entrance: 800ms fade/30px approximate rise, matching the published .8-second ease-out intent.
- Existing CSS transitions for button hover and the status pulse.
- A scoped client effect with passive scroll events and requestAnimationFrame, advancing explicit Tailwind classes/data attributes for rail fill, connectors, node activation, card emphasis and SVG border tracing.
- Four stage phases and 5% rail progress increments. This approximates the reference's continuous scrub; it does not claim identical motion.
- Reduced-motion utilities plus a media-query listener that removes progress/phase states when motion is reduced. The effect cancels its frame, removes listeners and resets elements on cleanup.

No new custom CSS rules, CSS modules, styling libraries, React inline visual styles, or dynamically generated Tailwind class names were introduced. Content is rendered visibly by default and remains available without JavaScript. Pipeline description text is never hidden by the animation effect.

## Validation and practical limits

Passed:

- Production build: all four system routes statically prerendered, existing homepage/contact retained.
- `npx tsc --noEmit --incremental false`.
- ESLint for all new and modified components/routes.
- Production HTTP 200 for all four routes with trailing slash, plus `/` and `/contact`.
- Rendered HTML assertions for full page-specific copy, four stages, one h1, expected section counts, current service navigation and local links.
- HTTP checks for referenced local logo/portrait, font and stylesheet assets; generated CSS includes timeline and blueprint utilities.
- Simulated booking-handler checks for all four personas plus General, both free/paid destinations, and encoded name/email/context. No external booking or submission was performed.
- Simulated animation checks for phase/fill updates, reduced-motion reset and listener cleanup. These are not browser interaction tests.
- Git whitespace check and source review of task-specific changes. Existing unrelated homepage/configuration working-tree changes were preserved.

Full-project `npm run lint` still fails only at the existing `components/ui/carousel.tsx:98` `react-hooks/set-state-in-effect` error. That unrelated component was not modified.

Browser discovery returned no available browser. Screenshots, console errors, actual desktop/tablet/mobile rendering, keyboard interaction, pixel comparison and live calendar navigation remain **unverified**. Source-level responsive rules were reviewed; pixel-perfect fidelity is not claimed.

Intentional differences/estimates: stage padding and type are reduced on narrow screens/tablets to accommodate long names; founder panel padding is 32px on mobile versus the source's 48px; timeline progress is stepped rather than continuously scrubbed; descriptions remain visible during timeline progression. The existing project targets the light theme and does not expose the reference's theme switch. Shared mobile navigation uses the existing native dialog rather than recreating the reference overlay animation.

## Changed files

- `app/systems/layout.tsx`
- `app/systems/linkedin/page.tsx`
- `app/systems/social/page.tsx`
- `app/systems/email/page.tsx`
- `app/systems/web/page.tsx`
- `components/credence/systems/system-data.ts`
- `components/credence/systems/system-hero.tsx`
- `components/credence/systems/action-pipeline.tsx`
- `components/credence/systems/system-philosophy.tsx`
- `components/credence/systems/system-cta.tsx`
- `components/credence/systems/system-motion.tsx`
- `components/credence/systems/system-shell.tsx`
- `components/credence/sections.tsx`
- `components/credence/interactions.tsx`
- `docs/credence-systems.md`

Dependencies added/removed: none. Qualifying Next.js feedback candidates from this task: none.
