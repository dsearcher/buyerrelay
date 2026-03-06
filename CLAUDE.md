# CLAUDE.md - AI Real Estate Lead Platform Website

## Project Overview
Building a professional, conversion-focused website for an AI-powered real estate lead management platform entering the US market. Full specification is in `BRIEF.md`.

## GSD Workflow
This project uses **Get Shit Done (GSD)** for spec-driven development with subagent orchestration. All build work goes through GSD commands:
- `/gsd:new-project` to initialize from the blueprint
- `/gsd:discuss-phase N` before each phase
- `/gsd:plan-phase N` to research + create atomic plans
- `/gsd:execute-phase N` to build with parallel subagents
- `/gsd:verify-work N` for user acceptance testing

## Document Hierarchy (no duplication)
1. **`CLAUDE.md`** (this file) — Runtime config. Always loaded. Single source of truth for stack, brand, rules.
2. **`brand_assets/brand-guide.md`** — Design tokens (colors, typography, shadows, spacing). Referenced during UI build.
3. **`BRIEF.md`** — One-time input brief with section specs, content strategy, competitor data. Consumed by `/gsd:new-project`.
4. **`.planning/`** — GSD-managed living state (PROJECT.md, REQUIREMENTS.md, ROADMAP.md, STATE.md). Created after init.

> **Rule:** After `/gsd:new-project` completes, move the brief out of root:
> `mv BRIEF.md .planning/BRIEF-ARCHIVED.md`
> From that point, `.planning/` docs are the sole source of truth. Never reference BRIEF.md directly again.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code
- Check `brand_assets/` folder for logo, colors, and brand guidelines
- Read `BRIEF.md` for detailed section specifications

## Tech Stack
- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Hero UI (formerly NextUI)
- **Animations:** Motion.dev (Framer Motion)
- **Fonts:** next/font — Outfit (headings) + Inter (body)
- **Hosting:** Vercel
- **Forms:** Cal.com embed for demo booking

## Brand Identity
```
Primary:      #0066FF (electric blue)
Accent:       #7C3AED (purple, for gradients)
Gradient:     linear-gradient(135deg, #0066FF, #7C3AED)
Background:   #FAFBFF (slight blue tint)
Dark sections: #0F172A
Text:         #0F172A (primary), #475569 (secondary)
Success/CTA:  #10B981
```

## Anti-Generic Design Rules
- NEVER use default Tailwind palette (indigo-500, blue-600, etc.)
- NEVER use flat `shadow-md` — always layered, color-tinted shadows
- NEVER use same font for headings and body — Outfit (headings) + Inter (body)
- NEVER use `transition-all` — only `transform` and `opacity`
- ALWAYS use tight letter-spacing (-0.03em) on headings > 24px
- ALWAYS provide hover, focus-visible, and active states on interactive elements
- Surfaces need a layering system: base > elevated > floating
- Buttons are pill-shaped (border-radius: 999px)
- Cards use 16px border-radius, generous padding (32px)
- Use blue-tinted shadows: `rgba(0, 102, 255, 0.07)`

## Subagent Strategy
Claude MUST use subagents (Agent tool) for:
1. **Parallel research** — When investigating multiple topics (competitor patterns, library APIs, design references), spawn separate Explore agents for each
2. **Independent file creation** — When building sections that don't depend on each other (e.g., features component + testimonials component), use parallel agents
3. **Design verification** — Spawn an agent to take screenshots and compare with references while the main context continues planning
4. **Content generation** — Delegate copy/SEO/meta tag writing to subagents to keep main context clean
5. **Debugging** — Use `/gsd:debug` which spawns its own debug agents

### When NOT to use subagents:
- Sequential dependent tasks (component B imports from component A)
- Quick single-file edits
- Tasks requiring the full conversation context

## Content Guidelines
- US English, professional but approachable tone
- Lead with numbers and outcomes ("20-50% more appointments")
- Active voice: "We convert" not "Leads are converted"
- NEVER say "we're new" or "startup" — say "next-generation" or "purpose-built"
- Every section must include at least one specific metric

## Site Structure (10 Sections)
1. Navbar (sticky, blur, Hero UI)
2. Hero (product demo + chat mockup + "Try the AI" CTA)
3. Social Proof Ticker (scrolling stats + integration logos)
4. Video/Product Overview (demo + stat cards)
5. Features Grid (4 cards: Calls, Text, Appointments, Transfers)
6. CRM Integrations (logos + product screenshot)
7. Testimonials (Ylopo-style with $ amounts)
8. Comparison Table ("With Us vs Without Us")
9. Pricing (3 tiers)
10. Final CTA + Footer

## Reference Sites (for cloning patterns)
- **Structurely** (structurely.com) — Hero layout, product demo, features
- **Verse.ai** (verse.ai) — Visual style, gradients, comparison table
- **Ylopo** (ylopo.com) — Testimonials format, social proof
- **LocalizeOS** (localizeos.com) — Enterprise logo wall

## Component Sources
- 21st.dev — Animated backgrounds, logo tickers, testimonial carousels
- Hero UI — Navbar, buttons, cards, inputs
- Motion.dev — All scroll animations
- UI Verse — CSS-only animated elements

## Visual QA (Chrome Extension)

After building each section, verify visuals using the Chrome browser extension (`mcp__claude-in-chrome__*`):

### Verification Loop (run after each section is built)
1. **Start dev server** if not running: `npm run dev`
2. **Navigate** to `http://localhost:3000` using `mcp__claude-in-chrome__navigate`
3. **Screenshot** the section using `mcp__claude-in-chrome__computer` (action: screenshot)
4. **Check against brand rules:**
   - Colors match brand-guide.md tokens (no default Tailwind blue/indigo)
   - Typography: Outfit for headings, Inter for body, correct weights/sizes
   - Shadows are layered and blue-tinted, not flat
   - Buttons are pill-shaped (999px radius)
   - Cards have 16px radius, proper padding
   - Spacing follows 4px base unit scale
   - Interactive elements have hover/focus states
5. **Scroll down** to check each section sequentially
6. **Test responsive:** resize window to 375px (mobile), 768px (tablet), 1440px (desktop)
7. **Fix issues** found, re-screenshot, confirm fix

### When to run visual QA
- After completing each GSD phase that produces UI
- During `/gsd:verify-work` step
- Before `/gsd:complete-milestone`

### Chrome extension tools to use
- `tabs_context_mcp` — get current tabs
- `tabs_create_mcp` — open new tab
- `navigate` — go to localhost or reference site
- `computer` (screenshot) — capture current state
- `computer` (scroll) — scroll to check below-fold sections
- `resize_window` — test responsive breakpoints
- `read_page` — check accessibility tree for semantic HTML

## GSD Configuration Preferences
- Mode: `interactive` (confirm at each step)
- Profile: `quality` (Opus for planning, Opus for execution)
- Granularity: `standard`
- Parallelization: `enabled`
- Research: `enabled`
- Plan checking: `enabled`
- Git branching: `phase` (one branch per phase)

## Session Start Checklist
When starting a new session on this project:
1. Read `BRIEF.md` for full context
2. Run `/gsd:progress` to see current state
3. Run `/gsd:resume-work` if mid-phase
4. Use `/clear` between major phases for fresh context
