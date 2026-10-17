# Credence homepage audit and reproduction notes

Inspected 2026-10-17. Reference: https://www.growwithcredence.com/

## Evidence and confidence

Verified means found in publicly served HTML, CSS, JavaScript, font files, or downloaded image metadata. It does not mean visually measured in a browser or independently verified as a business claim. No reference screenshots were supplied or captured. No rendered visual comparison was possible: the browser connector returned no available browsers, no Playwright/Puppeteer package was installed, and automatic approval review blocked launching headless Chrome. No access restrictions were bypassed.

Public source evidence:

- HTML: https://www.growwithcredence.com/
- CSS: https://www.growwithcredence.com/_next/static/chunks/673b56cef21068b2.css
- Homepage content and interactions: https://www.growwithcredence.com/_next/static/chunks/1234cc7f4bc8ec45.js
- Booking interaction: https://www.growwithcredence.com/_next/static/chunks/c3af5886ed296905.js

Hashed source URLs may change when the reference deploys. The implementation contains local TSX, local fonts and local images; it does not fetch the reference at runtime or execute its scripts.

## Existing architecture

- Next.js 16.4.2, React/React DOM 19.3.0, TypeScript 5, App Router.
- `/` is `app/page.tsx`; root layout is `app/layout.tsx`; global stylesheet is `app/globals.css`. Before implementation the homepage was the Next.js starter page. There were no other application routes.
- Tailwind 4 uses the existing `@tailwindcss/turbopack` setup. No separate Tailwind configuration file. Global CSS contains shadcn neutral OKLCH tokens, dark variants, 0.625rem base radius, and animation imports.
- Existing root layout loads Geist and Geist Mono. Homepage-specific Inter/Outfit rules override typography only within the homepage and its booking dialog.
- Existing UI: shadcn radix-nova button/card/carousel/checkbox/input/empty components; Radix UI, Lucide, Embla, class-variance-authority, cn, tw-animate-css. No installed Framer Motion, Playwright or Puppeteer resolved during inspection.
- Initially public contained next.svg, vercel.svg, file.svg, globe.svg and window.svg; the default app favicon remains.
- Initial uncommitted changes: app/globals.css, package.json, package-lock.json; untracked components.json, components/ui/*, lib/utils.ts. These were preserved. Running the authorized dev script additionally generated a feedback instruction block in AGENTS.md; this was left in place as that file instructs.
- Existing next.config.ts options (cacheComponents, partialPrefetching, agentFeedback, CSS loader) and dependencies remain unchanged.

## Verified tokens

Values below use the reference stylesheet's 16px root and 0.25rem spacing unit. They are source values, not rendered measurements.

| Category | Verified values |
| --- | --- |
| Body font | Inter variable, normal, weights 100–900; Arial/Helvetica fallback |
| Heading font | Outfit variable, normal, weights 100–900; Arial fallback |
| Heading weights | Reference unlayered `h1,h2,h3,h4,h5,h6 {font-weight:700}` overrides layered Tailwind `font-black` utilities; other text can still use 500, 600, 700, 900 |
| Hero typography | 48px base, 60px from 640px, 88px from 768px; line-height 1.05; tracking -0.05em; balanced text; accent phrase nowrap |
| Typical section headings | 36/60px or 48/72px base/desktop, depending on section; manifesto up to 72px at 1024px |
| Body scale | 16px/1.5 or 1.625; lead 18/20px or 20/24px; labels 10–14px with uppercase tracking 0.1–0.25em |
| Colors | Page #fdfdfd; text #1a1a1a; audience #f9f9f9; gold #ffbc16; gradient end #d28a2d; deep brown #3c2f21; terracotta #a45f41; muted brown #733d1a; sand #cb9678; ranking background #111111 |
| Secondary colors | Favikon #00c896; numeris mark #3b82f6; testimonial verification #10b981 |
| Borders | Usually 1px black at 5%, sometimes 3% or 10%; dark panels white at 5–20%; services have a 4px top border |
| Containers | Hero/manifesto 1280px; most content/footer 1152px; header/hero inner/rankings 1024px; FAQ 896px; hero paragraph 672px |
| Horizontal padding | Main sections 16px base, 32px at 768px; hero/footer 24px; header outer 16px, inner 16/24px |
| Major vertical rhythm | Audience/gap/services/FAQ 128px base and 160px at 768px; manifesto 80/96px; founder 64px; rankings 96/128px; testimonials 96px; final CTA outer 48px, bottom margin 96px; footer 64/96px |
| Header | Fixed top 24px; nav vertical padding 12px; logo height 40/48px; pill radius; 1px border; backdrop blur; shadow-sm |
| Hero | Main top padding 48px; hero top padding 110px base/112px desktop; desktop top margin 64px; min-height 65vh; bottom padding 16px |
| Buttons | Pill radius; hero padding 16px vertical/40px horizontal, text 16px/24px, resulting height 56px; nav padding 8px/20px, text 14px/20px, resulting height 36px; final CTA padding 20px/40px, text 18px/28px, resulting height 68px |
| Cards | Audience radius 40px/padding 40px/gap 32px; services radius 40px/padding 32/40px/gap 24/32px/min-height 380px; gap radius 48px/padding 40/56px/min-height 400px; founder outer radius 48px |
| Shadows | Audience `0 4px 20px rgba(0,0,0,.03)`, hover `0 20px 40px rgba(0,0,0,.08)`; manifesto `0 30px 60px -15px rgba(0,0,0,.5)`; additional Tailwind shadow-sm/lg/xl/2xl |
| Breakpoints | sm 640px; md 768px; lg 1024px; Tailwind also defines xl 1280px and 2xl 1536px |

## Estimates and unknowns

- Exact rendered heights, line wrapping, antialiasing, screenshot alignment, intermediate tablet overflow and perceived shadows are unverified.
- Source reveals Framer Motion entrances, springs, carousel transitions and moving testimonial columns. Local CSS/IntersectionObserver approximates animation easing without adding dependencies. Entrance threshold and exact spring motion are estimates.
- Mobile menu and booking dialog visual parity are unverified. The country field currently uses a text input with common-country suggestions instead of the reference's long country select.
- No video or additional image is required by the inspected homepage source. This is not proof that other versions or remotely injected content never exist.
- Source business claims, testimonial labels, ranking claims and Q1 availability text are reproduced as published; their current business accuracy is unknown.

## Section specification, in page order

| Order | Section | Verified layout and hierarchy | Responsive behavior / interaction | Confidence and open issues |
| --- | --- | --- | --- | --- |
| 0 | Header | Fixed 1024px centered pill; logo left; Home, Services, The Gap, Results, Contact; gold booking button right | Source hides desktop links and CTA below 768px; mobile menu button; service submenu; local section anchors | High source confidence; menu overlay appearance and tablet fit need rendering |
| 1 | Hero, statistics, trusted brands | Centered badge, one h1 with gold gradient phrase, lead paragraph, CTA, three inline statistics, divider, trusted-brand row; glow and desktop authority badge | 48/60/88px heading; stats and brand row wrap; authority badge hidden below 768px | High; exact text wrapping needs matching screenshots |
| 2 | Who We Serve | Full-width pale gray band; centered label/h2/lead; four white cards with icon, h3 and paragraph | One column base, two at 768px, four at 1024px; icon scale/card shadow on hover | High |
| 3 | Manifesto | Brown inset rounded panel, label, large h2, two staggered statements, divider and serif quote; faint SVG wave and blurred orbs | Statements each half-width desktop; second aligned right and lower; left-aligned stacked mobile | High layout; entrance motion estimated |
| 4 | The Gap | Label, h2, lead; two comparison cards in 5:7 grid; arrow and dot controls beneath | Single column below 768px; three verified slides; hover lift; slide transition | High copy/layout; CSS easing differs from Framer Motion |
| 5 | The 4 Credence systems | Centered h2, four cards: LinkedIn, Social Media, Email, Website; system number, optional Favikon badge, h3, description, deliverable, link | One column base, two from 768px; colored top borders and hover effects | High; links intentionally use live reference subpages |
| 6 | Founder | 1:1 grid; brown portrait panel left; founder badge, h3 quote, paragraph and identity row right | Single column mobile; portrait max-width 280px at 3:4; object-position 70% 20%; small matching avatar; hover scale/grayscale | High; native portrait is 769×1024 |
| 7 | Independent ranking evidence | Full-width near-black; left-aligned h2/lead; three ranking cards; note beneath | Stacked mobile; equal thirds desktop with center scaled 1.12, sides rotated ±1 degree and translated inward; hover scale | High; two original JPEGs are intentionally blurred in the source |
| 8 | Client testimonials | Brown band; centered label/h2/lead; white rounded verified-review cards | Source animation height 600px mobile, 800px desktop; one column mobile, two tablet, three large; 40/20/25/22-second vertical loops | High public JS copy/layout; no independent testimonial verification; animation frame matching unknown |
| 9 | FAQ | 896px container; label/h2, four native details/summary rows and link to full FAQ | Keyboard-operable native accordions; open styles and rotating chevron; same single column | High; browser interaction not executed |
| 10 | Final CTA | 1152px outer container; rounded brown/glow panel; centered h2, paragraph, gold CTA, availability pill | Padding 24/40/80px by breakpoint; text 36/60px; CTA sizing from source | High; published availability may be stale |
| 11 | Footer | Brown full-width band; brand description and availability left; Explore and Services right; bottom copyright/email row | 12-column desktop with 5-column brand, 2-column spacer, 2+2 link columns; single-column mobile; copyright row stacks | High; original source widths/spacing retained |

Booking CTAs open a local native dialog. Public source confirms free audit and paid strategy pathways, contact/role/business/challenge questions, then navigation to https://calendly.com/growwithcredence/30min or https://www.coachli.co/blossomaffia/session/pick-my-brain-in-60-minutes?id=8446 . The implementation forwards the same context fields only when the visitor submits. No bookings were submitted during development.

## Asset manifest

Machine-readable URLs, local paths, byte counts and measured dimensions are in `credence-assets.json` beside this file.

| Purpose | Source path on reference origin | Local path | Verified dimensions / use |
| --- | --- | --- | --- |
| Logo | /credence-logo.png | public/credence/credence-logo.png | Native 888×352; reference HTML declares 220×55; responsive rendered height 40/48px |
| Founder portrait and avatar | /blossom-headshot.webp | public/credence/blossom-headshot.webp | 769×1024; large 3:4 crop, avatar square crop |
| Marketing ranking | /favikon/cropped/image-2-blurred.jpg | public/credence/favikon/cropped/image-2-blurred.jpg | 885×500, original intentional blur |
| Overall ranking | /favikon/cropped/image-1.jpg | public/credence/favikon/cropped/image-1.jpg | 858×490 |
| LinkedIn ranking | /favikon/cropped/image-3-blurred.jpg | public/credence/favikon/cropped/image-3-blurred.jpg | 756×480, original intentional blur |
| Inter Latin variable | /_next/static/media/83afe278b6a6bb3c-s.p.3a6ba036.woff2 | public/credence/fonts/inter.woff2 | 100–900 normal |
| Outfit Latin variable | /_next/static/media/1b99372b3eaef0c8-s.p.758e15a8.woff2 | public/credence/fonts/outfit.woff2 | 100–900 normal |
| Trusted brands and section icons | Inline HTML/SVG | components/credence/sections.tsx | The reference itself uses text and simple marks for the brand row; no missing brand image substitutions |

All seven downloaded assets responded successfully from the public reference and local server. No unrelated stock images or temporary image placeholders were used. Public accessibility does not establish an asset license; no licensing information was found in the inspected source.

## Implementation blueprint and change boundary

- `app/page.tsx`: server page composition and page-specific metadata, maintaining `/`.
- `app/credence.css`: scoped font faces, reference heading cascade, animation substitutes, dialog styling and accessible focus/reduced-motion rules. Existing global tokens are untouched.
- `components/credence/sections.tsx`: server-rendered section components preserving source Tailwind classes and inline decorative SVGs. Uses Next Image and Link.
- `components/credence/reference-data.ts`: exact published carousel/testimonial data.
- `components/credence/gap-carousel.tsx`: small stateful client carousel.
- `components/credence/testimonials.tsx`: reusable server-rendered review cards and CSS-driven columns.
- `components/credence/interactions.tsx`: client booking context/dialog, mobile navigation and entrance observer. Only interactive boundaries use `use client`.
- `public/credence/*`: locally served original assets.
- No packages added or removed. No existing UI component rewritten. Original routes/config/layout preserved. Reference-only contact, FAQ and system routes remain external links rather than introducing extra local routes.

Recommended refinement order: rendered desktop/mobile capture; structural comparison; typography and hero wrapping; tablet navbar fit; card/image/footer measurements; dialog/menu parity; motion tuning; final route/lint/type/build regression pass.

## Validation and remaining risks

- `npx tsc --noEmit --incremental false`: passed.
- `npx eslint app/page.tsx components/credence`: passed.
- `npm run build`: passed; `/` statically prerendered, standard not-found route retained.
- `npm run lint`: existing `components/ui/carousel.tsx:98` fails `react-hooks/set-state-in-effect`; homepage files pass. Existing component left untouched.
- GET `/`: HTTP 200. HTML confirms ten sections in reference order, four FAQs, six image occurrences, no `href="#"` or javascript links. Seven local original image/font URLs return HTTP 200 with expected MIME types.
- `git diff --check`: passed.
- No screenshots captured; neither 1440×900 nor 390×844 was visually tested. No browser console, runtime click, touch or keyboard interaction tests were possible. Source review does not replace them.
- Existing favicon remains the starter favicon. Root Geist resources remain as required by existing architecture, although homepage fonts are separately loaded. Native dialogs, focus handling and reduced-motion alternatives intentionally use platform APIs; their visuals and exact reference animation behavior remain unverified.
- Source fidelity is strong; pixel-level fidelity is not established. The next required evidence is screenshots of both sites at the same viewport dimensions.
