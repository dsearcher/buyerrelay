# PROJECT BRIEF: BuyerRelay Website

> **One-time input for `/gsd:new-project`.** After GSD generates REQUIREMENTS.md
> and ROADMAP.md, those become the living docs. This file is archived reference only.
>
> - Runtime config: `CLAUDE.md`
> - Design tokens: `brand_assets/brand-guide.md`
> - Living project state: `.planning/` (GSD-managed)

---

## GOAL

Build a 1-page, 10-section conversion-focused website for **BuyerRelay** — an AI-powered lead conversion platform for US real estate agents. BuyerRelay responds to leads in seconds, qualifies via AI text/call, nurtures automatically, and delivers ready-to-close buyers to agents' calendars. Must look like an established player, not a startup. Primary conversion goal: demo bookings.

---

## SITE SECTIONS

### Section 1: NAVBAR (sticky)
**Reference:** Structurely navbar

```
Layout: Logo (left) | Nav links (center) | CTA buttons (right)
Links: How It Works | Features | Pricing | Resources
Buttons: "Login" (ghost) | "Try the AI" (primary, pill shape)
Behavior: Blur background on scroll (Hero UI Navbar isBlurred)
Mobile: Hamburger menu
```

Key details:
- Structurely's "Try the AI" yellow CTA on nav = low-friction. Copy with our brand colors.
- Verse.ai's sticky "Let's chat" floating button bottom-right. Add this.

---

### Section 2: HERO
**Reference:** Structurely hero (layout) + Verse.ai (visual style)

```
Layout: 2 columns
  Left (55%):
    - Badge: "TEXT. CALL. AI." (pill, accent color)
    - H1: "Convert Real Estate Leads into Closed Deals"
         "Closed Deals" in gradient text (blue->purple)
    - Subtitle: "AI-powered calling, texting, and appointment setting
                 that works 24/7 so you never miss an opportunity."
    - 2 CTAs:
      * "Book a Demo" (primary, solid, pill, arrow icon)
      * "See It In Action" (secondary, outline, sparkle icon)

  Right (45%):
    - Chat demo mockup showing BuyerRelay conversation:
      BuyerRelay: "Hi Sarah! I noticed you viewed 3 properties in Brooklyn.
                   Are you still looking for a 2-bedroom?"
      Lead: "Yes! Under $800K if possible. Can I see them this weekend?"
      BuyerRelay: "Absolutely! I have 3 options. Let me book a showing for Saturday.
                   Would 10am or 2pm work better?"
    - Below chat: Phone input "Enter your number to try our AI"
    - Button: "Talk to the AI"

Background: Subtle radial gradient (light blue center -> white edges) + SVG noise
```

---

### Section 3: SOCIAL PROOF TICKER
**Reference:** Structurely scrolling stats + Ylopo scrolling testimonials

```
Layout: Full-width auto-scrolling marquee strip
Content:
  "Appointments lifted by 20-50%..."
  "We closed over $1M in less than 3 months..."
  "$72M in transactions in one year..."
  "Response rate increased by 340%..."

Below: Integration logo bar (infinite scroll, grayscale -> color on hover)
  Follow Up Boss | Sierra Interactive | CINC | BoomTown | HubSpot | Salesforce
```

---

### Section 4: VIDEO / PRODUCT OVERVIEW
**Reference:** Structurely "Automate Your Sales Process"

```
Heading: "See How It Works"
Subheading: "From lead to appointment in under 60 seconds"
Content: Embedded product demo video (Loom/Vimeo) or scroll-triggered walkthrough

Below: 3 stat cards
  [50% Lower Overhead] [17% More Qualified Leads] [31% Higher Answer Rate]
  Each: Icon + Big number + Description
  Animation: Count-up on scroll into view
```

---

### Section 5: FEATURES GRID
**Reference:** Structurely features + Verse.ai card style

```
Heading: "Everything You Need to Convert Leads"
Subheading: "AI-powered tools that work while you sleep"
Layout: 2x2 grid desktop, stacked mobile

Card 1 - AI Calling:
  "Human-like AI Calls" — Inbound/outbound, local area codes, appointments/live-transfers
  Badge: "AI-Powered", 5 benefit bullets, screenshot, "Learn more ->"

Card 2 - AI Texting:
  "Smart SMS Conversations" — 57% response rate, drip campaigns, two-way, bulk

Card 3 - Appointment Setting:
  "Automated Appointment Setting" — Google/Outlook/Calendly, lead routing, notifications

Card 4 - Live Transfers:
  "Live Call Transfers" — Realtime connect, local numbers, 31% higher answer rate

Animation: Fade in + slide up, stagger 0.2s. Hover: scale 1.02 + shadow
```

---

### Section 6: CRM INTEGRATIONS
**Reference:** Structurely CRM + LocalizeOS integration bar

```
Heading: "Automatically Generate Appointments from Your CRM"
Subheading: "Integrate with the tools you already use"
Layout: Left text + Right product screenshot
Left: 4 use case badges: "Old Leads" | "Rehashed Leads" | "New Leads (Off Hours)" | "Uncontacted Leads"

Below: Logo grid (2 rows)
  HubSpot | Follow Up Boss | BoomTown | Salesforce
  Sierra Interactive | kvCORE | Firepoint | Chime
```

---

### Section 7: TESTIMONIALS
**Reference:** Ylopo testimonial cards

```
Heading: "Results That Speak for Themselves"
Layout: 3-column carousel (auto-rotating, arrows)

Each card: Dark bg (#0F172A), gradient accent, quote icon, bold quote,
  author photo (circle), name + title, SPECIFIC METRIC in accent color

CRITICAL: Combine quote + dollar amount (Ylopo's strongest element).
Fallback: Verse.ai format — 16x ROI | 98% open rates | <90 sec response
```

---

### Section 8: COMPARISON TABLE
**Reference:** Verse.ai "Ditch the Status Quo"

```
Heading: "Ditch the Status Quo"
Layout: 2 columns — With Us (green, checkmarks) vs Without Us (gray, X marks)

With: Two-way text, 24/7 AI, auto qualify, AI appointments, compliance, unlimited scale, local numbers
Without: One-way blasts, manual follow up, manual qualify, manual appointments, handle compliance, limited bandwidth, generic numbers

Animation: Columns slide in from sides
```

---

### Section 9: PRICING
**Reference:** Structurely pricing

```
"Simple, Transparent Pricing" / "Start with a free trial. No credit card required."

Starter ($XXX/mo) — Individual agents, 5-7 features
Professional ($XXX/mo) — Teams 5-20, "Most Popular" badge, gradient border
Enterprise (Custom) — Brokerages 20+, "Contact Sales"

Below: "All plans include 14-day free trial"
```

---

### Section 10: FINAL CTA + FOOTER
**Reference:** Ylopo bottom form + Structurely footer

```
CTA: Dark bg, "Ready to Convert More Leads?", form (Name/Email/Phone/Size),
  "Book Your Demo" gradient button, trust badges (SOC 2, G2, "Trusted by 500+ agents")

Footer: 4 cols — Logo+socials | Product | Resources | Company+Legal
```

---

## CONTENT STRATEGY

### Messaging
- DON'T: "We're new" / "startup" / "building"
- DO: "Next-generation AI" / "Purpose-built for US agents" / "Built by RE tech veterans"

### Hero Headline Options (A/B test)
1. "Convert Real Estate Leads into Closed Deals"
2. "More Appointments. More Closings. Less Work."
3. "Your AI Sales Team That Never Sleeps"
4. "Stop Losing Leads. Start Closing Deals."

### Value Props
1. Speed: "Respond in under 60 seconds, 24/7"
2. Conversion: "20-50% more appointments"
3. Cost: "50% lower sales overhead"
4. Scale: "Handle unlimited leads without hiring"
5. Quality: "31% higher answer rate with local numbers"

### Social Proof (newcomer strategy)
**Launch:** CRM integration logos, "Trusted by X agents", 2-3 beta testimonials, G2/PH badges
**Month 1-3:** Case studies with $ amounts, client logos, video testimonials, awards

### SEO Keywords
Primary: AI real estate lead generation, real estate AI texting, AI appointment setting real estate
Secondary: real estate lead nurture, AI calling for real estate, real estate CRM integration
Long-tail: how to convert online real estate leads, best AI tool for real estate agents

---

## COMPETITOR REFERENCE DATA

| Site | Colors | Fonts | Copy This |
|------|--------|-------|-----------|
| **Structurely** | Navy #1C2541, Yellow #F7C942 | Inter + Bruna | Hero AI demo + phone input |
| **Verse.ai** | Blue #0048FF, gradient blue->purple | Be Vietnam Pro | Gradient text, comparison table |
| **Ylopo** | Dark #232323, Green #7BC109 | Raleway + Nunito | Testimonials with $ amounts |
| **LocalizeOS** | Blue #0094FF, Light #F8F8F8 | Poppins + Open Sans | Enterprise logo wall |

---

## PREPARATION CHECKLIST

### Done
- [x] Company name: **BuyerRelay**
- [x] Logo: `brand_assets/product-screenshots/BuyerRelay_logo.png`
- [x] Product screenshots (4): hero, features, CRM, mobile — all in `brand_assets/product-screenshots/`
- [x] Chat conversation example text (in Section 2 above)
- [x] Brand colors and design system (`brand_assets/brand-guide.md`)

### Still Needed
- [ ] Domain (buyerrelay.com or buyerrelay.ai)
- [ ] Hero tagline (final choice from options in Content Strategy)
- [ ] Pricing tiers and prices
- [ ] Cal.com or Calendly booking link
- [ ] Logo in SVG format (currently PNG — convert with vectorizer.ai or use as-is)

### Can Add Later
- [ ] Real testimonials with $ metrics
- [ ] Product demo video (Loom)
- [ ] Blog posts, team photos

### Can Fake Initially
- [ ] Stats ("500+ agents") — conservative estimates
- [ ] Integration logos — list planned ones
- [ ] G2/Capterra badges — submit on launch
