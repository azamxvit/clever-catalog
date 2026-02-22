// app/[locale]/kafel/page.tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CatalogLayout } from "@/components/widgets/CatalogLayout";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("catalog.kafel.meta");
  return { title: t("title"), description: t("description") };
}

export default async function KafelPage() {
  const t = await getTranslations("catalog.kafel");

  return (
    <div className="pt-20 pb-16 bg-[#f8f5f0] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        <div className="py-10 border-b border-[#e8e4de] mb-8">
          <p className="text-[12px] font-medium tracking-widest uppercase text-[#052150]/40 mb-2">
            {t("breadcrumb")}
          </p>
          <h1
            className="text-[42px] sm:text-[52px] font-semibold text-[#052150] leading-tight mb-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {t("title")}
          </h1>
          <p className="text-[15px] text-[#052150]/55 max-w-xl">
            {t("subtitle")}
          </p>
        </div>

        <CatalogLayout defaultCategory="tile" />

      </div>
    </div>
  );
}