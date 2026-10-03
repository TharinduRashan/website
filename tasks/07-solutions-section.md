# 07 — Solutions Section

## Component: `SolutionsSection.tsx`

**Location:** `src/components/sections/SolutionsSection.tsx`  
**Directive:** `'use client'` — scroll animations  
**Background:** `#F9FAFB` (neutral-50)

---

## Purpose

Services answer "what do we build?" — Solutions answer "what problems do we solve?"  
Each solution is framed as a **problem → solution** pair, speaking directly to the business buyer.

---

## Section Heading

```
Solutions for real business needs
```

Subtext:
```
Every business is different. Here's what we help companies tackle.
```

Eyebrow: `Solutions`

---

## Solutions Data

Define in `src/data/solutions.ts`:

```typescript
export interface Solution {
  id: string
  icon: string          // Lucide icon name
  category: string      // Short category label
  problem: string       // The business pain
  solution: string      // How Cloudzyne addresses it
  exampleOutputs?: string[]  // Concrete deliverables (optional)
}

export const solutions: Solution[] = [
  {
    id: 'business-automation',
    icon: 'Zap',
    category: 'Business Automation',
    problem: 'Manual processes are slowing your team down — spreadsheets, emails, copy-pasting between tools.',
    solution: 'We build custom automation that connects your tools, eliminates repetitive work, and gives your team time back.',
    exampleOutputs: ['Invoice automation', 'Lead routing workflows', 'Report generation pipelines'],
  },
  {
    id: 'digital-platforms',
    icon: 'Monitor',
    category: 'Digital Platforms',
    problem: 'You need a web presence or digital product but don\'t want a generic template that looks like everyone else.',
    solution: 'We design and build custom digital platforms — websites, portals, and marketplaces — that represent your brand and work for your users.',
    exampleOutputs: ['Business websites', 'Booking platforms', 'Marketplaces'],
  },
  {
    id: 'internal-systems',
    icon: 'LayoutDashboard',
    category: 'Internal Business Systems',
    problem: 'Your team uses disconnected tools, or your business has outgrown the software it started with.',
    solution: 'We build internal dashboards, admin panels, and management systems tailored to how your business actually operates.',
    exampleOutputs: ['Inventory management', 'CRM systems', 'Staff scheduling tools'],
  },
  {
    id: 'customer-applications',
    icon: 'Users',
    category: 'Customer Applications',
    problem: 'You want to deliver a better experience to your customers — something faster and more intuitive than a generic third-party tool.',
    solution: 'We build customer-facing applications that feel good to use and reflect the quality of your brand.',
    exampleOutputs: ['Appointment booking apps', 'Customer portals', 'Mobile apps'],
  },
  {
    id: 'ai-workflows',
    icon: 'BrainCircuit',
    category: 'AI-Powered Workflows',
    problem: 'You\'ve heard about AI but aren\'t sure how it applies to your specific business context.',
    solution: 'We identify where AI (LLMs, classification, generation) genuinely adds value in your workflow and integrate it practically.',
    exampleOutputs: ['Document processing', 'Chatbots for internal use', 'Content generation pipelines'],
  },
  {
    id: 'saas-products',
    icon: 'Package',
    category: 'SaaS Products',
    problem: 'You have an idea for a software product and need a technical partner to bring it to life.',
    solution: 'From concept to launch — we build MVPs and full SaaS products with subscription billing, user auth, and scalable infrastructure.',
    exampleOutputs: ['MVP launches', 'Multi-tenant SaaS apps', 'API products'],
  },
]
```

---

## Layout Options

### Option A — Alternating Row Layout (Desktop)
Each solution is a horizontal card alternating text-left/visual-right:
- Too heavy for a homepage section. Better for `/solutions` detail page.

### Option B — 2-Column Cards Grid (Recommended for Homepage)
Clean 2-column grid with large cards. More scannable.

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
  {solutions.map((sol, i) => (
    <SolutionCard key={sol.id} solution={sol} index={i} />
  ))}
</div>
```

### Option C — Accordion / Collapsible List
Each row has category name + chevron. Clicking reveals problem + solution text. Use shadcn `Accordion`.

Good for mobile but less visually impactful. Use for `/solutions` page, not homepage.

---

## Solution Card Component

```tsx
function SolutionCard({ solution, index }: { solution: Solution, index: number }) {
  const Icon = getIcon(solution.icon)
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index % 2}
      className="group bg-white border border-border rounded-2xl p-6 md:p-8
                 hover:border-brand/25 hover:shadow-md
                 transition-all duration-300"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center
                        group-hover:bg-brand transition-colors duration-300">
          <Icon className="w-4 h-4 text-brand group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="text-xs font-semibold tracking-wide uppercase text-brand">
          {solution.category}
        </span>
      </div>

      {/* Problem */}
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">
          The challenge
        </p>
        <p className="text-sm text-neutral-600 leading-relaxed">{solution.problem}</p>
      </div>

      {/* Solution */}
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-1.5">
          Our approach
        </p>
        <p className="text-sm text-neutral-800 leading-relaxed font-medium">{solution.solution}</p>
      </div>

      {/* Example outputs */}
      {solution.exampleOutputs && (
        <ul className="flex flex-wrap gap-2 mt-auto">
          {solution.exampleOutputs.map(item => (
            <li key={item} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100
                                      text-neutral-600 font-medium">
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
```

---

## `/solutions` Page

The standalone `/solutions` page uses `Accordion` from shadcn:
```tsx
<Accordion type="single" collapsible>
  {solutions.map(sol => (
    <AccordionItem key={sol.id} value={sol.id} id={sol.id}>
      <AccordionTrigger>{sol.category}</AccordionTrigger>
      <AccordionContent>
        {/* Full problem/solution/examples */}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

---

## Section Footer

```tsx
<div className="mt-10 text-center">
  <Button asChild variant="outline" className="rounded-full">
    <Link href="/solutions">See all solutions</Link>
  </Button>
</div>
```

---

## Checklist
- [ ] All 6 solution cards render with icon, category, problem, solution text
- [ ] Example output pills render for all solutions that have them
- [ ] `solutions.ts` typed with `Solution` interface
- [ ] Icons switch to white on hover via `group-hover:` chain
- [ ] 1-col mobile, 2-col md+ grid
- [ ] `whileInView` stagger with `index % 2` for per-row timing
- [ ] "See all solutions" links to `/solutions`
- [ ] No vague corporate filler — every problem/solution is specific and grounded
