"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Globe, Loader2, Mail, MessageSquare, Bell } from "lucide-react";

type ChannelType = "email" | "push" | "whatsapp";

interface GeneratedCreative {
  channel: ChannelType;
  subject?: string;
  title?: string;
  body: string;
  cta: string;
}

const mockCreatives: Record<ChannelType, GeneratedCreative> = {
  email: {
    channel: "email",
    subject: "You left something special in your cart 🛒",
    title: "Your cart is waiting!",
    body: "We noticed you left some amazing items in your cart. Don't miss out - complete your purchase now and enjoy free shipping!",
    cta: "Complete Purchase",
  },
  push: {
    channel: "push",
    title: "Your cart misses you! 💔",
    body: "The items you chose are still available. Come back now!",
    cta: "View Cart",
  },
  whatsapp: {
    channel: "whatsapp",
    body: "Hi! 👋 I noticed you left some products in your cart. Can I help you complete your purchase? We have a special offer waiting for you!",
    cta: "Tell me more",
  },
};

export function CreativeGenerator() {
  const [url, setUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [activeChannel, setActiveChannel] = useState<ChannelType>("email");
  const [brandColors, setBrandColors] = useState({ primary: "#e81111", secondary: "#1a1a1a" });

  const handleGenerate = async () => {
    if (!url) return;

    setIsGenerating(true);
    // Simulate generation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsGenerating(false);
    setGenerated(true);
  };

  const channels = [
    { id: "email" as ChannelType, label: "Email", icon: Mail },
    { id: "push" as ChannelType, label: "Push", icon: Bell },
    { id: "whatsapp" as ChannelType, label: "WhatsApp", icon: MessageSquare },
  ];

  const currentCreative = mockCreatives[activeChannel];

  return (
    <Section background="white" id="creative-generator">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            <Sparkles size={14} className="mr-1" />
            Try It Now
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            See the AI in action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Paste your website URL and see how our AI generates personalized
            creatives for your brand.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Input Section */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-dark"
                />
              </div>
              <Button
                onClick={handleGenerate}
                disabled={!url || isGenerating}
                className="md:w-auto w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2" size={20} />
                    Generate Creatives
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          <AnimatePresence mode="wait">
            {generated ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Channel Selector & Info */}
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-4">
                    Generated Channels
                  </h3>
                  <div className="flex gap-2 mb-6">
                    {channels.map((channel) => {
                      const Icon = channel.icon;
                      return (
                        <button
                          key={channel.id}
                          onClick={() => setActiveChannel(channel.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                            activeChannel === channel.id
                              ? "bg-primary-500 text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          <Icon size={18} />
                          {channel.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Brand Colors Detected */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-gray-500 mb-3">Detected colors:</p>
                    <div className="flex gap-3">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded-lg shadow-inner"
                          style={{ backgroundColor: brandColors.primary }}
                        />
                        <span className="text-sm font-mono text-gray-600">
                          {brandColors.primary}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded-lg shadow-inner"
                          style={{ backgroundColor: brandColors.secondary }}
                        />
                        <span className="text-sm font-mono text-gray-600">
                          {brandColors.secondary}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-xl p-4">
                      <p className="text-2xl font-bold text-green-600">3</p>
                      <p className="text-sm text-green-700">Creatives generated</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <p className="text-2xl font-bold text-blue-600">2.3s</p>
                      <p className="text-sm text-blue-700">Generation time</p>
                    </div>
                  </div>
                </div>

                {/* Creative Preview */}
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-4">
                    Creative Preview
                  </h3>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeChannel}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {activeChannel === "email" && (
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                          {/* Email Header */}
                          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">YS</span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-dark">Your Store</p>
                                <p className="text-xs text-gray-500">contact@yourstore.com</p>
                              </div>
                            </div>
                            <p className="text-sm font-medium text-dark">
                              {currentCreative.subject}
                            </p>
                          </div>
                          {/* Email Body */}
                          <div className="p-6">
                            <h4 className="text-xl font-bold text-dark mb-3">
                              {currentCreative.title}
                            </h4>
                            <p className="text-gray-600 mb-6">{currentCreative.body}</p>
                            <button
                              className="w-full py-3 rounded-full font-semibold text-white transition-colors"
                              style={{ backgroundColor: brandColors.primary }}
                            >
                              {currentCreative.cta}
                            </button>
                          </div>
                        </div>
                      )}

                      {activeChannel === "push" && (
                        <div className="bg-gray-900 rounded-2xl p-4 max-w-sm mx-auto">
                          <div className="bg-gray-800 rounded-xl p-4">
                            <div className="flex items-start gap-3">
                              <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: brandColors.primary }}
                              >
                                <span className="text-white text-xs font-bold">YS</span>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <p className="text-white text-sm font-medium">Your Store</p>
                                  <p className="text-gray-500 text-xs">now</p>
                                </div>
                                <p className="text-white font-semibold text-sm mb-1">
                                  {currentCreative.title}
                                </p>
                                <p className="text-gray-400 text-sm">{currentCreative.body}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeChannel === "whatsapp" && (
                        <div className="bg-[#e5ddd5] rounded-2xl p-4 max-w-sm mx-auto">
                          <div className="bg-white rounded-lg p-3 shadow-sm max-w-[85%]">
                            <p className="text-gray-800 text-sm mb-2">{currentCreative.body}</p>
                            <button
                              className="w-full py-2 rounded-lg text-sm font-medium text-white"
                              style={{ backgroundColor: "#25D366" }}
                            >
                              {currentCreative.cta}
                            </button>
                            <p className="text-xs text-gray-500 text-right mt-1">14:32 ✓✓</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-gray-400" size={32} />
                </div>
                <p className="text-gray-500 text-lg">
                  Paste your website URL above to see the magic happen
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
