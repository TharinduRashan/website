export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
}

export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  targetAudience: string;
  keyBenefits: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  category: string;
  tagline: string;
  description: string;
  classification: "Internal Production" | "Educational / Academic" | "Commercial Prototype";
  status: "Live & Deployed" | "Completed Prototype" | "In Active Development";
  challenge: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  details: string;
  deliverables: string[];
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
}
