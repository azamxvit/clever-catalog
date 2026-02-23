// tests/unit/lib/utils.test.ts
import { applyFilters, buildWhatsAppUrl } from "@/lib/utils";
import type { Product } from "@/lib/mock-data";

const mockProducts: Product[] = [
  { id: "p-1", title: "Vincent White",  category: "porcelain", price: 9000,  dimensions: "60×120", image: "", inStock: true,  country: "Китай",   countryCode: "CN", isHit: true },
  { id: "p-2", title: "Gold Statuario", category: "porcelain", price: 9000,  dimensions: "60×120", image: "", inStock: true,  country: "Китай",   countryCode: "CN", isNew: true },
  { id: "p-3", title: "Crock Beige",    category: "porcelain", price: 9000,  dimensions: "60×60",  image: "", inStock: false, country: "Китай",   countryCode: "CN" },
  { id: "l-1", title: "Oak Natural",    category: "laminate",  price: 3200,  dimensions: "1380×193",image:"", inStock: true,  country: "Германия", countryCode: "DE" },
  { id: "l-2", title: "Ash Grey",       category: "laminate",  price: 2900,  dimensions: "1380×193",image:"", inStock: true,  country: "Бельгия",  countryCode: "BE" },
];

const defaults = { category: "all" as const, sort: "default" as const, search: "", inStockOnly: false };

describe("applyFilters", () => {
  describe("фильтр по категории", () => {
    it("'all' — возвращает все товары", () => {
      expect(applyFilters(mockProducts, defaults)).toHaveLength(5);
    });

    it("'porcelain' — только керамогранит", () => {
      const result = applyFilters(mockProducts, { ...defaults, category: "porcelain" });
      expect(result).toHaveLength(3);
      result.forEach((p) => expect(p.category).toBe("porcelain"));
    });

    it("'laminate' — только ламинат", () => {
      const result = applyFilters(mockProducts, { ...defaults, category: "laminate" });
      expect(result).toHaveLength(2);
    });

    it("несуществующая категория — пустой массив", () => {
      const result = applyFilters(mockProducts, { ...defaults, category: "tile" });
      expect(result).toHaveLength(0);
    });
  });

  describe("фильтр inStockOnly", () => {
    it("скрывает товары не в наличии", () => {
      const result = applyFilters(mockProducts, { ...defaults, inStockOnly: true });
      result.forEach((p) => expect(p.inStock).toBe(true));
    });

    it("количество корректное", () => {
      const result = applyFilters(mockProducts, { ...defaults, inStockOnly: true });
      expect(result).toHaveLength(4);
    });
  });

  describe("фильтр поиска", () => {
    it("находит по названию (регистронезависимо)", () => {
      const result = applyFilters(mockProducts, { ...defaults, search: "vincent" });
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("p-1");
    });

    it("пустая строка — не фильтрует", () => {
      expect(applyFilters(mockProducts, { ...defaults, search: "" })).toHaveLength(5);
    });

    it("нет совпадений — пустой массив", () => {
      const result = applyFilters(mockProducts, { ...defaults, search: "xyz_не_существует" });
      expect(result).toHaveLength(0);
    });
  });

  describe("сортировка", () => {
    it("price_asc — от дешёвого к дорогому", () => {
      const result = applyFilters(mockProducts, { ...defaults, sort: "price_asc" });
      const prices = result.map((p) => p.price);
      expect(prices).toEqual([...prices].sort((a, b) => a - b));
    });

    it("price_desc — от дорогого к дешёвому", () => {
      const result = applyFilters(mockProducts, { ...defaults, sort: "price_desc" });
      const prices = result.map((p) => p.price);
      expect(prices).toEqual([...prices].sort((a, b) => b - a));
    });

    it("title_asc — по алфавиту", () => {
      const result = applyFilters(mockProducts, { ...defaults, sort: "title_asc" });
      const titles = result.map((p) => p.title);
      expect(titles).toEqual([...titles].sort((a, b) => a.localeCompare(b)));
    });
  });

  describe("комбинированные фильтры", () => {
    it("категория + поиск", () => {
      const result = applyFilters(mockProducts, { ...defaults, category: "porcelain", search: "gold" });
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Gold Statuario");
    });

    it("категория + inStockOnly", () => {
      const result = applyFilters(mockProducts, { ...defaults, category: "porcelain", inStockOnly: true });
      expect(result).toHaveLength(2);
    });
  });
});

describe("buildWhatsAppUrl", () => {
  it("содержит номер телефона", () => {
    const url = buildWhatsAppUrl(mockProducts[0]);
    expect(url).toContain("wa.me");
    expect(url).toContain("77786066611");
  });

  it("содержит название товара в тексте", () => {
    const url = buildWhatsAppUrl(mockProducts[0]);
    expect(decodeURIComponent(url)).toContain("Vincent White");
  });

  it("содержит размер товара", () => {
    const url = buildWhatsAppUrl(mockProducts[0]);
    expect(decodeURIComponent(url)).toContain("60×120");
  });
});