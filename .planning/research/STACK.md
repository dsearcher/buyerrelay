# Stack Research

**Domain:** Single-page SaaS marketing website (real estate AI platform)
**Researched:** 2026-03-06
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Next.js | 15.5.x (latest 15.5.9) | Framework, SSG, routing, image optimization | Project specifies Next.js 15. v15.5 is the latest stable minor in the 15.x line with Turbopack builds (beta), stable Node.js middleware, and security patches through Dec 2025. Next.js 16 exists but would change the project scope unnecessarily. |
| React | 19.x | UI rendering | Ships with Next.js 15.5. React 19 includes Server Components, Actions, and improved Suspense -- all useful even for a static marketing page. |
| TypeScript | 5.x | Type safety | Next.js 15 has first-class TS support. Catches prop/config errors at build time. Non-negotiable for any project with more than trivial complexity. |
| Tailwind CSS | 4.x (latest 4.0+) | Utility-first styling | CSS-first config (no tailwind.config.js needed), native container queries, 3D transforms, smaller runtime. Released Jan 2025, stable. Requires Safari 16.4+, Chrome 111+, Firefox 128+ -- acceptable for a B2B SaaS audience. |
| HeroUI (formerly NextUI) | 2.8.9 (@heroui/react) | UI component library | Provides Navbar (blur), Cards, Buttons, Inputs, Modal out of the box. v2.8+ has Tailwind v4 support. Built on React Aria for accessibility. Use v2 (stable), NOT v3 (still beta as of March 2026). |
| Motion | 12.x (latest 12.34.5) | Animation library | Formerly Framer Motion. Install `motion` package, import from `motion/react`. Scroll-triggered animations, layout animations, gesture support. 18M+ monthly npm downloads. Fully compatible with React 19. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| sharp | latest | Image optimization in production | Always install for Next.js production builds. Reduces image size 40-70%. Required for `next/image` to work optimally outside Vercel. |
| react-intersection-observer | latest | Viewport detection for scroll animations | Use for count-up triggers, lazy section reveals. Lightweight wrapper around native IntersectionObserver API. Motion has built-in `whileInView` but this gives finer control for non-animated triggers. |
| @tailwindcss/postcss | latest | PostCSS plugin for Tailwind v4 | Required replacement for the old `tailwindcss` PostCSS plugin. Autoprefixer is no longer needed (handled automatically). |
| heroui-cli | latest | HeroUI scaffolding and component management | Optional but useful for adding individual HeroUI components without importing the full bundle. |
| clsx | latest | Conditional className composition | Lightweight utility for merging Tailwind classes conditionally. Simpler than tailwind-merge for this project's needs. |
| tailwind-merge | latest | Tailwind class conflict resolution | Use when dynamically composing classes from props where conflicts are possible (e.g., component variants). Pairs with clsx. |

### Fonts (via next/font)

| Font | Weights | Purpose | Setup |
|------|---------|---------|-------|
| Outfit | 600, 700, 800 | Headings (H1-H3) | `import { Outfit } from 'next/font/google'` -- variable font, self-hosted at build time, zero layout shift |
| Inter | 400, 500, 600 | Body text, UI elements | `import { Inter } from 'next/font/google'` -- variable font, same benefits |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| ESLint | Code quality | Ships with `create-next-app`. Use Next.js ESLint config. |
| Prettier + prettier-plugin-tailwindcss | Code formatting + class sorting | Auto-sorts Tailwind classes in consistent order. Critical for readable utility-heavy markup. |
| Turbopack | Dev server bundler | Enabled with `next dev --turbopack` in Next.js 15.5. 10x faster HMR than Webpack. Stable for dev, beta for builds. |

## Installation

```bash
# Create project
npx create-next-app@15 buyerrelay-website --typescript --tailwind --app --src-dir

# Core UI
npm install @heroui/react motion

# Supporting
npm install sharp react-intersection-observer clsx tailwind-merge

# PostCSS (Tailwind v4)
npm install @tailwindcss/postcss

# Dev dependencies
npm install -D prettier prettier-plugin-tailwindcss
```

### PostCSS Configuration (postcss.config.mjs)
```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    // No autoprefixer needed -- Tailwind v4 handles it
  },
};
```

### Tailwind v4 CSS Entry (globals.css)
```css
@import "tailwindcss";

/* HeroUI plugin -- create hero.ts file that exports heroui() */
@plugin './hero.ts';

/* Custom theme tokens from brand guide */
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
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Font Setup (app/layout.tsx)
```typescript
import { Outfit, Inter } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Apply to <html>: className={`${outfit.variable} ${inter.variable}`}
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| HeroUI v2 (stable) | HeroUI v3 (beta) | Only after v3 reaches stable release. v3 has redesigned components and new features but is beta-quality (3.0.0-beta.8). For a production marketing site shipping now, v2.8.9 is the right call. |
| HeroUI v2 | shadcn/ui | If you want copy-paste components with zero library dependency. Better for custom design systems. Worse for rapid prototyping -- HeroUI gives you polished Navbar, Card, Button immediately. |
| Motion (motion package) | CSS animations only | For ultra-simple fades. But this project needs scroll-triggered reveals, count-ups, staggered children, and layout animations -- Motion handles all of these with a clean API. |
| Tailwind CSS v4 | Tailwind CSS v3.4 | If you need to support IE11 or Safari < 16.4. Not relevant here -- B2B SaaS audience uses modern browsers. |
| Next.js 15.5 | Next.js 16 | If starting fresh with no constraints. But the project spec locks Next.js 15, and 15.5 is mature with all needed features. Upgrading to 16 later is straightforward. |
| clsx + tailwind-merge | cva (class-variance-authority) | If building a reusable component library with complex variant systems. Overkill for a 10-section landing page. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| `framer-motion` npm package | Deprecated package name. Still works but redirects to the `motion` package. Using the old name causes peer dependency warnings with React 19. | `npm install motion`, import from `motion/react` |
| HeroUI v3 (beta) | 3.0.0-beta.8 as of March 2026. API is still changing. Production marketing site needs stability. | HeroUI v2.8.9 (stable, Tailwind v4 compatible) |
| `@tailwind` directives in CSS | Removed in Tailwind v4. Using them causes silent failures or build errors. | `@import "tailwindcss"` in your CSS entry file |
| tailwind.config.js (as primary config) | Tailwind v4 uses CSS-first config via `@theme`. JS config is only for backward compatibility and plugin registration. | `@theme { }` block in globals.css for design tokens |
| Autoprefixer | Tailwind v4 handles vendor prefixing internally. Adding autoprefixer causes duplicate prefixes and slightly larger CSS. | Remove from postcss.config entirely |
| `transition-all` in Tailwind | Animates every property including layout-triggering ones (width, height). Causes jank and poor CLS scores. | `transition-transform` and `transition-opacity` only (per brand guide) |
| Default Tailwind color palette | Brand guide explicitly forbids default indigo-500, blue-600, etc. Using them makes the site look generic. | Custom `@theme` tokens mapped to brand colors |
| react-countup (standalone) | Has React 19 compatibility issues with scroll spy and ref handling. Broken in production builds with Next.js 15+. | Use Motion's `useMotionValue` + `useTransform` + `animate()` for count-up animations, or a simple custom hook with requestAnimationFrame |
| CSS Modules | Conflicts with Tailwind utility-first approach. Creates unnecessary abstraction for a single-page site. | Tailwind utility classes directly in JSX |
| Styled Components / Emotion | Runtime CSS-in-JS adds bundle size and hurts SSR performance. Incompatible with React Server Components. | Tailwind CSS (zero-runtime) |

## Stack Patterns for This Project

**Since this is a static marketing page with no backend:**
- Use `output: 'export'` in next.config.js for static HTML export to Vercel (or keep default for Vercel's optimized hosting)
- All sections are Server Components by default -- only add `'use client'` for interactive elements (Navbar hamburger, carousel, form inputs, scroll animations)
- Keep client component boundaries tight: wrap only the interactive part, not the entire section

**Since the project uses HeroUI + custom brand tokens:**
- Use HeroUI's theme provider to override default colors with brand palette
- Use HeroUI for structural components (Navbar, Button, Card, Input) and custom Tailwind for layout/spacing
- Do NOT fight HeroUI's styling -- extend it through Tailwind v4 theme tokens

**Since animations are scroll-triggered:**
- Use Motion's `whileInView` for fade/slide reveals (most sections)
- Use Motion's `animate()` function for count-up numbers (stat cards)
- Use CSS `@keyframes` for infinite marquee (social proof ticker) -- no JS needed for continuous scrolling
- Set `viewport={{ once: true }}` on all scroll animations to prevent re-triggering

## Version Compatibility Matrix

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| Next.js 15.5.x | React 19.x | Ships together via create-next-app |
| @heroui/react 2.8.9 | Tailwind CSS 4.x | Requires @heroui/react >= 2.8.0 for Tailwind v4 |
| @heroui/react 2.8.9 | React 19.x | Uses React Aria under the hood, compatible |
| @heroui/react 2.8.9 | Next.js 15.x | Official Next.js framework guide exists |
| motion 12.x | React 19.x | Full compatibility, import from `motion/react` |
| motion 12.x | Next.js 15.x | Works with App Router, needs `'use client'` on animated components |
| Tailwind CSS 4.x | @tailwindcss/postcss | Replaces the old `tailwindcss` PostCSS plugin |
| Tailwind CSS 4.x | Next.js 15.x | Supported via PostCSS or Vite plugin |

## Sources

- [Next.js 15.5 blog post](https://nextjs.org/blog/next-15-5) -- features and release info (HIGH confidence)
- [Next.js releases](https://github.com/vercel/next.js/releases) -- version 15.5.9 confirmed (HIGH confidence)
- [Tailwind CSS v4.0 release](https://tailwindcss.com/blog/tailwindcss-v4) -- breaking changes and new features (HIGH confidence)
- [Tailwind CSS upgrade guide](https://tailwindcss.com/docs/upgrade-guide) -- migration from v3 to v4 (HIGH confidence)
- [HeroUI Tailwind v4 docs](https://www.heroui.com/docs/guide/tailwind-v4) -- configuration steps for HeroUI + TW4 (HIGH confidence)
- [HeroUI v2.8.0 blog](https://www.heroui.com/blog/v2.8.0) -- Tailwind v4 support announcement (HIGH confidence)
- [@heroui/react npm](https://www.npmjs.com/package/@heroui/react) -- version 2.8.9 confirmed (HIGH confidence)
- [HeroUI v3 docs](https://v3.heroui.com/docs/react/getting-started) -- beta status 3.0.0-beta.8 confirmed (HIGH confidence)
- [Motion npm](https://www.npmjs.com/package/motion) -- version 12.34.5 confirmed (HIGH confidence)
- [Motion upgrade guide](https://motion.dev/docs/react-upgrade-guide) -- import from `motion/react` (HIGH confidence)
- [Next.js font optimization docs](https://nextjs.org/docs/app/getting-started/fonts) -- next/font setup (HIGH confidence)
- [Next.js sharp docs](https://nextjs.org/docs/messages/install-sharp) -- production image optimization (HIGH confidence)
- [HeroUI Next.js framework guide](https://www.heroui.com/docs/frameworks/nextjs) -- integration setup (HIGH confidence)

---
*Stack research for: BuyerRelay SaaS marketing website*
*Researched: 2026-03-06*
