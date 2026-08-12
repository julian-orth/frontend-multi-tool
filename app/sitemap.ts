import { MetadataRoute } from "next";
import { TOOL_REGISTRY } from "@/lib/tools/registry";
import { SITE_CONFIG } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  // Dynamically generate tool URLs from registry
  const toolUrls = TOOL_REGISTRY.flatMap((tool) => [
    {
      url: `${baseUrl}${tool.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en${tool.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  // Static pages
  const staticPageDefs = [
    { url: baseUrl, priority: 1, changeFrequency: "weekly" as const },
    {
      url: `${baseUrl}/about`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/privacy`,
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
    {
      url: `${baseUrl}/terms`,
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
  ];

  const staticPages = [
    ...staticPageDefs,
    ...staticPageDefs.map((page) => ({
      ...page,
      url:
        page.url === baseUrl
          ? `${baseUrl}/en`
          : `${baseUrl}/en${page.url.replace(baseUrl, "")}`,
    })),
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
  }));

  return [...staticPages, ...toolUrls];
}
