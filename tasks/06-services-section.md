# 06 — Services Section

## Component: `ServicesSection.tsx`

**Location:** `src/components/sections/ServicesSection.tsx`  
**Directive:** `'use client'` — scroll animations  
**Background:** `#FFFFFF`

---

## Section Heading

```
What we build
```

Subtext:
```
From idea to deployment — we cover the full spectrum of modern 
software development.
```

Style:
```
Heading:  text-h2 font-bold text-neutral-950
Subtext:  text-lg text-neutral-500 max-w-2xl mt-4
Layout:   Left-aligned on desktop (not centered)
```

---

## Service Cards Data

Define in `src/data/services.ts`:

```typescript
export interface Service {
  id: string
  icon: string           // Lucide icon name
  title: string
  description: string
  href?: string          // Optional deep link to /services#id
}

export const services: Service[] = [
  {
    id: 'custom-software',
    icon: 'Code2',
    title: 'Custom Software Development',
    description: 'Purpose-built applications designed around your business logic. We architect and develop software that solves real problems, not imaginary ones.',
    href: '/services#custom-software',
  },
  {
    id: 'web-applications',
    icon: 'Globe',
    title: 'Web Applications',
    description: 'Performant, accessible web apps built with modern frameworks. Whether it\'s a SaaS dashboard, a customer portal, or an internal tool — we build it right.',
    href: '/services#web-applications',
  },
  {
    id: 'mobile-applications',
    icon: 'Smartphone',
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps (React Native) that feel native, load fast, and scale with your user base.',
    href: '/services#mobile-applications',
  },
  {
    id: 'ai-solutions',
    icon: 'Brain',
    title: 'AI Solutions',
    description: 'Integrating language models, automation, and machine learning into practical workflows. AI that does useful work, not AI for its own sake.',
    href: '/services#ai-solutions',
  },
  {
    id: 'ui-ux-design',
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'Interface design that is clean, intuitive, and grounded in how real users think. We design to ship, not to win awards.',
    href: '/services#ui-ux-design',
  },
  {
    id: 'software-maintenance',
    icon: 'Wrench',
    title: 'Software Maintenance',
    description: 'Ongoing support, bug fixes, dependency updates, and incremental improvements. We keep software healthy after launch.',
    href: '/services#software-maintenance',
  },
]
```

---

## Service Card Component

**Location:** `src/components/shared/ServiceCard.tsx`

```tsx
interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = getIcon(service.icon)
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index % 3}   // Reset stagger per row (mod by columns)
      className="group relative bg-white border border-border rounded-2xl
                 p-6 md:p-8 flex flex-col gap-4
                 hover:shadow-md hover:border-brand/20
                 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center
                      group-hover:bg-brand/10 transition-colors duration-300">
        <Icon className="w-6 h-6 text-neutral-600 group-hover:text-brand transition-colors duration-300" />
      </div>

      {/* Divider */}
      <div className="w-8 h-0.5 bg-brand/20 group-hover:bg-brand group-hover:w-12
                      transition-all duration-300" />

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-base font-semibold text-neutral-950">{service.title}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed">{service.description}</p>
      </div>

      {/* Arrow link (if href present) */}
      {service.href && (
        <Link
          href={service.href}
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand
                     opacity-0 group-hover:opacity-100 transition-opacity duration-200
                     mt-auto"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn more <ArrowRight size={12} />
        </Link>
      )}
    </motion.div>
  )
}
```

---

## Grid Layout

```tsx
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-5 md:px-8">
    {/* Section header */}
    <div className="mb-12 md:mb-16 max-w-2xl">
      <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">Services</p>
      <h2 className="text-h2 font-bold text-neutral-950">What we build</h2>
      <p className="mt-4 text-lg text-neutral-500">...</p>
    </div>

    {/* Services grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {services.map((service, i) => (
        <ServiceCard key={service.id} service={service} index={i} />
      ))}
    </div>

    {/* Footer link */}
    <div className="mt-10 md:mt-12 text-center">
      <Button asChild variant="outline" className="rounded-full">
        <Link href="/services">View all services</Link>
      </Button>
    </div>
  </div>
</section>
```

---

## Card Hover Summary

| Property | Default | Hover |
|---|---|---|
| Border | `border-border` | `border-brand/20` |
| Shadow | none | `shadow-md` |
| Icon background | `bg-neutral-100` | `bg-brand/10` |
| Icon color | `text-neutral-600` | `text-brand` |
| Divider width | `w-8` | `w-12` |
| Divider color | `bg-brand/20` | `bg-brand` |
| Arrow link | `opacity-0` | `opacity-100` |

---

## Stagger Animation Logic

Cards reveal with scroll stagger. Since there are 3 per row on desktop, use `index % 3` as the `custom` value so each row staggers independently (not a 0–5 delay that would make the last card very slow):

```typescript
custom={index % 3}  // delay = (index % 3) * 0.1s
```

---

## `/services` Page

The `/services` page expands each service with:
- Same card layout but with `id={service.id}` for anchor links
- Expanded description (2–3 paragraphs per service)
- Example use cases listed under each service
- No invented case studies

---

## Checklist
- [ ] All 6 service cards render with icon, title, description
- [ ] `services.ts` data file exists and is typed with `Service` interface
- [ ] `ServiceCard` uses `getIcon()` helper for dynamic icon rendering
- [ ] Divider grows on hover (`w-8` → `w-12`) via Tailwind group
- [ ] Arrow link fades in on card hover
- [ ] Grid is 1-col mobile, 2-col md, 3-col lg
- [ ] "View all services" button links to `/services`
- [ ] `whileInView` uses `once: true`
- [ ] `index % 3` stagger keeps per-row timing consistent
