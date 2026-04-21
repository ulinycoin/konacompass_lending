import type { Metadata } from "next";

const siteUrl = "https://konacompass.com";
const ogImage = `${siteUrl}/branding/og-image.png`;
const slug = "why-livescope-transducer-drifts";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    const title = "Почему датчик LiveScope смещается — и как это исправить";
    const description = "Ручные крепления не удерживают курс. Течение, волна и манёвр лодки сбивают live sonar с цели. Разбираем причину и что реально помогает.";
    const url = `${siteUrl}/ru/blog/${slug}/`;
    return {
      title,
      description,
      alternates: {
        canonical: url,
        languages: { en: `${siteUrl}/en/blog/${slug}/`, ru: url, "x-default": `${siteUrl}/en/blog/${slug}/` },
      },
      openGraph: {
        title,
        description,
        url,
        siteName: "Kona Compass",
        images: [{ url: ogImage, width: 1200, height: 630 }],
        locale: "ru_RU",
        type: "article",
      },
    };
  }
  const title = "Why Your LiveScope Transducer Keeps Drifting — Fix It";
  const description = "Manual transducer mounts have no heading hold. Every current, wave, and boat turn moves your live sonar off target. Here is why — and what fixes it.";
  const url = `${siteUrl}/en/blog/${slug}/`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: url, ru: `${siteUrl}/ru/blog/${slug}/`, "x-default": url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Kona Compass",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "en_US",
      type: "article",
    },
  };
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
