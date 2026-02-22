// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Product, Category } from "./mock-data";
import { WHATSAPP_NUMBER } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── WhatsApp ─────────────────────────────────────────────────────────────────
export function buildWhatsAppUrl(product: Product): string {
  const text = `Здравствуйте! Меня интересует «${product.title}» (${product.dimensions}). Подскажите актуальную цену и наличие?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ─── Фильтрация ───────────────────────────────────────────────────────────────
export interface FilterState {
  category:    "all" | Category;
  sort:        "default" | "price_asc" | "price_desc" | "title_asc";
  search:      string;
  inStockOnly: boolean;
}

export function applyFilters(products: Product[], state: FilterState): Product[] {
  let result = [...products];

  // Категория
  if (state.category !== "all") {
    result = result.filter((p) => p.category === state.category);
  }

  // Поиск
  if (state.search.trim()) {
    const q = state.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.collection?.toLowerCase().includes(q)
    );
  }

  // В наличии
  if (state.inStockOnly) {
    result = result.filter((p) => p.inStock);
  }

  // Сортировка
  switch (state.sort) {
    case "price_asc":  result.sort((a, b) => a.price - b.price); break;
    case "price_desc": result.sort((a, b) => b.price - a.price); break;
    case "title_asc":  result.sort((a, b) => a.title.localeCompare(b.title)); break;
  }

  return result;
}