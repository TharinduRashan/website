# 09 — Process Section (How We Work)

## Component: `ProcessSection.tsx`

**Location:** `src/components/sections/ProcessSection.tsx`  
**Directive:** `'use client'` — scroll animations  
**Background:** `#F9FAFB` (neutral-50)

---

## Section Heading

```
How we work
```

Subtext:
```
A clear process means fewer surprises and better software.
Here's what working with Cloudzyne looks like.
```

Eyebrow: `Our Process`

---

## Process Steps Data

Define in `src/data/process.ts`:

```typescript
export interface ProcessStep {
  number: string    // '01', '02', etc.
  title: string
  description: string
  icon: string      // Lucide icon name
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    icon: 'Search',
    description: 'We start by listening. Before writing a line of code, we understand your business, your users, and what success looks like. This is where scope is defined and assumptions are challenged.',
  },
  {
    number: '02',
    title: 'Plan',
    icon: 'Map',
    description: 'We turn discovery into a concrete plan — technical architecture, feature list, timeline, and delivery milestones. No surprises, no scope creep from lack of clarity.',
  },
  {
    number: '03',
    title: 'Design',
    icon: 'Pencil',
    description: 'UI/UX design happens before development. Wireframes and high-fidelity designs are reviewed and approved before we start building. Changes are cheap at this stage.',
  },
  {
    number: '04',
    title: 'Build',
    icon: 'Hammer',
    description: 'Development in focused, reviewable increments. We share progress regularly, run code reviews, and keep quality high throughout — not just at the end.',
  },
  {
    number: '05',
    title: 'Launch',
    icon: 'Rocket',
    description: 'Deployment to production, with testing, smoke checks, and monitoring in place. We handle the technical launch so you can focus on the business launch.',
  },
  {
    number: '06',
    title: 'Improve',
    icon: 'TrendingUp',
    description: 'Software is never truly finished. Post-launch, we monitor, fix, and improve. We stay available for maintenance and can grow the product as your needs evolve.',
  },
]
```

---

## Visual Design

### Desktop: Horizontal Timeline Row
- All 6 steps in a single horizontal row
- Connected by a dotted/dashed line through the center
- Number displayed prominently above or inside each step

```tsx
<div className="relative">
  {/* Connector line */}
  <div className="absolute top-8 left-0 right-0 h-px bg-border hidden lg:block
                  [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]" />

  {/* Steps row */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
    {processSteps.map((step, i) => (
      <ProcessStep key={step.number} step={step} index={i} />
    ))}
  </div>
</div>
```

### Mobile/Tablet: 2-column or 3-column grid
- 2-col on mobile (xs–md)
- 3-col on tablet (md–lg)
- No connecting line on mobile

---

## Step Card Component

```tsx
function ProcessStepCard({ step, index }: { step: ProcessStep, index: number }) {
  const Icon = getIcon(step.icon)
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index * 0.1}
      className="flex flex-col items-start lg:items-center text-left lg:text-center"
    >
      {/* Step number + icon combined */}
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-2xl bg-white border border-border
                        flex items-center justify-center shadow-sm
                        group-hover:border-brand transition-colors duration-300">
          <Icon className="w-6 h-6 text-brand" />
        </div>
        {/* Step number badge */}
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand
                         text-white text-xs font-bold flex items-center justify-center
                         leading-none">
          {step.number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-neutral-950 mb-2">{step.title}</h3>

      {/* Description */}
      <p className="text-xs text-neutral-500 leading-relaxed max-w-[180px]">
        {step.description}
      </p>
    </motion.div>
  )
}
```

---

## Mobile Horizontal Scroll (Alternative)

If the horizontal row approach is too cramped on tablet, offer a horizontally scrollable strip on `< lg`:

```tsx
<div className="lg:hidden overflow-x-auto pb-4 -mx-5 px-5">
  <div className="flex gap-5 w-max">
    {processSteps.map((step, i) => (
      <div key={step.number} className="w-52 flex-shrink-0">
        <ProcessStepCard step={step} index={i} />
      </div>
    ))}
  </div>
</div>

{/* Desktop grid */}
<div className="hidden lg:grid grid-cols-6 gap-6 relative">
  {/* connector line + cards */}
</div>
```

Scroll snap behavior for mobile:
```
scroll-snap-type: x mandatory
scroll-snap-align: start (on each card)
```
Tailwind: `snap-x snap-mandatory` on container, `snap-start` on each card.

---

## Animation

Each step fades up with a delay proportional to its index:
```typescript
custom={index}
// in fadeUp variant: delay = custom * 0.08
```

On desktop, because all 6 steps are in one visible row, stagger is subtle (0–0.48s total spread).  
On mobile, steps reveal one row at a time.

---

## `/about` Page Integration

The process section appears on both the homepage (full 6 steps) and the `/about` page (same component, different heading/context if needed).

---

## Checklist
- [ ] All 6 steps render with number badge, icon, title, description
- [ ] `process.ts` data file typed with `ProcessStep` interface
- [ ] Desktop: 6-column horizontal layout with connector line
- [ ] Connector line uses CSS mask-image for fade-in/fade-out edges
- [ ] Mobile: horizontal scroll snap OR 2-col grid
- [ ] Step number badge positioned absolutely at top-right of icon box
- [ ] `whileInView` stagger with `once: true`
- [ ] Icons imported via `getIcon()` helper
- [ ] No padding collision between navbar and section top
- [ ] Works at 375px mobile width without horizontal overflow
