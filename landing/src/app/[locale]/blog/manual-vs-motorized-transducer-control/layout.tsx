import type { Metadata } from "next";

const siteUrl = "https://konacompass.com";
const slug = "manual-vs-motorized-transducer-control";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    return {
      title: "Ручное vs моторизованное управление датчиком: что нужно знать рыболовам | Kona Compass",
      description: "Прямое сравнение ручных штанг и моторизованных ротаторов для live sonar. Время реакции, точность и удержание курса для Garmin LiveScope, Lowrance ActiveTarget, Humminbird MEGA Live.",
      alternates: {
        canonical: `${siteUrl}/ru/blog/${slug}/`,
        languages: { en: `${siteUrl}/en/blog/${slug}/`, ru: `${siteUrl}/ru/blog/${slug}/`, "x-default": `${siteUrl}/en/blog/${slug}/` },
      },
    };
  }
  return {
    title: "Manual vs Motorized Transducer Control: What Tournament Anglers Need to Know | Kona Compass",
    description: "A direct comparison of manual transducer poles and motorized rotators for live sonar. Reaction time, precision, heading hold, and what changes for tournament anglers.",
    alternates: {
      canonical: `${siteUrl}/en/blog/${slug}/`,
      languages: { en: `${siteUrl}/en/blog/${slug}/`, ru: `${siteUrl}/ru/blog/${slug}/`, "x-default": `${siteUrl}/en/blog/${slug}/` },
    },
  };
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
