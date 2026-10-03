# 20 — Final QA

## Purpose

This is the pre-launch sign-off checklist. Every item must be verified before the site is considered production-ready. Items map directly to the 30 acceptance criteria in `00-project-overview.md`.

---

## Part 1: Build & Code Quality

| # | Check | Status |
|---|---|---|
| 1 | `npx tsc --noEmit` exits with 0 errors | ☐ |
| 2 | `npm run lint` exits with 0 errors | ☐ |
| 3 | `npm run build` completes without errors or warnings | ☐ |
| 4 | No `console.error` or `console.warn` in production build output | ☐ |
| 5 | No TypeScript `// @ts-ignore` or `// @ts-expect-error` used as escape hatches | ☐ |
| 6 | No `as any` type assertions | ☐ |

---

## Part 2: Core Web Vitals (Post-Deploy)

Test on Vercel production URL, not localhost.

| # | Metric | Target | Measured | Status |
|---|---|---|---|---|
| 7 | LCP (mobile, Lighthouse) | < 2.5s | | ☐ |
| 8 | CLS (Chrome DevTools) | < 0.1 | | ☐ |
| 9 | INP / FID | < 100ms | | ☐ |
| 10 | Lighthouse Performance Score (mobile) | ≥ 85 | | ☐ |
| 11 | Lighthouse Accessibility Score | ≥ 90 | | ☐ |
| 12 | Lighthouse SEO Score | ≥ 95 | | ☐ |
| 13 | Lighthouse Best Practices Score | ≥ 90 | | ☐ |

---

## Part 3: Navigation & Routing

| # | Check | Status |
|---|---|---|
| 14 | `/` renders homepage without error | ☐ |
| 15 | `/about` renders about page | ☐ |
| 16 | `/services` renders services page | ☐ |
| 17 | `/solutions` renders solutions page | ☐ |
| 18 | `/projects` renders portfolio grid | ☐ |
| 19 | `/projects/cloudzyne-website` renders project detail | ☐ |
| 20 | `/projects/tuition-lms` renders project detail | ☐ |
| 21 | `/projects/beauty-salon-system` renders project detail | ☐ |
| 22 | `/contact` renders contact page | ☐ |
| 23 | `/privacy` renders privacy page (stub) | ☐ |
| 24 | `/terms` renders terms page (stub) | ☐ |
| 25 | All internal links resolve (no 404s) | ☐ |
| 26 | `/sitemap.xml` returns valid XML | ☐ |
| 27 | `/robots.txt` returns correct content | ☐ |

---

## Part 4: Component Functionality

| # | Check | Status |
|---|---|---|
| 28 | Navbar: fixed, transparent on top | ☐ |
| 29 | Navbar: backdrop blur + shadow on scroll (scrollY > 20px) | ☐ |
| 30 | Navbar: hamburger visible on mobile, hidden on md+ | ☐ |
| 31 | Mobile menu: opens and slides in on hamburger click | ☐ |
| 32 | Mobile menu: closes on link click, Escape key, and route change | ☐ |
| 33 | Hero: eyebrow, H1, copy, and two CTAs render | ☐ |
| 34 | Hero: "Start a Project" links to `/contact` | ☐ |
| 35 | Hero: "Explore Our Work" links to `/projects` | ☐ |
| 36 | Hero: entrance animation (stagger) plays on page load | ☐ |
| 37 | Trust section: all 4 tiles render with icon, title, description | ☐ |
| 38 | Trust section: tile hover → blue background + white text | ☐ |
| 39 | Services section: all 6 cards render | ☐ |
| 40 | Solutions section: all 6 cards render with problem/solution | ☐ |
| 41 | Process section: all 6 steps in correct order | ☐ |
| 42 | Projects section: all 3 featured cards render with label badge | ☐ |
| 43 | Projects section: "Your Project" placeholder links to `/contact` | ☐ |
| 44 | CTA section: renders with brand blue bg and white text | ☐ |
| 45 | Footer: renders dark with wordmark and correct copyright | ☐ |
| 46 | Footer: copyright reads "© 2026 Cloudzyne. All rights reserved." | ☐ |

---

## Part 5: Contact Form

| # | Check | Status |
|---|---|---|
| 47 | All 7 fields render with labels and placeholders | ☐ |
| 48 | Submit empty form → validation errors on required fields | ☐ |
| 49 | Invalid email → "Please enter a valid email address" | ☐ |
| 50 | Message < 20 chars → error message shown | ☐ |
| 51 | Submit button shows spinner + "Sending..." during loading | ☐ |
| 52 | On 200 response → success state replaces form | ☐ |
| 53 | On 500 response → error message shown, form re-enabled | ☐ |
| 54 | `POST /api/contact` with invalid data → 400 response | ☐ |
| 55 | `POST /api/contact` with valid data → 200 response | ☐ |

---

## Part 6: SEO & Meta

| # | Check | Status |
|---|---|---|
| 56 | Homepage: `<title>` is "Cloudzyne — Software Solutions" | ☐ |
| 57 | All pages: `<meta name="description">` present and unique | ☐ |
| 58 | All pages: `og:title`, `og:description`, `og:image` present | ☐ |
| 59 | OG image resolves at `https://cloudzyne.com/og-image.png` | ☐ |
| 60 | OG image: correct dimensions (1200×630) | ☐ |
| 61 | `twitter:card` is `summary_large_image` | ☐ |
| 62 | Homepage: JSON-LD Organization schema in `<head>` | ☐ |
| 63 | All pages: canonical URL set correctly | ☐ |
| 64 | Test with opengraph.xyz or LinkedIn post inspector | ☐ |

---

## Part 7: Accessibility

| # | Check | Status |
|---|---|---|
| 65 | Skip-to-main link visible on Tab key press | ☐ |
| 66 | Skip link jumps focus to `#main-content` | ☐ |
| 67 | Tab through page: all interactive elements reachable | ☐ |
| 68 | Tab through page: focus indicator visible on all elements | ☐ |
| 69 | Hamburger button: `aria-expanded` toggles correctly | ☐ |
| 70 | Escape key closes mobile menu and returns focus | ☐ |
| 71 | All `<Image>` components have descriptive `alt` text | ☐ |
| 72 | Decorative images have `alt=""` | ☐ |
| 73 | WAVE tool: 0 accessibility errors | ☐ |

---

## Part 8: Honesty Policy

| # | Check | Status |
|---|---|---|
| 74 | No invented client testimonials anywhere | ☐ |
| 75 | No invented statistics ("10,000 users", "99% uptime") | ☐ |
| 76 | No invented credentials or awards | ☐ |
| 77 | Academic project cards have "Academic Project" label | ☐ |
| 78 | Academic project detail pages have context banner | ☐ |
| 79 | No stock photo team/client images | ☐ |

---

## Part 9: Responsive Layout QA

Test each section at these exact widths in Chrome DevTools:

| Width | Sections to verify |
|---|---|
| 375px | All sections, especially Process (no overflow) and Footer |
| 768px | Navbar (links visible), Hero (single col), grid layouts |
| 1024px | Process section (6-col layout with connector line) |
| 1280px | All sections at max container width |
| 1440px | Content stays contained, no ultra-wide stretching |

---

## Part 10: Browser Cross-Compatibility

| Browser | Version | Status |
|---|---|---|
| Chrome | Latest | ☐ |
| Firefox | Latest | ☐ |
| Safari (macOS) | Latest | ☐ |
| Safari (iOS 16+) | iPhone SE / iPhone 14 | ☐ |
| Chrome (Android) | Pixel or similar | ☐ |

Known Safari-specific issues to check:
- `backdrop-filter: blur()` — supported in Safari but may need `-webkit-` prefix (Tailwind handles this)
- `clamp()` in font sizes — fully supported in Safari 13.1+
- `gap` in flexbox — Safari 14+ supports, earlier versions do not

---

## Sign-Off

Once all items above are checked:

```
QA completed by: _______________
Date: _______________
Vercel Production URL: https://cloudzyne.com
Last build SHA: _______________
```

The site is ready for launch.
