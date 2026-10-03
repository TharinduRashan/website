# 10 — About Section & Page

## Overview

The About section/page communicates:
1. What Cloudzyne is (honest, specific)
2. Who we serve (concrete audience segments)
3. What we build (categories of software)
4. How we work (philosophy)

**No invented credentials. No "founded in X" if unknown. No team headshots of stock photos. No invented awards or certifications.**

---

## Homepage: About Teaser

No dedicated About section on the homepage. Instead, the Trust section (task 05) serves as the "why Cloudzyne" content. A link to `/about` is in the navbar and footer.

---

## `/about` Page

**Location:** `src/app/about/page.tsx`  
**Type:** Server Component (static content)

### Page Metadata
```typescript
export const metadata: Metadata = {
  title: 'About — Cloudzyne',
  description: 'Cloudzyne is a software solutions company based in Sri Lanka. We build custom software for startups and growing businesses.',
}
```

---

## Page Sections

### 1. Page Hero
```
Eyebrow: About Cloudzyne
Heading: Software built with
         purpose and precision.
Subtext:  We're a small, focused software team in Sri Lanka.
          We work directly with clients to build software that
          actually solves the problems they have.
```
Background: `#FFFFFF`  
No image/illustration — typography-only hero with generous vertical space.

### 2. What We Are

```
Cloudzyne is a software solutions company based in Sri Lanka.
We specialize in building custom software for startups, small 
businesses, and SMEs that need real, working software — not 
templates, not offshore assembly lines.

We're a small team. That's by design. Small means you work 
directly with the people writing your code, not account managers 
and project coordinators. It means decisions get made faster, 
communication is clearer, and quality stays high.
```

Style: Two-column on desktop (heading left, body right), single column on mobile.

### 3. Who We Serve

Four audience segments with icon + name + one-line description:

```typescript
const audiences = [
  {
    icon: 'Lightbulb',
    title: 'Individuals with an idea',
    description: 'You have a concept for a software product and need a technical partner to validate and build it.',
  },
  {
    icon: 'Sprout',
    title: 'Early-stage startups',
    description: 'You need an MVP quickly, built well enough that you\'re not rewriting it six months after launch.',
  },
  {
    icon: 'Building2',
    title: 'Small businesses',
    description: 'You\'ve outgrown spreadsheets and generic tools. You need software that matches how your business actually works.',
  },
  {
    icon: 'Briefcase',
    title: 'SMEs scaling up',
    description: 'You have internal systems that need rebuilding, automation that needs implementing, or a product that needs expanding.',
  },
]
```

Layout: 2×2 grid on desktop, single column on mobile.  
Card style: Light, borderless — icon + title + description, no hover effect (purely informational).

### 4. Our Approach (Philosophy)

```
Heading: How we think about software

We don't believe in building the most complex solution — we 
believe in building the right one. That means understanding 
your constraints (time, budget, technical debt) before writing 
a line of code.

We use modern tools not because they're trendy but because they 
produce better outcomes: faster builds, fewer bugs, easier 
maintenance. TypeScript over JavaScript. Server components over 
client-side fetching where it makes sense. Clear APIs over 
clever abstractions.

We're honest about what we don't know, transparent about 
progress, and direct when we think a decision is wrong. If 
you're looking for someone to agree with everything you say, 
we're probably not a good fit.
```

### 5. What We Build (Summary)

Brief reference to services — link out to `/services` for detail:

```
We build: Custom web applications, internal business systems,
mobile applications, AI-powered workflows, SaaS products,
and digital platforms.

→ See all services
```

### 6. Process (Re-use `ProcessSection` component)

Include the ProcessSection component directly on the `/about` page.

### 7. CTA

```
Ready to talk?
→ [Start a Project] (links to /contact)
```

---

## What NOT to Include

| ❌ Do NOT include | Reason |
|---|---|
| "X+ years of experience" | Unverified / potentially misleading |
| "X clients served" | No verified data |
| "Award-winning" | No awards |
| Team headshots (stock photos) | Dishonest |
| "Trusted by Fortune 500" | False |
| Made-up founding year | Unverified |
| Testimonials/quotes | No clients to quote yet |

---

## Component Structure

```
src/app/about/page.tsx
  ├── <PageHero /> (inline or component)
  ├── <AboutIntro /> (what we are section)
  ├── <AudienceGrid /> (who we serve)
  ├── <PhilosophySection /> (our approach)
  ├── <ServicesTeaser /> (what we build summary)
  ├── <ProcessSection /> (re-used component)
  └── <CtaSection /> (re-used component)
```

---

## Styling Notes

- Page hero: `py-24 md:py-32` for generous top space below navbar
- Sections alternate: `bg-white` → `bg-neutral-50` → `bg-white`
- All text content is left-aligned (not centered) for readability
- Use `prose`-like maximum width of `max-w-3xl` for long-form paragraphs

---

## Checklist
- [ ] `/about` page renders without errors
- [ ] Page metadata set (`title`, `description`)
- [ ] No invented credentials, stats, or testimonials
- [ ] Audience grid renders 4 segments with icons
- [ ] Philosophy section has specific, honest language
- [ ] `ProcessSection` component reused correctly
- [ ] `CtaSection` component reused at page bottom
- [ ] Mobile: all sections stack vertically, no overflow
- [ ] "See all services" links to `/services`
- [ ] CTA "Start a Project" links to `/contact`
