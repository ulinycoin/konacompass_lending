"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const copy = {
  en: {
    done_title: "You've been removed.",
    done_body: "Your email has been deleted from the Kona Compass waitlist.",
    error_title: "Something went wrong.",
    error_body: "The link may be invalid or already used. Contact us at info@konacompass.com if the problem persists.",
    back: "Back to konacompass.com",
  },
  ru: {
    done_title: "Вы отписаны.",
    done_body: "Ваш email удалён из списка ожидания Kona Compass.",
    error_title: "Что-то пошло не так.",
    error_body: "Ссылка недействительна или уже использована. Напишите нам на info@konacompass.com если проблема повторяется.",
    back: "На главную konacompass.com",
  },
};

function UnsubscribeContent({ locale }: { locale: "en" | "ru" }) {
  const params = useSearchParams();
  const done = params.get("done") === "1";
  const error = params.get("error");
  const t = copy[locale];

  const isError = !!error;
  const title = isError ? t.error_title : t.done_title;
  const body = isError ? t.error_body : t.done_body;

  return (
    <main style={{
      minHeight: "100vh",
      background: "#07111a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 16px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <div style={{
        maxWidth: 480,
        width: "100%",
        background: "#0d1f2d",
        border: "1px solid #1a3040",
        borderTop: "3px solid #06b6d4",
        padding: "48px 40px",
      }}>
        <div style={{ marginBottom: 32 }}>
          <img
            src="/branding/logo.png"
            alt="Kona Compass"
            width={80}
            height={80}
            style={{ display: "block", objectFit: "contain" }}
          />
        </div>

        <h1 style={{
          margin: "0 0 16px",
          fontSize: 22,
          fontWeight: 700,
          color: isError ? "#f87171" : "#eef2f0",
          lineHeight: 1.3,
        }}>
          {title}
        </h1>

        <p style={{
          margin: "0 0 32px",
          fontSize: 15,
          lineHeight: 1.7,
          color: "#7a9ab0",
        }}>
          {body}
        </p>

        <a
          href="https://konacompass.com"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#06b6d4",
            color: "#07111a",
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            borderRadius: 3,
            letterSpacing: "0.03em",
          }}
        >
          {t.back}
        </a>
      </div>
    </main>
  );
}

export default async function UnsubscribePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale === "ru" ? "ru" : "en";
  return (
    <Suspense>
      <UnsubscribeContent locale={locale} />
    </Suspense>
  );
}
