import { createHmac } from "crypto";

function secret(): string {
  const s = process.env.UNSUBSCRIBE_SECRET;
  if (!s) throw new Error("UNSUBSCRIBE_SECRET is not set");
  return s;
}

export function signEmail(email: string): string {
  return createHmac("sha256", secret()).update(email.toLowerCase()).digest("hex");
}

export function verifyToken(email: string, token: string): boolean {
  const expected = signEmail(email.toLowerCase());
  // Constant-time comparison
  if (expected.length !== token.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ token.charCodeAt(i);
  }
  return diff === 0;
}

export function unsubscribeUrl(email: string, locale: string): string {
  const token = signEmail(email);
  const params = new URLSearchParams({ email, token });
  return `https://konacompass.com/${locale}/unsubscribe?${params}`;
}
