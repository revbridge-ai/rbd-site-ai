"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  Check,
  X,
  ArrowRight,
  Calculator,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does the pay-per-performance model work?",
    answer:
      "You set a maximum CPA (cost per acquisition) and a budget. Our platform optimizes campaigns to generate conversions within your target CPA. You only pay when there's a result.",
  },
  {
    question: "What counts as 'performance'?",
    answer:
      "Performance is defined by you: it can be a sale, a signup, a download, or any other conversion you configure. We track via pixel or integration with your system.",
  },
  {
    question: "Is there a minimum investment?",
    answer:
      "There's no mandatory minimum. You can start with any budget and scale based on results. We recommend starting with at least $200/month to have statistically relevant data.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is weekly or monthly, depending on your volume. You receive a detailed report of each conversion generated and the associated cost.",
  },
  {
    question: "Can I pause my account at any time?",
    answer:
      "Yes! There are no long-term contracts or cancellation fees. You can pause, adjust budget, or cancel whenever you want.",
  },
  {
    question: "Does the platform integrate with my current system?",
    answer:
      "Yes, we have native integrations with major ERPs, CRMs, and e-commerce platforms. We also offer a complete API for custom integrations.",
  },
];

export default function PricingPage() {
  const [budget, setBudget] = useState(5000);
  const [cpa, setCpa] = useState(50);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const estimatedConversions = Math.floor(budget / cpa);

  return (
    <>
      {/* Hero */}
      <Section background="gray" className="pt-24 md:pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Only pay for{" "}
              <span className="text-gradient">performance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              No fixed fees, no long contracts. You set the maximum CPA and
              only pay when we deliver results.
            </p>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                How it works
              </h2>
              <p className="text-lg text-gray-600">
                Simple and transparent model
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card variant="elevated" className="text-center">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  Set your CPA
                </h3>
                <p className="text-gray-600">
                  How much you're willing to pay for each conversion
                  (sale, lead, etc.)
                </p>
              </Card>

              <Card variant="elevated" className="text-center">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  Configure budget
                </h3>
                <p className="text-gray-600">
                  Set a daily or monthly limit. You control how much you want
                  to invest.
                </p>
              </Card>

              <Card variant="elevated" className="text-center">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  Pay for results
                </h3>
                <p className="text-gray-600">
                  We only charge when we generate a conversion within your target
                  CPA.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* ROI Calculator */}
      <Section background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">
                <Calculator size={14} className="mr-1" />
                Calculator
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Simulate your investment
              </h2>
              <p className="text-lg text-gray-600">
                See how many conversions you can generate
              </p>
            </div>

            <Card variant="elevated" className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Monthly budget
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="1000"
                        max="50000"
                        step="1000"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="flex-1 accent-primary-500"
                      />
                      <span className="text-2xl font-bold text-dark min-w-[120px] text-right">
                        ${budget.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Target CPA
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="10"
                        max="200"
                        step="5"
                        value={cpa}
                        onChange={(e) => setCpa(Number(e.target.value))}
                        className="flex-1 accent-primary-500"
                      />
                      <span className="text-2xl font-bold text-dark min-w-[100px] text-right">
                        ${cpa}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-dark mb-4">
                    Estimated results
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Estimated conversions</span>
                      <span className="text-3xl font-bold text-gradient">
                        ~{estimatedConversions}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost per conversion</span>
                      <span className="text-xl font-semibold text-dark">
                        ${cpa}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total investment</span>
                      <span className="text-xl font-semibold text-dark">
                        ${budget.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <hr className="my-4 border-gray-200" />
                  <p className="text-sm text-gray-500">
                    * Estimate based on target CPA. Actual results may
                    vary.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg">
                  Start with this plan
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Comparison */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Compared to traditional models
              </h2>
              <p className="text-lg text-gray-600">
                See why pay-per-performance makes more sense
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional */}
              <Card variant="bordered" className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-600 mb-2">
                    Traditional CRMs
                  </h3>
                  <p className="text-3xl font-bold text-dark">
                    $1-10k<span className="text-lg text-gray-500">/month</span>
                  </p>
                  <p className="text-sm text-gray-500">Fixed fee per contacts</p>
                </div>
                <ul className="space-y-3">
                  {[
                    { text: "Fixed fee regardless of results", bad: true },
                    { text: "12-24 month contracts", bad: true },
                    { text: "Lengthy setup (weeks)", bad: true },
                    { text: "Dedicated team required", bad: true },
                    { text: "Additional implementation costs", bad: true },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <X size={18} className="text-red-500 shrink-0" />
                      <span className="text-gray-600">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* RevBridge */}
              <Card
                variant="elevated"
                className="p-6 border-2 border-primary-500 relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="primary">Recommended</Badge>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">
                    RevBridge
                  </h3>
                  <p className="text-3xl font-bold text-dark">
                    $0<span className="text-lg text-gray-500"> fixed</span>
                  </p>
                  <p className="text-sm text-primary-600">
                    Pay only per conversion
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Pay only for results",
                    "No long-term contracts",
                    "5-minute setup",
                    "No team required",
                    "No implementation costs",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check size={18} className="text-primary-500 shrink-0" />
                      <span className="text-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section background="gray">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">
                <HelpCircle size={14} className="mr-1" />
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  variant="bordered"
                  className="cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-dark">{faq.question}</h3>
                    <ChevronDown
                      size={20}
                      className={cn(
                        "text-gray-400 transition-transform shrink-0",
                        openFaq === index && "rotate-180"
                      )}
                    />
                  </div>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 mt-4 pt-4 border-t border-gray-100">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start risk-free
            </h2>
            <p className="text-lg text-white/80 mb-8">
              No credit card, no commitment. Your first campaign can
              be running in 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
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
          </div>
        </Container>
      </Section>
    </>
  );
}
