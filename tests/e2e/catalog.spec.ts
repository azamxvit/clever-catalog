// tests/e2e/catalog.spec.ts — Playwright
import { test, expect } from "@playwright/test";

test.describe("Страница /ceramogranit", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/ceramogranit");
  });

  test("загружается и показывает заголовок", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Керамогранит");
  });

  test("отображаются карточки товаров", async ({ page }) => {
    const cards = page.locator("article");
    const count = await page.locator("article").count();
    expect(count).toBeGreaterThan(0);
  });

  test("поиск фильтрует карточки", async ({ page }) => {
    const beforeCount = await page.locator("article").count();
    await page.fill("input[type=text]", "vincent");
    await expect(page.locator("article")).toHaveCount(1);
    await page.fill("input[type=text]", "");
    await expect(page.locator("article")).toHaveCount(beforeCount);
  });

  test("кнопка 'Узнать цену' ведёт на wa.me", async ({ page }) => {
    const waLink = page.locator("a[href*='wa.me']").first();
    await expect(waLink).toBeVisible();
    const href = await waLink.getAttribute("href");
    expect(href).toContain("wa.me/77786066611");
  });

  test("бейдж 'Хит' виден на Vincent White", async ({ page }) => {
    await expect(page.getByText("Хит").first()).toBeVisible();
  });
});

test.describe("Навигация между страницами категорий", () => {
  test("переход с /ceramogranit на /laminat", async ({ page }) => {
    await page.goto("/ceramogranit");
    await page.click("a[href='/laminat']");
    await expect(page).toHaveURL(/laminat/);
    await expect(page.locator("h1")).toContainText("Ламинат");
  });

  test("активная ссылка подсвечена в Header", async ({ page }) => {
    await page.goto("/ceramogranit");
    const activeLink = page.locator(`nav a[href='/ceramogranit']`);
    await expect(activeLink.locator("span.w-full")).toBeVisible();
  });
});

test.describe("Общий каталог /catalog", () => {
  test("показывает все категории в FilterBar", async ({ page }) => {
    await page.goto("/catalog");
    await expect(page.getByText("Все покрытия")).toBeVisible();
    await expect(page.getByText("Ламинат")).toBeVisible();
    await expect(page.getByText("Керамогранит")).toBeVisible();
  });

  test("переключение категории обновляет список", async ({ page }) => {
    await page.goto("/catalog");
    const allCount = await page.locator("article").count();
    await page.click("button:has-text('Ламинат')");
    const laminatCount = await page.locator("article").count();
    expect(laminatCount).toBeLessThan(allCount);
  });

  test("тоггл 'Только в наличии' скрывает 'Под заказ'", async ({ page }) => {
    await page.goto("/catalog");
    await page.click("input[type=checkbox]");
    const outOfOrderBadge = page.getByText("Под заказ");
    await expect(outOfOrderBadge).toHaveCount(0);
  });
});

test.describe("Смена языка (KZ)", () => {
  test("переключение на KZ меняет breadcrumb", async ({ page }) => {
    await page.goto("/ceramogranit");
    await page.click("[data-testid='lang-switcher-kz']");
    await expect(page).toHaveURL(/\/kz\/ceramogranit/);
    await expect(page.locator("p.text-\\[12px\\]")).toContainText("Керамогранит");
  });
});