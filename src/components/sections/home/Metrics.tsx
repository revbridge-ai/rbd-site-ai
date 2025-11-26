"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const metrics = [
  {
    value: "$10M+",
    label: "Performance delivered",
    description: "to our clients",
  },
  {
    value: "3x",
    label: "More conversions",
    description: "compared to traditional CRMs",
  },
  {
    value: "5 min",
    label: "To first campaign",
    description: "from zero to live",
  },
  {
    value: "0",
    label: "Setup fees",
    description: "start with no upfront investment",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Metrics() {
  return (
    <Section background="dark">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={item}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {metric.value}
              </p>
              <p className="text-white font-semibold mb-1">{metric.label}</p>
              <p className="text-gray-400 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
