"use client";

// components/widgets/ProductGrid.tsx
import { useTranslations } from "next-intl";
import { useFilterStore } from "@/store/filter-store";
import { ALL_PRODUCTS } from "@/lib/mock-data";
import { applyFilters } from "@/lib/utils";
import { ProductCard } from "./ProductCard";
import { PackageSearch } from "lucide-react";

export function ProductGrid() {
  const t = useTranslations("catalog");
  
  const category    = useFilterStore((s) => s.category);
  const sort        = useFilterStore((s) => s.sort);
  const search      = useFilterStore((s) => s.search);
  const inStockOnly = useFilterStore((s) => s.inStockOnly);

  const products = applyFilters(ALL_PRODUCTS, { category, sort, search, inStockOnly });

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <PackageSearch className="w-12 h-12 text-[#052150]/20 mb-4" strokeWidth={1.5} />
        <h3
          className="text-[20px] font-semibold text-[#052150] mb-2"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {t("empty.title")}
        </h3>
        <p className="text-[14px] text-[#052150]/50 max-w-xs">
          {t("empty.desc")}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-[13px] text-[#052150]/50">
          {t("found")}{" "}
          <span className="font-semibold text-[#052150]">{products.length}</span>{" "}
          {t("products")}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}