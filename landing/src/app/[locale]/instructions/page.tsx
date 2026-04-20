"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";
import SocialIcons from "@/components/SocialIcons";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function InstructionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const t = useTranslations("Instructions");
  const tIndex = useTranslations("Index");
  const common = useTranslations("Common");

  const modesData = tIndex.raw("how_modes") as { name: string; desc: string }[];
  const quickStartItems = t.raw("quick_start_items") as string[];
  const modeActivations = t.raw("mode_activations") as string[];

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to use Kona Compass motorized transducer rotator",
    "description": "How to control the Kona Compass live sonar transducer rotator: switching modes, heading hold, auto search, direction lock, and adjusting rotation speed.",
    "tool": [
      { "@type": "HowToTool", "name": "Kona Compass rotator unit" },
      { "@type": "HowToTool", "name": "Wireless remote control" },
      { "@type": "HowToTool", "name": "Control pedal" },
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Power on — Manual Mode",
        "text": "On power-on the device enters Manual Mode automatically. Use the control pedal to rotate the transducer left or right.",
      },
      {
        "@type": "HowToStep",
        "name": "Activate Direction Hold (heading hold)",
        "text": "Short-press the main button to engage Direction Hold. The rotator locks onto the current heading and corrects automatically for current and wind.",
      },
      {
        "@type": "HowToStep",
        "name": "Activate Auto Search",
        "text": "Hold the main button for 2 seconds to start Auto Search. The rotator sweeps a configurable sector automatically without continuous input.",
      },
      {
        "@type": "HowToStep",
        "name": "Activate Direction Lock",
        "text": "Hold the main button for 3 seconds to engage Direction Lock. Locks a precise heading for repeatable, fixed positioning.",
      },
      {
        "@type": "HowToStep",
        "name": "Adjust rotation speed",
        "text": "Click the Right button to increase speed level; hold the Right button to decrease. Five levels available.",
      },
      {
        "@type": "HowToStep",
        "name": "Adjust Auto Search sector width",
        "text": "In Auto Search mode, click the Right button to widen the sweep sector; hold to narrow it.",
      },
    ],
  };

  return (
    <main id="main-content" className="min-h-screen bg-[#050b11] text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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

      {/* Visual */}
      <section className="py-12 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={`${basePath}/konacompas-old/image-4.png`}
              alt="Kona Compass controls overview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b11]/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-bold">
                {t("overview_badge")}
              </p>
              <h2 className="text-2xl font-semibold text-white mt-2">
                {t("overview_title")}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start + Modes */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-6">
                {t("section_basics")}
              </p>
              <h2 className="text-3xl font-semibold text-white">
                {t("quick_start")}
              </h2>
              <div className="mt-8 space-y-6">
                {quickStartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-cyan-500 font-bold text-sm">
                      0{idx + 1}
                    </span>
                    <p className="text-white/60 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-6">
                {t("section_intelligence")}
              </p>
              <h2 className="text-3xl font-semibold text-white mb-10">
                {t("modes_title")}
              </h2>
              <div className="grid gap-6">
                {modesData.map((mode, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition"
                  >
                    <div className="flex justify-between items-baseline mb-4 gap-4 flex-wrap">
                      <h3 className="text-xl font-semibold text-white">
                        {mode.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold">
                        {modeActivations[i]}
                      </span>
                    </div>
                    <p className="text-white/50 leading-relaxed">{mode.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adjustments */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/5 p-10 bg-[#050b11]/40">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-500 font-bold mb-6">
                {t("section_velocity")}
              </p>
              <h2 className="text-2xl font-semibold text-white mb-6">
                {t("speed_title")}
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                {t("speed_desc")}
              </p>
              <div className="space-y-4">
                <div className="flex justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">
                    {t("speed_decrease")}
                  </span>
                  <span className="text-white text-sm font-medium">
                    {t("speed_decrease_action")}
                  </span>
                </div>
                <div className="flex justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">
                    {t("speed_increase")}
                  </span>
                  <span className="text-white text-sm font-medium">
                    {t("speed_increase_action")}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 p-10 bg-[#050b11]/40">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-500 font-bold mb-6">
                {t("section_coverage")}
              </p>
              <h2 className="text-2xl font-semibold text-white mb-6">
                {t("sector_title")}
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                {t("sector_desc")}
              </p>
              <div className="space-y-4">
                <div className="flex justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">
                    {t("sector_decrease")}
                  </span>
                  <span className="text-white text-sm font-medium">
                    {t("sector_decrease_action")}
                  </span>
                </div>
                <div className="flex justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">
                    {t("sector_increase")}
                  </span>
                  <span className="text-white text-sm font-medium">
                    {t("sector_increase_action")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & CTA */}
      <section id="waitlist" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-4xl font-semibold text-white leading-tight">
                {tIndex("waitlist_title")}
              </h2>
              <p className="mt-8 text-lg text-white/50 leading-relaxed">
                {tIndex("waitlist_body")}
              </p>
              <div className="mt-12">
                <WaitlistForm className="max-w-md" />
                <p className="mt-4 text-xs text-white/30">
                  {tIndex("waitlist_note")}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-10">
              <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-8">
                {t("contact_title")}
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">
                    {t("contact_email")}
                  </p>
                  <a
                    href="mailto:contact@konacompass.com"
                    className="text-xl text-white font-medium hover:text-cyan-400 transition"
                  >
                    contact@konacompass.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-3">
                    {t("contact_social")}
                  </p>
                  <SocialIcons />
                </div>
              </div>
            </div>
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
