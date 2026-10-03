# 18 — Performance

## Core Web Vitals Targets

| Metric | Target | Measurement |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Mobile Lighthouse |
| CLS (Cumulative Layout Shift) | < 0.1 | Chrome DevTools |
| FID / INP (Interaction to Next Paint) | < 100ms | Real user measurement |
| TTFB (Time to First Byte) | < 800ms | Network tab |
| Total bundle (JS) | < 200kB gzipped | `next build` output |

---

## Server vs Client Components

The most important performance decision in Next.js App Router. Default to Server Components; only add `'use client'` when required.

### Server Components (no `'use client'`)
- `layout.tsx` — root layout
- `page.tsx` files (unless they need useState/useEffect)
- `Footer.tsx` — static links
- `CtaSection.tsx` — no interactivity
- `HeroSection.tsx` page — can be server, with a Client sub-component for animations

### Client Components (require `'use client'`)
- `Navbar.tsx` — `useState` (scroll, menu), `useEffect`
- `HeroSection.tsx` — if using `motion` directly
- `TrustSection.tsx` — `motion` `whileInView`
- `ServicesSection.tsx` — `motion` `whileInView`
- `SolutionsSection.tsx` — `motion` `whileInView`
- `ProcessSection.tsx` — `motion` `whileInView`
- `ProjectsSection.tsx` — `motion` `whileInView`
- `ContactForm.tsx` — `useState`, `useForm`
- `AnimatedSection.tsx` — wrapper for any animated section

### Split Strategy

Keep Server Components as wrappers; push `'use client'` down to the smallest possible leaf:

```tsx
// Server Component — page.tsx
import { ServicesSection } from '@/components/sections/ServicesSection'
export default function HomePage() {
  return <ServicesSection />  // ServicesSection is a Client Component
}

// Or even better — push client boundary to just the animated grid:
// ServerComponent passes data to ClientGrid
export default function ServicesPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container ...">
        <div className="mb-12">  {/* Static heading — stays server */}
          <h2>What we build</h2>
        </div>
        <ServicesGrid services={services} />  {/* Client Component — just the animated grid */}
      </div>
    </section>
  )
}
```

---

## Font Optimization

Use `next/font` exclusively. Never load fonts via `<link>` in `<head>` or `@import` in CSS.

```typescript
// src/app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',       // Prevents FOUT
  preload: true,
  weight: ['400', '500', '600', '700', '800'],
})
```

`display: 'swap'` ensures text is visible during font load (uses system font fallback).  
`weight: [...]` only loads the weights actually used — don't include unused weights.

---

## Image Optimization

All images must use `next/image`. Never use `<img>` tags directly.

```tsx
import Image from 'next/image'

// With explicit dimensions
<Image
  src="/og-image.png"
  alt="Cloudzyne"
  width={1200}
  height={630}
  priority    // Add for LCP images (above the fold)
/>

// Fill mode for CSS-controlled containers
<div className="relative w-full h-64">
  <Image
    src="/project-cover.jpg"
    alt="Project screenshot"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
  />
</div>
```

Add `priority` prop to LCP candidate images (hero images, above-the-fold content).  
Add `sizes` prop matching actual rendered size — prevents loading unnecessarily large images.

---

## Bundle Size Management

### Check After Each Dependency Addition
```bash
npm run build
# Review .next/analyze/ if using @next/bundle-analyzer
```

### Add Bundle Analyzer (optional during development)
```bash
npm install --save-dev @next/bundle-analyzer
```
```typescript
// next.config.ts
import bundleAnalyzer from '@next/bundle-analyzer'
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })
export default withBundleAnalyzer(nextConfig)
```
Run: `ANALYZE=true npm run build`

### Lucide React — Tree-shaking
Import icons individually, not the whole library:
```typescript
// ✅ Correct — tree-shakeable
import { Code2, Globe, Smartphone } from 'lucide-react'

// ❌ Wrong — imports entire library
import * as Icons from 'lucide-react'
```

The `getIcon()` helper used for dynamic icons uses `* as Icons` which defeats tree-shaking. Only use this pattern when truly dynamic; for known icons, import specifically.

### Motion — Tree-shaking
```typescript
// ✅ Import only from motion/react
import { motion, AnimatePresence } from 'motion/react'
// Not from 'framer-motion' (legacy import)
```

---

## CSS Performance

Tailwind CSS is purged in production — only used classes are included. Ensure:
- No dynamic class construction that Tailwind can't detect:
  ```typescript
  // ❌ Tailwind cannot purge dynamic strings like this:
  const classes = `bg-${color}-500` // Don't do this
  
  // ✅ Use complete class strings with cn():
  const classes = color === 'blue' ? 'bg-brand' : 'bg-neutral-100'
  ```

---

## Preventing CLS (Cumulative Layout Shift)

1. **Font:** `display: 'swap'` with proper `size-adjust` — `next/font` handles this.
2. **Images:** Always provide `width` + `height` or use `fill` with a sized container.
3. **Dynamic content:** Reserve space for any async-loaded content.
4. **Animations:** Only animate `transform` and `opacity` — not layout properties.
5. **Navbar:** Fixed position (`fixed top-0`) — does not push content. Offset content with `pt-16` or `pt-20`.

---

## API Route Performance

The `/api/contact` route is invoked on form submit (not on page load). No performance impact on initial page load.

---

## Vercel Deployment Optimizations

Vercel automatically:
- Enables Edge Network CDN for static assets
- Provides ISR (Incremental Static Regeneration) if enabled
- Runs `next build` with production optimizations
- Serves pre-compressed (gzip/brotli) assets

For this site, all pages can be **statically generated** (SSG) since no data is fetched from external APIs on render. Use `export const dynamic = 'force-static'` if needed or simply rely on Next.js default SSG behavior.

---

## Checklist
- [ ] All data-display sections are Server Components with Client animated children
- [ ] `Navbar.tsx` is the only layout component with `'use client'`
- [ ] `next/font` with `display: 'swap'` configured for Inter
- [ ] Only needed font weights loaded (400, 500, 600, 700, 800)
- [ ] All images use `next/image` — no raw `<img>` tags
- [ ] LCP images have `priority` prop
- [ ] Images have `sizes` prop matching rendered dimensions
- [ ] Lucide icons imported individually (not `* as Icons`) where possible
- [ ] `npm run build` output shows no pages over 200kB JS
- [ ] Lighthouse mobile LCP < 2.5s (test after deploy to Vercel)
- [ ] CLS < 0.1 on all pages (check Chrome DevTools → Performance)
- [ ] Navbar is `position: fixed` — content has `pt-16` or `pt-20` offset
