"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useWaitlist } from "@/components/ui/WaitlistModal";
import { ArrowRight } from "lucide-react";

export function BlogCTA() {
  const { openWaitlist } = useWaitlist();

  return (
    <Section background="gradient">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Try It?
          </h2>
          <p className="text-white/80 mb-6">
            Be the first to experience the future of CRM.
            Join our waitlist for exclusive early access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/juliano-revbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Book a Demo
              <ArrowRight size={18} className="ml-2" />
            </a>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={openWaitlist}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
