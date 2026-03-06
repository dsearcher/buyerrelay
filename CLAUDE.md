# CLAUDE.md - AI Real Estate Lead Platform Website

## Project Overview
Building a professional, conversion-focused website for an AI-powered real estate lead management platform entering the US market. Full specification is in `WEBSITE_BLUEPRINT.md`.

## GSD Workflow
This project uses **Get Shit Done (GSD)** for spec-driven development with subagent orchestration. All build work goes through GSD commands:
- `/gsd:new-project` to initialize from the blueprint
- `/gsd:discuss-phase N` before each phase
- `/gsd:plan-phase N` to research + create atomic plans
- `/gsd:execute-phase N` to build with parallel subagents
- `/gsd:verify-work N` for user acceptance testing

## Key Reference Files
- `WEBSITE_BLUEPRINT.md` — Complete site specification (sections, design system, colors, typography, animations, content)
- `.planning/` — GSD-managed project state (created after /gsd:new-project)

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
1. Read `WEBSITE_BLUEPRINT.md` for full context
2. Run `/gsd:progress` to see current state
3. Run `/gsd:resume-work` if mid-phase
4. Use `/clear` between major phases for fresh context
