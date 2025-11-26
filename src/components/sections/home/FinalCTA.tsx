"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useWaitlist } from "@/components/ui/WaitlistModal";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  const { openWaitlist } = useWaitlist();

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
            Early access opening soon
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to revolutionize your CRM?
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-8">
            Be the first to experience the future of CRM.
            Join our waitlist for exclusive early access.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl"
              onClick={openWaitlist}
            >
              Join the Waitlist
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={openWaitlist}
            >
              Learn More
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-6">
            $300 in free credits for early adopters
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
