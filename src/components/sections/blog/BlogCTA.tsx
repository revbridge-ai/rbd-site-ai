"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WaitlistButton } from "@/components/ui/WaitlistButton";

export function BlogCTA() {
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
          <WaitlistButton className="bg-white text-primary-600 hover:bg-gray-100" />
        </div>
      </Container>
    </Section>
  );
}
