# 16 — SEO Implementation

## Meta Strategy

Every page in the app must define its own metadata using the Next.js App Router `Metadata` API.  
The root `layout.tsx` defines global defaults; individual pages override what they need.

---

## Root Layout Metadata (`src/app/layout.tsx`)

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://cloudzyne.com'),
  
  title: {
    default: 'Cloudzyne — Software Solutions',
    template: '%s — Cloudzyne',
  },
  
  description: 'Cloudzyne is a software solutions company based in Sri Lanka. We build custom software, web applications, and AI-powered tools for startups and growing businesses.',
  
  keywords: [
    'software development Sri Lanka',
    'custom software company',
    'web application development',
    'Next.js development',
    'startup software partner',
  ],
  
  authors: [{ name: 'Cloudzyne', url: 'https://cloudzyne.com' }],
  creator: 'Cloudzyne',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cloudzyne.com',
    siteName: 'Cloudzyne',
    title: 'Cloudzyne — Software Solutions',
    description: 'Custom software for startups and growing businesses. Based in Sri Lanka.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cloudzyne — Software Solutions',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Cloudzyne — Software Solutions',
    description: 'Custom software for startups and growing businesses. Based in Sri Lanka.',
    images: ['/og-image.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
```

---

## Per-Page Metadata

Each page exports its own `metadata` object or `generateMetadata` function.

### Homepage (`src/app/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Cloudzyne — Software Solutions',
  description: 'We build custom software that moves businesses forward. Web apps, mobile apps, AI integrations, and more.',
  alternates: { canonical: 'https://cloudzyne.com' },
}
```

### About (`src/app/about/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'About',
  description: 'Cloudzyne is a software solutions company in Sri Lanka working with startups and SMEs to build real, working software.',
  alternates: { canonical: 'https://cloudzyne.com/about' },
}
```

### Services (`src/app/services/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Services',
  description: 'Custom software development, web applications, mobile apps, AI solutions, UI/UX design, and maintenance.',
  alternates: { canonical: 'https://cloudzyne.com/services' },
}
```

### Solutions (`src/app/solutions/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Software solutions for business automation, digital platforms, internal systems, customer applications, and SaaS products.',
  alternates: { canonical: 'https://cloudzyne.com/solutions' },
}
```

### Projects (`src/app/projects/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Software projects built by Cloudzyne — web applications, booking systems, and learning management systems.',
  alternates: { canonical: 'https://cloudzyne.com/projects' },
}
```

### Project Detail (`src/app/projects/[slug]/page.tsx`)
```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `https://cloudzyne.com/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Cloudzyne`,
      description: project.description,
    },
  }
}
```

### Contact (`src/app/contact/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Cloudzyne. Tell us about your project and we\'ll respond within 24–48 hours.',
  alternates: { canonical: 'https://cloudzyne.com/contact' },
}
```

---

## OG Image

Create `public/og-image.png` at 1200×630px.  
Design: Cloudzyne wordmark centered on white or brand-blue background.  
Tagline: "We build software that moves businesses forward."

Generate with: Figma, Canva, or Next.js OG image generation (`next/og`).

---

## Sitemap (`src/app/sitemap.ts`)

```typescript
import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://cloudzyne.com'
  
  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/solutions`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
  ]
  
  const projectPages = projects
    .filter(p => p.status !== 'concept')
    .map(p => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  
  return [...staticPages, ...projectPages]
}
```

Accessible at: `https://cloudzyne.com/sitemap.xml`

---

## Robots (`src/app/robots.ts`)

```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://cloudzyne.com/sitemap.xml',
  }
}
```

Accessible at: `https://cloudzyne.com/robots.txt`

---

## JSON-LD Structured Data (Organization)

Add to homepage `src/app/page.tsx` or `layout.tsx`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Cloudzyne',
      url: 'https://cloudzyne.com',
      logo: 'https://cloudzyne.com/og-image.png',
      description: 'Custom software solutions company based in Sri Lanka.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'LK',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@cloudzyne.com',
        contactType: 'customer service',
      },
    }),
  }}
/>
```

---

## Canonical URLs

All pages must have `alternates.canonical` set to their absolute URL. This prevents duplicate content issues with trailing slashes or query strings.

---

## Checklist
- [ ] Root layout has complete `metadata` with `metadataBase`
- [ ] All pages have `title`, `description`, `canonical`
- [ ] OG image exists at `/public/og-image.png` (1200×630)
- [ ] `openGraph` metadata on all major pages
- [ ] `twitter` card metadata on all major pages
- [ ] `sitemap.ts` generates valid XML at `/sitemap.xml`
- [ ] `robots.ts` accessible at `/robots.txt`, blocks `/api/`
- [ ] JSON-LD Organization schema on homepage
- [ ] `generateMetadata` used for dynamic project pages
- [ ] No `<title>` or `<meta>` tags manually placed in components
