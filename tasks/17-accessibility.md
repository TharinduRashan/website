# 17 — Accessibility

## Standard: WCAG 2.1 Level AA

All pages and components must meet WCAG 2.1 AA compliance. This is both a quality standard and a legal consideration in many markets.

---

## Semantic HTML Structure

Every page must use correct heading hierarchy and landmark elements:

```html
<!-- Root layout -->
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header>
    <nav aria-label="Main navigation">...</nav>
  </header>
  <main id="main-content">
    <!-- Page sections -->
    <section aria-labelledby="section-heading-id">
      <h2 id="section-heading-id">Section Heading</h2>
    </section>
  </main>
  <footer aria-label="Site footer">...</footer>
</body>
```

### Heading Hierarchy Rules
- One `<h1>` per page (the page's primary heading)
- Sections use `<h2>` for section headings
- Cards and sub-sections use `<h3>`
- Never skip heading levels (no `<h4>` after `<h2>` directly)
- Eyebrow labels (`SOFTWARE SOLUTIONS · SRI LANKA`) are `<p>` or `<span>`, NOT headings

---

## Skip to Main Content Link

Required for keyboard users who need to bypass repeated navigation.

```tsx
// In layout.tsx, before <Navbar />
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
             focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand focus:text-white
             focus:rounded-lg focus:text-sm focus:font-semibold
             focus:outline-none focus:ring-2 focus:ring-white"
>
  Skip to main content
</a>
```

The `<main>` element must have `id="main-content"`.

---

## Color Contrast Requirements

Minimum ratios: 4.5:1 for normal text, 3:1 for large text (18px+ regular or 14px+ bold).

| Text | Background | Ratio | Pass/Fail |
|---|---|---|---|
| `#0A0A0A` on `#FFFFFF` | ✅ ~21:1 | AA+ |
| `#6B7280` on `#FFFFFF` | ✅ ~5.74:1 | AA |
| `#9CA3AF` on `#FFFFFF` | ⚠️ ~3.8:1 | AA large only |
| `#FFFFFF` on `#2373F4` | ✅ ~4.68:1 | AA |
| `#2373F4` on `#FFFFFF` | ✅ ~4.68:1 | AA |
| `#FFFFFF` on `#0A0A0A` | ✅ ~21:1 | AA+ |

> **Warning:** `#9CA3AF` (`text-neutral-400`) should only be used for non-essential text (captions, placeholders) where WCAG decorative exception applies, or for large text (18px+).

Verify with: https://webaim.org/resources/contrastchecker/

---

## Mobile Navigation Accessibility

### Hamburger Button
```tsx
<button
  type="button"
  aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
  aria-expanded={menuOpen}
  aria-controls="mobile-menu"
  onClick={() => setMenuOpen(!menuOpen)}
  className="w-10 h-10 flex items-center justify-center rounded-lg
             hover:bg-neutral-100 transition-colors
             focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
>
  {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
</button>
```

### Mobile Menu Panel
```tsx
<nav
  id="mobile-menu"
  role="navigation"
  aria-label="Mobile navigation"
  // Optionally: aria-modal="true" if using dialog role
>
```

### Focus Management on Menu Open
When the menu opens, focus must move to the first focusable element inside the menu (typically the first nav link):
```typescript
useEffect(() => {
  if (menuOpen) {
    const firstLink = document.querySelector<HTMLAnchorElement>('#mobile-menu a')
    firstLink?.focus()
  }
}, [menuOpen])
```

### Escape Key to Close
```typescript
useEffect(() => {
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && menuOpen) {
      setMenuOpen(false)
      hamburgerRef.current?.focus() // Return focus to hamburger
    }
  }
  document.addEventListener('keydown', onKeyDown)
  return () => document.removeEventListener('keydown', onKeyDown)
}, [menuOpen])
```

---

## Interactive Element Requirements

### All Buttons
- Must have visible focus indicator: `focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2`
- Must have accessible name (text content, `aria-label`, or `aria-labelledby`)
- Minimum 44×44px touch/click target
- `type="button"` for non-submit buttons

### All Links
- Must have descriptive text ("Learn more about Custom Software Development", not just "Learn more")
- Use `aria-label` when link text is ambiguous
- External links: add `target="_blank" rel="noopener noreferrer"` and indicate external nature

### Icon-Only Buttons
```tsx
<button
  type="button"
  aria-label="Close menu"
>
  <X size={20} aria-hidden="true" />
</button>
```
Always set `aria-hidden="true"` on decorative icons.

---

## Form Accessibility

Covered in detail in task 13. Summary:
- All inputs have associated `<label>` elements
- Required fields marked with `required` HTML attribute AND `aria-required="true"`
- Error messages associated via `aria-describedby`
- Focus moves to first error on failed submission
- Success state announced (consider `role="status"` on success message)

```tsx
{formState === 'success' && (
  <div role="status" aria-live="polite">
    <p>Message sent successfully.</p>
  </div>
)}
```

---

## Image Accessibility

All `<Image>` components (from `next/image`) must have:
- Descriptive `alt` text for meaningful images
- Empty `alt=""` for purely decorative images
- Never use filename as alt text

```tsx
// Meaningful image
<Image src="/og-image.png" alt="Cloudzyne wordmark and tagline" width={400} height={210} />

// Decorative image
<Image src="/decoration.svg" alt="" width={200} height={200} aria-hidden="true" />
```

---

## ARIA Patterns Reference

| Pattern | Implementation |
|---|---|
| Navigation landmark | `<nav aria-label="Main navigation">` |
| Skip link | `<a href="#main-content">` before `<nav>` |
| Disclosure (hamburger) | `aria-expanded` + `aria-controls` on button |
| Live region (form success) | `role="status"` + `aria-live="polite"` |
| Icon buttons | `aria-label` + `aria-hidden="true"` on icon |
| Decorative icons | `aria-hidden="true"` |
| Section heading association | `aria-labelledby={headingId}` on `<section>` |

---

## Focus Indicator Standard

Default browser outline is insufficient. Apply consistently:
```css
/* In globals.css or via Tailwind */
:focus-visible {
  outline: 2px solid #2373F4;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Remove for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

Tailwind equivalent on interactive elements:
```
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
```

---

## Checklist
- [ ] Skip-to-main link present in layout, visually hidden until focused
- [ ] `<main id="main-content">` present in layout
- [ ] Single `<h1>` per page
- [ ] Heading hierarchy never skips levels
- [ ] All `<section>` elements have `aria-labelledby` pointing to their heading
- [ ] Hamburger button has `aria-expanded`, `aria-controls`, `aria-label`
- [ ] Mobile menu focus management: focus moves in on open, returns on close/Escape
- [ ] `Escape` key closes mobile menu
- [ ] All interactive elements have `:focus-visible` ring
- [ ] Icon-only buttons have `aria-label`
- [ ] Decorative icons have `aria-hidden="true"`
- [ ] Color contrast verified for all text/background combinations
- [ ] `#9CA3AF` not used for body text (only captions/placeholders)
- [ ] Form errors use `aria-describedby` linking
- [ ] Success state uses `role="status"` and `aria-live="polite"`
- [ ] All images have appropriate `alt` text
- [ ] External links have `rel="noopener noreferrer"`
