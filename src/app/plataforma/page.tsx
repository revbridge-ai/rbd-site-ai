"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { WaitlistButton } from "@/components/ui/WaitlistButton";
import {
  Rocket,
  Target,
  Brain,
  Palette,
  Radio,
  BarChart3,
  Check,
  Play,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    number: "01",
    title: "Simplified Campaigns",
    subtitle: "Forget complex journeys",
    icon: Rocket,
    description:
      "Create campaigns as easily as a Google Ads ad. Define objective, audience, and budget. Our AI handles the rest.",
    benefits: [
      "Setup in less than 5 minutes",
      "No flowcharts needed",
      "Clear objectives: sales, retention, re-engagement",
      "Industry-optimized templates",
    ],
    image: "/images/campaigns.png",
  },
  {
    number: "02",
    title: "Budget & CPA",
    subtitle: "Full investment control",
    icon: Target,
    description:
      "Set how much you want to spend and your maximum acceptable CPA. Our platform automatically optimizes to hit your targets.",
    benefits: [
      "Daily or monthly budget",
      "Configurable maximum CPA",
      "Pause campaign anytime",
      "Real-time ROI reports",
    ],
    image: "/images/budget.png",
  },
  {
    number: "03",
    title: "Journey AI",
    subtitle: "Intelligent automation",
    icon: Brain,
    description:
      "Our AI analyzes your customers' behavior and automatically creates personalized journeys. Optimized timing, frequency, and triggers.",
    benefits: [
      "Real-time Machine Learning",
      "Send time optimization",
      "Ideal frequency per user",
      "Automatic A/B testing",
    ],
    image: "/images/ai-journey.png",
  },
  {
    number: "04",
    title: "Dynamic Creatives",
    subtitle: "AI-powered auto-generation",
    icon: Palette,
    description:
      "We automatically generate copies, subjects, messages, and even images. All personalized for your brand and optimized for conversion.",
    benefits: [
      "AI-generated copies",
      "Optimized email subjects",
      "Segment personalization",
      "Your brand's tone of voice",
    ],
    image: "/images/creatives.png",
  },
  {
    number: "05",
    title: "Integrated Channels",
    subtitle: "True omnichannel",
    icon: Radio,
    description:
      "Email, Push, SMS, and WhatsApp in a single platform. The AI chooses the best channel for each user at each moment.",
    benefits: [
      "Email marketing",
      "Push notifications",
      "Transactional SMS",
      "WhatsApp Business API",
    ],
    image: "/images/channels.png",
  },
  {
    number: "06",
    title: "Advanced Analytics",
    subtitle: "Metrics that matter",
    icon: BarChart3,
    description:
      "Real-time dashboard with all performance metrics. Understand exactly how much revenue you're generating.",
    benefits: [
      "ROI per campaign",
      "Revenue attribution",
      "Cohort analysis",
      "Data export",
    ],
    image: "/images/analytics.png",
  },
];

export default function PlataformaPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <>
      {/* Hero */}
      <Section background="gray" className="pt-24 md:pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              Platform
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              The simplest and most powerful CRM on the market
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              All the complexity of an enterprise CRM, with the simplicity of
              creating a Google Ads ad. Powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WaitlistButton />
              <Button variant="outline" size="lg">
                <Play size={18} className="mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Navigation */}
      <Section background="white">
        <Container>
          {/* Feature tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {features.map((feature, index) => (
              <button
                key={feature.number}
                onClick={() => setActiveFeature(index)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all",
                  activeFeature === index
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                <span className="text-sm">{feature.number}</span>
                <span className="hidden sm:inline">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Active feature detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                    {(() => {
                      const IconComponent = features[activeFeature].icon;
                      return <IconComponent size={32} className="text-white" />;
                    })()}
                  </div>
                  <div>
                    <p className="text-primary-500 font-bold">
                      {features[activeFeature].number}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-dark">
                      {features[activeFeature].title}
                    </h2>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  {features[activeFeature].description}
                </p>

                <div className="space-y-4 mb-8">
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                        <Check size={14} className="text-primary-600" />
                      </div>
                      <span className="text-dark">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <Button>
                  Learn more about {features[activeFeature].title}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>

              {/* Visual */}
              <Card variant="elevated" className="p-8">
                <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const IconComponent = features[activeFeature].icon;
                        return <IconComponent size={32} className="text-white" />;
                      })()}
                    </div>
                    <p className="text-gray-500">
                      {features[activeFeature].title} Preview
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Section>

      {/* All features grid */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Everything you need in one platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enterprise features with startup simplicity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.number} variant="bordered" hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <feature.icon size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-primary-500 text-sm font-bold mb-1">
                      {feature.number}
                    </p>
                    <h3 className="font-bold text-dark mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.subtitle}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to simplify your CRM?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Be the first to experience the future of CRM.
              Join our waitlist for exclusive early access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WaitlistButton className="bg-white text-primary-600 hover:bg-gray-100" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
