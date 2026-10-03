# 04 — Hero Section

## Component: `HeroSection.tsx`

**Location:** `src/components/sections/HeroSection.tsx`  
**Directive:** `'use client'` — motion animations  
**Section background:** `#FFFFFF`  
**Height:** `min-h-screen` with `pt-20` (navbar offset)

---

## Content

### Eyebrow Tag
```
SOFTWARE SOLUTIONS · SRI LANKA
```
Style: `text-xs font-semibold tracking-[0.12em] uppercase text-brand`  
Wrapped in: `<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/8 text-brand text-xs font-semibold tracking-widest uppercase">`

### Heading (H1)
```
We build software that
moves businesses forward.
```
Style: `text-display font-extrabold text-neutral-950 leading-[1.05] tracking-[-0.03em]`  
Line break is semantic: render as two lines on large screens (`<br className="hidden md:inline" />`).

### Supporting Copy
```
From MVPs to full-scale systems — Cloudzyne works directly 
with startups and growing businesses to design, build, and 
ship software that actually works.
```
Style: `text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed`

### Primary CTA
```
Label:  Start a Project
Route:  /contact
Style:  bg-brand text-white px-7 py-3.5 rounded-full font-semibold text-sm
        hover:bg-brand-dark shadow-none hover:shadow-[0_4px_24px_rgba(35,115,244,0.3)]
        transition-all duration-200
```

### Secondary CTA
```
Label:  Explore Our Work
Route:  /projects
Style:  text-neutral-950 font-semibold text-sm flex items-center gap-1.5
        hover:gap-3 transition-all duration-200
        Arrow icon: <ArrowRight size={14} /> from lucide-react
```

---

## Layout

### Desktop (lg+): Two-column
```
Left col:  text content (7/12 width) — eyebrow, H1, copy, CTAs
Right col: visual element (5/12 width) — geometric illustration
```

```tsx
<section className="min-h-screen pt-20 flex items-center">
  <div className="container mx-auto px-5 md:px-8 py-16 md:py-24">
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        {/* text content */}
      </div>
      <div className="lg:col-span-5 hidden lg:flex justify-center">
        {/* visual element */}
      </div>
    </div>
  </div>
</section>
```

### Mobile (< lg): Single column, text only

---

## Visual Element (Right Side)

Implement as an inline SVG or CSS-based geometric composition. **Do NOT use a placeholder image or external asset.** Options:

### Option A — CSS Grid of Squares (preferred for simplicity + brand feel)
```tsx
<div className="relative w-full aspect-square max-w-[480px]">
  <div className="grid grid-cols-4 gap-3">
    {Array.from({ length: 16 }).map((_, i) => (
      <motion.div
        key={i}
        className={cn(
          "aspect-square rounded-xl",
          i % 5 === 0 ? "bg-brand" : i % 3 === 0 ? "bg-brand/20" : "bg-neutral-100"
        )}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.05 * i, duration: 0.4, ease: 'backOut' }}
      />
    ))}
  </div>
</div>
```

### Option B — Abstract SVG circuit/node pattern
Use `<svg>` with circles, lines, and dots in brand colors. Keep it minimal.

---

## Entrance Animation Sequence

All hero elements animate on page load (not scroll-triggered). Use `motion.div` with `initial`/`animate`/`transition`.

| Element | Initial | Animate | Delay |
|---|---|---|---|
| Eyebrow tag | `opacity:0, y:16` | `opacity:1, y:0` | 0ms |
| H1 (line 1) | `opacity:0, y:24` | `opacity:1, y:0` | 100ms |
| H1 (line 2) | `opacity:0, y:24` | `opacity:1, y:0` | 180ms |
| Supporting copy | `opacity:0, y:20` | `opacity:1, y:0` | 280ms |
| CTA buttons | `opacity:0, y:16` | `opacity:1, y:0` | 380ms |
| Visual element | `opacity:0, scale:0.9` | `opacity:1, scale:1` | 200ms |

Global easing for all: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quint)  
All durations: `600ms`

### Motion Variants (from `lib/motion-variants.ts`)
```typescript
export const heroTextVariant = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
})
```

---

## Reduced Motion

Wrap all motion with:
```typescript
const prefersReduced = useReducedMotion()
```
If `prefersReduced`, remove `initial`/`animate` props (render elements visible immediately).

---

## Scroll Indicator (Optional)
A subtle animated down-arrow or `↓` text at the bottom of the hero to encourage scrolling.
```tsx
<motion.div
  animate={{ y: [0, 8, 0] }}
  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400"
>
  <ChevronDown size={24} />
</motion.div>
```

---

## Full Import List
```typescript
'use client'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

---

## Checklist
- [ ] Eyebrow tag renders with brand pill style
- [ ] H1 renders at `text-display` size with line break on lg+
- [ ] Primary CTA links to `/contact`
- [ ] Secondary CTA links to `/projects` with ArrowRight icon
- [ ] Visual element renders and animates on desktop
- [ ] Stagger entrance animation sequence works correctly
- [ ] Reduced motion: all elements appear immediately
- [ ] Mobile: visual element hidden, text is centered or left-aligned
- [ ] Hero is full viewport height (`min-h-screen`)
