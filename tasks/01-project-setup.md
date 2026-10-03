# 01 — Project Setup

## Next.js Initialization

```bash
npx create-next-app@latest cloudzyne \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-turbo
cd cloudzyne
```

> Use `--app` for App Router. Use `--src-dir` to keep source in `/src`. Use `--no-turbo` initially for stability.

---

## Additional Package Installations

```bash
# Animations
npm install motion

# Forms + Validation
npm install react-hook-form zod @hookform/resolvers

# Icons
npm install lucide-react

# shadcn/ui initialization
npx shadcn@latest init
```

### shadcn/ui Init Options
When prompted by `npx shadcn@latest init`:
- Style: **Default**
- Base color: **Neutral** (we override with custom blue in CSS vars)
- CSS variables: **Yes**

### Install shadcn Components
```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add label
npx shadcn@latest add form
npx shadcn@latest add navigation-menu
npx shadcn@latest add sheet
npx shadcn@latest add badge
```

---

## Final Directory Structure

```
cloudzyne/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout — font, metadata, Navbar, Footer
│   │   ├── page.tsx                # Homepage (all landing page sections)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── solutions/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx            # Portfolio grid
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Project detail
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SectionWrapper.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── SolutionsSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   └── CtaSection.tsx
│   │   ├── ui/                     # shadcn auto-generated
│   │   └── shared/
│   │       ├── AnimatedSection.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── ProjectCard.tsx
│   │       └── ContactForm.tsx
│   ├── data/
│   │   ├── services.ts
│   │   ├── solutions.ts
│   │   ├── projects.ts
│   │   └── process.ts
│   ├── lib/
│   │   ├── utils.ts                # shadcn cn() utility
│   │   ├── validators.ts           # Zod schemas
│   │   └── motion-variants.ts      # Shared animation variants
│   └── styles/
│       └── globals.css
├── public/
│   ├── og-image.png                # 1200×630 OG image
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── .env.local
└── .gitignore
```

---

## Configuration Files

### `tailwind.config.ts` Extensions
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2373F4',
          dark: '#1a5fd4',
          light: '#5596f7',
        },
        neutral: {
          950: '#0A0A0A',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'h1': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', md: '2rem', xl: '3rem' },
        screens: { xl: '1280px' },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
```

### `next.config.ts`
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
```

### `tsconfig.json` — Key Settings
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "paths": { "@/*": ["./src/*"] }
  }
}
```

---

## Environment Variables

### `.env.local` (not committed)
```env
# Contact form — fill in when email service is chosen
CONTACT_EMAIL_TO=hello@cloudzyne.com
RESEND_API_KEY=           # or SENDGRID_API_KEY=
```

### `.env.example` (committed)
```env
CONTACT_EMAIL_TO=
RESEND_API_KEY=
```

---

## `.gitignore` Additions
```
.env.local
.env*.local
.vercel
out/
```

---

## Checklist

- [ ] `create-next-app` run successfully
- [ ] All packages installed without peer-dep conflicts
- [ ] `npx shadcn@latest init` complete with components added
- [ ] `tailwind.config.ts` updated with brand tokens
- [ ] `globals.css` has CSS custom properties (see design-system task)
- [ ] `src/data/` directory created with empty `.ts` files
- [ ] `src/lib/motion-variants.ts` created
- [ ] `.env.example` committed, `.env.local` in `.gitignore`
- [ ] `npm run dev` starts without errors on `http://localhost:3000`
