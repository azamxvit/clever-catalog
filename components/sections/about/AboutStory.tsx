"use client";

// components/sections/about/AboutStory.tsx
import { useTranslations } from "next-intl";

export function AboutStory() {
  const t = useTranslations("about.story");

  return (
    <section className="bg-[#f8f5f0] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#052150]/40 mb-4">
              {t("sectionLabel")}
            </p>
            <h2 className="text-[38px] sm:text-[46px] font-semibold text-[#052150] leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              {t("title")}
            </h2>
            <div className="space-y-4 text-[15px] text-[#052150]/65 leading-relaxed">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt={t("imageAlt")}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Декоративный акцент */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-[#c9a96e]/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}