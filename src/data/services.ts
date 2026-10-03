import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software Development",
    shortDescription:
      "Tailored business systems, internal tools, and workflow automation built to match how your company actually operates.",
    fullDescription:
      "When off-the-shelf software doesn't fit your operational workflow, custom software gives you complete control over functionality, data, and user permissions without subscription bloat.",
    icon: "Code2",
    features: [
      "Business management systems & portals",
      "Internal tools & workflow automation",
      "Custom reporting & administrative dashboards",
      "Booking, ordering, and management systems",
      "Integration with existing business systems",
    ],
    technologies: ["Node.js", "TypeScript", "Next.js", "PostgreSQL", "Python"],
    deliverables: [
      "Custom Backend & APIs",
      "Administrative Dashboards",
      "Workflow Automation",
      "Technical Documentation",
    ],
  },
  {
    id: "web-apps",
    slug: "web-applications",
    title: "Web Application Development",
    shortDescription:
      "Fast, reliable web applications designed for smooth user experiences and business-critical operations.",
    fullDescription:
      "From customer-facing web platforms to complex administrative portals, we engineer web applications that load quickly, look great on any device, and scale reliably.",
    icon: "Globe",
    features: [
      "Fast, responsive applications across all screen sizes",
      "Customer portals & self-service accounts",
      "Real-time updates and notifications",
      "Secure user authentication and data protection",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    deliverables: [
      "Production Web Application",
      "Admin Control Panel",
      "System Documentation",
      "Cloud Deployment",
    ],
  },
  {
    id: "mobile-apps",
    slug: "mobile-applications",
    title: "Mobile Application Development",
    shortDescription:
      "Intuitive iOS and Android apps built for speed, offline reliability, and practical daily use.",
    fullDescription:
      "Put your business directly in your customers' or field team's hands. We develop mobile apps with clean user interfaces, offline capabilities, and smooth device integration.",
    icon: "Smartphone",
    features: [
      "Cross-platform iOS and Android apps",
      "Offline support & local data caching",
      "Push notifications & device alerts",
      "Camera, GPS, and hardware integrations",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase / Supabase"],
    deliverables: [
      "iOS & Android Builds",
      "App Store & Play Store Setup",
      "API Integration",
      "Maintenance Guide",
    ],
  },
  {
    id: "saas-product",
    slug: "saas-product-development",
    title: "SaaS & Product Development",
    shortDescription:
      "Have a software idea? We help founders and businesses turn concepts into scalable digital products.",
    fullDescription:
      "We guide products from initial concept to launch, building clean MVPs, customer dashboards, and subscription infrastructure ready for real users and growth.",
    icon: "Layers",
    features: [
      "Fast MVP development to test ideas",
      "Multi-tenant SaaS architectures",
      "Customer accounts & subscription billing",
      "Analytics and customer onboarding flows",
      "Cloud deployment and automated scaling",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS / Vercel"],
    deliverables: [
      "Full SaaS Platform",
      "Subscription & Payment Setup",
      "Customer Onboarding Flow",
      "Cloud Infrastructure",
    ],
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI Solutions & Integration",
    shortDescription:
      "Practical AI tools that automate repetitive tasks, extract data, and improve team productivity.",
    fullDescription:
      "We integrate artificial intelligence to solve concrete operational bottlenecks — summarizing documents, assisting customers, and automating manual data entry.",
    icon: "Brain",
    features: [
      "Automated document processing and data extraction",
      "Smart customer support and internal knowledge bots",
      "Integration with leading AI models (OpenAI, Anthropic, Gemini)",
      "Custom AI workflows tailored to your data",
    ],
    technologies: ["Python", "OpenAI / Claude API", "LangChain", "Vector Databases"],
    deliverables: [
      "Integrated AI Modules",
      "Data Extraction Pipelines",
      "Security & Privacy Safeguards",
      "Staff Usage Guides",
    ],
  },
  {
    id: "maintenance",
    slug: "software-maintenance",
    title: "Software Maintenance & Cloud Support",
    shortDescription:
      "Continuous updates, security patches, performance monitoring, and dependable technical backup.",
    fullDescription:
      "Keep your critical software running smoothly after launch. We handle security updates, bug fixes, database tuning, and feature improvements so your team can focus on business.",
    icon: "ShieldCheck",
    features: [
      "Proactive security updates and patch management",
      "Bug investigation and rapid issue fixes",
      "Performance tuning & database health checks",
      "Cloud infrastructure and uptime oversight",
    ],
    technologies: ["Docker", "Git CI/CD", "Cloud Monitoring", "PostgreSQL"],
    deliverables: [
      "Monthly Maintenance Reports",
      "Scheduled Backups & Health Checks",
      "Direct Engineering Support",
      "Release Deployment Oversight",
    ],
  },
];
