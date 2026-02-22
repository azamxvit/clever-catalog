"use client";

// src/components/sections/about/AboutHero.tsx
import { useTranslations } from "next-intl";

export function AboutHero() {
  const t = useTranslations("pages.about.hero");

  return (
    <section className="relative bg-[#052150] pt-36 pb-24 overflow-hidden">
      {/* Декоративная сетка */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#052150]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-[680px]">
          <p className="text-[11px] font-medium tracking-[0.26em] uppercase text-white/40 mb-5">
            {t("breadcrumb")}
          </p>
          <h1 className="text-[52px] sm:text-[68px] font-semibold text-white leading-[1.0] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {t("title")}
          </h1>
          <p className="text-[17px] text-white/55 leading-relaxed max-w-[520px]">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}