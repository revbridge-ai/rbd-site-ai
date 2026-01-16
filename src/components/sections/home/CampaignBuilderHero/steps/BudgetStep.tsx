"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface BudgetStepProps {
  data: {
    biddingModel: string;
    targetCpa: string;
    totalBudget: string;
    dailyLimit: string;
  };
  onChange: (data: {
    biddingModel: string;
    targetCpa: string;
    totalBudget: string;
    dailyLimit: string;
  }) => void;
}

const biddingModels = [
  { id: "cpa", name: "CPA - Cost Per Acquisition" },
  { id: "cpm", name: "CPM - Cost Per 1000 Impressions" },
  { id: "cpc", name: "CPC - Cost Per Click" },
];

export function BudgetStep({ data, onChange }: BudgetStepProps) {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div>
        <h3 className="text-base font-semibold text-gray-900">Budget & Limits</h3>
        <p className="text-xs text-gray-500">Configure budget strategy to optimize performance</p>
      </div>

      {/* Bidding Model Selection */}
      <div>
        <label className="block text-xs font-medium text-gray-900 mb-2">Bidding Model</label>
        <div className="grid grid-cols-3 gap-2">
          {biddingModels.map((model) => {
            const isSelected = data.biddingModel === model.id;
            return (
              <motion.button
                key={model.id}
                onClick={() => onChange({ ...data, biddingModel: model.id })}
                className={cn(
                  "px-3 py-2.5 rounded-lg border text-left transition-all flex items-center justify-between",
                  isSelected
                    ? "border-primary-500 bg-primary-50/50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                )}
                whileTap={{ scale: 0.98 }}
              >
                <span className={cn(
                  "text-sm font-medium",
                  isSelected ? "text-primary-600" : "text-gray-700"
                )}>
                  {model.name}
                </span>
                {isSelected && (
                  <Check size={14} className="text-primary-500" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Budget Inputs */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-900 mb-1.5">
            Target {data.biddingModel.toUpperCase()} ($)
          </label>
          <input
            type="text"
            value={data.targetCpa}
            onChange={(e) => onChange({ ...data, targetCpa: e.target.value })}
            placeholder="15,00"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 outline-none transition-all text-sm text-gray-900 placeholder-gray-400 bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-900 mb-1.5">
            Total Budget ($)
          </label>
          <input
            type="text"
            value={data.totalBudget}
            onChange={(e) => onChange({ ...data, totalBudget: e.target.value })}
            placeholder="15000"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 outline-none transition-all text-sm text-gray-900 placeholder-gray-400 bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-900 mb-1.5">
            Daily Limit ($)
          </label>
          <input
            type="text"
            value={data.dailyLimit}
            onChange={(e) => onChange({ ...data, dailyLimit: e.target.value })}
            placeholder="1500"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 outline-none transition-all text-sm text-gray-900 placeholder-gray-400 bg-white"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
        <p className="text-xs text-gray-600">
          <span className="font-medium text-gray-900">Campaign Ready!</span> Your autonomous campaign will target users with a ${data.targetCpa} {data.biddingModel.toUpperCase()}, limited to ${data.dailyLimit}/day within a ${data.totalBudget} total budget.
        </p>
      </div>
    </div>
  );
}
