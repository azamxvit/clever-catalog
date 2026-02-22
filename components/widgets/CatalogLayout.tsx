"use client";

// components/widgets/CatalogLayout.tsx
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useFilterStore } from "@/store/filter-store";
import { FilterBar }   from "./FilterBar";
import { ProductGrid } from "./ProductGrid";
import type { Category } from "@/lib/mock-data";

interface CatalogLayoutProps {
  defaultCategory?: "all" | Category;
}

export function CatalogLayout({ defaultCategory = "all" }: CatalogLayoutProps) {
  const setCategory = useFilterStore((s) => s.setCategory);
  const resetFilters = useFilterStore((s) => s.resetFilters);

  useEffect(() => {
    resetFilters();
    if (defaultCategory !== "all") {
      setCategory(defaultCategory);
    }
    return () => resetFilters();
  }, [defaultCategory]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <aside className="lg:w-72 shrink-0">
        <div className="lg:sticky lg:top-24">
          <FilterBar hideCategoryFilter={defaultCategory !== "all"} />
        </div>
      </aside>
      <div className="flex-1 min-w-0">
        <ProductGrid />
      </div>
    </div>
  );
}