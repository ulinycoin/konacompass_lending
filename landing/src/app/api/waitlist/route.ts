import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

function buildEmailHtml(lang: "en" | "ru"): string {
  const t = {
    en: {
      preheader: "You're on the list. We'll send product details first.",
      headline: "You're on the list.",
      body1: "Thanks for your interest in Kona Compass — a precision rotator system for live sonar transducers (Garmin Panoptix, Lowrance ActiveTarget, Humminbird MEGA Live).",
      body2: "We're in the pre-launch phase. You'll be among the first to receive:",
      li1: "Full technical specifications",
      li2: "Compatibility details",
      li3: "Pricing and availability",
      li4: "First look at the product",
      cta: "View the product page",
      footer: "You received this because you signed up at konacompass.com. No spam, ever.",
    },
    ru: {
      preheader: "Вы в списке. Первыми получите информацию о продукте.",
      headline: "Вы в списке ожидания.",
      body1: "Спасибо за интерес к Kona Compass — системе точного позиционирования датчика live sonar (Garmin Panoptix, Lowrance ActiveTarget, Humminbird MEGA Live).",
      body2: "Мы на стадии пре-лонча. Вы будете в числе первых, кто получит:",
      li1: "Полные технические характеристики",
      li2: "Детали совместимости",
      li3: "Цену и условия заказа",
      li4: "Первый взгляд на продукт",
      cta: "Открыть страницу продукта",
      footer: "Вы получили это письмо, потому что оставили email на konacompass.com. Никакого спама.",
    },
  }[lang];

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kona Compass</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
</head>
<body style="margin:0;padding:0;background:#0d1b26;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

  <!-- preheader -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${t.preheader}&nbsp;&#8203;&zwnj;&nbsp;&#8203;&zwnj;&nbsp;&#8203;&zwnj;</div>

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0d1b26;">
    <tr>
      <td align="center" style="padding:40px 16px 0;">

        <!-- card -->
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;background:#111f2c;border-radius:6px;overflow:hidden;">

          <!-- top accent bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#06b6d4 0%,#0e7490 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- header -->
          <tr>
            <td style="padding:36px 40px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#06b6d4;">Kona Compass</span>
                  </td>
                  <td align="right">
                    <span style="font-size:11px;color:#4a6070;letter-spacing:0.08em;text-transform:uppercase;">Pre-launch</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- divider -->
          <tr>
            <td style="padding:0 40px;"><div style="height:1px;background:#1e3040;font-size:0;line-height:0;">&nbsp;</div></td>
          </tr>

          <!-- body -->
          <tr>
            <td style="padding:36px 40px;">

              <h1 style="margin:0 0 20px;font-size:24px;font-weight:700;color:#eef2f0;line-height:1.3;">${t.headline}</h1>

              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#8aa4b8;">${t.body1}</p>

              <p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:#8aa4b8;">${t.body2}</p>

              <!-- list -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px;">
                ${[t.li1, t.li2, t.li3, t.li4].map(item => `
                <tr>
                  <td valign="top" style="padding:4px 10px 4px 0;color:#06b6d4;font-size:15px;line-height:1.6;">—</td>
                  <td valign="top" style="padding:4px 0;font-size:15px;line-height:1.6;color:#8aa4b8;">${item}</td>
                </tr>`).join("")}
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-radius:4px;background:#06b6d4;">
                    <a href="https://konacompass.com" target="_blank"
                       style="display:inline-block;padding:13px 28px;font-size:14px;font-weight:600;color:#07111a;text-decoration:none;letter-spacing:0.03em;">${t.cta}</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- footer -->
          <tr>
            <td style="padding:0 40px;"><div style="height:1px;background:#1e3040;font-size:0;line-height:0;">&nbsp;</div></td>
          </tr>
          <tr>
            <td style="padding:24px 40px 32px;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#314a5c;">${t.footer}</p>
            </td>
          </tr>

        </table>
        <!-- /card -->

      </td>
    </tr>
    <tr>
      <td style="height:40px;">&nbsp;</td>
    </tr>
  </table>

</body>
</html>`;
}

const CONFIRMATION_EMAILS: Record<string, { subject: string; html: string }> = {
  en: {
    subject: "You're on the Kona Compass list",
    html: buildEmailHtml("en"),
  },
  ru: {
    subject: "Вы в списке Kona Compass",
    html: buildEmailHtml("ru"),
  },
};

export async function POST(req: Request) {
  const { email, locale } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email, locale: locale || "en" });

  if (error?.code === "23505") {
    return NextResponse.json({ ok: true });
  }
  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: "db_error" }, { status: 500 });
  }

  const lang = locale === "ru" ? "ru" : "en";
  const { subject, html } = CONFIRMATION_EMAILS[lang];
  const { error: emailError } = await resend.emails.send({
    from: "Kona Compass <noreply@konacompass.com>",
    to: email,
    subject,
    html,
  });
  if (emailError) {
    console.error("Resend error:", emailError);
  }

  return NextResponse.json({ ok: true });
}
