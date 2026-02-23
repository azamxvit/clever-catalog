// tests/unit/store/filter-store.test.ts
import { act } from "react";
import { useFilterStore } from "@/store/filter-store";

beforeEach(() => {
  act(() => useFilterStore.getState().resetFilters());
});

describe("useFilterStore", () => {
  describe("начальное состояние", () => {
    it("category = 'all'",    () => expect(useFilterStore.getState().category).toBe("all"));
    it("sort = 'default'",    () => expect(useFilterStore.getState().sort).toBe("default"));
    it("search = ''",         () => expect(useFilterStore.getState().search).toBe(""));
    it("inStockOnly = false", () => expect(useFilterStore.getState().inStockOnly).toBe(false));
  });

  describe("setCategory", () => {
    it("меняет категорию", () => {
      act(() => useFilterStore.getState().setCategory("porcelain"));
      expect(useFilterStore.getState().category).toBe("porcelain");
    });
  });

  describe("setSort", () => {
    it("меняет сортировку", () => {
      act(() => useFilterStore.getState().setSort("price_asc"));
      expect(useFilterStore.getState().sort).toBe("price_asc");
    });
  });

  describe("setSearch", () => {
    it("меняет строку поиска", () => {
      act(() => useFilterStore.getState().setSearch("vincent"));
      expect(useFilterStore.getState().search).toBe("vincent");
    });
  });

  describe("setInStockOnly", () => {
    it("переключает флаг", () => {
      act(() => useFilterStore.getState().setInStockOnly(true));
      expect(useFilterStore.getState().inStockOnly).toBe(true);
    });
  });

  describe("resetFilters", () => {
    it("сбрасывает всё к дефолту", () => {
      act(() => {
        useFilterStore.getState().setCategory("laminate");
        useFilterStore.getState().setSort("price_desc");
        useFilterStore.getState().setSearch("oak");
        useFilterStore.getState().setInStockOnly(true);
      });
      act(() => useFilterStore.getState().resetFilters());

      const { category, sort, search, inStockOnly } = useFilterStore.getState();
      expect(category).toBe("all");
      expect(sort).toBe("default");
      expect(search).toBe("");
      expect(inStockOnly).toBe(false);
    });
  });
});