"use client";

import Image from "next/image";
import { useState } from "react";

const technicalSpecs = [
  {
    category: "Performance",
    items: [
      { label: "Aiming Precision", value: "0.3° (Compass-guided)" },
      { label: "Operating Modes", value: "5 Modes (Manual, Hold, Auto-Scan, Fixation, Active)" },
      { label: "Rotation Speed", value: "6 Adjustable speed levels" },
      { label: "Scanning Range", value: "20° to 340° (Configurable sectors)" },
      { label: "Response Time", value: "Near-zero backlash design" },
    ],
  },
  {
    category: "Physical & Materials",
    items: [
      { label: "Housing Material", value: "Hermetically sealed Anodized Aluminum" },
      { label: "Structural Hardware", value: "High-grade Stainless Steel" },
      { label: "Weight (Full Kit)", value: "Approx. 5.5 kg" },
      { label: "Clamping Force", value: "Up to 30 kg support" },
      { label: "Operating Speed", value: "Safe operation up to 10 km/h" },
    ],
  },
  {
    category: "Electrical & Power",
    items: [
      { label: "Operating Voltage", value: "12V DC (Standard Marine)" },
      { label: "Power Consumption", value: "Ultra-low (Optimized for long sessions)" },
      { label: "Waterproofing", value: "IP68 Equivalent (Fully sealed electronics)" },
      { label: "Input Protection", value: "Reverse polarity & Overload protection" },
    ],
  },
  {
    category: "Compatibility",
    items: [
      { label: "Garmin", value: "Panoptix LiveScope (LVS32, LVS34, LVS34-IF)" },
      { label: "Lowrance", value: "ActiveTarget & ActiveTarget 2" },
      { label: "Humminbird", value: "MEGA Live Imaging" },
    ],
  },
];

const kitContents = [
  "Kona Compass Rotator Main Unit",
  "High-Precision Built-in Electronic Compass",
  "Wireless Remote Control (IP67)",
  "Heavy-Duty Foot Pedals (Dual-switch)",
  "Mounting Bracket & Installation Hardware",
  "Power Cable Harness (Sealed Connectors)",
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
        <p className="mt-1 text-sm opacity-80">Technical specs will be sent to your inbox.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <div className="relative flex-grow">
        <input
          type="email"
          required
          placeholder="Enter email for full spec sheet"
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
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
    </form>
  );
}

export default function Specs() {
  return (
    <main className="bg-[#050b11] text-white min-h-screen font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
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
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">Kona Compass</p>
          </a>
          <nav className="flex items-center gap-6">
            <a href="/" className="text-xs font-medium uppercase tracking-widest text-white/40 hover:text-white transition">Home</a>
            <a href="/compare" className="text-xs font-medium uppercase tracking-widest text-white/40 hover:text-white transition">Compare</a>
            <a href="#waitlist" className="rounded-full bg-cyan-600/10 border border-cyan-500/30 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-600/20 transition">Join Waitlist</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.05)_0%,transparent_70%)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-500 font-bold mb-6">System Architecture</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-4xl mx-auto">
            Technical Specifications.
          </h1>
          <p className="mt-8 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Every component of Kona Compass is engineered for extreme marine environments and absolute precision. No compromises, just pure technical performance.
          </p>
        </div>
      </section>

      {/* Spec Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {technicalSpecs.map((cat) => (
              <div key={cat.category} className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 lg:p-10">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500/80 mb-8 border-b border-white/10 pb-4">{cat.category}</h2>
                <dl className="space-y-6">
                  {cat.items.map((item) => (
                    <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                      <dt className="text-sm text-white/40 font-medium uppercase tracking-wider">{item.label}</dt>
                      <dd className="text-lg text-white font-medium border-b border-white/5 sm:border-none pb-2 sm:pb-0">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit Contents */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white">What's in the box.</h2>
              <p className="mt-6 text-lg text-white/50">
                The Kona Compass arrives as a complete, ready-to-install system. No hidden hardware requirements, no separate remote control purchases.
              </p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {kitContents.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <svg className="h-5 w-5 text-cyan-500 mt-1 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 text-sm leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={`${basePath}/konacompas-old/image-5.png`}
                alt="Kona Compass hardware overview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b11]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Standard Kit Configuration</p>
                <p className="text-sm text-white font-medium">Professional Mounting Solution Included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Durability */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white leading-tight">Built for real marine conditions.</h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              We know that marine electronics face vibration, saltwater, and extreme temperatures. That's why Kona Compass features moisture-resistant electronics fully sealed within an anodized aluminum unit.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/5 p-6 bg-white/[0.01]">
              <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">High-Speed Safety</h3>
              <p className="text-sm text-white/40 leading-relaxed">System allows safe operation up to 10 km/h. Bracket automatically folds at higher speeds to protect the transducer and rotator shaft.</p>
            </div>
            <div className="rounded-xl border border-white/5 p-6 bg-white/[0.01]">
              <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Sealed Housing</h3>
              <p className="text-sm text-white/40 leading-relaxed">IP68-equivalent hermetic aluminum housing protects internal precision sensors and motor from saltwater and humidity.</p>
            </div>
            <div className="rounded-xl border border-white/5 p-6 bg-white/[0.01]">
              <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Zero Backlash</h3>
              <p className="text-sm text-white/40 leading-relaxed">Internal gear mechanism designed for zero play, ensuring that 0.3° accuracy isn't lost during movement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" className="py-24 lg:py-32 border-t border-white/5 bg-[#050b11]">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-white">Secure your priority access.</h2>
          <p className="mt-6 text-lg text-white/50 leading-relaxed">
            Join the waitlist to receive the full technical data sheet, installation manual, and priority notice when the first production run is ready.
          </p>
          <div className="mt-12">
            <WaitlistForm className="mx-auto" />
            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">Limited first production batch</p>
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
            <p className="text-xs uppercase tracking-widest text-white/30">© 2026 Kona Compass</p>
          </div>
          <nav className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/compare" className="hover:text-white transition">Compare</a>
            <a href="/instructions" className="hover:text-white transition">Manual</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
