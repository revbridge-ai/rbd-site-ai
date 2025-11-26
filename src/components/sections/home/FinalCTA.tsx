"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <Section background="gradient" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/5" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6">
            <Sparkles size={16} />
            $300 free credits, no credit card required
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to revolutionize your CRM?
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-8">
            Your first campaign can be running in 5 minutes.
            No contracts, no setup fees, no hassle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl"
            >
              Get $300 free to start
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Talk to Sales
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-6">
            Join over 500 companies that have already transformed their CRM
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
