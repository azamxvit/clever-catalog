// src/app/[locale]/page.tsx
import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryShowcase } from "@/components/home/CategoryShowCase";
import { RoomsShowcase } from "@/components/home/RoomsShowcase";
import { WhyUsSection } from "@/components/home/WheUsSection";
import { HowItWorks } from "@/components/home/HowItworks";

export default async function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />
      <CategoryShowcase />
      <RoomsShowcase />
      <WhyUsSection />
      <HowItWorks />
    </div>
  );
}