import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n.ts'
);

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPages ? "/KonaCompass" : "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  experimental: {},
} satisfies import("next").NextConfig;

(nextConfig as Record<string, unknown>).allowedDevOrigins = ['192.168.8.98', 'localhost:3000'];

export default withNextIntl(nextConfig);
