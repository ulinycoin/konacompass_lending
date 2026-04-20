import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalDocumentProps = {
  locale: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  footerTitle: string;
  footerText: string;
  contactTitle: string;
  contactEmail: string;
  backLinkLabel: string;
};

export default function LegalDocument({
  locale,
  eyebrow,
  title,
  intro,
  sections,
  footerTitle,
  footerText,
  contactTitle,
  contactEmail,
  backLinkLabel,
}: LegalDocumentProps) {
  return (
    <main className="bg-[#050b11] text-white">
      <Header />
      <section className="relative overflow-hidden border-b border-white/5 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={`${basePath}/product/boat-wide.jpg`}
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,17,0.2),rgba(5,11,17,0.9))]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-400/75">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">{intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`/${locale}`}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              {backLinkLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-12">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-white/65">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-white/65">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-400/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/8 bg-[#071019]">
        <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/35">{footerTitle}</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">{footerText}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/35">{contactTitle}</p>
              <div className="mt-3 space-y-2 text-sm text-white/55">
                <p>
                  <a href={`mailto:${contactEmail}`} className="transition hover:text-white">
                    {contactEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
