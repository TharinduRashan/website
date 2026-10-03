# 00 — Project Overview

## Company Profile

**Company:** Cloudzyne (Pvt) Ltd  
**Location:** Sri Lanka  
**Domain:** https://cloudzyne.com  
**Category:** Software Solutions Company  
**Tagline:** We build software that moves businesses forward.

Cloudzyne delivers custom software solutions to individuals, startups, small businesses, and SMEs. The company focuses on modern engineering, scalable foundations, and direct client collaboration — no bloated agencies, no middlemen.

---

## Project Goal

Build a production-grade, publicly accessible marketing website that:
- Clearly communicates what Cloudzyne does and who it serves
- Presents services and solutions in a persuasive, professional format
- Showcases real (honest) project work without invented stats or testimonials
- Provides a functional contact/inquiry channel
- Demonstrates technical credibility through the quality of the site itself

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v3 |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| Animations | Motion (framer-motion) |
| Forms | React Hook Form + Zod |
| Fonts | next/font (Google Fonts — Inter or Geist) |
| Deployment | Vercel |

---

## Brand Identity

| Token | Value |
|---|---|
| Primary Blue | `#2373F4` |
| Background | `#FFFFFF` |
| Text (Primary) | `#0A0A0A` |
| Text (Secondary) | `#6B7280` |
| Border | `#E5E7EB` |

---

## Project Phases

### Phase 1 — Setup & Design System
- Initialize Next.js project with all dependencies
- Configure Tailwind, shadcn, fonts, globals.css
- Define all CSS custom properties and Tailwind theme extensions

### Phase 2 — Core Layout Components
- Navbar (floating pill, mobile menu)
- Footer (multi-column)
- Section wrapper component
- SEO metadata layout

### Phase 3 — Page Sections (Landing Page)
- Hero section
- Trust/Value Props section
- Services section
- Solutions section
- Process (How We Work) section
- Closing CTA section

### Phase 4 — Inner Pages
- /projects — portfolio grid
- /projects/[slug] — project detail
- /services — expanded services page
- /about — company/team info
- /contact — contact form page

### Phase 5 — Polish & Production
- Animation system (scroll reveals, stagger)
- Responsive QA across all breakpoints
- SEO metadata, sitemap, robots.txt, JSON-LD
- Accessibility audit (WCAG 2.1 AA)
- Performance audit (Core Web Vitals)
- Final build, deploy to Vercel

---

## Acceptance Criteria

1. All pages build without TypeScript errors (`tsc --noEmit`)
2. ESLint passes with zero errors
3. `next build` succeeds with no warnings
4. LCP < 2.5s on mobile (tested via Lighthouse)
5. CLS < 0.1 across all pages
6. All pages pass WCAG 2.1 AA color contrast
7. Navbar works at mobile (375px), tablet (768px), desktop (1280px)
8. Mobile hamburger menu opens/closes with animation
9. Contact form validates all required fields
10. Contact form shows loading, success, and error states
11. All internal links resolve without 404
12. /projects page renders all project cards
13. /projects/[slug] renders correct detail for each slug
14. Hero CTA buttons link to correct routes
15. No fake testimonials, statistics, or invented credentials exist anywhere
16. OG image and meta description present on all pages
17. Sitemap accessible at /sitemap.xml
18. robots.txt accessible at /robots.txt
19. JSON-LD Organization schema present on homepage
20. Skip-to-main link present and functional
21. All interactive elements are keyboard navigable
22. Reduced motion media query respected in all animations
23. next/font used for all typography (no FOUT)
24. All images use next/image with width/height or fill
25. No console errors in production build
26. Footer copyright reads "© 2026 Cloudzyne"
27. All service cards render icon + title + description
28. Process section renders 6 steps in correct order
29. Contact API route at /api/contact returns 200 on valid POST
30. Site renders correctly on Chrome, Firefox, and Safari
