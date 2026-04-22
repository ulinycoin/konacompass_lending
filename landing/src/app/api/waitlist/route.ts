import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);


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
<html lang="${lang}" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>Kona Compass</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
  <style>
    :root { color-scheme: dark; supported-color-schemes: dark; }
    body { margin: 0; padding: 0; background-color: #07111a !important; }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#07111a;-webkit-text-size-adjust:100%;mso-line-height-rule:exactly;">

  <!-- preheader -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;color:#07111a;">${t.preheader}&nbsp;&#8203;&zwnj;&nbsp;&#8203;&zwnj;&nbsp;&#8203;&zwnj;&nbsp;&#8203;&zwnj;&nbsp;&#8203;&zwnj;</div>

  <!-- outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#07111a" style="background-color:#07111a;">
    <tr>
      <td align="center" style="padding:48px 16px 48px;">

        <!-- card -->
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;background-color:#0d1f2d;border:1px solid #1a3040;">

          <!-- cyan top bar -->
          <tr>
            <td height="3" style="background-color:#06b6d4;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- logo -->
          <tr>
            <td align="center" style="padding:36px 40px 28px;background-color:#0d1f2d;">
              <a href="https://konacompass.com" target="_blank" style="display:inline-block;text-decoration:none;">
                <img src="https://konacompass.com/branding/logo.png"
                     alt="Kona Compass"
                     width="120"
                     height="120"
                     style="display:block;border:0;width:120px;height:120px;object-fit:contain;" />
              </a>
            </td>
          </tr>

          <!-- divider -->
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td height="1" style="background-color:#1a3040;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          <!-- body -->
          <tr>
            <td style="padding:36px 40px 40px;background-color:#0d1f2d;">

              <h1 style="margin:0 0 20px;font-size:26px;font-weight:700;color:#eef2f0;line-height:1.25;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">${t.headline}</h1>

              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#7a9ab0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">${t.body1}</p>

              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#7a9ab0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">${t.body2}</p>

              <!-- list -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 0 32px;">
                ${[t.li1, t.li2, t.li3, t.li4].map(item => `
                <tr>
                  <td valign="top" width="20" style="padding:5px 12px 5px 0;color:#06b6d4;font-size:16px;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">—</td>
                  <td valign="top" style="padding:5px 0;font-size:15px;line-height:1.5;color:#7a9ab0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">${item}</td>
                </tr>`).join("")}
              </table>

              <!-- CTA button -->
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#06b6d4;border-radius:3px;">
                    <a href="https://konacompass.com" target="_blank"
                       style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:600;color:#07111a;text-decoration:none;letter-spacing:0.04em;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">${t.cta}</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- footer divider -->
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td height="1" style="background-color:#1a3040;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          <!-- footer text -->
          <tr>
            <td style="padding:20px 40px 28px;background-color:#0d1f2d;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#2e4a5c;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">${t.footer}</p>
            </td>
          </tr>

        </table>
        <!-- /card -->

      </td>
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

  if (error && error.code !== "23505") {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: "db_error" }, { status: 500 });
  }

  const lang = locale === "ru" ? "ru" : "en";
  const { subject, html } = CONFIRMATION_EMAILS[lang];
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error: emailError } = await resend.emails.send({
    from: "Kona Compass <noreply@konacompass.com>",
    to: email,
    subject,
    html,
  });
  if (emailError) {
    console.error("Resend error:", JSON.stringify(emailError));
  } else {
    console.log("Resend: email sent to", email);
  }

  return NextResponse.json({ ok: true });
}
