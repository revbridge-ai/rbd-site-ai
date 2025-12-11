"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const metrics = [
  {
    value: "39%",
    label: "Open Rate",
    description: "vs 15% industry benchmark",
  },
  {
    value: "9%",
    label: "Click-to-Open Rate",
    description: "vs 3% industry benchmark",
  },
  {
    value: "2.6x",
    label: "Higher engagement",
    description: "compared to market average",
  },
  {
    value: "3x",
    label: "More clicks",
    description: "than traditional campaigns",
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
    <Section background="dark" id="results">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={item}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">
                {metric.value}
              </p>
              <p className="text-white font-semibold text-sm sm:text-base mb-1">{metric.label}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
