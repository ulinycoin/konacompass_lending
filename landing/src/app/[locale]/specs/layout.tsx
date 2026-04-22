import type { Metadata } from "next";

const siteUrl = "https://konacompass.com";
const ogImage = `${siteUrl}/branding/og-image.png`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    const title = "Технические характеристики | Kona Compass Ротатор датчика";
    const description = "Характеристики ротатора Kona Compass: режимы работы, скорость вращения, угол сканирования, совместимость с Garmin, Lowrance, Humminbird.";
    const url = `${siteUrl}/ru/specs/`;
    return {
      title,
      description,
      alternates: {
        canonical: url,
        languages: { en: `${siteUrl}/en/specs/`, ru: url, "x-default": `${siteUrl}/en/specs/` },
      },
      openGraph: {
        title,
        description,
        url,
        siteName: "Kona Compass",
        images: [{ url: ogImage, width: 1200, height: 630, alt: "Kona Compass — ротатор датчика live sonar" }],
        locale: "ru_RU",
        type: "website",
      },
      twitter: { card: "summary_large_image", title, description, images: [ogImage] },
    };
  }
  const title = "Technical Specifications | Kona Compass Transducer Rotator";
  const description = "Kona Compass specs: operating modes, rotation speed, scanning range, Garmin / Lowrance / Humminbird MEGA Live compatibility. Full control options listed.";
  const url = `${siteUrl}/en/specs/`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: url, ru: `${siteUrl}/ru/specs/`, "x-default": url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Kona Compass",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Kona Compass motorized transducer rotator specifications" }],
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export default function SpecsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
