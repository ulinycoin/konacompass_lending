"use client";

import Image from "next/image";
import { useState } from "react";

const comparisonData = [
  {
    feature: "Aiming Precision",
    kona: "0.3° Compass Guided",
    premium: "Visual / GPS (Vague)",
    manual: "Manual Guess",
  },
  {
    feature: "Brand Compatibility",
    kona: "Garmin, Lowrance, Humminbird",
    premium: "Often Brand-Locked",
    manual: "Universal (DIY)",
  },
  {
    feature: "Operating Modes",
    kona: "5 Modes (Auto-Scan, Target Hold, etc.)",
    premium: "Limited Auto-modes",
    manual: "Manual Only",
  },
  {
    feature: "Control Options",
    kona: "Remote + Foot Pedal included",
    premium: "Often sold separately",
    manual: "Hand-operated pole",
  },
  {
    feature: "Build Quality",
    kona: "Sealed Metal Housing",
    premium: "Plastic / Composite",
    manual: "PVC / Aluminum poles",
  },
  {
    feature: "Direction Stability",
    kona: "Built-in Compass",
    premium: "Heading sensor required",
    manual: "None",
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function WaitlistForm({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      console.log("Submitted email:", email);
      setStatus("success");
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className={`rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4 text-cyan-100 ${className}`}>
        <p className="font-medium">You're on the list!</p>
        <p className="mt-1 text-sm opacity-80">We'll notify you as soon as production starts.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <div className="relative flex-grow">
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-500/50 focus:bg-white/10"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-500 disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
    </form>
  );
}

export default function Compare() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kona Compass vs Competitors | Best Live Sonar Rotator Comparison",
    "description": "Compare Kona Compass with premium motorized mounts and manual poles. Discover why 0.3° precision and universal compatibility matter for live sonar.",
    "mainEntity": {
      "@type": "Table",
      "about": "Comparison of live sonar transducer rotators"
    }
  };

  return (
    <main className="bg-[#050b11] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header */}
      <header className="border-b border-white/5 bg-[#050b11]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-4 group">
            <div className="relative h-9 w-12 overflow-hidden rounded-sm bg-white/95 transition group-hover:bg-white">
              <Image
                src={`${basePath}/konacompas-old/logo.png`}
                alt="Kona Compass logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">Kona Compass</p>
            </div>
          </a>
          <nav className="flex items-center gap-8">
            <a href="/specs" className="text-xs font-medium uppercase tracking-widest text-white/40 hover:text-white transition">Specs</a>
            <a href="/" className="text-xs font-medium uppercase tracking-widest text-white/40 hover:text-white transition">Home</a>
            <a href="#waitlist" className="rounded-full bg-cyan-600/10 border border-cyan-500/30 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-600/20 transition">Join Waitlist</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.34em] text-cyan-400/80 mb-6">Comparison Guide</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-[1.1]">
            The Smarter Way to Control Your Live Sonar.
          </h1>
          <p className="mt-8 text-lg leading-8 text-white/60 max-w-2xl mx-auto">
            Compare Kona Compass against overpriced premium brands and outdated manual poles. Built by anglers for anglers who value precision over marketing fluff.
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="py-6 px-6 font-medium text-white/40 uppercase tracking-widest text-[10px] w-[25%]">Feature</th>
                    <th className="py-6 px-6 font-medium text-cyan-400 uppercase tracking-widest text-[10px] w-[25%]">Kona Compass</th>
                    <th className="py-6 px-6 font-medium text-white/40 uppercase tracking-widest text-[10px] w-[25%]">Premium Brands</th>
                    <th className="py-6 px-6 font-medium text-white/40 uppercase tracking-widest text-[10px] w-[25%]">Manual Poles</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonData.map((row) => (
                    <tr key={row.feature} className="hover:bg-white/[0.01] transition">
                      <td className="py-6 px-6 font-medium text-white">{row.feature}</td>
                      <td className="py-6 px-6 text-cyan-100 font-medium">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {row.kona}
                        </div>
                      </td>
                      <td className="py-6 px-6 text-white/40">{row.premium}</td>
                      <td className="py-6 px-6 text-white/20 italic">{row.manual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 bg-[#071019]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white">Why Kona Compass is the alternative the market needed.</h2>
              <p className="mt-6 text-lg leading-8 text-white/60">
                For too long, motorized rotators were either locked into a single sonar brand or priced like a down payment on a boat. We built Kona Compass to be universal, high-precision, and rugged enough for real marine use.
              </p>
              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <div className="flex-none h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">1</div>
                  <p className="text-white/80"><span className="text-white font-semibold">Universal Compatibility.</span> Works with Garmin, Lowrance, and Humminbird. Switch sonar brands without buying a new rotator.</p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-none h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">2</div>
                  <p className="text-white/80"><span className="text-white font-semibold">Compass-Guided Precision.</span> Our built-in heading sensor keeps your view stable even in wind and current.</p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-none h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">3</div>
                  <p className="text-white/80"><span className="text-white font-semibold">Everything Included.</span> No hidden costs for remote controls or foot pedals. It’s all in the box.</p>
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
          <h2 className="text-4xl font-semibold text-white">Ready for a smarter workflow?</h2>
          <p className="mt-6 text-lg text-white/60">
            Join 500+ anglers on the waitlist. Secure your spot in the first production run and get exclusive early-bird pricing.
          </p>
          <div className="mt-12">
            <WaitlistForm className="mx-auto" />
            <p className="mt-4 text-xs text-white/30">Joining the waitlist is free and carries no obligation to buy.</p>
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
            <p className="text-xs uppercase tracking-widest text-white/40">© 2026 Kona Compass</p>
          </div>
          <nav className="flex gap-8 text-xs uppercase tracking-widest text-white/40">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/instructions" className="hover:text-white transition">Instructions</a>
            <a href="mailto:konacompas@gmail.com" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
