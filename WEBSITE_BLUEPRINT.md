# Website Blueprint: AI Real Estate Lead Platform
## US Market Entry - Professional Website Specification

---

## 1. EXECUTIVE SUMMARY

**Goal:** Build a professional, conversion-focused website for an AI-powered real estate lead management platform entering the US market. The site must look like an established player, not a startup, and drive demo bookings fast.

**Primary Reference Sites (ranked by relevance):**
1. **Structurely** (structurely.com) - Best structure, product-led approach
2. **Verse.ai** (verse.ai) - Best visual style, modern energy
3. **Ylopo** (ylopo.com) - Best social proof and testimonial format
4. **LocalizeOS** (localizeos.com) - Best enterprise logo wall

**Build Method:** AI-assisted vibe coding pipeline (Claude Code + frontend-design skill + screenshot loop)

**Target Timeline:** 3-5 days from brief to production

---

## 2. TECHNICAL STACK

Based on the AI pipeline approach from the articles, optimized for speed and quality:

```
Framework:      Next.js 15 (App Router)
Language:       TypeScript
Styling:        Tailwind CSS v4
UI Components:  Hero UI (formerly NextUI) - Apple-like glassmorphism
Animations:     Motion.dev (Framer Motion) - scroll-triggered
Fonts:          next/font (no external loading)
Hosting:        Vercel (US market = low latency)
SSL:            Auto via Vercel
Analytics:      PostHog or Plausible (privacy-first)
Forms:          Cal.com embed for demo booking
```

### Why This Stack
- Next.js + Vercel = instant deploys, edge CDN, great Lighthouse scores
- Hero UI gives Apple-quality components out of the box
- Motion.dev handles all scroll animations declaratively
- No backend needed for v1 - pure landing page

---

## 3. PROJECT SETUP FOR VIBE CODING

### 3.1 claude.md (System Prompt)

```markdown
# CLAUDE.md - Real Estate AI Platform Website

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code
- Check `brand_assets/` folder for logo, colors, and brand guidelines

## Output Defaults
- Next.js 15 App Router + TypeScript
- Tailwind CSS v4 via CDN for prototyping, then proper install
- Hero UI components for buttons, cards, inputs, navbar
- Motion.dev for all animations
- Mobile-first responsive (375px -> 1440px)
- next/font for typography (Inter + Outfit or Playfair Display)

## Brand Identity
- Primary color: Electric Blue #0066FF (trust, technology)
- Accent color: Gradient from #0066FF to #7C3AED (blue-to-purple, like Verse.ai)
- Dark text: #0F172A (near-black, professional)
- Background: #FAFBFF (slight blue tint, not pure white)
- Success/CTA: #10B981 (green for action buttons)
- Card backgrounds: white with subtle blue-tinted shadows

## Anti-Generic Guardrails
- NEVER use default Tailwind palette (indigo-500, blue-600)
- NEVER use flat shadow-md - use layered, color-tinted shadows
- NEVER use the same font for headings and body
- NEVER use transition-all - only transform and opacity
- ALWAYS pair display font (Outfit/700-800) with body font (Inter/400-500)
- ALWAYS use tight tracking (-0.03em) on headings > 24px
- ALWAYS add hover, focus-visible, and active states to interactive elements
- ALWAYS use intentional spacing tokens, not random Tailwind steps
- Surfaces must have layering system (base > elevated > floating)

## Screenshot Verification
- After generating each section, take a Puppeteer screenshot
- Compare with reference screenshots in screenshots/ folder
- Fix any mismatches in spacing, color, font weight
- Do at least 2 comparison rounds per section

## Content Tone
- Professional but approachable (like Structurely)
- Result-focused: lead with numbers and outcomes
- US English, simple sentences, no jargon
- Active voice: "We convert" not "Leads are converted"
```

### 3.2 brand_assets/ Folder Structure

```
brand_assets/
├── logo.svg              <- Main logo (provide before build)
├── logo-dark.svg         <- Logo for dark sections
├── brand-guide.md        <- Colors, fonts, rules (from this doc)
├── reference-screenshots/
│   ├── structurely-hero.png
│   ├── structurely-features.png
│   ├── verse-hero.png
│   ├── verse-stats.png
│   ├── ylopo-testimonials.png
│   └── localizeos-logos.png
└── product-screenshots/
    ├── dashboard.png      <- Real or mock product screenshots
    ├── chat-demo.png      <- AI conversation example
    └── analytics.png      <- Results/ROI screen
```

---

## 4. SITE STRUCTURE (Page Sections)

### Total: 1 page, 10 sections
Inspired by Structurely's product-led structure + Verse.ai's visual energy

---

### Section 1: NAVBAR (sticky)
**Reference:** Structurely navbar

```
Layout: Logo (left) | Nav links (center) | CTA buttons (right)
Links: How It Works | Features | Pricing | Resources
Buttons: "Login" (ghost) | "Try the AI" (primary, pill shape)
Behavior: Blur background on scroll (Hero UI Navbar isBlurred)
Mobile: Hamburger menu
```

**Key detail from Structurely:** Their "Try the AI" yellow button on blue nav is brilliant - immediate low-friction CTA. Copy this pattern with our brand colors.

**Key detail from Verse.ai:** Sticky "Let's chat" floating button bottom-right. Add this.

---

### Section 2: HERO
**Primary reference:** Structurely hero (product demo + text left, interactive right)
**Visual style:** Verse.ai (gradient, modern, rounded containers)

```
Layout: 2 columns
  Left (55%):
    - Badge: "TEXT. CALL. AI." (pill badge, accent color, like Structurely)
    - H1: "Convert Real Estate Leads into Closed Deals" (bold, 56-64px)
         Keyword "Closed Deals" in gradient text (blue->purple)
    - Subtitle: "AI-powered calling, texting, and appointment setting
                 that works 24/7 so you never miss an opportunity." (18px, gray-600)
    - 2 CTAs side by side:
      * "Book a Demo" (primary, solid blue, pill shape, arrow icon)
      * "See It In Action" (secondary, outline, sparkle icon)

  Right (45%):
    - Interactive chat demo mockup (like Structurely)
    - Shows AI conversation with a lead:
      "AI: Hi Sarah! I noticed you viewed 3 properties in Brooklyn.
           Are you still looking for a 2-bedroom?"
      "Lead: Yes! Under $800K if possible. Can I see them this weekend?"
      "AI: Absolutely! I have 3 options. Let me book a showing for Saturday.
           Would 10am or 2pm work better?"
    - Below chat: Phone input field "Enter your number to try our AI"
    - Button: "Talk to the AI" (like Structurely's hero form)

Background: Subtle radial gradient (light blue center -> white edges)
            + SVG noise texture for depth
```

**Why this works for a newcomer:**
- Product demo immediately shows what you do (Structurely's approach)
- Interactive "Try the AI" reduces friction to zero (no commitment)
- Chat mockup is self-explanatory - no need to explain the product
- Gradient text and modern design signal "we're cutting edge"

---

### Section 3: SOCIAL PROOF TICKER
**Reference:** Structurely scrolling stats + Ylopo scrolling testimonials

```
Layout: Full-width horizontal scroll strip (auto-scrolling, like marquee)
Content (rolling text):
  "Appointments lifted by 20-50%..."
  "We closed over $1M in less than 3 months..."
  "$72M in transactions in one year..."
  "Response rate increased by 340%..."

Below ticker: Logo bar (partner/client logos)
  - Use real estate CRM logos you integrate with:
    Follow Up Boss | Sierra Interactive | CINC | BoomTown | HubSpot | Salesforce
  - Infinite scroll loop
  - Grayscale, hover -> color

CSS: overflow-hidden, CSS animation for continuous scroll
```

**Why:** Even without big client logos, showing CRM integration logos signals "we work with tools you already use" - critical for trust.

---

### Section 4: VIDEO / PRODUCT OVERVIEW
**Reference:** Structurely "Automate Your Sales Process" section

```
Layout: Centered heading + embedded video or animated product walkthrough

Heading: "See How It Works" (h2, centered)
Subheading: "From lead to appointment in under 60 seconds"

Content:
  Option A: Loom/Vimeo embedded product demo video (preferred)
  Option B: Animated product walkthrough using Motion.dev
            (scroll-triggered sequence of 3-4 product screenshots
             that transition as user scrolls)

Below video: 3 stat cards in a row:
  [50% Lower Overhead] [17% More Qualified Leads] [31% Higher Answer Rate]
  (Copy Structurely's exact stats format - they proved these work)
  Each card: Icon (top) + Big number + Description
  Animation: Count-up on scroll into view
```

---

### Section 5: FEATURES GRID
**Reference:** Structurely features section (AI Calls, Text AI, Live Transfers, Appointments)
**Visual:** Verse.ai card style (rounded, light backgrounds)

```
Heading: "Everything You Need to Convert Leads"
Subheading: "AI-powered tools that work while you sleep"

Layout: 2x2 grid on desktop, stacked on mobile

Card 1: AI Calling
  Icon: Phone icon (Hero UI)
  Title: "Human-like AI Calls"
  Description: "Inbound and outbound calling to qualify leads.
                Uses local area codes. Sets appointments or live-transfers."
  Badge: "AI-Powered"
  Benefits list: 5 bullet points (like Structurely)
  Image: Screenshot of call interface
  CTA link: "Learn more ->"

Card 2: AI Texting
  Icon: Message icon
  Title: "Smart SMS Conversations"
  Description: "57% response rate. Long-term drip campaigns.
                Two-way qualifying conversations. Bulk texting."
  Badge: "AI-Powered"
  Image: Chat conversation screenshot

Card 3: Appointment Setting
  Icon: Calendar icon
  Title: "Automated Appointment Setting"
  Description: "Integrates with Google, Outlook, Calendly.
                Lead routing. Pre-built scripts. Real-time notifications."
  Badge: "AI-Powered"
  Image: Calendar/appointment screenshot

Card 4: Live Transfers
  Icon: Phone-transfer icon
  Title: "Live Call Transfers"
  Description: "Connect to calls with qualified leads in realtime.
                Local numbers increase answer rates by 31%."
  Badge: "AI-Powered"
  Image: Transfer notification screenshot

Animation: Cards fade in + slide up on scroll, staggered 0.2s
Hover: Scale 1.02, shadow increase, slight Y offset
```

---

### Section 6: CRM INTEGRATIONS
**Reference:** Structurely CRM section + LocalizeOS integration bar

```
Heading: "Automatically Generate Appointments from Your CRM"
Subheading: "Integrate with the tools you already use"

Layout: Left text block + Right product screenshot

Left:
  Text explaining CRM integration
  4 use cases as pill badges:
    "Old Leads" | "Rehashed Leads" | "New Leads (Off Hours)" | "Uncontacted Leads"

Right:
  Product screenshot showing appointment creation from CRM

Below: CRM logo grid (2 rows):
  Row 1: HubSpot | Follow Up Boss | BoomTown | Salesforce
  Row 2: Sierra Interactive | kvCORE | Firepoint | Chime
  Each logo links to integration page (future)
```

---

### Section 7: TESTIMONIALS
**Reference:** Ylopo testimonial cards (BEST format for conversion)

```
Heading: "Results That Speak for Themselves"

Layout: 3-column carousel (auto-rotating with arrows)

Each card:
  - Background: Dark (#0F172A) with brand gradient accent
  - Top: Quote icon
  - Quote text: Bold, specific result
    Example: "In under 90 days, our pipeline was overflowing with leads."
  - Author photo (circular)
  - Name + Title + Company
  - Specific metric: "$72 million in transactions in one year with [Product]"
    (metric highlighted in accent color)

CRITICAL: Use Ylopo's format of combining a quote with a SPECIFIC DOLLAR AMOUNT.
This is their strongest conversion element. Even if we only have 2-3 testimonials,
make them count with real numbers.

If no real testimonials yet:
  - Use case study format instead
  - "Company X achieved Y result in Z timeframe"
  - Or use the "Results" format from Verse.ai:
    16x ROI | 98% open rates | <90 sec response time
```

---

### Section 8: COMPARISON TABLE
**Reference:** Verse.ai "Ditch the Status Quo" section (brilliant concept)

```
Heading: "Ditch the Status Quo"

Layout: 2-column comparison (With Us vs Without Us)

Left column (green tint - "With [Product]"):
  - Engages in two-way text conversations
  - AI responds instantly 24/7
  - Automatic lead qualification
  - AI appointment setting
  - SMS compliance built in
  - Scalable to unlimited leads
  - Local phone numbers for higher answer rates

Right column (gray/red tint - "Without [Product]"):
  - Limited to one-way text blasts
  - Teams manually follow up
  - Your team must qualify each lead
  - Manual appointment setting
  - You handle SMS compliance yourself
  - Limited by team bandwidth
  - Generic numbers, low answer rates

Animation: Left column slides in from left, right from right
Checkmarks (green) vs X marks (red)
```

---

### Section 9: PRICING
**Reference:** Structurely pricing page (simple, 3 tiers)

```
Heading: "Simple, Transparent Pricing"
Subheading: "Start with a free trial. No credit card required."

Layout: 3 pricing cards

Card 1 - Starter:
  Price: $XXX/mo
  "For individual agents"
  Features: 5-7 bullet points
  CTA: "Start Free Trial"

Card 2 - Professional (HIGHLIGHTED/RECOMMENDED):
  Price: $XXX/mo
  "For teams of 5-20"
  Features: 8-10 bullet points
  Badge: "Most Popular"
  CTA: "Start Free Trial" (primary color, larger)
  Border: Gradient border (blue->purple)

Card 3 - Enterprise:
  Price: "Custom"
  "For brokerages 20+"
  Features: 10+ bullet points
  CTA: "Contact Sales"

Below: "All plans include 14-day free trial"
```

---

### Section 10: FINAL CTA + FOOTER
**Reference:** Ylopo's bottom demo form + Structurely's clean footer

```
CTA Section:
  Background: Dark (#0F172A)
  Heading: "Ready to Convert More Leads?"
  Subheading: "See how AI can transform your real estate business"
  Inline demo form:
    Fields: Name | Email | Phone | Company size (dropdown)
    Button: "Book Your Demo" (gradient, large, animated)
  Trust badges: SOC 2 | G2 High Performer | "Trusted by 500+ agents"

Footer:
  Layout: 4 columns
  Col 1: Logo + tagline + social icons
  Col 2: Product links
  Col 3: Resources (Blog, Help Center, API Docs)
  Col 4: Company (About, Careers, Contact, Legal)
  Bottom bar: Copyright + Privacy + Terms
```

---

## 5. VISUAL DESIGN SYSTEM

### 5.1 Color Palette (extracted + adapted from competitors)

```css
/* Primary */
--primary:          #0066FF;    /* Trust blue - between Structurely navy and Verse blue */
--primary-light:    #3385FF;
--primary-dark:     #0052CC;

/* Accent / Gradient */
--accent:           #7C3AED;    /* Purple for gradient endpoints */
--gradient-primary:  linear-gradient(135deg, #0066FF, #7C3AED);
--gradient-text:     linear-gradient(90deg, #0066FF, #7C3AED);

/* Neutrals */
--bg-primary:       #FAFBFF;    /* Slight blue tint (not pure white) */
--bg-elevated:      #FFFFFF;
--bg-dark:          #0F172A;    /* Dark sections */
--text-primary:     #0F172A;
--text-secondary:   #475569;
--text-muted:       #94A3B8;
--border:           #E2E8F0;

/* Semantic */
--success:          #10B981;    /* CTA green, like Ylopo's green */
--warning:          #F59E0B;    /* Badge yellow, like Structurely's accent */
--error:            #EF4444;

/* Shadows (layered, color-tinted) */
--shadow-sm:        0 1px 2px rgba(0, 102, 255, 0.05);
--shadow-md:        0 4px 6px rgba(0, 102, 255, 0.07),
                    0 2px 4px rgba(0, 102, 255, 0.04);
--shadow-lg:        0 10px 25px rgba(0, 102, 255, 0.10),
                    0 4px 10px rgba(0, 102, 255, 0.05);
--shadow-xl:        0 20px 40px rgba(0, 102, 255, 0.12),
                    0 8px 16px rgba(0, 102, 255, 0.06);
```

### 5.2 Typography

```css
/* Headings: Outfit (modern geometric sans, alternative to Raleway) */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&display=swap');

/* Body: Inter (universally readable, like Structurely) */
/* Loaded via next/font for performance */

h1 { font: 800 56px/1.1 'Outfit'; letter-spacing: -0.03em; }
h2 { font: 700 40px/1.2 'Outfit'; letter-spacing: -0.02em; }
h3 { font: 700 28px/1.3 'Outfit'; letter-spacing: -0.01em; }
h4 { font: 600 20px/1.4 'Outfit'; }
body { font: 400 16px/1.7 'Inter'; }
.subtitle { font: 400 18px/1.6 'Inter'; color: var(--text-secondary); }
```

### 5.3 Component Styles (Hero UI customization)

```
Buttons:
  Primary: Solid, pill-shaped (border-radius: 999px), gradient or solid blue
           Shadow on hover, scale(1.02) transition
  Secondary: Outline, pill-shaped, blue border + text
  CTA:     Large (h-14 px-8), gradient background, white text, arrow icon

Cards:
  Background: white
  Border: 1px solid var(--border) OR none with shadow
  Border-radius: 16px (generous, modern like Verse.ai)
  Shadow: var(--shadow-md), hover -> var(--shadow-lg)
  Padding: 32px

Badges/Pills:
  Background: primary/10% opacity
  Text: primary color
  Border-radius: 999px
  Padding: 4px 16px
  Font: 600, 14px, uppercase, tracking-wider

Input fields:
  Height: 48px
  Border: 1px solid var(--border)
  Border-radius: 12px
  Focus: ring-2 ring-primary/50
```

### 5.4 Animations (Motion.dev patterns)

```jsx
// Fade in on scroll (most elements)
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
viewport={{ once: true }}

// Stagger children (card grids, feature lists)
variants={{
  visible: { transition: { staggerChildren: 0.15 } }
}}

// Count-up animation for stats
// Use framer-motion useSpring + useInView

// Hero gradient text shimmer
// CSS animation: background-position shift on gradient

// Floating CTA button
// Pulse animation with box-shadow
```

---

## 6. CONTENT STRATEGY

### 6.1 Key Messages (adapted for newcomer positioning)

**DON'T say:** "We're new" / "We're a startup" / "We're building"
**DO say:** "Built by real estate tech veterans" / "Next-generation AI" / "Purpose-built for US agents"

**Hero headline options (A/B test):**
1. "Convert Real Estate Leads into Closed Deals" (benefit-first, like Structurely)
2. "More Appointments. More Closings. Less Work." (outcome trio, like Ylopo)
3. "Your AI Sales Team That Never Sleeps" (personification)
4. "Stop Losing Leads. Start Closing Deals." (pain -> solution)

**Value props (from competitor analysis):**
1. **Speed:** "Respond to leads in under 60 seconds, 24/7" (Verse claims <90 sec)
2. **Conversion:** "20-50% more appointments" (Structurely's stat)
3. **Cost:** "50% lower sales overhead" (Structurely's stat)
4. **Scale:** "Handle unlimited leads without hiring" (LocalizeOS's angle)
5. **Quality:** "31% higher answer rate with local numbers" (Structurely)

### 6.2 Social Proof Strategy (for a newcomer)

Since you don't have Christie's and Sotheby's logos yet:

**Phase 1 (launch):**
- Integration partner logos (CRMs you connect to)
- "Trusted by X agents across Y states"
- 2-3 beta user testimonials with specific metrics
- "Built with technology trusted by Fortune 500 companies" (re: AI models used)
- G2 / Product Hunt badges (launch there first)

**Phase 2 (1-3 months):**
- Real case studies with dollar amounts (copy Ylopo's format)
- Client company logos
- Video testimonials (copy LocalizeOS YouTube embeds)
- Industry award badges

### 6.3 SEO Keywords (from competitor meta tags)

```
Primary:
- AI real estate lead generation
- real estate AI texting
- AI appointment setting real estate
- convert real estate leads

Secondary:
- real estate lead nurture
- AI calling for real estate
- real estate CRM integration
- automated real estate follow up

Long-tail:
- how to convert online real estate leads
- best AI tool for real estate agents
- automated lead follow up for realtors
```

---

## 7. BUILD PIPELINE (Step by Step)

### Day 1: Setup + Hero

```bash
# 1. Create Next.js project
npx create-next-app@latest realestate-site --typescript --tailwind --app --src-dir

# 2. Install dependencies
npm install @heroui/react motion framer-motion

# 3. Set up claude.md and brand_assets/

# 4. Take full-page screenshots of reference sites (DevTools -> Capture full size)
#    Save to brand_assets/reference-screenshots/

# 5. Prompt Claude Code:
"Clone the hero section from this Structurely screenshot.
 Use our brand colors from brand_assets/brand-guide.md.
 Replace the chat content with our real estate AI conversation example.
 Add the phone input form like Structurely has.
 Use screenshot loop to compare with reference."
```

### Day 2: Core Sections

```
# Prompt sequence:
1. "Build the social proof ticker + logo bar section"
2. "Build the features grid - 4 cards with AI Calls, Text, Appointments, Transfers"
3. "Build the CRM integrations section"
4. "For each section: screenshot, compare with reference, fix, repeat"
```

### Day 3: Conversion Sections

```
1. "Build the testimonials carousel using Ylopo's format"
2. "Build the comparison table (With Us vs Without Us)"
3. "Build the pricing section - 3 tiers"
4. "Build the final CTA + footer"
```

### Day 4: Polish + Deploy

```
1. "Run Lighthouse audit. Fix any Performance issues."
2. "Check all responsive breakpoints: 375px, 768px, 1024px, 1440px"
3. "Add meta tags, OG images, structured data"
4. "Deploy to Vercel"
```

### Day 5: Post-Launch

```
1. Connect analytics (PostHog)
2. Set up Cal.com for demo booking
3. Test all forms and CTAs
4. Submit to Product Hunt / G2
```

---

## 8. COMPONENT LIBRARY SOURCES

Use these pre-built components to save time:

| Need                  | Source          | What to grab                    |
|-----------------------|-----------------|---------------------------------|
| Animated backgrounds  | 21st.dev        | Gradient mesh, particle effects |
| Logo ticker           | 21st.dev        | Infinite scroll logo bar        |
| Comparison table      | Tailwind UI     | Feature comparison              |
| Pricing cards         | Hero UI         | Card + pricing layout           |
| Chat mockup           | Custom build    | Based on Structurely screenshot |
| Stats counter         | Motion.dev      | useSpring + useInView           |
| Testimonial carousel  | 21st.dev        | Testimonial slider              |
| Navbar with blur      | Hero UI         | Navbar isBlurred                |
| Floating CTA          | UI Verse        | Animated button                 |

---

## 9. WHAT TO PREPARE BEFORE BUILD

### Must-Have (Day 0)
- [ ] Company name / domain
- [ ] Logo (SVG, dark + light versions)
- [ ] Brand colors (or use the palette from this doc)
- [ ] Hero tagline (final copy)
- [ ] 2-3 product screenshots or mockups
- [ ] AI chat conversation example text
- [ ] Pricing tiers and prices
- [ ] Cal.com or Calendly booking link for demos

### Nice-to-Have (can add later)
- [ ] Real testimonials from beta users
- [ ] Case study with specific $ numbers
- [ ] Product demo video (Loom recording is fine)
- [ ] Blog posts for Resources section
- [ ] Team photos for About page

### Can Be Faked Initially (replace later)
- [ ] Stats ("500+ agents", "10K+ appointments set") - use conservative estimates
- [ ] Integration logos (list planned integrations)
- [ ] G2/Capterra badges (submit for review on launch)

---

## 10. COMPETITOR BRANDING DATA (Extracted)

### Structurely
- Colors: Navy #1C2541, Accent Yellow #F7C942, Blue text #325FA6
- Fonts: Inter (body) + Bruna (headings)
- Button style: Pill (999px radius), yellow primary
- Personality: Modern, product-first, SaaS
- Best element to copy: Hero with interactive AI demo + phone input

### Verse.ai
- Colors: Blue #0048FF, Gradient blue->purple->pink
- Fonts: Be Vietnam Pro (both heading + body)
- Button style: Pill (30px radius), gradient
- Personality: Modern, friendly, energetic
- Best element to copy: Gradient text, comparison table, stat counters

### Ylopo
- Colors: Dark bg #232323, Green accent #7BC109
- Fonts: Raleway (headings) + Nunito (body)
- Button style: Full-width, green solid
- Personality: Aggressive, results-driven, established
- Best element to copy: Testimonials with specific $ amounts, scrolling proof

### LocalizeOS
- Colors: Blue #0094FF, Light bg #F8F8F8
- Fonts: Poppins (headings) + Open Sans (body)
- Button style: Small, subtle
- Personality: Premium, enterprise, understated
- Best element to copy: Enterprise client logo wall (Christie's, Sotheby's, etc.)

---

## 11. KEY DESIGN PRINCIPLES

1. **Show, don't tell** - Product screenshots and chat demos > text descriptions
2. **Numbers convert** - Every section should have at least one specific metric
3. **Low-friction CTAs** - "Try the AI" > "Book a Demo" > "Contact Sales"
4. **Mobile-first** - 60%+ of real estate agents browse on phone
5. **Speed matters** - Lighthouse Performance > 90, TTFB < 200ms
6. **Trust signals everywhere** - Logos, badges, testimonials, security badges
7. **One page, one goal** - Every section drives toward demo booking
8. **Gradient = modern** - Use the blue->purple gradient as the signature element
9. **Dark sections break monotony** - Alternate light/dark backgrounds every 2-3 sections
10. **Animate on purpose** - Only animate what draws attention to key elements

---

*Document created: March 2026*
*Based on analysis of: Structurely, Verse.ai, Ylopo, LocalizeOS*
*Build methodology from: Habr AI pipeline articles + LinkedIn vibe coding guide*
