import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2373F4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cloudzyne.com"),

  title: {
    default: "Cloudzyne — Software Solutions & Engineering",
    template: "%s — Cloudzyne",
  },

  description:
    "Cloudzyne is a software solutions company based in Sri Lanka. We engineer custom software, web applications, mobile platforms, and AI integrations for startups and growing businesses.",

  keywords: [
    "software development Sri Lanka",
    "software solutions company",
    "custom software development",
    "web application engineering",
    "mobile application development",
    "AI solutions Sri Lanka",
    "Next.js engineering",
    "Cloudzyne",
  ],

  authors: [{ name: "Cloudzyne", url: "https://www.cloudzyne.com" }],
  creator: "Cloudzyne",
  publisher: "Cloudzyne",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cloudzyne.com",
    siteName: "Cloudzyne",
    title: "Cloudzyne — Software Solutions & Engineering",
    description:
      "Engineering purposeful software solutions for forward-thinking businesses. Based in Sri Lanka.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cloudzyne — Software Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cloudzyne — Software Solutions & Engineering",
    description:
      "Engineering purposeful software solutions for forward-thinking businesses. Based in Sri Lanka.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/images/brand/cloudzyne-vortex-mark-blue.svg", type: "image/svg+xml" },
      { url: "/images/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.cloudzyne.com/#organization",
      name: "Cloudzyne",
      legalName: "Cloudzyne Software Solutions",
      url: "https://www.cloudzyne.com",
      logo: "https://www.cloudzyne.com/images/brand/cloudzyne-vortex-lockup.png",
      description:
        "Custom software engineering and solutions company based in Sri Lanka, building web platforms, mobile apps, and AI integrations.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressCountry: "LK",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@cloudzyne.com",
        telephone: "+94787255755",
        contactType: "customer service",
      },
      sameAs: [
        "https://www.linkedin.com/company/cloudzyne",
        "https://www.instagram.com/cloudzyneofficial",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.cloudzyne.com/#website",
      url: "https://www.cloudzyne.com",
      name: "Cloudzyne",
      publisher: {
        "@id": "https://www.cloudzyne.com/#organization",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.cloudzyne.com/#localbusiness",
      name: "Cloudzyne Software Solutions",
      image: "https://www.cloudzyne.com/images/brand/cloudzyne-vortex-lockup.png",
      url: "https://www.cloudzyne.com",
      telephone: "+94787255755",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressCountry: "LK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.9271,
        longitude: 79.8612,
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Sri Lanka",
        },
        {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-brand-500 selection:text-white flex flex-col justify-between">
        {/* Skip to Main Content Link for Accessibility (WCAG 2.1 AA) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-500 text-white font-semibold rounded-lg shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global Floating Pill Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <div id="main-content" className="flex-1">
          {children}
        </div>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
