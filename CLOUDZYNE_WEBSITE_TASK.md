# CLOUDZYNE — COMPLETE WEBSITE BUILD SPECIFICATION

## ROLE

You are the lead product designer, UI/UX designer, frontend architect, and frontend engineer responsible for building the official **Cloudzyne** company website.

Do not treat this as a simple landing page.

Build a production-quality software company website that Cloudzyne can actually use as its official public website.

You are responsible for:

* project architecture
* UI/UX
* responsive design
* animations
* accessibility
* SEO
* performance
* component architecture
* content structure
* contact experience
* visual QA
* final polish

Do not stop after creating a basic homepage.

---

# 1. COMPANY INFORMATION

## Company

**Cloudzyne**

## Company type

Software Solutions / Software Development Company

Cloudzyne is not positioned primarily as an "IT support company."

Cloudzyne builds software solutions for:

* individuals
* startups
* small businesses
* SMEs

## Services

Cloudzyne may provide:

* Custom Software Development
* Web Application Development
* Mobile Application Development
* AI Solutions and AI Integration
* UI/UX Design
* SaaS Product Development
* Software Maintenance and Support
* Business Automation
* Digital Solutions

Do not make unsupported claims about the company.

Never invent:

* clients
* customer numbers
* revenue
* awards
* certifications
* partnerships
* years of experience
* employees
* testimonials
* project results
* business statistics

If real information is not available, use neutral wording or clearly marked placeholders.

---

# 2. DOMAIN

Primary domain:

https://cloudzyne.com

All production URLs, canonical URLs, metadata, Open Graph URLs, sitemap configuration, and internal references should use the production domain where appropriate.

Do not invent alternative domains.

---

# 3. BRAND IDENTITY

Cloudzyne's primary brand color:

```text
#2373F4
```

Primary background:

```text
#FFFFFF
```

Supporting colors:

* near-black/dark text
* neutral gray text
* light gray backgrounds
* subtle gray borders

Do not introduce another dominant brand color.

The visual identity should feel:

* modern
* premium
* technical
* trustworthy
* clean
* confident
* minimal
* professional
* software-engineering focused

Avoid:

* childish visual styles
* excessive gradients
* excessive glassmorphism
* excessive rounded cards
* random neon colors
* generic AI-generated SaaS templates
* excessive 3D elements
* unnecessary visual clutter

Use #2373F4 intelligently rather than coloring everything blue.

---

# 4. PRIMARY DESIGN REFERENCE

Use the following website as the primary UI/UX reference:

https://www.creativesoftware.com/

Study the live website before implementation.

The reference is particularly important for:

* information architecture
* navigation
* page composition
* typography hierarchy
* spacing
* section proportions
* service presentation
* credibility sections
* case-study presentation
* CTA placement
* footer structure
* responsive behavior
* hover interactions
* scroll animations
* entrance animations
* overall motion design
* visual rhythm

## VERY IMPORTANT

The Cloudzyne website should have a **very similar level of UI/UX polish and a closely comparable browsing experience** to the reference.

However, DO NOT copy:

* Creative Software's logo
* Creative Software's brand identity
* exact text
* proprietary images
* proprietary graphics
* testimonials
* customer logos
* source code
* exact assets

Create an original Cloudzyne implementation using the reference as a design and interaction benchmark.

The objective is:

**Comparable design language + comparable interaction quality + Cloudzyne branding + original content.**

Do not turn this into a generic software-agency template.

---

# 5. FIRST ACTION — INSPECT THE REPOSITORY

Before creating or modifying anything:

1. Inspect the entire repository.
2. Identify the current framework.
3. Identify the package manager.
4. Identify the existing source structure.
5. Identify existing assets.
6. Identify whether Next.js is already configured.
7. Identify whether Tailwind CSS is already configured.
8. Identify whether shadcn/ui is already configured.
9. Identify existing environment files.
10. Identify existing Git configuration.
11. Identify existing documentation.

Do not destroy an existing working project unnecessarily.

If the repository is empty, initialize the project using the required stack.

---

# 6. REQUIRED TECHNOLOGY STACK

Use:

## Framework

**Next.js**

Use the App Router.

## Language

**TypeScript**

## UI

**React**

## Styling

**Tailwind CSS**

## Components

**shadcn/ui** where useful.

Do not force shadcn/ui into every component.

## Icons

**Lucide React**

## Animation

**Motion**

Use animation intentionally and consistently.

## Forms

Use:

* React Hook Form
* Zod

where appropriate.

## Version control

Git + GitHub

## Deployment target

Vercel or another Next.js-compatible production host.

---

# 7. DO NOT ADD UNNECESSARY TECHNOLOGY

For the initial company website, do NOT introduce:

* Express.js
* separate Node.js backend
* PostgreSQL
* MongoDB
* Redis
* GraphQL
* microservices
* Kubernetes
* Docker
* authentication
* authorization
* complex CMS
* unnecessary state-management libraries

unless an actual requirement appears during implementation.

A company marketing website does not need a complex backend.

Use Next.js server functionality where server-side behavior is required.

---

# 8. DEVELOPMENT WORKFLOW

You MUST work in phases.

Do not immediately generate the entire website without planning.

The required workflow is:

```text
PHASE 0
Inspect repository and reference website

↓

PHASE 1
Create project structure and documentation

↓

PHASE 2
Create task files

↓

PHASE 3
Create design system

↓

PHASE 4
Implement global architecture

↓

PHASE 5
Implement header/navigation

↓

PHASE 6
Implement homepage

↓

PHASE 7
Implement internal pages

↓

PHASE 8
Implement animations/interactions

↓

PHASE 9
Implement responsive behavior

↓

PHASE 10
Implement SEO/accessibility/performance

↓

PHASE 11
Visual QA

↓

PHASE 12
Functional QA

↓

PHASE 13
Final refinement

↓

PHASE 14
Production readiness
```

Do not skip phases.

---

# 9. REQUIRED PROJECT DOCUMENTATION

Before implementing the complete site, create:

```text
/tasks/
/docs/
```

Create these files:

```text
tasks/
├── 00-project-overview.md
├── 01-project-setup.md
├── 02-design-system.md
├── 03-navigation-header.md
├── 04-hero-section.md
├── 05-trust-section.md
├── 06-services-section.md
├── 07-solutions-section.md
├── 08-projects-section.md
├── 09-process-section.md
├── 10-about-section.md
├── 11-cta-section.md
├── 12-footer.md
├── 13-contact-page.md
├── 14-responsive-design.md
├── 15-animations.md
├── 16-seo.md
├── 17-accessibility.md
├── 18-performance.md
├── 19-testing.md
└── 20-final-qa.md
```

Create:

```text
docs/
├── architecture.md
├── design-system.md
├── content-structure.md
├── animation-system.md
├── responsive-strategy.md
└── development-guide.md
```

Each task file must contain:

* Objective
* Requirements
* Components
* Implementation details
* Responsive requirements
* Acceptance criteria
* Testing requirements

Do not write meaningless documentation.

The documentation must describe what will actually be implemented.

---

# 10. PROJECT STRUCTURE

Use a clean architecture similar to:

```text
cloudzyne/
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── logo/
│   └── favicon/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── services/
│   │   │   └── page.tsx
│   │   │
│   │   ├── solutions/
│   │   │   └── page.tsx
│   │   │
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── solutions/
│   │   ├── projects/
│   │   ├── process/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── footer/
│   │   └── ui/
│   │
│   ├── data/
│   │
│   ├── lib/
│   │
│   └── types/
│
├── tasks/
├── docs/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind configuration
└── README.md
```

Adjust the exact structure if the installed Next.js version uses a different recommended convention.

Do not create unnecessary folders.

---

# 11. DESIGN SYSTEM

Create a reusable design system before building individual sections.

Define:

* colors
* typography
* spacing
* container widths
* border styles
* button styles
* link styles
* card styles
* shadows
* radii
* animation durations
* easing curves
* breakpoints

Use design tokens where practical.

Do not scatter arbitrary values throughout the code.

---

# 12. TYPOGRAPHY

Use a modern professional sans-serif typeface.

The typography should feel similar in visual hierarchy to the reference site.

Create a clear hierarchy:

```text
Display
H1
H2
H3
Body Large
Body
Small
Caption
```

The hero heading should be visually dominant.

Do not use excessively decorative fonts.

Make sure typography works correctly on:

* desktop
* tablet
* mobile

---

# 13. HEADER / NAVIGATION

Create a premium navigation system.

Desktop:

```text
Cloudzyne logo

Services
Solutions
Projects
About
Contact

CTA
```

Use an appropriate CTA such as:

```text
Start a Project
```

or:

```text
Let's Talk
```

Mobile:

* compact header
* hamburger menu
* animated menu
* accessible focus behavior
* clear CTA

Study the reference website's navigation behavior and reproduce comparable interaction quality.

---

# 14. HERO SECTION

The hero should immediately explain what Cloudzyne does.

Suggested direction:

Eyebrow:

```text
SOFTWARE SOLUTIONS · SRI LANKA
```

Headline:

```text
We build software that
moves businesses forward.
```

Supporting copy:

```text
Cloudzyne helps businesses turn ideas and challenges
into modern, reliable software solutions.
```

Primary CTA:

```text
Start a Project
```

Secondary CTA:

```text
Explore Our Work
```

These are starting points, not mandatory final copy.

Create better original copy if it improves the design.

The hero must include strong visual composition.

Do not make it look like a basic centered SaaS hero with a gradient background.

Study the reference's hero proportions, whitespace, typography, image treatment, and animation.

---

# 15. HERO ANIMATION

Implement polished entrance animations.

Potential behavior:

* navigation appears
* eyebrow fades/slides
* heading reveals
* supporting copy appears
* CTA appears
* hero visual enters
* subtle stagger

Animation must be fast and premium.

Do not over-animate.

---

# 16. TRUST / VALUE PROPOSITION SECTION

Create a section explaining why businesses work with Cloudzyne.

Use genuine attributes such as:

### Tailored Solutions

Software designed around the actual needs of each project.

### Modern Engineering

Modern technologies and maintainable architecture.

### Scalable Foundations

Build solutions that can evolve as requirements grow.

### Direct Collaboration

Clear communication throughout the development process.

Do not make unsupported superiority claims.

---

# 17. SERVICES SECTION

Create a visually strong services section.

Services:

### Custom Software Development

Purpose-built software for specific business requirements.

### Web Applications

Modern web applications and digital platforms.

### Mobile Applications

Mobile products designed around real users and business needs.

### AI Solutions

AI integration, automation and intelligent software capabilities.

### UI/UX Design

Interfaces designed around usability and business goals.

### Software Maintenance

Ongoing improvements, optimization and technical support.

Each service should have:

* icon
* title
* description
* optional arrow/link
* hover state
* animation

Do not make six identical boring cards.

Use the reference website's structural sophistication as the benchmark.

---

# 18. SOLUTIONS SECTION

Create a section around business problems and solution categories.

Possible categories:

```text
Business Automation
Digital Platforms
Internal Business Systems
Customer Applications
AI-Powered Workflows
SaaS Products
```

The purpose is to communicate that Cloudzyne solves business problems rather than simply selling programming languages.

---

# 19. PROJECTS SECTION

Create a premium portfolio/case-study section.

Each project can contain:

```text
Project name
Category
Description
Technology
Visual
View Project
```

Use genuine projects only.

Potential initial projects:

* Cloudzyne Website
* Tuition LMS
* Beauty Salon Appointment System
* Other real work

If a project is an academic project, clearly identify it appropriately.

Do not pretend university projects are commercial client projects.

Do not invent clients.

---

# 20. PROJECT DETAIL PAGES

The architecture should support future project detail pages.

Possible structure:

```text
/projects
/projects/[slug]
```

A case study can include:

* overview
* challenge
* solution
* features
* technology
* screenshots
* development process
* outcome, if verified

Do not fabricate outcomes.

---

# 21. HOW WE WORK

Create a professional development process:

```text
01 — Discover

02 — Plan

03 — Design

04 — Build

05 — Launch

06 — Improve
```

Explain each step briefly.

Use a visual treatment inspired by the reference site's professional storytelling rather than a generic numbered list.

---

# 22. ABOUT SECTION

Introduce Cloudzyne.

Explain:

* what Cloudzyne is
* who Cloudzyne serves
* what Cloudzyne builds
* the company's approach

Keep it concise.

Include the founders only if the final information is approved and supplied.

Do not invent credentials.

---

# 23. CTA SECTION

Create a major closing CTA.

Suggested concept:

```text
Have a software idea?

Let's turn it into something real.
```

Supporting copy:

```text
Tell us what you're building, what problem you're solving,
or what you want to improve.
```

CTA:

```text
Start a Project
```

The CTA should have strong visual impact.

Study the reference site's final conversion section and reproduce comparable visual hierarchy and interaction quality.

---

# 24. CONTACT PAGE

Create:

```text
/contact
```

The page should include:

```text
Name
Email
Company
Phone (optional)
Project type
Budget (optional)
Message
```

Use:

React Hook Form + Zod

for client-side validation.

Show:

* loading state
* success state
* validation errors
* failure state

Do not claim an email was sent if the backend/service has not actually confirmed it.

The contact form should be architected so a real email service can be connected later.

---

# 25. EMAIL

Only display a public Cloudzyne email address once it is actually configured.

Do not invent mailbox addresses.

If the actual company email is known and configured, use it consistently.

---

# 26. FOOTER

Create a premium footer.

Include:

```text
Cloudzyne
Software Solutions

Services
Solutions
Projects
About
Contact

Social links

Privacy Policy
Terms

© 2026 Cloudzyne
```

Only include social accounts that actually exist.

Do not create fake URLs.

---

# 27. ANIMATION SYSTEM

Animation is a major part of this project.

Use Motion where appropriate.

Create a consistent animation system.

Possible animation categories:

```text
fadeIn
fadeUp
fadeLeft
fadeRight
scaleIn
stagger
hover
menuOpen
menuClose
pageTransition
```

Do not create dozens of inconsistent animation definitions.

Use consistent durations and easing.

---

# 28. REFERENCE ANIMATION ANALYSIS

Before implementing animations, inspect the reference website.

Observe:

* page-load behavior
* hero animation
* scroll reveals
* image movement
* text movement
* hover transitions
* buttons
* arrows
* navigation
* mobile menu
* section transitions

Recreate comparable motion characteristics.

Do not merely add:

```text
opacity: 0 → 1
```

to every section.

The motion should feel intentional.

---

# 29. REDUCED MOTION

Respect:

```text
prefers-reduced-motion
```

Users who request reduced motion must receive a simplified experience.

---

# 30. RESPONSIVE DESIGN

The site must be fully responsive.

Test:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Desktop and mobile should feel intentionally designed.

Do not simply shrink the desktop layout.

Pay particular attention to:

* navigation
* typography
* hero
* buttons
* images
* cards
* spacing
* footer
* contact form
* animations

---

# 31. ACCESSIBILITY

Implement:

* semantic HTML
* keyboard navigation
* focus states
* proper labels
* accessible buttons
* accessible navigation
* correct heading hierarchy
* image alt text
* sufficient contrast
* reduced motion
* accessible form errors

Do not use divs for everything.

---

# 32. SEO

Implement:

* title
* description
* Open Graph
* social metadata
* canonical URLs
* sitemap
* robots.txt
* semantic headings
* descriptive alt attributes
* structured data where appropriate

The homepage should target relevant concepts around:

* software solutions
* software development
* custom software
* web applications
* mobile applications
* AI solutions
* Sri Lanka

Do not keyword-stuff.

---

# 33. PERFORMANCE

Optimize:

* images
* fonts
* JavaScript
* client components
* animations
* layout shifts
* page loading
* responsive images

Use Next.js image optimization where appropriate.

Do not make every component a Client Component.

Use Server Components by default where practical.

---

# 34. SECURITY

Do not expose:

* API keys
* secrets
* private tokens
* credentials
* environment secrets

Use environment variables for sensitive configuration.

Never commit `.env` secrets.

---

# 35. ERROR / EMPTY STATES

Create sensible states for:

* contact submission failure
* project not found
* invalid route
* loading states
* missing content

The site should never show a broken or unfinished UI.

---

# 36. CODE QUALITY

Use:

* TypeScript
* reusable components
* clear naming
* small maintainable components
* structured data
* consistent formatting
* meaningful comments only when necessary

Avoid:

* giant components
* duplicated markup
* duplicated CSS
* random inline styles
* unnecessary abstractions
* unused dependencies
* dead code

---

# 37. CONTENT ARCHITECTURE

Repeated content should be stored in structured data where practical.

For example:

```text
src/data/services.ts
src/data/projects.ts
src/data/solutions.ts
src/data/process.ts
```

This makes future content updates easier.

---

# 38. NO FAKE CONTENT

This rule is critical.

Never create fake:

* clients
* logos
* testimonials
* statistics
* reviews
* awards
* certifications
* partnerships
* project results

If content is unavailable, use:

```text
Placeholder
```

or build the component so real data can be added later.

Do not make Cloudzyne look established by inventing evidence.

---

# 39. VISUAL QUALITY STANDARD

The website must NOT look like:

* a student project
* a tutorial project
* an AI-generated template
* a generic Tailwind landing page
* a basic portfolio
* a collection of cards

It should feel like a legitimate software company website.

Focus on:

* typography
* whitespace
* hierarchy
* composition
* motion
* consistency
* interaction
* responsive behavior

---

# 40. REFERENCE COMPARISON

After implementing each major section:

Compare it against:

https://www.creativesoftware.com/

Evaluate:

### Layout

Does the composition have similar sophistication?

### Spacing

Does the whitespace feel intentional?

### Typography

Is the hierarchy similarly strong?

### Interaction

Do hover states feel polished?

### Animation

Does motion feel deliberate and smooth?

### Navigation

Does it feel equally refined?

### Responsive behavior

Does mobile feel intentionally designed?

If not, refine it.

---

# 41. VISUAL QA

After implementation, inspect the website at:

```text
Mobile
Tablet
Desktop
Large desktop
```

Look specifically for:

* overflow
* broken layouts
* inconsistent spacing
* typography wrapping problems
* animation glitches
* image distortion
* inaccessible controls
* broken links
* missing hover states
* poor mobile navigation
* footer problems
* form problems

Fix every obvious issue before completion.

---

# 42. FUNCTIONAL QA

Verify:

* all navigation links
* all buttons
* mobile menu
* contact form
* validation
* project links
* internal routes
* external links
* social links
* footer
* 404 handling

No dead buttons.

No fake interactions.

---

# 43. BUILD CHECK

Before declaring completion:

Run the appropriate checks for the project.

At minimum:

```text
TypeScript check
ESLint
Production build
```

Fix all errors.

Warnings should be reviewed rather than blindly ignored.

---

# 44. FINAL PROJECT DOCUMENTATION

Update:

```text
README.md
```

Include:

* project description
* technology stack
* installation
* development commands
* build commands
* environment variables
* deployment instructions
* project structure
* maintenance notes

Also update the task files so completed tasks are clearly marked.

---

# 45. GIT

Keep the repository clean.

Do not commit:

```text
.env
.env.local
node_modules
.next
private credentials
API keys
```

Use a proper `.gitignore`.

Make logical commits if working in Git.

---

# 46. FINAL FILE STRUCTURE

The final project should broadly resemble:

```text
cloudzyne/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── services/
│   │   ├── solutions/
│   │   ├── projects/
│   │   ├── about/
│   │   └── contact/
│   │
│   ├── components/
│   ├── data/
│   ├── lib/
│   └── types/
│
├── tasks/
│
├── docs/
│
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts
└── CLOUDZYNE_WEBSITE_TASK.md
```

Adapt where technically appropriate.

---

# 47. EXECUTION RULE

Follow this exact sequence:

## STEP 1

Inspect the repository.

## STEP 2

Study the reference website:

https://www.creativesoftware.com/

## STEP 3

Document observations.

## STEP 4

Create `/tasks`.

## STEP 5

Create `/docs`.

## STEP 6

Create the architecture and design system.

## STEP 7

Implement the website.

## STEP 8

Implement animations.

## STEP 9

Implement responsive behavior.

## STEP 10

Implement SEO/accessibility/performance.

## STEP 11

Run tests and production build.

## STEP 12

Perform visual QA.

## STEP 13

Refine the design.

## STEP 14

Perform final functional QA.

## STEP 15

Update documentation.

## STEP 16

Declare the website production-ready only after all acceptance criteria are satisfied.

---

# 48. FINAL ACCEPTANCE CRITERIA

The project is complete only when:

* [ ] Cloudzyne branding is correctly implemented
* [ ] #2373F4 is the primary brand color
* [ ] website is responsive
* [ ] navigation works
* [ ] mobile navigation works
* [ ] homepage is complete
* [ ] Services page is complete
* [ ] Solutions page is complete
* [ ] Projects page is complete
* [ ] About page is complete
* [ ] Contact page is complete
* [ ] contact form validates correctly
* [ ] animations are implemented
* [ ] animations respect reduced motion
* [ ] UI interactions work
* [ ] SEO metadata exists
* [ ] sitemap exists
* [ ] robots configuration exists
* [ ] accessibility requirements are addressed
* [ ] images are optimized
* [ ] TypeScript passes
* [ ] lint passes
* [ ] production build succeeds
* [ ] no fake company information exists
* [ ] no fake clients exist
* [ ] no fake testimonials exist
* [ ] no fake statistics exist
* [ ] no broken links exist
* [ ] mobile layout has been reviewed
* [ ] desktop layout has been reviewed
* [ ] reference website comparison has been performed
* [ ] documentation is complete
* [ ] README is complete
* [ ] repository is clean

---

# 49. MOST IMPORTANT DESIGN INSTRUCTION

Do not stop at "technically correct."

The website needs to be **visually refined**.

If the first implementation looks generic, iterate.

If spacing feels wrong, fix it.

If typography feels weak, fix it.

If animations feel generic, refine them.

If mobile looks like a compressed desktop site, redesign it.

If the site feels like an AI-generated template, continue refining it.

Use the Creative Software website as the visual quality and interaction benchmark while maintaining a distinct Cloudzyne identity.

The final website should communicate:

**Cloudzyne is a serious software company capable of building serious software.**

Build the complete website.
