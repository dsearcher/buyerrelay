# YOUR PLAYBOOK: From Zero to Live Website

> This is YOUR step-by-step guide. Not for Claude — for you, the human.
> Every step tells you exactly what to do, what to type, and what to expect.

---

## BEFORE YOU START (30-60 min of prep)

You need these things ready. Without them, Claude will generate placeholder garbage.

### Must have (won't start without these)

| # | What | Why | How to get it fast |
|---|------|-----|--------------------|
| 1 | **Company name** | Goes everywhere — logo, title, footer, meta tags | Just decide. Don't overthink. |
| 2 | **Domain** | Needed for deployment | Buy on Namecheap/Cloudflare. `yourname.com` or `yourname.ai` |
| 3 | **Logo (SVG)** | Header, footer, favicon, OG image | Option A: Pay $50 on Fiverr (24h turnaround). Option B: Use Midjourney/DALL-E to generate, then vectorize with vectorizer.ai. Option C: Text-only logo — just your company name in Outfit font, Claude can generate this. Save as `brand_assets/logo.svg` |
| 4 | **One sentence: what your product does** | Hero subtitle, meta description | Example: "AI-powered calling, texting, and appointment setting for real estate agents" |
| 5 | **Pricing** | Section 9 needs real numbers | Decide 3 tiers. Look at Structurely's pricing page for reference. Starter ~$99-199, Pro ~$299-499, Enterprise = "Contact Sales" |

### Should have (makes site 10x better)

| # | What | Why | How to get it fast |
|---|------|-----|--------------------|
| 6 | **2-3 product screenshots** | Hero chat mockup, features section, CRM section | If you have a real product: screenshot it. If not: create mockups in Figma (free) or ask Claude to generate placeholder UI screenshots |
| 7 | **Demo booking link** | CTA buttons need somewhere to go | Create free Cal.com account (5 min). Set up a "Book a Demo" event type. Copy the link. |
| 8 | **1-2 testimonials** | Social proof section | Ask beta users / early contacts. Even "We saw X% improvement in Y" from a friendly contact works. Include their name, title, company, and a headshot. |

### Don't need yet (Claude will use smart placeholders)

- Blog posts
- Team photos
- G2/Capterra badges (submit after launch)
- Real integration logos (Claude uses CRM logos you plan to integrate with)
- Video demo (add later with Loom, takes 10 min)

---

## STEP 1: OPEN THE PROJECT (2 min)

Open terminal:
```bash
cd ~/projects/realestate
```

### Put your assets in place

```bash
# Copy your logo into the project
cp /path/to/your/logo.svg brand_assets/logo.svg

# If you have a dark version:
cp /path/to/your/logo-dark.svg brand_assets/logo-dark.svg

# If you have product screenshots:
cp /path/to/screenshots/* brand_assets/product-screenshots/
```

---

## STEP 2: START CLAUDE CODE (1 min)

```bash
claude --dangerously-skip-permissions
```

> The `--dangerously-skip-permissions` flag lets Claude work without asking you
> to approve every file write and git commit. GSD needs this to run smoothly.
> It's safe — you're working on a new project with nothing to break.

---

## STEP 3: INITIALIZE THE PROJECT WITH GSD (15-30 min)

Type this in Claude:
```
/gsd:new-project
```

### What happens:
GSD will ask you questions about the project. **You don't need to be creative here** — the answers are already in BRIEF.md. But GSD doesn't know YOUR specifics. Answer these:

| GSD asks | You answer |
|----------|-----------|
| What are you building? | "A marketing website for [YOUR COMPANY NAME], an AI-powered real estate lead management platform. Full spec is in BRIEF.md." |
| Tech stack preferences? | "Next.js 15, Tailwind v4, Hero UI, Motion.dev. All specified in CLAUDE.md" |
| What's the target audience? | "US real estate agents, teams, and brokerages" |
| What's the primary goal? | "Demo bookings. Every section drives toward booking a demo." |
| Any specific requirements? | "10-section single page. Must look like an established company, not a startup. Design references are Structurely and Verse.ai. Details in BRIEF.md." |

GSD will then:
1. Spawn 4 research agents (you'll see "Spawning researchers..." — just wait)
2. Show you REQUIREMENTS.md — **review it, type "approved" if it looks right**
3. Show you ROADMAP.md with phases — **review phases, type "approved"**

### After GSD finishes init:
It will tell you. Then type:
```
mv BRIEF.md .planning/BRIEF-ARCHIVED.md
```
Then:
```
/clear
```
This gives Claude a fresh context for the build phase.

---

## STEP 4: BUILD PHASE BY PHASE (2-4 hours total)

For each phase, you'll run 4 commands. Here's the loop:

### Phase 1: Project Scaffold

```
/gsd:discuss-phase 1
```
> GSD asks about setup preferences. Answer: "Use the tech stack from CLAUDE.md. Standard Next.js setup."
> Type "approved" when done.

```
/gsd:plan-phase 1
```
> GSD creates build plans. Review briefly. Type "approved".

```
/gsd:execute-phase 1
```
> **This is where you can walk away.** Claude builds everything.
> Come back when it says "Phase 1 complete" or similar.

```
/gsd:verify-work 1
```
> GSD asks you to test. For scaffold: "Can you run `npm run dev`?" Check localhost:3000 loads.
> Type "passed" or describe what's broken.

Then clean context:
```
/clear
```

### Phases 2-6: Build Each Section Group

**Repeat the same 4-command loop for each phase:**

```
/gsd:discuss-phase N
```
> This is where YOUR input matters most. GSD will ask about design choices.
> Key things to say:
> - "Follow the section spec from the archived BRIEF"
> - "Use Structurely as the primary reference for layout"
> - "Use our brand colors from brand-guide.md"
> - "Make it look premium, not generic"
> - For Hero: "Include the interactive chat mockup with the conversation example from the brief"
> - For Testimonials: "Use Ylopo's format — dark cards with specific dollar amounts"
> - For Pricing: "Starter at $X, Pro at $Y, Enterprise is Contact Sales"

```
/gsd:plan-phase N
```
> Review. Approve.

```
/gsd:execute-phase N
```
> Walk away. Check back when done.
> **Claude will visually verify using Chrome after building each section.**

```
/gsd:verify-work N
```
> GSD walks you through testing. Open localhost:3000 in your browser.
> Scroll through the site. For each section:
> - Does it look professional? (not generic, not broken)
> - Are the colors right? (blue + purple gradient, not default Tailwind)
> - Does mobile look good? (resize your browser to phone width)
> - Are CTAs visible and clickable?
>
> If something looks off, describe it: "The hero text is too small on mobile"
> or "The gradient looks wrong, it should be blue to purple not blue to green"
>
> GSD will create fix plans and re-execute.

```
/clear
```

### Phase 7: Polish & Deploy

```
/gsd:discuss-phase 7
/gsd:plan-phase 7
/gsd:execute-phase 7
```

This phase handles:
- Responsive fixes across all breakpoints
- Lighthouse performance optimization
- Meta tags, OG images, favicon
- Final visual QA

---

## STEP 5: DEPLOY (10 min)

After all phases pass verification:

```
/gsd:complete-milestone
```

Then deploy to Vercel:

### Option A: If you have Vercel CLI
```bash
npx vercel --prod
```

### Option B: Connect to GitHub (recommended for ongoing updates)
1. Create a GitHub repo
2. Push your code: `git remote add origin <your-repo-url> && git push -u origin main`
3. Go to vercel.com → Import → Select your repo → Deploy
4. Connect your domain in Vercel dashboard → Settings → Domains

---

## STEP 6: POST-LAUNCH QUICK WINS (30 min each)

After the site is live, add these one at a time:

```
/gsd:quick "Connect Cal.com embed for demo booking — booking link is [YOUR_LINK]"
```

```
/gsd:quick "Add PostHog analytics script"
```

```
/gsd:quick "Record a 2-min Loom product demo and embed in the Video section"
```

---

## IF THINGS GO WRONG

| Problem | What to do |
|---------|-----------|
| Claude seems confused or slow | Type `/clear` and `/gsd:resume-work` |
| A section looks generic/ugly | In verify-work, say exactly what's wrong: "Looks like default Tailwind. Use our brand gradient. Reference Verse.ai hero." |
| Build fails with errors | Type `/gsd:debug "describe the error"` — it spawns debug agents |
| You want to change something after it's built | `/gsd:quick "Change the hero headline to X"` |
| You need to stop and continue tomorrow | `/gsd:pause-work` then next day: `/gsd:resume-work` |
| Context feels degraded | `/clear` then `/gsd:resume-work` — fresh context, same progress |
| A whole section needs redesign | `/gsd:insert-phase N "Redesign section X"` |

---

## QUALITY CHECKLIST (Before Telling Anyone About Your Site)

Open your site on your phone and check:

- [ ] Logo loads correctly in header
- [ ] Hero section: headline is bold, gradient text visible, chat mockup looks real
- [ ] "Book a Demo" button goes to your Cal.com link
- [ ] Scrolling feels smooth (no janky animations)
- [ ] Stats count up when you scroll to them
- [ ] Feature cards have icons and hover effects
- [ ] CRM logos display correctly
- [ ] Testimonials look professional (dark cards, real names)
- [ ] Pricing is correct (right prices, right features per tier)
- [ ] Footer links work
- [ ] Favicon shows in browser tab
- [ ] Page loads fast (<3 seconds)
- [ ] No horizontal scroll on mobile
- [ ] No "Lorem ipsum" or placeholder text anywhere

---

## TIMELINE ESTIMATE

| Day | What | Your effort |
|-----|------|-------------|
| Day 0 | Prep: logo, name, pricing, booking link | 30-60 min active work |
| Day 1 | GSD init + Phase 1-3 (scaffold, hero, social proof) | 1-2 hours (mostly waiting + approving) |
| Day 2 | Phase 4-6 (features, integrations, testimonials, pricing) | 1-2 hours (mostly waiting + approving) |
| Day 3 | Phase 7 (polish) + deploy | 1 hour |
| Day 4 | Post-launch: analytics, real demo link, video | 30 min per task |

**Total human effort: ~5-7 hours across 3-4 days.**
**Most of that is waiting + reviewing + saying "approved" or "fix this".**
