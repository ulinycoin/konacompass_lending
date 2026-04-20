"use client";

import Link from "next/link";
import { use } from "react";
import Header from "@/components/Header";

const posts = {
  en: [
    {
      slug: "manual-vs-motorized-transducer-control",
      title: "Manual vs Motorized Transducer Control: What Tournament Anglers Need to Know",
      excerpt: "A direct comparison of manual poles and motorized rotators — reaction time, precision, and what changes when heading hold enters the equation.",
      date: "April 2026",
      readTime: "6 min read",
      tag: "Live Sonar",
    },
    {
      slug: "why-livescope-transducer-drifts",
      title: "Why Your LiveScope Transducer Keeps Drifting — and How to Fix It",
      excerpt: "Manual transducer mounts have no heading hold. Every current, wave, and boat turn moves your live sonar off target. Here is why it happens and what actually fixes it.",
      date: "April 2026",
      readTime: "5 min read",
      tag: "Live Sonar",
    },
  ],
  ru: [
    {
      slug: "manual-vs-motorized-transducer-control",
      title: "Ручное vs моторизованное управление датчиком: что нужно знать спортивным рыболовам",
      excerpt: "Прямое сравнение ручных штанг и моторизованных ротаторов — время реакции, точность и что меняется, когда в уравнении появляется удержание курса.",
      date: "Апрель 2026",
      readTime: "6 мин",
      tag: "Live Sonar",
    },
    {
      slug: "why-livescope-transducer-drifts",
      title: "Почему датчик LiveScope постоянно смещается — и как это исправить",
      excerpt: "Ручные крепления не удерживают направление. Каждое течение, волна и манёвр лодки сбивают live sonar с цели. Разбираем причину и что реально помогает.",
      date: "Апрель 2026",
      readTime: "5 мин",
      tag: "Live Sonar",
    },
  ],
};

const ui = {
  en: {
    label: "Blog",
    title: "Live sonar guides and field notes.",
    subtitle: "Practical articles on motorized transducer control, heading hold, and getting more from live sonar on the water.",
    readLabel: "Read article →",
  },
  ru: {
    label: "Блог",
    title: "Гайды по live sonar и заметки с воды.",
    subtitle: "Практические статьи о моторизованном управлении датчиком, удержании курса и о том, как выжать больше из live sonar на рыбалке.",
    readLabel: "Читать →",
  },
};

type Locale = keyof typeof posts;

export default function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const l = (locale as Locale) in posts ? (locale as Locale) : "en";
  const t = ui[l];
  const list = posts[l];

  return (
    <main id="main-content" className="bg-[#050b11] text-white min-h-screen font-sans">
      <Header />

      <section className="py-20 lg:py-28 border-b border-white/5">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.34em] text-cyan-400/80 mb-6">{t.label}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{t.title}</h1>
          <p className="mt-6 text-lg text-white/50 leading-8">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 space-y-12">
          {list.map((post) => (
            <article key={post.slug} className="border-b border-white/5 pb-12 last:border-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-widest text-cyan-400/70">{post.tag}</span>
                <span className="text-white/20">·</span>
                <span className="text-xs text-white/30">{post.date}</span>
                <span className="text-white/20">·</span>
                <span className="text-xs text-white/30">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4 leading-tight">
                <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-cyan-300 transition">
                  {post.title}
                </Link>
              </h2>
              <p className="text-white/50 leading-7 mb-6">{post.excerpt}</p>
              <Link href={`/${locale}/blog/${post.slug}`} className="text-sm text-cyan-400 hover:text-cyan-300 transition">
                {t.readLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/5 py-12 bg-[#050b11]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex justify-between items-center gap-8">
          <p className="text-xs uppercase tracking-widest text-white/40">© 2026 Kona Compass</p>
          <nav className="flex gap-8 text-xs uppercase tracking-widest text-white/40">
            <Link href={`/${locale}`} className="hover:text-white transition">{l === "ru" ? "Главная" : "Home"}</Link>
            <Link href={`/${locale}/compare`} className="hover:text-white transition">{l === "ru" ? "Сравнение" : "Compare"}</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
