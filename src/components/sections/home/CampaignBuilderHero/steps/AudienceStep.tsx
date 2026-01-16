"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Search, Zap, Users, Check } from "lucide-react";

interface AudienceStepProps {
  selectedAudiences: string[];
  onChange: (audiences: string[]) => void;
}

const audiences = [
  {
    id: "all-users",
    name: "All Users",
    description: "Target your entire customer base",
  },
  {
    id: "recent-30",
    name: "Recent Customers (30 days)",
    description: "Customers who purchased in the last 30 days",
  },
  {
    id: "recent-90",
    name: "Recent Customers (90 days)",
    description: "Customers who purchased in the last 90 days",
  },
  {
    id: "cart-abandoners",
    name: "Cart Abandoners",
    description: "Users who added items but didn't complete purchase",
  },
  {
    id: "newsletter",
    name: "Newsletter Subscribers",
    description: "Users subscribed to your newsletter",
  },
  {
    id: "high-value",
    name: "High-Value Customers",
    description: "Your most valuable customers by lifetime value",
  },
  {
    id: "inactive-30",
    name: "Inactive Users (30 days)",
    description: "Users who haven't engaged in the last 30 days",
  },
  {
    id: "repeat",
    name: "Repeat Purchasers",
    description: "Customers with multiple purchases",
  },
];

type TabType = "segments" | "templates";

export function AudienceStep({ selectedAudiences, onChange }: AudienceStepProps) {
  const [activeTab, setActiveTab] = useState<TabType>("templates");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAudience = (id: string) => {
    if (selectedAudiences.includes(id)) {
      onChange(selectedAudiences.filter((a) => a !== id));
    } else {
      onChange([...selectedAudiences, id]);
    }
  };

  const filteredAudiences = audiences.filter(
    (a) =>
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Target Audience</h3>
          <p className="text-xs text-gray-500">Choose segments or use pre-built templates</p>
        </div>
        {/* Search */}
        <div className="relative w-64 hidden sm:block">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-gray-200 focus:border-primary-500 outline-none transition-all text-xs text-gray-900 placeholder-gray-400 bg-white"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-lg p-0.5">
        <button
          onClick={() => setActiveTab("segments")}
          className={cn(
            "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-medium transition-all",
            activeTab === "segments"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          <Users size={14} />
          Custom Segments (4)
        </button>
        <button
          onClick={() => setActiveTab("templates")}
          className={cn(
            "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-medium transition-all",
            activeTab === "templates"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          <Zap size={14} />
          Quick Templates (8)
        </button>
      </div>

      {/* Audience Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredAudiences.map((audience, index) => {
          const isSelected = selectedAudiences.includes(audience.id);
          return (
            <motion.button
              key={audience.id}
              onClick={() => toggleAudience(audience.id)}
              className={cn(
                "p-3 rounded-lg border text-left transition-all relative",
                isSelected
                  ? "border-primary-500 bg-primary-50/30"
                  : "border-gray-200 bg-white hover:border-gray-300"
              )}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSelected && (
                <motion.div
                  className="absolute top-2 right-2 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <Check size={10} className="text-white" strokeWidth={3} />
                </motion.div>
              )}

              <div className="flex items-center gap-1.5 mb-1">
                <Zap size={12} className="text-primary-500" />
                <p className={cn(
                  "font-medium text-xs pr-4 line-clamp-1",
                  isSelected ? "text-primary-600" : "text-gray-900"
                )}>
                  {audience.name}
                </p>
              </div>
              <p className="text-[10px] text-gray-500 line-clamp-2">{audience.description}</p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
