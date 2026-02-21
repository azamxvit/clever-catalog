"use client";

import { SlidersHorizontal, Search, RotateCcw } from "lucide-react";
import { useFilterStore } from "@/store/filter-store";
import type { SortOption } from "@/store/filter-store";
import type { Category } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all",       label: "Все" },
  { value: "laminate",  label: "Ламинат" },
  { value: "porcelain", label: "Керамогранит" },
];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "default",    label: "По умолчанию" },
  { value: "price_asc",  label: "Сначала дешевле" },
  { value: "price_desc", label: "Сначала дороже" },
  { value: "title_asc",  label: "По названию" },
];

export function FilterBar() {
  const {
    category, setCategory,
    inStockOnly, setInStockOnly,
    sort, setSort,
    search, setSearch,
    resetFilters,
  } = useFilterStore();

  const isDirty =
    category !== "all" || inStockOnly || sort !== "default" || search.trim() !== "";

  return (
    <div className="bg-white rounded-2xl shadow-card p-4 sm:p-5 flex flex-col gap-4">

      {/*  Row 1: Search + Reset  */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy/40 pointer-events-none" />
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone text-[14px]
                       focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/40 transition"
          />
        </div>

        {isDirty && (
          <button
            onClick={resetFilters}
            title="Сбросить фильтры"
            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-stone text-[13px]
                       text-navy/60 hover:text-navy hover:border-navy/30 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            <span className="hidden sm:inline">Сбросить</span>
          </button>
        )}
      </div>

      {/* Row Category chips + Sort  */}
      <div className="flex flex-wrap items-center justify-between gap-3">

        {/* Category tabs */}
        <div className="flex gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              className={cn(
                "px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200",
                category === c.value
                  ? "bg-navy text-white shadow-sm"
                  : "bg-stone/60 text-navy/70 hover:bg-stone hover:text-navy"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Sort select */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-navy/40 shrink-0" />
          <select
            aria-label="Сортировка каталога"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-[13px] text-navy/80 bg-transparent border-0 focus:outline-none cursor-pointer pr-1"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row In Stock toggle ── */}
      <label className="flex items-center gap-3 cursor-pointer w-fit">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          <div className={cn(
            "w-9 h-5 rounded-full transition-colors duration-200",
            inStockOnly ? "bg-clover" : "bg-stone"
          )} />
          <div className={cn(
            "absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200",
            inStockOnly ? "translate-x-4" : "translate-x-0"
          )} />
        </div>
        <span className="text-[13px] font-medium text-navy/70">Только в наличии</span>
      </label>
    </div>
  );
}