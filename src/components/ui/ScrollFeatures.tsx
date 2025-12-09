"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  image?: string;
}

interface ScrollFeaturesProps {
  features: Feature[];
}

export function ScrollFeatures({ features }: ScrollFeaturesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [features.length]);

  return (
    <div className="relative lg:flex lg:gap-16">
      {/* Left Side - Scrollable Steps */}
      <div className="lg:w-1/2">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = activeIndex === index;
          const stepNumber = String(index + 1).padStart(2, "0");

          return (
            <div
              key={feature.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="min-h-[60vh] flex items-center py-8"
            >
              <div className="w-full">
                <div
                  className={`
                    p-6 lg:p-8 rounded-2xl transition-all duration-500
                    ${
                      isActive
                        ? "bg-white shadow-2xl border-2 border-primary-500"
                        : "bg-white/50 border-2 border-transparent opacity-40"
                    }
                  `}
                >
                  {/* Step Number */}
                  <span
                    className={`text-sm font-bold mb-4 block transition-colors duration-300 ${
                      isActive ? "text-primary-500" : "text-gray-400"
                    }`}
                  >
                    Step {stepNumber}
                  </span>

                  {/* Icon */}
                  <div
                    className={`
                      p-4 rounded-xl w-fit mb-4 transition-all duration-300
                      ${
                        isActive
                          ? "gradient-primary text-white"
                          : "bg-gray-100 text-gray-500"
                      }
                    `}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Content */}
                  <h3
                    className={`
                      text-xl lg:text-2xl font-bold mb-3 transition-colors duration-300
                      ${isActive ? "text-dark" : "text-gray-600"}
                    `}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`
                      text-base lg:text-lg leading-relaxed transition-colors duration-300
                      ${isActive ? "text-gray-600" : "text-gray-500"}
                    `}
                  >
                    {feature.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex gap-2">
                    {features.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === activeIndex
                            ? "w-8 bg-primary-500"
                            : i < activeIndex
                            ? "w-4 bg-primary-300"
                            : "w-4 bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile Image - shows below each step on mobile */}
                {isActive && features[index].image && (
                  <div className="lg:hidden mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
                    >
                      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                      </div>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={features[index].image!}
                          alt={features[index].title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Side - Sticky Image (Desktop only) */}
      <div className="hidden lg:block lg:w-1/2">
        <div
          className="sticky top-32"
          style={{ height: "calc(100vh - 200px)" }}
        >
          <div className="h-full flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full"
              >
                {/* Browser mockup */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Browser header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-gray-400 border border-gray-200">
                        app.revbridge.ai/campaign/new
                      </div>
                    </div>
                  </div>
                  {/* Image content */}
                  <div className="relative aspect-[4/3] bg-gray-50">
                    {features[activeIndex].image ? (
                      <Image
                        src={features[activeIndex].image}
                        alt={features[activeIndex].title}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                            {(() => {
                              const Icon = features[activeIndex].icon;
                              return <Icon size={32} className="text-white" />;
                            })()}
                          </div>
                          <p className="text-lg font-semibold text-dark mb-2">
                            {features[activeIndex].title}
                          </p>
                          <p className="text-sm text-gray-500">
                            Step {activeIndex + 1} of {features.length}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
