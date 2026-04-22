import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import ConsentBanner from "@/components/ConsentBanner";
import "../globals.css";

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
    const title = "Ротатор датчика live sonar для Garmin и Lowrance | Kona Compass";
    const description = "Моторизованный ротатор датчика live sonar для Garmin Panoptix LiveScope, Lowrance ActiveTarget и Humminbird MEGA Live. Удержание курса, автопоиск, пульт.";
    const url = `${siteUrl}/ru/`;
    return {
      title,
      description,
      alternates: {
        canonical: url,
        languages: { "en": `${siteUrl}/en/`, "ru": url, "x-default": `${siteUrl}/en/` },
      },
      openGraph: {
        title,
        description,
        url,
        siteName: "Kona Compass",
        images: [{ url: ogImage, width: 1200, height: 630, alt: "Kona Compass — ротатор датчика live sonar" }],
        locale: "ru_RU",
        type: "website",
      },
      twitter: { card: "summary_large_image", title, description, images: [ogImage] },
    };
  }
  const title = "Motorized Transducer Rotator for Live Sonar | Kona Compass";
  const description = "Motorized transducer rotator for Garmin LiveScope, Lowrance ActiveTarget & Humminbird MEGA Live. Heading hold, auto search, wireless remote. Join the waitlist.";
  const url = `${siteUrl}/en/`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { "en": url, "ru": `${siteUrl}/ru/`, "x-default": url },
    },
    openGraph: {
      title,
      description,
      url,
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
    <html lang={locale} translate="no">
      <head>
        <meta name="google-site-verification" content="v_gWYPGKeWcwl3vXAyGbjwNNa4IiY1MWGs815JC1wWI" />
        <meta name="msvalidate.01" content="763CFC8CA4F13B4D2C8A131618CB3670" />
        <meta name="google" content="notranslate" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <div data-locale={locale} id="root">
            {children}
            <ConsentBanner />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
