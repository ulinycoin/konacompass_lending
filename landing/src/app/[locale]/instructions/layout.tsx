import type { Metadata } from "next";

const siteUrl = "https://konacompass.com";
const ogImage = `${siteUrl}/branding/og-image.png`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    const title = "Инструкция | Kona Compass — режимы работы и управление";
    const description = "Режимы ротатора Kona Compass: ручной, удержание курса, автопоиск, фиксация. Управление педалью и беспроводным пультом, настройка скорости.";
    const url = `${siteUrl}/ru/instructions/`;
    return {
      title,
      description,
      alternates: {
        canonical: url,
        languages: { en: `${siteUrl}/en/instructions/`, ru: url, "x-default": `${siteUrl}/en/instructions/` },
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
  const title = "Instructions | Kona Compass Operating Modes & Control Guide";
  const description = "Kona Compass modes: manual, heading hold, auto search, direction lock. Pedal and wireless remote control, speed and sector angle adjustment.";
  const url = `${siteUrl}/en/instructions/`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: url, ru: `${siteUrl}/ru/instructions/`, "x-default": url },
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

export default function InstructionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
