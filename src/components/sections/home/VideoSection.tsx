"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { HeroVideoDialog } from "@/components/ui/HeroVideoDialog";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import { getAssetPath } from "@/lib/utils";
import { Play } from "lucide-react";

export function VideoSection() {
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    // Listen for custom event to open video
    const handleOpenVideo = () => {
      setAutoPlay(true);
    };

    window.addEventListener("openDemoVideo", handleOpenVideo);
    return () => window.removeEventListener("openDemoVideo", handleOpenVideo);
  }, []);

  return (
    <div id="demo-video">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(30, 0, 0)"
        gradientBackgroundEnd="rgb(60, 0, 20)"
        firstColor="232, 17, 17"
        secondColor="220, 38, 38"
        thirdColor="255, 100, 100"
        fourthColor="180, 0, 0"
        fifthColor="255, 150, 100"
        pointerColor="232, 17, 17"
        size="100%"
        blendingValue="hard-light"
        interactive={true}
        containerClassName="py-24 md:py-32"
      >
      <Container>
        <div className="text-center mb-8 md:mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-white/30 text-white bg-white/10"
          >
            <Play size={14} className="mr-1" />
            See it in action
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Create your first campaign in 5 minutes
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto px-4">
            See how easy it is to create a pay-per-performance CRM campaign
            with AI-powered automated journeys.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc={getAssetPath("/videos/demo-campaign.mov")}
            thumbnailSrc={getAssetPath("/images/video-thumb.png")}
            thumbnailAlt="Demo: How to create a RevBridge campaign"
            isLocalVideo
            autoOpen={autoPlay}
            onOpenChange={() => setAutoPlay(false)}
          />
        </div>
      </Container>
      </BackgroundGradientAnimation>
    </div>
  );
}
