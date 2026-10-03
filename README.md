# Cloudzyne — Official Corporate Website Platform

Official production web platform for **Cloudzyne**, a modern software solutions and development company based in Sri Lanka.

The platform is engineered using the Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide React, adhering to high standards of visual polish, type safety, responsiveness, performance, and accessibility.

Primary production domain: [https://cloudzyne.com](https://cloudzyne.com)

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router with Server Components by default) |
| **Language** | TypeScript (Strict mode enabled) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v3 with custom design tokens (`#2373F4` brand palette) |
| **Animation** | Motion (`motion/react`) with full `prefers-reduced-motion` compliance |
| **Icons** | Lucide React |
| **Form Management** | React Hook Form + Zod validation schema + server API route |
| **Fonts** | Inter via `next/font/google` (zero layout shift, preloaded) |
| **Deployment Target** | Vercel / Next.js compatible hosting |

---

## 📁 Project Architecture & File Hierarchy

```text
cloudzyne/
├── public/                     # Static assets (favicons, icons, OG images)
│   ├── favicon.ico
│   └── og-image.png
│
├── src/
│   ├── app/                    # Next.js App Router Pages & Endpoints
│   │   ├── layout.tsx          # Root layout with Inter font, nav, footer, SEO & JSON-LD
│   │   ├── page.tsx            # Homepage with all sections
│   │   ├── globals.css         # Global styles, variables, reduced-motion rules
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── sitemap.ts          # Dynamic XML sitemap generator
│   │   ├── robots.ts           # Robots.txt crawler directives
│   │   ├── icon.tsx            # Dynamic Next.js SVG/PNG favicon generator
│   │   ├── opengraph-image.tsx # Dynamic Open Graph banner generator
│   │   │
│   │   ├── services/           # Services deep-dive page
│   │   │   └── page.tsx
│   │   ├── solutions/          # Problem-centric solutions page
│   │   │   └── page.tsx
│   │   ├── projects/           # Projects portfolio
│   │   │   ├── page.tsx        # All projects overview
│   │   │   └── [slug]/         # Dynamic SSG project case study pages
│   │   │       └── page.tsx
│   │   ├── about/              # About company, values, audiences & philosophy
│   │   │   └── page.tsx
│   │   ├── contact/            # Interactive contact experience
│   │   │   └── page.tsx
│   │   ├── privacy/            # Privacy Policy
│   │   │   └── page.tsx
│   │   ├── terms/              # Terms of Service
│   │   │   └── page.tsx
│   │   └── api/                # API Endpoints
│   │       └── contact/        # Server-side contact submission handler
│   │           └── route.ts
│   │
│   ├── components/             # Reusable UI & Layout Components
│   │   ├── navigation/         # Navbar (floating pill) and MobileMenu drawer
│   │   ├── hero/               # HeroSection and interactive HeroVisual
│   │   ├── trust/              # TrustSection with interactive value tiles
│   │   ├── services/           # ServicesSection
│   │   ├── solutions/          # SolutionsSection
│   │   ├── projects/           # ProjectsSection and ProjectCard
│   │   ├── process/            # ProcessSection (01 Discover - 06 Improve)
│   │   ├── contact/            # ContactForm with client & server validation
│   │   ├── sections/           # Shared high-impact sections (CtaSection)
│   │   ├── footer/             # Global multi-column footer
│   │   └── ui/                 # Atomic UI primitives (Button, Card, Badge, Section)
│   │
│   ├── data/                   # Structured, authentic data sources
│   │   ├── company.ts          # Verified company config & values
│   │   ├── navigation.ts       # Navigation links & routes
│   │   ├── services.ts         # 6 core software services
│   │   ├── solutions.ts        # 6 problem-solution categories
│   │   ├── projects.ts         # Authentic projects with verified classifications
│   │   └── process.ts          # 6 engineering phases
│   │
│   ├── lib/                    # Utilities & Validators
│   │   ├── utils.ts            # Class name merger (clsx + tailwind-merge)
│   │   ├── animations.ts       # Standardized Motion transition variants
│   │   └── validators.ts       # Zod schemas for forms
│   │
│   └── types/                  # Central TypeScript interface declarations
│       └── index.ts
│
├── tasks/                      # 21 Task specification & verification files
├── docs/                       # 6 System architecture & strategy documentation files
├── tailwind.config.ts          # Tailwind theme tokens & color extensions
├── next.config.ts              # Next.js compiler & asset configuration
├── tsconfig.json               # TypeScript configuration with @/* path aliases
├── package.json                # Project dependencies and script declarations
└── README.md                   # Project overview and maintenance manual
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18+ or v20+ (tested on Node.js v24 LTS)
- **Package Manager**: npm v10+

### Installation

Clone the repository and install all required dependencies:

```bash
cd Cloudzyne
npm install
```

### Development Server

Start the local Next.js development server:

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the live website.

---

## 🧪 Verification & Build Checks

Before every production deployment, run the following verification sequence:

### 1. TypeScript Strict Type-Check

```bash
npm run type-check
# or: npx tsc --noEmit
```

### 2. Production Optimization & Build

```bash
npm run build
```

The production build generates static pages (`○ Static` and `● SSG`) for fast global edge distribution.

### 3. Local Production Preview

```bash
npm run start
```

---

## 🎨 Design System & Color Tokens

- **Primary Brand Color**: `#2373F4` (Cloudzyne Blue)
  - `brand-50`: `#EEF5FF`
  - `brand-500`: `#2373F4` (Primary action & brand accent)
  - `brand-600`: `#1858D4` (Active & hover state)
  - `brand-700`: `#1344A8` (Pressed state)
- **Base Background**: `#FFFFFF`
- **Surface Muted**: `#F8FAFC` / `#F1F5F9`
- **Dark Text**: `#090D16` / `#0F172A`
- **Muted Text**: `#64748B`
- **Border Default**: `#E2E8F0`

---

## 🔒 Authenticity & Content Integrity Policy

To maintain commercial integrity and avoid misleading claims:
- **No invented clients or logos**: Never fabricate customer numbers or client logos.
- **Clear academic labeling**: Prototype and university projects are explicitly labeled with amber contextual banners (`Academic Project`).
- **No fake statistics or awards**: No fabricated revenue numbers or unverified ratings.
- **Genuine contact routing**: Inquiries are sent to `info@cloudzyne.com` and processed via `/api/contact`.

---

## 🌐 Production Deployment

This project is optimized for zero-configuration deployment to **Vercel**:

1. Connect the repository to Vercel.
2. The framework preset is automatically detected as **Next.js**.
3. Set the root directory if needed.
4. (Optional) Provide environment variables such as `RESEND_API_KEY` or `CONTACT_EMAIL_TO` for automated email dispatch.
5. Deploy.

---

© 2026 Cloudzyne Software Solutions. All rights reserved.
