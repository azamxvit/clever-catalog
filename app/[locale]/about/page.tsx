import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutHero }     from "@/components/sections/about/AboutHero";
import { AboutStory }    from "@/components/sections/about/AboutStory";
import { AboutValues }   from "@/components/sections/about/AboutValues";
import { AboutContacts } from "@/components/sections/about/AboutContacts";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.about.meta");
  return { title: t("title"), description: t("description") };
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutContacts />
    </>
  );
}