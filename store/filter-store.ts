// store/filter-store.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Category } from "@/lib/mock-data";

export type SortOption = "default" | "price_asc" | "price_desc" | "title_asc";

interface FilterState {
  category:    "all" | Category;
  sort:        SortOption;
  search:      string;
  inStockOnly: boolean;

  setCategory:    (v: "all" | Category) => void;
  setSort:        (v: SortOption) => void;
  setSearch:      (v: string) => void;
  setInStockOnly: (v: boolean) => void;
  resetFilters:   () => void;
}

export const useFilterStore = create<FilterState>()(
  devtools(
    (set) => ({
      category:    "all",
      sort:        "default",
      search:      "",
      inStockOnly: false,

      setCategory:    (category)    => set({ category }),
      setSort:        (sort)        => set({ sort }),
      setSearch:      (search)      => set({ search }),
      setInStockOnly: (inStockOnly) => set({ inStockOnly }),
      resetFilters:   ()            => set({ category: "all", sort: "default", search: "", inStockOnly: false }),
    }),
    { name: "FilterStore" }
  )
);