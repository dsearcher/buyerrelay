# Research Summary: BuyerRelay Website

**Domain:** Single-page SaaS marketing website (AI real estate lead conversion)
**Researched:** 2026-03-06
**Overall confidence:** HIGH

## Executive Summary

BuyerRelay's website is a single-page, 10-section conversion-focused marketing site targeting cold outbound email recipients. The stack is well-defined and current: Next.js 15.5 (App Router) + TypeScript + Tailwind CSS v4 + HeroUI v2.8.9 + Motion 12.x. All major libraries are compatible with each other and with React 19. The primary technical risks are in the Tailwind v4 configuration paradigm shift (CSS-first instead of JS config) and HeroUI's plugin setup, both of which are solvable with careful initial scaffolding.

The feature landscape maps cleanly to the 10 sections specified in PROJECT.md. All sections are table stakes for a credible SaaS marketing site. The main differentiators are the animated chat mockup in the hero (Structurely-inspired), the comparison table (Verse.ai pattern), and the premium visual design system (gradient text, blue-tinted shadows, pill buttons) that none of the four competitors match. The most significant risk is pre-launch credibility -- every design decision must project the impression of an established company.

The architecture is straightforward: Server Component shell with Client Component islands for interactivity. Content lives in typed constants, animations use shared Motion variants, and sections are independent enough to be built in parallel by subagents. There is no backend, no database, no auth -- this is a pure frontend build deployed to Vercel.

The most dangerous pitfalls are: (1) Tailwind v4 configuration using v3 syntax (silent failures), (2) HeroUI plugin not loading via @plugin directive (unstyled components), (3) installing `framer-motion` instead of `motion` (React 19 peer dep conflicts), and (4) marking page.tsx as a Client Component (kills SSR, doubles bundle). All four are preventable with correct initial setup in the scaffolding phase.

## Key Findings

**Stack:** Next.js 15.5.x + React 19 + Tailwind CSS v4 + HeroUI v2.8.9 + Motion 12.x. Use `motion` package (not `framer-motion`), import from `motion/react`. Use HeroUI v2 (stable, NOT v3 beta).

**Architecture:** Server Component page.tsx composing Client Component sections. Shared animation variants in lib/animations.ts. All content in lib/constants.ts. CSS-first Tailwind config via @theme. HeroUI via @plugin directive.

**Critical pitfall:** Tailwind v4's CSS-first config paradigm breaks all v3 patterns. Must use `@import "tailwindcss"`, `@theme {}`, `@plugin`, and `@tailwindcss/postcss`. No autoprefixer.

## Implications for Roadmap

Based on research, suggested phase structure:

1. **Foundation / Scaffolding** - Set up Next.js 15, Tailwind v4 with brand tokens, HeroUI provider, fonts, shared animation components
   - Addresses: Brand tokens, font loading, library configuration
   - Avoids: Tailwind v4 config pitfall, HeroUI plugin setup pitfall, font flash
   - This phase is CRITICAL -- a broken foundation poisons every subsequent phase. Verify all HeroUI components render correctly before proceeding.

2. **Structural Frame (Navbar + Hero + Footer)** - Build the page shell and highest-impact section
   - Addresses: Sticky nav with blur, hero chat mockup, footer structure
   - Avoids: LCP failure from lazy-loaded hero images, 'use client' sprawl
   - Hero is the most complex section (2-col layout, chat animation, gradient text, phone input). Build it early to validate the animation and responsive patterns.

3. **Trust Layer (Social Proof + Product Overview)** - Below-hero credibility sections
   - Addresses: Marquee ticker, integration logos, count-up stat cards, video placeholder
   - Avoids: Marquee accessibility issues, react-countup React 19 breakage
   - These two sections can be built in parallel by subagents.

4. **Feature Showcase (Features Grid + CRM Integrations)** - What the product does and what it works with
   - Addresses: 2x2 feature cards with staggered animation, logo grid with use-case badges
   - Avoids: Scroll animation CLS, over-engineering card components
   - Also parallelizable.

5. **Conversion Reinforcement (Testimonials + Comparison)** - Social proof and value gap
   - Addresses: Carousel with auto-rotation, dark testimonial cards, two-column comparison
   - Avoids: Carousel auto-rotate conflicting with user interaction, comparison misaligned on mobile
   - Parallelizable.

6. **Conversion Endpoint (Pricing + Final CTA)** - Where visitors become leads
   - Addresses: 3-tier pricing cards, lead capture form, trust badges
   - Avoids: Multiple competing CTAs, placeholder form confusion

7. **Polish + Deploy** - SEO, responsive QA, performance audit, Vercel deployment
   - Addresses: Meta tags, OG image, Lighthouse audit, cross-browser testing
   - Avoids: Missing OG image, bundle size issues, FOUT

**Phase ordering rationale:**
- Foundation MUST come first -- every section depends on tokens, fonts, and library setup
- Hero comes second because it's the most complex section and validates patterns used everywhere else
- Middle sections (3-5) are largely independent and parallelizable
- Pricing/CTA comes late because it benefits from understanding the full page rhythm
- Polish is last because it requires all sections to be complete for meaningful metrics

**Research flags for phases:**
- Phase 1 (Foundation): Likely needs deeper research on HeroUI @plugin + @source exact paths. HIGH risk if misconfigured.
- Phase 2 (Hero): Chat mockup animation complexity may need iteration. Motion.dev animation timeline for sequential chat bubbles needs careful implementation.
- Phase 3 (Social Proof): CSS-only marquee implementation should use a proven pattern (21st.dev reference from CLAUDE.md).
- Phases 4-6: Standard patterns, unlikely to need additional research.
- Phase 7 (Polish): Standard Next.js deployment. No research concerns.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All versions verified via npm and official docs. Compatibility matrix confirmed. |
| Features | HIGH | All sections map to competitor-proven patterns. No novel features requiring R&D. |
| Architecture | HIGH | Standard Next.js 15 App Router patterns. Well-documented by Vercel. |
| Pitfalls | HIGH | Tailwind v4 and HeroUI pitfalls verified via official docs and GitHub issues. Motion rename confirmed via npm. |
| HeroUI + TW4 setup | MEDIUM | The @plugin + @source + @custom-variant combination is documented but the exact paths depend on project structure. May need adjustment during scaffolding. |

## Gaps to Address

- **HeroUI @source path:** The exact relative path from globals.css to `node_modules/@heroui/theme/dist/**/*.js` depends on the src/app/ directory depth. Verify during scaffolding.
- **hero.ts plugin file location:** Must be co-located with globals.css or the relative path in `@plugin './hero.ts'` breaks. Verify during scaffolding.
- **Tailwind v4 @theme token naming:** The exact Tailwind utility names generated from custom `@theme` variables need testing. `--color-primary` should generate `bg-primary`, `text-primary` etc., but this needs verification.
- **HeroUI theme override:** How to map brand colors to HeroUI's component theme (so `<Button color="primary">` uses #0066FF) needs testing during scaffolding.
- **Motion stagger + whileInView interaction:** How Motion.dev's `staggerChildren` interacts with `whileInView` on parent containers needs practical testing. Documentation suggests it works, but animation timing may need tuning.

---
*Research summary for: BuyerRelay SaaS marketing website*
*Researched: 2026-03-06*
