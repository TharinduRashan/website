# 05 — Trust / Value Props Section

## Component: `TrustSection.tsx`

**Location:** `src/components/sections/TrustSection.tsx`  
**Directive:** `'use client'` — scroll-triggered animations  
**Background:** `#F9FAFB` (neutral-50)

---

## Section Heading

```
Why businesses work with Cloudzyne
```

Supporting subtext (optional):
```
We focus on what actually matters — great software delivered with 
transparency and craftsmanship.
```

Style:
```
Heading:  text-h2 font-bold text-neutral-950 text-center
Subtext:  text-base md:text-lg text-neutral-500 text-center max-w-2xl mx-auto mt-4
```

---

## 4 Value Tiles

### Data Structure
Define in `src/data/` or inline in the component as a `const` array:

```typescript
const valueTiles = [
  {
    icon: 'Puzzle',      // Lucide icon name
    title: 'Tailored Solutions',
    description: 'We don't use templates or cookie-cutter code. Every project is built from scratch to match your specific requirements, workflow, and goals.',
  },
  {
    icon: 'Code2',
    title: 'Modern Engineering',
    description: 'We use current, maintainable technologies — TypeScript, React, Next.js, clean APIs — so your software stays fast, stable, and easy to grow.',
  },
  {
    icon: 'Layers',
    title: 'Scalable Foundations',
    description: 'What we build for you today won't need to be rebuilt tomorrow. Architecture decisions are made with your future growth in mind from day one.',
  },
  {
    icon: 'Users',
    title: 'Direct Collaboration',
    description: 'You work directly with the people building your software. No account managers in the middle, no dropped context — just clear, honest communication.',
  },
]
```

Import icons dynamically or statically by name from `lucide-react`.

---

## Layout

### Desktop (md+): 2-column grid
```
Left column:  Large visual element OR section heading block (50% width)
Right column: 2x2 grid of value tiles (50% width)
```

### Alternative layout (simpler, recommended for first build):
Full-width section heading centered above, then 4 tiles in a 2×2 grid:
```
md:grid-cols-2 xl:grid-cols-4
```

### Mobile: Single column stack

```tsx
<section className="py-16 md:py-24 bg-neutral-50">
  <div className="container mx-auto px-5 md:px-8">
    {/* Section heading */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-h2 font-bold text-neutral-950">
        Why businesses work with Cloudzyne
      </h2>
      <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">...</p>
    </div>

    {/* Tile grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
      {valueTiles.map((tile, i) => (
        <ValueTile key={tile.title} tile={tile} index={i} />
      ))}
    </div>
  </div>
</section>
```

---

## Value Tile Component

```tsx
function ValueTile({ tile, index }: { tile: ValueTile, index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={index}
      className="group bg-white rounded-2xl p-6 md:p-8
                 border border-border
                 hover:bg-brand hover:border-brand
                 transition-all duration-300 cursor-default"
    >
      {/* Icon container */}
      <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-5
                      group-hover:bg-white/20 transition-colors duration-300">
        <TileIcon className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-neutral-950 mb-2
                     group-hover:text-white transition-colors duration-300">
        {tile.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-500 leading-relaxed
                    group-hover:text-white/80 transition-colors duration-300">
        {tile.description}
      </p>
    </motion.div>
  )
}
```

### Hover State Summary
On `hover:`:
- Background: `white` → `#2373F4`
- Border: `#E5E7EB` → `#2373F4`
- Icon container: `bg-brand/10` → `bg-white/20`
- Icon color: `text-brand` → `text-white`
- Title: `text-neutral-950` → `text-white`
- Description: `text-neutral-500` → `text-white/80`
- Transition: `300ms` ease-in-out, all properties via `group`

---

## Scroll Reveal Animation

```typescript
// In lib/motion-variants.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}
```

- `whileInView="visible"` triggers once when tile enters viewport
- `viewport={{ once: true, margin: '-60px' }}` — triggers slightly before fully in view
- `custom={index}` passes tile index for stagger delay

---

## Dynamic Icon Rendering

```typescript
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

function getIcon(name: string): LucideIcon {
  return (Icons as Record<string, LucideIcon>)[name] ?? Icons.Box
}
```

---

## Checklist
- [ ] Section heading renders centered with correct H2 style
- [ ] All 4 tiles render with correct icon, title, and description
- [ ] Hover state transitions all 5 properties via `group-hover:` classes
- [ ] `whileInView` animation staggers tiles by index × 100ms
- [ ] `viewport={{ once: true }}` prevents re-triggering on scroll up
- [ ] Mobile: tiles stack in single column
- [ ] md: 2-column grid
- [ ] xl: 4-column grid (all tiles in a row)
- [ ] Icon container uses `bg-brand/10` (not a solid square)
- [ ] No invented stats, percentages, or client counts anywhere in this section
