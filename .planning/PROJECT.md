# BuyerRelay Website

## What This Is

A single-page, conversion-focused marketing website for BuyerRelay — an AI-powered lead conversion platform for US real estate agents. The site targets cold outbound email recipients who need to be convinced fast to book a demo. This is a demand validation site: the product is pre-launch, so the website itself must project the credibility of an established company.

## Core Value

Cold email recipients land on the site and book a demo — every design decision serves that single conversion goal.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] 10-section single-page website (Navbar, Hero, Social Proof, Product Overview, Features, CRM Integrations, Testimonials, Comparison, Pricing, Footer/CTA)
- [ ] Sticky navbar with blur effect, logo, nav links, and "Try the AI" CTA
- [ ] Hero with 2-column layout: headline + CTAs left, AI chat mockup right
- [ ] Social proof ticker with scrolling stats and integration logo bar
- [ ] Product overview section with video placeholder and animated stat cards
- [ ] 2x2 features grid (AI Calling, AI Texting, Appointment Setting, Live Transfers)
- [ ] CRM integrations section with use-case badges and logo grid
- [ ] Testimonials carousel with dark cards and metric highlights
- [ ] Comparison table (With BuyerRelay vs Without)
- [ ] Pricing section with 3 tiers and placeholder prices ($299/$499/Custom)
- [ ] Final CTA with lead capture form (name/email/phone/team size) — placeholder, no backend
- [ ] Footer with 4-column layout
- [ ] Fully responsive (mobile 375px, tablet 768px, desktop 1440px)
- [ ] Scroll animations (fade-in, slide-up, count-up numbers)
- [ ] Brand-compliant design (Outfit + Inter fonts, blue/purple gradient, pill buttons, layered shadows)
- [ ] SEO meta tags and Open Graph tags
- [ ] Deployable to Vercel

### Out of Scope

- Backend/API — no form submissions, no database, no auth
- Blog/content pages — single page only
- Real testimonials — use credible placeholders
- Product demo video — video placeholder/embed slot only
- Domain setup/DNS — just Vercel-deployable code
- Analytics/tracking — can add post-launch
- "Try the AI" live demo — button scrolls to CTA or is placeholder

## Context

- **Pre-launch validation:** BuyerRelay is testing market demand before building the full product. The website needs to look like an established player, not a startup.
- **Cold outbound funnel:** Primary traffic source is email marketing. Visitors arrive skeptical — trust signals and speed-to-value are critical.
- **Product mockups exist:** 4 high-quality product screenshots (AI conversation, mobile notification, CRM sync, features dashboard) are ready in `brand_assets/product-screenshots/`.
- **Brand system complete:** Full design tokens defined in `brand_assets/brand-guide.md` — colors, typography, shadows, spacing, animations.
- **Competitor research done:** Structurely (hero layout, AI demo), Verse.ai (gradients, comparison table), Ylopo (testimonials with $ amounts), LocalizeOS (enterprise logo wall).
- **Detailed section specs:** BRIEF.md contains per-section layout specs, copy options, and reference sites.

## Constraints

- **Tech stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Hero UI + Motion.dev
- **Fonts:** Outfit (headings) + Inter (body) via next/font
- **Hosting:** Vercel
- **Design system:** Must follow brand-guide.md tokens exactly — no default Tailwind colors
- **No backend:** All forms are placeholder (no submission endpoint)
- **Pricing:** Placeholder values ($299/$499/Custom) until finalized
- **Booking:** No Cal.com/Calendly link yet — form captures intent only

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Single-page site | Cold outbound traffic needs fast, linear conversion path | -- Pending |
| Placeholder pricing ($299/$499/Custom) | Need realistic tiers while final pricing is decided | -- Pending |
| Placeholder form (no backend) | Ship fast, add form handler later | -- Pending |
| Pre-launch credibility strategy | Use conservative stats, integration logos, polished mockups instead of real testimonials | -- Pending |
| Next.js 15 + Hero UI + Motion.dev | Modern stack, fast to build, great animations, Vercel-native | -- Pending |

---
*Last updated: 2026-03-06 after initialization*
