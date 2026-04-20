import { MetadataRoute } from "next";

const siteUrl = "https://konacompass.com";
const locales = ["en", "ru"];
const pages = ["", "/specs", "/compare", "/instructions", "/blog", "/blog/why-livescope-transducer-drifts", "/blog/manual-vs-motorized-transducer-control"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}${page}`])
          ),
        },
      });
    }
  }

  return entries;
}
