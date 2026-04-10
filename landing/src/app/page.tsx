import Image from "next/image";

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
  "Check compatibility with your sonar setup",
  "Request pricing or ask for details directly",
  "Confirm delivery, support, and the next step with the team",
];

const faqs = [
  {
    q: "Which systems is Kona Compass compatible with?",
    a: "Compatible with Garmin, Lowrance, and Humminbird live sonar systems.",
  },
  {
    q: "How is it controlled?",
    a: "Built around a compass-guided control system with remote control and foot pedal operation for precise transducer positioning.",
  },
  {
    q: "What operating modes are included?",
    a: "Manual mode, target hold, auto search, fixation mode, and active mode.",
  },
  {
    q: "How do I order?",
    a: "You can request pricing, ask for details, or contact the team directly by phone, email, or Instagram.",
  },
];

function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main id="main-content" className="bg-[#050b11] text-white">
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

          <a
            href="mailto:konacompas@gmail.com?subject=Kona%20Compass%20pricing%20request"
            className="border-b border-white/35 pb-1 text-sm font-medium text-white transition hover:border-white hover:text-cyan-100"
          >
            Ask for pricing
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
            <p className="text-xs uppercase tracking-[0.34em] text-white/50">
              Premium live sonar rotator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[88px]">
              Precision control for anglers who expect more from live sonar.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Kona Compass is a live sonar rotator for Garmin, Lowrance, and Humminbird systems, designed for cleaner direction control, faster response, and a more natural workflow on the water.
            </p>

          </div>
        </div>
      </section>

      <section className="bg-[#071019] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 border-y border-white/10 py-6 sm:grid-cols-3 sm:gap-8">
            {compatibility.map((item) => (
              <div
                key={item}
                className="flex min-h-[64px] items-center justify-center text-center text-sm uppercase tracking-[0.24em] text-white/62 sm:min-h-[72px]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050b11] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Why it matters
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Live sonar changes the game. Poor control still gets in the way.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-9 text-white/72">
            <p>
              When transducer control feels awkward, too much attention goes into correction instead of fishing. Small directional changes turn into friction, and fast reactions become slower than they should be.
            </p>
            <p>
              Kona Compass is built to remove that friction, giving anglers a steadier, more precise, and more natural control layer for live sonar in real conditions.
            </p>
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

      <section className="bg-[#071019] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Buying path
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              The next step should feel direct.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-9 text-white/72">
            <p>
              For a product like this, the buying path should stay direct. Check compatibility, request pricing, and talk to the team without hunting for contact details.
            </p>
            <div className="space-y-4 text-white/86">
              {buyingSteps.map((item, index) => (
                <div key={item} className="grid grid-cols-[36px_1fr] gap-4">
                  <div className="text-lg font-semibold text-white/48">0{index + 1}</div>
                  <p className="text-lg leading-8">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050b11] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">FAQ</p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Questions buyers will ask before they reach out.
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

      <section id="contact" className="bg-[#071019] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/44">
                Contact
              </p>
              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ask for pricing. Confirm fit. Move forward.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-white/72">
                Reach out directly for pricing, fit, and product details without unnecessary steps.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8 text-base">
                <a
                  href="mailto:konacompas@gmail.com"
                  className="text-lg font-medium text-white underline decoration-white/35 underline-offset-[10px] transition hover:decoration-white"
                >
                  konacompas@gmail.com
                </a>
                <a href="tel:+37120546403" className="text-white/70 transition hover:text-white">
                  +371 20546403
                </a>
                <a
                  href="https://www.instagram.com/konacompass/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 transition hover:text-white"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-slate-900">
              <Image
                src={`${basePath}/konacompas-old/image-5.png`}
                alt="Kona Compass detail image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.08),rgba(3,7,18,0.62))]" />
            </div>
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
              <p><a href="/instructions" className="transition hover:text-white">Instructions</a></p>
              <p><a href="/#demo" className="transition hover:text-white">Demo</a></p>
              <p><a href="/#contact" className="transition hover:text-white">Contact</a></p>
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
