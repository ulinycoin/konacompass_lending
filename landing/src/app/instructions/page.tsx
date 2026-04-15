"use client";

import Image from "next/image";
import { useState } from "react";

const modes = [
  {
    title: "Manual Mode",
    activation: "Automatic on power-on",
    body: "Manual Mode gives you direct control over transducer direction. Use it when you want immediate and simple directional control.",
  },
  {
    title: "Direction Hold Mode",
    activation: "Short press of the main button",
    body: "Direction Hold Mode helps keep direction more stable once you have aimed where you want. Use it when you want more consistent directional control without constant correction.",
  },
  {
    title: "Auto Search Mode",
    activation: "Press and hold the main button for 2 seconds",
    body: "Auto Search Mode sweeps the selected sector automatically. Use it when you want to cover water more efficiently and scan for activity without constant manual repositioning.",
  },
  {
    title: "Direction Lock Mode",
    activation: "Press and hold the main button for 3 seconds",
    body: "Direction Lock Mode locks the chosen direction. Use it when you want fixed directional positioning and repeatable control.",
  },
];

const quickStart = [
  "When the device powers on, it automatically enters Manual Mode.",
  "The main control button switches between key operating modes.",
  "Pedal combinations adjust rotation speed and auto-search sector width.",
];

const tips = [
  "Start in Manual Mode to get familiar with directional response.",
  "Use lower speed for fine positioning.",
  "Use higher speed when reacting to fast movement.",
  "Use a narrower search sector for tighter scanning.",
  "Use a wider search sector when covering more water.",
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
        className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-500 disabled:opacity-50 whitespace-nowrap"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
    </form>
  );
}

export default function InstructionsPage() {
  return (
    <main className="min-h-screen bg-[#050b11] text-white font-sans selection:bg-cyan-500/30">
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
                priority
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">Kona Compass</p>
          </a>
          <nav className="flex items-center gap-6">
            <a href="/specs" className="text-xs font-medium uppercase tracking-widest text-white/40 hover:text-white transition">Specs</a>
            <a href="/compare" className="text-xs font-medium uppercase tracking-widest text-white/40 hover:text-white transition">Compare</a>
            <a href="/" className="text-xs font-medium uppercase tracking-widest text-white/40 hover:text-white transition">Home</a>
            <a href="#waitlist" className="rounded-full bg-cyan-600/10 border border-cyan-500/30 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-600/20 transition">Join Waitlist</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-28 border-b border-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.05)_0%,transparent_70%)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-500 font-bold mb-6">User Manual</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-4xl mx-auto">
            Operational Guidance.
          </h1>
          <p className="mt-8 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            A practical and definitive guide to the main Kona Compass controls, operating modes, and adjustment logic for real-world use.
          </p>
        </div>
      </section>

      {/* Visual Overview */}
      <section className="py-12 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={`${basePath}/product/kona1.jpg`}
              alt="Kona Compass controls overview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b11]/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-bold">Interface Overview</p>
              <h2 className="text-2xl font-semibold text-white mt-2">Control logic at a glance.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start & Modes */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-6">Basics</p>
              <h2 className="text-3xl font-semibold text-white">Quick Start.</h2>
              <div className="mt-8 space-y-6">
                {quickStart.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-cyan-500 font-bold text-sm">0{idx + 1}</span>
                    <p className="text-white/60 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Practical Use Tips</h3>
                <ul className="space-y-4">
                  {tips.map((tip, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <svg className="h-4 w-4 text-cyan-500 mt-1 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/40 text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-6">Intelligence</p>
              <h2 className="text-3xl font-semibold text-white mb-10">Operating Modes.</h2>
              <div className="grid gap-6">
                {modes.map((mode) => (
                  <div key={mode.title} className="group p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition">
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="text-xl font-semibold text-white">{mode.title}</h3>
                      <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold">{mode.activation}</span>
                    </div>
                    <p className="text-white/50 leading-relaxed">{mode.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adjustments Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/5 p-10 bg-[#050b11]/40">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-500 font-bold mb-6">Velocity</p>
              <h2 className="text-2xl font-semibold text-white mb-6">Rotation Speed Adjustment.</h2>
              <p className="text-white/50 leading-relaxed mb-8">
                The system provides 6 speed levels, allowing you to balance reaction time with precise positioning.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Decrease Speed</span>
                  <span className="text-white text-sm font-medium">Left Pedal + Button</span>
                </div>
                <div className="flex justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Increase Speed</span>
                  <span className="text-white text-sm font-medium">Right Pedal + Button</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 p-10 bg-[#050b11]/40">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-500 font-bold mb-6">Coverage</p>
              <h2 className="text-2xl font-semibold text-white mb-6">Search Sector Adjustment.</h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Customize the sweep angle in Auto Search Mode to focus on a brush pile or cover an entire flat.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Decrease Angle</span>
                  <span className="text-white text-sm font-medium">Button + Left Pedal</span>
                </div>
                <div className="flex justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Increase Angle</span>
                  <span className="text-white text-sm font-medium">Button + Right Pedal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & CTA */}
      <section id="waitlist" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-6">Next Steps</p>
              <h2 className="text-4xl font-semibold text-white leading-tight">Ready to master your live sonar?</h2>
              <p className="mt-8 text-lg text-white/50 leading-relaxed">
                Joining the waitlist gives you priority access to the next production run and ensures you're among the first to receive the full technical documentation.
              </p>
              <div className="mt-12">
                <WaitlistForm className="max-w-md" />
              </div>
            </div>
            
            <div id="support" className="rounded-2xl border border-white/5 bg-white/[0.02] p-10">
              <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-8">Direct Support</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Telephone</p>
                  <a href="tel:+37120546403" className="text-xl text-white font-medium hover:text-cyan-400 transition">+371 20546403</a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Email</p>
                  <a href="mailto:konacompas@gmail.com" className="text-xl text-white font-medium hover:text-cyan-400 transition">konacompas@gmail.com</a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Social</p>
                  <a href="https://www.instagram.com/konacompass/" target="_blank" rel="noreferrer" className="text-xl text-white font-medium hover:text-cyan-400 transition">Instagram</a>
                </div>
              </div>
            </div>
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
            <a href="/specs" className="hover:text-white transition">Specs</a>
            <a href="/compare" className="hover:text-white transition">Compare</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
