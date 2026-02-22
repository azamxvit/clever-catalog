"use client";

import Image from "next/image";
import { MessageCircle, Ruler, Package, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  type Product,
  CATEGORY_LABELS,
  formatPrice,
  buildWhatsAppUrl,
} from "@/lib/mock-data";

const MANAGER_PHONE = "77001234567";


interface ProductCardProps {
  product: Product;
  className?: string;
}

// Компонент 

export function ProductCard({ product, className }: ProductCardProps) {
  const {
    title,
    category,
    price,
    dimensions,
    thickness,
    image,
    inStock,
    description,
    collection,
  } = product;

  const whatsappUrl = buildWhatsAppUrl(product, MANAGER_PHONE);
  const categoryLabel = CATEGORY_LABELS[category];

  function handleWhatsApp() {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <article
      className={cn(
        // Base
        "group relative flex flex-col overflow-hidden rounded-2xl bg-white",
        "shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.13)]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        className
      )}
    >
      {/*  Изображение  */}
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority={false}
        />

        {/* Градиентный оверлей снизу изображения */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Бейдж категории — поверх фото */}
        <div className="absolute left-3 top-3">
          <Badge
            variant="secondary"
            className={cn(
              "rounded-full px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wide backdrop-blur-sm",
              category === "laminate"
                ? "bg-amber-100/90 text-amber-800"
                : "bg-sky-100/90 text-sky-800"
            )}
          >
            {categoryLabel}
          </Badge>
        </div>

        {/* Статус наличия */}
        <div className="absolute right-3 top-3">
          <span
            className={cn(
              "flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium backdrop-blur-sm",
              inStock
                ? "bg-emerald-100/90 text-emerald-700"
                : "bg-rose-100/90 text-rose-700"
            )}
          >
            <span
              className={cn(
                "inline-block h-1.5 w-1.5 rounded-full",
                inStock ? "bg-emerald-500" : "bg-rose-400"
              )}
            />
            {inStock ? "В наличии" : "Под заказ"}
          </span>
        </div>
      </div>

      {/* ── Контент ── */}
      <div className="flex flex-1 flex-col gap-3 p-4 pt-3.5">

        {/* Коллекция */}
        {collection && (
          <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-stone-400">
            <Tag className="h-3 w-3" />
            {collection}
          </p>
        )}

        {/* Название */}
        <h3 className="font-serif text-[17px] font-semibold leading-snug text-stone-800 group-hover:text-stone-900">
          {title}
        </h3>

        {/* Описание */}
        {description && (
          <p className="line-clamp-2 text-[13px] leading-relaxed text-stone-500">
            {description}
          </p>
        )}

        {/* Характеристики */}
        <div className="flex flex-wrap gap-2">
          <Chip icon={<Ruler className="h-3 w-3" />} label={`${dimensions} мм`} />
          {thickness && (
            <Chip icon={<Package className="h-3 w-3" />} label={thickness} />
          )}
        </div>

        {/* Разделитель */}
        <div className="h-px bg-stone-100" />

        {/* Цена + кнопка */}
        <div className="mt-auto flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] text-stone-400">от</p>
            <p className="text-[22px] font-bold leading-none tracking-tight text-stone-800">
              {formatPrice(price)}
              <span className="ml-1 text-[12px] font-normal text-stone-400">/ м²</span>
            </p>
          </div>

          <Button
            onClick={handleWhatsApp}
            disabled={false}
            size="sm"
            className={cn(
              "group/btn flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5",
              "bg-[#25D366] text-white hover:bg-[#1ebe5d]",
              "shadow-[0_2px_8px_rgba(37,211,102,0.35)] hover:shadow-[0_4px_16px_rgba(37,211,102,0.45)]",
              "transition-all duration-200 font-semibold text-[13px]"
            )}
          >
            <MessageCircle className="h-4 w-4 transition-transform duration-200 group-hover/btn:scale-110" />
            Узнать цену
          </Button>
        </div>
      </div>
    </article>
  );
}

// Chip (вспомогательный компонент)

function Chip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="flex items-center gap-1 rounded-lg bg-stone-100 px-2.5 py-1 text-[12px] font-medium text-stone-600">
      {icon}
      {label}
    </span>
  );
}