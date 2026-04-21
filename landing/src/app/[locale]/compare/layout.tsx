import type { Metadata } from "next";

const siteUrl = "https://konacompass.com";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    return {
      title: "Сравнение ротаторов | Kona Compass vs конкуренты",
      description: "Сравните Kona Compass с брендовыми креплениями и ручными штангами. Удержание курса, совместимость с Garmin Panoptix, Lowrance ActiveTarget, Humminbird MEGA Live, конструкция из нержавеющей стали.",
      alternates: {
        canonical: `${siteUrl}/ru/compare/`,
        languages: { en: `${siteUrl}/en/compare/`, ru: `${siteUrl}/ru/compare/`, "x-default": `${siteUrl}/en/compare/` },
      },
    };
  }
  return {
    title: "Rotator Comparison | Kona Compass vs Brand Mounts & Manual Poles",
    description: "Compare Kona Compass motorized transducer rotator against premium brand mounts and manual poles. Heading control, multi-platform compatibility, stainless steel build, auto search — side by side.",
    alternates: {
      canonical: `${siteUrl}/en/compare/`,
      languages: { en: `${siteUrl}/en/compare/`, ru: `${siteUrl}/ru/compare/`, "x-default": `${siteUrl}/en/compare/` },
    },
  };
}

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
