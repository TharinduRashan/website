# Content Structure

## Overview

All site content is stored as TypeScript files in `src/data/`. There is no CMS or external API. This approach gives:
- Full TypeScript type safety on content
- Build-time error detection for missing or malformed content
- Zero-latency content access (no network round-trips)
- Easy to update without learning a CMS

---

## TypeScript Interfaces

### `src/data/services.ts`

```typescript
export interface Service {
  id: string            // Unique slug ID (kebab-case)
  icon: string          // Lucide React icon name (PascalCase string)
  title: string
  description: string   // 1–2 sentences for homepage cards
  longDescription?: string  // Expanded text for /services page
  href?: string         // Deep link anchor: /services#{id}
  useCases?: string[]   // Bullet list for /services page
}

export const services: Service[] = [...]
```

### `src/data/solutions.ts`

```typescript
export interface Solution {
  id: string
  icon: string
  category: string      // Display name (Title Case)
  problem: string       // The business pain (1–2 sentences)
  solution: string      // How Cloudzyne solves it (1–2 sentences)
  exampleOutputs?: string[]  // Short concrete deliverables (3 items max)
}

export const solutions: Solution[] = [...]
```

### `src/data/projects.ts`

```typescript
export interface Project {
  id: string
  slug: string          // URL-safe: /projects/{slug}
  title: string
  category: string      // e.g., "Web Development", "Education Platform"
  description: string   // 1–2 sentences for card
  techStack: string[]   // Technology names for pills
  label?: 'Academic Project' | 'Internal Project' | 'In Progress'
  status: 'live' | 'in-progress' | 'concept'
  coverColor: string    // Tailwind gradient classes for card header
  featured?: boolean    // Whether to show on homepage
  detailContent?: ProjectDetail
}

export interface ProjectDetail {
  overview: string      // 2–3 sentences for detail page
  context?: string      // REQUIRED for Academic Project label — explains educational context
  features: string[]    // Feature list (bullet points)
  challenges?: string   // Optional: what was technically challenging
  outcome?: string      // ONLY include if real and verifiable — no invented metrics
}

export const projects: Project[] = [...]
```

### `src/data/process.ts`

```typescript
export interface ProcessStep {
  number: string        // '01' through '06' (zero-padded)
  title: string         // Short step name: 'Discover', 'Plan', etc.
  icon: string          // Lucide icon name
  description: string   // 2–3 sentences explaining the step
}

export const processSteps: ProcessStep[] = [...]
```

---

## Content Update Guide

### Adding a New Service

1. Open `src/data/services.ts`
2. Add a new object to the `services` array following the `Service` interface
3. Choose an appropriate Lucide icon name from https://lucide.dev
4. Add `id` as kebab-case (used for URL anchor on /services page)
5. Run `npx tsc --noEmit` to verify no type errors
6. Run `npm run build` to verify build passes

```typescript
{
  id: 'data-engineering',
  icon: 'Database',
  title: 'Data Engineering',
  description: 'Pipeline design, ETL processes, and data infrastructure for businesses that need to make sense of their data.',
  href: '/services#data-engineering',
}
```

### Adding a New Project

1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array
3. **If this is an academic or personal project, you MUST add the `label` field**
4. **If `label: 'Academic Project'`, you MUST add `detailContent.context` explaining this**
5. Add `slug` that matches the URL: `/projects/{slug}`
6. Add the slug to `generateStaticParams` in `src/app/projects/[slug]/page.tsx`

```typescript
{
  id: 'inventory-system',
  slug: 'inventory-system',
  title: 'Inventory Management System',
  category: 'Internal Business Systems',
  description: 'A custom inventory tracking system for a retail business.',
  techStack: ['Next.js', 'Prisma', 'PostgreSQL'],
  // No label — this is a real commercial project
  status: 'live',
  coverColor: 'from-violet-50 to-violet-100',
  featured: true,
  detailContent: {
    overview: '...',
    features: ['...'],
    // Only include outcome if verifiable
  },
}
```

### Updating Process Steps

Process steps are rarely changed. Update description text in `src/data/process.ts` if wording needs improvement. Do not change the `number` or `title` — these are semantically fixed.

---

## Placeholder Content Strategy

### "Your Project" Card

The projects page always shows a placeholder card as the last item:
```typescript
{
  id: 'future-project',
  slug: 'future-project',
  title: 'Your Project',
  category: 'Available',
  description: 'We\'re taking on new projects. If you have an idea, let\'s build it together.',
  techStack: [],
  status: 'concept',
  coverColor: 'from-neutral-100 to-neutral-200',
  featured: false,
}
```

This card:
- Links to `/contact` instead of a detail page
- Shows no tech stack pills
- Has no `label` badge
- Should always be the last item in the array

### No Placeholder Testimonials

There are zero testimonials or client quotes on the site. This is intentional.  
If in the future real client testimonials are obtained, add them to a new `src/data/testimonials.ts` file with:
```typescript
export interface Testimonial {
  quote: string
  name: string          // Real first name + last initial or full name with permission
  role: string          // Actual job title
  company: string       // Actual company name
  // NO invented details
}
```

---

## Icon Helper Function

Used across multiple components to dynamically resolve Lucide icons from string names:

```typescript
// src/lib/utils.ts (or define in each component)
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export function getIcon(name: string): LucideIcon {
  const icon = (Icons as Record<string, unknown>)[name]
  if (typeof icon === 'function') return icon as LucideIcon
  return Icons.Box  // Fallback icon
}
```

Valid icon names can be found at: https://lucide.dev/icons/

---

## Content Length Guidelines

| Field | Recommended Length | Hard Max |
|---|---|---|
| Service description | 1–2 sentences (80–120 chars) | 150 chars |
| Solution problem | 1–2 sentences (80–120 chars) | 150 chars |
| Solution solution | 1–2 sentences (80–120 chars) | 150 chars |
| Project description | 1–2 sentences (80–140 chars) | 180 chars |
| Process step description | 2–3 sentences (100–200 chars) | 250 chars |
| Project overview | 2–4 sentences | 400 chars |
| Example outputs | 2–4 words each | 5 words |
| Tech stack items | Tool name only | — |

---

## Data Validation at Build Time

Since all data is TypeScript, type errors are caught at build time. However, some constraints aren't expressible in types:

- Service `id` must be unique — manually verify no duplicates
- Project `slug` must match the folder name in `generateStaticParams`
- Academic projects MUST have `label` and `detailContent.context`
- Concept projects must have empty `techStack: []`

These are verified in the Final QA checklist (task 20).
