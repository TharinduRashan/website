import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cloudzyne — Software Solutions & Engineering",
    short_name: "Cloudzyne",
    description:
      "Engineering purposeful software solutions, custom web applications, mobile platforms, and AI integrations based in Sri Lanka.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2373F4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/brand/cloudzyne-vortex-app-icon-1024.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
