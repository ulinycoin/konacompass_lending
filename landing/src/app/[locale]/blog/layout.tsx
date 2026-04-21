import type { Metadata } from "next";

const siteUrl = "https://konacompass.com";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    return {
      title: "Блог | Kona Compass — live sonar и ротаторы датчиков",
      description: "Статьи о live sonar, моторизованных ротаторах датчиков, Garmin Panoptix LiveScope, Lowrance ActiveTarget и Humminbird MEGA Live. Советы для рыболовов.",
      alternates: {
        canonical: `${siteUrl}/ru/blog/`,
        languages: { en: `${siteUrl}/en/blog/`, ru: `${siteUrl}/ru/blog/`, "x-default": `${siteUrl}/en/blog/` },
      },
    };
  }
  return {
    title: "Blog | Kona Compass — Live Sonar & Transducer Rotator Tips",
    description: "Articles on live sonar, motorized transducer rotators, Garmin Panoptix LiveScope, Lowrance ActiveTarget, and Humminbird MEGA Live. Tips for serious anglers.",
    alternates: {
      canonical: `${siteUrl}/en/blog/`,
      languages: { en: `${siteUrl}/en/blog/`, ru: `${siteUrl}/ru/blog/`, "x-default": `${siteUrl}/en/blog/` },
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
