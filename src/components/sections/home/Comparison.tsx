"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Check, X, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "Pricing Model",
    revbridge: "Pay-per-performance",
    traditional: "Per contact/month",
    isRevbridgeBetter: true,
  },
  {
    name: "Initial Setup",
    revbridge: "5 minutes",
    traditional: "Weeks/months",
    isRevbridgeBetter: true,
  },
  {
    name: "Journey Creation",
    revbridge: "Automatic by AI",
    traditional: "Manual",
    isRevbridgeBetter: true,
  },
  {
    name: "Creatives",
    revbridge: "AI-generated",
    traditional: "Needs designer",
    isRevbridgeBetter: true,
  },
  {
    name: "Team Required",
    revbridge: "None",
    traditional: "Dedicated team",
    isRevbridgeBetter: true,
  },
  {
    name: "Contracts",
    revbridge: "No commitment",
    traditional: "12-24 months",
    isRevbridgeBetter: true,
  },
  {
    name: "Optimization",
    revbridge: "24/7 automatic",
    traditional: "Manual, periodic",
    isRevbridgeBetter: true,
  },
];

export function Comparison() {
  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            Comparison
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            RevBridge vs Traditional CRMs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we're revolutionizing the CRM market with a fairer,
            simpler, and results-focused model.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-6">
                <p className="text-sm text-gray-500 font-medium">Feature</p>
              </div>
              <div className="p-6 text-center border-x border-gray-200 bg-primary-50">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/logo.svg"
                    alt="RevBridge"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="font-bold text-primary-600">RevBridge</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="font-semibold text-gray-600">Traditional CRMs</p>
                <p className="text-xs text-gray-400">Braze, Salesforce, etc.</p>
              </div>
            </div>

            {/* Rows */}
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={cn(
                  "grid grid-cols-3",
                  index !== features.length - 1 && "border-b border-gray-100"
                )}
              >
                <div className="p-4 md:p-6 flex items-center">
                  <p className="font-medium text-dark">{feature.name}</p>
                </div>
                <div className="p-4 md:p-6 text-center border-x border-gray-100 bg-primary-50/30">
                  <div className="flex items-center justify-center gap-2">
                    <Check size={18} className="text-primary-500" />
                    <span className="text-dark font-medium">{feature.revbridge}</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {feature.isRevbridgeBetter ? (
                      <X size={18} className="text-gray-400" />
                    ) : (
                      <Minus size={18} className="text-gray-400" />
                    )}
                    <span className="text-gray-500">{feature.traditional}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
