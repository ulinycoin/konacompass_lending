import type { Metadata } from "next";

const siteUrl = "https://konacompass.com";
const ogImage = `${siteUrl}/branding/og-image.png`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    const title = "Блог | Kona Compass — live sonar и ротаторы датчиков";
    const description = "Статьи о live sonar, моторизованных ротаторах датчиков, Garmin Panoptix LiveScope, Lowrance ActiveTarget и Humminbird MEGA Live. Советы для рыболовов.";
    const url = `${siteUrl}/ru/blog/`;
    return {
      title,
      description,
      alternates: {
        canonical: url,
        languages: { en: `${siteUrl}/en/blog/`, ru: url, "x-default": `${siteUrl}/en/blog/` },
      },
      openGraph: {
        title,
        description,
        url,
        siteName: "Kona Compass",
        images: [{ url: ogImage, width: 1200, height: 630 }],
        locale: "ru_RU",
        type: "website",
      },
    };
  }
  const title = "Blog | Kona Compass — Live Sonar & Transducer Rotator Tips";
  const description = "Articles on live sonar, motorized transducer rotators, Garmin Panoptix LiveScope, Lowrance ActiveTarget, and Humminbird MEGA Live. Tips for serious anglers.";
  const url = `${siteUrl}/en/blog/`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: url, ru: `${siteUrl}/ru/blog/`, "x-default": url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Kona Compass",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
