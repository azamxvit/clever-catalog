"use client";

// components/widgets/FilterBar.tsx
import { useTranslations } from "next-intl";
import { useFilterStore } from "@/store/filter-store";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/mock-data";

type SortOption = "default" | "price_asc" | "price_desc" | "title_asc";

const CATEGORIES: Array<{ key: "all" | Category }> = [
  { key: "all" },
  { key: "laminate" },
  { key: "porcelain" },
  { key: "tile" },
];

const SORT_OPTIONS: Array<{ value: SortOption; labelKey: string }> = [
  { value: "default",    labelKey: "default" },
  { value: "price_asc",  labelKey: "priceAsc" },
  { value: "price_desc", labelKey: "priceDesc" },
  { value: "title_asc",  labelKey: "titleAsc" },
];

interface FilterBarProps {
  // На страницах категорий (ceramogranit, laminat) скрываем фильтр по категории — он уже пресетен
  hideCategoryFilter?: boolean;
}

export function FilterBar({ hideCategoryFilter = false }: FilterBarProps) {
  const t = useTranslations("catalog");

  const category    = useFilterStore((s) => s.category);
  const sort        = useFilterStore((s) => s.sort);
  const search      = useFilterStore((s) => s.search);
  const inStockOnly = useFilterStore((s) => s.inStockOnly);
  const setCategory    = useFilterStore((s) => s.setCategory);
  const setSort        = useFilterStore((s) => s.setSort);
  const setSearch      = useFilterStore((s) => s.setSearch);
  const setInStockOnly = useFilterStore((s) => s.setInStockOnly);
  const resetFilters   = useFilterStore((s) => s.resetFilters);

  const hasActiveFilters = (!hideCategoryFilter && category !== "all") || sort !== "default" || search !== "" || inStockOnly;

  return (
    <div className="flex flex-col gap-5">

      {/* Заголовок + сброс */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-[#052150]">
          <SlidersHorizontal className="w-4 h-4 text-[#052150]/50" />
          {t("filters")}
        </div>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-[12px] text-[#052150]/40 hover:text-[#052150] transition-colors"
          >
            <X className="w-3 h-3" />
            {t("resetFilters")}
          </button>
        )}
      </div>

      {/* Поиск */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#052150]/30" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#e8e4de] bg-white text-[14px] text-[#052150]
                     placeholder:text-[#052150]/30 focus:outline-none focus:border-[#052150]/30 transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#052150]/30 hover:text-[#052150] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Категория */}
      {!hideCategoryFilter && (
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#052150]/40 mb-3">
            {t("categoryLabel")}
          </p>
          <div className="flex flex-col gap-1.5">
            {CATEGORIES.map(({ key }) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] font-medium transition-all duration-150 text-left",
                  category === key
                    ? "bg-[#052150] text-white"
                    : "text-[#052150]/70 hover:bg-[#052150]/5 hover:text-[#052150]"
                )}
              >
                {t(`categories.${key}`)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Сортировка */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#052150]/40 mb-3">
          {t("sortLabel")}
        </p>
        <div className="flex flex-col gap-1.5">
          {SORT_OPTIONS.map(({ value, labelKey }) => (
            <button
              key={value}
              onClick={() => setSort(value)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] font-medium transition-all duration-150 text-left",
                sort === value
                  ? "bg-[#052150] text-white"
                  : "text-[#052150]/70 hover:bg-[#052150]/5 hover:text-[#052150]"
              )}
            >
              {t(`sort.${labelKey}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Тоггл "В наличии" */}
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className={cn(
          "w-10 h-5 rounded-full relative transition-colors duration-200",
          inStockOnly ? "bg-[#3a8a3f]" : "bg-[#e8e4de]"
        )}>
          <div className={cn(
            "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200",
            inStockOnly ? "translate-x-5" : "translate-x-0.5"
          )} />
        </div>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
          className="sr-only"
        />
        <span className="text-[13px] font-medium text-[#052150]/70 group-hover:text-[#052150] transition-colors">
          {t("onlyInStock")}
        </span>
      </label>
    </div>
  );
}