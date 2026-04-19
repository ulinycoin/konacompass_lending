import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    return {
      title: "Технические характеристики | Kona Compass Ротатор датчика",
      description: "Ключевые характеристики ротатора Kona Compass: режимы работы, скорость вращения, угол сканирования, совместимость с Garmin, Lowrance, Humminbird. По детальным вопросам — свяжитесь с производителем.",
    };
  }
  return {
    title: "Technical Specifications | Kona Compass Transducer Rotator",
    description: "Key specs for Kona Compass transducer rotator: operating modes, rotation speed, scanning range, Garmin/Lowrance/Humminbird compatibility. For detailed questions contact the manufacturer.",
  };
}

export default function SpecsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
