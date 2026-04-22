import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/unsubscribe";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email") ?? "";
  const token = searchParams.get("token") ?? "";
  const locale = searchParams.get("locale") === "ru" ? "ru" : "en";

  if (!email || !token || !verifyToken(email, token)) {
    const url = new URL(req.url);
    url.pathname = `/${locale}/unsubscribe`;
    url.search = "?error=invalid";
    return NextResponse.redirect(url);
  }

  const { error } = await supabase
    .from("waitlist")
    .delete()
    .eq("email", email.toLowerCase());

  if (error) {
    console.error("Unsubscribe error:", error);
    const url = new URL(req.url);
    url.pathname = `/${locale}/unsubscribe`;
    url.search = "?error=server";
    return NextResponse.redirect(url);
  }

  const url = new URL(req.url);
  url.pathname = `/${locale}/unsubscribe`;
  url.search = "?done=1";
  return NextResponse.redirect(url);
}
