"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';

export default function WaitlistForm({ className = "" }: { className?: string }) {
  const t = useTranslations('Index');
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1000);
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
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <div className="relative flex-grow">
        <input
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
        className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-500 disabled:opacity-50 whitespace-nowrap"
      >
        {status === "loading" ? "..." : t('waitlist_form_button')}
      </button>
    </form>
  );
}
