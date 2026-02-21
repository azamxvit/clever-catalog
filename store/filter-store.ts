// src/store/filter-store.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Category } from "@/lib/mock-data";

export type SortOption = "default" | "price_asc" | "price_desc" | "title_asc";

interface FilterState {
  category:  Category | "all";
  inStockOnly: boolean;
  sort:       SortOption;
  search:     string;

  setCategory:    (category: Category | "all") => void;
  setInStockOnly: (value: boolean) => void;
  setSort:        (sort: SortOption) => void;
  setSearch:      (query: string) => void;
  resetFilters:   () => void;
}

const INITIAL_STATE = {
  category:    "all" as const,
  inStockOnly: false,
  sort:        "default" as SortOption,
  search:      "",
};

export const useFilterStore = create<FilterState>()(
  devtools(
    (set) => ({
      ...INITIAL_STATE,

      setCategory:    (category)    => set({ category },    false, "setCategory"),
      setInStockOnly: (inStockOnly) => set({ inStockOnly }, false, "setInStockOnly"),
      setSort:        (sort)        => set({ sort },        false, "setSort"),
      setSearch:      (search)      => set({ search },      false, "setSearch"),
      resetFilters:   ()            => set(INITIAL_STATE,   false, "resetFilters"),
    }),
    { name: "CleverCatalogFilters" }
  )
);

// Selector: filtered + sorted products
import type { Product } from "@/lib/mock-data";

export function applyFilters(products: Product[], state: FilterState): Product[] {
  let result = [...products];

  // Category
  if (state.category !== "all") {
    result = result.filter((p) => p.category === state.category);
  }

  // In stock
  if (state.inStockOnly) {
    result = result.filter((p) => p.inStock);
  }

  // Search
  if (state.search.trim()) {
    const q = state.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.collection?.toLowerCase().includes(q) ?? false)
    );
  }

  // Sort
  switch (state.sort) {
    case "price_asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "title_asc":
      result.sort((a, b) => a.title.localeCompare(b.title, "ru"));
      break;
    default:
      break;
  }

  return result;
}