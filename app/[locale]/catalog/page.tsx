import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FilterBar }   from "@/components/widgets/FilterBar";
import { ProductGrid } from "@/components/widgets/ProductGrid";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("catalog.meta");
  return {
    title:       t("title"),
    description: t("description"),
  };
}

export default async function CatalogPage() {
  const t = await getTranslations("catalog");

  return (
    <div className="pt-20 pb-16 bg-[#f8f5f0] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Page header */}
        <div className="py-10 border-b border-[#e8e4de] mb-8">
          <p className="text-[12px] font-medium tracking-widest uppercase text-[#052150]/40 mb-2">
            {t("breadcrumb")}
          </p>
          <h1
            className="text-[42px] sm:text-[52px] font-semibold text-[#052150] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {t("title")}
          </h1>
        </div>

        {/* Layout: filters sidebar + grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-24">
              <FilterBar />
            </div>
          </aside>
          <div className="flex-1 min-w-0">
            <ProductGrid />
          </div>
        </div>

      </div>
    </div>
  );
}