"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  image?: string;
}

interface FeaturesCarouselProps {
  features: Feature[];
  autoPlayInterval?: number;
}

export function FeaturesCarousel({
  features,
  autoPlayInterval = 10000,
}: FeaturesCarouselProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, autoPlayInterval / 100);

    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
    }
  }, [progress, features.length]);

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;

    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();

      container.scrollTo({
        left:
          activeFeatureElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className="grid lg:grid-cols-2 lg:gap-16 gap-6 items-center">
      {/* Left Side - Features with Progress Lines */}
      <div
        ref={containerRef}
        className="lg:space-y-4 space-x-4 lg:space-x-0 overflow-x-auto overflow-hidden no-scrollbar lg:overflow-visible flex lg:flex lg:flex-col flex-row order-2 lg:order-1 pb-4 scroll-smooth -mx-4 px-4 lg:mx-0 lg:px-0"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = currentFeature === index;
          const stepNumber = String(index + 1).padStart(2, "0");

          return (
            <div
              key={feature.id}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className="relative cursor-pointer flex-shrink-0"
              onClick={() => handleFeatureClick(index)}
            >
              {/* Feature Content */}
              <div
                className={`
                flex lg:flex-row flex-col items-start gap-3 lg:gap-4 p-3 lg:p-4 min-w-[240px] sm:min-w-[280px] lg:min-w-0 lg:max-w-2xl transition-all duration-300 rounded-xl lg:rounded-2xl
                ${
                  isActive
                    ? "bg-white shadow-xl border-2 border-primary-500"
                    : "bg-white/50 hover:bg-white border-2 border-transparent"
                }
              `}
              >
                {/* Step Number + Icon */}
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span
                    className={`text-sm font-bold transition-colors ${
                      isActive ? "text-primary-500" : "text-gray-400"
                    }`}
                  >
                    {stepNumber}
                  </span>
                  <div
                    className={`
                    p-3 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? "gradient-primary text-white"
                        : "bg-gray-100 text-gray-500"
                    }
                  `}
                  >
                    <Icon size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`
                    text-base lg:text-lg font-semibold mb-1 lg:mb-2 transition-colors duration-300
                    ${isActive ? "text-dark" : "text-gray-700"}
                  `}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`
                    transition-colors duration-300 text-xs lg:text-sm leading-relaxed
                    ${isActive ? "text-gray-600" : "text-gray-500"}
                  `}
                  >
                    {feature.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
                    {isActive && (
                      <motion.div
                        className="h-full gradient-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Side - Image Display */}
      <div className="relative order-1 lg:order-2">
        <motion.div
          key={currentFeature}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative"
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
              {features[currentFeature].image ? (
                <Image
                  src={features[currentFeature].image}
                  alt={features[currentFeature].title}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const Icon = features[currentFeature].icon;
                        return <Icon size={32} className="text-white" />;
                      })()}
                    </div>
                    <p className="text-lg font-semibold text-dark mb-2">
                      {features[currentFeature].title}
                    </p>
                    <p className="text-sm text-gray-500">
                      Passo {currentFeature + 1} de {features.length}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
