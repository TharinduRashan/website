# 08 — Projects Section & Portfolio

## Component: `ProjectsSection.tsx` (homepage) + `/projects` page

**Location:** `src/components/sections/ProjectsSection.tsx`  
**Directive:** `'use client'` — scroll animations  
**Background:** `#FFFFFF`

---

## ⚠️ Honesty Policy

All projects listed must be real. Do NOT invent client names, industries, or outcomes.  
Academic/learning projects must be clearly labeled as such.  
No invented metrics ("increased revenue by X%", "10,000 users").

---

## Projects Data

Define in `src/data/projects.ts`:

```typescript
export interface Project {
  id: string
  slug: string
  title: string
  category: string
  description: string
  techStack: string[]
  label?: 'Academic Project' | 'Internal Project' | 'In Progress'
  status: 'live' | 'in-progress' | 'concept'
  coverColor: string    // Tailwind gradient or hex for card header bg
  featured?: boolean
  detailContent?: ProjectDetail
}

export interface ProjectDetail {
  overview: string
  context?: string       // e.g., "Built as part of a university course"
  features: string[]
  challenges?: string
  outcome?: string       // Only if real and verifiable
}

export const projects: Project[] = [
  {
    id: 'cloudzyne-website',
    slug: 'cloudzyne-website',
    title: 'Cloudzyne Website',
    category: 'Web Development',
    description: 'The marketing website you are currently viewing. Built with Next.js App Router, TypeScript, Tailwind CSS, and Motion.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    label: 'Internal Project',
    status: 'live',
    coverColor: 'from-brand/10 to-brand/30',
    featured: true,
    detailContent: {
      overview: 'The Cloudzyne company website — designed and developed internally. The goal was to build a fast, modern marketing site that reflects our engineering standards.',
      features: [
        'App Router with Server and Client Components',
        'Motion scroll animations with stagger reveals',
        'Responsive across all breakpoints',
        'Contact form with validation and API route',
        'Full SEO: metadata, OG images, sitemap, JSON-LD',
      ],
    },
  },
  {
    id: 'tuition-lms',
    slug: 'tuition-lms',
    title: 'Tuition LMS',
    category: 'Education Platform',
    description: 'A learning management system for tuition centers — enabling class scheduling, student enrollment, attendance tracking, and resource sharing.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    label: 'Academic Project',
    status: 'in-progress',
    coverColor: 'from-emerald-50 to-emerald-100',
    featured: true,
    detailContent: {
      overview: 'A learning management system designed for Sri Lankan tuition centers. Built as an academic project exploring full-stack web development.',
      context: 'This was developed as part of a university software engineering course. It is not a live commercial product.',
      features: [
        'Student and teacher portals',
        'Class scheduling and calendar',
        'Attendance tracking',
        'Resource upload and download',
        'Basic announcement system',
      ],
    },
  },
  {
    id: 'beauty-salon-system',
    slug: 'beauty-salon-system',
    title: 'Beauty Salon Appointment System',
    category: 'Booking Software',
    description: 'An appointment booking and management system for beauty salons — allowing clients to book services and staff to manage their schedules.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'SQLite'],
    label: 'Academic Project',
    status: 'in-progress',
    coverColor: 'from-rose-50 to-rose-100',
    featured: true,
    detailContent: {
      overview: 'A booking system designed for small beauty salons. Developed as a portfolio project to demonstrate full-stack development with Next.js and Prisma.',
      context: 'Academic and portfolio project. Not currently deployed for commercial use.',
      features: [
        'Client-facing booking flow',
        'Staff schedule management',
        'Service catalog with pricing',
        'Appointment confirmation',
      ],
    },
  },
  {
    id: 'future-project',
    slug: 'future-project',
    title: 'Your Project',
    category: 'Available',
    description: 'We\'re taking on new projects. If you have an idea, let\'s build it together.',
    techStack: [],
    status: 'concept',
    coverColor: 'from-neutral-100 to-neutral-200',
    featured: false,
  },
]
```

---

## Project Card Component

**Location:** `src/components/shared/ProjectCard.tsx`

```tsx
export function ProjectCard({ project, index }: { project: Project, index: number }) {
  const isPlaceholder = project.status === 'concept'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index % 3}
    >
      <Link
        href={isPlaceholder ? '/contact' : `/projects/${project.slug}`}
        className="group block bg-white border border-border rounded-2xl overflow-hidden
                   hover:shadow-lg transition-all duration-300"
      >
        {/* Card Header — colored gradient or pattern */}
        <div className={`h-44 bg-gradient-to-br ${project.coverColor} relative`}>
          {/* Category badge */}
          <span className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1
                           rounded-full bg-white/80 backdrop-blur-sm text-neutral-700">
            {project.category}
          </span>
          {/* Label badge (Academic Project / Internal Project) */}
          {project.label && (
            <span className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1
                             rounded-full bg-neutral-900/80 text-white">
              {project.label}
            </span>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-base font-semibold text-neutral-950 mb-2
                         group-hover:text-brand transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-500 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          {project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map(tech => (
                <span key={tech}
                  className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Placeholder CTA */}
          {isPlaceholder && (
            <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              Start a conversation <ArrowRight size={14} />
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
```

---

## Homepage Section Layout

Shows `featured: true` projects only (3 cards):

```tsx
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-5 md:px-8">
    <div className="flex items-end justify-between mb-12">
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-2">Work</p>
        <h2 className="text-h2 font-bold text-neutral-950">What we've built</h2>
      </div>
      <Link href="/projects" className="text-sm font-semibold text-brand hidden md:flex items-center gap-1">
        See all <ArrowRight size={14} />
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {featuredProjects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
    </div>
  </div>
</section>
```

---

## `/projects` Page

- Shows all projects (not just featured)
- Same grid layout but full page
- Page title: "Our Work" with subtitle

## `/projects/[slug]` Page

**Location:** `src/app/projects/[slug]/page.tsx`  
**Type:** Server Component (data is static)

```typescript
export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  return {
    title: project ? `${project.title} — Cloudzyne` : 'Project — Cloudzyne',
    description: project?.description,
  }
}
```

Detail page layout:
- Back link: `← All Projects`
- Project title + category + label
- Tech stack pills
- Cover gradient header (full-width, taller: `h-64`)
- **Context notice** (if `label === 'Academic Project'`): amber banner: "This was an academic/learning project..."
- Overview paragraph
- Features list
- Outcome (if any — only factual, no invented metrics)

---

## Checklist
- [ ] `projects.ts` typed with `Project` and `ProjectDetail` interfaces
- [ ] All 3 real projects have `label` badge rendered on card
- [ ] Placeholder "Your Project" card links to `/contact`
- [ ] `/projects` page shows all 4 cards
- [ ] `/projects/[slug]` renders for all 3 real slugs
- [ ] `generateStaticParams` includes all slugs
- [ ] Academic project pages show amber context banner
- [ ] Tech stack pills render correctly
- [ ] No invented outcomes, metrics, or client names
- [ ] Title color changes to `text-brand` on card hover
