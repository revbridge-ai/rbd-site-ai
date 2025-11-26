"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Target, Zap, Sparkles, Clock, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const valueProps = [
  {
    icon: Target,
    title: "Pay-Per-Performance",
    description:
      "Only pay when you get results. Set your maximum CPA and our platform optimizes to hit your target.",
    highlight: "No fixed fees",
  },
  {
    icon: Zap,
    title: "Automated Journeys",
    description:
      "Our AI creates the entire journey strategy: timing, frequency, triggers, and personalization. You just define the objective.",
    highlight: "100% automatic",
  },
  {
    icon: Sparkles,
    title: "AI-Generated Creatives",
    description:
      "We automatically generate copies, email subjects, WhatsApp messages, and personalized push notifications.",
    highlight: "Zero manual work",
  },
  {
    icon: Clock,
    title: "5-Minute Setup",
    description:
      "Integrate your customer base, set budget and CPA, and you're done. Your first campaign runs the same day.",
    highlight: "No implementation",
  },
  {
    icon: Shield,
    title: "No Long Contracts",
    description:
      "No lock-in, no penalties. You can pause or cancel whenever you want. Total flexibility.",
    highlight: "Cancel anytime",
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    description:
      "Our AI learns from every interaction and optimizes your campaigns 24/7 to maximize your ROI.",
    highlight: "Self-improving",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ValueProps() {
  return (
    <Section background="gray">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Why choose RevBridge?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlike traditional CRMs that charge per contact and require entire teams
            to operate, RevBridge is simple, automated, and results-focused.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {valueProps.map((prop) => (
            <motion.div key={prop.title} variants={item}>
              <Card variant="bordered" hover className="h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <prop.icon size={24} className="text-primary-600" />
                </div>
                <div className="inline-block px-2 py-1 bg-primary-50 rounded text-xs font-semibold text-primary-600 mb-3">
                  {prop.highlight}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
