# Responsive Strategy

## Core Principle: Mobile-First

All styles are written for mobile first. Responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) add styles for progressively wider screens.

```css
/* Mobile-first pattern */
.element {
  /* Base: mobile styles */
  display: block;
  padding: 1.25rem;
}

/* Tablet and above */
@media (min-width: 768px) {
  .element {
    display: grid;
    padding: 2rem;
  }
}
```

In Tailwind:
```tsx
<div className="block p-5 md:grid md:p-8">
```

---

## Breakpoint Reference Table

| Breakpoint | Min Width | Prefix | Target Device |
|---|---|---|---|
| Default | 0px | (none) | Small Android phones, 320px floor |
| sm | 375px | `sm:` | iPhone SE, standard Android |
| md | 768px | `md:` | iPad portrait, large phones |
| lg | 1024px | `lg:` | iPad landscape, small laptops |
| xl | 1280px | `xl:` | Standard desktops, 13" laptops |
| 2xl | 1440px | `2xl:` | Large monitors (content stays capped) |

**Content stays max-width 1280px** via Tailwind `container` — the 2xl prefix is rarely needed.

---

## Section-by-Section Responsive Behavior

### 1. Navbar

| Width | Layout |
|---|---|
| 0–767px | Logo left + Hamburger right. Nav links hidden. Menu panel slides in below. |
| 768px+ | Logo left + Nav links center + CTA button right. Hamburger hidden. |

```
hidden md:flex  → Desktop nav links
flex md:hidden  → Hamburger button
```

Navbar height: `h-16` (64px). Content gets `pt-16` or `pt-20` to avoid overlap.

### 2. Hero

| Width | Layout |
|---|---|
| 0–1023px | Single column. Visual element hidden (`hidden lg:flex`). Text left-aligned. |
| 1024px+ | 12-column grid: text 7/12, visual 5/12. Both visible. |

H1 typography scales via `clamp()` — no breakpoint jumps.  
CTA buttons: `flex-col sm:flex-row` to stack on mobile, side-by-side on sm+.

### 3. Trust Section (4 tiles)

| Width | Grid |
|---|---|
| 0–767px | 1 column |
| 768px–1279px | 2 columns |
| 1280px+ | 4 columns |

```
grid-cols-1 md:grid-cols-2 xl:grid-cols-4
```

### 4. Services (6 cards)

| Width | Grid |
|---|---|
| 0–767px | 1 column |
| 768px–1023px | 2 columns |
| 1024px+ | 3 columns |

```
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### 5. Solutions (6 cards)

| Width | Grid |
|---|---|
| 0–767px | 1 column |
| 768px+ | 2 columns |

```
grid-cols-1 md:grid-cols-2
```

### 6. Process (6 steps)

| Width | Layout |
|---|---|
| 0–767px | 2-column grid OR horizontal scroll |
| 768px–1023px | 3-column grid |
| 1024px+ | 6-column row with connector line |

```
grid-cols-2 md:grid-cols-3 lg:grid-cols-6
```

Connector line (horizontal dashes): `hidden lg:block absolute top-8 h-px bg-border`

### 7. Projects (3–4 cards)

| Width | Grid |
|---|---|
| 0–767px | 1 column |
| 768px–1023px | 2 columns |
| 1024px+ | 3 columns |

```
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### 8. CTA Section

Always full-width, centered. CTA buttons:
```
flex-col sm:flex-row items-center justify-center gap-4
```

### 9. Footer

| Width | Grid |
|---|---|
| 0–374px | 1 column (everything stacked) |
| 375px–767px | 2 columns |
| 1024px+ | 5 columns (2 for logo, 1 each for 3 link groups) |

```
grid-cols-2 lg:grid-cols-5
col-span-2 lg:col-span-2  →  logo column
```

Bottom bar:
```
flex-col sm:flex-row items-center justify-between
```

### 10. Contact Page

| Width | Layout |
|---|---|
| 0–1023px | Single column (info above form) |
| 1024px+ | Two-column: info (5/12) + form (7/12) |

Form fields:
```
grid-cols-1 sm:grid-cols-2  →  Name/Email row, Company/Phone row
```
Message and Project Type: always full-width (`col-span-2`)

---

## Typography Scaling Table

All heading sizes use `clamp()` for fluid scaling between breakpoints:

| Class | Small phone (375px) | Tablet (768px) | Desktop (1280px) |
|---|---|---|---|
| `text-display` | ~48px | ~60px | ~80px |
| `text-h1` | ~36px | ~44px | ~56px |
| `text-h2` | ~28px | ~34px | ~40px |
| `text-h3` | ~20px | ~22px | ~24px |
| `text-lg` | 18px | 18px | 18px |
| `text-base` | 16px | 16px | 16px |
| `text-sm` | 14px | 14px | 14px |

`clamp(min, preferred, max)` — the preferred value is a `vw`-based percentage that scales linearly with viewport width.

---

## Component Responsive Patterns

### Two-Column Text + Visual

```tsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div>
    {/* Text content — always visible */}
    <h1 className="text-display">Heading</h1>
  </div>
  <div className="hidden lg:flex justify-center">
    {/* Visual — hidden below lg */}
  </div>
</div>
```

### Section Heading (Left-aligned, max-width)

```tsx
<div className="mb-12 md:mb-16 max-w-2xl">
  <p className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">Eyebrow</p>
  <h2 className="text-h2 font-bold text-neutral-950">Section Heading</h2>
  <p className="mt-4 text-base md:text-lg text-neutral-500">Supporting text goes here.</p>
</div>
```

`max-w-2xl` prevents the heading block from becoming too wide on large screens.

### CTA Button Pair

```tsx
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-8">
  <Button className="rounded-full bg-brand text-white w-full sm:w-auto">
    Primary CTA
  </Button>
  <Link className="flex items-center gap-1.5 text-sm font-semibold text-neutral-950">
    Secondary <ArrowRight size={14} />
  </Link>
</div>
```

`w-full sm:w-auto` — full-width button on mobile, auto-width on sm+.

### Card Grid with Auto-sizing

```tsx
{/* Prefer explicit responsive grid over auto-fill to maintain design control */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
  {items.map(item => <Card key={item.id} item={item} />)}
</div>
```

Do NOT use `grid-cols-[auto-fill,minmax(300px,1fr)]` — this loses breakpoint control.

---

## Common Overflow Issues & Fixes

### Long words breaking layout

```tsx
{/* Apply to text containers with unknown content */}
<p className="break-words">
  {description}
</p>
```

### Grid children squishing on narrow screens

```tsx
{/* Add min-w-0 to prevent grid blowout */}
<div className="grid grid-cols-2">
  <div className="min-w-0">
    <p className="truncate">{longText}</p>
  </div>
</div>
```

### Background decorations overflowing

```tsx
{/* Contain decorative backgrounds */}
<section className="relative overflow-hidden">
  <div className="absolute inset-0 bg-decoration" />
  <div className="relative z-10">
    {/* content */}
  </div>
</section>
```

---

## Touch Target Sizes

All clickable/tappable elements must have a minimum 44×44px touch target (WCAG 2.1 guideline 2.5.8).

```tsx
{/* Minimum padding to ensure 44px touch target */}
<button className="min-h-[44px] min-w-[44px] px-4 py-2 ...">
  Click me
</button>

{/* For icon buttons */}
<button className="w-11 h-11 flex items-center justify-center ...">
  <Icon size={20} />
</button>
```

Regular buttons with `py-3` (24px padding + 20px line height = 44px total) meet this requirement.

---

## Testing Viewports

Use Chrome DevTools Responsive Mode with these exact sizes:

| Label | Width | Notes |
|---|---|---|
| Small phone | 320px | Floor — everything must still work |
| iPhone SE | 375px | Most common small phone |
| iPhone 14 | 390px | Most common standard phone |
| Large phone | 430px | iPhone Pro Max |
| iPad portrait | 768px | md: breakpoint boundary |
| Laptop | 1024px | lg: breakpoint boundary |
| Desktop | 1280px | xl: container max-width |
| Wide | 1440px | Content stays contained |
