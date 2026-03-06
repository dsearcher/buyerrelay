# Architecture Patterns

**Domain:** Single-page SaaS marketing website (Next.js 15 App Router)
**Researched:** 2026-03-06
**Confidence:** HIGH

## System Overview

```
+-------------------------------------------------------------+
|                    Next.js 15 App Router                      |
|                  (SSR on Vercel / SSG capable)                |
+---------------------------------------------------------------+
|                      Root Layout                              |
|  +----------+  +--------------+  +--------------------------+ |
|  | Fonts    |  | HeroUI       |  | Metadata / SEO           | |
|  | (Outfit  |  | Provider     |  | (OG tags, title,         | |
|  |  + Inter)|  | (client)     |  |  description)            | |
|  +----------+  +--------------+  +--------------------------+ |
+---------------------------------------------------------------+
|                     Single Page (/)                           |
|  +---------------------------------------------------------+ |
|  | Navbar (sticky, blur, "use client")                      | |
|  +---------------------------------------------------------+ |
|  | Hero (2-col: copy + chat mockup, "use client")           | |
|  +---------------------------------------------------------+ |
|  | SocialProof (CSS marquee + logo hover)                   | |
|  +---------------------------------------------------------+ |
|  | ProductOverview (video placeholder + stat cards)          | |
|  +---------------------------------------------------------+ |
|  | Features (2x2 grid, staggered animation)                 | |
|  +---------------------------------------------------------+ |
|  | CrmIntegrations (badges + logo grid)                     | |
|  +---------------------------------------------------------+ |
|  | Testimonials (carousel, dark cards)                      | |
|  +---------------------------------------------------------+ |
|  | Comparison (2-col slide-in table)                        | |
|  +---------------------------------------------------------+ |
|  | Pricing (3 tiers)                                        | |
|  +---------------------------------------------------------+ |
|  | FinalCta (form + trust badges)                           | |
|  +---------------------------------------------------------+ |
|  | Footer (4-col, server component)                         | |
|  +---------------------------------------------------------+ |
+---------------------------------------------------------------+
|                    Shared Layer                                |
|  +----------+  +----------+  +----------+  +--------------+  |
|  | Brand    |  | Animation|  | UI       |  | Content      |  |
|  | Tokens   |  | Variants |  | Primitives| | Constants    |  |
|  +----------+  +----------+  +----------+  +--------------+  |
+---------------------------------------------------------------+
```

### Component Boundaries

| Component | Responsibility | Server/Client | Communicates With |
|-----------|---------------|---------------|-------------------|
| Root Layout (layout.tsx) | Font loading, HeroUI provider, global metadata | Server (wraps client provider) | HeroUIProvider, next/font |
| page.tsx | Section composition in scroll order | Server | All section components |
| HeroUIProvider | Theme context for HeroUI components | Client | All HeroUI components |
| SectionWrapper | Consistent padding, max-width, scroll-reveal animation | Client | Wraps each section |
| Navbar | Sticky nav, blur, mobile menu, scroll-to-section | Client | Smooth scroll to section anchors |
| Hero | Chat mockup animation, CTA buttons, phone input | Client | SectionWrapper |
| SocialProof | Marquee ticker, logo hover effects | Client (CSS animation, minimal JS) | LogoGrid |
| ProductOverview | Video placeholder, count-up stat cards | Client | StatCard |
| FeaturesGrid | 4 feature cards with staggered reveal | Client | FeatureCard |
| CrmIntegrations | Use-case badges, logo grid, product screenshot | Mostly Server | LogoGrid, next/image |
| Testimonials | Carousel with auto-rotation and arrows | Client | TestimonialCard |
| ComparisonTable | Two-column slide-in comparison | Client | ScrollReveal |
| Pricing | 3 tier cards with hover/active states | Client | PricingCard |
| FinalCta | Lead capture form (placeholder) | Client | HeroUI Input, Button |
| Footer | Static links, logo, copyright | Server | None |

### Data Flow

All data is static. No API calls, no database, no auth.

```
lib/constants.ts (typed static data)
  |
  v
page.tsx (Server Component - assembles sections top to bottom)
  |
  +--> Navbar (client: scroll position state, mobile menu state)
  +--> Hero (client: chat animation timeline, phone input state)
  +--> SocialProof (CSS marquee + client: logo hover)
  +--> ProductOverview (client: count-up values via Motion animate())
  +--> FeaturesGrid (client: scroll-triggered stagger animation)
  +--> CrmIntegrations (server: static content + client: hover effects)
  +--> Testimonials (client: carousel index, auto-rotate timer)
  +--> ComparisonTable (client: scroll-triggered slide-in)
  +--> Pricing (client: card hover/active states)
  +--> FinalCta (client: form field state -- name, email, phone, team size)
  +--> Footer (server: static links)
```

## Recommended Project Structure

```
src/
  app/
    layout.tsx             # Root layout: fonts, HeroUI Provider, metadata
    page.tsx               # Single page: composes all sections in order
    globals.css            # Tailwind v4 imports + @theme brand tokens
    hero.ts                # HeroUI plugin export for Tailwind v4
    favicon.ico
    opengraph-image.png    # OG image for social sharing
  components/
    layout/
      Navbar.tsx           # Sticky nav with blur ('use client')
      Footer.tsx           # 4-column footer (Server Component)
    sections/
      Hero.tsx
      SocialProof.tsx
      ProductOverview.tsx
      Features.tsx
      CrmIntegrations.tsx
      Testimonials.tsx
      Comparison.tsx
      Pricing.tsx
      FinalCta.tsx
    ui/
      SectionWrapper.tsx   # Consistent padding, max-width, scroll-reveal
      GradientText.tsx     # Brand gradient text (bg-clip-text)
      PillBadge.tsx        # Pill-shaped badge component
      StatCard.tsx         # Count-up animated stat
      FeatureCard.tsx      # Feature grid card with icon + bullets
      TestimonialCard.tsx  # Dark card with gradient accent + metric
      PricingCard.tsx      # Pricing tier card with feature list
      LogoGrid.tsx         # Integration logos (grayscale -> color)
      ChatMockup.tsx       # AI conversation demo component
    animations/
      ScrollReveal.tsx     # Motion whileInView wrapper
      CountUp.tsx          # Animated number counter (custom, not react-countup)
      Marquee.tsx          # CSS-based infinite scroll ticker
      StaggerChildren.tsx  # Staggered child animation container
  lib/
    fonts.ts               # Outfit + Inter font declarations
    constants.ts           # Nav links, features, pricing, testimonials, etc.
    animations.ts          # Shared Motion animation variants
    metadata.ts            # SEO metadata configuration
  providers/
    HeroUIProvider.tsx     # 'use client' wrapper for HeroUI
  types/
    index.ts               # Shared TypeScript interfaces
public/
  images/
    logo.png               # BuyerRelay logo
    product-screenshots/   # 4 product screenshots from brand_assets
    integration-logos/     # CRM integration logos (SVG preferred)
  og-image.png             # Open Graph image (1200x630)
```

### Structure Rationale

- **`components/sections/`** maps 1:1 to the 10 site sections in the BRIEF. Each is self-contained. Sections can be built in parallel by subagents.
- **`components/ui/`** holds brand-specific primitives shared across 2+ sections. Prevents duplication of card patterns, gradient text, and badge styles.
- **`components/animations/`** encapsulates Motion.dev patterns. Every section uses scroll-reveal, so a shared `ScrollReveal` avoids repeating `whileInView` boilerplate.
- **`components/layout/`** separates Navbar and Footer from content sections. They are structural, not content.
- **`lib/constants.ts`** centralizes all content data. Sections import data, not props. Easy to update copy without touching component logic.
- **`lib/animations.ts`** defines shared animation variants (fadeInUp, staggerContainer, scaleOnHover). Ensures consistent motion across sections.
- **`providers/`** isolates the HeroUI client provider, keeping the root layout as a Server Component.

## Patterns to Follow

### Pattern 1: Client Island in Server Layout

**What:** Root layout is a Server Component. A `'use client'` provider wraps children for HeroUI. Individual sections add `'use client'` only when they need browser APIs.

**When:** Always -- this is the Next.js 15 App Router default.

**Example:**
```typescript
// src/app/layout.tsx (Server Component -- no 'use client')
import { outfit, inter } from '@/lib/fonts';
import { HeroUIProvider } from '@/providers/HeroUIProvider';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}

// src/providers/HeroUIProvider.tsx
'use client';
import { HeroUIProvider as Provider } from '@heroui/react';

export function HeroUIProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
```

### Pattern 2: Centralized Animation Variants

**What:** Define animation presets in `lib/animations.ts`. Spread them into Motion components for consistency.

**When:** Any component using Motion scroll animations.

**Why:** Prevents animation drift (different durations, easings across sections).

**Example:**
```typescript
// lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true },
};

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  transition: { type: 'spring', stiffness: 300 },
};
```

### Pattern 3: Section Composition with Scroll Anchors

**What:** page.tsx composes all sections linearly. Each section gets an `id` for navbar smooth-scroll.

**Example:**
```typescript
// src/app/page.tsx (Server Component)
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero id="hero" />
      <SocialProof id="social-proof" />
      <ProductOverview id="how-it-works" />
      <Features id="features" />
      <CrmIntegrations id="integrations" />
      <Testimonials id="testimonials" />
      <Comparison id="comparison" />
      <Pricing id="pricing" />
      <FinalCta id="contact" />
      <Footer />
    </main>
  );
}
```

All sections use `scroll-mt-20` to offset for the sticky navbar height.

### Pattern 4: CSS-First Brand Tokens via @theme

**What:** Tailwind v4 replaces tailwind.config.js with CSS-based `@theme`. All brand tokens from brand-guide.md map directly to CSS custom properties.

**Example:**
```css
/* src/app/globals.css */
@import "tailwindcss";
@plugin './hero.ts';
@source '../../node_modules/@heroui/theme/dist/**/*.js';
@custom-variant dark (&:is(.dark *));

@theme {
  --color-primary: #0066FF;
  --color-primary-light: #3385FF;
  --color-primary-dark: #0052CC;
  --color-accent: #7C3AED;
  --color-bg-primary: #FAFBFF;
  --color-bg-elevated: #FFFFFF;
  --color-bg-dark: #0F172A;
  --color-text-primary: #0F172A;
  --color-text-secondary: #475569;
  --color-text-muted: #94A3B8;
  --color-success: #10B981;
  --color-border: #E2E8F0;
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius-pill: 999px;
  --radius-card: 16px;
  --radius-input: 12px;
  --shadow-brand-sm: 0 1px 2px rgba(0,102,255,0.05);
  --shadow-brand-md: 0 4px 6px rgba(0,102,255,0.07), 0 2px 4px rgba(0,102,255,0.04);
  --shadow-brand-lg: 0 10px 25px rgba(0,102,255,0.10), 0 4px 10px rgba(0,102,255,0.05);
}
```

Usage: `bg-primary`, `text-accent`, `rounded-[--radius-card]`, `shadow-[--shadow-brand-md]`.

### Pattern 5: Content as Typed Constants

**What:** All text content lives in `lib/constants.ts` as typed objects. Sections import data, not props.

**Example:**
```typescript
// lib/constants.ts
export const PRICING_TIERS = [
  {
    name: 'Starter',
    price: '$299',
    period: '/mo',
    description: 'For individual agents',
    features: ['AI Texting', 'Up to 500 leads/mo', '...'],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  // ...
] as const satisfies readonly PricingTier[];
```

## Anti-Patterns to Avoid

### Anti-Pattern 1: 'use client' on page.tsx or layout.tsx
**What:** Marking the page or layout as a Client Component.
**Why bad:** Forces entire page to client-render. Kills SSG, increases bundle 2-3x, hurts LCP and SEO.
**Instead:** Keep page.tsx as Server Component. Import Client Component sections into it.

### Anti-Pattern 2: Global State Management
**What:** Installing Redux/Zustand/Jotai for a marketing site.
**Why bad:** Zero shared mutable state on this site. Only state is scroll position (IntersectionObserver) and mobile menu toggle (local useState).
**Instead:** Local component state only. Content from constants.ts.

### Anti-Pattern 3: Over-Splitting Components
**What:** Creating HeroHeadline.tsx, HeroCTA.tsx, HeroSubtitle.tsx, HeroBadge.tsx.
**Why bad:** Marketing sections are not reusable. Over-splitting creates navigation overhead and prop-drilling.
**Instead:** One file per section. Extract to ui/ only when a pattern repeats across 2+ sections.

### Anti-Pattern 4: JavaScript Marquee
**What:** Using setInterval or requestAnimationFrame for infinite scroll ticker.
**Why bad:** Unnecessary JS overhead, stutters when tab is backgrounded, burns battery on mobile.
**Instead:** Pure CSS `@keyframes` with `transform: translateX()`. Duplicate DOM content for seamless loop.

### Anti-Pattern 5: Dynamic Imports for Above-the-Fold
**What:** `dynamic(() => import('./Hero'), { ssr: false })` to "optimize."
**Why bad:** Hero is the LCP element. Dynamic import delays it, causing white flash.
**Instead:** Only use `dynamic` for heavy below-fold components. Hero loads normally.

## Responsive Strategy

| Breakpoint | Width | Layout Adjustments |
|------------|-------|-------------------|
| Mobile | < 768px | Single column, stacked, hamburger nav, 16-24px padding, smaller type |
| Tablet | 768-1023px | 2-col where appropriate, condensed card grid |
| Desktop | 1024-1439px | Full layouts, 2x2 features, 3-col pricing |
| Wide | 1440px+ | Max-width 1280px container, centered |

Key responsive decisions:
- Hero: 2-col desktop, stack on mobile (chat mockup below copy)
- Features: 2x2 grid desktop, single column mobile
- Pricing: 3-col desktop, stacked mobile with "Most Popular" first
- Comparison: Side-by-side desktop, stacked or tabbed mobile
- Testimonials: 3-card row desktop, single-card swipe mobile

## Deployment Strategy

Use default Vercel SSR deployment (NOT `output: 'export'`). Benefits:
- Automatic `next/image` optimization (WebP/AVIF conversion)
- Middleware capability if needed later
- ISR for future dynamic content
- Better caching headers
- Preview deploys on PR branches

No environment variables needed (no backend, no API keys).

## Build Order (Dependency-Based)

| Phase | Build | Why This Order |
|-------|-------|----------------|
| 1 | Scaffolding: Next.js 15, Tailwind v4 @theme, fonts, HeroUI provider, SectionWrapper, ScrollReveal | Foundation. Every section depends on tokens, fonts, animation wrapper |
| 2 | Navbar + Hero + Footer | Structural frame + first impression. Tests font loading, responsive layout, LCP |
| 3 | SocialProof + ProductOverview | Below-hero content. Tests CSS marquee, count-up animations |
| 4 | Features + CrmIntegrations | Content sections. Tests card grid, staggered animations, logo grid |
| 5 | Testimonials + Comparison | Social proof sections. Tests carousel, two-column slide-in |
| 6 | Pricing + FinalCta | Conversion sections. Tests tier cards, placeholder form |
| 7 | Polish: SEO metadata, OG image, responsive QA, Lighthouse audit, deploy | Full-page testing |

Phases 3-4 and 5-6 have internal parallelism -- sections within each phase are independent.

## Sources

- [Next.js App Router docs](https://nextjs.org/docs/app) -- HIGH confidence
- [Next.js project structure](https://nextjs.org/docs/app/getting-started/project-structure) -- HIGH confidence
- [Next.js font optimization](https://nextjs.org/docs/app/getting-started/fonts) -- HIGH confidence
- [HeroUI Next.js setup](https://www.heroui.com/docs/frameworks/nextjs) -- HIGH confidence
- [HeroUI Tailwind v4 guide](https://www.heroui.com/docs/guide/tailwind-v4) -- HIGH confidence
- [Tailwind CSS v4 release](https://tailwindcss.com/blog/tailwindcss-v4) -- HIGH confidence
- [Motion.dev React quick start](https://motion.dev/docs/react-quick-start) -- HIGH confidence
- [Next.js best practices 2025](https://dev.to/bajrayejoon/best-practices-for-organizing-your-nextjs-15-2025-53ji) -- MEDIUM confidence

---
*Architecture research for: BuyerRelay single-page marketing website*
*Researched: 2026-03-06*
