import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    summary: "Deep-dive inquiry into operational requirements, workflows, and objectives.",
    details:
      "We begin by understanding your direct business objectives, existing technical friction points, user needs, and baseline requirements before proposing any architectural approach.",
    deliverables: ["Requirement Specification", "Technical Scope Document", "Constraint Analysis"],
  },
  {
    step: "02",
    title: "Plan",
    summary: "Clear architectural blueprints, milestone breakdowns, and technology selection.",
    details:
      "We formulate the technical architecture, data models, third-party integration points, and sprint roadmap so expectations and delivery schedules remain completely transparent.",
    deliverables: ["System Architecture Blueprint", "Sprint Roadmap", "Data Schema Designs"],
  },
  {
    step: "03",
    title: "Design",
    summary: "High-fidelity wireframes, interface flows, and ergonomic user journeys.",
    details:
      "We build intuitive user interfaces and testable click-through prototypes that prioritize fast usability, clear hierarchy, and adherence to accessible design token standards.",
    deliverables: ["Interactive Prototypes", "Design Token System", "Responsive UI Specs"],
  },
  {
    step: "04",
    title: "Build",
    summary: "Production-grade, type-safe development conducted in iterative sprints.",
    details:
      "Engineered with clean code principles, version control, continuous integration, and frequent stakeholder progress check-ins to ensure rapid and accurate implementation.",
    deliverables: ["Type-Safe Codebase", "API Integration Modules", "Automated Test Suites"],
  },
  {
    step: "05",
    title: "Launch",
    summary: "Production deployment, environment hardening, and stability verification.",
    details:
      "We configure domain routing, SSL certificates, production environment variables, and CDN caching, followed by end-to-end smoke testing before public release.",
    deliverables: ["Production Deployment", "SSL & Domain Configuration", "Release Documentation"],
  },
  {
    step: "06",
    title: "Improve",
    summary: "Active monitoring, incremental refinement, and ongoing technical support.",
    details:
      "Post-launch, we review operational logs, respond to user feedback, patch dependencies, and implement incremental enhancements to keep the system robust.",
    deliverables: ["Uptime Monitoring", "Scheduled Maintenance", "Feature Iterations"],
  },
];
