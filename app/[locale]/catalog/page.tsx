// src/app/catalog/page.tsx
import type { Metadata } from "next";
import { FilterBar }   from "@/components/catalog/FilterBar";
import { ProductGrid } from "@/components/catalog/ProductGrid";

export const metadata: Metadata = {
  title:       "Каталог",
  description: "Весь ассортимент ламината и керамогранита в Атырау. Фильтр по категории, цене и наличию.",
};

export default function CatalogPage() {
  return (
    <div className="pt-20 pb-16 bg-cream min-h-screen">
      <div className="container-clever">

        {/* Page header */}
        <div className="py-10 border-b border-stone mb-8">
          <p className="text-[12px] font-medium tracking-widest uppercase text-navy/40 mb-2">
            Clever / Каталог
          </p>
          <h1 className="font-display text-[42px] sm:text-[52px] font-semibold text-navy leading-tight">
            Напольные покрытия
          </h1>
        </div>

        {/* Layout: filters + grid */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar filters (sticky on desktop) */}
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-24">
              <FilterBar />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}