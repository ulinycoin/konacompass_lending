export type ConsentState = {
  necessary: true;
  analytics: boolean;
  thirdParty: boolean;
  updatedAt: string;
};

export const CONSENT_STORAGE_KEY = "kona-compass-consent-v1";

export const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  thirdParty: false,
  updatedAt: "",
};

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.thirdParty !== "boolean") {
      return null;
    }

    return {
      necessary: true,
      analytics: parsed.analytics,
      thirdParty: parsed.thirdParty,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

export function writeConsent(consent: Omit<ConsentState, "updatedAt">) {
  if (typeof window === "undefined") return;

  const payload: ConsentState = {
    ...consent,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
}
