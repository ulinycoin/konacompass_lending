import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import ConsentBanner from "@/components/ConsentBanner";

const siteUrl = "https://konacompass.com";
const ogImage = `${siteUrl}/branding/og-image.png`;

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'ru') {
    const title = "Kona Compass | Ротатор датчика для Panoptix LiveScope и ActiveTarget";
    const description = "Электрический ротатор датчика live sonar для Garmin Panoptix LiveScope, Lowrance ActiveTarget и Humminbird MEGA Live. Удержание курса, автопоиск, беспроводной пульт. €990–1190.";
    return {
      title,
      description,
      alternates: {
        canonical: `${siteUrl}/ru`,
        languages: { "en": `${siteUrl}/en`, "ru": `${siteUrl}/ru`, "x-default": `${siteUrl}/en` },
      },
      openGraph: {
        title,
        description,
        url: `${siteUrl}/ru`,
        siteName: "Kona Compass",
        images: [{ url: ogImage, width: 1200, height: 630, alt: "Kona Compass — ротатор датчика live sonar" }],
        locale: "ru_RU",
        type: "website",
      },
      twitter: { card: "summary_large_image", title, description, images: [ogImage] },
    };
  }
  const title = "Kona Compass | Motorized Transducer Rotator for Live Sonar";
  const description = "Motorized live sonar transducer rotator for Garmin Panoptix LiveScope, Lowrance ActiveTarget & Humminbird MEGA Live. Heading hold, auto search, wireless remote.";
  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/en`,
      languages: { "en": `${siteUrl}/en`, "ru": `${siteUrl}/ru`, "x-default": `${siteUrl}/en` },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/en`,
      siteName: "Kona Compass",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Kona Compass motorized transducer rotator for live sonar" }],
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
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
