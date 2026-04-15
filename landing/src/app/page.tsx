"use client";

import Image from "next/image";
import { useState } from "react";

const compatibility = [
  "Garmin Panoptix LiveScope",
  "Lowrance ActiveTarget",
  "Humminbird Mega Live",
];

const featureList = [
  "Precision from 0.3°",
  "Built-in compass for stable direction control",
  "Remote control and foot pedal operation",
  "Five operating modes with six speed settings",
  "Auto-scan sectors from 20° to 340°",
  "Quiet rotation, low power consumption, sealed metal housing",
];

const buyingSteps = [
  "Join the waitlist to secure your spot in the first production batch",
  "Receive technical updates and early-bird pricing details",
  "Get notified immediately when orders open in your region",
];

const faqs = [
  {
    q: "When will Kona Compass be available?",
    a: "We are currently in the final stages of production prep. Joining the waitlist ensures you'll be the first to know when the first batch is ready for shipment.",
  },
  {
    q: "Is there a discount for early supporters?",
    a: "Yes. Anglers on our waitlist will receive exclusive early-bird pricing and priority access to the first limited production run.",
  },
  {
    q: "Which systems is Kona Compass compatible with?",
    a: "It is fully compatible with Garmin Panoptix LiveScope, Lowrance ActiveTarget, and Humminbird Mega Live systems.",
  },
  {
    q: "How is it controlled?",
    a: "Kona Compass features a compass-guided control system with both remote control and foot pedal operation for precise, hands-free transducer positioning.",
  },
];

function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function WaitlistForm({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
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

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.konacompas.com/#organization",
        "name": "Kona Compass",
        "url": "https://www.konacompas.com",
        "logo": "https://www.konacompas.com/branding/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+371-20546403",
          "contactType": "customer service",
          "email": "konacompas@gmail.com"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.konacompas.com/#product",
        "name": "Kona Compass Live Sonar Rotator",
        "description": "Professional-grade live sonar transducer rotator with 0.3° precision, compass-guided stabilization, and compatibility with Garmin, Lowrance, and Humminbird systems.",
        "brand": { "@id": "https://www.konacompas.com/#organization" },
        "offers": {
          "@type": "Offer",
          "url": "https://www.konacompas.com",
          "availability": "https://schema.org/PreOrder",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main id="main-content" className="bg-[#050b11] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8 lg:py-8">
          <div className="flex items-center gap-4">
            <div className="relative h-11 w-14 overflow-hidden rounded-sm bg-white/95">
              <Image
                src={`${basePath}/konacompas-old/logo.png`}
                alt="Kona Compass logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                Kona Compass
              </p>
              <p className="mt-1 text-sm text-white/45">Precision control for live sonar</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 mr-8">
            <a href="/specs" className="text-sm font-medium text-white/60 transition hover:text-white">Specs</a>
            <a href="/compare" className="text-sm font-medium text-white/60 transition hover:text-white">Compare</a>
            <a href="/instructions" className="text-sm font-medium text-white/60 transition hover:text-white">Manual</a>
          </nav>

          <a
            href="#waitlist"
            className="rounded-full bg-cyan-600/10 border border-cyan-500/30 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-600/20 transition"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.18),rgba(3,7,18,0.70))]" />
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <Image
            src={`${basePath}/konacompas-old/image-3.png`}
            alt="Kona Compass product image"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,17,0.96)_0%,rgba(5,11,17,0.76)_24%,rgba(5,11,17,0.28)_54%,rgba(5,11,17,0.28)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,11,17,1)_0%,rgba(5,11,17,0.88)_28%,rgba(5,11,17,0.18)_66%,rgba(5,11,17,0.08)_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-400/80">
              Waitlist Now Open
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[88px]">
              Precision control. Coming soon to your boat.
            </h1>
            <div className="mt-8 max-w-2xl border-l-2 border-cyan-500/30 pl-6">
              <p className="text-lg leading-8 text-white/90 sm:text-xl font-medium">
                Kona Compass is a professional-grade live sonar transducer rotator designed for Garmin, Lowrance, and Humminbird systems.
              </p>
              <p className="mt-4 text-base leading-7 text-white/70">
                It eliminates the friction of manual transducer adjustment, providing 0.3° aiming precision, stable direction control via a built-in compass, and seamless integration with existing live sonar workflows.
              </p>
            </div>
            
            <WaitlistForm className="mt-10 max-w-md" />
            <p className="mt-4 text-xs text-white/40">Limited first production run. Join 500+ anglers in line.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#071019] py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 lg:p-12">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500/80">Kona Compass at a Glance</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider">Precision</p>
                <p className="mt-2 text-2xl font-semibold text-white">0.3° Accuracy</p>
                <p className="mt-1 text-sm text-white/60">Ultra-fine aiming for live sonar targets.</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider">Rotation</p>
                <p className="mt-2 text-2xl font-semibold text-white">340° Range</p>
                <p className="mt-1 text-sm text-white/60">Full coverage with auto-scan modes.</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider">Control</p>
                <p className="mt-2 text-2xl font-semibold text-white">Dual Input</p>
                <p className="mt-1 text-sm text-white/60">Remote control & foot pedal included.</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider">Housing</p>
                <p className="mt-2 text-2xl font-semibold text-white">Sealed Metal</p>
                <p className="mt-1 text-sm text-white/60">Built for rugged marine environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050b11] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/44">
                Market Comparison
              </p>
              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Why professionals are switching to smart rotation.
              </h2>
              <p className="mt-8 text-lg leading-8 text-white/70">
                Manual transducer control is the biggest bottleneck in modern live sonar setups. Kona Compass automates the search, stabilizes the view, and provides precision that is physically impossible with manual poles.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-white/80 border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-white/40 uppercase tracking-widest text-[10px]">
                    <th className="py-4 font-medium">Feature</th>
                    <th className="py-4 font-medium">Manual Poles</th>
                    <th className="py-4 font-medium text-cyan-400">Kona Compass</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-4 font-medium text-white">Aiming Precision</td>
                    <td className="py-4 italic text-white/40">Visual guess</td>
                    <td className="py-4 text-cyan-100">0.3° Compass Guided</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-white">Operating Modes</td>
                    <td className="py-4 italic text-white/40">Manual only</td>
                    <td className="py-4 text-cyan-100">5 Modes (Scan, Hold, etc.)</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-white">Speed Control</td>
                    <td className="py-4 italic text-white/40">Inconsistent</td>
                    <td className="py-4 text-cyan-100">6 Speed settings</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-white">Durability</td>
                    <td className="py-4 italic text-white/40">Plastic/DIY</td>
                    <td className="py-4 text-cyan-100">Sealed Metal Housing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071019] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden bg-slate-900">
            <Image
              src={`${basePath}/konacompas-old/image-4.png`}
              alt="Kona Compass installed in a real fishing setup"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Product
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              A more precise control layer for serious live sonar setups.
            </h2>
            <p className="mt-8 text-lg leading-9 text-white/72">
              Kona Compass combines a built-in compass, precise rotation, remote control, and foot pedal operation in one system designed for real use on the boat. Control becomes faster, smoother, and more deliberate without getting in the way.
            </p>
            <Divider />
            <div className="mt-8 space-y-5">
              {featureList.map((item) => (
                <p key={item} className="text-lg leading-8 text-white/80">
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="/instructions"
                className="text-base text-white/62 underline decoration-white/20 underline-offset-[8px] transition hover:text-white hover:decoration-white/40"
              >
                Read user manual
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="bg-[#050b11] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/44">
                Proof
              </p>
              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                See Kona Compass in real use.
              </h2>
              <p className="mt-8 text-lg leading-9 text-white/72">
                For a product like this, seeing it work matters. The demo shows the movement, the setup, and the control feel in a way static copy never can.
              </p>
              <div className="mt-10 space-y-4 text-base leading-8 text-white/68">
                <p>Real movement on the water.</p>
                <p>Real installation context.</p>
                <p>Real product proof.</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden border border-white/10 bg-[#0a1118] shadow-[0_30px_120px_rgba(0,0,0,0.34)]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/38">
                      Kona Compass demo
                    </p>
                    <p className="mt-1 text-sm text-white/62">
                      Live demo embedded
                    </p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=cJWNJEUY7ug"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    Open on YouTube
                  </a>
                </div>
                <div className="aspect-video bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/cJWNJEUY7ug?rel=0&modestbranding=1&playsinline=1"
                    title="Kona Compass demo video"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative min-h-[210px] overflow-hidden border border-white/10 bg-slate-900">
                  <Image
                    src={`${basePath}/konacompas-old/image-5.png`}
                    alt="Kona Compass close-up detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative min-h-[210px] overflow-hidden border border-white/10 bg-slate-900">
                  <Image
                    src={`${basePath}/konacompas-old/image-4.png`}
                    alt="Kona Compass in use on a boat"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-[#071019] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Pre-launch
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Secure your spot in the first production run.
            </h2>
            <p className="mt-8 text-lg leading-9 text-white/72">
              Demand for Kona Compass is high, and our first production batch will be limited. By joining the waitlist, you ensure priority access and early-bird pricing.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4 text-white/86">
              {buyingSteps.map((item, index) => (
                <div key={item} className="grid grid-cols-[36px_1fr] gap-4">
                  <div className="text-lg font-semibold text-cyan-500/60">0{index + 1}</div>
                  <p className="text-lg leading-8">{item}</p>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <WaitlistForm className="max-w-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050b11] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">FAQ</p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Questions about the launch.
            </h2>
          </div>

          <div className="mt-12 border-t border-white/10">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-white/10 py-8">
                <h3 className="max-w-3xl text-xl font-medium text-white">{item.q}</h3>
                <p className="mt-4 max-w-4xl text-base leading-8 text-white/68 sm:text-lg">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050b11] py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.7fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-14 overflow-hidden rounded-sm bg-white/95">
                <Image
                  src={`${basePath}/konacompas-old/logo.png`}
                  alt="Kona Compass logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                  Kona Compass
                </p>
                <p className="mt-1 text-sm text-white/45">
                  Precision control for live sonar
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-base leading-8 text-white/58">
              Built for anglers who want cleaner control, faster response, and a more deliberate live sonar workflow on the water.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">
              Navigation
            </p>
            <div className="mt-5 space-y-3 text-base text-white/66">
              <p><a href="/" className="transition hover:text-white">Main page</a></p>
              <p><a href="/specs" className="transition hover:text-white">Tech Specs</a></p>
              <p><a href="/compare" className="transition hover:text-white">Compare with alternatives</a></p>
              <p><a href="/instructions" className="transition hover:text-white">Instructions</a></p>
              <p><a href="/#demo" className="transition hover:text-white">Demo</a></p>
              <p><a href="/#waitlist" className="transition hover:text-white">Waitlist</a></p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-base text-white/66">
              <p><a href="tel:+37120546403" className="transition hover:text-white">+371 20546403</a></p>
              <p><a href="mailto:konacompas@gmail.com" className="transition hover:text-white">konacompas@gmail.com</a></p>
              <p><a href="https://www.instagram.com/konacompass/" target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a></p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
