import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { designs } from "@/data/designs";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://publicdemandinterior.com";

  // Static URLs
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/designs",
    "/projects",
    "/gallery",
    "/how-we-work",
    "/contact",
    "/quote",
  ];

  const staticUrls = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Dynamic Service Slugs
  const serviceUrls = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Design Slugs
  const designUrls = designs.map((d) => ({
    url: `${baseUrl}/designs/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic Project Slugs
  const projectUrls = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...serviceUrls, ...designUrls, ...projectUrls];
}
