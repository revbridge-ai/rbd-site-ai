import { GooeyHero } from "@/components/sections/home/GooeyHero";
import { VideoSection } from "@/components/sections/home/VideoSection";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { CreativeGenerator } from "@/components/sections/home/CreativeGenerator";
import { ValueProps } from "@/components/sections/home/ValueProps";
import { Comparison } from "@/components/sections/home/Comparison";
import { Metrics } from "@/components/sections/home/Metrics";
import { FinalCTA } from "@/components/sections/home/FinalCTA";

export default function Home() {
  return (
    <>
      <GooeyHero />
      <VideoSection />
      <HowItWorks />
      <CreativeGenerator />
      <ValueProps />
      <Comparison />
      <Metrics />
      <FinalCTA />
    </>
  );
}
