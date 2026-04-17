import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import LegalDocument from "@/components/LegalDocument";
import { getCookiesCopy } from "../legal-copy";

const locales = ["en", "ru"] as const;

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const copy = getCookiesCopy(locale as "en" | "ru");

  return <LegalDocument locale={locale} {...copy} />;
}
