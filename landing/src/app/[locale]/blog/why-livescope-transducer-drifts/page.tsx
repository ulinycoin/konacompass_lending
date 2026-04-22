"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const content = {
  en: {
    jsonLd: {
      headline: "Why Your LiveScope Transducer Keeps Drifting — and How to Fix It",
      description: "Live sonar transducers drift because manual mounts have no heading hold. Learn why your LiveScope, ActiveTarget, or MEGA Live transducer won't stay on target — and what motorized heading control does differently.",
      url: "https://konacompass.com/en/blog/why-livescope-transducer-drifts",
    },
    faq: [
      { q: "Why does my LiveScope transducer keep moving?", a: "Manual transducer mounts have no mechanism to hold heading. Any current, wave, or boat movement causes the transducer to rotate freely. The only fix is a motorized rotator with heading hold — a system that continuously corrects for drift using a built-in orientation sensor." },
      { q: "How do I stop my live sonar transducer from drifting?", a: "You need a motorized transducer rotator with heading hold functionality. Devices like Kona Compass use an integrated orientation system to lock the transducer on a set heading and correct automatically whenever current, wind, or boat movement causes drift." },
      { q: "Does heading hold work with Garmin Panoptix LiveScope?", a: "Yes. Kona Compass is compatible with Garmin Panoptix LiveScope LVS32, LVS34, and LVS34-IF. Heading hold mode maintains transducer direction automatically regardless of current or boat movement." },
      { q: "What is the difference between direction hold and direction lock on a transducer rotator?", a: "Direction Hold continuously corrects drift to maintain a heading — useful in current or wind. Direction Lock fixes the transducer to a precise heading with no correction for movement — useful for fixed, repeatable positioning such as targeting a specific structure." },
    ],
    breadcrumb: "Blog",
    tag: "Live Sonar",
    h1: "Why Your LiveScope Transducer Keeps Drifting — and How to Fix It",
    lead: "Manual transducer mounts have no way to hold heading. Every wave, current, and boat turn moves your live sonar off target — and no amount of re-aiming fixes the root problem.",
    meta: "Kona Compass · April 2026 · 5 min read",
    imgAlt: "Kona Compass motorized transducer rotator installed on a boat — heading hold active",
    sections: [
      {
        h: "The problem every live sonar angler knows",
        body: [
          "You set up on a flat, dial in your Garmin Panoptix LiveScope, and find fish holding near a brush pile. You make a cast — and by the time you look back at the screen, the transducer has rotated 40 degrees. The fish are gone from the image. You reach down, correct the direction manually, and repeat. Every drift. Every cast. Every turn of the boat.",
          "This is not a LiveScope problem. It is not an ActiveTarget problem. It is a mounting problem — and it affects every live sonar system equally.",
        ],
      },
      {
        h: "Why manual mounts cannot hold direction",
        body: [
          "A manual transducer pole or bracket is a passive mount. It holds whatever position you physically set it to — nothing more. There is no sensor reading heading, no motor correcting drift, no mechanism responding to external forces.",
          "When current pushes against the transducer housing, the mount offers no resistance. When you spin the trolling motor to reposition the boat, the transducer rotates with the force. When a wake rocks the hull, the transducer moves.",
          "The result: the live sonar is pointing in the right direction for roughly 20% of the time you are fishing. The rest is correction.",
        ],
        callout: "Tournament anglers report spending more attention on manual transducer correction than on reading the sonar image itself. The tool that is supposed to give an advantage becomes the distraction.",
      },
      {
        h: "What heading hold actually does",
        body: [
          "A motorized transducer rotator with heading hold uses an integrated orientation sensor — essentially a compass — to know which direction the transducer is pointing at all times. When you set a heading, the system continuously compares the current heading to the target heading and fires the motor to correct any deviation.",
          "The correction is not reactive in the way manual correction is. It happens in real time, before drift becomes visible on screen. The transducer stays on target regardless of current, wind, or boat movement.",
          "The practical effect: you set a direction once and it holds. You can make casts, reposition the boat, fight a fish — the transducer tracks the set heading throughout.",
        ],
      },
      {
        h: "Direction Hold vs Direction Lock — what is the difference?",
        intro: "These are two distinct operating modes that serve different fishing scenarios:",
        table: [
          { feature: "Direction Hold", desc: "Continuously corrects drift to maintain a set heading. Best for current, wind, or active boat movement." },
          { feature: "Direction Lock", desc: "Locks a precise heading rigidly. No correction for boat position changes — best for targeting fixed structure from a stationary boat." },
          { feature: "Auto Search", desc: "Sweeps a configurable sector automatically. Covers water without input. Best when searching rather than targeting a known location." },
          { feature: "Manual", desc: "Direct motorized control. Instant response to pedal or remote input. Best when you need to reposition quickly." },
        ],
        outro: "Most anglers use Direction Hold the majority of the time — it handles current and drift automatically. Direction Lock is the precision tool for specific scenarios.",
      },
      {
        h: "Does this work with Garmin Panoptix LiveScope, Lowrance ActiveTarget, and Humminbird MEGA Live?",
        body: [
          "Yes — a motorized rotator mounts between your transducer bracket and the transducer itself. It is mechanically and electrically independent from the sonar system. It does not communicate with the sonar unit; it simply controls transducer direction.",
          "Kona Compass is compatible with:",
        ],
        list: [
          "<strong>Garmin Panoptix LiveScope</strong> — LVS32, LVS34, LVS34-IF",
          "<strong>Lowrance ActiveTarget</strong> — ActiveTarget, ActiveTarget 2, ActiveTarget 2 XL",
          "<strong>Humminbird MEGA Live Imaging</strong>",
        ],
        outro: "Compatibility is not brand-locked. If you switch sonar systems, the rotator stays on the boat.",
      },
      {
        h: "Manual correction: the hidden cost",
        body: [
          "The cost of manual transducer correction is not just the few seconds per drift event. It is cumulative attention drain across an entire fishing session.",
          "Every time you reach for the pole, you look away from the water. Every correction takes your hand off the rod. In tournament fishing, where a window of opportunity can last seconds, that cost is measurable.",
          "Heading hold does not make you a better angler. It removes a task that should not require your attention at all — and returns that attention to the water.",
        ],
      },
      {
        h: "What to look for in a motorized transducer rotator",
        intro: "Not all motorized rotators are equal. When evaluating options, the critical factors are:",
        list: [
          "<strong>Integrated orientation system</strong> — heading hold only works if the device has its own compass or IMU. A rotator without one cannot hold heading; it can only respond to manual input.",
          "<strong>Cross-brand compatibility</strong> — brand-locked systems require replacement if you change sonar.",
          "<strong>Included controls</strong> — wireless remote and foot pedal allow control without reaching over the side. These should come in the box, not as add-ons.",
          "<strong>Marine-grade construction</strong> — saltwater, spray, and UV exposure are constant. Stainless steel throughout eliminates galvanic corrosion risk.",
          "<strong>Maintenance requirements</strong> — sealed, composite-bearing systems require no greasing or regular service.",
        ],
      },
    ],
    faqTitle: "Common questions",
    ctaH: "Stop correcting. Start fishing.",
    ctaBody: "Join the waitlist for first access when Kona Compass pre-orders open.",
    ctaNote: "Free to join. No obligation to buy.",
    links: [
      { href: "compare", label: "Compare vs SonarPointer, LiveScanner →" },
      { href: "specs", label: "Technical specifications →" },
      { href: "instructions", label: "Operating guide →" },
    ],
    navHome: "Home", navCompare: "Compare", navSpecs: "Specs",
  },
  ru: {
    jsonLd: {
      headline: "Почему датчик LiveScope постоянно смещается — и как это исправить",
      description: "Датчик live sonar дрейфует, потому что ручные крепления не удерживают направление. Разбираем, почему LiveScope, ActiveTarget и MEGA Live не держат азимут — и что делает моторизованное удержание курса.",
      url: "https://konacompass.com/ru/blog/why-livescope-transducer-drifts",
    },
    faq: [
      { q: "Почему датчик LiveScope постоянно движется?", a: "Ручные крепления не имеют механизма удержания курса. Любое течение, волна или манёвр лодки свободно разворачивают датчик. Решение — моторизованный ротатор с удержанием курса: встроенный датчик ориентации непрерывно компенсирует дрейф." },
      { q: "Как остановить дрейф датчика live sonar?", a: "Нужен моторизованный ротатор датчика с функцией удержания курса. Kona Compass использует встроенную систему ориентации, которая фиксирует датчик на заданном азимуте и автоматически корректирует отклонения от течения, ветра или движения лодки." },
      { q: "Работает ли удержание курса с Garmin Panoptix LiveScope?", a: "Да. Kona Compass совместим с Garmin Panoptix LiveScope LVS32, LVS34 и LVS34-IF. Режим удержания курса автоматически поддерживает направление датчика вне зависимости от течения или движения лодки." },
      { q: "В чём разница между удержанием направления и фиксацией направления?", a: "Удержание направления непрерывно корректирует дрейф — лучший режим на течении и ветру. Фиксация направления жёстко фиксирует точный азимут без коррекции на движение — для стабильного наведения на конкретный объект со стационарной позиции." },
    ],
    breadcrumb: "Блог",
    tag: "Live Sonar",
    h1: "Почему датчик LiveScope постоянно смещается — и как это исправить",
    lead: "Ручные крепления не удерживают направление. Каждая волна, течение и манёвр лодки сбивают live sonar с цели — и никакое ручное выравнивание не устраняет корень проблемы.",
    meta: "Kona Compass · Апрель 2026 · 5 мин чтения",
    imgAlt: "Моторизованный ротатор датчика Kona Compass на лодке — активный режим удержания курса",
    sections: [
      {
        h: "Проблема, знакомая каждому рыболову с live sonar",
        body: [
          "Вы встаёте на точку, настраиваете Garmin Panoptix LiveScope и находите рыбу у завала. Делаете заброс — а когда смотрите обратно на экран, датчик развернулся на 40 градусов. Рыба пропала с картинки. Вы тянетесь к штанге, вручную выравниваете направление и снова ждёте дрейфа. Каждый заброс. Каждый манёвр. Каждая волна от проходящей лодки.",
          "Это не проблема LiveScope. Это не проблема ActiveTarget. Это проблема крепления — и она касается каждой системы live sonar без исключения.",
        ],
      },
      {
        h: "Почему ручные крепления не держат направление",
        body: [
          "Ручная штанга или кронштейн — пассивное крепление. Оно фиксирует то положение, которое вы задали физически, и ничего больше. Нет датчика, считывающего курс. Нет мотора, компенсирующего дрейф. Нет механизма, реагирующего на внешние силы.",
          "Когда течение давит на корпус датчика, крепление не оказывает сопротивления. Когда вы разворачиваете троллинговый мотор для смены позиции, датчик следует за силой. Когда волна качает корпус лодки, датчик уходит в сторону.",
          "Итог: live sonar смотрит в нужную сторону примерно 20% времени на воде. Остальное — коррекция.",
        ],
        callout: "Спортивные рыболовы признают, что тратят на ручную коррекцию датчика больше внимания, чем на чтение картинки сонара. Инструмент, который должен давать преимущество, сам становится отвлекающим фактором.",
      },
      {
        h: "Что на самом деле делает удержание курса",
        body: [
          "Моторизованный ротатор датчика с удержанием курса использует встроенный датчик ориентации — по сути, компас — чтобы в любой момент знать, куда направлен датчик. Когда вы задаёте курс, система непрерывно сравнивает текущий азимут с целевым и подаёт команду мотору для компенсации любого отклонения.",
          "Коррекция происходит не реактивно, как при ручном управлении. Она происходит в реальном времени — до того, как дрейф становится заметен на экране. Датчик остаётся на цели вне зависимости от течения, ветра или движения лодки.",
          "Практический эффект: вы задаёте направление один раз — и оно держится. Можно делать забросы, менять позицию, вываживать рыбу — датчик отслеживает заданный курс на протяжении всего этого.",
        ],
      },
      {
        h: "Удержание направления vs фиксация — в чём разница?",
        intro: "Это два разных режима для разных рыболовных сценариев:",
        table: [
          { feature: "Удержание направления", desc: "Непрерывно корректирует дрейф для поддержания заданного курса. Лучший режим на течении, ветру и при активном манёврировании." },
          { feature: "Фиксация направления", desc: "Жёстко фиксирует точный азимут без коррекции на движение лодки — для наведения на конкретный объект со стационарной позиции." },
          { feature: "Автопоиск", desc: "Автоматически сканирует настраиваемый сектор. Покрывает воду без ввода команд. Лучший режим при поиске рыбы." },
          { feature: "Ручной", desc: "Прямое моторизованное управление. Мгновенный отклик на педаль или пульт. Лучший режим при необходимости быстро сменить направление." },
        ],
        outro: "Большинство рыболовов используют удержание направления как основной режим — он автоматически справляется с течением и дрейфом. Фиксация — точечный инструмент для конкретных сценариев.",
      },
      {
        h: "Работает ли это с Garmin Panoptix LiveScope, Lowrance ActiveTarget и Humminbird MEGA Live?",
        body: [
          "Да — моторизованный ротатор монтируется между кронштейном датчика и самим датчиком. Он механически и электрически независим от системы сонара. Ротатор не связывается с блоком эхолота — он просто управляет направлением датчика.",
          "Kona Compass совместим с:",
        ],
        list: [
          "<strong>Garmin Panoptix LiveScope</strong> — LVS32, LVS34, LVS34-IF",
          "<strong>Lowrance ActiveTarget</strong> — ActiveTarget, ActiveTarget 2, ActiveTarget 2 XL",
          "<strong>Humminbird MEGA Live Imaging</strong>",
        ],
        outro: "Совместимость не привязана к бренду. Если вы смените систему сонара — ротатор остаётся на лодке.",
      },
      {
        h: "Скрытая цена ручной коррекции",
        body: [
          "Цена ручной коррекции датчика — это не только несколько секунд на каждое смещение. Это накопленный расход внимания на протяжении всей рыбалки.",
          "Каждый раз, когда вы тянетесь к штанге, вы отводите взгляд от воды. Каждая коррекция снимает руку со спиннинга. На соревнованиях, где окно возможностей длится секунды, эта цена измеримая.",
          "Удержание курса не делает вас лучшим рыболовом. Оно убирает задачу, которая вообще не должна требовать вашего внимания, — и возвращает это внимание воде.",
        ],
      },
      {
        h: "На что обращать внимание при выборе моторизованного ротатора",
        intro: "Не все моторизованные ротаторы одинаковы. Ключевые критерии при выборе:",
        list: [
          "<strong>Встроенная система ориентации</strong> — удержание курса работает только если устройство имеет собственный компас или IMU. Ротатор без него не может держать курс.",
          "<strong>Совместимость с несколькими брендами</strong> — системы, привязанные к одному бренду, придётся менять при смене сонара.",
          "<strong>Комплектные органы управления</strong> — беспроводной пульт и педаль должны идти в комплекте, а не продаваться отдельно.",
          "<strong>Морское исполнение</strong> — нержавеющая сталь полностью устраняет риск гальванической коррозии в солёной воде.",
          "<strong>Требования к обслуживанию</strong> — герметичные системы с композитными подшипниками не требуют смазки и сервиса.",
        ],
      },
    ],
    faqTitle: "Частые вопросы",
    ctaH: "Перестаньте корректировать. Начните ловить.",
    ctaBody: "Запишитесь в список, чтобы первыми получить доступ к предзаказу Kona Compass.",
    ctaNote: "Запись бесплатная. Без обязательств.",
    links: [
      { href: "compare", label: "Сравнение с SonarPointer и LiveScanner →" },
      { href: "specs", label: "Технические характеристики →" },
      { href: "instructions", label: "Руководство по управлению →" },
    ],
    navHome: "Главная", navCompare: "Сравнение", navSpecs: "Характеристики",
  },
} as const;

type Locale = keyof typeof content;

export default function ArticlePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const c = content[(locale as Locale) in content ? (locale as Locale) : "en"];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.jsonLd.headline,
    description: c.jsonLd.description,
    author: { "@type": "Organization", name: "Kona Compass" },
    publisher: { "@type": "Organization", name: "Kona Compass", url: "https://konacompass.com" },
    datePublished: "2026-04-20",
    dateModified: "2026-04-20",
    mainEntityOfPage: { "@type": "WebPage", "@id": c.jsonLd.url },
    inLanguage: locale,
    about: { "@type": "Thing", name: "Motorized transducer rotator" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main id="main-content" className="bg-[#050b11] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />

      <section className="py-20 lg:py-28 border-b border-white/5">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Link href={`/${locale}/blog`} className="text-xs uppercase tracking-widest text-white/30 hover:text-white transition">{c.breadcrumb}</Link>
            <span className="text-white/20">›</span>
            <span className="text-xs uppercase tracking-widest text-cyan-400/70">{c.tag}</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">{c.h1}</h1>
          <p className="mt-8 text-xl leading-8 text-white/60">{c.lead}</p>
          <p className="mt-4 text-sm text-white/30">{c.meta}</p>
        </div>
      </section>

      <section className="border-b border-white/5">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 py-10">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
            <Image src={`${basePath}/konacompas-old/image-3.webp`} alt={c.imgAlt} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 space-y-14">
          {c.sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-2xl font-semibold text-white mb-5">{s.h}</h2>
              <div className="space-y-5 text-white/60 leading-8 text-lg">
                {"intro" in s && s.intro && <p>{s.intro}</p>}
                {"body" in s && s.body?.map((p, j) => <p key={j}>{p}</p>)}
                {"callout" in s && s.callout && (
                  <div className="my-8 border-l-2 border-cyan-500/40 pl-6 text-white/70 italic leading-8">{s.callout}</div>
                )}
                {"table" in s && s.table && (
                  <div className="my-6 overflow-hidden rounded-xl border border-white/10">
                    {s.table.map((row, j) => (
                      <div key={j} className="grid grid-cols-[200px_1fr] border-b border-white/5 last:border-0">
                        <div className="py-4 px-5 text-sm font-semibold text-cyan-400 bg-white/[0.02]">{row.feature}</div>
                        <div className="py-4 px-5 text-sm text-white/55 leading-7">{row.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
                {"list" in s && s.list && (
                  <ul className="space-y-2 list-none pl-0">
                    {s.list.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-500/60" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                )}
                {"outro" in s && s.outro && <p>{s.outro}</p>}
              </div>
            </div>
          ))}
        </div>
      </article>

      <section className="py-16 border-t border-white/5 bg-[#071019]">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-10">{c.faqTitle}</h2>
          <div className="space-y-8">
            {c.faq.map((item, i) => (
              <div key={i} className="border-t border-white/5 pt-8">
                <p className="font-semibold text-white mb-3">{item.q}</p>
                <p className="text-white/55 leading-7">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 border-t border-white/5 bg-[#050b11]">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 flex flex-wrap gap-8 text-sm text-white/40">
          {c.links.map((l) => (
            <Link key={l.href} href={`/${locale}/${l.href}`} className="hover:text-white transition">{l.label}</Link>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#050b11]">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-white">{c.ctaH}</h2>
          <p className="mt-6 text-lg text-white/60">{c.ctaBody}</p>
          <div className="mt-12">
            <WaitlistForm className="mx-auto" />
            <p className="mt-4 text-xs text-white/30">{c.ctaNote}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-12 bg-[#050b11]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="relative h-8 w-10 overflow-hidden rounded-sm bg-white/95">
              <Image src={`${basePath}/konacompas-old/logo.webp`} alt="Kona Compass logo" fill className="object-contain p-1" />
            </div>
            <p className="text-xs uppercase tracking-widest text-white/40">© 2026 Kona Compass</p>
          </div>
          <nav className="flex gap-8 text-xs uppercase tracking-widest text-white/40">
            <Link href={`/${locale}`} className="hover:text-white transition">{c.navHome}</Link>
            <Link href={`/${locale}/compare`} className="hover:text-white transition">{c.navCompare}</Link>
            <Link href={`/${locale}/specs`} className="hover:text-white transition">{c.navSpecs}</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
