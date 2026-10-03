# 15 — Animation System

## Library: Motion (framer-motion)

Import path: `motion/react` (the new package name for framer-motion v11+)

```typescript
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
```

All Client Components that use animations must have `'use client'` directive.

---

## Reduced Motion — Non-Negotiable

Always check `prefers-reduced-motion` before applying enter/exit animations.

```typescript
const prefersReduced = useReducedMotion()

// Usage: skip motion props if reduced
const animationProps = prefersReduced ? {} : {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}
```

CSS animations (Tailwind `animate-*`) are automatically suppressed by `@media (prefers-reduced-motion: reduce)` — add to globals.css:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Motion Variants Library

**Location:** `src/lib/motion-variants.ts`

```typescript
import type { Variants } from 'motion/react'

/** Fade up on scroll reveal — primary scroll animation */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

/** Fade in only — for elements that shouldn't move */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

/** Scale in — for icon containers, badges */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1], // back-out spring feel
    },
  }),
}

/** Stagger container — wraps children that animate independently */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

/** Hero text — page-load stagger, not scroll */
export const heroVariant = (delay: number): { initial: object; animate: object; transition: object } => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
})

/** Mobile menu slide */
export const menuVariants: Variants = {
  closed: { opacity: 0, y: -8 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

/** Menu item stagger child */
export const menuItemVariants: Variants = {
  closed: { opacity: 0, x: -12 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.2, ease: 'easeOut' },
  }),
}
```

---

## Standard Usage Patterns

### Scroll Reveal (Most Common)
```tsx
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-60px' }}
  custom={index}
>
  {/* content */}
</motion.div>
```

`viewport={{ once: true }}` — animation fires once when element enters view. Does NOT re-animate on scroll up.  
`margin: '-60px'` — triggers slightly before fully in view, so content is visible when animation starts.

### Stagger Container with Children
```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item, i) => (
    <motion.div key={item.id} variants={fadeUp} custom={i}>
      {/* item */}
    </motion.div>
  ))}
</motion.div>
```

### Page Load Animation (Hero Only)
```tsx
<motion.h1 {...heroVariant(0.1)}>Heading</motion.h1>
<motion.p  {...heroVariant(0.25)}>Subtext</motion.p>
<motion.div {...heroVariant(0.4)}>CTAs</motion.div>
```

### Hover Micro-interactions (CSS preferred)
For simple hover effects (color, scale), prefer CSS via Tailwind:
```
hover:scale-105 hover:-translate-y-1 transition-transform duration-200
```

Use `motion.div` `whileHover` only for complex animations:
```tsx
<motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.15 }}>
```

### Mobile Menu (AnimatePresence)
```tsx
<AnimatePresence>
  {menuOpen && (
    <motion.nav
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {navLinks.map((link, i) => (
        <motion.div key={link.href} variants={menuItemVariants} custom={i}>
          <Link href={link.href}>{link.label}</Link>
        </motion.div>
      ))}
    </motion.nav>
  )}
</AnimatePresence>
```

---

## Timing Reference

| Use Case | Duration | Easing |
|---|---|---|
| Hover state (color, bg) | 150ms | `ease-out` |
| Hover state (transform) | 200ms | `ease-out` |
| Navbar state change | 300ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Mobile menu open/close | 200ms | `ease-out` |
| Scroll reveal (text) | 600ms | `[0.16, 1, 0.3, 1]` |
| Scroll reveal (scale) | 400ms | `[0.34, 1.56, 0.64, 1]` |
| Page-load stagger (hero) | 600ms | `[0.16, 1, 0.3, 1]` |
| Stagger delay between items | 80ms | — |

---

## Performance Considerations

1. **GPU Compositing:** Only animate `opacity` and `transform`. Never animate `width`, `height`, `margin`, `padding`, `top`, `left` — these cause layout recalculations.

2. **`will-change`:** Do NOT apply `will-change: transform` globally. Motion handles this internally during animation. Applying it permanently wastes GPU memory.

3. **`once: true`:** Always use `viewport={{ once: true }}`. Re-animating on scroll up is visually jarring and wastes CPU.

4. **Reduce bundle:** Only import what you use from `motion/react`. Avoid importing the entire library.

5. **Server Components:** Keep animated sections as Client Components but keep them small. Avoid making entire page layouts Client Components just for one animation.

---

## Section Animation Summary

| Section | Animation Type | Trigger |
|---|---|---|
| Hero | `heroVariant` stagger | Page load |
| Trust tiles | `fadeUp` with `index` stagger | `whileInView` |
| Service cards | `fadeUp` with `index % 3` | `whileInView` |
| Solution cards | `fadeUp` with `index % 2` | `whileInView` |
| Process steps | `fadeUp` with `index * 0.1` | `whileInView` |
| Project cards | `fadeUp` with `index % 3` | `whileInView` |
| CTA section | Single `fadeUp` | `whileInView` |
| Mobile menu | `menuVariants` + `AnimatePresence` | State toggle |

---

## Checklist
- [ ] `motion-variants.ts` created with all exported variants
- [ ] `useReducedMotion()` used in all animated Client Components
- [ ] `globals.css` has reduced-motion CSS override
- [ ] `viewport={{ once: true }}` used on all `whileInView` elements
- [ ] Hero animations use page-load pattern (not scroll)
- [ ] Mobile menu uses `AnimatePresence` for mount/unmount animation
- [ ] No `layout` animations used (avoid layout shift)
- [ ] No animation of non-compositable CSS properties
- [ ] Import is from `motion/react`, not `framer-motion`
