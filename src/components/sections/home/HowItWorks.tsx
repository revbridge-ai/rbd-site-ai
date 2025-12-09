"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ScrollFeatures } from "@/components/ui/ScrollFeatures";
import { getAssetPath } from "@/lib/utils";
import {
  FileText,
  Users,
  Radio,
  Palette,
  DollarSign,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: FileText,
    title: "Description & Objective",
    description:
      "Define your campaign objective: sales, retention, re-engagement, or onboarding. Our AI will optimize the entire strategy to achieve your goal.",
    image: getAssetPath("/images/step-1.png"),
  },
  {
    id: 2,
    icon: Users,
    title: "Target Audience",
    description:
      "Select your target audience or let our AI identify the best segments. Import existing segments or create custom audiences.",
    image: getAssetPath("/images/step-2.png"),
  },
  {
    id: 3,
    icon: Radio,
    title: "Impact Channels",
    description:
      "Choose the channels where you want to engage: email, push, SMS, WhatsApp, or all. The AI chooses the best channel for each user.",
    image: getAssetPath("/images/step-3.png"),
  },
  {
    id: 4,
    icon: Palette,
    title: "Brand Assets",
    description:
      "Upload your logo and define colors and tone of voice, or let the AI extract them automatically from your website. Creatives generated in seconds.",
    image: getAssetPath("/images/step-4.png"),
  },
  {
    id: 5,
    icon: DollarSign,
    title: "Budget & Limits",
    description:
      "Set your daily/monthly budget and the maximum CPA you're willing to pay. Full control over how much you invest and pay per result.",
    image: getAssetPath("/images/step-5.png"),
  },
];

export function HowItWorks() {
  return (
    <Section background="gray" id="how-it-works" className="!overflow-visible">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Simple as Google Ads
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Create your campaign in 5 steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Forget complex journeys. Our AI creates all the automation for you.
            You just define the objective and the budget.
          </p>
        </div>

        <ScrollFeatures features={steps} />
      </Container>
    </Section>
  );
}
