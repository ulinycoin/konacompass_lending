import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import ConsentBanner from "@/components/ConsentBanner";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    return {
      title: "Kona Compass | Ротатор датчика для Panoptix LiveScope и ActiveTarget",
      description: "Электрический ротатор датчика live sonar для Garmin Panoptix LiveScope, Lowrance ActiveTarget и Humminbird MEGA Live. Удержание курса, автопоиск, беспроводной пульт. €990–1190.",
    };
  }
  return {
    title: "Kona Compass | Motorized Transducer Rotator for Live Sonar",
    description: "Motorized transducer rotator for Garmin Panoptix LiveScope, Lowrance ActiveTarget & Humminbird MEGA Live. Heading hold, auto search, wireless remote. €990–1190.",
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div lang={locale} data-locale={locale} id="root">
        {children}
        <ConsentBanner />
      </div>
    </NextIntlClientProvider>
  );
}
