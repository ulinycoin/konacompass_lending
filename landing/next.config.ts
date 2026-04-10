import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages ? "/KonaCompass" : "",
  assetPrefix: isGithubPages ? "/KonaCompass/" : undefined,
};

export default nextConfig;
