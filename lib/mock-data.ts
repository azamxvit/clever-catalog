// lib/mock-data.ts

export type Category = "laminate" | "porcelain" | "tile";

export interface Product {
  id:          string;
  title:       string;
  category:    Category;
  price:       number;
  dimensions:  string;
  thickness?:  string;
  image:       string;
  inStock:     boolean;
  country:     string;
  countryCode: string;
  isNew?:      boolean;
  isHit?:      boolean;
  description?: string;
  collection?:  string;
}

export const PORCELAIN_PRODUCTS: Product[] = [
  { id:"p-vincent-white",  title:"Vincent White",  category:"porcelain", price:9000,  dimensions:"60×120", thickness:"10 мм", image:"https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=85", inStock:true, country:"Китай", countryCode:"CN", isHit:true,  description:"Белый мрамор с золотистыми прожилками. Полированная поверхность.", collection:"Marble Premium" },
  { id:"p-gold-statuario", title:"Gold Statuario", category:"porcelain", price:9000,  dimensions:"60×120", thickness:"10 мм", image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85", inStock:true, country:"Китай", countryCode:"CN", isNew:true,  description:"Статуарио с золотыми жилками. Роскошный мраморный эффект.", collection:"Statuario Collection" },
  { id:"p-em-statuario",   title:"EM Statuario",   category:"porcelain", price:9000,  dimensions:"60×120", thickness:"10 мм", image:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=85", inStock:true, country:"Китай", countryCode:"CN",            description:"Классический статуарио с мягкими серыми прожилками.", collection:"Statuario Collection" },
  { id:"p-onyx-8286",      title:"Onyx 8286",      category:"porcelain", price:9700,  dimensions:"80×80",  thickness:"10 мм", image:"https://images.unsplash.com/photo-1617722387041-338ac9e4faef?w=800&q=85", inStock:true, country:"Китай", countryCode:"CN", isNew:true,  description:"Оникс с серо-бежевыми разводами. Матовая поверхность.", collection:"Onyx Series" },
  { id:"p-sea-wave-nero",  title:"Sea Wave Nero",  category:"porcelain", price:9000,  dimensions:"60×120", thickness:"10 мм", image:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=85", inStock:true, country:"Китай", countryCode:"CN",            description:"Тёмно-серый сланец с волновым рисунком.", collection:"Stone Wave" },
  { id:"p-antique-pearl",  title:"Antique Pearl",  category:"porcelain", price:9000,  dimensions:"60×120", thickness:"10 мм", image:"https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?w=800&q=85", inStock:true, country:"Китай", countryCode:"CN",            description:"Жемчужно-серый камень с антикварной текстурой.", collection:"Antique Series" },
  { id:"p-rivar-white",    title:"Rivar White",    category:"porcelain", price:9000,  dimensions:"60×120", thickness:"10 мм", image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=85", inStock:true, country:"Китай", countryCode:"CN", isHit:true,  description:"Серый камень с графитовыми прожилками. Матовая фактура.", collection:"Stone Pro" },
  { id:"p-crock-beige",    title:"Crock Beige",    category:"porcelain", price:9000,  dimensions:"60×60",  thickness:"9 мм",  image:"https://images.unsplash.com/photo-1600607687644-c7f34b5063c8?w=800&q=85", inStock:true, country:"Китай", countryCode:"CN",            description:"Бежевый бетон с мелкой фактурой. Матовая поверхность.", collection:"Crock Series" },
  { id:"p-crock-white",    title:"Crock White",    category:"porcelain", price:9000,  dimensions:"60×60",  thickness:"9 мм",  image:"https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=800&q=85", inStock:true, country:"Китай", countryCode:"CN",            description:"Светлый бетон с мягким рисунком.", collection:"Crock Series" },
  { id:"p-bm-breccia-g",   title:"BM Breccia G",   category:"porcelain", price:9000,  dimensions:"60×120", thickness:"10 мм", image:"https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=85", inStock:true, country:"Китай", countryCode:"CN", isNew:true,  description:"Брекчия с коричнево-серыми узорами. Эффект натурального камня.", collection:"Breccia Premium" },
  { id:"p-road-white",     title:"Road White",     category:"porcelain", price:9000,  dimensions:"60×120", thickness:"10 мм", image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=85", inStock:true, country:"Китай", countryCode:"CN",            description:"Белый мрамор с тонкими серыми прожилками.", collection:"Marble Light" },
];

export const LAMINATE_PRODUCTS: Product[] = [
  { id:"l-oak-natural",  title:"Oak Natural 8312",  category:"laminate", price:3200, dimensions:"1380×193", thickness:"8 мм", image:"https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=85", inStock:true, country:"Германия", countryCode:"DE", isHit:true  },
  { id:"l-walnut-dark",  title:"Walnut Dark 1044",  category:"laminate", price:3800, dimensions:"1380×193", thickness:"8 мм", image:"https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=85", inStock:true, country:"Германия", countryCode:"DE" },
  { id:"l-ash-grey",     title:"Ash Grey 2291",     category:"laminate", price:2900, dimensions:"1380×193", thickness:"8 мм", image:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=85", inStock:true, country:"Бельгия",  countryCode:"BE", isNew:true },
];

export const ALL_PRODUCTS: Product[] = [...PORCELAIN_PRODUCTS, ...LAMINATE_PRODUCTS];