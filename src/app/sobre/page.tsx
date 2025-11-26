"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  Rocket,
  Target,
  Users,
  Heart,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    description:
      "We don't measure success by features delivered, but by revenue generated for our clients.",
  },
  {
    icon: Zap,
    title: "Simplicity",
    description:
      "We believe CRM doesn't have to be complicated. We automate everything that can be automated.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description:
      "Clear pricing, open metrics, no surprises. You always know exactly what you're paying for.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "Enterprise tools shouldn't be exclusive to large companies. We democratize CRM.",
  },
];

const stats = [
  { value: "2023", label: "Founded" },
  { value: "50+", label: "Active clients" },
  { value: "$10M+", label: "Performance delivered" },
  { value: "15", label: "Team members" },
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

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <Section background="gray" className="pt-24 md:pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Democratizing high-performance CRM
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We were born with the mission to make enterprise CRM tools
              accessible to companies of all sizes, with a fair
              pay-per-performance model.
            </p>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section background="white" className="py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section background="gray">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Why we created RevBridge
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Before founding RevBridge, we worked at companies that
                  spent fortunes on enterprise CRMs. Platforms like Braze and
                  Salesforce Marketing Cloud cost tens of thousands of
                  dollars per month, required dedicated teams to operate, and still
                  the results were uncertain.
                </p>
                <p>
                  We realized the model was broken: companies paid for
                  stored contacts, not for results generated. Teams
                  spent weeks configuring complex journeys that often
                  didn't perform.
                </p>
                <p>
                  With the advancement of AI, we saw the opportunity to revolutionize this
                  market. We created a platform that automates all the
                  complexity of CRM and charges only for real performance.
                </p>
                <p className="font-semibold text-dark">
                  Our mission is simple: democratize high-performance CRM
                  for companies of all sizes.
                </p>
              </div>
            </div>

            <Card variant="elevated" className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                  <Rocket size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark">Our Vision</h3>
                  <p className="text-gray-500">Where we're heading</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                We want to be the simplest and most efficient CRM platform in the
                world. A future where any company can compete with
                large players using cutting-edge technology, without needing
                huge teams or million-dollar budgets.
              </p>
              <div className="p-4 bg-primary-50 rounded-xl">
                <p className="text-primary-700 font-medium">
                  &ldquo;CRM should be as simple as creating a Google
                  Ads ad&rdquo;
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              What drives us
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={item}>
                <Card variant="elevated" hover className="h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Team */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">
              <Users size={14} className="mr-1" />
              Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Who makes it happen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A lean team passionate about solving complex problems with
              simple solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Founder & CEO",
                role: "Leadership & Product",
                bio: "Ex-Growth at unicorn startups. Passionate about creating products that generate real value.",
              },
              {
                name: "CTO",
                role: "Technology & AI",
                bio: "Specialist in Machine Learning and distributed systems. Transforms vision into code.",
              },
              {
                name: "Head of Growth",
                role: "Marketing & Sales",
                bio: "Experience scaling marketing operations. Obsessive focus on metrics.",
              },
            ].map((member) => (
              <Card key={member.name} variant="bordered" className="text-center">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-gray-400" />
                </div>
                <h3 className="font-bold text-dark">{member.name}</h3>
                <p className="text-primary-500 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
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
              Want to be part of this revolution?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We're always looking for talented people who share
              our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                View Careers
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
