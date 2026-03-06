# Requirements: BuyerRelay Website

**Defined:** 2026-03-06
**Core Value:** Cold email recipients land on the site and book a demo

## v1 Requirements

Requirements for initial launch. Each maps to roadmap phases.

### Foundation

- [x] **FOUN-01**: Next.js 15 project scaffolded with App Router, TypeScript, and Tailwind CSS v4 (CSS-first @theme config)
- [x] **FOUN-02**: HeroUI v2 provider configured with @plugin directive and brand color mapping
- [x] **FOUN-03**: Outfit (headings) and Inter (body) fonts loaded via next/font with correct weights
- [x] **FOUN-04**: Brand design tokens implemented in Tailwind @theme (colors, shadows, spacing, radii from brand-guide.md)
- [x] **FOUN-05**: Reusable Motion.dev scroll-reveal animation components (fade-in, slide-up, stagger)
- [x] **FOUN-06**: Responsive layout system tested at 375px, 768px, and 1440px breakpoints

### Navigation

- [x] **NAV-01**: Sticky navbar with blur backdrop effect using HeroUI Navbar
- [x] **NAV-02**: Logo (left), nav links center (How It Works, Features, Pricing), CTAs right ("Login" ghost, "Book a Demo" primary pill)
- [x] **NAV-03**: Mobile hamburger menu with slide-out navigation
- [x] **NAV-04**: Smooth scroll to section anchors on nav link click

### Hero

- [x] **HERO-01**: 2-column layout — headline + CTAs left (55%), product visual right (45%)
- [x] **HERO-02**: Gradient text effect on "Closed Deals" in headline (blue-to-purple)
- [x] **HERO-03**: Two CTAs: "Book a Demo" (primary solid pill) and "See It In Action" (secondary outline)
- [x] **HERO-04**: Animated AI chat mockup showing lead qualification conversation with auto-typing effect
- [x] **HERO-05**: "Try the AI" phone input below chat mockup (placeholder — scrolls to final CTA)
- [x] **HERO-06**: Subtle radial gradient background with visual texture
- [x] **HERO-07**: Hero stacks vertically on mobile with chat mockup below headline

### Social Proof

- [x] **SOCL-01**: Auto-scrolling marquee ticker with stat quotes ("Appointments lifted by 20-50%", "$72M in transactions", etc.)
- [x] **SOCL-02**: Integration logo bar with infinite scroll (Follow Up Boss, Sierra, CINC, BoomTown, HubSpot, Salesforce)
- [x] **SOCL-03**: Logos display grayscale by default, color on hover

### Product Overview

- [ ] **PROD-01**: Section heading "See How It Works" with subtitle
- [ ] **PROD-02**: Video placeholder with compelling thumbnail and play button overlay
- [ ] **PROD-03**: 3 stat cards with count-up animation on scroll (50% Lower Overhead, 17% More Qualified Leads, 31% Higher Answer Rate)

### Features

- [x] **FEAT-01**: 2x2 grid layout on desktop, stacked single-column on mobile
- [x] **FEAT-02**: 4 feature cards: AI Calling, AI Texting, Appointment Setting, Live Transfers
- [x] **FEAT-03**: Each card has icon, heading, description, 3-5 benefit bullets, and product screenshot
- [x] **FEAT-04**: Cards animate with staggered fade-in + slide-up on scroll
- [x] **FEAT-05**: Hover state: scale 1.02 + shadow elevation increase

### CRM Integrations

- [ ] **CRM-01**: Left column with heading, subtitle, and 4 use-case badges (Old Leads, Rehashed Leads, New Leads Off Hours, Uncontacted Leads)
- [ ] **CRM-02**: Right column with product screenshot (CRM sync timeline)
- [ ] **CRM-03**: Below: 2-row logo grid (HubSpot, Follow Up Boss, BoomTown, Salesforce, Sierra, kvCORE, Firepoint, Chime)

### Testimonials

- [ ] **TEST-01**: 3-card carousel with auto-rotation and navigation arrows
- [ ] **TEST-02**: Dark background cards (#0F172A) with gradient accent border
- [ ] **TEST-03**: Each card: quote icon, bold quote text, author photo (circle), name + title, highlighted metric in accent color
- [ ] **TEST-04**: Placeholder testimonials with realistic but conservative metrics

### Comparison

- [ ] **COMP-01**: "Ditch the Status Quo" heading (Verse.ai pattern)
- [ ] **COMP-02**: 2-column layout: "With BuyerRelay" (green checkmarks) vs "Without BuyerRelay" (gray X marks)
- [ ] **COMP-03**: 7-8 comparison rows (two-way text vs one-way blasts, 24/7 AI vs manual follow up, etc.)
- [ ] **COMP-04**: Columns animate by sliding in from sides on scroll

### Pricing

- [ ] **PRIC-01**: 3-tier pricing cards: Starter ($299/mo), Professional ($499/mo, "Most Popular"), Enterprise (Custom)
- [ ] **PRIC-02**: Professional tier highlighted with gradient border accent
- [ ] **PRIC-03**: Each tier lists 5-7 included features with checkmarks
- [ ] **PRIC-04**: "All plans include 14-day free trial" below tiers
- [ ] **PRIC-05**: Enterprise card has "Contact Sales" CTA instead of price

### Final CTA

- [ ] **CTA-01**: Dark background section with "Ready to Convert More Leads?" headline
- [ ] **CTA-02**: Lead capture form: Name, Email, Phone, Team Size (placeholder — no backend submission)
- [ ] **CTA-03**: Gradient "Book Your Demo" CTA button
- [ ] **CTA-04**: Trust badges below form ("Trusted by 500+ agents", security signals)

### Footer

- [x] **FOOT-01**: 4-column layout: Logo + socials, Product links, Resources links, Company + Legal
- [x] **FOOT-02**: Copyright and legal links at bottom

### SEO & Performance

- [ ] **SEO-01**: Page title, meta description targeting "AI real estate lead generation" keywords
- [ ] **SEO-02**: Open Graph tags with title, description, and OG image for link previews
- [ ] **SEO-03**: Semantic HTML structure (proper heading hierarchy, landmarks, alt text)
- [ ] **SEO-04**: Optimized images via next/image with proper sizing and lazy loading

## v2 Requirements

Deferred to post-launch (first 30-90 days).

### Content Upgrades

- **CONT-01**: Replace placeholder testimonials with real customer quotes and $ metrics
- **CONT-02**: Add product demo video (Loom/Vimeo embed) to product overview section
- **CONT-03**: Connect "Try the AI" phone input to live AI demo call

### Conversion Optimization

- **CONV-01**: Floating "Let's Chat" button (fixed bottom-right, scrolls to CTA)
- **CONV-02**: Cal.com or Calendly booking embed replacing placeholder form
- **CONV-03**: Vercel Analytics + conversion event tracking

### Trust Building

- **TRST-01**: G2/Capterra badges once listings are live
- **TRST-02**: Real customer logos once partnerships are established
- **TRST-03**: SOC 2 compliance badge once achieved

## Out of Scope

| Feature | Reason |
|---------|--------|
| Live AI chatbot on website | Requires backend + AI integration; broken chatbot destroys pre-launch credibility |
| Multi-page site (About, Blog, Careers) | Splits conversion focus; cold outbound needs single linear path |
| Real-time social proof notifications | No real signups pre-launch; fake notifications destroy trust |
| ROI calculator | Pricing model not finalized; calculator bugs hurt more than help |
| Heavy parallax / 3D effects | Kills mobile performance, accessibility concerns, dated pattern |
| Dark mode toggle | Doubles QA surface for zero conversion benefit on a landing page |
| Cookie consent banner | No tracking/analytics = no cookies to consent to |
| Multi-language / i18n | US market only; hard-code English |
| Backend form submission | Ship frontend fast; add form handler post-launch |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUN-01 | Phase 1 | Complete |
| FOUN-02 | Phase 1 | Complete |
| FOUN-03 | Phase 1 | Complete |
| FOUN-04 | Phase 1 | Complete |
| FOUN-05 | Phase 1 | Complete |
| FOUN-06 | Phase 1 | Complete |
| NAV-01 | Phase 2 | Complete |
| NAV-02 | Phase 2 | Complete |
| NAV-03 | Phase 2 | Complete |
| NAV-04 | Phase 2 | Complete |
| HERO-01 | Phase 2 | Complete |
| HERO-02 | Phase 2 | Complete |
| HERO-03 | Phase 2 | Complete |
| HERO-04 | Phase 2 | Complete |
| HERO-05 | Phase 2 | Complete |
| HERO-06 | Phase 2 | Complete |
| HERO-07 | Phase 2 | Complete |
| FOOT-01 | Phase 2 | Complete |
| FOOT-02 | Phase 2 | Complete |
| SOCL-01 | Phase 3 | Complete |
| SOCL-02 | Phase 3 | Complete |
| SOCL-03 | Phase 3 | Complete |
| PROD-01 | Phase 3 | Pending |
| PROD-02 | Phase 3 | Pending |
| PROD-03 | Phase 3 | Pending |
| FEAT-01 | Phase 3 | Complete |
| FEAT-02 | Phase 3 | Complete |
| FEAT-03 | Phase 3 | Complete |
| FEAT-04 | Phase 3 | Complete |
| FEAT-05 | Phase 3 | Complete |
| CRM-01 | Phase 3 | Pending |
| CRM-02 | Phase 3 | Pending |
| CRM-03 | Phase 3 | Pending |
| TEST-01 | Phase 4 | Pending |
| TEST-02 | Phase 4 | Pending |
| TEST-03 | Phase 4 | Pending |
| TEST-04 | Phase 4 | Pending |
| COMP-01 | Phase 4 | Pending |
| COMP-02 | Phase 4 | Pending |
| COMP-03 | Phase 4 | Pending |
| COMP-04 | Phase 4 | Pending |
| PRIC-01 | Phase 4 | Pending |
| PRIC-02 | Phase 4 | Pending |
| PRIC-03 | Phase 4 | Pending |
| PRIC-04 | Phase 4 | Pending |
| PRIC-05 | Phase 4 | Pending |
| CTA-01 | Phase 4 | Pending |
| CTA-02 | Phase 4 | Pending |
| CTA-03 | Phase 4 | Pending |
| CTA-04 | Phase 4 | Pending |
| SEO-01 | Phase 5 | Pending |
| SEO-02 | Phase 5 | Pending |
| SEO-03 | Phase 5 | Pending |
| SEO-04 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 52 total
- Mapped to phases: 52
- Unmapped: 0

---
*Requirements defined: 2026-03-06*
*Last updated: 2026-03-06 after roadmap creation*
