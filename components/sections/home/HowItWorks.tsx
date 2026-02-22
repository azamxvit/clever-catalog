"use client";

// components/sections/home/HowItWorks.tsx
import { useTranslations } from "next-intl";

const STEPS = ["step1", "step2", "step3"] as const;

export function HowItWorks() {
  const t = useTranslations("home.howItWorks");

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        <div className="text-center mb-14">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#052150]/40 mb-3">
            {t("sectionLabel")}
          </p>
          <h2
            className="text-[38px] sm:text-[48px] font-semibold text-[#052150] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {t("sectionTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STEPS.map((key, i) => (
            <div
              key={key}
              className="relative p-7 rounded-2xl border border-[#e8e4de] hover:border-[#052150]/15 transition-colors"
            >
              <span
                className="block text-[64px] font-semibold leading-none text-[#052150]/6 mb-4 select-none"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                0{i + 1}
              </span>
              <h3
                className="text-[20px] font-semibold text-[#052150] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {t(`${key}Title`)}
              </h3>
              <p className="text-[14px] text-[#052150]/55 leading-relaxed">
                {t(`${key}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}