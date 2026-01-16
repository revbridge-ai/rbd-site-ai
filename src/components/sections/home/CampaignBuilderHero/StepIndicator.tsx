"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
  labels?: string[];
}

export function StepIndicator({
  currentStep,
  totalSteps,
  onStepClick,
  labels = ["Setup", "Audience", "Channels", "Assets", "Budget"],
}: StepIndicatorProps) {
  return (
    <div className="w-full">
      {/* Desktop version with labels */}
      <div className="hidden md:flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step, index) => {
          const isCompleted = step < currentStep;
          const isActive = step === currentStep;
          const isPending = step > currentStep;

          return (
            <button
              key={step}
              onClick={() => onStepClick(step)}
              className="flex flex-col items-center gap-1 cursor-pointer group flex-1"
            >
              <motion.div
                className={cn(
                  "relative w-6 h-6 rounded-full flex items-center justify-center font-semibold text-[10px] transition-all",
                  isCompleted && "bg-primary-500 text-white",
                  isActive && "bg-primary-500 text-white shadow-md shadow-primary-500/30",
                  isPending && "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isCompleted ? (
                  <Check size={12} strokeWidth={3} />
                ) : (
                  step
                )}
              </motion.div>
              <span
                className={cn(
                  "text-[10px] font-medium text-center transition-colors",
                  (isActive || isCompleted) ? "text-gray-700" : "text-gray-400"
                )}
              >
                {labels[index]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile version */}
      <div className="flex md:hidden items-center justify-center gap-1.5">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isCompleted = step < currentStep;
          const isActive = step === currentStep;
          return (
            <button
              key={step}
              onClick={() => onStepClick(step)}
              className="p-0.5"
            >
              <motion.div
                className={cn(
                  "h-1.5 rounded-full transition-colors",
                  isActive && "bg-primary-500 w-4",
                  isCompleted && "bg-primary-500 w-1.5",
                  !isActive && !isCompleted && "bg-gray-300 w-1.5"
                )}
                layout
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
