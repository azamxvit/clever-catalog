"use client";

// components/sections/home/HeroBanner.tsx
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "@/lib/routing";
import { WA_GENERAL } from "@/lib/constants";

const STAT_KEYS = ["stat1", "stat2", "stat3", "stat4"] as const;

export function HeroBanner() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#052150]">

      {/* BG Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1800&q=70"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052150] via-[#052150]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#052150]/60 via-transparent to-transparent" />
      </div>

      {/* Декоративная сетка */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Золотая вертикальная линия */}
      <div className="absolute left-[max(2rem,calc(50%-600px))] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a96e]/30 to-transparent hidden lg:block" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20">
        <div className="max-w-[640px]">

          {/* Бейдж */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3a8a3f] animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/60">
              {t("badge")}
            </span>
          </div>

          {/* Заголовок */}
          <h1
            className="font-serif text-[56px] sm:text-[72px] lg:text-[84px] font-semibold leading-[0.95] text-white mb-8"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {t("heading")} <em className="not-italic text-[#c9a96e]">{t("headingAccent1")}</em>
            <br />
            {t("heading2")} <em className="not-italic text-[#c9a96e]">{t("headingAccent2")}</em>
          </h1>

          {/* Подпись */}
          <p className="text-[16px] sm:text-[18px] leading-relaxed text-white/55 max-w-[480px] mb-10">
            {t("subheading")}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/catalog"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#052150] text-[14px] font-semibold
                         shadow-[0_4px_24px_rgba(255,255,255,0.18)] hover:bg-[#f8f5f0] transition-all duration-200"
            >
              {t("catalogBtn")}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm
                         text-[14px] font-medium text-white hover:bg-white/10 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-[#3a8a3f]" />
              {t("contactBtn")}
            </a>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/8">
            {STAT_KEYS.map((key) => (
              <div key={key}>
                <p
                  className="text-[28px] font-semibold text-white leading-none mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {t(`${key}Value`)}
                </p>
                <p className="text-[11px] tracking-wide text-white/38 uppercase">
                  {t(`${key}Label`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Скролл-хинт */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white">Scroll</span>
        <div className="w-px h-10 bg-white animate-pulse" />
      </div>
    </section>
  );
}