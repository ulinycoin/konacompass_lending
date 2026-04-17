import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import ConsentBanner from "@/components/ConsentBanner";

export const metadata: Metadata = {
  title: "Kona Compass | Elite Orientation System",
  description: "Kona Compass is a magnificent, professional-grade rotator with Elite Integrated Orientation System, built for the best transducer control on the water.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }];
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
      <div lang={locale} data-locale={locale}>
        {children}
        <ConsentBanner />
      </div>
    </NextIntlClientProvider>
  );
}
