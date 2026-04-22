import { MetadataRoute } from "next";
import indexNowConfig from "../../indexnow.config.json";

const { siteUrl } = indexNowConfig;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
