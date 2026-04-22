import type { Metadata } from "next";

const siteUrl = "https://konacompass.com";
const ogImage = `${siteUrl}/branding/og-image.png`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    const title = "Сравнение ротаторов | Kona Compass vs конкуренты";
    const description = "Kona Compass vs брендовые крепления и ручные штанги. Удержание курса, совместимость с Garmin Panoptix, Lowrance ActiveTarget, Humminbird MEGA Live.";
    const url = `${siteUrl}/ru/compare/`;
    return {
      title,
      description,
      alternates: {
        canonical: url,
        languages: { en: `${siteUrl}/en/compare/`, ru: url, "x-default": `${siteUrl}/en/compare/` },
      },
      openGraph: {
        title,
        description,
        url,
        siteName: "Kona Compass",
        images: [{ url: ogImage, width: 1200, height: 630, alt: "Kona Compass — сравнение ротаторов датчиков" }],
        locale: "ru_RU",
        type: "website",
      },
      twitter: { card: "summary_large_image", title, description, images: [ogImage] },
    };
  }
  const title = "Kona Compass vs Manual Mounts | Transducer Rotator Comparison";
  const description = "Compare Kona Compass motorized rotator vs brand mounts and manual poles. Heading hold, multi-platform compatibility, stainless build, auto search.";
  const url = `${siteUrl}/en/compare/`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: url, ru: `${siteUrl}/ru/compare/`, "x-default": url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Kona Compass",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Kona Compass motorized transducer rotator vs manual mounts comparison" }],
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
