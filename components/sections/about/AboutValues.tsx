"use client";

// components/sections/about/AboutValues.tsx
import { useTranslations } from "next-intl";
import { ShieldCheck, Sparkles, MessageCircle, Clock } from "lucide-react";

const VALUE_KEYS = ["quality", "design", "service", "speed"] as const;
const VALUE_ICONS = { quality: ShieldCheck, design: Sparkles, service: MessageCircle, speed: Clock };

export function AboutValues() {
  const t = useTranslations("about.values");

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        <div className="text-center max-w-[500px] mx-auto mb-14">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#052150]/40 mb-3">
            {t("sectionLabel")}
          </p>
          <h2 className="text-[38px] sm:text-[46px] font-semibold text-[#052150] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {t("sectionTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_KEYS.map((key) => {
            const Icon = VALUE_ICONS[key];
            return (
              <div key={key} className="p-7 rounded-2xl border border-[#e8e4de] hover:border-[#052150]/15 hover:shadow-[0_4px_24px_rgba(5,33,80,0.07)] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#052150]/6 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#052150]/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-semibold text-[#052150] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {t(`${key}Title`)}
                </h3>
                <p className="text-[13px] text-[#052150]/55 leading-relaxed">
                  {t(`${key}Desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}