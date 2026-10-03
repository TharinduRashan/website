import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Custom Software", href: "/services#custom-software" },
    { label: "Web Applications", href: "/services#web-apps" },
    { label: "Mobile Applications", href: "/services#mobile-apps" },
    { label: "SaaS & Product Dev", href: "/services#saas-product" },
    { label: "AI & Automation", href: "/services#ai-solutions" },
    { label: "Software Maintenance", href: "/services#maintenance" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
  ],
};
