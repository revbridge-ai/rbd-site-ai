"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Head of Growth • Fashion E-commerce",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    quote: "We used to spend $15k/month just on CRM tools and still needed 2 people to operate them. With RevBridge, we pay for results and the AI does everything.",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "CEO • SaaS Startup",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "The simplicity is impressive. In 5 minutes my first campaign was running. The AI generated better creatives than our team used to make manually.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "CMO • Fintech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote: "Finally a CRM that makes sense for growing companies. No long contracts, no dedicated team needed, just results.",
  },
  {
    id: 4,
    name: "David Kim",
    designation: "VP Marketing • Retail",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "The pay-per-performance model completely changed how we think about CRM. Now every dollar invested has measurable return.",
  },
  {
    id: 5,
    name: "Anna Williams",
    designation: "Growth Lead • EdTech",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    quote: "We managed to triple our retention rate in 2 months. The AI truly understands our users' behavior.",
  },
  {
    id: 6,
    name: "James Parker",
    designation: "CTO • HealthTech",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    quote: "The integration was ridiculously easy. In less than 1 hour we already had our first campaigns running.",
  },
];

export function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedTestimonial = testimonials[selectedIndex];

  const handleSelect = (id: number) => {
    const index = testimonials.findIndex((t) => t.id === id);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Companies that trust RevBridge
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join dozens of companies that have already transformed their CRM
          </p>

          {/* Animated Avatars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <AnimatedTooltip
              items={testimonials}
              onSelect={handleSelect}
              selectedId={selectedTestimonial.id}
            />
          </motion.div>
        </div>

        {/* Featured quote */}
        <div className="max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTestimonial.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="text-base md:text-lg text-gray-700 italic mb-6">
                &ldquo;{selectedTestimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-dark">{selectedTestimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {selectedTestimonial.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
