# Navbar scrolling and contact entrance fixes

## Cause and navigation behavior

The navbar links already pointed to the correct routes and the homepage IDs (`services`, `gap`, `proof`) were valid and unique. The added Lenis provider did not coordinate hash navigation: Lenis anchor handling defaults to disabled, while the provider's ScrollReset sent every changed pathname to zero even when the URL requested a section. Neither the root nor contact page had a native smooth-scroll fallback.

The existing Lenis setup is retained. HashNavigation now coordinates native hrefs with Next.js:

- Unmodified same-route anchor clicks update browser history and scroll to the actual target, including repeated clicks on the current hash. Modified clicks, external links, downloads and new-tab links retain their normal behavior. Keyboard activation produces the same click path.
- Header, mobile and footer section Links use `scroll={false}` so Next.js does not issue a competing automatic scroll. Other routes, including Home, Contact and individual systems pages, retain their destinations and normal Next.js navigation.
- On a changed pathname, direct hash visit, hashchange or popstate, the provider checks the current hash after a frame. If route content has not mounted, a MutationObserver waits for the exact ID. It disconnects after success, and pending work/listeners are cleaned up on a new hash, route change or unmount. There is no fixed-delay mount assumption or unconditional reset to zero.
- Target focus is moved without a second scroll; temporary tabindex is removed afterward. Lenis uses each target's computed CSS scroll margin. Homepage anchors and the new `contact-form` target use Tailwind `scroll-mt-[120px]`, leaving clearance for the fixed header at all existing breakpoints.
- The document uses `scroll-smooth motion-reduce:scroll-auto` with Next.js's `data-scroll-behavior` attribute. Without JavaScript, real hrefs and CSS offsets remain available. Reduced-motion requests make coordinated scrolling immediate and disable contact animations.

`/contact#contact-form` now resolves to a real target. The navbar Contact item intentionally remains `/contact`, matching its existing destination.

## Contact animations

No GSAP or new dependency was added. Existing Tailwind v4 and tw-animate-css provide 500ms ease-out entrances:

- Heading: fade and 16px rise.
- Supporting text/email: fade and 12px rise, delayed 75/150ms.
- Fields: 12px rise from 75% opacity, staggered at 100/175/250ms.
- Submit button: the same restrained entrance at 325ms, with immediate hover shadow and visible keyboard focus.
- Footer: once-only 12px rise from 75% opacity when its wrapper enters the viewport, using a small IntersectionObserver boundary. Its baseline is visible if JavaScript or observation is unavailable.

Backward fill prevents a flash before delayed entrances; completed animations return to the original appearance. Fields remain enabled, focusable and interactive throughout. No layout spacing, form validation, delivery status or content changed. All new styling uses Tailwind utilities; no global CSS rules, inline visual styles or component stylesheets were added.

## Changed files

- `providers/smooth-scroll-provider.tsx`: replace ScrollReset with scoped hash coordination.
- `app/layout.tsx`: native smooth-scroll/reduced-motion utilities.
- `components/credence/sections.tsx`: prevent competing hash scrolls; add target offsets.
- `components/credence/interactions.tsx`: coordinate desktop/mobile hash Links.
- `app/contact/page.tsx`: staggered hero/info entrances and footer boundary.
- `components/credence/contact-form.tsx`: form anchor, field/button entrances and focus feedback.
- `components/credence/contact-footer-reveal.tsx`: once-only footer reveal with cleanup.
- This report.

## Validation

- Production build and explicit TypeScript check passed; homepage, contact and all four systems routes remain available.
- Changed-file ESLint passed. Full lint still reports only the pre-existing `components/ui/carousel.tsx:98` set-state-in-effect error.
- Production HTTP/navigation checks passed on all six routes. Target IDs are unique, offsets are present, the contact form remains enabled, and generated CSS includes the requested animation/stagger/reduced-motion utilities.
- Simulated hash-coordinator checks passed: same-page/repeated clicks, history updates, focus handling, modified/external links, cross-route handoff, delayed target mounting, direct visits, reduced motion, malformed/missing hashes and cleanup.
- Simulated footer checks passed: visible baseline, viewport activation, observer disconnection, cleanup and reduced-motion bypass.
- Git whitespace check passed. Existing working-tree changes and dependencies were preserved.

Browser discovery returned no available browser. Actual scroll position, responsive visual rendering, keyboard interactions, animation appearance and browser console output could not be verified. The checks above establish implementation and generated-output behavior, not visual browser results. No qualifying Next.js feedback candidates were retained.
