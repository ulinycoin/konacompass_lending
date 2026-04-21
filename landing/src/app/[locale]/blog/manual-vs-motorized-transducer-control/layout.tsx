import type { Metadata } from "next";

const siteUrl = "https://konacompass.com";
const ogImage = `${siteUrl}/branding/og-image.png`;
const slug = "manual-vs-motorized-transducer-control";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    const title = "Ручное vs моторизованное управление датчиком | Kona Compass";
    const description = "Сравнение ручных штанг и моторизованных ротаторов для live sonar. Время реакции, точность и удержание курса для Garmin LiveScope, Lowrance ActiveTarget.";
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
  const title = "Manual vs Motorized Transducer Control | Kona Compass";
  const description = "Direct comparison of manual poles and motorized rotators for live sonar. Reaction time, precision, heading hold — when the upgrade changes outcomes on water.";
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
