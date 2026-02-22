"use client";

// components/sections/home/CategoryShowcase.tsx
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/lib/routing";

const CATEGORY_IMAGES = {
  laminate:  "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=900&q=80",
  porcelain: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=900&q=80",
  tile:      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
} as const;

type CategoryKey = keyof typeof CATEGORY_IMAGES;
const CATEGORIES: CategoryKey[] = ["laminate", "porcelain", "tile"];

export function CategoryShowcase() {
  const t  = useTranslations("home.categories");
  const tc = useTranslations("catalog.categories");

  return (
    <section className="bg-[#f8f5f0] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#052150]/40 mb-2">
              {t("sectionLabel")}
            </p>
            <h2
              className="text-[38px] sm:text-[48px] font-semibold text-[#052150] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {t("sectionTitle")}
            </h2>
          </div>
          <Link
            href="/catalog"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#052150]/60 hover:text-[#052150] transition-colors"
          >
            {t("viewAll")} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid — все три карточки одинаковой высоты */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {CATEGORIES.map((key) => (
            <Link
              key={key}
              href={`/catalog?category=${key}`}
              className="group relative overflow-hidden rounded-2xl bg-[#052150] cursor-pointer min-h-[400px] lg:min-h-[520px]"
            >
              <Image
                src={CATEGORY_IMAGES[key]}
                alt={tc(key)}
                fill
                className="object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052150]/95 via-[#052150]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex flex-col justify-end">
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#c9a96e] mb-3 opacity-90">
                  {t(`${key}Sub`)}
                </p>
                <h3
                  className="text-[32px] lg:text-[40px] font-semibold text-white leading-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {tc(key)}
                </h3>
                <span className="inline-flex items-center gap-2 text-[13px] font-medium text-white/70 group-hover:text-white transition-colors duration-200">
                  {t("viewCollection")}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile link */}
        <div className="sm:hidden mt-6 text-center">
          <Link href="/catalog" className="text-[14px] font-medium text-[#052150]/60 hover:text-[#052150] transition-colors">
            {t("viewAll")} →
          </Link>
        </div>
      </div>
    </section>
  );
}