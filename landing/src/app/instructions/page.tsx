import Image from "next/image";
import Link from "next/link";

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

export default function InstructionsPage() {
  return (
    <main className="min-h-screen bg-[#050b11] text-white">
      <header className="border-b border-white/10 bg-[#071019]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="relative h-11 w-14 overflow-hidden rounded-sm bg-white/95">
              <Image
                src="/konacompas-old/logo.png"
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
              <p className="mt-1 text-sm text-white/45">User Manual</p>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm text-white/65">
            <Link href="/" className="transition hover:text-white">
              Main page
            </Link>
            <a
              href="#support"
              className="transition hover:text-white"
            >
              Support
            </a>
            <a
              href="mailto:konacompas@gmail.com"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-white/10 bg-[#071019] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Instructions
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl">
              User Manual
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/72">
              A practical guide to the main Kona Compass controls, operating modes, and adjustment logic.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-slate-900">
            <Image
              src="/konacompas-old/image-5.png"
              alt="Kona Compass controls overview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Quick start
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Start simple, then adjust with confidence.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-white/72">
            {quickStart.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#071019] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Operating modes
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Core modes and how to activate them.
            </h2>
          </div>

          <div className="mt-12 border-t border-white/10">
            {modes.map((mode) => (
              <div key={mode.title} className="grid gap-5 border-b border-white/10 py-8 lg:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <h3 className="text-2xl font-medium text-white">{mode.title}</h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/42">
                    {mode.activation}
                  </p>
                </div>
                <p className="text-lg leading-9 text-white/72">{mode.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Rotation speed
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Speed adjustment across all modes.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-9 text-white/72">
            <p>
              Rotation speed can be adjusted across all modes. The system provides 6 speed levels.
            </p>
            <div>
              <p className="text-white">To decrease rotation speed</p>
              <p>Hold the left pedal and press the main button.</p>
            </div>
            <div>
              <p className="text-white">To increase rotation speed</p>
              <p>Hold the right pedal and press the main button.</p>
            </div>
            <p>
              Use lower speed for finer positioning. Use higher speed when you need quicker directional response.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#071019] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Auto Search sector
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Adjust the search sector to fit the water you want to cover.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-9 text-white/72">
            <p>
              In Auto Search Mode, the search sector can be narrowed or widened depending on how focused or broad you want the scan to be.
            </p>
            <div>
              <p className="text-white">To decrease the search sector angle</p>
              <p>Hold the main button and press the left pedal.</p>
            </div>
            <div>
              <p className="text-white">To increase the search sector angle</p>
              <p>Hold the main button and press the right pedal.</p>
            </div>
            <p>
              Use a narrower sector for more focused scanning. Use a wider sector when you want to cover more water.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Practical tips
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              A few things worth remembering on the water.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-9 text-white/72">
            {tips.map((tip) => (
              <p key={tip}>{tip}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="border-t border-white/10 bg-[#071019] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Support
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Need help with setup, compatibility, or operation?
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/72">
              Contact Kona Compass directly for product questions, guidance, and next steps.
            </p>
            <div className="mt-10 space-y-4 text-lg leading-8 text-white/82">
              <p>Phone: +371 20546403</p>
              <p>Email: konacompas@gmail.com</p>
              <p>Instagram: @konacompass</p>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-slate-900">
            <Image
              src="/konacompas-old/image-6.png"
              alt="Kona Compass support and real-world use image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050b11] py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.7fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-14 overflow-hidden rounded-sm bg-white/95">
                <Image
                  src="/konacompas-old/logo.png"
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
              Practical control, clear guidance, and direct support for serious live sonar use.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">
              Navigation
            </p>
            <div className="mt-5 space-y-3 text-base text-white/66">
              <p><a href="/" className="transition hover:text-white">Main page</a></p>
              <p><a href="/instructions" className="transition hover:text-white">Instructions</a></p>
              <p><a href="#support" className="transition hover:text-white">Support</a></p>
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
