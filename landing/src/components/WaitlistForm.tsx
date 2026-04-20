"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export default function WaitlistForm({ className = "" }: { className?: string }) {
  const t = useTranslations('Index');
  const params = useParams();
  const locale = ((params?.locale as string) || "en") as "en" | "ru";
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const privacyHref = `/${locale}/privacy`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setError(t("waitlist_consent_error"));
      setStatus("error");
      return;
    }

    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });
      if (!res.ok) {
        setStatus("error");
        setError(t("waitlist_error_generic"));
      } else {
        setStatus("success");
      }
    } catch {
      setStatus("error");
      setError(t("waitlist_error_generic"));
    }
  };

  if (status === "success") {
    return (
      <div className={`rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4 text-cyan-100 ${className}`}>
        <p className="font-medium">{t('waitlist_success_title')}</p>
        <p className="mt-1 text-sm opacity-80">{t('waitlist_success_subtitle')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-4 ${className}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-grow">
          <label htmlFor="waitlist-email" className="sr-only">
            {t('waitlist_form_placeholder')}
          </label>
          <input
            id="waitlist-email"
            type="email"
            required
            placeholder={t('waitlist_form_placeholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-500/50 focus:bg-white/10"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="cta-glow rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-500 disabled:opacity-50 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050b11]"
        >
          {status === "loading" ? "..." : t('waitlist_form_button')}
        </button>
      </div>

      <label className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/65">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            if (e.target.checked) setError("");
          }}
          className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-cyan-500 focus:ring-cyan-500"
        />
        <span>
          {t("waitlist_consent_start")}{" "}
          <Link href={privacyHref} className="text-cyan-300 transition hover:text-cyan-200">
            {t("waitlist_consent_link")}
          </Link>{" "}
          {t("waitlist_consent_end")}
        </span>
      </label>

      {error && <p className="text-sm text-rose-300">{error}</p>}
    </form>
  );
}
