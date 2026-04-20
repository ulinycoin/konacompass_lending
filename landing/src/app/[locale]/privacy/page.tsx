import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import LegalDocument from "@/components/LegalDocument";
import { getPrivacyCopy } from "../legal-copy";

const locales = ["en", "ru"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const copy = getPrivacyCopy(locale as "en" | "ru");

  return <LegalDocument locale={locale} {...copy} />;
}
