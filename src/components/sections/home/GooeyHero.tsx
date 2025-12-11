"use client";

import { Container } from "@/components/ui/Container";
import { GooeyText } from "@/components/ui/GooeyText";
import { Tiles } from "@/components/ui/Tiles";
import { Button } from "@/components/ui/Button";
import { useWaitlist } from "@/components/ui/WaitlistModal";
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
  const { openWaitlist } = useWaitlist();

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
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600">
              RevBridge handles
            </p>

            {/* Morphing word container */}
            <div className="relative h-[60px] sm:h-[80px] md:h-[120px] lg:h-[160px] -my-2 sm:-my-4 md:-my-5">
              <GooeyText
                texts={morphingWords}
                morphTime={1}
                cooldownTime={2.5}
                textClassName="font-bold text-primary-500 text-4xl sm:text-5xl md:text-7xl lg:text-8xl"
              />
            </div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600">
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
            <a
              href="https://calendly.com/juliano-revbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 px-8 py-4 text-lg"
            >
              Book a Demo
              <ArrowRight size={18} className="ml-2" />
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={openWaitlist}
            >
              Join Waitlist
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-gray-500 mt-6"
          >
            Launching 2026 • $300 free credits for early adopters
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
