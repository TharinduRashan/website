import { ValueProposition } from "@/types";

export const companyConfig = {
  name: "Cloudzyne",
  legalName: "Cloudzyne Software Solutions",
  tagline: "Engineering purposeful software solutions for forward-thinking businesses.",
  description:
    "Cloudzyne is a software solutions and development company based in Sri Lanka, creating custom software, web platforms, mobile applications, and AI integrations for individuals, startups, and growing enterprises.",
  domain: "https://cloudzyne.com",
  location: "Sri Lanka",
  supportEmail: "info@cloudzyne.com", // clearly defined official placeholder / configured email
  phone: "+94787255755",
  phoneDisplay: "+94 78 725 5755",
  whatsappUrl: "https://wa.me/94787255755",
  social: {
    linkedin: "https://www.linkedin.com/company/cloudzyne",
    instagram: "https://www.instagram.com/cloudzyneofficial",
  },
  brandColor: "#2373F4",
  foundedYear: 2026,
};

export const valuePropositions: ValueProposition[] = [
  {
    id: "tailored-solutions",
    title: "Tailored Solutions",
    description:
      "Every architecture and codebase is deliberately designed around the specific operational realities and workflows of your business, avoiding one-size-fits-all compromises.",
    icon: "Layers",
  },
  {
    id: "modern-engineering",
    title: "Modern Engineering",
    description:
      "We build with robust, production-proven modern technology stacks, emphasizing type safety, modular component systems, and clean code standards.",
    icon: "Cpu",
  },
  {
    id: "scalable-foundations",
    title: "Scalable Foundations",
    description:
      "Engineered to expand seamlessly as your user base, transaction volume, or business complexity expands, minimizing costly rewrites down the line.",
    icon: "TrendingUp",
  },
  {
    id: "direct-collaboration",
    title: "Direct Collaboration",
    description:
      "Work directly with engineering leads through transparent, milestone-driven sprints, clear documentation, and proactive communication at every stage.",
    icon: "Users",
  },
];
