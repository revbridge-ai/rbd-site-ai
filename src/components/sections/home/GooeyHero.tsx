"use client";

import { Container } from "@/components/ui/Container";
import { GooeyText } from "@/components/ui/GooeyText";
import { Tiles } from "@/components/ui/Tiles";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const morphingWords = [
  "Journeys",
  "Creatives",
  "Segmentation",
  "Optimization",
  "A/B Testing",
  "Scheduling",
];

export function GooeyHero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-12 md:py-16 lg:py-20">
      {/* Tiles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Tiles
          rows={50}
          cols={20}
          tileSize="lg"
          className="opacity-[0.02]"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600">
              RevBridge handles
            </p>

            {/* Morphing word container */}
            <div className="relative h-[100px] md:h-[140px] lg:h-[180px] -my-5">
              <GooeyText
                texts={morphingWords}
                morphTime={1}
                cooldownTime={2.5}
                textClassName="font-bold text-primary-500 text-7xl md:text-8xl lg:text-9xl"
              />
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600">
              for you!
            </p>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Imagine creating a CRM journey as easily as a Google Ads campaign.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg">
              Get $300 free to start
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-gray-500 mt-6"
          >
            No credit card required • 5-minute setup • Cancel anytime
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
