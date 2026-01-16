"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";

interface CampaignSetupStepProps {
  data: {
    name: string;
    objective: string;
    description: string;
  };
  onChange: (data: { name: string; objective: string; description: string }) => void;
}

const objectives = [
  { id: "conversions", label: "Increase Conversions" },
  { id: "engagement", label: "Boost Engagement" },
  { id: "retention", label: "Customer Retention" },
  { id: "reactivation", label: "Reactivate Dormant Users" },
  { id: "upsell", label: "Upsell & Cross-sell" },
  { id: "satisfaction", label: "Improve Customer Satisfaction" },
];

export function CampaignSetupStep({ data, onChange }: CampaignSetupStepProps) {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div>
        <h3 className="text-base font-semibold text-gray-900">Campaign Setup</h3>
        <p className="text-xs text-gray-500">Define your campaign details and objectives</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-3">
          {/* Campaign Name */}
          <div>
            <label className="block text-xs font-medium text-gray-900 mb-1.5">
              Campaign Name <span className="text-primary-500">*</span>
            </label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => onChange({ ...data, name: e.target.value })}
              placeholder="e.g., Black Friday - Cart Abandoned"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm text-gray-900 placeholder-gray-400 bg-white"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-gray-900 mb-1.5">
              Description
            </label>
            <textarea
              value={data.description}
              onChange={(e) => onChange({ ...data, description: e.target.value })}
              placeholder="Black Friday won't wait. Complete your purchase before the deal disappears."
              rows={2}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm text-gray-900 placeholder-gray-400 bg-white resize-none"
            />
          </div>

          {/* Conversion Event */}
          <div>
            <label className="block text-xs font-medium text-gray-900 mb-1.5">
              Conversion Event
            </label>
            <div className="relative">
              <select className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm text-gray-900 bg-white appearance-none cursor-pointer">
                <option>Purchase</option>
                <option>Sign Up</option>
                <option>Add to Cart</option>
                <option>Page View</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right Column - Objectives */}
        <div>
          <label className="block text-xs font-medium text-gray-900 mb-1.5">
            Primary Objective
          </label>
          <div className="space-y-1.5">
            {objectives.map((objective, index) => {
              const isSelected = data.objective === objective.id;
              return (
                <motion.button
                  key={objective.id}
                  onClick={() => onChange({ ...data, objective: objective.id })}
                  className={cn(
                    "w-full px-3 py-2.5 rounded-lg border text-left transition-all flex items-center justify-between",
                    isSelected
                      ? "border-primary-500 bg-primary-50/50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  )}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.02 }}
                  whileTap={{ scale: 0.995 }}
                >
                  <span className={cn(
                    "text-sm font-medium",
                    isSelected ? "text-primary-600" : "text-gray-700"
                  )}>
                    {objective.label}
                  </span>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center"
                    >
                      <Check size={10} className="text-white" strokeWidth={3} />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
