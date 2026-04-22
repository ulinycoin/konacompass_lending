"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const locales = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];

function LocaleSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params?.locale as string) || "en";
  const currentLabel = locales.find((l) => l.code === currentLocale)?.label ?? currentLocale.toUpperCase();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Закрываем при клике вне
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Строим новый pathname заменяя locale-сегмент
  function buildLocalePath(targetLocale: string) {
    // pathname вида /en/... или /en
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/") || "/";
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 transition hover:border-white/20 hover:text-white"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Language: ${currentLabel}`}
      >
        <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a13.5 13.5 0 010 18M12 3a13.5 13.5 0 000 18" />
        </svg>
        <span>{currentLabel}</span>
        <svg
          className={`h-3 w-3 opacity-50 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-1.5 min-w-[140px] overflow-hidden rounded-xl border border-white/10 bg-[#0d1a26] shadow-xl"
        >
          {locales.map((locale) => {
            const isActive = locale.code === currentLocale;
            return (
              <Link
                key={locale.code}
                href={buildLocalePath(locale.code)}
                role="option"
                aria-selected={isActive}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm transition hover:bg-white/5 ${
                  isActive ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {isActive && (
                  <svg className="h-3.5 w-3.5 flex-none text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {!isActive && <span className="h-3.5 w-3.5 flex-none" />}
                {locale.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const common = useTranslations("Common");
  const t = useTranslations("Index");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params?.locale as string) || "en";

  // На главной — якорные ссылки, на других страницах — ведём на главную с якорем
  const isHome = pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`;
  const anchorHref = (anchor: string) => isHome ? anchor : `/${currentLocale}${anchor}`;

  const navLinks = [
    { href: anchorHref("#how-it-works"), label: common("nav.how_it_works") },
    { href: anchorHref("#compatibility"), label: common("nav.compatibility") },
    { href: anchorHref("#faq"), label: common("nav.faq") },
    { href: `/${currentLocale}/blog`, label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050b11]/80 backdrop-blur-md">
      <a href="#main-content" className="skip-link">
        {common("skip_to_content")}
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href={`/${currentLocale}`} className="flex items-center gap-3 group">
          <div className="relative h-10 w-12 overflow-hidden rounded-sm bg-white/95 transition group-hover:bg-white">
            <Image
              src={`${basePath}/konacompas-old/logo.png`}
              alt="Kona Compass logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/75 transition group-hover:text-white">
            {common("product_name")}
          </p>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/55 transition hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: locale + CTA + burger */}
        <div className="flex items-center gap-3">
          <LocaleSwitcher />

          <a
            href={anchorHref("#waitlist")}
            className="hidden rounded-lg border border-cyan-500/30 bg-cyan-600/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-400 transition hover:bg-cyan-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:block"
          >
            {t("waitlist_form_button")}
          </a>

          {/* Burger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/60 transition hover:text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#050b11] px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 border-t border-white/5 pt-4">
            <a
              href={anchorHref("#waitlist")}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg border border-cyan-500/30 bg-cyan-600/10 px-4 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-cyan-400 transition hover:bg-cyan-600/20"
            >
              {t("waitlist_form_button")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
