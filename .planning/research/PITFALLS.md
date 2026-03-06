# Domain Pitfalls

**Domain:** Single-page SaaS marketing website (Next.js 15 + Tailwind v4 + HeroUI + Motion)
**Researched:** 2026-03-06
**Confidence:** HIGH

## Critical Pitfalls

Mistakes that cause rewrites, major delays, or broken deployments.

### Pitfall 1: Tailwind v4 Configuration -- Wrong Syntax Everywhere

**What goes wrong:** Mixing Tailwind v3 and v4 syntax. Using `@tailwind base; @tailwind components; @tailwind utilities;` directives (v3) instead of `@import "tailwindcss"` (v4). Using `tailwind.config.js` for theme values instead of `@theme {}` in CSS. Keeping autoprefixer in PostCSS config (causes duplicate prefixes).

**Why it happens:** Most tutorials, Stack Overflow answers, and AI training data reference Tailwind v3. The v4 paradigm shift (CSS-first config) is genuinely different. The old syntax silently fails or produces incomplete output.

**Consequences:** Styles silently fail to apply. Build succeeds but components look unstyled. Brand tokens in JS config don't propagate to HeroUI components. Hours debugging "why isn't my color working?"

**Prevention:**
- Use `@import "tailwindcss"` as the ONLY Tailwind import
- Define all custom design tokens in `@theme {}` in globals.css
- Use `@tailwindcss/postcss` as the PostCSS plugin (NOT `tailwindcss`)
- Remove autoprefixer entirely
- For gradients: use `bg-linear-to-r` (v4) not `bg-gradient-to-r` (v3 alias)
- For arbitrary shadow values: use `_` for spaces (e.g., `shadow-[0_4px_12px_rgba(0,102,255,0.07)]`)

**Detection:** If you see default browser styling or default Tailwind blue instead of brand colors, the theme config is wrong.

### Pitfall 2: HeroUI + Tailwind v4 Plugin Setup

**What goes wrong:** HeroUI components render as unstyled HTML. Colors, border-radius, spacing all revert to browser defaults. Navbar loses blur. Buttons look plain.

**Why it happens:** HeroUI's Tailwind plugin must be loaded via the CSS-first `@plugin` directive, not the old `tailwind.config.js` plugins array. You also need a `@source` directive pointing to HeroUI's theme dist folder and a `@custom-variant dark` declaration. Missing any one of these causes silent style failures.

**Consequences:** Every HeroUI component is broken. Entire UI needs to be debugged.

**Prevention:**
1. Use HeroUI `@heroui/react` version 2.8.0+ (confirm with `npm ls @heroui/react`)
2. Create `hero.ts` at `src/app/hero.ts`: `import {heroui} from "@heroui/react"; export default heroui();`
3. In `globals.css`:
   ```css
   @import "tailwindcss";
   @plugin './hero.ts';
   @source '../../node_modules/@heroui/theme/dist/**/*.js';
   @custom-variant dark (&:is(.dark *));
   ```
4. Test every HeroUI component visually after setup before building sections

**Detection:** Components render as plain unstyled HTML elements.

### Pitfall 3: Installing framer-motion Instead of motion

**What goes wrong:** `npm install framer-motion` with React 19 fails or requires `--legacy-peer-deps`. Importing from `framer-motion` (old path) while having `motion` installed doubles the bundle.

**Why it happens:** "Framer Motion" is the well-known brand. Most tutorials reference the old package name. The rename to `motion` with `motion/react` import path happened recently.

**Consequences:** Peer dependency errors block installation. Or: silent double-bundling of the animation library. Or: features not working correctly with deprecated package.

**Prevention:**
- Install: `npm install motion` (NOT `framer-motion`)
- Import: `import { motion } from 'motion/react'` (NOT `'framer-motion'`)
- Check package.json -- if `framer-motion` is present, replace with `motion`

**Detection:** Peer dependency warnings mentioning React version. Bundle analysis showing two animation libraries.

### Pitfall 4: 'use client' Boundary Sprawl

**What goes wrong:** Marking page.tsx or layout.tsx as Client Components. Or: every section component marked 'use client' when only the animated parts need it.

**Why it happens:** Motion and HeroUI require client-side JavaScript. When anything in a component needs interactivity, developers put `'use client'` at the top without thinking about the blast radius.

**Consequences:** JS bundle balloons 2-3x. Initial page load slows. LCP drops. The site becomes a blank white page until JS hydrates.

**Prevention:**
- Never put `'use client'` in layout.tsx or page.tsx
- Create a providers/HeroUIProvider.tsx with 'use client' and wrap children
- Each section that needs animation gets its own 'use client', but extract static text into server-rendered wrappers where possible
- Footer should remain a Server Component
- Audit: total JS bundle should be under 200KB gzipped for a marketing page

**Detection:** Check for `'use client'` in page.tsx/layout.tsx. Run `next build` and check bundle sizes.

## Moderate Pitfalls

### Pitfall 1: Hero Image LCP Failure

**What goes wrong:** Hero product screenshot or chat mockup uses `next/image` with default `loading="lazy"`. Since it IS the LCP element, lazy loading delays paint by 500ms-2s.

**Prevention:**
- Set `priority` on hero images: `<Image priority src={...} />`
- Only use `priority` on above-the-fold images (hero, navbar logo)
- Build chat mockup as styled HTML, not a rendered image

### Pitfall 2: Count-Up Broken with react-countup

**What goes wrong:** react-countup 6.5.3 has broken ref handling and scroll spy with React 19. Count-up doesn't trigger, or triggers immediately on page load.

**Prevention:**
- Do NOT use react-countup with React 19 / Next.js 15
- Use Motion's `animate()` function with `useMotionValue` + `useTransform`:
```typescript
const count = useMotionValue(0);
const rounded = useTransform(count, (v) => Math.round(v));
// Trigger with whileInView or useInView
```
- Or a simple custom hook with requestAnimationFrame

### Pitfall 3: Scroll Animation CLS

**What goes wrong:** Elements starting at `opacity: 0` and `translateY(30px)` cause Cumulative Layout Shift when they animate into final position. Multiple sections animating simultaneously cause jank on mobile.

**Prevention:**
- Always set `viewport={{ once: true }}` -- animate once, don't re-trigger
- Only animate `transform` and `opacity` (hardware-accelerated)
- Reserve space with explicit dimensions on containers before animation
- Use `will-change: transform` on heavily animated elements
- Stagger animations at 150ms (not 0ms)
- Test on throttled mobile (Chrome DevTools 4x CPU slowdown)

### Pitfall 4: Font Loading Flash (FOUT)

**What goes wrong:** Two custom fonts (Outfit + Inter) cause visible font swap on first load. Outfit has different metrics than system fallbacks, causing text reflow and CLS.

**Prevention:**
- Use `display: 'swap'` in next/font config
- Use variable fonts (both Outfit and Inter support this)
- Apply as CSS variables on `<html>`, reference in Tailwind `@theme`
- next/font self-hosts at build time -- no runtime Google Fonts requests

### Pitfall 5: Multiple Competing CTAs

**What goes wrong:** The brief specifies 5 CTAs: "Book a Demo," "See It In Action," "Try the AI" (nav), "Talk to the AI" (hero phone), plus the final form. Cold email visitors don't know which action matters. Research shows pages with multiple primary CTAs reduce conversion up to 266%.

**Prevention:**
- One primary action: "Book a Demo" -- all CTAs funnel here
- "See It In Action" scrolls to product overview (not a separate path)
- "Try the AI" scrolls to the CTA form
- Remove or clearly label the phone input as placeholder until product is live
- Consistent CTA copy and button style throughout

### Pitfall 6: Marquee Accessibility

**What goes wrong:** Infinite scrolling marquee duplicates DOM content for seamless looping. Screen readers announce the content twice. CSS animation burns GPU on older mobile devices.

**Prevention:**
- Mark duplicated marquee content with `aria-hidden="true"`
- Respect `prefers-reduced-motion`: pause or replace with static grid
- Use CSS `transform: translateX()` (GPU-accelerated), not JS position updates
- Pause animation on hover
- Integration logos should be SVGs (not PNGs) for crisp rendering

### Pitfall 7: HeroUI v3 Beta Trap

**What goes wrong:** Installing HeroUI v3 (3.0.0-beta.8) for a production site. Hitting breaking API changes between beta releases, missing documentation, component regressions.

**Prevention:**
- Explicitly install `@heroui/react@^2.8.9`
- Pin version in package.json
- Do NOT reference v3.heroui.com documentation
- v3 is for future projects after it reaches stable

## Minor Pitfalls

### Pitfall 1: Missing scroll-mt on Section Anchors

**What goes wrong:** Navbar smooth-scrolls to `#pricing` but the sticky nav covers the top 64-80px of the section.

**Prevention:** Add `scroll-mt-20` (80px) to every section with an id anchor.

### Pitfall 2: Tailwind v4 Button cursor: default

**What goes wrong:** Tailwind v4 changed buttons to `cursor: default` (matching browser spec). Buttons don't show pointer cursor.

**Prevention:** Add `cursor-pointer` explicitly to all clickable elements, or add global CSS: `button { cursor: pointer; }`

### Pitfall 3: Unoptimized Product Screenshots

**What goes wrong:** PNG product screenshots at 2-5MB each slow LCP and increase page weight.

**Prevention:** Pre-optimize to WebP. Use `next/image` with `sizes` prop. Set explicit `width` and `height` for CLS prevention.

### Pitfall 4: Missing Accessible Labels

**What goes wrong:** Custom elements (hamburger icon, phone input, marquee, chat mockup) lack proper aria attributes.

**Prevention:** HeroUI components include aria by default. Add manual labels to custom interactive elements. Run Lighthouse accessibility audit.

### Pitfall 5: OG Image Missing or Wrong Path

**What goes wrong:** `og:image` set to a relative path that doesn't resolve on social platforms. Link previews show no image.

**Prevention:** Use Next.js metadata API with absolute URL. Place OG image in app directory as `opengraph-image.png` for automatic handling.

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Project scaffolding | Tailwind v4 config wrong, HeroUI plugin not loading, fonts not rendering | Follow STACK.md installation exactly. Verify brand colors and HeroUI components render before any section work. |
| Navbar + Hero | LCP image lazy-loaded, 'use client' on root, chat animation too heavy | Set `priority` on hero images. Keep layout.tsx as Server Component. Build chat as static HTML with subtle entrance animation. |
| Social Proof | Marquee jank, accessibility of duplicated content | CSS-only marquee with `aria-hidden` on duplicate. Test on throttled mobile. |
| Features + Product Overview | Count-up broken with react-countup, stagger too aggressive | Use Motion animate() for count-ups. Limit stagger to 4 items, 150ms delay. |
| Testimonials + Comparison | Carousel conflicts with user interaction, comparison misaligned on mobile | Pause auto-rotate on hover/focus. Stack comparison vertically on mobile. |
| Pricing + CTA | Form submission expected but doesn't exist, card hover inconsistent | Clear "Coming soon" messaging on submit. Shared animation variants for hovers. |
| Polish / Deploy | Bundle too large, missing meta tags, FOUT | Audit with `next build` + Lighthouse. Verify font swap config. Test OG with Twitter Card Validator. |

## "Looks Done But Isn't" Checklist

- [ ] Navbar blur needs BOTH `backdrop-blur-md` AND `bg-white/70`
- [ ] Test at exactly 375px, 768px, 1440px (not just "looks okay on resize")
- [ ] Tab through every interactive element -- custom elements need focus rings
- [ ] OG image needs absolute URL, test with Twitter Card Validator
- [ ] Nav smooth-scroll anchors match section `id` attributes
- [ ] Mobile: "Book a Demo" reachable without scrolling past fold
- [ ] Gradient text readable on all section backgrounds
- [ ] Integration logo grayscale filter doesn't wash out low-contrast logos
- [ ] Count-up starts from 0, doesn't flash final number
- [ ] Animations respect `prefers-reduced-motion`

## Sources

- [HeroUI Tailwind v4 docs](https://www.heroui.com/docs/guide/tailwind-v4) -- official setup guide (HIGH confidence)
- [Tailwind CSS v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide) -- breaking changes (HIGH confidence)
- [HeroUI v2.8.0 release](https://www.heroui.com/blog/v2.8.0) -- Tailwind v4 support (HIGH confidence)
- [Motion upgrade guide](https://motion.dev/docs/react-upgrade-guide) -- package rename (HIGH confidence)
- [Next.js image optimization](https://www.debugbear.com/blog/nextjs-image-optimization) -- LCP patterns (MEDIUM confidence)
- [Tailwind v4 button cursor](https://tailwindcss.com/blog/tailwindcss-v4) -- default behavior change (HIGH confidence)
- [react-countup React 19 issues](https://nextjs-forum.com/post/1464922291824627929) -- compatibility report (MEDIUM confidence)
- [Next.js Core Web Vitals 2025](https://codewithlucifer.com/blog/optimizing-next-js-15-apps-for-core-web-vitals-in-2025) -- performance (MEDIUM confidence)
- [HeroUI + Tailwind v4 migration (Medium)](https://medium.com/@itboom.dev/how-to-migrate-to-tailwind-css-v4-with-heroui-move-your-theme-to-globals-css-the-right-way-174b50dbbd4c) -- practical walkthrough (MEDIUM confidence)

---
*Domain pitfalls for: BuyerRelay SaaS marketing website*
*Researched: 2026-03-06*
