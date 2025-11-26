"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(30, 0, 0)"
      gradientBackgroundEnd="rgb(60, 0, 20)"
      firstColor="232, 17, 17"
      secondColor="220, 38, 38"
      thirdColor="255, 100, 100"
      fourthColor="180, 0, 0"
      fifthColor="255, 150, 100"
      pointerColor="232, 17, 17"
      size="100%"
      blendingValue="hard-light"
      interactive={true}
      containerClassName="py-24 md:py-32"
    >
      <Container>
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-white/30 text-white bg-white/10"
          >
            <Play size={14} className="mr-1" />
            Veja em ação
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Crie sua primeira campanha em 5 minutos
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Veja como é simples criar uma campanha de CRM pay-per-performance
            com jornadas automatizadas por IA.
          </p>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative aspect-video rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 shadow-2xl cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            {/* Thumbnail with play button */}
            {!isPlaying && (
              <>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors"
                  >
                    <Play
                      size={40}
                      className="text-primary-500 ml-1"
                      fill="currentColor"
                    />
                  </motion.div>
                </div>

                {/* Video info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg mb-1">
                    Demo: Como criar uma campanha
                  </p>
                  <p className="text-white/60 text-sm">
                    5 passos simples para sua primeira campanha
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </>
            )}

            {/* YouTube iframe */}
            {isPlaying && (
              <iframe
                src="https://www.youtube.com/embed/2mTsYso_1-M?autoplay=1&rel=0"
                title="RevBridge Demo - Como criar uma campanha"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>

          {/* Close button when playing */}
          <AnimatePresence>
            {isPlaying && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Steps preview */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {[
            { step: "01", label: "Objetivo" },
            { step: "02", label: "Audiência" },
            { step: "03", label: "Canais" },
            { step: "04", label: "Assets" },
            { step: "05", label: "Budget" },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <p className="text-primary-400 font-bold text-sm mb-1">
                {item.step}
              </p>
              <p className="text-white font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </BackgroundGradientAnimation>
  );
}
