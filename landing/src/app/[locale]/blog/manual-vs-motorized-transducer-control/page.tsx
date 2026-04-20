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
      headline: "Manual vs Motorized Transducer Control: What Tournament Anglers Need to Know",
      description: "A direct comparison of manual transducer poles and motorized rotators for live sonar. Reaction time, precision, heading hold, and what changes for tournament anglers fishing Garmin LiveScope, Lowrance ActiveTarget, and Humminbird MEGA Live.",
      url: "https://konacompass.com/en/blog/manual-vs-motorized-transducer-control",
    },
    faq: [
      { q: "Is a motorized transducer rotator worth it for live sonar?", a: "For anglers who fish current, wind, or active conditions — yes. A motorized rotator with heading hold eliminates constant manual correction and lets you focus on reading the sonar image. For anglers fishing in calm, stationary conditions it is a convenience upgrade rather than a necessity." },
      { q: "Can I use a motorized transducer rotator without a trolling motor?", a: "Yes. Kona Compass is a standalone motorized rotator that mounts independently of the trolling motor. It works on any boat with a standard marine electrical system and does not require a compatible trolling motor." },
      { q: "What is the best motorized transducer rotator for Garmin Panoptix LiveScope?", a: "Kona Compass is compatible with Garmin Panoptix LiveScope LVS32, LVS34, and LVS34-IF. It offers heading hold, auto search, direction lock, wireless remote, and a control pedal — all included. It is the only rotator with a built-in orientation system for true heading-based control." },
      { q: "What is auto search mode on a transducer rotator?", a: "Auto search mode sweeps the transducer through a configurable sector angle automatically, without continuous input. It is useful when searching for fish across a flat or around structure rather than targeting a known location." },
    ],
    breadcrumb: "Blog",
    tag: "Live Sonar",
    h1: "Manual vs Motorized Transducer Control: What Tournament Anglers Need to Know",
    lead: "Manual poles are cheap, simple, and universal. Motorized rotators cost more and add complexity. Here is a direct comparison — reaction time, precision, heading hold — and when the upgrade actually changes outcomes on the water.",
    meta: "Kona Compass · April 2026 · 6 min read",
    imgAlt: "Kona Compass motorized transducer rotator — comparison with manual pole mounting",
    sections: [
      {
        h: "The setup most anglers start with",
        body: [
          "A manual transducer pole — RAM mount, Traxstech, or a DIY build — is where most live sonar setups begin. It is inexpensive, requires no power, works with any sonar brand, and fits on almost any boat. For many anglers fishing calm water from a stationary position, it is enough.",
          "The limitations become visible as soon as conditions change: current moves the boat, wind rotates the hull, the trolling motor kicks in. The transducer follows the forces acting on it, and the angler follows the transducer. Manual correction becomes a parallel activity to fishing.",
        ],
      },
      {
        h: "Reaction time: manual vs motorized",
        body: [
          "The fundamental difference between manual and motorized control is where the control loop closes. With a manual pole, the loop is: angler sees drift on screen → angler reaches for the pole → angler corrects → drift resumes. The loop closes through the angler\u2019s body.",
          "With a motorized rotator running heading hold, the loop is: orientation sensor detects heading deviation → motor corrects → heading restored. The loop closes in milliseconds, before the drift is visible on screen. The angler is outside the loop entirely.",
        ],
        callout: "In current or wind, a manual pole requires correction every 15–30 seconds on average. A motorized rotator with heading hold requires no correction at all. Over a four-hour session, that is 500–1000 corrections that do not happen.",
      },
      {
        h: "Precision: what heading hold changes",
        body: [
          "Manual correction is approximate. When you reach for the pole and re-aim the transducer, you are aiming by feel — there is no reference to a known heading, no repeatability. You aim at what looks right on screen.",
          "Heading hold uses an integrated orientation sensor to maintain a precise compass heading. If you set the transducer to 047\u00b0, the system holds 047\u00b0. When you re-engage after repositioning the boat, it returns to the same heading. Manual control cannot replicate this.",
          "For targeting specific structure — a dock piling, a brush pile edge, a channel ledge — repeatable positioning is the difference between a useful sonar image and a shifting one.",
        ],
      },
      {
        h: "The comparison: manual pole vs motorized rotator",
        compareTable: [
          { aspect: "Heading hold", manual: "None — transducer drifts freely", motorized: "Continuous, automatic — holds set heading" },
          { aspect: "Reaction to current / wind", manual: "Requires manual correction every 15–30 sec", motorized: "Corrects in real time, no input needed" },
          { aspect: "Repeatability", manual: "Approximate — aiming by feel", motorized: "Precise heading — returns to exact angle" },
          { aspect: "Auto search", manual: "Not possible", motorized: "Configurable sector sweep, hands-free" },
          { aspect: "Remote control", manual: "None — requires physical reach", motorized: "Wireless remote + foot pedal from anywhere on boat" },
          { aspect: "Brand compatibility", manual: "Universal", motorized: "Kona Compass: Garmin, Lowrance, Humminbird" },
          { aspect: "Installation", manual: "Mount and done", motorized: "Power connection required, 30–60 min install" },
          { aspect: "Cost", manual: "Low", motorized: "Higher — premium component" },
        ],
        compareHeaders: { col1: "Manual pole", col2: "Motorized rotator" },
      },
      {
        h: "When manual is still the right answer",
        intro: "Manual control is not obsolete. For anglers who:",
        list: [
          "Fish primarily from an anchored or staked-out position in calm water",
          "Do not fish in current or conditions that cause regular drift",
          "Are running a simple setup without trolling motor or pedal control",
          "Are just getting started with live sonar and learning the basics",
        ],
        outro: "...a manual pole is a sensible and cost-effective choice. The limitation only becomes a performance constraint when conditions or fishing style demand more.",
      },
      {
        h: "When motorized control changes outcomes",
        intro: "The upgrade is most impactful for anglers who:",
        list: [
          "<strong>Fish current regularly</strong> — rivers, tidal zones, points with flow. Manual correction in current is continuous; heading hold eliminates it.",
          "<strong>Fish from a moving platform</strong> — drift fishing, trolling, or repositioning frequently. The transducer stays on heading while the boat moves.",
          "<strong>Fish tournaments</strong> — where attention is a performance variable. Every second spent on transducer correction is a second not reading the sonar.",
          "<strong>Target specific structure</strong> — precise, repeatable heading positioning is not achievable with a manual pole.",
          "<strong>Fish solo</strong> — no co-angler to handle the sonar. Foot pedal and wireless remote make single-handed operation practical.",
        ],
      },
      {
        h: "Auto search: a mode with no manual equivalent",
        body: [
          "One capability of motorized rotators has no manual analogue: auto search. In this mode, the rotator sweeps a configurable sector — say, 120\u00b0 — automatically, without any input from the angler.",
          "For search fishing — working a flat, covering a long point, checking around structure — auto search replaces the continuous manual sweep that would otherwise require constant pedal or hand input. The transducer covers water; the angler watches the screen.",
          "The sector angle is adjustable: narrow for tight coverage of a specific area, wide for open-water search. This is not a feature that can be replicated with a manual pole regardless of angler effort.",
        ],
      },
      {
        h: "Does the trolling motor matter?",
        body: [
          "Some motorized solutions integrate directly with the trolling motor — LiveScanner, for example, syncs rotation with motor heading. This is elegant but adds a hard dependency: you need a compatible trolling motor, and the system does not work independently.",
          "Kona Compass is a standalone rotator. It runs on a standard marine electrical connection, mounts independently, and works with any trolling motor or no trolling motor at all. The heading hold is derived from the rotator\u2019s own orientation sensor, not from motor feedback.",
          "For anglers who want to keep their trolling motor choice independent from their sonar control, standalone mounting is the more flexible architecture.",
        ],
      },
    ],
    faqTitle: "Common questions",
    ctaH: "Stop correcting. Start fishing.",
    ctaBody: "Join the waitlist for first access when Kona Compass pre-orders open.",
    ctaNote: "Free to join. No obligation to buy.",
    links: [
      { href: "blog/why-livescope-transducer-drifts", label: "Why LiveScope transducer drifts →" },
      { href: "compare", label: "Compare vs SonarPointer, LiveScanner →" },
      { href: "specs", label: "Technical specifications →" },
    ],
    navHome: "Home", navCompare: "Compare", navSpecs: "Specs",
  },
  ru: {
    jsonLd: {
      headline: "Ручное vs моторизованное управление датчиком: что нужно знать спортивным рыболовам",
      description: "Прямое сравнение ручных штанг и моторизованных ротаторов для live sonar. Время реакции, точность, удержание курса — и когда апгрейд реально меняет результат на воде.",
      url: "https://konacompass.com/ru/blog/manual-vs-motorized-transducer-control",
    },
    faq: [
      { q: "Стоит ли моторизованный ротатор датчика своих денег для live sonar?", a: "Для рыболовов, которые ловят на течении, ветру или в активных условиях — да. Ротатор с удержанием курса устраняет постоянную ручную коррекцию и позволяет сосредоточиться на чтении картинки. Для спокойной ловли со стационарной позиции — это удобство, а не необходимость." },
      { q: "Можно ли использовать моторизованный ротатор датчика без троллингового мотора?", a: "Да. Kona Compass — автономный ротатор, который монтируется независимо от троллингового мотора. Работает на любой лодке со стандартной морской электросетью, совместимый троллинговый мотор не нужен." },
      { q: "Какой моторизованный ротатор лучший для Garmin Panoptix LiveScope?", a: "Kona Compass совместим с Garmin Panoptix LiveScope LVS32, LVS34 и LVS34-IF. В комплекте: удержание курса, автопоиск, фиксация направления, беспроводной пульт и педаль управления. Единственный ротатор со встроенной системой ориентации для настоящего управления по азимуту." },
      { q: "Что такое режим автопоиска на ротаторе датчика?", a: "Автопоиск автоматически сканирует датчиком настраиваемый сектор без постоянного ввода команд. Полезен при поиске рыбы по площади или вокруг объектов — вместо того, чтобы целиться в конкретное место." },
    ],
    breadcrumb: "Блог",
    tag: "Live Sonar",
    h1: "Ручное vs моторизованное управление датчиком: что нужно знать спортивным рыболовам",
    lead: "Ручные штанги дёшевы, просты и универсальны. Моторизованные ротаторы дороже и сложнее. Прямое сравнение — время реакции, точность, удержание курса — и когда апгрейд реально меняет результат на воде.",
    meta: "Kona Compass · Апрель 2026 · 6 мин чтения",
    imgAlt: "Моторизованный ротатор датчика Kona Compass — сравнение с ручным креплением",
    sections: [
      {
        h: "С чего начинает большинство рыболовов",
        body: [
          "Ручная штанга датчика — RAM mount, Traxstech или самодельное решение — это отправная точка большинства live sonar сетапов. Дёшево, не требует питания, работает с любым брендом эхолота и подходит почти для любой лодки. Для многих рыболовов, которые ловят в спокойной воде со стационарной позиции, этого достаточно.",
          "Ограничения становятся видны, как только условия меняются: течение двигает лодку, ветер разворачивает корпус, включается троллинговый мотор. Датчик следует за действующими на него силами, а рыболов следует за датчиком. Ручная коррекция превращается в параллельную активность во время ловли.",
        ],
      },
      {
        h: "Время реакции: ручное vs моторизованное",
        body: [
          "Принципиальная разница между ручным и моторизованным управлением — в том, где замыкается контур управления. С ручной штангой контур выглядит так: рыболов видит дрейф на экране → тянется к штанге → корректирует → дрейф возобновляется. Контур замыкается через тело рыболова.",
          "С моторизованным ротатором в режиме удержания курса контур такой: датчик ориентации фиксирует отклонение → мотор корректирует → курс восстановлен. Контур замыкается за миллисекунды — до того, как дрейф становится заметен на экране. Рыболов полностью выведен из контура.",
        ],
        callout: "На течении или ветру ручная штанга требует коррекции в среднем каждые 15–30 секунд. Моторизованный ротатор с удержанием курса не требует коррекции вообще. За четырёхчасовую сессию это 500–1000 коррекций, которых не происходит.",
      },
      {
        h: "Точность: что меняет удержание курса",
        body: [
          "Ручная коррекция приблизительна. Когда вы тянетесь к штанге и перенаправляете датчик, вы целитесь на ощупь — нет привязки к известному азимуту, нет повторяемости. Вы целитесь туда, куда кажется правильным по картинке.",
          "Удержание курса использует встроенный датчик ориентации для поддержания точного компасного курса. Если вы выставили датчик на 047°, система держит 047°. Когда вы снова включаете режим после смены позиции, датчик возвращается к тому же азимуту. Ручное управление не может этого повторить.",
          "Для наведения на конкретный объект — свая дока, край завала, бровка канала — повторяемое позиционирование — это разница между полезной картинкой сонара и постоянно смещающейся.",
        ],
      },
      {
        h: "Сравнение: ручная штанга vs моторизованный ротатор",
        compareTable: [
          { aspect: "Удержание курса", manual: "Нет — датчик дрейфует свободно", motorized: "Непрерывное, автоматическое — держит заданный курс" },
          { aspect: "Реакция на течение / ветер", manual: "Ручная коррекция каждые 15–30 сек", motorized: "Корректирует в реальном времени, без ввода команд" },
          { aspect: "Повторяемость", manual: "Приблизительная — наведение на ощупь", motorized: "Точный азимут — возврат к тому же углу" },
          { aspect: "Автопоиск", manual: "Невозможен", motorized: "Настраиваемый сектор сканирования, без рук" },
          { aspect: "Дистанционное управление", manual: "Нет — требует физического доступа", motorized: "Беспроводной пульт + педаль из любой точки лодки" },
          { aspect: "Совместимость с брендами", manual: "Универсальная", motorized: "Kona Compass: Garmin, Lowrance, Humminbird" },
          { aspect: "Установка", manual: "Смонтировал и готово", motorized: "Требует подключения питания, 30–60 мин установки" },
          { aspect: "Стоимость", manual: "Низкая", motorized: "Выше — премиальный компонент" },
        ],
        compareHeaders: { col1: "Ручная штанга", col2: "Моторизованный ротатор" },
      },
      {
        h: "Когда ручное управление — всё ещё правильный выбор",
        intro: "Ручное управление не устарело. Для рыболовов, которые:",
        list: [
          "Ловят преимущественно с якоря или шеста в спокойной воде",
          "Не ловят на течении или в условиях, вызывающих регулярный дрейф",
          "Используют простой сетап без троллингового мотора или педального управления",
          "Только начинают работать с live sonar и осваивают основы",
        ],
        outro: "...ручная штанга — разумный и экономичный выбор. Ограничения становятся реальным барьером только когда условия или стиль ловли требуют большего.",
      },
      {
        h: "Когда моторизованное управление меняет результат",
        intro: "Апгрейд наиболее значим для рыболовов, которые:",
        list: [
          "<strong>Регулярно ловят на течении</strong> — реки, приливные зоны, точки с потоком. Ручная коррекция на течении непрерывна; удержание курса устраняет её.",
          "<strong>Ловят с движущейся платформы</strong> — дрейфовая ловля, троллинг или частая смена позиции. Датчик держит курс пока лодка движется.",
          "<strong>Участвуют в соревнованиях</strong> — где внимание является переменной результата. Каждая секунда на коррекции датчика — секунда не на чтении сонара.",
          "<strong>Работают по конкретным объектам</strong> — точное повторяемое позиционирование недостижимо с ручной штангой.",
          "<strong>Ловят соло</strong> — без напарника для управления сонаром. Педаль и беспроводной пульт делают работу одной рукой практичной.",
        ],
      },
      {
        h: "Автопоиск: режим без ручного аналога",
        body: [
          "Одна возможность моторизованных ротаторов не имеет ручного аналога: автопоиск. В этом режиме ротатор автоматически сканирует настраиваемый сектор — например, 120° — без каких-либо команд от рыболова.",
          "При поисковой ловле — облов отмели, длинной точки, проверка вокруг объекта — автопоиск заменяет непрерывное ручное сканирование, которое иначе требовало бы постоянного нажатия педали или кнопок. Датчик покрывает воду; рыболов смотрит на экран.",
          "Угол сектора настраивается: узкий для точечного покрытия конкретной зоны, широкий для поиска по открытой воде. Это функция, которую невозможно воспроизвести ручной штангой вне зависимости от усилий рыболова.",
        ],
      },
      {
        h: "Имеет ли значение троллинговый мотор?",
        body: [
          "Некоторые моторизованные решения интегрируются напрямую с троллинговым мотором — LiveScanner, например, синхронизирует вращение с курсом мотора. Это элегантно, но создаёт жёсткую зависимость: нужен совместимый троллинговый мотор, и система не работает автономно.",
          "Kona Compass — автономный ротатор. Работает от стандартного морского подключения, монтируется независимо и совместим с любым троллинговым мотором или вообще без него. Удержание курса основано на собственном датчике ориентации ротатора, а не на обратной связи от мотора.",
          "Для рыболовов, которые хотят сохранить свободу выбора троллингового мотора независимо от управления сонаром, автономное крепление — более гибкая архитектура.",
        ],
      },
    ],
    faqTitle: "Частые вопросы",
    ctaH: "Перестаньте корректировать. Начните ловить.",
    ctaBody: "Запишитесь в список, чтобы первыми получить доступ к предзаказу Kona Compass.",
    ctaNote: "Запись бесплатная. Без обязательств.",
    links: [
      { href: "blog/why-livescope-transducer-drifts", label: "Почему датчик LiveScope дрейфует →" },
      { href: "compare", label: "Сравнение с SonarPointer и LiveScanner →" },
      { href: "specs", label: "Технические характеристики →" },
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
            <Image src={`${basePath}/konacompas-old/image-4.png`} alt={c.imgAlt} fill className="object-cover" priority />
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
                {"compareTable" in s && s.compareTable && (
                  <div className="my-6 overflow-hidden rounded-xl border border-white/10 text-sm">
                    <div className="grid grid-cols-[140px_1fr_1fr] border-b border-white/10 bg-white/[0.03]">
                      <div className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white/20" />
                      <div className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white/40">{"compareHeaders" in s ? s.compareHeaders.col1 : ""}</div>
                      <div className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-cyan-400">{"compareHeaders" in s ? s.compareHeaders.col2 : ""}</div>
                    </div>
                    {s.compareTable.map((row, j) => (
                      <div key={j} className="grid grid-cols-[140px_1fr_1fr] border-b border-white/5 last:border-0">
                        <div className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white/25 bg-white/[0.01]">{row.aspect}</div>
                        <div className="py-3 px-4 text-white/45 leading-6">{row.manual}</div>
                        <div className="py-3 px-4 text-cyan-100/70 leading-6">{row.motorized}</div>
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
              <Image src={`${basePath}/konacompas-old/logo.png`} alt="Kona Compass logo" fill className="object-contain p-1" />
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
