"use client";

// src/components/catalog/ProductGrid.tsx
import { PackageSearch } from "lucide-react";
import { useFilterStore, applyFilters } from "@/store/filter-store";
import { products } from "@/lib/mock-data";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const filterState   = useFilterStore();
  const filtered      = applyFilters(products, filterState);
  const { resetFilters } = useFilterStore();

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
        <PackageSearch className="h-12 w-12 text-navy/20" />
        <h3 className="font-display text-xl text-navy/60">Ничего не найдено</h3>
        <p className="text-[14px] text-navy/40 max-w-xs">
          Попробуйте изменить фильтры или сбросить поиск
        </p>
        <button
          onClick={resetFilters}
          className="mt-2 px-5 py-2 rounded-full bg-navy text-white text-[13px] font-medium hover:bg-navy-light transition-colors"
        >
          Сбросить фильтры
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Count */}
      <p className="text-[13px] text-navy/50 mb-5">
        Найдено: <span className="font-semibold text-navy">{filtered.length}</span> товаров
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((product, i) => (
          <div
            key={product.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}