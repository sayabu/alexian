import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL;
  return base
    ? ["", "/human-cost", "/science", "/methodology", "/why-mca"].map(
        (path) => ({ url: base + path }),
      )
    : [];
}
