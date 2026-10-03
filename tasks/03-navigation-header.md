# 03 — Navigation & Header

## Component: `Navbar.tsx`

**Location:** `src/components/layout/Navbar.tsx`  
**Directive:** `'use client'` — needs scroll listener, state for mobile menu

---

## Visual Design

### Default State
```
position: fixed, top: 0, left: 0, right: 0
z-index: 50
padding: 16px 0 (py-4)
background: transparent
```

### Scrolled State (triggered at scrollY > 20px)
```
background: rgba(255, 255, 255, 0.92)
backdrop-filter: blur(12px)
border-bottom: 1px solid #E5E7EB
box-shadow: 0 4px 16px rgba(0,0,0,0.08)
```

Apply via state toggle: `const [scrolled, setScrolled] = useState(false)` with `useEffect` scroll listener.

Transition: `transition-all duration-300`

### Inner Container (pill feel)
The navbar content itself is not literally a pill — the pill effect is achieved by the container with max-width and the backdrop blur. Do NOT add explicit border-radius to the navbar bar itself on desktop (full-width bar). On mobile, the floating-pill look could optionally be applied via `mx-4 my-3 rounded-2xl`.

---

## Logo

```tsx
<Link href="/" className="flex items-center gap-2">
  <span className="text-xl font-bold tracking-tight text-neutral-950">
    Cloud<span className="text-brand">zyne</span>
  </span>
</Link>
```

No external logo image initially — wordmark only. "Cloud" in `#0A0A0A`, "zyne" in `#2373F4`.

---

## Desktop Navigation Links

```tsx
const navLinks = [
  { label: 'Services',  href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects',  href: '/projects' },
  { label: 'About',     href: '/about' },
]
```

Style per link:
```
text-sm font-medium text-neutral-600
hover:text-neutral-950 transition-colors duration-150
relative after:absolute after:bottom-0 after:left-0 after:right-0
after:h-0.5 after:bg-brand after:scale-x-0
hover:after:scale-x-100 after:transition-transform after:duration-200
```

Active state (using `usePathname()`): `text-neutral-950 after:scale-x-100`

---

## Desktop CTA Button

```tsx
<Button asChild size="sm" className="rounded-full bg-brand hover:bg-brand-dark text-white px-5 py-2 text-sm font-semibold">
  <Link href="/contact">Start a Project</Link>
</Button>
```

---

## Desktop Layout

```tsx
<nav className="flex items-center justify-between h-16">
  {/* Logo — left */}
  {/* Links — center, hidden on mobile (hidden md:flex gap-8) */}
  {/* CTA + Hamburger — right */}
</nav>
```

---

## Mobile Menu

### Trigger
Hamburger icon button (using Lucide `Menu` / `X`). Visible below `md:` breakpoint.

```tsx
<button
  aria-label="Toggle navigation menu"
  aria-expanded={menuOpen}
  aria-controls="mobile-menu"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X size={20} /> : <Menu size={20} />}
</button>
```

### Slide-down Panel
```tsx
<AnimatePresence>
  {menuOpen && (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg px-5 py-6 md:hidden"
    >
      {/* nav links stacked vertically */}
      {/* full-width CTA button */}
    </motion.div>
  )}
</AnimatePresence>
```

Mobile nav links:
```
py-3 text-base font-medium text-neutral-800 border-b border-border
first:border-t
```

Mobile CTA:
```
mt-4 w-full text-center bg-brand text-white py-3 rounded-full font-semibold text-sm
```

### Close on route change
```typescript
const pathname = usePathname()
useEffect(() => { setMenuOpen(false) }, [pathname])
```

### Close on outside click
Add `useEffect` with `mousedown` event listener checking if click target is outside the nav element via `ref`.

---

## Keyboard Accessibility

- Hamburger button: `type="button"`, `aria-expanded`, `aria-controls="mobile-menu"`
- Mobile menu: `role="dialog"`, `aria-modal="true"`, `aria-label="Navigation menu"`
- When menu opens: trap focus within mobile menu panel
- `Escape` key closes the menu and returns focus to hamburger button
- All nav links reachable via `Tab` key in logical order

### Focus Trap Implementation
```typescript
useEffect(() => {
  if (!menuOpen) return
  const panel = document.getElementById('mobile-menu')
  const focusable = panel?.querySelectorAll<HTMLElement>(
    'a, button, [tabindex]:not([tabindex="-1"])'
  )
  focusable?.[0]?.focus()

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') { setMenuOpen(false) }
  }
  document.addEventListener('keydown', handleKeyDown)
  return () => document.removeEventListener('keydown', handleKeyDown)
}, [menuOpen])
```

---

## Scroll Listener
```typescript
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 20)
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}, [])
```

---

## Full Component Signature
```typescript
'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

---

## Placement in `layout.tsx`
```tsx
<body>
  <Navbar />
  <main id="main-content">
    {children}
  </main>
  <Footer />
</body>
```

`<main>` gets `pt-16` or `pt-20` to offset fixed navbar height.
