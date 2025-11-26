"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { getAssetPath } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, Cloud, Globe } from "lucide-react";

const benefits = [
  {
    icon: Cloud,
    title: "$100,000 in Credits",
    description: "Google Cloud credits to power our infrastructure",
  },
  {
    icon: Globe,
    title: "Global Resources",
    description: "Access to world-class mentorship and support",
  },
  {
    icon: Award,
    title: "Scale Category",
    description: "Selected among top growth-stage startups",
  },
];

export function GooglePartnership() {
  return (
    <Section background="white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="text-center mb-8">
            <Badge variant="primary" className="mb-4">
              Partnership
            </Badge>
          </div>

          {/* Main Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <Image
                    src={getAssetPath("/logo.svg")}
                    alt="RevBridge"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                  <span className="text-2xl text-gray-300 font-light">+</span>
                  <Image
                    src={getAssetPath("/images/google-cloud-logo.svg")}
                    alt="Google Cloud"
                    width={180}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
              </div>

              {/* Announcement */}
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-4">
                  RevBridge joins Google for Startups Cloud Program
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We&apos;re proud to announce that RevBridge has been accepted into the{" "}
                  <span className="font-semibold text-dark">Google for Startups Cloud Program</span>,{" "}
                  <span className="font-semibold text-primary-500">Scale category</span>, with $100,000 in Google Cloud credits and access to world-class resources.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon size={24} className="text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-dark mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-500">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
              <p className="text-center text-sm text-gray-500">
                Building the future of CRM with the support of Google Cloud
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
