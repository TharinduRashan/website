# Design System

## Overview

The Cloudzyne design system is implemented through:
1. CSS custom properties in `src/styles/globals.css`
2. Extended Tailwind config in `tailwind.config.ts`
3. shadcn/ui component library (customized to match brand)

---

## Color Palette

### Core Colors

| Name | Hex | CSS Variable | Tailwind Class |
|---|---|---|---|
| Brand Blue | `#2373F4` | `--brand` | `bg-brand`, `text-brand`, `border-brand` |
| Brand Dark | `#1a5fd4` | `--brand-dark` | `bg-brand-dark` |
| Brand Light | `#5596f7` | `--brand-light` | `bg-brand-light` |
| Brand Tint | `#EFF6FF` | `--brand-tint` | `bg-brand-tint` (or `bg-blue-50`) |
| White | `#FFFFFF` | — | `bg-white` |
| Off-white | `#F9FAFB` | `--bg-secondary` | `bg-neutral-50` |
| Near-black | `#0A0A0A` | `--text-primary` | `text-neutral-950` |
| Dark gray | `#1F2937` | — | `text-neutral-800` |
| Mid gray | `#6B7280` | `--text-secondary` | `text-neutral-500` |
| Light gray | `#9CA3AF` | `--text-muted` | `text-neutral-400` |
| Border gray | `#E5E7EB` | `--border` | `border-border`, `border-neutral-200` |

### Color Usage Rules

- **`#2373F4`** — Primary CTAs, hover accents, brand badges, link colors, icon accent
- **`#0A0A0A`** — H1, H2, H3 headings, primary UI text
- **`#6B7280`** — Body copy, card descriptions, supporting text
- **`#9CA3AF`** — Captions, eyebrow labels (when not brand), timestamps (min 18px or bold)
- **`#E5E7EB`** — Card borders, dividers, input borders
- **`#F9FAFB`** — Alternate section backgrounds (Trust, Process sections)
- **`#EFF6FF`** — Very light brand tint for subtle brand-connected backgrounds

### globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --brand:       #2373F4;
    --brand-dark:  #1a5fd4;
    --brand-light: #5596f7;
    --brand-tint:  #EFF6FF;
    --bg-primary:   #FFFFFF;
    --bg-secondary: #F9FAFB;
    --text-primary:   #0A0A0A;
    --text-secondary: #6B7280;
    --text-muted:     #9CA3AF;
    --border:  #E5E7EB;
    --radius:  0.625rem;
    --radius-lg: 1rem;
  }

  * {
    border-color: var(--border);
  }

  body {
    color: var(--text-primary);
    background: var(--bg-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Focus indicator */
  :focus-visible {
    outline: 2px solid var(--brand);
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

---

## Typography Scale

### Font: Inter (via next/font/google)

```typescript
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})
```

### Type Scale (tailwind.config.ts extensions)

```typescript
fontSize: {
  'display': ['clamp(3rem, 6vw, 5rem)', {
    lineHeight: '1.05',
    letterSpacing: '-0.03em',
    fontWeight: '800',
  }],
  'h1': ['clamp(2.25rem, 4vw, 3.5rem)', {
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    fontWeight: '700',
  }],
  'h2': ['clamp(1.75rem, 3vw, 2.5rem)', {
    lineHeight: '1.15',
    letterSpacing: '-0.015em',
    fontWeight: '700',
  }],
  'h3': ['clamp(1.25rem, 2vw, 1.5rem)', {
    lineHeight: '1.3',
    fontWeight: '600',
  }],
}
```

### Type Usage Guide

| Class | Use for |
|---|---|
| `text-display` | Hero H1 only |
| `text-h1` | Page-level headings (one per page) |
| `text-h2` | Section headings |
| `text-h3` | Card headings, sub-sections |
| `text-lg` (18px) | Lead paragraphs, section subtexts |
| `text-base` (16px) | Default body copy |
| `text-sm` (14px) | Secondary descriptions, metadata |
| `text-xs` (12px) | Eyebrow labels, captions, badges, tags |

---

## Spacing System

Uses Tailwind's 4px base unit throughout:

| Purpose | Class | Value |
|---|---|---|
| Icon internal gap | `gap-1` | 4px |
| Inline element spacing | `gap-2` | 8px |
| Component internal | `gap-4` | 16px |
| Card padding | `p-6` or `p-8` | 24–32px |
| Grid gap (mobile) | `gap-5` | 20px |
| Grid gap (desktop) | `gap-6` | 24px |
| Section padding (mobile) | `py-16` | 64px |
| Section padding (desktop) | `md:py-24` | 96px |
| Hero padding | `py-24 md:py-32` | 96–128px |

---

## Component Patterns

### Button Variants

```tsx
// Primary (from shadcn Button, customized)
<Button className="bg-brand hover:bg-brand-dark text-white rounded-full
                   px-6 py-3 font-semibold text-sm transition-colors duration-150">
  Start a Project
</Button>

// Outlined
<Button variant="outline" className="rounded-full border-brand text-brand
                                     hover:bg-brand hover:text-white">
  Learn More
</Button>

// Ghost (dark text, hover bg)
<Button variant="ghost" className="rounded-full text-neutral-950 hover:bg-neutral-100">
  Secondary Action
</Button>

// White (on dark backgrounds)
<Button className="bg-white text-brand hover:bg-neutral-100 rounded-full
                   shadow-lg px-8 py-4 font-semibold">
  CTA on Dark BG
</Button>
```

### Card Base Pattern

```tsx
// Service Card base
<div className="group bg-white border border-border rounded-2xl p-6 md:p-8
                hover:shadow-md hover:border-brand/20 transition-all duration-300">
  {/* Icon */}
  <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center
                  group-hover:bg-brand/10 transition-colors duration-300">
    <Icon className="w-6 h-6 text-neutral-600 group-hover:text-brand transition-colors duration-300" />
  </div>
  <h3 className="text-base font-semibold text-neutral-950 mt-4">{title}</h3>
  <p className="text-sm text-neutral-500 mt-2 leading-relaxed">{description}</p>
</div>

// Value Tile (inverts on hover)
<div className="group bg-white border border-border rounded-2xl p-6
                hover:bg-brand hover:border-brand transition-all duration-300">
  <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center
                  group-hover:bg-white/20 transition-colors duration-300">
    <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
  </div>
  <h3 className="text-base font-semibold text-neutral-950 mt-4
                 group-hover:text-white transition-colors duration-300">{title}</h3>
  <p className="text-sm text-neutral-500 mt-2 leading-relaxed
                group-hover:text-white/80 transition-colors duration-300">{description}</p>
</div>
```

### Section Wrapper Pattern

```tsx
// Standard white section
<section className="py-16 md:py-24">
  <div className="container mx-auto px-5 md:px-8">
    {children}
  </div>
</section>

// Alternate background section
<section className="py-16 md:py-24 bg-neutral-50">
  {/* same inner container */}
</section>

// Dark/brand section (CTA)
<section className="py-20 md:py-28 bg-brand overflow-hidden">
  {/* white text content */}
</section>
```

### Eyebrow Label Pattern

```tsx
<p className="text-xs font-semibold tracking-[0.12em] uppercase text-brand mb-3">
  Services
</p>
```

Always placed above `<h2>` section headings. Uses `tracking-[0.12em]` for wide letter-spacing.

---

## Tailwind Config Theme Extensions Summary

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        DEFAULT: '#2373F4',
        dark: '#1a5fd4',
        light: '#5596f7',
        tint: '#EFF6FF',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      // display, h1, h2, h3 — with lineHeight, letterSpacing, fontWeight
    },
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem', xl: '3rem' },
      screens: { xl: '1280px' },
    },
    borderRadius: {
      '2xl': '1rem',
      '3xl': '1.5rem',
    },
  },
}
```
