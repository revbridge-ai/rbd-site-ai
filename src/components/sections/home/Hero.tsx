"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with API
    console.log("URL submitted:", url);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary-500/5 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">
              <Sparkles size={14} className="mr-1" />
              Novo: CRM Pay-Per-Performance
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6"
          >
            Imagine construir jornadas de CRM{" "}
            <span className="text-gradient">como uma campanha de Google Ads</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Jornadas automatizadas por IA. Criativos dinâmicos gerados automaticamente.{" "}
            <strong className="text-dark">Pague apenas por performance.</strong> Sem contratos de longo prazo.
          </motion.p>

          {/* URL Input Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6"
          >
            <Input
              type="url"
              placeholder="Cole a URL do seu site e veja a mágica"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="lg" className="whitespace-nowrap">
              Ver Demo
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.form>

          {/* Trust indicators */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-gray-500 mb-12"
          >
            Sem cartão de crédito • Setup em 5 minutos • Cancele quando quiser
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Target size={20} className="text-primary-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-dark">Pay-per-Performance</p>
                <p className="text-sm text-gray-500">Pague só por resultado</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Zap size={20} className="text-primary-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-dark">Jornadas por IA</p>
                <p className="text-sm text-gray-500">100% automatizadas</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Sparkles size={20} className="text-primary-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-dark">Criativos Dinâmicos</p>
                <p className="text-sm text-gray-500">Gerados por IA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
