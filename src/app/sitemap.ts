import type { MetadataRoute } from "next";

const baseUrl = "https://nikhilkatkuri.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/uses`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    }, 
  ];
}
