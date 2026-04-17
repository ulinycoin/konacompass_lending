import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import LegalDocument from "@/components/LegalDocument";
import { getLegalNoticeCopy } from "../legal-copy";

const locales = ["en", "ru"] as const;

export default async function LegalNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const copy = getLegalNoticeCopy(locale as "en" | "ru");

  return <LegalDocument locale={locale} {...copy} />;
}
