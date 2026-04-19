"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { DEFAULT_CONSENT, readConsent, writeConsent, type ConsentState } from "@/lib/consent";

type Locale = "en" | "ru";

export default function ConsentBanner() {
  const t = useTranslations("Consent");
  const common = useTranslations("Common");
  const params = useParams();
  const locale = ((params?.locale as string) || "en") as Locale;

  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [preferences, setPreferences] = useState<ConsentState>(DEFAULT_CONSENT);

  const privacyHref = useMemo(() => `/${locale}/privacy`, [locale]);
  const cookiesHref = useMemo(() => `/${locale}/cookies`, [locale]);

  useEffect(() => {
    const saved = readConsent();
    const timer = window.setTimeout(() => {
      setMounted(true);
      if (saved) {
        setPreferences(saved);
        setVisible(false);
        return;
      }

      setVisible(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function store(next: Omit<ConsentState, "updatedAt">) {
    const payload: ConsentState = {
      ...next,
      updatedAt: new Date().toISOString(),
    };

    setPreferences(payload);
    writeConsent(next);
    setVisible(false);
    setExpanded(false);
  }

  if (!mounted || !visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#08111b]/95 p-5 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400/80">
              {t("banner_label")}
            </p>
            <h2 className="mt-3 text-lg font-semibold text-white">{t("banner_title")}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
              {t("banner_body")}
            </p>

            <p className="mt-3 text-sm text-white/50">
              <Link href={privacyHref} className="text-cyan-300 transition hover:text-cyan-200">
                {common("nav.privacy")}
              </Link>
              {" · "}
              <Link href={cookiesHref} className="text-cyan-300 transition hover:text-cyan-200">
                {common("nav.cookies")}
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => store({ necessary: true, analytics: false, thirdParty: false })}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {t("banner_reject")}
              </button>
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                className="rounded-lg border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {t("banner_manage")}
              </button>
              <button
                type="button"
                onClick={() => store({ necessary: true, analytics: true, thirdParty: true })}
                className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-[#06131a] transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {t("banner_accept")}
              </button>
            </div>

            {expanded && (
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-white">{t("banner_necessary")}</p>
                      <p className="text-xs leading-5 text-white/45">{t("banner_necessary_desc")}</p>
                    </div>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/50">
                      {t("banner_required")}
                    </span>
                  </div>

                  <label className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences((current) => ({ ...current, analytics: e.target.checked }))
                      }
                      className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-cyan-500 focus:ring-cyan-500"
                    />
                    <span>
                      <span className="block text-sm font-medium text-white">{t("banner_analytics")}</span>
                      <span className="block text-xs leading-5 text-white/45">{t("banner_analytics_desc")}</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3">
                    <input
                      type="checkbox"
                      checked={preferences.thirdParty}
                      onChange={(e) =>
                        setPreferences((current) => ({ ...current, thirdParty: e.target.checked }))
                      }
                      className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-cyan-500 focus:ring-cyan-500"
                    />
                    <span>
                      <span className="block text-sm font-medium text-white">{t("banner_third_party")}</span>
                      <span className="block text-xs leading-5 text-white/45">{t("banner_third_party_desc")}</span>
                    </span>
                  </label>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    className="text-xs font-medium text-white/45 transition hover:text-white/75 focus-visible:outline-none focus-visible:text-white/75"
                  >
                    {t("banner_close")}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      store({
                        necessary: true,
                        analytics: preferences.analytics,
                        thirdParty: preferences.thirdParty,
                      })
                    }
                    className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#06131a] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {t("banner_save")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
