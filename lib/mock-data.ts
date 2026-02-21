export type Category = "laminate" | "porcelain";

export interface Product {
  id: string;
  title: string;
  category: Category;
  price: number;
  dimensions: string;
  thickness?: string;
  image: string;
  inStock: boolean;
  description?: string;
  collection?: string;
}

export const products: Product[] = [
  // ЛАМИНАТ
  {
    id: "lam-001",
    title: "Дуб Версаль Натуральный",
    category: "laminate",
    price: 4_800,
    dimensions: "1285x192",
    thickness: "8mm",
    image:
      "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80",
    inStock: true,
    description: "Классическая текстура светлого дуба с мягким матовым покрытием. Идеально для жилых помещений.",
    collection: "Provence Line",
  },
  {
    id: "lam-002",
    title: "Орех Американский Тёмный",
    category: "laminate",
    price: 5_600,
    dimensions: "1380x244",
    thickness: "10mm",
    image:
      "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=800&q=80",
    inStock: true,
    description: "Тёмный орех с выраженной структурой волокна — создаёт уютную атмосферу в интерьере.",
    collection: "Grand Oak",
  },
  {
    id: "lam-003",
    title: "Ясень Скандинавский Серый",
    category: "laminate",
    price: 3_950,
    dimensions: "1285x192",
    thickness: "8mm",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    inStock: false,
    description: "Нордический серо-бежевый тон — трендовый выбор для современных скандинавских интерьеров.",
    collection: "Nordic Light",
  },

  // КЕРАМОГРАНИТ
  {
    id: "pgr-001",
    title: "Мрамор Каррара Биanco",
    category: "porcelain",
    price: 9_200,
    dimensions: "600x1200",
    thickness: "9mm",
    image:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80",
    inStock: true,
    description: "Керамогранит под белый каррарский мрамор с тонкими серыми прожилками. Полированная поверхность.",
    collection: "Marmo Italiano",
  },
  {
    id: "pgr-002",
    title: "Бетон Индустриальный Графит",
    category: "porcelain",
    price: 7_400,
    dimensions: "600x600",
    thickness: "10mm",
    image:
      "https://images.unsplash.com/photo-1574632652890-aa3b9e78c204?w=800&q=80",
    inStock: true,
    description: "Матовый керамогранит под промышленный бетон — для лофтов, прихожих и коммерческих помещений.",
    collection: "Urbano Loft",
  },
  {
    id: "pgr-003",
    title: "Травертин Романо Бежевый",
    category: "porcelain",
    price: 8_100,
    dimensions: "600x1200",
    thickness: "9mm",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    inStock: true,
    description: "Натуральный тёплый бежевый оттенок с текстурой травертина. Идеален для ванных комнат и кухонь.",
    collection: "Terra Roma",
  },
];

// Helpers 

export const CATEGORY_LABELS: Record<Category, string> = {
  laminate: "Ламинат",
  porcelain: "Керамогранит",
};

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ru-RU")} ₸`;
}


export function buildWhatsAppUrl(product: Product, phone: string = "77001234567"): string {
  const categoryLabel = CATEGORY_LABELS[product.category];
  const message = encodeURIComponent(
    `Здравствуйте! Меня интересует ${categoryLabel.toLowerCase()} «${product.title}» (арт. ${product.id}). Подскажите актуальную цену и наличие?`
  );
  return `https://wa.me/${phone}?text=${message}`;
}