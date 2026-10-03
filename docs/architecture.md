# Architecture

## Framework: Next.js App Router

The site uses the **App Router** (introduced in Next.js 13, stable in 14). This means:
- All routes are defined by the folder structure inside `src/app/`
- Each folder can have a `page.tsx` (rendered route), `layout.tsx` (shared layout), `loading.tsx`, `error.tsx`
- React Server Components (RSC) are the default — no data ever sent to the client unnecessarily
- `'use client'` is only added when a component needs browser APIs, React state, or effects

---

## Server vs Client Component Decision Tree

```
Does the component need useState or useEffect?
  Yes → Client Component ('use client')
  No  ↓
Does it use browser-only APIs (window, document, navigator)?
  Yes → Client Component
  No  ↓
Does it use React event handlers (onClick, onChange)?
  Yes → Client Component
  No  ↓
Does it use motion/react for scroll animations?
  Yes → Client Component
  No  → Server Component (default)
```

### Final Classification

| Component | Type | Reason |
|---|---|---|
| `layout.tsx` | Server | Static wrapper |
| `page.tsx` (all) | Server | Data is static in `src/data/` |
| `Navbar.tsx` | **Client** | `useState` (scroll, menu), `useEffect` |
| `Footer.tsx` | Server | Static links |
| `SectionWrapper.tsx` | Server | Utility wrapper |
| `HeroSection.tsx` | **Client** | Motion animations |
| `TrustSection.tsx` | **Client** | `whileInView` animations |
| `ServicesSection.tsx` | **Client** | `whileInView` animations |
| `SolutionsSection.tsx` | **Client** | `whileInView` animations |
| `ProcessSection.tsx` | **Client** | `whileInView` animations |
| `ProjectsSection.tsx` | **Client** | `whileInView` animations |
| `CtaSection.tsx` | Server (or Client) | Optional motion |
| `ContactForm.tsx` | **Client** | `useForm`, `useState` |
| `ServiceCard.tsx` | **Client** | Used within animated grid |
| `ProjectCard.tsx` | **Client** | Used within animated grid |

---

## Routing Structure

```
/                         → src/app/page.tsx
/about                    → src/app/about/page.tsx
/services                 → src/app/services/page.tsx
/solutions                → src/app/solutions/page.tsx
/projects                 → src/app/projects/page.tsx
/projects/[slug]          → src/app/projects/[slug]/page.tsx
/contact                  → src/app/contact/page.tsx
/privacy                  → src/app/privacy/page.tsx
/terms                    → src/app/terms/page.tsx
/api/contact              → src/app/api/contact/route.ts
/sitemap.xml              → src/app/sitemap.ts
/robots.txt               → src/app/robots.ts
```

---

## Component Hierarchy

```
layout.tsx (Server)
  ├── <SkipLink />                  (inline — server)
  ├── <Navbar />                    (Client)
  ├── <main id="main-content">
  │     {children}                  (page.tsx content)
  └── <Footer />                    (Server)

page.tsx (/ — homepage) (Server)
  ├── <HeroSection />               (Client)
  ├── <TrustSection />              (Client)
  ├── <ServicesSection />           (Client)
  ├── <SolutionsSection />          (Client)
  ├── <ProcessSection />            (Client)
  ├── <ProjectsSection />           (Client)
  └── <CtaSection />                (Server or Client)

src/app/projects/[slug]/page.tsx (Server)
  ├── Back link
  ├── Project header (title, category, label, tech stack)
  ├── Context banner (conditional — Academic Project)
  ├── Detail content
  └── <CtaSection />
```

---

## Data Layer

All content is stored as TypeScript files in `src/data/`. There is no database, CMS, or external API for content — all data is type-checked at build time.

```
src/data/
  ├── services.ts      → Service[]
  ├── solutions.ts     → Solution[]
  ├── projects.ts      → Project[], ProjectDetail
  └── process.ts       → ProcessStep[]
```

### Why No CMS?
- For a marketing site of this scale, TypeScript data files are faster, type-safe, and zero-dependency.
- No API calls at runtime = faster page loads and simpler architecture.
- If content needs to be editable by non-developers in the future, migrate to Contentlayer or Sanity.

---

## API Routes

Only one real API route exists:

```
POST /api/contact
  Input:  ContactFormData (validated with Zod)
  Output: { success: true } | { error: string }
  Side effect: Send email via Resend/SendGrid (stubbed)
```

No GET routes for data — all data is server-rendered from `src/data/`.

---

## Shared Utilities

```
src/lib/
  ├── utils.ts              → cn() from shadcn — merges Tailwind class names
  ├── validators.ts         → Zod schemas (contactSchema, ContactFormData type)
  └── motion-variants.ts    → Shared motion Variants (fadeUp, fadeIn, staggerContainer, etc.)
```

---

## `cn()` Utility

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Usage: Merge conditional Tailwind classes without conflicts:
```typescript
cn(
  'base-class another-class',
  condition && 'conditional-class',
  variant === 'primary' ? 'bg-brand' : 'bg-neutral-100',
)
```

---

## Rendering Strategy

| Route | Strategy | Reason |
|---|---|---|
| `/` | SSG (Static) | All content in data files |
| `/about` | SSG | Static content |
| `/services` | SSG | Static content |
| `/solutions` | SSG | Static content |
| `/projects` | SSG | Static content |
| `/projects/[slug]` | SSG via `generateStaticParams` | Pre-rendered at build |
| `/contact` | SSG (form is client-side) | Page is static, form uses client fetch |
| `/api/contact` | Edge/Node runtime | API route, not pre-rendered |

All pages are statically generated at build time. Vercel serves them from the edge CDN. No server-side computation per request.

---

## Mermaid: Architecture Overview

```
User Browser
     │
     ▼
Vercel Edge Network (CDN)
     │
     ├── Static HTML/CSS/JS (pre-rendered at build)
     │         └── Next.js App (RSC + Client Hydration)
     │
     └── API Routes (on demand)
               └── /api/contact → Email Service (Resend)
```
