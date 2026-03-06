# Roadmap: BuyerRelay Website

## Overview

A 5-phase build of a single-page, conversion-focused marketing website. Phase 1 lays the technical foundation (Next.js 15, Tailwind v4, HeroUI, fonts, animation utils). Phase 2 builds the structural frame visitors see first and last (navbar, hero, footer). Phases 3 and 4 fill the mid-page with content sections -- all parallelizable within each phase. Phase 5 handles SEO, performance, responsive QA, and Vercel deployment. Every phase delivers a verifiable capability; the page grows top-to-bottom across phases 2-4.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation** - Project scaffolding, brand tokens, fonts, HeroUI provider, animation utilities
- [ ] **Phase 2: Structural Frame** - Navbar, hero section, and footer (page shell + highest-impact section)
- [ ] **Phase 3: Content Sections** - Social proof, product overview, features grid, CRM integrations (parallelizable)
- [ ] **Phase 4: Conversion Sections** - Testimonials, comparison table, pricing, final CTA (parallelizable)
- [ ] **Phase 5: Polish and Deploy** - SEO meta tags, responsive QA, performance optimization, Vercel deployment

## Phase Details

### Phase 1: Foundation
**Goal**: Developer can build any section using brand-compliant tokens, components, and animation utilities without configuration work
**Depends on**: Nothing (first phase)
**Requirements**: FOUN-01, FOUN-02, FOUN-03, FOUN-04, FOUN-05, FOUN-06
**Success Criteria** (what must be TRUE):
  1. Running `npm run dev` serves a blank page with no errors, HeroUI components render with brand colors, and Outfit/Inter fonts display correctly
  2. Tailwind utilities (`bg-primary`, `text-secondary`, `shadow-elevated`, pill button radii) produce brand-guide-compliant output
  3. A test scroll-reveal animation (fade-in, slide-up) triggers correctly on viewport entry
  4. The page renders correctly at 375px, 768px, and 1440px breakpoints with no horizontal overflow
**Plans**: TBD

Plans:
- [ ] 01-01: TBD
- [ ] 01-02: TBD

### Phase 2: Structural Frame
**Goal**: Visitors see a polished, professional first impression -- sticky navbar, compelling hero with animated chat mockup, and a complete footer
**Depends on**: Phase 1
**Requirements**: NAV-01, NAV-02, NAV-03, NAV-04, HERO-01, HERO-02, HERO-03, HERO-04, HERO-05, HERO-06, HERO-07, FOOT-01, FOOT-02
**Success Criteria** (what must be TRUE):
  1. Navbar sticks to top on scroll with blur backdrop, shows logo + nav links + CTAs on desktop, and collapses to hamburger menu on mobile
  2. Hero displays 2-column layout (headline with gradient text + CTAs left, animated chat mockup right) on desktop, stacks vertically on mobile
  3. Chat mockup auto-types a realistic lead qualification conversation with sequential bubble animations
  4. Clicking any nav link smooth-scrolls to the corresponding section anchor
  5. Footer displays 4-column layout with logo, nav groups, and legal links
**Plans**: TBD

Plans:
- [ ] 02-01: TBD
- [ ] 02-02: TBD
- [ ] 02-03: TBD

### Phase 3: Content Sections
**Goal**: Below-the-fold content establishes credibility and showcases product capabilities -- visitors understand what BuyerRelay does and what it integrates with
**Depends on**: Phase 2
**Requirements**: SOCL-01, SOCL-02, SOCL-03, PROD-01, PROD-02, PROD-03, FEAT-01, FEAT-02, FEAT-03, FEAT-04, FEAT-05, CRM-01, CRM-02, CRM-03
**Parallelization**: Social Proof, Product Overview, Features Grid, and CRM Integrations can all be built in parallel as independent section components
**Success Criteria** (what must be TRUE):
  1. Integration logos scroll continuously in an infinite marquee, displaying grayscale by default and color on hover
  2. Stat cards (50% Lower Overhead, 17% More Qualified Leads, 31% Higher Answer Rate) count up from zero when scrolled into view
  3. Four feature cards (AI Calling, AI Texting, Appointment Setting, Live Transfers) display in a 2x2 grid on desktop with staggered fade-in animation, and stack single-column on mobile
  4. CRM section shows use-case badges, product screenshot, and an 8-logo integration grid
**Plans**: TBD

Plans:
- [ ] 03-01: TBD
- [ ] 03-02: TBD
- [ ] 03-03: TBD
- [ ] 03-04: TBD

### Phase 4: Conversion Sections
**Goal**: Visitors are convinced to act -- testimonials build trust, comparison highlights the cost of inaction, pricing removes ambiguity, and the final CTA captures leads
**Depends on**: Phase 3
**Requirements**: TEST-01, TEST-02, TEST-03, TEST-04, COMP-01, COMP-02, COMP-03, COMP-04, PRIC-01, PRIC-02, PRIC-03, PRIC-04, PRIC-05, CTA-01, CTA-02, CTA-03, CTA-04
**Parallelization**: Testimonials, Comparison, Pricing, and Final CTA can all be built in parallel as independent section components
**Success Criteria** (what must be TRUE):
  1. Testimonial carousel auto-rotates through 3 dark-background cards with quote, author photo, and highlighted metric; navigation arrows work
  2. Comparison table displays "With BuyerRelay" vs "Without BuyerRelay" in two columns with green checkmarks and gray X marks, columns animate in from sides on scroll
  3. Three pricing tiers display with Professional highlighted as "Most Popular" with gradient border; Enterprise shows "Contact Sales" instead of a price
  4. Final CTA section presents a lead capture form (name, email, phone, team size) with gradient submit button and trust badges below
**Plans**: TBD

Plans:
- [ ] 04-01: TBD
- [ ] 04-02: TBD
- [ ] 04-03: TBD
- [ ] 04-04: TBD

### Phase 5: Polish and Deploy
**Goal**: The site is production-ready -- optimized for search engines, performant on all devices, and deployed to a live Vercel URL
**Depends on**: Phase 4
**Requirements**: SEO-01, SEO-02, SEO-03, SEO-04
**Success Criteria** (what must be TRUE):
  1. Page has correct title, meta description, and Open Graph tags that render properly in link previews
  2. All images use next/image with proper sizing and lazy loading; no layout shift on scroll
  3. HTML uses semantic structure (proper heading hierarchy h1-h3, landmark regions, alt text on all images)
  4. Site deploys to Vercel with `vercel build` succeeding and the live URL loading all sections correctly
**Plans**: TBD

Plans:
- [ ] 05-01: TBD
- [ ] 05-02: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/2 | Not started | - |
| 2. Structural Frame | 0/3 | Not started | - |
| 3. Content Sections | 0/4 | Not started | - |
| 4. Conversion Sections | 0/4 | Not started | - |
| 5. Polish and Deploy | 0/2 | Not started | - |
