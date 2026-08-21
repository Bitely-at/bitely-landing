# Bitely — Marketing Website
## Reference Brief + Build Plan + Step Prompts

---

## 1. Context & Goal

**Bitely** is a B2B SaaS product that gives restaurant owners and managers dish-level guest feedback via QR codes — no POS integration, no IT setup, no friction. Guests scan, rate dishes, and Bitely generates reviews automatically.

This website is the **sales pitch asset** — a single URL shared with prospective restaurant clients before or after a first conversation. Its one job: convince a restaurant owner or manager to reach out. It is not a product app, not a signup flow, not a documentation site.

**Target reader:** Restaurant owner or manager, non-technical, time-poor, skeptical of "yet another tool."

---

## 2. Users & Roles

| Role | Description |
|---|---|
| **Visitor (prospect)** | Restaurant owner or manager landing on the site, deciding whether to contact Bitely |
| **Site owner (Dmitrii)** | Receives inbound emails from interested prospects |

No authentication. No user accounts. Public read-only.

---

## 3. App Structure

Single long-scroll page. No sub-pages. No navigation menu needed beyond anchor links.

**Sections in order:**

1. **Hero** — headline, subheadline, primary CTA
2. **How it works** — 3-step process
3. **What you get** — value proposition for the owner
4. **Why it's different** — key differentiators
5. **Live demo** — interactive embedded dashboard mockup
6. **Social proof** — 2 placeholder testimonials (mock data)
7. **Custom integrations mention** — one short callout block
8. **Final CTA** — repeat contact action
9. **Footer** — product name, email, legal placeholder

---

## 4. Authentication

None. Fully public.

---

## 5. Domain Model

No persistent data. No database. Static/semi-static content only.

The interactive demo section uses **hardcoded mock data** (no backend):
- ~8–10 fictional dish names with ratings (1–5 scale)
- Weekly review volume numbers (8 weeks)
- Top 3 / Bottom 3 derived from mock data

---

## 6. Functional Requirements

### Hero
- As a visitor, I see a sharp headline that names the core pain ("Know which dishes guests love — and which ones cost you repeat visits")
- As a visitor, I see a subheadline: what Bitely is + how fast setup is (one step)
- As a visitor, I click a CTA button that opens a `mailto:d.fedorov@panda-insurtech.com` link with a pre-filled subject line ("Bitely — Anfrage" or similar)

### How it works
- As a visitor, I see exactly 3 steps with icons:
  1. QR-Code am Tisch platzieren
  2. Gäste bewerten Gerichte direkt beim Essen
  3. Dashboard öffnen — Insights sofort sichtbar
- No account creation, no integration step shown here

### What you get
- As a visitor, I see 4–5 benefit cards:
  - Bewertungen auf Gerichtsebene, nicht nur Gesamtsterne
  - Echtzeit-Dashboard mit Top- und Schwachpunkten
  - Automatisch generierte Bewertungen für Google & TripAdvisor
  - Funktioniert für mehrere Standorte
  - Kein POS, kein IT-Team, keine Integration nötig

### Why it's different
- As a visitor, I see a simple comparison or callout block:
  - vs. Google Reviews: nur Gesamteindruck, keine Gerichtsebene
  - vs. interne Umfragen: Gäste füllen sie nicht aus
  - Bitely: frictionless, item-level, automatic

### Interactive Demo
- As a visitor, I can interact with a simplified embedded dashboard:
  - See a bar chart of dish ratings (mock data, ~8–10 dishes)
  - See a combo chart: weekly review volume (bars) + avg score trend (line)
  - See a "Top 3 / Worst 3" dish list
  - Optionally: a date range toggle (Last 7 days / Last 30 days) that swaps between two hardcoded datasets
- No backend. All data is hardcoded in the component.
- Labeled clearly as "Demo-Ansicht" so visitors know it's illustrative

### Social Proof
- As a visitor, I see 2 testimonial cards with:
  - Quote text (mock placeholder copy in German)
  - Name (fictional: e.g. "Thomas K., Restaurantleiter, München")
  - Star rating (5 stars displayed)
  - Restaurant name placeholder
- Dmitrii will replace with real quotes later — structure must be easy to swap

### Custom Integrations Callout
- As a visitor, I see a short single-line callout or small section:
  - "Sie nutzen bereits r_keeper oder ein anderes System? Individuelle Analytics-Integrationen auf Anfrage."
- Not a feature highlight — a reassurance note only

### Final CTA
- As a visitor, I see a repeated CTA section with headline ("Bereit, Ihre Gäste wirklich zu verstehen?") and the same mailto button
- Optional secondary line: "Oder schreiben Sie uns direkt: d.fedorov@panda-insurtech.com"

### Footer
- Product name: Bitely
- Email: d.fedorov@panda-insurtech.com
- Year + placeholder legal line ("Impressum / Datenschutz — folgt")

---

## 7. Process Logic & Rules

- CTA button mailto subject: `Bitely – Ich möchte mehr erfahren`
- CTA button mailto body: pre-filled with a short German prompt asking for a demo
- Demo date toggle: swaps between two hardcoded datasets (no API, no state persistence)

---

## 8. External Systems

None. No analytics, no form backend, no CRM at this stage.

---

## 9. UX Notes

- **Language:** German throughout (DE)
- **Tone:** Professional but warm. Not startup-jargon. Speak like a trusted advisor to a restaurant owner.
- **Mobile-first:** Restaurant owners check links on their phone. Hero, CTA, and How It Works must be flawless on mobile.
- **Demo section:** Must be clearly labeled as a demo. Should feel polished, not like a dev prototype.
- **Social proof cards:** Easy to edit — ideally just swapping text strings, not restructuring layout.
- **No pricing on the site** — handled in the demo call.

---

## 10. Out of Scope

- User authentication or accounts
- Contact form (mailto only)
- Pricing page
- Blog or content section
- B2C messaging (guest-facing)
- Real data connections in the demo
- Cookie consent / GDPR banner (deferred)
- Analytics tracking (deferred)

---

## 11. Acceptance Criteria

1. A restaurant owner can understand what Bitely does within 10 seconds of landing on the page
2. The CTA button opens a pre-filled email to Dmitrii in one tap on mobile
3. The interactive demo loads without errors and responds to user interaction (chart renders, toggle works)
4. The "How it works" section communicates zero-integration setup clearly
5. The social proof section displays 2 testimonials and is easy to update by swapping text
6. The page is fully readable and usable on a 375px wide mobile screen
7. The custom integrations note is present but does not dominate the page

---
---

# Build Plan

## Step 1 — Shell + Hero + How It Works
**Scope:** Next.js app scaffold, global styles, navigation anchor links, Hero section, How It Works section (3 steps), Footer skeleton.

**Assumes:** Nothing prior.

**Does NOT include:** Demo component, social proof, value props section, CTA repeat.

**Deliverable:** A deployable page where a visitor lands, reads the headline, understands the 3-step process, and sees a footer.

---

## Step 2 — Value Props + Differentiators + Custom Integration Note
**Scope:** "What you get" benefit cards section, "Why it's different" comparison block, custom integrations one-liner callout.

**Assumes:** Step 1 shell is live.

**Does NOT include:** Demo, social proof, final CTA section.

**Deliverable:** Full top-to-bottom content flow minus demo and social proof.

---

## Step 3 — Interactive Demo Section
**Scope:** Embedded dashboard mockup with hardcoded mock data. Dish ratings bar chart, weekly combo chart (volume + avg score), Top 3 / Worst 3 lists, date range toggle (7 days / 30 days) switching between two hardcoded datasets. Labeled "Demo-Ansicht".

**Assumes:** Steps 1–2 complete.

**Does NOT include:** Real data, backend, user auth.

**Deliverable:** Visitor can interact with a realistic-feeling dashboard preview inline on the page.

---

## Step 4 — Social Proof + Final CTA + Polish
**Scope:** 2 testimonial cards (mock data, easy to swap), final CTA repeat section with mailto button, mobile responsiveness pass across all sections, spacing and typography polish.

**Assumes:** Steps 1–3 complete.

**Does NOT include:** Analytics, cookie banner, pricing, legal pages.

**Deliverable:** Fully shippable pitch site, ready to share with prospects.

---
---

# Step Prompts

---

## STEP 1 PROMPT — paste into your Next.js project setup or Cursor/v0

```
Build a single-page marketing website for "Bitely" — a B2B SaaS product for restaurant owners.
The entire site is in German. No user authentication. No database.

GLOBAL SETUP:
- Single scroll page (index route)
- Smooth scroll anchor navigation
- Mobile-first layout, fully responsive down to 375px
- Clean, professional visual style — warm but not playful. Suitable for a B2B restaurant tech product.

SECTION 1 — HERO:
Headline: "Wissen Sie wirklich, welche Gerichte Ihre Gäste begeistern?"
Subheadline: "Bitely liefert Bewertungen auf Gerichtsebene — direkt am Tisch, ohne Integration, ohne Aufwand."
Primary CTA button: "Jetzt Kontakt aufnehmen"
  → opens mailto:d.fedorov@panda-insurtech.com
  → subject: "Bitely – Ich möchte mehr erfahren"
  → body: "Hallo, ich interessiere mich für Bitely und würde gerne mehr erfahren. Bitte melden Sie sich bei mir."
Below the CTA, a subtle line: "Einrichtung in einem Schritt. Kein IT-Team nötig."
Visual: placeholder area for a dashboard screenshot (use a styled placeholder box labeled "Dashboard-Vorschau")

SECTION 2 — HOW IT WORKS:
Title: "So funktioniert Bitely"
3 steps displayed as icons + short text:
  1. "QR-Code platzieren" — QR-Code am Tisch aufstellen oder aufkleben. Fertig.
  2. "Gäste bewerten" — Gäste scannen und bewerten einzelne Gerichte direkt beim Essen.
  3. "Insights nutzen" — Dashboard öffnen und sofort sehen, was läuft — und was nicht.
Emphasize: no app download for guests, no POS connection needed, no setup complexity.

FOOTER (skeleton):
- Product name: Bitely
- Email: d.fedorov@panda-insurtech.com
- "© 2026 Bitely · Impressum & Datenschutz folgt"

Do not include: demo section, social proof, value props, differentiators. Those come in later steps.
```

---

## STEP 2 PROMPT — add after Step 1 is confirmed

```
Extend the Bitely marketing page with three new sections, inserted between "How it works" and the footer.

SECTION 3 — WHAT YOU GET:
Title: "Was Sie mit Bitely gewinnen"
Display as a grid of 5 benefit cards:
  1. "Bewertungen auf Gerichtsebene" — Nicht nur Gesamtsterne. Sehen Sie genau, welches Gericht begeistert und welches enttäuscht.
  2. "Echtzeit-Dashboard" — Top-Gerichte, Schwachstellen und Trends — auf einen Blick, jederzeit abrufbar.
  3. "Automatische Bewertungen" — Bitely generiert Bewertungstexte für Google & TripAdvisor — Gäste posten mit einem Klick.
  4. "Mehrere Standorte" — Verwalten Sie alle Filialen in einem Dashboard mit Branch-Filter.
  5. "Null Integration" — Kein POS, kein IT-Team, keine Schnittstelle. Einfach QR-Code aufstellen.

SECTION 4 — WHY IT'S DIFFERENT:
Title: "Was Bitely anders macht"
3-column comparison or callout block:
  - "Google Reviews": Nur Gesamteindruck. Kein Bezug zu einzelnen Gerichten.
  - "Interne Umfragen": Gäste füllen sie nicht aus. Rücklauf nahe null.
  - "Bitely": Gerichtsgenaue Bewertungen. Frictionless für den Gast. Automatisch für Sie.
Highlight the Bitely column visually.

SECTION 5 — INTEGRATION NOTE (small callout, not a feature section):
A single-line or two-line callout box:
"Sie nutzen bereits r_keeper oder ein anderes Kassensystem? Individuelle Analytics-Integrationen sind auf Anfrage möglich."
Style as a subtle info box — not a headline feature.

Do not add: demo, social proof, final CTA. Those come next.
```

---

## STEP 3 PROMPT — add after Step 2 is confirmed

```
Add an interactive demo section to the Bitely marketing page, placed after the "Why it's different" section.

SECTION 6 — INTERACTIVE DEMO:
Label at top: "Demo-Ansicht · Beispieldaten"
Title: "So sieht Ihr Dashboard aus"
Subtitle: "Alle Daten sind Beispieldaten zur Veranschaulichung."

The demo contains three sub-components using hardcoded mock data only (no API, no backend):

MOCK DATA SET A (letzte 7 Tage) and DATA SET B (letzte 30 Tage):
Dishes (use these exact names):
  Wiener Schnitzel: A=4.7, B=4.6
  Zwiebelrostbraten: A=4.5, B=4.4
  Tafelspitz: A=4.3, B=4.2
  Kaiserschmarrn: A=4.1, B=4.0
  Gulasch: A=3.8, B=3.7
  Leberknödelsuppe: A=3.4, B=3.5
  Spargelcremesuppe: A=3.1, B=3.2
  Gebackener Camembert: A=2.8, B=2.9

Weekly review volumes (8 weeks, for 30-day view show last 4):
  Week 1: 18 reviews, avg 3.9
  Week 2: 24 reviews, avg 4.0
  Week 3: 21 reviews, avg 4.1
  Week 4: 29 reviews, avg 4.2
  Week 5: 33 reviews, avg 4.1
  Week 6: 28 reviews, avg 4.3
  Week 7: 35 reviews, avg 4.4
  Week 8: 41 reviews, avg 4.5

TOGGLE: Two buttons — "Letzte 7 Tage" / "Letzte 30 Tage" — switch between dataset A and B. No page reload.

CHART 1 — Horizontal bar chart:
  All 8 dishes, sorted by rating descending.
  Color: green for top 3, red for bottom 2, neutral for middle.
  Show rating value as label on each bar.

CHART 2 — Combo chart:
  Bars = weekly review volume. Line = avg score that week.
  Two y-axes (volume left, score right).
  Show last 4 weeks for 7-day toggle, all 8 weeks for 30-day toggle.

COMPONENT 3 — Top 3 / Worst 3 lists:
  Side by side.
  Top 3: dish name + star rating + green indicator.
  Worst 3: dish name + star rating + red indicator.
  Derived from the active dataset.

All charts must render on mobile without horizontal scroll.
Label the entire section clearly as demo/example data so visitors don't think it's real.
```

---

## STEP 4 PROMPT — final polish pass

```
Complete the Bitely marketing page with social proof, a final CTA, and a full polish pass.

SECTION 7 — SOCIAL PROOF:
Title: "Was unsere Kunden sagen"
Display 2 testimonial cards side by side (stack on mobile).

Card 1:
  Quote: "Endlich wissen wir, warum Gäste nicht wiederkommen. Der Tafelspitz hat uns überrascht — wir hätten ihn fast von der Karte genommen."
  Name: Thomas K.
  Role: Restaurantleiter
  Location: München
  Stars: 5

Card 2:
  Quote: "Die Einrichtung hat 10 Minuten gedauert. Jetzt sehen wir jeden Montag, was die Woche gebracht hat."
  Name: Sandra M.
  Role: Inhaberin
  Location: Wien
  Stars: 5

Make the quote text, name, role, and location easy to update (clearly structured in the component/data).

SECTION 8 — FINAL CTA:
Title: "Bereit, Ihre Gäste wirklich zu verstehen?"
Subtitle: "Kein Vertrag. Kein IT-Aufwand. Einfach anfangen."
CTA button: same mailto link as hero.
Below button: "Oder schreiben Sie direkt: d.fedorov@panda-insurtech.com"

POLISH PASS — apply across all sections:
- Verify mobile layout at 375px: hero, how-it-works steps, benefit cards, demo charts, testimonials, CTA all usable without horizontal scroll
- Consistent vertical spacing between all sections
- Smooth scroll from any anchor link
- CTA button has clear hover/focus state
- Demo section "Demo-Ansicht" label is visually distinct (badge or muted tag style)
- Footer is complete: "© 2026 Bitely · d.fedorov@panda-insurtech.com · Impressum & Datenschutz folgt"
```
