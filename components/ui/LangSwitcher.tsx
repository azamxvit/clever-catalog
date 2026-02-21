"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/lib/routing";
import { locales, type Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";

const LANG_LABELS: Record<Locale, string> = {
  ru: "RU",
  kz: "KZ",
};

export function LangSwitcher({ variant = "header" }: { variant?: "header" | "mobile" }) {
  const locale   = useLocale() as Locale;
  const router   = useRouter();
  const pathname = usePathname();

  function switchLocale(next: Locale) {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  if (variant === "mobile") {
    return (
      <div className="flex gap-2 px-4">
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => switchLocale(l)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors",
              l === locale ? "bg-white/15 text-white" : "text-white/50 hover:text-white"
            )}
          >
            {LANG_LABELS[l]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-white/15 p-0.5">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={cn(
            "px-2.5 py-1 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-200",
            l === locale ? "bg-white text-[#052150] shadow-sm" : "text-white/60 hover:text-white"
          )}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}