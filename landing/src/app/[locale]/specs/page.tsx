"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Specs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const t = useTranslations("Specs");
  const tIndex = useTranslations("Index");
  const common = useTranslations("Common");

  const technicalSpecs = [
    {
      category: t("categories.performance"),
      items: [
        { label: t("labels.aiming_precision"), value: t("items.precision") },
        { label: t("labels.operating_modes"), value: t("items.modes") },
        { label: t("labels.rotation_speed"), value: t("items.speed") },
        { label: t("labels.scanning_range"), value: t("items.range") },
        { label: t("labels.response_time"), value: t("items.backlash") },
      ],
    },
    {
      category: t("categories.physical"),
      items: [
        { label: t("labels.housing"), value: t("items.housing") },
        { label: t("labels.hardware"), value: t("items.hardware") },
        { label: t("labels.weight"), value: t("items.weight") },
        { label: t("labels.load_capacity"), value: t("items.clamping") },
        { label: t("labels.operating_speed"), value: t("items.op_speed") },
      ],
    },
    {
      category: t("categories.electrical"),
      items: [
        { label: t("labels.power_input"), value: t("items.power") },
        { label: t("labels.power_consumption"), value: t("items.consumption") },
        { label: t("labels.waterproofing"), value: t("items.waterproof") },
        { label: t("labels.input_protection"), value: t("items.protection") },
      ],
    },
    {
      category: t("categories.compatibility"),
      items: [
        { label: "Garmin", value: tIndex("compat_garmin_models") },
        { label: "Lowrance", value: tIndex("compat_lowrance_models") },
        { label: "Humminbird", value: tIndex("compat_humminbird_models") },
      ],
    },
  ];

  const kitContents = t.raw("kit") as string[];

  const specsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kona Compass",
    "brand": { "@type": "Brand", "name": "Kona Compass" },
    "description": "Motorized transducer rotator for Garmin Panoptix LiveScope, Lowrance ActiveTarget and Humminbird MEGA Live. Features heading hold, auto search, direction lock, wireless remote, and control pedal.",
    "category": "Fishing Electronics Accessory",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "990",
      "highPrice": "1190",
      "availability": "https://schema.org/PreOrder",
    },
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Housing", "value": "Hermetically sealed marine-grade stainless steel" },
      { "@type": "PropertyValue", "name": "Operating Modes", "value": "Manual, Direction Hold, Auto Search, Direction Lock" },
      { "@type": "PropertyValue", "name": "Controls", "value": "Wireless remote + control pedal (included)" },
      { "@type": "PropertyValue", "name": "Compatibility", "value": "Garmin Panoptix LiveScope LVS32 LVS34 LVS34-IF, Lowrance ActiveTarget AT2 AT2 XL, Humminbird MEGA Live" },
    ],
  };

  return (
    <main id="main-content" className="bg-[#050b11] text-white min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specsJsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.05)_0%,transparent_70%)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-500 font-bold mb-6">
            {t("hero_badge")}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-4xl mx-auto">
            {t("title")}
          </h1>
          <p className="mt-8 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Spec Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {technicalSpecs.map((cat) => (
              <div
                key={cat.category}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 lg:p-10"
              >
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500/80 mb-8 border-b border-white/10 pb-4">
                  {cat.category}
                </h2>
                <dl className="space-y-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2"
                    >
                      <dt className="text-sm text-white/40 font-medium uppercase tracking-wider">
                        {item.label}
                      </dt>
                      <dd className="text-base text-white font-medium border-b border-white/5 sm:border-none pb-2 sm:pb-0 sm:text-right sm:max-w-[55%]">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit Contents */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                {t("box_title")}
              </h2>
              <p className="mt-6 text-lg text-white/50">{t("box_subtitle")}</p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {kitContents.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <svg
                      className="h-5 w-5 text-cyan-500 mt-0.5 flex-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white/80 text-sm leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={`${basePath}/konacompas-old/image-5.png`}
                alt="Kona Compass hardware overview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b11]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Durability */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-white/40">
              {tIndex("build_label")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-white">
              {tIndex("build_title")}
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {(
              tIndex.raw("build_items") as { title: string; desc: string }[]
            ).map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/5 p-6 bg-white/[0.01]"
              >
                <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">
                  {item.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 border-t border-white/5 bg-[#050b11]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-8 text-sm text-white/40">
          <Link href={`/${locale}/compare`} className="hover:text-white transition">
            Compare vs competitors →
          </Link>
          <Link href={`/${locale}/instructions`} className="hover:text-white transition">
            Operating guide →
          </Link>
          <Link href={`/${locale}`} className="hover:text-white transition">
            Join the waitlist →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        id="waitlist"
        className="py-24 lg:py-32 border-t border-white/5 bg-[#050b11]"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-white">
            {tIndex("waitlist_title")}
          </h2>
          <p className="mt-6 text-lg text-white/50 leading-relaxed">
            {tIndex("waitlist_body")}
          </p>
          <div className="mt-12">
            <WaitlistForm className="mx-auto" />
            <p className="mt-4 text-xs text-white/30">{tIndex("waitlist_note")}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-[#050b11]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="relative h-8 w-10 overflow-hidden rounded-sm bg-white/95">
              <Image
                src={`${basePath}/konacompas-old/logo.png`}
                alt="Kona Compass logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-xs uppercase tracking-widest text-white/30">
              {common("footer_copy")}
            </p>
          </div>
          <nav className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/45">
            <Link href={`/${locale}`} className="hover:text-white transition">
              {common("nav.home")}
            </Link>
            <Link href={`/${locale}/compare`} className="hover:text-white transition">
              {common("nav.compare")}
            </Link>
            <Link href={`/${locale}/instructions`} className="hover:text-white transition">
              {common("nav.manual")}
            </Link>
          </nav>
          <nav className="flex flex-wrap gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/45">
            <Link href={`/${locale}/privacy`} className="hover:text-white transition">
              {common("nav.privacy")}
            </Link>
            <Link href={`/${locale}/cookies`} className="hover:text-white transition">
              {common("nav.cookies")}
            </Link>
            <Link href={`/${locale}/terms`} className="hover:text-white transition">
              {common("nav.terms")}
            </Link>
            <Link href={`/${locale}/legal`} className="hover:text-white transition">
              {common("nav.legal")}
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
