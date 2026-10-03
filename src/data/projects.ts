export interface ProjectDetail {
  overview: string;
  context?: string;
  features: string[];
  challenges?: string;
  outcome?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  label?: "Academic Project" | "Internal Project" | "Commercial Prototype" | "Available";
  status: "live" | "in-progress" | "concept";
  coverColor: string;
  imageUrl?: string;
  iconName?: "Globe" | "GraduationCap" | "CalendarClock";
  featured?: boolean;
  detailContent?: ProjectDetail;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "cloudzyne-website",
    slug: "cloudzyne-website",
    title: "Cloudzyne Website",
    category: "Web Development",
    description:
      "The marketing website you are currently viewing. Built with Next.js App Router, TypeScript, Tailwind CSS, and Motion.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Vercel"],
    label: "Internal Project",
    status: "live",
    coverColor: "from-brand-500/15 to-brand-500/35",
    imageUrl: "/images/projects/cloudzyne-website.jpg",
    iconName: "Globe",
    featured: true,
    liveUrl: "https://cloudzyne.com",
    detailContent: {
      overview:
        "The official Cloudzyne company web platform — engineered internally to demonstrate modern web performance standards, type-safe architecture, and responsive design.",
      features: [
        "Next.js App Router with Server Components by default for optimal TTFB",
        "Motion animations with scroll reveals and reduced-motion support",
        "Responsive across all screen sizes (mobile, tablet, desktop, ultra-wide)",
        "Type-safe contact experience with React Hook Form, Zod, and API routes",
        "Comprehensive SEO configuration: metadata, OG graph, sitemap, and JSON-LD",
      ],
      challenges:
        "Achieving high aesthetic polish comparable to established tech firms while strictly maintaining authenticity with zero fabricated customer numbers or testimonials.",
      outcome:
        "Fast, reliable production deployment with 100% type safety and zero external runtime backend overhead.",
    },
  },
  {
    id: "tuition-lms",
    slug: "tuition-lms",
    title: "Tuition Learning Management System",
    category: "Education Platform",
    description:
      "A learning management system prototype for tutorial institutes — managing batch enrollment, scheduling, attendance records, and learning materials.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    label: "Academic Project",
    status: "in-progress",
    coverColor: "from-emerald-50 to-emerald-200/50",
    imageUrl: "/images/projects/tuition-lms.jpg",
    iconName: "GraduationCap",
    featured: true,
    detailContent: {
      overview:
        "A full-stack learning management application designed for Sri Lankan educational institutes. Built to explore administrative automation and student resource distribution.",
      context:
        "This system was engineered as an academic project during a university software engineering program. It is not currently deployed as a commercial client system.",
      features: [
        "Student enrollment and batch management modules",
        "Interactive class schedule and calendar planner",
        "Attendance record keeping and session logs",
        "Lecture notes and past paper repository",
        "Administrative payment verification ledger",
      ],
      challenges:
        "Designing an intuitive interface simple enough for instructors with varying digital familiarity while keeping batch record queries fast.",
    },
  },
  {
    id: "beauty-salon-system",
    slug: "beauty-salon-system",
    title: "Beauty Salon Appointment System",
    category: "Booking Software",
    description:
      "An appointment reservation and management system for beauty salons — allowing clients to book services and staff to manage their schedules seamlessly.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    label: "Commercial Prototype",
    status: "in-progress",
    coverColor: "from-purple-50 to-purple-200/50",
    imageUrl: "/images/projects/beauty-salon-system.jpg",
    iconName: "CalendarClock",
    featured: true,
    detailContent: {
      overview:
        "A streamlined appointment scheduling prototype engineered for small beauty salons and stylists to eliminate schedule clashes and manual booking logbooks.",
      context:
        "Software engineering prototype developed to demonstrate full-stack booking architecture with dynamic calendar availability matching.",
      features: [
        "Client-facing mobile booking flow with instant slot validation",
        "Staff calendar schedule synchronization and break management",
        "Service catalog with configurable durations and pricing",
        "Automated confirmation summaries and booking notices",
      ],
      challenges:
        "Preventing duplicate booking collisions when multiple clients browse available stylist slots at the exact same moment.",
    },
  },
];
