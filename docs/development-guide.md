# Development Guide

## Prerequisites

| Tool | Minimum Version | Check |
|---|---|---|
| Node.js | 20.x LTS | `node --version` |
| npm | 10.x | `npm --version` |
| Git | 2.x | `git --version` |

Recommended: VS Code with these extensions:
- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
- **TypeScript** — built-in, ensure v5+
- **ESLint** — real-time linting in editor
- **Prettier** — consistent formatting (optional)

---

## Initial Setup

### 1. Clone/Initialize Repository

```bash
# Option A: Fresh project
npx create-next-app@latest cloudzyne \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

# Option B: Clone existing
git clone <repo-url>
cd cloudzyne
npm install
```

### 2. Install Additional Dependencies

```bash
# Core
npm install motion react-hook-form @hookform/resolvers zod lucide-react

# shadcn/ui setup
npx shadcn@latest init

# shadcn components
npx shadcn@latest add button input textarea select label form navigation-menu sheet badge
```

### 3. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values:
# CONTACT_EMAIL_TO=hello@cloudzyne.com
# RESEND_API_KEY=re_... (from resend.com)
```

### 4. Verify Installation

```bash
npm run dev
# Open http://localhost:3000 — should show default Next.js page
```

---

## Development Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server at `http://localhost:3000` |
| `npm run build` | Build for production (outputs to `.next/`) |
| `npm run start` | Start production server (after build) |
| `npm run lint` | Run ESLint across all `src/**/*.{ts,tsx}` |
| `npx tsc --noEmit` | TypeScript type check (no output files) |

### Recommended Development Workflow

```bash
# Start dev server
npm run dev

# Before committing, run checks:
npx tsc --noEmit && npm run lint && npm run build
```

---

## Project Conventions

### File Naming

| Type | Convention | Example |
|---|---|---|
| Components | PascalCase | `HeroSection.tsx`, `ServiceCard.tsx` |
| Pages (Next.js) | lowercase `page.tsx` | `src/app/contact/page.tsx` |
| Data files | camelCase | `services.ts`, `projects.ts` |
| Utility files | camelCase | `motion-variants.ts`, `validators.ts` |
| Types/interfaces | PascalCase | `Service`, `Project`, `ProcessStep` |

### Import Order

```typescript
// 1. React/Next.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// 2. Third-party libraries
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

// 3. Internal components
import { Button } from '@/components/ui/button'
import { ServiceCard } from '@/components/shared/ServiceCard'

// 4. Data imports
import { services } from '@/data/services'

// 5. Utilities
import { cn } from '@/lib/utils'
import { fadeUp } from '@/lib/motion-variants'

// 6. Types (type-only imports)
import type { Service } from '@/data/services'
```

### Component Structure

```typescript
// 1. Directive (if needed)
'use client'

// 2. Imports (ordered as above)

// 3. Types (if component-local)
interface Props {
  title: string
  index: number
}

// 4. Component function
export function ComponentName({ title, index }: Props) {
  // 4a. Hooks
  // 4b. Derived values
  // 4c. Handlers
  // 4d. Return JSX
  return (...)
}

// 5. Sub-components (if any, below main export)
function SubComponent(...) { ... }
```

### TypeScript Rules

- `strict: true` is enabled — no implicit `any`
- `noUncheckedIndexedAccess: true` — array access returns `T | undefined`
- Always define prop types explicitly (no implicit `{}` or spreading unknown)
- Prefer `interface` over `type` for object shapes
- Use `type` for unions and computed types

---

## Environment Variables

### Available Variables

| Variable | Required | Description |
|---|---|---|
| `CONTACT_EMAIL_TO` | No (for now) | Recipient email for contact form |
| `RESEND_API_KEY` | No (for now) | Resend.com API key for email sending |

### Where to Set Variables

**Development:** `.env.local` (not committed to git)  
**Production:** Vercel Dashboard → Project Settings → Environment Variables

### Adding New Variables

1. Add to `.env.local` (local development)
2. Add to `.env.example` with empty value (document for team)
3. Add to Vercel Dashboard for production
4. Add to `next.config.ts` `env` block if needed on the client side (server vars are automatic)

> **Important:** Variables not prefixed with `NEXT_PUBLIC_` are server-only. Never expose API keys to the client.

---

## Deployment to Vercel

### Initial Deploy

1. Push code to GitHub repository
2. Go to https://vercel.com → "Add New Project"
3. Import the GitHub repository
4. Configure:
   - Framework: **Next.js** (auto-detected)
   - Root Directory: `/` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
5. Add environment variables in the Vercel dashboard
6. Click Deploy

### Subsequent Deploys

Every push to `main` branch triggers an automatic deployment.  
Preview deployments are created for PRs.

### Custom Domain

1. Vercel Dashboard → Project → Settings → Domains
2. Add `cloudzyne.com` and `www.cloudzyne.com`
3. Update DNS records at your domain registrar:
   - `A` record: `76.76.21.21`
   - `CNAME` record for `www`: `cname.vercel-dns.com`

---

## Common Issues & Solutions

### `Module not found: Can't resolve 'motion/react'`

```bash
npm install motion
```

Motion v11+ uses `motion/react` as the import path, not `framer-motion`.

### shadcn components not styled correctly

Verify `globals.css` imports Tailwind and CSS variables are defined:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* shadcn variables go here */
}
```

### TypeScript error: `params` type in dynamic routes

In Next.js 15+, route params are Promises:
```typescript
// Next.js 15 pattern
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // ...
}
```

Check your Next.js version with `npx next --version` and adjust accordingly.

### `noUncheckedIndexedAccess` errors

```typescript
// Error: const item = items[0] → type is T | undefined
// Fix:
const item = items[0]
if (!item) return null
// or:
const item = items.at(0) ?? defaultValue
```

### Tailwind classes not applying

Ensure `tailwind.config.ts` has the correct `content` paths:
```typescript
content: ['./src/**/*.{ts,tsx,js,jsx}'],
```

If using shadcn: it auto-extends this. Restart the dev server after config changes.

### Animation not working on first render

Hero animations use `initial`/`animate` (page-load). If they're not firing, check that:
1. The component has `'use client'` directive
2. You're using `motion.div` (not `div`)
3. `useReducedMotion()` isn't returning `true` in your dev environment

---

## Git Workflow

```bash
# Feature branches
git checkout -b feature/hero-section
# ... make changes
git add -p                           # Stage selectively
git commit -m "feat: add hero section with entrance animations"
git push origin feature/hero-section
# Create PR → merge to main → auto-deploy to Vercel
```

### Commit Message Format

```
feat: add new feature
fix: fix a bug
style: CSS/design changes
refactor: code restructure without behavior change
docs: documentation updates
chore: config changes, dependency updates
```

---

## File Size Targets

Keep individual component files focused and small:

| File type | Recommended max |
|---|---|
| Component | ~150 lines |
| Page | ~80 lines |
| Data file | As needed (no logic) |
| Utility | ~50 lines |

If a component exceeds 150 lines, consider extracting sub-components.
