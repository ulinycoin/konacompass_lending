import type { LegalSection } from "@/components/LegalDocument";

type Locale = "en" | "ru";

type LegalPageCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  footerTitle: string;
  footerText: string;
  contactTitle: string;
  backLinkLabel: string;
};

const privacy: Record<Locale, LegalPageCopy> = {
  en: {
    eyebrow: "Privacy Notice",
    title: "Privacy Notice",
    intro: "This notice explains how Kona Compass processes personal data collected through the website, including the waitlist form and any direct contact you send us.",
    sections: [
      {
        title: "What we collect",
        paragraphs: [
          "We may collect your email address when you join the waitlist, and any details you voluntarily send through the contact channels shown on the site.",
          "We may also process technical information needed to run the website securely, such as server logs and consent preferences.",
        ],
      },
      {
        title: "Why we use it",
        paragraphs: [
          "We use your email to manage the waitlist, send launch updates, and notify you when pre-orders or related brand communications open.",
          "We use technical data to keep the site secure, maintain performance, and understand basic site usage when you consent to analytics.",
        ],
      },
      {
        title: "Legal basis",
        paragraphs: [
          "We process waitlist data based on your consent. You can withdraw consent at any time by contacting us or using any unsubscribe option we provide later.",
          "We may process limited technical data on the basis of our legitimate interests in operating and securing the website, where permitted by law.",
        ],
      },
      {
        title: "Retention and sharing",
        paragraphs: [
          "We keep waitlist data only as long as it is needed for launch communication, pre-order preparation, or another permitted business purpose.",
          "We may use trusted service providers to host the site, send email, or store data, but only under appropriate processing terms. If data is transferred outside the EU or EEA, we will disclose that in the final policy text.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "You may request access, correction, deletion, restriction, portability, or objection where those rights apply under the GDPR.",
          "You also have the right to lodge a complaint with your local data protection authority if you believe your rights have been infringed.",
        ],
      },
    ],
    footerTitle: "Website operator",
    footerText: "Kona Compass is a pre-launch brand site. Final company and legal entity details will be published before commercial launch.",
    contactTitle: "Contact",
    backLinkLabel: "Back to home",
  },
  ru: {
    eyebrow: "Политика конфиденциальности",
    title: "Политика конфиденциальности",
    intro: "Этот документ объясняет, как Kona Compass обрабатывает персональные данные, которые вы оставляете через сайт, включая форму списка ожидания и прямые обращения.",
    sections: [
      {
        title: "Что мы собираем",
        paragraphs: [
          "Мы можем собирать ваш email, когда вы записываетесь в лист ожидания, а также любые данные, которые вы добровольно отправляете через контактные каналы на сайте.",
          "Мы также можем обрабатывать технические данные, необходимые для безопасной работы сайта, включая серверные логи и настройки согласий.",
        ],
      },
      {
        title: "Зачем мы это делаем",
        paragraphs: [
          "Мы используем email для ведения листа ожидания, отправки новостей о запуске и уведомлений о старте предзаказа или брендовых коммуникаций.",
          "Технические данные используются для безопасности, стабильной работы сайта и базовой аналитики при вашем согласии на аналитику.",
        ],
      },
      {
        title: "Правовое основание",
        paragraphs: [
          "Данные листа ожидания обрабатываются на основании вашего согласия. Вы можете отозвать согласие в любой момент через обращение к нам или через отписку, если она будет доступна позже.",
          "Ограниченные технические данные могут обрабатываться на основании законного интереса для работы и защиты сайта, если это допускается законом.",
        ],
      },
      {
        title: "Хранение и передача",
        paragraphs: [
          "Мы храним данные листа ожидания только столько, сколько нужно для коммуникации по запуску, подготовки предзаказа или другой допустимой деловой цели.",
          "Мы можем использовать проверенных подрядчиков для хостинга, email-рассылки и хранения данных, но только на надлежащих условиях. Если данные будут передаваться за пределы ЕС или ЕЭЗ, это будет раскрыто в финальной версии политики.",
        ],
      },
      {
        title: "Ваши права",
        paragraphs: [
          "Вы можете запросить доступ, исправление, удаление, ограничение обработки, переносимость данных или возражение там, где эти права применимы по GDPR.",
          "Вы также можете подать жалобу в местный орган по защите данных, если считаете, что ваши права были нарушены.",
        ],
      },
    ],
    footerTitle: "Оператор сайта",
    footerText: "Kona Compass — это сайт бренда до запуска продаж. Финальные данные о компании и юридическом лице будут опубликованы до коммерческого старта.",
    contactTitle: "Контакты",
    backLinkLabel: "На главную",
  },
};

const cookies: Record<Locale, LegalPageCopy> = {
  en: {
    eyebrow: "Cookie Policy",
    title: "Cookie Policy",
    intro: "This page explains how Kona Compass uses cookies and similar technologies on the website.",
    sections: [
      {
        title: "Necessary cookies",
        paragraphs: [
          "Necessary cookies support essential site functions, such as remembering your consent choice and keeping core features working.",
          "These cookies do not require consent because the site cannot operate properly without them.",
        ],
      },
      {
        title: "Analytics cookies",
        paragraphs: [
          "If analytics is enabled later, it will be used only after you opt in through the consent banner.",
          "Analytics helps us understand general website usage in aggregated form so we can improve performance and content.",
        ],
      },
      {
        title: "Third-party content",
        paragraphs: [
          "External embeds, such as video players or map services, may set their own cookies or access device information.",
          "We block third-party content until you allow it through the consent controls where that content is used.",
        ],
      },
      {
        title: "Managing cookies",
        paragraphs: [
          "You can change your cookie preferences at any time through the banner or by clearing browser storage.",
          "If you reject non-essential cookies, the website will remain usable, but analytics and embedded content may stay disabled.",
        ],
      },
    ],
    footerTitle: "Cookie settings",
    footerText: "You can review or change your choices in the banner whenever it appears again on this browser.",
    contactTitle: "Contact",
    backLinkLabel: "Back to home",
  },
  ru: {
    eyebrow: "Политика cookies",
    title: "Политика cookies",
    intro: "На этой странице объясняется, как Kona Compass использует cookies и похожие технологии на сайте.",
    sections: [
      {
        title: "Необходимые cookies",
        paragraphs: [
          "Необходимые cookies поддерживают базовые функции сайта, например запоминают выбранное вами согласие и обеспечивают работу основных элементов.",
          "Эти cookies не требуют согласия, потому что без них сайт не будет работать корректно.",
        ],
      },
      {
        title: "Аналитические cookies",
        paragraphs: [
          "Если аналитика будет подключена позже, она будет работать только после вашего согласия в баннере.",
          "Аналитика помогает понимать общую статистику использования сайта в агрегированном виде и улучшать контент и производительность.",
        ],
      },
      {
        title: "Сторонний контент",
        paragraphs: [
          "Внешние встраивания, например видео или карты, могут устанавливать свои cookies или получать информацию об устройстве.",
          "Такой контент блокируется до тех пор, пока вы не разрешите его через элементы согласия там, где он используется.",
        ],
      },
      {
        title: "Управление cookies",
        paragraphs: [
          "Вы можете изменить выбор в любой момент через баннер или очистив данные браузера.",
          "Если вы откажетесь от не-необходимых cookies, сайт останется доступен, но аналитика и встроенный контент могут быть отключены.",
        ],
      },
    ],
    footerTitle: "Настройки cookies",
    footerText: "Вы можете пересмотреть выбор, когда баннер появится снова в этом браузере.",
    contactTitle: "Контакты",
    backLinkLabel: "На главную",
  },
};

const terms: Record<Locale, LegalPageCopy> = {
  en: {
    eyebrow: "Terms of Use",
    title: "Terms of Use",
    intro: "These terms cover use of the Kona Compass website while the product is still in pre-launch mode.",
    sections: [
      {
        title: "Website status",
        paragraphs: [
          "The website is informational and promotional. Joining the waitlist does not create a purchase contract or reservation unless we state otherwise in future sales terms.",
          "Product details, release timing, and commercial terms may change before launch as development and go-to-market planning continue.",
        ],
      },
      {
        title: "Acceptable use",
        paragraphs: [
          "You agree not to misuse the website, interfere with its operation, or attempt unauthorized access to systems or content.",
          "You must not submit false information through the waitlist or contact forms.",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "The website, product name, text, imagery, and brand assets are owned by Kona Compass or used with permission.",
          "You may view and share public pages for personal or informational purposes, but you may not copy or reuse brand assets without permission.",
        ],
      },
      {
        title: "Commercial launch",
        paragraphs: [
          "When pre-orders open, additional sales terms, shipping terms, return terms, and consumer notices will apply and may supersede this page where relevant.",
          "If there is any conflict between these terms and future sales terms, the future sales terms will control for the commercial transaction.",
        ],
      },
    ],
    footerTitle: "Pre-launch terms",
    footerText: "This page will be updated with final sales terms before orders can be placed.",
    contactTitle: "Contact",
    backLinkLabel: "Back to home",
  },
  ru: {
    eyebrow: "Условия использования",
    title: "Условия использования",
    intro: "Эти условия относятся к использованию сайта Kona Compass, пока продукт находится на стадии до запуска.",
    sections: [
      {
        title: "Статус сайта",
        paragraphs: [
          "Сайт носит информационный и промо-характер. Запись в лист ожидания не создаёт договор покупки или бронирования, если иное не будет указано в будущих условиях продаж.",
          "Детали продукта, сроки выхода и коммерческие условия могут измениться до запуска по мере развития продукта и подготовки к рынку.",
        ],
      },
      {
        title: "Допустимое использование",
        paragraphs: [
          "Вы соглашаетесь не злоупотреблять сайтом, не мешать его работе и не пытаться получить несанкционированный доступ к системам или контенту.",
          "Не отправляйте ложные данные через форму листа ожидания или контактные формы.",
        ],
      },
      {
        title: "Интеллектуальная собственность",
        paragraphs: [
          "Сайт, название продукта, тексты, изображения и брендовые материалы принадлежат Kona Compass или используются с разрешения.",
          "Вы можете просматривать и делиться публичными страницами в личных или информационных целях, но не можете копировать или использовать брендовые материалы без разрешения.",
        ],
      },
      {
        title: "Коммерческий запуск",
        paragraphs: [
          "Когда откроется предзаказ, будут действовать отдельные условия продаж, доставки, возврата и уведомления для потребителей, которые могут иметь приоритет над этой страницей.",
          "Если между этими условиями и будущими условиями продаж возникнет конфликт, для коммерческой сделки будут применяться будущие условия продаж.",
        ],
      },
    ],
    footerTitle: "Предзапусковые условия",
    footerText: "Эта страница будет обновлена финальными условиями продаж до того, как можно будет оформить заказ.",
    contactTitle: "Контакты",
    backLinkLabel: "На главную",
  },
};

const legalNotice: Record<Locale, LegalPageCopy> = {
  en: {
    eyebrow: "Legal Notice",
    title: "Legal Notice",
    intro: "This page identifies the website operator and the contact point for the Kona Compass brand site.",
    sections: [
      {
        title: "Website operator",
        paragraphs: [
          "Kona Compass operates this pre-launch brand website and is responsible for the content published here.",
          "Final legal entity details should be added here before commercial launch, including the registered company name and business address.",
        ],
      },
      {
        title: "Contact details",
        paragraphs: [
          "Email: konacompas@gmail.com",
          "Phone: +371 20546403",
          "Instagram: @konacompass",
        ],
      },
      {
        title: "Website purpose",
        paragraphs: [
          "The site presents the brand, collects waitlist signups, and prepares visitors for a future pre-order launch.",
          "It does not currently process paid orders.",
        ],
      },
      {
        title: "Publication note",
        paragraphs: [
          "Before pre-orders open, this page should be updated with the final legal entity, country of registration, and any other legally required corporate information.",
        ],
      },
    ],
    footerTitle: "Operator note",
    footerText: "Add the final company registration details here before the site starts taking pre-orders.",
    contactTitle: "Contact",
    backLinkLabel: "Back to home",
  },
  ru: {
    eyebrow: "Юридическая информация",
    title: "Юридическая информация",
    intro: "На этой странице указаны оператор сайта и контактная точка для бренда Kona Compass.",
    sections: [
      {
        title: "Оператор сайта",
        paragraphs: [
          "Kona Compass управляет этим предзапусковым брендовым сайтом и отвечает за опубликованный здесь контент.",
          "Перед коммерческим запуском сюда нужно добавить финальные данные о юридическом лице, включая зарегистрированное название компании и адрес.",
        ],
      },
      {
        title: "Контактные данные",
        paragraphs: [
          "Email: konacompas@gmail.com",
          "Телефон: +371 20546403",
          "Instagram: @konacompass",
        ],
      },
      {
        title: "Назначение сайта",
        paragraphs: [
          "Сайт представляет бренд, собирает записи в лист ожидания и готовит аудиторию к будущему предзаказу.",
          "Сейчас на нём не обрабатываются платные заказы.",
        ],
      },
      {
        title: "Примечание к публикации",
        paragraphs: [
          "До открытия предзаказа эту страницу нужно обновить финальными данными о юридическом лице, стране регистрации и другой обязательной корпоративной информацией.",
        ],
      },
    ],
    footerTitle: "Примечание оператора",
    footerText: "Добавьте сюда финальные регистрационные данные компании до старта предзаказа.",
    contactTitle: "Контакты",
    backLinkLabel: "На главную",
  },
};

export function getPrivacyCopy(locale: Locale) {
  return privacy[locale] ?? privacy.en;
}

export function getCookiesCopy(locale: Locale) {
  return cookies[locale] ?? cookies.en;
}

export function getTermsCopy(locale: Locale) {
  return terms[locale] ?? terms.en;
}

export function getLegalNoticeCopy(locale: Locale) {
  return legalNotice[locale] ?? legalNotice.en;
}
