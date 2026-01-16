import { CampaignBuilderHero } from "@/components/sections/home/CampaignBuilderHero";
import { VideoSection } from "@/components/sections/home/VideoSection";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { ValueProps } from "@/components/sections/home/ValueProps";
import { Comparison } from "@/components/sections/home/Comparison";
import { Metrics } from "@/components/sections/home/Metrics";
import { FinalCTA } from "@/components/sections/home/FinalCTA";

export default function Home() {
  return (
    <>
      <CampaignBuilderHero />
      <VideoSection />
      <HowItWorks />
      <ValueProps />
      <Comparison />
      <Metrics />
      <FinalCTA />
    </>
  );
}
