# Phase 2: Structural Frame - Context

**Gathered:** 2026-03-06
**Status:** Ready for planning
**Source:** Derived from REQUIREMENTS.md, brand-guide.md, and BRIEF.md specifications

<domain>
## Phase Boundary

Build the three structural elements visitors see first: sticky navbar, hero section with animated chat mockup, and footer. Together these create the professional first impression that makes cold-email recipients stay and scroll. Phase 1 foundation (tokens, fonts, HeroUI, animations) is complete and ready to use.

</domain>

<decisions>
## Implementation Decisions

### Navbar (NAV-01 through NAV-04)
- Sticky with blur backdrop using HeroUI Navbar component
- Layout: Logo left, nav links center (How It Works, Features, Pricing), CTAs right
- CTAs: "Login" ghost button + "Book a Demo" primary pill button
- Mobile: hamburger menu with slide-out navigation (HeroUI built-in)
- Nav links smooth-scroll to section anchors with scroll-mt-20 offset (SectionWrapper already handles this)
- Use client wrapper pattern established in Phase 1 for HeroUI Navbar

### Hero (HERO-01 through HERO-07)
- 2-column layout: headline + CTAs left (55%), chat mockup right (45%)
- Gradient text on "Closed Deals" using existing `.gradient-text` CSS utility
- Two CTAs: "Book a Demo" (primary solid pill) + "See It In Action" (secondary outline pill)
- Chat mockup: animated AI conversation showing lead qualification with auto-typing effect
- "Try the AI" phone input below chat mockup (placeholder — scrolls to final CTA section)
- Subtle radial gradient background with visual texture (not flat)
- Stacks vertically on mobile: headline first, chat mockup below
- H1 follows brand guide: 56px / Outfit 800 / -0.03em / 1.1 line-height

### Chat Mockup (HERO-04)
- Shows a realistic lead qualification conversation between AI and a lead
- Sequential bubble animations with typing indicator
- Conversation demonstrates BuyerRelay's value: instant response, qualification questions, appointment booking
- Visual style: modern chat UI (rounded bubbles, avatar, timestamps)

### Footer (FOOT-01, FOOT-02)
- Dark background section (bg-dark #0F172A)
- 4-column layout: Logo + socials, Product links, Resources links, Company + Legal
- Copyright and legal links at bottom
- Use SectionWrapper with dark={true}

### Claude's Discretion
- Chat mockup visual frame (iPhone device frame vs flat card vs floating bubbles)
- Exact conversation script content and number of messages
- Typing animation speed and timing
- Hero background texture implementation (dots, grid, gradient mesh)
- Footer social icon selection and styling
- Navbar scroll transition animation details
- Mobile menu animation style

</decisions>

<specifics>
## Specific Ideas

- Reference Structurely.com hero layout for the 2-column hero + AI demo pattern
- Chat mockup should feel like a real iMessage/text conversation — not a chatbot widget
- Navbar should feel premium — like Linear or Vercel's nav, not a Bootstrap navbar
- "Try the AI" phone input is a conversion hook — make it feel interactive even though it's placeholder
- Footer should match the weight of competitors like Ylopo — substantial, not an afterthought

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `SectionWrapper`: Consistent section layout with max-w-1280px, padding, dark mode, scroll offset
- `ScrollReveal`: Scroll-triggered fade/slide animations
- `StaggerChildren`: Staggered animation container for lists/grids
- `CountUp`: Number animation on scroll (for stat elements)
- Animation variants in `src/lib/animations.ts`: fadeInUp, fadeIn, slideInLeft, slideInRight, staggerContainer, staggerItem, scaleOnHover
- `.gradient-text` CSS utility class for blue-to-purple text gradient
- HeroUI provider configured and working

### Established Patterns
- Client wrapper pattern: HeroUI components wrapped in client components, pages stay server components
- Tailwind v4 CSS-first config with @theme tokens
- PostCSS object syntax for plugin config
- All brand tokens available as Tailwind utilities (bg-primary, text-text-secondary, shadow-brand-md, etc.)

### Integration Points
- `src/app/page.tsx`: Currently renders VerificationPage — will need to be replaced with actual sections
- `src/app/layout.tsx`: Root layout with fonts, HeroUI provider — navbar likely goes here or in page
- Section IDs for nav scroll targets: needs consistent naming (e.g., "how-it-works", "features", "pricing")

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-structural-frame*
*Context gathered: 2026-03-06*
