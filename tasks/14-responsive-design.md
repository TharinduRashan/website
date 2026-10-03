# 14 — Responsive Design

## Philosophy

**Mobile-first.** Every component is designed for 375px first, then enhanced for wider screens with Tailwind's responsive prefixes (`md:`, `lg:`, `xl:`).

Never use fixed pixel widths on containers. Use `max-w-*` + `w-full` patterns.  
Avoid horizontal overflow: test every section at 320px as the floor.

---

## Breakpoint Reference

| Breakpoint | Min-width | Tailwind Prefix | Design Intent |
|---|---|---|---|
| Default | 0px | (none) | 320–374px small phones |
| sm | 375px | `sm:` | Standard phones (iPhone SE, Pixel) |
| md | 768px | `md:` | Tablets (iPad portrait) |
| lg | 1024px | `lg:` | Small laptops, iPad landscape |
| xl | 1280px | `xl:` | Standard desktop |
| 2xl | 1440px | `2xl:` | Large monitors |

---

## Section-by-Section Responsive Behavior

### Navbar

| Breakpoint | Behavior |
|---|---|
| < md (768px) | Logo left, hamburger button right. Nav links hidden. |
| ≥ md | Logo left, nav links center, CTA right. Hamburger hidden. |

Tailwind pattern:
```
hidden md:flex  →  nav links
flex md:hidden  →  hamburger button
```

### Hero Section

| Breakpoint | Behavior |
|---|---|
| < lg (1024px) | Single column. Visual element hidden. Text centered or left. |
| ≥ lg | Two-column grid (7/12 text, 5/12 visual). |

Tailwind pattern:
```
grid lg:grid-cols-12
hidden lg:flex  →  visual element
```

Typography:
```
text-[clamp(2.5rem,8vw,5rem)] → H1 scales fluidly from ~40px to 80px
```

### Trust Section (4 Tiles)

| Breakpoint | Grid |
|---|---|
| < md | 1 column |
| md | 2 columns |
| ≥ xl | 4 columns |

```
grid-cols-1 md:grid-cols-2 xl:grid-cols-4
```

### Services Section (6 Cards)

| Breakpoint | Grid |
|---|---|
| < md | 1 column |
| md | 2 columns |
| ≥ lg | 3 columns |

```
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### Solutions Section (6 Cards)

| Breakpoint | Grid |
|---|---|
| < md | 1 column |
| ≥ md | 2 columns |

```
grid-cols-1 md:grid-cols-2
```

### Process Section (6 Steps)

| Breakpoint | Layout |
|---|---|
| < md | 2-column grid |
| md | 3-column grid |
| ≥ lg | 6-column horizontal row with connector line |

Mobile: horizontal scroll with `snap-x` OR 2-column stacked grid.

```
grid-cols-2 md:grid-cols-3 lg:grid-cols-6
```

### Projects Section (3–4 Cards)

| Breakpoint | Grid |
|---|---|
| < md | 1 column |
| md | 2 columns |
| ≥ lg | 3 columns |

```
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### CTA Section

- Always full-width, centered content
- Buttons: `flex-col sm:flex-row` to stack vertically on mobile

### Footer

| Breakpoint | Grid |
|---|---|
| < sm (375px) | 1 column (logo + all link groups stacked) |
| sm | 2 columns |
| ≥ lg | 5 columns (2 for logo/tagline, 1 each for 3 link groups) |

```
grid-cols-2 lg:grid-cols-5
col-span-2 lg:col-span-2  →  logo column
```

### Contact Page

| Breakpoint | Layout |
|---|---|
| < lg | Single column (info panel above form) |
| ≥ lg | Two-column (5/12 info, 7/12 form) |

Form fields:
```
grid-cols-1 sm:grid-cols-2  →  name/email row, company/phone row
```

---

## Typography Scaling

Use `clamp()` via Tailwind's `text-display`, `text-h1`, etc. custom sizes:

| Class | Mobile Size | Desktop Size | Method |
|---|---|---|---|
| `text-display` | ~48px | ~80px | `clamp(3rem, 6vw, 5rem)` |
| `text-h1` | ~36px | ~56px | `clamp(2.25rem, 4vw, 3.5rem)` |
| `text-h2` | ~28px | ~40px | `clamp(1.75rem, 3vw, 2.5rem)` |
| `text-h3` | ~20px | ~24px | `clamp(1.25rem, 2vw, 1.5rem)` |
| `text-lg` | 18px | 18px | Fixed |
| `text-base` | 16px | 16px | Fixed |
| `text-sm` | 14px | 14px | Fixed |

Body copy max-width: `max-w-xl` (576px) or `max-w-2xl` (672px) depending on context.

---

## Spacing Scaling

Section vertical padding:
```
py-16       →  64px on mobile (default)
md:py-24    →  96px on tablet
```

Container horizontal padding:
```
px-5        →  20px on mobile
md:px-8     →  32px on tablet
xl:px-12    →  48px on desktop
```

Gap between cards:
```
gap-5       →  20px mobile
md:gap-6    →  24px tablet+
```

---

## Component Responsive Patterns

### Section Heading Block
```tsx
<div className="mb-12 md:mb-16">
  <p className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">
    {eyebrow}
  </p>
  <h2 className="text-h2 font-bold text-neutral-950 max-w-lg">{heading}</h2>
  <p className="mt-4 text-base md:text-lg text-neutral-500 max-w-2xl">{subtext}</p>
</div>
```

### Two-Column with Text Left / Visual Right
```tsx
<div className="grid md:grid-cols-2 gap-12 items-center">
  <div>{/* text */}</div>
  <div className="hidden md:block">{/* visual */}</div>
</div>
```

### CTA Button Pair
```tsx
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
  <Button>Primary CTA</Button>
  <Link className="...">Secondary →</Link>
</div>
```

---

## Common Pitfalls to Avoid

1. **Overflow on mobile:** Test all grids at 320px. Use `min-w-0` on grid children that contain long text.
2. **Horizontal scroll from margins:** Use `overflow-hidden` on section wrappers if background decorations bleed out.
3. **Font size too small on mobile:** Don't use `text-xs` (12px) for body content — minimum `text-sm` (14px).
4. **Fixed heights that clip content:** Use `min-h-*` not `h-*` for content containers.
5. **Touch target size:** Buttons and links must be at least `44×44px` touch target. Use `min-h-[44px]` or `py-3` minimum.

---

## Checklist
- [ ] All sections tested at 375px width (no overflow, no clipping)
- [ ] All sections tested at 768px (tablet)
- [ ] All sections tested at 1280px (desktop)
- [ ] Typography uses `clamp()` — no text jumping at breakpoints
- [ ] Navbar hamburger correctly hidden/shown at `md:` breakpoint
- [ ] Hero visual hidden correctly on mobile (`hidden lg:flex`)
- [ ] Process section: horizontal scroll OR grid works on mobile
- [ ] Footer collapses to 2-col on tablet, 1-col on small mobile
- [ ] Contact form: name/email in 2-col on sm+, full-width on mobile
- [ ] All buttons have 44px minimum touch target height
