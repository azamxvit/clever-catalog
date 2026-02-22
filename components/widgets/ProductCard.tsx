"use client";

// components/widgets/ProductCard.tsx
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/mock-data";
import { buildWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

// Флаги стран эмодзи по ISO коду
const FLAG: Record<string, string> = {
  CN: "🇨🇳", DE: "🇩🇪", ES: "🇪🇸", IT: "🇮🇹", BE: "🇧🇪", PL: "🇵🇱", TR: "🇹🇷",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("catalog");

  const waUrl = buildWhatsAppUrl(product);

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#e8e4de] hover:border-[#052150]/15 hover:shadow-[0_8px_32px_rgba(5,33,80,0.10)] transition-all duration-300 flex flex-col">

      {/* Фото */}
      <div className="relative aspect-square overflow-hidden bg-[#f8f5f0]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Бейджи */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isHit && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#052150] text-white">
              {t("badges.hit")}
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#3a8a3f] text-white">
              {t("badges.new")}
            </span>
          )}
          {!product.inStock && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#e8e4de] text-[#052150]/60">
              {t("badges.outOfStock")}
            </span>
          )}
        </div>

        {/* Страна — правый верхний угол */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-[11px] font-medium text-[#052150]/70">
          <span>{FLAG[product.countryCode] ?? "🌍"}</span>
          <span>{product.country}</span>
        </div>
      </div>

      {/* Контент */}
      <div className="flex flex-col flex-1 p-4">
        {/* Коллекция */}
        {product.collection && (
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#052150]/35 mb-1">
            {product.collection}
          </p>
        )}

        {/* Название */}
        <h3 className="text-[15px] font-semibold text-[#052150] leading-snug mb-2"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          {product.title}
        </h3>

        {/* Размер + толщина */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] text-[#052150]/50 bg-[#052150]/5 rounded-md px-2 py-0.5 font-medium">
            {product.dimensions} см
          </span>
          {product.thickness && (
            <span className="text-[11px] text-[#052150]/50 bg-[#052150]/5 rounded-md px-2 py-0.5 font-medium">
              {product.thickness}
            </span>
          )}
        </div>

        {/* Цена */}
        <div className="mt-auto">
          <p className="text-[11px] text-[#052150]/40 mb-0.5">{t("pricePerM2")}</p>
          <p className="text-[22px] font-bold text-[#052150] leading-none"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {product.price.toLocaleString("ru-RU")} ₸
          </p>
        </div>

        {/* Кнопка WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-3 flex items-center justify-center gap-2 rounded-xl py-2.5 text-[13px] font-medium transition-all duration-200",
            product.inStock
              ? "bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-[0_2px_12px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
              : "bg-[#e8e4de] text-[#052150]/40 cursor-not-allowed pointer-events-none"
          )}
        >
          <MessageCircle className="w-4 h-4" />
          {product.inStock ? t("askPrice") : t("badges.outOfStock")}
        </a>
      </div>
    </article>
  );
}