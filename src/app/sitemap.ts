import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Required for `output: export` — emit a static sitemap.xml at build time
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
