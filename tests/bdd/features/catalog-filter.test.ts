// tests/bdd/features/catalog-filter.test.ts
import { applyFilters } from "@/lib/utils";
import { ALL_PRODUCTS } from "@/lib/mock-data";

const defaults = { category: "all" as const, sort: "default" as const, search: "", inStockOnly: false };

// Feature: Фильтрация каталога

describe("Feature: Пользователь фильтрует каталог", () => {

  describe("Scenario: Просмотр всего каталога", () => {
    it("Given пользователь открывает каталог без фильтров", () => {
      const products = applyFilters(ALL_PRODUCTS, defaults);
      expect(products.length).toBe(ALL_PRODUCTS.length);
    });
  });

  describe("Scenario: Фильтр по категории 'Керамогранит'", () => {
    it("Given пользователь на странице /ceramogranit — видит только керамогранит", () => {
      const products = applyFilters(ALL_PRODUCTS, { ...defaults, category: "porcelain" });
      expect(products.every((p) => p.category === "porcelain")).toBe(true);
      expect(products.length).toBeGreaterThan(0);
    });
  });

  describe("Scenario: Поиск по названию", () => {
    it("Given пользователь вводит 'vincent' — видит только Vincent White", () => {
      const products = applyFilters(ALL_PRODUCTS, { ...defaults, search: "vincent" });
      expect(products).toHaveLength(1);
      expect(products[0].title).toBe("Vincent White");
    });

    it("Given пользователь вводит 'crock' — видит Crock Beige и Crock White", () => {
      const products = applyFilters(ALL_PRODUCTS, { ...defaults, search: "crock" });
      expect(products).toHaveLength(2);
      expect(products.map((p) => p.title)).toEqual(
        expect.arrayContaining(["Crock Beige", "Crock White"])
      );
    });

    it("Given пользователь вводит несуществующее — видит пустой результат", () => {
      const products = applyFilters(ALL_PRODUCTS, { ...defaults, search: "абракадабра" });
      expect(products).toHaveLength(0);
    });
  });

  describe("Scenario: Фильтр 'Только в наличии'", () => {
    it("Given включён тоггл — не видит товары 'Под заказ'", () => {
      const products = applyFilters(ALL_PRODUCTS, { ...defaults, inStockOnly: true });
      expect(products.every((p) => p.inStock)).toBe(true);
    });
  });

  describe("Scenario: Сортировка по цене", () => {
    it("Given выбрана 'Сначала дешевле' — первый товар самый дешёвый", () => {
      const products = applyFilters(ALL_PRODUCTS, { ...defaults, sort: "price_asc" });
      expect(products[0].price).toBeLessThanOrEqual(products[products.length - 1].price);
    });

    it("Given выбрана 'Сначала дороже' — первый товар самый дорогой", () => {
      const products = applyFilters(ALL_PRODUCTS, { ...defaults, sort: "price_desc" });
      expect(products[0].price).toBeGreaterThanOrEqual(products[products.length - 1].price);
    });
  });
});

// Feature: WhatsApp запрос цены
import { buildWhatsAppUrl } from "@/lib/utils";

describe("Feature: Пользователь узнаёт цену через WhatsApp", () => {
  describe("Scenario: Клик 'Узнать цену' на карточке Vincent White", () => {
    it("Given товар есть в наличии — формируется ссылка wa.me с названием товара", () => {
      const product = ALL_PRODUCTS.find((p) => p.id === "p-vincent-white")!;
      const url = buildWhatsAppUrl(product);
      const decoded = decodeURIComponent(url);

      expect(url).toContain("wa.me");
      expect(decoded).toContain("Vincent White");
      expect(decoded).toContain("60×120");
    });
  });
});