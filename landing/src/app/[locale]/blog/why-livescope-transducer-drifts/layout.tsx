import type { Metadata } from "next";

const siteUrl = "https://konacompass.com";
const slug = "why-livescope-transducer-drifts";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    return {
      title: "Почему датчик LiveScope постоянно смещается — и как это исправить | Kona Compass",
      description: "Ручные крепления датчика не удерживают курс. Любое течение, волна или поворот лодки сбивают live sonar с цели. Объясняем причину и что реально помогает.",
      alternates: {
        canonical: `${siteUrl}/ru/blog/${slug}/`,
        languages: { en: `${siteUrl}/en/blog/${slug}/`, ru: `${siteUrl}/ru/blog/${slug}/`, "x-default": `${siteUrl}/en/blog/${slug}/` },
      },
    };
  }
  return {
    title: "Why Your LiveScope Transducer Keeps Drifting — and How to Fix It | Kona Compass",
    description: "Manual transducer mounts have no heading hold. Every current, wave, and boat turn moves your live sonar off target. Here is why it happens and what actually fixes it.",
    alternates: {
      canonical: `${siteUrl}/en/blog/${slug}/`,
      languages: { en: `${siteUrl}/en/blog/${slug}/`, ru: `${siteUrl}/ru/blog/${slug}/`, "x-default": `${siteUrl}/en/blog/${slug}/` },
    },
  };
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
