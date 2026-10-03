# 12 — Footer

## Component: `Footer.tsx`

**Location:** `src/components/layout/Footer.tsx`  
**Type:** Server Component (static links, no interactivity)  
**Background:** `#0A0A0A` (near-black) or `#F9FAFB` (light)

Recommendation: **Dark footer** (`#0A0A0A` bg, `white` text) for strong visual contrast after the CTA section.

---

## Content Structure

### Logo + Tagline (left column)
```
Wordmark: Cloud[zyne] — same style as navbar but white text
          "Cloud" in white, "zyne" in brand blue (#2373F4)
Tagline:  "We build software that moves businesses forward."
          text-sm text-neutral-400 mt-2 max-w-xs
```

### Column 1 — Services
```
Services
  Custom Software
  Web Applications
  Mobile Applications
  AI Solutions
  UI/UX Design
  Software Maintenance
```
All link to `/services#{id}`

### Column 2 — Solutions
```
Solutions
  Business Automation
  Digital Platforms
  Internal Systems
  Customer Applications
  AI Workflows
  SaaS Products
```
All link to `/solutions#{id}`

### Column 3 — Company
```
Company
  About
  Projects
  Contact
```

### Column 4 — Legal (or inline at bottom)
```
Privacy Policy   → /privacy
Terms of Use     → /terms
```

---

## Layout

```tsx
<footer className="bg-neutral-950 text-white">
  {/* Main footer grid */}
  <div className="container mx-auto px-5 md:px-8 py-16 md:py-20">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-12">
      {/* Logo column — spans 2 on lg */}
      <div className="col-span-2 lg:col-span-2">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-4">
          <span className="text-xl font-bold tracking-tight text-white">
            Cloud<span className="text-brand">zyne</span>
          </span>
        </Link>
        <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
          We build software that moves businesses forward.
        </p>
        {/* Contact link */}
        <a href="mailto:hello@cloudzyne.com"
           className="inline-flex items-center gap-2 mt-5 text-sm text-neutral-400
                      hover:text-white transition-colors duration-150">
          <Mail size={14} />
          hello@cloudzyne.com
        </a>
      </div>

      {/* Services column */}
      <FooterLinkGroup title="Services" links={serviceLinks} />
      {/* Solutions column */}
      <FooterLinkGroup title="Solutions" links={solutionLinks} />
      {/* Company column */}
      <FooterLinkGroup title="Company" links={companyLinks} />
    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-neutral-800">
    <div className="container mx-auto px-5 md:px-8 py-5
                    flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-xs text-neutral-500">
        © 2026 Cloudzyne. All rights reserved.
      </p>
      <div className="flex items-center gap-5">
        <Link href="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">
          Terms of Use
        </Link>
      </div>
    </div>
  </div>
</footer>
```

---

## `FooterLinkGroup` Helper

```tsx
interface FooterLinkGroupProps {
  title: string
  links: { label: string; href: string }[]
}

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
        {title}
      </p>
      <ul className="flex flex-col gap-2.5">
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white
                         transition-colors duration-150"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

---

## Links Data

Define inline in `Footer.tsx` or in `src/data/navigation.ts`:

```typescript
const serviceLinks = [
  { label: 'Custom Software', href: '/services#custom-software' },
  { label: 'Web Applications', href: '/services#web-applications' },
  { label: 'Mobile Applications', href: '/services#mobile-applications' },
  { label: 'AI Solutions', href: '/services#ai-solutions' },
  { label: 'UI/UX Design', href: '/services#ui-ux-design' },
  { label: 'Maintenance', href: '/services#software-maintenance' },
]

const solutionLinks = [
  { label: 'Business Automation', href: '/solutions#business-automation' },
  { label: 'Digital Platforms', href: '/solutions#digital-platforms' },
  { label: 'Internal Systems', href: '/solutions#internal-systems' },
  { label: 'Customer Applications', href: '/solutions#customer-applications' },
  { label: 'AI Workflows', href: '/solutions#ai-workflows' },
  { label: 'SaaS Products', href: '/solutions#saas-products' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]
```

---

## Social Links

**Do NOT** include fake social media links or placeholder icons.  
If Cloudzyne has real social media accounts, add them. Otherwise omit entirely.  
A real email link (`mailto:`) is sufficient.

---

## `/privacy` and `/terms` Pages

Create stub pages at `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`:
```tsx
export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-5 py-24 max-w-3xl">
      <h1 className="text-h2 font-bold mb-8">Privacy Policy</h1>
      <p className="text-neutral-600">Privacy policy content will be added here.</p>
    </main>
  )
}
```

---

## Mobile Layout

On `< md` (below 768px):
- Grid collapses to 2-column: Logo + Company in first row, Services + Solutions in second
- Bottom bar stacks vertically (copyright above, legal links below)

On `< sm` (375px):
- Ensure font sizes don't cause overflow
- Link columns: 1-column if needed (`grid-cols-1 sm:grid-cols-2`)

---

## Checklist
- [ ] Footer renders with `bg-neutral-950` dark background
- [ ] Logo wordmark renders with white + brand-blue styling
- [ ] All 3 link column groups render with correct links
- [ ] `hello@cloudzyne.com` `mailto:` link present
- [ ] Bottom bar: copyright "© 2026 Cloudzyne. All rights reserved."
- [ ] Privacy Policy and Terms links present in bottom bar
- [ ] No fake social media icons
- [ ] Mobile 2-column layout works at 375px
- [ ] All footer links are valid internal routes or `mailto:`
- [ ] Footer is a Server Component (no `'use client'`)
