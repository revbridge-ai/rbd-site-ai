"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Mail, MessageSquare, Bell, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GeneratedAsset {
  channel: string;
  icon: React.ElementType;
  preview: string;
  subject?: string;
}

export function AssetSimulator() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [assets, setAssets] = useState<GeneratedAsset[] | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);

    // TODO: Replace with actual API call
    // Simulating API call for now
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock data - replace with actual API response
    setAssets([
      {
        channel: "Email",
        icon: Mail,
        subject: "Aproveite 20% OFF em toda a loja!",
        preview: "Olá! Preparamos uma oferta especial para você. Por tempo limitado, todos os produtos com 20% de desconto. Não perca essa oportunidade única!",
      },
      {
        channel: "Push",
        icon: Bell,
        preview: "🎉 Oferta exclusiva! 20% OFF esperando por você. Clique e aproveite!",
      },
      {
        channel: "WhatsApp",
        icon: MessageSquare,
        preview: "Oi! Tudo bem? 😊 Vi que você deixou alguns itens no carrinho. Que tal finalizar sua compra com 20% de desconto? É por tempo limitado!",
      },
    ]);

    setIsLoading(false);
  };

  const resetSimulator = () => {
    setAssets(null);
    setUrl("");
  };

  return (
    <Section background="white" id="simulator">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            Experimente agora
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Veja seus criativos gerados por IA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cole a URL do seu site e nossa IA vai analisar sua marca e gerar
            criativos personalizados para cada canal em segundos.
          </p>
        </div>

        {/* Input Form */}
        {!assets && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleGenerate}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="url"
                placeholder="https://seusite.com.br"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" size="lg" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Gerando...
                  </>
                ) : (
                  <>
                    Gerar Criativos
                    <ArrowRight size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}

        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 animate-pulse">
                <Loader2 size={32} className="text-white animate-spin" />
              </div>
              <p className="text-gray-600">Analisando seu site e gerando criativos...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Generated Assets */}
        <AnimatePresence>
          {assets && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {assets.map((asset, index) => (
                  <motion.div
                    key={asset.channel}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card variant="bordered" hover className="h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                          <asset.icon size={20} className="text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark">{asset.channel}</h3>
                          <p className="text-xs text-gray-500">Criativo gerado por IA</p>
                        </div>
                      </div>

                      {asset.subject && (
                        <div className="mb-3 p-2 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Assunto:</p>
                          <p className="text-sm font-medium text-dark">{asset.subject}</p>
                        </div>
                      )}

                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {asset.preview}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-500 mb-4">
                  Gostou? Imagine isso rodando automaticamente para toda sua base.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={resetSimulator} variant="outline">
                    Testar outro site
                  </Button>
                  <Button>
                    Começar Grátis
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
