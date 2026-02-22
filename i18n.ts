import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "./i18n-config";

const SECTIONS = [
  "common",
  "nav",
  "catalog",
  "home",
  "forms",
  "errors",
  "about",
  "footer",
] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  const messages: Record<string, unknown> = {};

  for (const section of SECTIONS) {
    try {
      const mod = await import(`./messages/${locale}/${section}.json`);
      messages[section] = mod.default;
    } catch {
      console.warn(`[i18n] Missing: messages/${locale}/${section}.json`);
    }
  }

  return { locale, messages };
});