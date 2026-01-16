"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, Layout, Check, Mail, MessageSquare, Bell, Eye, Users, Zap, Shield, FileText } from "lucide-react";

interface AssetsStepProps {
  selectedMode: string;
  onChange: (mode: string) => void;
}

type PreviewTab = "email" | "sms" | "push";

export function AssetsStep({ selectedMode, onChange }: AssetsStepProps) {
  const [previewTab, setPreviewTab] = useState<PreviewTab>("email");

  return (
    <div className="space-y-3">
      {/* Section Header */}
      <div>
        <h3 className="text-base font-semibold text-gray-900">Content Strategy</h3>
        <p className="text-xs text-gray-500">Choose how AI will create content for your campaign</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-3">
        {/* Left Side - Options */}
        <div className="lg:col-span-3 space-y-2">
          {/* AI Generated Option */}
          <motion.button
            onClick={() => onChange("ai-generated")}
            className={cn(
              "w-full p-3 rounded-lg border text-left transition-all",
              selectedMode === "ai-generated"
                ? "border-primary-500 bg-primary-50/30"
                : "border-gray-200 bg-white hover:border-gray-300"
            )}
            whileTap={{ scale: 0.995 }}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                selectedMode === "ai-generated" ? "bg-primary-100" : "bg-gray-100"
              )}>
                <Sparkles size={16} className={selectedMode === "ai-generated" ? "text-primary-600" : "text-gray-400"} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn(
                  "font-semibold text-sm",
                  selectedMode === "ai-generated" ? "text-primary-600" : "text-gray-900"
                )}>
                  100% AI Generated Content
                  <span className="ml-2 text-[10px] text-primary-600 font-medium uppercase">Recommended</span>
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1 text-[10px] text-gray-500">
                  <span className="flex items-center gap-1"><Users size={10} className="text-primary-500" />Personalized</span>
                  <span className="flex items-center gap-1"><Zap size={10} className="text-primary-500" />Dynamic</span>
                  <span className="flex items-center gap-1"><Shield size={10} className="text-primary-500" />Brand Safe</span>
                </div>
              </div>
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                selectedMode === "ai-generated" ? "border-primary-500 bg-primary-500" : "border-gray-300"
              )}>
                {selectedMode === "ai-generated" && <Check size={12} className="text-white" strokeWidth={3} />}
              </div>
            </div>
          </motion.button>

          {/* Template Based Option */}
          <motion.button
            onClick={() => onChange("template-based")}
            className={cn(
              "w-full p-3 rounded-lg border text-left transition-all",
              selectedMode === "template-based"
                ? "border-primary-500 bg-primary-50/30"
                : "border-gray-200 bg-white hover:border-gray-300"
            )}
            whileTap={{ scale: 0.995 }}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                selectedMode === "template-based" ? "bg-primary-100" : "bg-gray-100"
              )}>
                <Layout size={16} className={selectedMode === "template-based" ? "text-primary-600" : "text-gray-400"} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn(
                  "font-semibold text-sm",
                  selectedMode === "template-based" ? "text-primary-600" : "text-gray-900"
                )}>
                  Template-Based with AI
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1 text-[10px] text-gray-500">
                  <span className="flex items-center gap-1"><FileText size={10} />Templates</span>
                  <span className="flex items-center gap-1"><Sparkles size={10} />AI Copy</span>
                  <span className="flex items-center gap-1"><Shield size={10} />Consistent</span>
                </div>
              </div>
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                selectedMode === "template-based" ? "border-primary-500 bg-primary-500" : "border-gray-300"
              )}>
                {selectedMode === "template-based" && <Check size={12} className="text-white" strokeWidth={3} />}
              </div>
            </div>
          </motion.button>
        </div>

        {/* Right Side - Preview */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-full">
            <div className="px-3 py-2 border-b border-gray-100 flex items-center gap-2">
              <Eye size={12} className="text-gray-400" />
              <span className="text-xs font-medium text-gray-700">Preview</span>
              <div className="flex ml-auto">
                {[
                  { id: "email" as const, icon: Mail },
                  { id: "sms" as const, icon: MessageSquare },
                  { id: "push" as const, icon: Bell },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setPreviewTab(tab.id)}
                    className={cn(
                      "p-1.5 rounded transition-colors",
                      previewTab === tab.id ? "text-primary-500 bg-primary-50" : "text-gray-400 hover:text-gray-600"
                    )}
                  >
                    <tab.icon size={12} />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3">
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <p className="text-[10px] text-gray-400">hello@yourbrand.com</p>
                <p className="font-semibold text-sm text-gray-900">Special Offer Just For You</p>
                <p className="text-xs text-gray-500">Your personalized content here...</p>
                <button className="w-full py-2 bg-primary-500 text-white text-xs font-medium rounded-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
