# Contact page

Implemented `/contact` in the existing App Router project with Tailwind v4 utilities. No packages, global CSS rules, CSS modules, component stylesheets, or inline visual styles were added. Existing homepage work was preserved.

## Reference evidence

Public HTML inspected on October 17, 2026:

- Contact: https://www.growwithcredence.com/contact/
- Homepage: https://www.growwithcredence.com/

Verified source values (these are HTML utility declarations, not browser measurements):

- Fixed header: `top-6`, `max-w-5xl`, `px-4`; pill navigation with `py-3`, translucent white background, blur, subtle border and shadow. Contact has the gold active underline.
- Main: `pt-32 pb-24 px-4 sm:px-6`; centered `max-w-lg` content. Background `#FAFAFA`, body text `#3c2f21`, heading `#1a1a1a`, gold `#ffbc16`.
- Heading: “Let's talk.”, `text-4xl sm:text-5xl`, Outfit. Introduction and email: `text-lg font-medium opacity-70`, email `hello@growwithcredence.com` (also verified against the unobfuscated footer mailto link).
- Card: white, `rounded-[2rem] p-8 sm:p-10 shadow-xl border border-black/5`.
- Name and Business Email: required text/email inputs, placeholders `Jane Doe` and `jane@company.com`.
- Inquiry: required textarea, placeholder `How can we help you?`, `min-h-[120px] resize-none`. There are **no inquiry dropdown options**.
- Fields: `rounded-xl px-4 py-3.5`, pale gray background, subtle borders, gold focus border/ring. Labels: `text-sm font-bold`, 6px bottom margin.
- Button: “Send Message”, full width, gold, `py-4 rounded-xl text-lg font-bold`, hover shadow.
- Footer matches the shared homepage footer: brown background, responsive grid, Explore/Services columns, published availability copy and copyright.

The implementation reuses the project's original logo, Inter and Outfit files, shared Header, Footer, mobile navigation, service navigation, and booking flow. Fonts are loaded through `next/font/local` for this route; the contact page does not import the homepage custom stylesheet. The existing booking dialog now has equivalent Tailwind utilities, including its progress indicator, so it works on this route without that stylesheet.

## Integration and accessibility

There is no contact API, server action, or delivery service in the project. The form deliberately makes **no network submission** and never claims delivery or success. A visible integration notice and mailto alternative appear below the button. Valid submission displays an accessible delivery-unavailable alert and retains all values. Repeated submissions cannot create duplicate deliveries because no delivery request is made. Loading, asynchronous duplicate guards, and success feedback should be added together with a real backend, once its response contract exists.

All fields have explicit labels, required attributes, email input semantics, autocomplete where appropriate, field-specific errors via `aria-describedby` and `aria-invalid`, and focus moves to the first invalid field. Whitespace-only values are rejected. Keyboard focus indicators cover links, buttons and controls; the page includes a skip link. Shared dialogs retain native Escape/focus behavior.

## Differences and verification

- Desktop navigation switches at 1000px rather than the reference's `md` breakpoint, to avoid squeezing the logo, links and booking button on tablets. Mobile navigation is available below that width.
- The delivery notice, validation messages, and failure alert add space relative to the reference. The introduction retains the reference's response-time wording; the notice explains that this local form cannot deliver messages yet.
- Entrance animation is omitted. Only the light reference theme is targeted.
- Screenshot comparison, rendered dimensions, mobile overflow, keyboard interactions, and browser email validity were **not verified**: browser discovery returned no available browser. No claim of pixel-perfect accuracy is made.
- Production build passed and prerendered `/contact`.
- TypeScript check passed. ESLint passes for all changed page/component files. Full project lint remains blocked by the pre-existing `react-hooks/set-state-in-effect` error in `components/ui/carousel.tsx:98`; unrelated code was left alone.
- Production HTTP checks returned 200 for `/` and `/contact`, and confirmed the fields, textarea, email, active navigation, and backend notice in the rendered HTML.
- Form-handler checks passed for empty fields, whitespace-only values, invalid email validity, required inquiry, delivery-unavailable feedback, retained values, and repeated submissions. These used simulated controls, not a browser DOM or email delivery service.
- Git whitespace check passed. The working tree already contained homepage and configuration changes before this task; no dependencies or unrelated global styles were changed by this task.

Changed files: `app/contact/page.tsx`, `components/credence/contact-form.tsx`, shared `components/credence/sections.tsx` and `components/credence/interactions.tsx`, and this document.
