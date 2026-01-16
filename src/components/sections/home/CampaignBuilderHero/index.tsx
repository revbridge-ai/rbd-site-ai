"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Tiles } from "@/components/ui/Tiles";
import { Button } from "@/components/ui/Button";
import { useWaitlist } from "@/components/ui/WaitlistModal";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { StepIndicator } from "./StepIndicator";
import { CampaignSetupStep } from "./steps/CampaignSetupStep";
import { AudienceStep } from "./steps/AudienceStep";
import { ChannelsStep } from "./steps/ChannelsStep";
import { AssetsStep } from "./steps/AssetsStep";
import { BudgetStep } from "./steps/BudgetStep";

const TOTAL_STEPS = 5;
const DEMO_LINK = "https://calendar.revbridge.ai/book/juliano/revbridge-demo";

const stepLabels = ["Campaign Setup", "Audience", "Channels", "Assets", "Budget & Limits"];

interface CampaignData {
  setup: {
    name: string;
    objective: string;
    description: string;
  };
  audiences: string[];
  channels: string[];
  assetMode: string;
  budget: {
    biddingModel: string;
    targetCpa: string;
    totalBudget: string;
    dailyLimit: string;
  };
}

const initialData: CampaignData = {
  setup: {
    name: "Black Friday - Cart Abandoned",
    objective: "conversions",
    description: "",
  },
  audiences: ["cart-abandoners"],
  channels: [],
  assetMode: "ai-generated",
  budget: {
    biddingModel: "cpa",
    targetCpa: "15",
    totalBudget: "15000",
    dailyLimit: "1500",
  },
};

export function CampaignBuilderHero() {
  const { openWaitlist } = useWaitlist();
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [campaignData, setCampaignData] = useState<CampaignData>(initialData);

  const progressPercent = (currentStep / TOTAL_STEPS) * 100;

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    if (step !== currentStep) {
      setDirection(step > currentStep ? 1 : -1);
      setCurrentStep(step);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    }),
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CampaignSetupStep
            data={campaignData.setup}
            onChange={(setup) => setCampaignData({ ...campaignData, setup })}
          />
        );
      case 2:
        return (
          <AudienceStep
            selectedAudiences={campaignData.audiences}
            onChange={(audiences) => setCampaignData({ ...campaignData, audiences })}
          />
        );
      case 3:
        return (
          <ChannelsStep
            selectedChannels={campaignData.channels}
            onChange={(channels) => setCampaignData({ ...campaignData, channels })}
          />
        );
      case 4:
        return (
          <AssetsStep
            selectedMode={campaignData.assetMode}
            onChange={(assetMode) => setCampaignData({ ...campaignData, assetMode })}
          />
        );
      case 5:
        return (
          <BudgetStep
            data={campaignData.budget}
            onChange={(budget) => setCampaignData({ ...campaignData, budget })}
          />
        );
      default:
        return null;
    }
  };

  const isLastStep = currentStep === TOTAL_STEPS;

  return (
    <section className="relative overflow-hidden bg-gray-50 py-4 md:py-6">
      {/* Tiles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Tiles
          rows={50}
          cols={20}
          tileSize="lg"
          className="opacity-[0.02]"
        />
      </div>

      <Container className="relative z-10">
        {/* Main Builder Card */}
        <motion.div
          className="bg-white rounded-xl shadow-xl border border-gray-100 max-w-3xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header - Compact */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Sparkles size={14} className="text-primary-600" />
                </div>
                <div>
                  <h1 className="text-base font-bold text-gray-900">Create Autonomous Campaign</h1>
                  <p className="text-[10px] text-gray-500">AI-powered campaign that adapts to user behavior</p>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 hidden sm:block">{Math.round(progressPercent)}%</span>
            </div>

            {/* Progress Bar */}
            <div className="mt-2 h-0.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Step Indicator - Compact */}
          <div className="px-4 py-2 bg-gray-50/50 border-b border-gray-100">
            <StepIndicator
              currentStep={currentStep}
              totalSteps={TOTAL_STEPS}
              onStepClick={handleStepClick}
              labels={stepLabels}
            />
          </div>

          {/* Step Content - Minimal */}
          <div className="p-3 min-h-[240px] bg-gray-50/30">
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="px-4 py-2.5 bg-white border-t border-gray-100">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg transition-colors ${
                  currentStep === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <ArrowLeft size={12} />
                Previous
              </button>

              <div className="flex items-center gap-2">
                {isLastStep ? (
                  <a
                    href={DEMO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25 transition-all"
                  >
                    Book a Demo
                    <ArrowRight size={12} />
                  </a>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25 transition-all"
                  >
                    Next Step
                    <ArrowRight size={12} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Compact */}
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25 px-5 py-2 text-sm"
            >
              Book a Demo
              <ArrowRight size={14} className="ml-1.5" />
            </a>
            <Button
              size="sm"
              variant="outline"
              onClick={openWaitlist}
            >
              Join Waitlist
            </Button>
          </div>
          <p className="text-[10px] text-gray-500 mt-2">
            Launching 2026 • $1,000 free credits for early adopters
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
