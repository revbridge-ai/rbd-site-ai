"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Mail, Bell, MessageSquare, Smartphone, Globe, Send, MessageCircle, Zap, Check } from "lucide-react";

interface ChannelsStepProps {
  selectedChannels: string[];
  onChange: (channels: string[]) => void;
}

const channels = [
  { id: "email", name: "Email", icon: Mail, description: "Rich content and detailed messaging" },
  { id: "push", name: "Push Notification", icon: Bell, description: "Instant mobile notifications" },
  { id: "sms", name: "SMS", icon: MessageSquare, description: "Direct text messaging" },
  { id: "in-app", name: "In-app", icon: Smartphone, description: "Native app notifications" },
  { id: "web-push", name: "Web Push", icon: Globe, description: "Browser-based notifications" },
  { id: "whatsapp", name: "WhatsApp", icon: Send, description: "Popular messaging platform" },
  { id: "messenger", name: "Messenger", icon: MessageCircle, description: "Facebook Messenger integration" },
];

export function ChannelsStep({ selectedChannels, onChange }: ChannelsStepProps) {
  const toggleChannel = (id: string) => {
    if (selectedChannels.includes(id)) {
      onChange(selectedChannels.filter((c) => c !== id));
    } else {
      onChange([...selectedChannels, id]);
    }
  };

  const selectAll = () => {
    if (selectedChannels.length === channels.length) {
      onChange([]);
    } else {
      onChange(channels.map((c) => c.id));
    }
  };

  const allSelected = selectedChannels.length === channels.length;

  return (
    <div className="space-y-3">
      {/* Section Header */}
      <div>
        <h3 className="text-base font-semibold text-gray-900">Communication Channels</h3>
        <p className="text-xs text-gray-500">Select channels for your campaign. AI will optimize engagement across them.</p>
      </div>

      {/* All Channels Option */}
      <motion.button
        onClick={selectAll}
        className={cn(
          "w-full p-3 rounded-lg border text-left transition-all",
          allSelected
            ? "border-primary-500 bg-primary-50/50"
            : "border-gray-200 bg-white hover:border-gray-300"
        )}
        whileTap={{ scale: 0.995 }}
      >
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
            allSelected ? "bg-primary-100" : "bg-gray-100"
          )}>
            <Zap size={16} className={allSelected ? "text-primary-600" : "text-gray-400"} />
          </div>
          <div className="flex-1">
            <p className={cn(
              "font-semibold text-sm",
              allSelected ? "text-primary-600" : "text-gray-900"
            )}>
              All Available Channels
              <span className="ml-2 text-[10px] text-primary-600 font-medium uppercase">Recommended</span>
            </p>
            <p className="text-xs text-gray-500">Let AI choose the best channels automatically</p>
          </div>
          <div className={cn(
            "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
            allSelected ? "border-primary-500 bg-primary-500" : "border-gray-300"
          )}>
            {allSelected && <Check size={12} className="text-white" strokeWidth={3} />}
          </div>
        </div>
      </motion.button>

      {/* Divider */}
      <p className="text-xs text-gray-400">Or choose specific channels:</p>

      {/* Individual Channels Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {channels.map((channel, index) => {
          const Icon = channel.icon;
          const isSelected = selectedChannels.includes(channel.id);
          return (
            <motion.button
              key={channel.id}
              onClick={() => toggleChannel(channel.id)}
              className={cn(
                "p-2.5 rounded-lg border text-center transition-all relative",
                isSelected
                  ? "border-primary-500 bg-primary-50/30"
                  : "border-gray-200 bg-white hover:border-gray-300"
              )}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {isSelected && (
                <motion.div
                  className="absolute top-1 right-1 w-3.5 h-3.5 bg-primary-500 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <Check size={8} className="text-white" strokeWidth={3} />
                </motion.div>
              )}

              <Icon
                size={18}
                className={cn(
                  "mx-auto mb-1",
                  isSelected ? "text-primary-500" : "text-gray-400"
                )}
              />
              <p className={cn(
                "font-medium text-[10px]",
                isSelected ? "text-primary-600" : "text-gray-700"
              )}>
                {channel.name}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
