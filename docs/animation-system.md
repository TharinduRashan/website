# Animation System

## Library: Motion (framer-motion v11+)

Package: `motion` (new unified package, replaces `framer-motion` for Next.js)  
Import: `import { motion, AnimatePresence, useReducedMotion } from 'motion/react'`

> **Note:** Do not import from `framer-motion` — use `motion/react` for React-specific exports.

---

## Core Philosophy

1. **Purposeful, not decorative.** Every animation must aid comprehension or guide attention.
2. **Fast.** No animation should delay the user from reading content. Most transitions are 300–600ms.
3. **Scroll reveals are one-time.** `viewport={{ once: true }}` ensures elements don't re-animate as the user scrolls up and down.
4. **Reduced motion first.** The `useReducedMotion()` hook is checked in every animated component.

---

## Motion Variants Catalog

**File:** `src/lib/motion-variants.ts`

### `fadeUp` — Primary Scroll Reveal

Used by: Trust tiles, Service cards, Solution cards, Process steps, Project cards

```typescript
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,          // i = custom prop (index)
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ease-out-quint: fast start, gentle landing
    },
  }),
}
```

**Usage:**
```tsx
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-60px' }}
  custom={index}   // Passes index as stagger delay
>
```

### `fadeIn` — Opacity Only Reveal

Used by: Images, background decorations, sections without vertical movement

```typescript
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}
```

### `scaleIn` — Pop-in Effect

Used by: Icon containers, number badges, decorative elements

```typescript
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1], // back-out: slight overshoot (spring feel)
    },
  }),
}
```

### `staggerContainer` — Parent Variant for Coordinated Children

Used when multiple children should animate in sequence via parent coordination:

```typescript
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}
```

**Usage with children:**
```tsx
<motion.ul
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map(item => (
    <motion.li key={item.id} variants={fadeUp}>
      {/* item content */}
    </motion.li>
  ))}
</motion.ul>
```

Note: When using `staggerContainer`, children use variants WITHOUT `custom` — the parent handles the stagger timing.

### `menuVariants` + `menuItemVariants` — Mobile Nav

```typescript
export const menuVariants: Variants = {
  closed: { opacity: 0, y: -8 },
  open: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

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

## Scroll Trigger Strategy

### `whileInView` Configuration

```tsx
viewport={{
  once: true,      // Only animate once — not on scroll up
  margin: '-60px'  // Trigger 60px before element fully enters viewport
                   // Prevents content popping in after you can see it
}}
```

### When to Use `whileInView` vs `animate`

| Use `whileInView` | Use `animate` (page-load) |
|---|---|
| Section content below the fold | Hero section elements |
| Content that benefits from "reveal" feel | Navigation elements |
| Cards in grids | CTA section (if very top) |
| Any content the user has to scroll to see | |

### Stagger Timing by Section

Each section uses a different stagger base to control row-independent timing:

| Section | Stagger formula | Reason |
|---|---|---|
| Trust tiles (4 items) | `custom={index}` → 0, 80, 160, 240ms | All in one row, even stagger |
| Services (6 items, 3-col) | `custom={index % 3}` → 0, 80, 160ms repeated | Per-row stagger |
| Solutions (6 items, 2-col) | `custom={index % 2}` → 0, 80ms repeated | Per-row stagger |
| Process (6 items, 6-col) | `custom={index * 0.05}` → 0–250ms | Slower reveals for timeline feel |
| Projects (3-4 items, 3-col) | `custom={index % 3}` | Per-row stagger |

---

## Hero Animation System

Hero animations fire on **page load**, not scroll. They use explicit `initial`/`animate` (not `whileInView`):

```typescript
// Helper from motion-variants.ts
export const heroVariant = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
})
```

Sequence (all 600ms duration):

| Element | Delay |
|---|---|
| Eyebrow badge | 0ms |
| H1 line 1 | 100ms |
| H1 line 2 | 180ms |
| Supporting copy | 280ms |
| CTA buttons | 380ms |
| Visual element | 200ms (concurrent with H1) |

---

## Mobile Menu Animation

Uses `AnimatePresence` for mount/unmount lifecycle:

```tsx
<AnimatePresence mode="wait">
  {menuOpen && (
    <motion.div
      key="mobile-menu"
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
    </motion.div>
  )}
</AnimatePresence>
```

`AnimatePresence` must wrap any conditionally rendered motion component to enable exit animations.

---

## Performance Considerations

### Animatable CSS Properties (GPU-composited)

**Only animate these** — they run on the GPU compositor, not the main thread:

| Property | Motion API |
|---|---|
| `opacity` | `opacity: 0 → 1` |
| `transform: translateY()` | `y: 32 → 0` |
| `transform: translateX()` | `x: -12 → 0` |
| `transform: scale()` | `scale: 0.7 → 1` |

### Never Animate These (cause layout recalculation)

- `width`, `height`
- `margin`, `padding`
- `top`, `left`, `right`, `bottom` (use `transform: translate` instead)
- `border-width`
- `font-size`

### `will-change`

Motion automatically applies `will-change: transform, opacity` during animation and removes it afterward. Do NOT apply `will-change` in static CSS — it consumes persistent GPU memory.

### `once: true` — Mandatory

Always set `viewport={{ once: true }}`. Without it:
- Elements re-animate every time they scroll into view
- Jarring for users scrolling up to re-read content
- Wasted CPU/GPU cycles

---

## Reduced Motion Implementation

```typescript
// In every animated component:
const prefersReduced = useReducedMotion()

// Pattern 1: Conditional props
const motionProps = prefersReduced
  ? {}   // Render immediately, no animation
  : { initial: 'hidden', whileInView: 'visible', variants: fadeUp, viewport: { once: true } }

return <motion.div {...motionProps}>{children}</motion.div>

// Pattern 2: Conditional render
if (prefersReduced) {
  return <div>{children}</div>
}
return (
  <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
    {children}
  </motion.div>
)
```

CSS fallback in `globals.css` ensures Tailwind CSS animations are also disabled:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Timing Reference Summary

| Animation | Duration | Easing |
|---|---|---|
| Hover color/bg change | 150ms | `ease-out` |
| Hover transform (scale, translate) | 200ms | `ease-out` |
| Navbar scroll state change | 300ms | `ease-in-out` |
| Menu open/close | 200ms | `ease-out` |
| Menu item stagger | 50ms between | `ease-out` |
| Scroll reveal (fadeUp) | 600ms | `[0.16, 1, 0.3, 1]` |
| Scroll reveal (scaleIn) | 400ms | `[0.34, 1.56, 0.64, 1]` |
| Hero entrance | 600ms | `[0.16, 1, 0.3, 1]` |
| Item stagger delay | 80ms between | — |
