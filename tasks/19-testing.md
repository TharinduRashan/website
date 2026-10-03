# 19 — Testing

## Testing Philosophy

This project uses a **manual + static analysis** approach rather than a full automated test suite (Jest, Playwright). The reasoning: for a marketing site, the most impactful tests are TypeScript type-checking, build verification, and manual browser/device testing.

If the project grows to include complex business logic, add unit tests with Vitest.

---

## Static Analysis Commands

Run these in order before every deploy:

### 1. TypeScript Type Check
```bash
npx tsc --noEmit
```
Must exit with code 0. Zero errors. Strict mode is enabled — no `any` escape hatches.

Common TypeScript issues to watch for:
- `params.slug` in dynamic routes: In Next.js 14+, `params` is now a Promise in some configurations — use `await params` or the correct pattern for your Next.js version.
- `noUncheckedIndexedAccess`: Array access returns `T | undefined`. Add null checks.
- Missing return types on `generateMetadata` and page components.

### 2. ESLint
```bash
npm run lint
```
Must exit with code 0. The `next/core-web-vitals` ruleset is applied by default.

Common ESLint rules triggered:
- `@next/next/no-html-link-for-pages`: Use `<Link>` from `next/link`, not `<a>` for internal routes.
- `@next/next/no-img-element`: Use `<Image>` from `next/image`, not `<img>`.
- `react-hooks/exhaustive-deps`: Add all used values to `useEffect` dependency arrays.
- `jsx-a11y/alt-text`: All `<Image>` components must have `alt` prop.

### 3. Production Build
```bash
npm run build
```
Must complete without errors. Warnings are acceptable but should be reviewed.

Review the build output for:
- Route sizes (First Load JS)
- Any "missing `generateStaticParams`" warnings for dynamic routes
- Any unoptimized image warnings

Expected output:
```
Route (app)              Size     First Load JS
┌ ○ /                   2.1 kB    85 kB
├ ○ /about              1.8 kB    84 kB
├ ○ /contact            3.2 kB    91 kB
├ ○ /projects           2.0 kB    85 kB
└ ● /projects/[slug]    1.5 kB    84 kB
```

---

## Manual Browser Testing Checklist

### Browsers to Test
- Chrome (latest) — primary
- Firefox (latest)
- Safari (macOS latest) — important for webkit quirks

### Desktop Testing (Chrome DevTools → Responsive Mode)

| Viewport | Section | Check |
|---|---|---|
| 1280px | Navbar | Links visible, hamburger hidden |
| 1280px | Hero | Two-column layout, visual element visible |
| 1280px | Trust | 4-column tile grid |
| 1280px | Services | 3-column card grid |
| 1280px | Solutions | 2-column card grid |
| 1280px | Process | 6-column horizontal row, connector line visible |
| 1280px | Projects | 3-column card grid |
| 1280px | CTA | Full-width, centered |
| 1280px | Footer | 5-column layout |

### Tablet Testing (768px)

| Check | Expected |
|---|---|
| Navbar | Nav links visible (md: breakpoint), hamburger hidden |
| Hero | Single column, visual element hidden |
| Trust | 2-column grid |
| Services | 2-column grid |
| Solutions | 2-column grid |
| Process | 3-column grid |
| Footer | 2-column grid |

### Mobile Testing (375px — iPhone SE)

| Check | Expected |
|---|---|
| Navbar | Logo + hamburger only |
| Hamburger → opens menu | Slide animation, all links visible |
| Hero | Single column, no overflow, CTA buttons stacked |
| Trust tiles | 1-column stack |
| Service cards | 1-column stack |
| Process steps | 2-column or horizontal scroll |
| Contact form | All fields full-width |
| Footer | 2-column, bottom bar stacks |
| No horizontal overflow | Scroll X must be disabled everywhere |

---

## Animation Testing

- [ ] Hero elements stagger on page load (eyebrow → H1 → copy → CTAs)
- [ ] Scroll past hero → trust tiles animate up one by one
- [ ] Scroll back up → tiles do NOT re-animate (`once: true`)
- [ ] Hamburger click → menu slides in smoothly
- [ ] Hamburger click again → menu slides out smoothly
- [ ] Set OS to "Reduce Motion" → all scroll animations disabled, elements appear instantly
- [ ] Set OS to "Reduce Motion" → mobile menu still opens/closes (CSS transition, no motion)

---

## Form Validation Testing

Test all error states on `/contact`:

| Scenario | Expected Result |
|---|---|
| Submit with all fields empty | Error on Name, Email, Project Type, Message |
| Enter invalid email (no @) | "Please enter a valid email address" on Email |
| Enter name with 1 character | "Name must be at least 2 characters" |
| Enter message < 20 chars | "Please provide at least 20 characters" |
| Enter valid phone in wrong format | "Please enter a valid phone number" |
| Submit valid form | Button shows "Sending..." → then success state |
| API returns 500 | Error message shown, form re-enabled |
| Tab through all fields | Focus order is logical (Name → Email → Company → Phone → ...) |

---

## Navigation Testing

- [ ] All navbar links navigate to correct routes
- [ ] Active state applies to current page link
- [ ] Mobile menu closes after clicking a link
- [ ] Mobile menu closes on route change
- [ ] Browser back button works after navigating
- [ ] Footer links all resolve (no 404s)
- [ ] `/sitemap.xml` loads and contains all routes
- [ ] `/robots.txt` loads and shows correct rules
- [ ] `/api/contact` reachable via POST (test in Postman or `curl`)

---

## Accessibility Testing

- [ ] Tab through entire page — focus visible on all interactive elements
- [ ] Hamburger button: Tab to it, Enter to open menu
- [ ] Inside menu: Tab through links, Escape to close
- [ ] Skip link: Tab once at page top → skip link appears, Enter → jumps to main content
- [ ] Screen reader (VoiceOver/NVDA): Page structure announced correctly
- [ ] WAVE browser extension: Zero errors (warnings acceptable)
- [ ] Lighthouse → Accessibility score ≥ 90

---

## TypeScript-Specific Checks

```bash
# Check for any usage of 'any' type
grep -r ": any" src/
grep -r "as any" src/

# These should return no results in production code
```

Ensure:
- All `data/*.ts` files export typed arrays with full interface definitions
- All component props are typed (no implicit `any`)
- `contactSchema` inferred type matches form field names exactly
- `generateStaticParams` returns correct shape: `{ slug: string }[]`

---

## Pre-Deploy Checklist

```
[ ] npx tsc --noEmit → 0 errors
[ ] npm run lint → 0 errors
[ ] npm run build → succeeds, no dynamic-import errors
[ ] All 30 acceptance criteria from 00-project-overview.md verified
[ ] Lighthouse mobile score: Performance ≥ 85, Accessibility ≥ 90, SEO ≥ 95, Best Practices ≥ 90
[ ] /sitemap.xml accessible
[ ] /robots.txt accessible
[ ] OG image renders correctly when shared on social (use https://www.opengraph.xyz/ to test)
[ ] Contact form successfully submits (or gracefully fails if email not configured)
[ ] Environment variables set in Vercel dashboard
```
