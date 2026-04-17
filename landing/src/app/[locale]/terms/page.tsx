import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import LegalDocument from "@/components/LegalDocument";
import { getTermsCopy } from "../legal-copy";

const locales = ["en", "ru"] as const;

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const copy = getTermsCopy(locale as "en" | "ru");

  return <LegalDocument locale={locale} {...copy} />;
}
