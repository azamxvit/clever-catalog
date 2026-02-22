// app/[locale]/page.tsx
import { HeroBanner }       from "@/components/sections/home/HeroBanner";
import { CategoryShowcase } from "@/components/sections/home/CategoryShowcase";
import { RoomsShowcase }    from "@/components/sections/home/RoomsShowcase";
import { WhyUsSection }     from "@/components/sections/home/WhyUsSection";
import { HowItWorks }       from "@/components/sections/home/HowItWorks";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryShowcase />
      <RoomsShowcase />
      <WhyUsSection />
      <HowItWorks />
    </>
  );
}