

# Kalk Solutions — Premium Manufacturing Growth Website

## Phase 1 Scope (this build)
Build the complete 13-page frontend with the full design system, copy, and conversion structure. Forms validate and show branded thank-you states. Primary lead capture in v1 = **WhatsApp floating button + Calendly embeds** (you'll provide both links). Backend storage + 5 email sequences = Phase 2.

## Design System
- **Colors:** Primary `#C0392B`, Secondary `#1A1A1A`, Accent `#F5F5F0`, Text `#2C2C2C`, Highlight `#E8760A`, Border `#E0E0E0`
- **Fonts:** Syne (headlines/stats) + Inter (body) via Google Fonts
- **Aesthetic:** Premium industrial — McKinsey meets factory floor. Bold type, strong contrast, generous whitespace, subtle geometric grid pattern overlays at 5% opacity
- All tokens defined as semantic CSS variables in `styles.css` so the look is consistent across every page

## Shared Components
- **Navbar** — dark, sticky, becomes more opaque on scroll, KALK logo (SVG with arrow inside the A), nav links, prominent orange "Book Free Audit" CTA, mobile hamburger
- **Footer** — logo, tagline, full sitemap of links, contact (Pune, India + email), LinkedIn
- **WhatsApp floating button** — bottom-right, always visible, pre-filled message, placeholder number you'll swap
- **Cookie consent banner** — simple GDPR-friendly accept/decline, dismissible, stored in localStorage
- **Reusable building blocks:** Hero, StatBar (with count-up on scroll), ProblemCard, ModuleCard, CaseStudyCard, PricingCard, FAQAccordion, AuditForm, CalendlyEmbed (placeholder slot)

## Pages (13 routes)

**Marketing pages**
1. `/` — Homepage with all sections from the brief: hero, audience selector, problem/solution (PASTL), proof/stats, ERP callout, testimonials, investment, lead magnet form, FAQ
2. `/india` — Indian manufacturer journey, ROI math, 3 packages, manufacturing clusters map callouts, India case studies
3. `/international` — Global tone, USD pricing, "why India-based team" section, UAE/USA proof
4. `/growth-system` — Deep dive on the 4 modules
5. `/erp` — Odoo ERP page with before/after pain points, 10-stage implementation timeline, team structure, two anonymous case studies, pricing
6. `/free-audit` — Conversion-focused, no navbar distractions, form + Calendly embed slot
7. `/about` — Founder story, philosophy, why Kalk exists
8. `/contact` — Contact form, WhatsApp, email, office location

**Case study pages** (shared template)
9. `/case-studies` — Index grid
10. `/case-studies/25-crore-rfq`
11. `/case-studies/saudi-aramco`
12. `/case-studies/erp-unified-system`
13. `/case-studies/erp-margin-recovery`

Each case study: tag, hero stat, 5-section story (Business → Challenge → What We Did → Result → Takeaway), sticky sidebar mini-form on desktop.

## SEO (built into every route)
- Unique `<title>`, meta description, Open Graph + Twitter tags via TanStack `head()`
- One H1 per page with primary keyword
- Schema markup: Organization (root), FAQPage (homepage FAQ), BreadcrumbList (case studies)
- Semantic HTML (article, section, nav)
- Canonical URLs, alt text on all images
- Server-side rendered for crawlability

## Animations & Interactions
- Hero headline: word-by-word fade-in on load
- Stats: numbers count up when scrolled into view
- Problem/module cards: stagger fade-in on scroll
- Case study cards: hover lift
- CTAs: orange fill + scale on hover
- Navbar: opacity increases on scroll
- Smooth focus animations on form fields
- All implemented with CSS animations + IntersectionObserver (no heavy library needed)

## Forms (Phase 1 behavior)
- Client-side validation with Zod
- On submit: show branded success state with Calendly embed + WhatsApp CTA
- No data stored yet — submission CTA directs the user to immediately book via Calendly or message via WhatsApp
- Form structure ready to wire up to Lovable Cloud in Phase 2 without rework

## Placeholders You'll Swap Later
- WhatsApp number (currently `91XXXXXXXXXX`)
- Calendly embed URL
- Founder phone in email signatures
- Real testimonial photos (using initials avatars for now)

## Phase 2 (after this ships)
- Lovable Cloud database for lead storage with revenue-range routing tags
- Lovable Emails: 5 triggered sequences (Audit confirmation, Post-audit follow-up, India nurture, ERP nurture, International nurture)
- Optional HubSpot sync
- GA4 + Meta Pixel wiring

