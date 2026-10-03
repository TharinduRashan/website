# 02 — Design System

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `brand` / `#2373F4` | Primary blue | CTAs, accent, highlights, hover states |
| `brand-dark` / `#1a5fd4` | Darker blue | Button hover states |
| `brand-light` / `#5596f7` | Lighter blue | Subtle tints, decorative |
| `#FFFFFF` | Pure white | Page background, card backgrounds |
| `#0A0A0A` | Near-black | Primary text, headings |
| `#1F2937` | Dark gray | Secondary headings |
| `#6B7280` | Mid gray | Body text, descriptions |
| `#9CA3AF` | Light gray | Captions, placeholders |
| `#E5E7EB` | Border gray | Dividers, card borders |
| `#F9FAFB` | Off-white | Section backgrounds, card fills |
| `#EFF6FF` | Blue tint | Brand-tinted section backgrounds |

### CSS Custom Properties in `globals.css`
```css
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
  --radius:  0.625rem; /* 10px */
  --radius-lg: 1rem;
  --radius-pill: 9999px;
}
```

---

## Typography Scale

All type uses `Inter` via `next/font/google`. Fallback: `system-ui, -apple-system, sans-serif`.

| Name | Size (min → max) | Weight | Line-height | Letter-spacing | Usage |
|---|---|---|---|---|---|
| Display | clamp(3rem, 6vw, 5rem) | 800 | 1.05 | -0.03em | Hero H1 |
| H1 | clamp(2.25rem, 4vw, 3.5rem) | 700 | 1.1 | -0.02em | Page titles |
| H2 | clamp(1.75rem, 3vw, 2.5rem) | 700 | 1.15 | -0.015em | Section headings |
| H3 | clamp(1.25rem, 2vw, 1.5rem) | 600 | 1.3 | 0 | Card headings, subheadings |
| Body LG | 1.125rem (18px) | 400 | 1.7 | 0 | Lead paragraphs |
| Body | 1rem (16px) | 400 | 1.65 | 0 | Default body copy |
| Body SM | 0.875rem (14px) | 400 | 1.6 | 0 | Secondary descriptions |
| Caption | 0.75rem (12px) | 500 | 1.5 | 0.05em | Labels, eyebrows, badges |
| Eyebrow | 0.75rem (12px) | 600 | 1 | 0.12em | ALL CAPS section labels |

### Font Loading in `layout.tsx`
```typescript
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
```

---

## Spacing Scale

Uses Tailwind's default spacing (4px base unit) with these semantic values:

| Name | Value | Tailwind Class | Usage |
|---|---|---|---|
| xs | 4px | `gap-1` | Icon gaps |
| sm | 8px | `gap-2` | Inline element gaps |
| md | 16px | `gap-4` | Component internal spacing |
| lg | 24px | `gap-6` | Card padding |
| xl | 32px | `gap-8` | Component-to-component |
| 2xl | 48px | `gap-12` | Grid gaps |
| 3xl | 64px | `py-16` | Section padding (mobile) |
| 4xl | 96px | `py-24` | Section padding (desktop) |
| 5xl | 128px | `py-32` | Hero padding |

---

## Container & Layout

```
Max-width:     1280px  (xl screens)
Default padding: 20px mobile, 32px tablet, 48px desktop
Grid columns:  12-column grid, Tailwind gap-6 md:gap-8
```

Tailwind class pattern: `container mx-auto px-5 md:px-8 xl:px-12`

---

## Border Radius

| Name | Value | Tailwind | Usage |
|---|---|---|---|
| sm | 6px | `rounded-md` | Inputs, small elements |
| DEFAULT | 10px | `rounded-lg` | Cards |
| lg | 16px | `rounded-2xl` | Featured cards, image containers |
| xl | 24px | `rounded-3xl` | Hero visual, large containers |
| pill | 9999px | `rounded-full` | Navbar, badges, icon containers |

---

## Shadows

| Name | CSS | Tailwind | Usage |
|---|---|---|---|
| sm | `0 1px 3px rgba(0,0,0,0.06)` | `shadow-sm` | Default card border alternative |
| md | `0 4px 16px rgba(0,0,0,0.08)` | `shadow-md` | Elevated cards |
| lg | `0 8px 32px rgba(0,0,0,0.10)` | `shadow-lg` | Navbar on scroll |
| brand | `0 4px 24px rgba(35,115,244,0.25)` | custom | Brand CTA button hover |

---

## Animation Durations & Easings

| Name | Duration | Easing | Usage |
|---|---|---|---|
| Fast | 150ms | `ease-out` | Hover states, micro-interactions |
| Base | 300ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Transitions, navbar |
| Slow | 600ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Scroll reveals, fade-ins |
| Spring | — | `type: 'spring', stiffness: 300, damping: 30` | Menu open/close |

Motion stagger: `delayChildren: 0.1`, `staggerChildren: 0.08`

---

## Breakpoints

| Name | Min-width | Tailwind Prefix | Notes |
|---|---|---|---|
| xs | 320px | (no prefix) | Small phones |
| sm | 375px | `sm:` | iPhone SE, standard phone |
| md | 768px | `md:` | Tablets |
| lg | 1024px | `lg:` | Small laptops |
| xl | 1280px | `xl:` | Standard desktops |
| 2xl | 1440px | `2xl:` | Large monitors |
| — | 1920px | — | Full HD (constrained by container) |

---

## Button Variants

### Primary (filled brand)
```
bg-brand text-white px-6 py-3 rounded-full font-semibold text-sm
hover:bg-brand-dark transition-colors duration-150
shadow-none hover:shadow-[0_4px_24px_rgba(35,115,244,0.35)]
```

### Secondary (outlined)
```
border border-brand text-brand px-6 py-3 rounded-full font-semibold text-sm
hover:bg-brand hover:text-white transition-all duration-150
```

### Ghost
```
text-neutral-950 px-6 py-3 rounded-full font-semibold text-sm
hover:bg-neutral-100 transition-colors duration-150
```

### Icon Button
```
w-10 h-10 rounded-full flex items-center justify-center
hover:bg-neutral-100 transition-colors duration-150
```

---

## Card Styles

### Service Card
```
bg-white border border-border rounded-2xl p-6 md:p-8
hover:shadow-md hover:border-brand/20 transition-all duration-300
group
```

### Value Tile (Trust Section)
```
bg-neutral-50 rounded-2xl p-6 md:p-8
hover:bg-brand hover:text-white transition-all duration-300
group cursor-default
```
Icon, heading, and description all toggle white on hover via `group-hover:text-white`.

### Project Card
```
bg-white border border-border rounded-2xl overflow-hidden
hover:shadow-lg transition-all duration-300 group
```
Top area: colored/gradient header `h-48`. Bottom: text content with `p-6`.

---

## Section Wrapper

Standard section: `<section className="py-16 md:py-24">` with inner `<div className="container mx-auto px-5 md:px-8">`.

Alternate background sections (e.g., Trust, Process): `bg-neutral-50`
Brand-tinted sections (e.g., CTA): `bg-brand-tint` or `bg-brand text-white`
