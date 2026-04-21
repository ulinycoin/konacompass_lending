import type { Metadata } from "next";

const siteUrl = "https://konacompass.com";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    return {
      title: "Инструкция | Kona Compass — режимы работы и управление",
      description: "Руководство по работе с ротатором Kona Compass: ручной режим, удержание курса, автопоиск, режим жёсткой фиксации. Управление педалью и беспроводным пультом. Настройка скорости и угла сектора.",
      alternates: {
        canonical: `${siteUrl}/ru/instructions/`,
        languages: { en: `${siteUrl}/en/instructions/`, ru: `${siteUrl}/ru/instructions/`, "x-default": `${siteUrl}/en/instructions/` },
      },
    };
  }
  return {
    title: "Instructions | Kona Compass Operating Modes & Control Guide",
    description: "How to use Kona Compass motorized transducer rotator: manual mode, heading hold, auto search, direction lock. Pedal control, wireless remote, speed and sector adjustment explained.",
    alternates: {
      canonical: `${siteUrl}/en/instructions/`,
      languages: { en: `${siteUrl}/en/instructions/`, ru: `${siteUrl}/ru/instructions/`, "x-default": `${siteUrl}/en/instructions/` },
    },
  };
}

export default function InstructionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
