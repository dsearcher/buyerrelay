# Brand Guide

## Colors
| Token | Hex | Usage |
|-------|-----|-------|
| primary | #0066FF | Links, buttons, accents |
| primary-light | #3385FF | Hover states |
| primary-dark | #0052CC | Active states |
| accent | #7C3AED | Gradient endpoints, highlights |
| bg-primary | #FAFBFF | Page background |
| bg-elevated | #FFFFFF | Cards, elevated surfaces |
| bg-dark | #0F172A | Dark sections, footer |
| text-primary | #0F172A | Headings, body text |
| text-secondary | #475569 | Subtitles, descriptions |
| text-muted | #94A3B8 | Captions, metadata |
| border | #E2E8F0 | Card borders, dividers |
| success | #10B981 | CTA buttons, positive indicators |
| warning | #F59E0B | Badges, attention |
| error | #EF4444 | Errors, negative indicators |

## Gradients
- Primary: `linear-gradient(135deg, #0066FF, #7C3AED)`
- Text gradient: `linear-gradient(90deg, #0066FF, #7C3AED)` with `-webkit-background-clip: text`
- Dark section: `linear-gradient(180deg, #0F172A, #1E293B)`

## Typography
- **Headings:** Outfit (weights: 600, 700, 800)
- **Body:** Inter (weights: 400, 500, 600)
- H1: 56px / 800 / -0.03em tracking / 1.1 line-height
- H2: 40px / 700 / -0.02em tracking / 1.2 line-height
- H3: 28px / 700 / -0.01em tracking / 1.3 line-height
- Body: 16px / 400 / 1.7 line-height
- Subtitle: 18px / 400 / 1.6 line-height / text-secondary color

## Shadows (layered, blue-tinted)
- sm: `0 1px 2px rgba(0,102,255,0.05)`
- md: `0 4px 6px rgba(0,102,255,0.07), 0 2px 4px rgba(0,102,255,0.04)`
- lg: `0 10px 25px rgba(0,102,255,0.10), 0 4px 10px rgba(0,102,255,0.05)`
- xl: `0 20px 40px rgba(0,102,255,0.12), 0 8px 16px rgba(0,102,255,0.06)`

## Border Radius
- Buttons: 999px (pill)
- Cards: 16px
- Inputs: 12px
- Badges/Pills: 999px
- Small elements: 8px

## Spacing Scale
Base unit: 4px. Use multiples: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

## Animation Guidelines
- Duration: 300-500ms for transitions, 500-800ms for scroll reveals
- Easing: `[0.25, 0.46, 0.45, 0.94]` (smooth deceleration)
- Only animate: `transform` and `opacity`
- Scroll animations: `viewport={{ once: true }}`
- Stagger children: 150ms delay
