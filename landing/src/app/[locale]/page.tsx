"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { useTranslations } from "next-intl";
import WaitlistForm from "@/components/WaitlistForm";
import Header from "@/components/Header";
import SocialIcons from "@/components/SocialIcons";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// ─── Hero ─────────────────────────────────────────────────────────────────────

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kona Compass",
  "brand": { "@type": "Brand", "name": "Kona Compass" },
  "description": "Motorized transducer rotator for Garmin Panoptix LiveScope, Lowrance ActiveTarget and Humminbird MEGA Live. Features heading hold, auto search, direction lock, wireless remote, and control pedal.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "990",
    "highPrice": "1190",
    "offerCount": "2",
    "availability": "https://schema.org/PreOrder",
  },
  "category": "Fishing Electronics Accessory",
};

function Hero() {
  const t = useTranslations("Index");
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "calc(100vh - 57px)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.18),rgba(3,7,18,0.72))]" />
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Image
          src={`${basePath}/konacompas-old/image-3.webp`}
          alt="Kona Compass motorized transducer rotator for live sonar — installed on a boat"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,17,0.97)_0%,rgba(5,11,17,0.78)_26%,rgba(5,11,17,0.28)_56%,rgba(5,11,17,0.10)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,11,17,1)_0%,rgba(5,11,17,0.90)_28%,rgba(5,11,17,0.18)_66%,rgba(5,11,17,0.06)_100%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl items-end px-5 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20" style={{ minHeight: "calc(100vh - 57px)" }}>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.34em] text-cyan-400/80">
            {t("waitlist_badge")}
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[82px]">
            {t("title")}
          </h1>
          <div className="mt-8 border-l-2 border-cyan-500/30 pl-6">
            <p className="text-lg font-medium leading-8 text-white/90 sm:text-xl">
              {t("subtitle")}
            </p>
            <p className="mt-4 text-base leading-7 text-white/65">
              {t("description")}
            </p>
          </div>
          <WaitlistForm className="mt-10 max-w-md" />
          <p className="mt-4 text-xs text-white/55">
            {t("hero_limited")} {t("hero_social_proof")}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Problem ──────────────────────────────────────────────────────────────────

function Problem() {
  const t = useTranslations("Index");
  const bullets = t.raw("problem_bullets") as string[];
  return (
    <section className="border-t border-white/5 bg-[#071019] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
              {t("problem_label")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {t("problem_title")}
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-white/60 lg:text-lg">
              {t("problem_body")}
            </p>
            <ul className="mt-8 space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan-500/60" />
                  <span className="text-white/70">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const t = useTranslations("Index");
  const modes = t.raw("how_modes") as { name: string; desc: string }[];
  const controls = t.raw("how_controls") as { label: string; desc: string }[];

  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Title row */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
              {t("how_label")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {t("how_title")}
            </h2>
          </div>
          <p className="text-base leading-7 text-white/60 lg:text-lg lg:pt-6">
            {t("how_body")}
          </p>
        </div>

        {/* Modes + image */}
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              {t("how_modes_title")}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {modes.map((mode, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-6"
                >
                  <p className="text-sm font-semibold text-white">{mode.name}</p>
                  <p className="mt-2 text-sm leading-6 text-white/50">{mode.desc}</p>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="mt-10">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                {t("how_controls_title")}
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {controls.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4"
                  >
                    <p className="text-sm font-semibold text-cyan-400">{c.label}</p>
                    <p className="mt-1 text-sm text-white/50">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 lg:aspect-auto lg:h-full lg:min-h-[480px]">
            <Image
              src={`${basePath}/konacompas-old/image-4.webp`}
              alt="Kona Compass transducer rotator — heading hold and auto search modes in operation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b11]/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Video ────────────────────────────────────────────────────────────────────

const YT_ID = "cJWNJEUY7ug";

function YouTubeFacade() {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${YT_ID}?rel=0&modestbranding=1&cc_load_policy=1&autoplay=1`}
          title="Kona Compass in action"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      aria-label="Play video: Kona Compass in action"
      className="group relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
      style={{ paddingTop: "56.25%" }}
    >
      <img
        src={`https://i.ytimg.com/vi/${YT_ID}/maxresdefault.jpg`}
        alt="Kona Compass in action — video preview"
        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[#050b11]/40 transition group-hover:bg-[#050b11]/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-[#050b11]/60 transition group-hover:bg-[#050b11]/80 sm:h-20 sm:w-20">
          <svg className="h-6 w-6 translate-x-0.5 text-white sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function Video() {
  const t = useTranslations("Index");
  return (
    <section className="border-t border-white/5 bg-[#071019] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
              {t("video_label")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {t("video_title")}
            </h2>
          </div>
          <p className="text-base leading-7 text-white/60 lg:text-lg">
            {t("video_subtitle")}
          </p>
        </div>

        <YouTubeFacade />
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Pricing() {
  const t = useTranslations("Index");
  return (
    <section className="border-t border-white/5 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: text */}
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
              {t("pricing_label")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {t("pricing_title")}
            </h2>
            <p className="mt-6 text-base leading-7 text-white/60 lg:text-lg">
              {t("pricing_body")}
            </p>
          </div>

          {/* Right: spot counter + CTA */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 lg:p-10">
            <div className="mb-8 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-300">
              {t("pricing_spots")}
            </div>

            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {t("pricing_card_heading")}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/55">
              {t("pricing_spots_note")}
            </p>

            <a
              href="#waitlist"
              className="cta-glow mt-8 flex w-full items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-600/15 py-3 text-sm font-bold uppercase tracking-widest text-cyan-400 transition hover:bg-cyan-600/25"
            >
              {t("pricing_cta")}
            </a>
            <p className="mt-3 text-center text-xs text-white/55">
              {t("pricing_hint")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Compatibility ────────────────────────────────────────────────────────────

function Compatibility() {
  const t = useTranslations("Index");

  return (
    <section id="compatibility" className="border-y border-white/5 bg-[#071019] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
              {t("compat_label")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {t("compat_title")}
            </h2>
          </div>
          <p className="text-base leading-7 text-white/60 lg:text-lg">
            {t("compat_body")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {/* Garmin */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-8">
            <div className="mb-6 flex h-10 items-center">
              <Image
                src={`${basePath}/brand-logos/garmin.svg`}
                alt="Garmin"
                width={90}
                height={28}
                className="object-contain brightness-0 invert opacity-70"
              />
            </div>
            <p className="text-xs uppercase tracking-wider text-white/60">Panoptix LiveScope</p>
            <p className="mt-2 text-sm font-medium text-white/80">
              {t("compat_garmin_models")}
            </p>
          </div>

          {/* Lowrance */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-8">
            <div className="mb-6 flex h-10 items-center">
              <p className="text-lg font-bold uppercase tracking-[0.18em] text-white/60">
                Lowrance
              </p>
            </div>
            <p className="text-xs uppercase tracking-wider text-white/60">ActiveTarget</p>
            <p className="mt-2 text-sm font-medium text-white/80">
              {t("compat_lowrance_models")}
            </p>
          </div>

          {/* Humminbird */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-8">
            <div className="mb-6 flex h-10 items-center">
              <Image
                src={`${basePath}/brand-logos/humminbird.svg`}
                alt="Humminbird"
                width={120}
                height={28}
                className="object-contain brightness-0 invert opacity-70"
              />
            </div>
            <p className="text-xs uppercase tracking-wider text-white/60">MEGA Live</p>
            <p className="mt-2 text-sm font-medium text-white/80">
              {t("compat_humminbird_models")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Build ────────────────────────────────────────────────────────────────────

function Build() {
  const t = useTranslations("Index");
  const items = t.raw("build_items") as { title: string; desc: string }[];

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 lg:order-last">
            <Image
              src={`${basePath}/konacompas-old/image-5.webp`}
              alt="Kona Compass hardware detail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b11]/50 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
              {t("build_label")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {t("build_title")}
            </h2>
            <div className="mt-10 space-y-8">
              {items.map((item, i) => (
                <div key={i} className="flex gap-5">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-400">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1.5 text-sm leading-6 text-white/55">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const t = useTranslations("Index");
  const items = t.raw("faq_items") as { q: string; a: string }[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return (
    <section id="faq" className="border-t border-white/5 bg-[#071019] py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-white/60">
            {t("faq_label")}
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t("faq_title")}
          </h2>
        </div>

        <div className="grid gap-px bg-white/5 overflow-hidden rounded-2xl border border-white/5 lg:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="bg-[#071019] p-8">
              <p className="font-semibold text-white">{item.q}</p>
              <p className="mt-3 text-sm leading-6 text-white/55">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Blog Teaser ──────────────────────────────────────────────────────────────

const blogTeaserContent = {
  en: {
    label: "From the blog", title: "Live sonar guides.", all: "All articles →",
    posts: [
      { slug: "why-livescope-transducer-drifts", h: "Why Your LiveScope Transducer Keeps Drifting — and How to Fix It", excerpt: "Manual mounts have no heading hold. Every current and boat turn moves your transducer off target. Here is what actually fixes it.", read: "Read →" },
      { slug: "manual-vs-motorized-transducer-control", h: "Manual vs Motorized Transducer Control: What Tournament Anglers Need to Know", excerpt: "A direct comparison of manual poles and motorized rotators — reaction time, precision, and what changes when heading hold enters the equation.", read: "Read →" },
    ],
  },
  ru: {
    label: "Из блога", title: "Гайды по live sonar.", all: "Все статьи →",
    posts: [
      { slug: "why-livescope-transducer-drifts", h: "Почему датчик LiveScope постоянно смещается — и как это исправить", excerpt: "Ручные крепления не удерживают направление. Каждое течение и манёвр лодки сбивают live sonar с цели. Разбираем, что реально помогает.", read: "Читать →" },
      { slug: "manual-vs-motorized-transducer-control", h: "Ручное vs моторизованное управление датчиком: что нужно знать спортивным рыболовам", excerpt: "Прямое сравнение ручных штанг и моторизованных ротаторов — время реакции, точность и что меняется с удержанием курса.", read: "Читать →" },
    ],
  },
} as const;

function BlogTeaser({ locale }: { locale: string }) {
  const c = blogTeaserContent[locale as keyof typeof blogTeaserContent] ?? blogTeaserContent.en;

  return (
    <section className="border-t border-white/5 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">{c.label}</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">{c.title}</h2>
          </div>
          <Link href={`/${locale}/blog`} className="hidden text-sm text-cyan-400 hover:text-cyan-300 transition sm:block">
            {c.all}
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {c.posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition hover:border-white/10 hover:bg-white/[0.04]"
            >
              <p className="mb-3 text-xs uppercase tracking-widest text-cyan-400/70">Live Sonar</p>
              <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-cyan-300 transition">{post.h}</h3>
              <p className="mt-3 text-sm text-white/60 leading-6">{post.excerpt}</p>
              <p className="mt-6 text-sm text-cyan-400 group-hover:text-cyan-300 transition">{post.read}</p>
            </Link>
          ))}
        </div>

        <Link href={`/${locale}/blog`} className="mt-6 block text-sm text-cyan-400 hover:text-cyan-300 transition sm:hidden">
          {c.all}
        </Link>
      </div>
    </section>
  );
}

// ─── Waitlist CTA ─────────────────────────────────────────────────────────────

function WaitlistCTA() {
  const t = useTranslations("Index");

  return (
    <section id="waitlist" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {t("waitlist_title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/60">
              {t("waitlist_body")}
            </p>
            <div className="mt-10">
              <WaitlistForm className="max-w-md" />
              <p className="mt-4 text-xs text-white/55">{t("waitlist_note")}</p>
            </div>
          </div>

          {/* Contacts */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-10">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              Direct contact
            </p>
            <div className="space-y-7">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/60">
                  Email
                </p>
                <a
                  href="mailto:contact@konacompass.com"
                  className="text-xl font-medium text-white transition hover:text-cyan-400"
                >
                  contact@konacompass.com
                </a>
              </div>
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/60">
                  Social
                </p>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ locale }: { locale: string }) {
  const common = useTranslations("Common");

  return (
    <footer className="border-t border-white/10 bg-[#050b11] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.5fr_0.6fr_0.7fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-14 items-center justify-center overflow-hidden rounded-sm bg-white/95">
                <Image
                  src={`${basePath}/konacompas-old/logo.webp`}
                  alt="Kona Compass logo"
                  width={48}
                  height={32}
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                  {common("product_name")}
                </p>
                <p className="mt-0.5 text-sm text-white/55">{common("tagline")}</p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">
              {common("footer_desc")}
            </p>
          </div>

          {/* Convince me */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-white/60">
              {common("footer_learn")}
            </p>
            <div className="space-y-3 text-sm text-white/55">
              <p>
                <Link href={`/${locale}/compare`} className="transition hover:text-white">
                  {common("nav.compare")}
                </Link>
              </p>
              <p>
                <Link href={`/${locale}/specs`} className="transition hover:text-white">
                  {common("nav.specs")}
                </Link>
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-white/60">
              {common("footer_contact")}
            </p>
            <div className="space-y-3 text-sm text-white/55">
              <p>
                <a href="mailto:contact@konacompass.com" className="transition hover:text-white">
                  contact@konacompass.com
                </a>
              </p>
              <SocialIcons className="pt-1" />
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-white/60">
              {common("footer_legal")}
            </p>
            <div className="space-y-3 text-sm text-white/55">
              <p>
                <Link href={`/${locale}/privacy`} className="transition hover:text-white">
                  {common("nav.privacy")}
                </Link>
              </p>
              <p>
                <Link href={`/${locale}/cookies`} className="transition hover:text-white">
                  {common("nav.cookies")}
                </Link>
              </p>
              <p>
                <Link href={`/${locale}/terms`} className="transition hover:text-white">
                  {common("nav.terms")}
                </Link>
              </p>
              <p>
                <Link href={`/${locale}/legal`} className="transition hover:text-white">
                  {common("nav.legal")}
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-xs text-white/55">© 2026 Kona Compass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  return (
    <main id="main-content" className="bg-[#050b11] text-white">
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <Video />
      <Compatibility />
      <Build />
      <Pricing />
      <FAQ />
      <BlogTeaser locale={locale} />
      <WaitlistCTA />
      <Footer locale={locale} />
    </main>
  );
}
