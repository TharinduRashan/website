# 11 — Closing CTA Section

## Component: `CtaSection.tsx`

**Location:** `src/components/sections/CtaSection.tsx`  
**Directive:** Server Component (no client interactivity needed)  
**Background:** Two options — pick one for the build:

- **Option A:** Deep brand blue (`bg-brand text-white`) — high impact
- **Option B:** Off-white with brand accents (`bg-neutral-50`) — lighter feel

Recommendation: **Option A** for maximum contrast and visual punctuation at page end.

---

## Content

### Heading
```
Have a software idea?
```
Style: `text-h1 md:text-display font-extrabold text-white leading-tight tracking-tight`

### Subtext
```
Let's turn it into something real.
```
Style: `text-xl md:text-2xl font-medium text-white/80`

### Supporting Copy
```
Whether you're at the idea stage or ready to build, 
we'd love to hear about your project. No obligations — 
just a straightforward conversation.
```
Style: `text-base text-white/60 max-w-xl leading-relaxed`

### CTA Button

```
Label: Start a Project
Route: /contact
Style (on dark bg): bg-white text-brand font-semibold px-8 py-4 rounded-full text-sm
                    hover:bg-neutral-100 transition-colors duration-150
                    shadow-lg
```

### Secondary action (optional)
```
Label: hello@cloudzyne.com (mailto link)
Style: text-white/60 text-sm underline hover:text-white transition-colors
```

---

## Layout

### Desktop: Centered, full-width band
```tsx
<section className="py-20 md:py-28 bg-brand relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
    {/* Optional: subtle radial gradient or geometric shapes in white/5% */}
  </div>

  <div className="container mx-auto px-5 md:px-8 relative text-center">
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="text-h1 md:text-display font-extrabold text-white leading-tight mb-4">
        Have a software idea?
      </h2>
      <p className="text-xl md:text-2xl font-medium text-white/80 mb-4">
        Let's turn it into something real.
      </p>
      <p className="text-base text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
        Whether you're at the idea stage or ready to build...
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild className="bg-white text-brand hover:bg-neutral-100
                                   rounded-full px-8 py-4 text-sm font-semibold
                                   shadow-lg h-auto">
          <Link href="/contact">Start a Project</Link>
        </Button>
        <a href="mailto:hello@cloudzyne.com"
           className="text-sm text-white/60 hover:text-white transition-colors underline underline-offset-4">
          hello@cloudzyne.com
        </a>
      </div>
    </motion.div>
  </div>
</section>
```

---

## Background Decoration (Optional)

Add visual texture to the brand-blue background without adding photographic assets:

```tsx
{/* Radial glow spots */}
<div className="absolute top-0 left-1/4 w-64 h-64 rounded-full
                bg-white/5 blur-3xl" />
<div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full
                bg-white/5 blur-3xl" />
```

Or use CSS `background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)`.

---

## Placement

This section appears:
1. At the bottom of the **homepage** (before Footer)
2. At the bottom of the **About page** (before Footer)
3. Optionally at the bottom of **Services** and **Solutions** pages

It is a reusable component — import and drop in wherever needed.

---

## Reduced Motion

The `whileInView` animation should be suppressed when `prefers-reduced-motion` is active.  
Since this is a Server Component by default, if you keep it server-side, omit the motion wrapper and instead use CSS `@keyframes` via Tailwind's `animate-fade-up` for a CSS-only approach:

```tsx
<div className="animate-fade-up [animation-fill-mode:both]">
  {/* content */}
</div>
```

CSS `@media (prefers-reduced-motion: reduce)` automatically suppresses Tailwind animations.

---

## Component Usage
```tsx
// In homepage (src/app/page.tsx)
import { CtaSection } from '@/components/sections/CtaSection'
// ...
<CtaSection />
```

---

## Checklist
- [ ] Section renders with `bg-brand` full-width background
- [ ] H2 heading is at `text-h1` or `text-display` size
- [ ] "Have a software idea?" heading text correct
- [ ] "Let's turn it into something real." subtext rendered
- [ ] CTA button is white pill linking to `/contact`
- [ ] Email `mailto:` link present as secondary action
- [ ] Background decoration (glow spots) adds depth without being distracting
- [ ] Section works as a standalone reusable component
- [ ] Scroll reveal animation fires once on entry
- [ ] No fake stats or social proof in this section
