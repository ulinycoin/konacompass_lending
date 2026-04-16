"use client";

import Image from "next/image";
import { use } from "react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Compare({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const t = useTranslations("Compare");
  const tIndex = useTranslations("Index");
  const common = useTranslations("Common");

  const comparisonData = [
    {
      feature: t("table.precision"),
      konaValue: t("table.precision"),
      premium: t("competitors.precision_premium"),
      manual: t("competitors.precision_manual"),
    },
    {
      feature: t("table.compatibility"),
      konaValue: t("table.compatibility"),
      premium: t("competitors.compat_premium"),
      manual: t("competitors.compat_manual"),
    },
    {
      feature: t("table.modes"),
      konaValue: t("table.modes"),
      premium: t("competitors.modes_premium"),
      manual: t("competitors.modes_manual"),
    },
    {
      feature: t("table.control"),
      konaValue: t("table.control"),
      premium: t("competitors.control_premium"),
      manual: t("competitors.control_manual"),
    },
    {
      feature: t("table.build"),
      konaValue: t("table.build"),
      premium: t("competitors.build_premium"),
      manual: t("competitors.build_manual"),
    },
    {
      feature: t("table.stability"),
      konaValue: t("table.stability"),
      premium: t("competitors.stability_premium"),
      manual: t("competitors.stability_manual"),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kona Compass vs Competitors | Live Sonar Rotator Comparison",
    description:
      "Compare Kona Compass with premium motorized mounts and manual poles.",
    mainEntity: {
      "@type": "Table",
      about: "Comparison of live sonar transducer rotators",
    },
  };

  return (
    <main className="bg-[#050b11] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.34em] text-cyan-400/80 mb-6">
            {t("hero_badge")}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-[1.1]">
            {t("title")}
          </h1>
          <p className="mt-8 text-lg leading-8 text-white/60 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="py-6 px-6 font-medium text-white/40 uppercase tracking-widest text-[10px] w-[25%]">
                      {t("table.feature")}
                    </th>
                    <th className="py-6 px-6 font-medium text-cyan-400 uppercase tracking-widest text-[10px] w-[25%]">
                      {t("table.kona")}
                    </th>
                    <th className="py-6 px-6 font-medium text-white/40 uppercase tracking-widest text-[10px] w-[25%]">
                      {t("table.premium")}
                    </th>
                    <th className="py-6 px-6 font-medium text-white/40 uppercase tracking-widest text-[10px] w-[25%]">
                      {t("table.manual")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonData.map((row) => (
                    <tr
                      key={row.feature}
                      className="hover:bg-white/[0.01] transition"
                    >
                      <td className="py-6 px-6 font-medium text-white">
                        {row.feature}
                      </td>
                      <td className="py-6 px-6 text-cyan-100 font-medium">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {row.konaValue}
                        </div>
                      </td>
                      <td className="py-6 px-6 text-white/40">{row.premium}</td>
                      <td className="py-6 px-6 text-white/20 italic">
                        {row.manual}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-24 bg-[#071019]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                {tIndex("compat_title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/60">
                {tIndex("compat_body")}
              </p>
              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <div className="flex-none h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">
                    1
                  </div>
                  <p className="text-white/80">
                    <span className="text-white font-semibold">Garmin — </span>
                    {tIndex("compat_garmin_models")}
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-none h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">
                    2
                  </div>
                  <p className="text-white/80">
                    <span className="text-white font-semibold">Lowrance — </span>
                    {tIndex("compat_lowrance_models")}
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-none h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">
                    3
                  </div>
                  <p className="text-white/80">
                    <span className="text-white font-semibold">Humminbird — </span>
                    {tIndex("compat_humminbird_models")}
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 aspect-video lg:aspect-square">
              <Image
                src={`${basePath}/konacompas-old/image-4.png`}
                alt="Kona Compass installed on a boat"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-24 lg:py-32 bg-[#050b11]">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-white">
            {tIndex("waitlist_title")}
          </h2>
          <p className="mt-6 text-lg text-white/60">{tIndex("waitlist_body")}</p>
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
            <p className="text-xs uppercase tracking-widest text-white/40">
              {common("footer_copy")}
            </p>
          </div>
          <nav className="flex gap-8 text-xs uppercase tracking-widest text-white/40">
            <a href={`/${locale}`} className="hover:text-white transition">
              {common("nav.home")}
            </a>
            <a href={`/${locale}/specs`} className="hover:text-white transition">
              {common("nav.specs")}
            </a>
            <a
              href="mailto:konacompas@gmail.com"
              className="hover:text-white transition"
            >
              {common("contact")}
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
