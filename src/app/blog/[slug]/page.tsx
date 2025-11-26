import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react";

// This would typically come from a CMS or MDX files
const posts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  "como-funciona-crm-pay-per-performance": {
    title: "Como funciona o CRM Pay-Per-Performance",
    excerpt: "Entenda o modelo revolucionário que está mudando a forma como empresas investem em CRM.",
    category: "CRM",
    date: "2024-01-15",
    readTime: "5 min",
    content: `
## O problema dos CRMs tradicionais

A maioria dos CRMs cobra por número de contatos armazenados ou por mensagens enviadas. Isso cria um modelo onde você paga independentemente de gerar resultado ou não.

Imagine pagar aluguel de um outdoor sem saber quantas pessoas viram ou compraram por causa dele. É assim que a maioria dos CRMs funciona hoje.

## O modelo Pay-Per-Performance

Com o modelo pay-per-performance, você define:

1. **O que é uma conversão** - Pode ser uma venda, um cadastro, um download
2. **Quanto você aceita pagar** - Seu CPA (custo por aquisição) máximo
3. **Seu budget** - Quanto quer investir no total

A partir daí, nossa plataforma otimiza todas as campanhas para gerar o máximo de conversões dentro do seu CPA alvo.

## Por que isso funciona

O alinhamento de incentivos é perfeito: nós só ganhamos quando você ganha. Se não gerarmos resultado, não cobramos.

Isso nos força a:
- Otimizar constantemente as campanhas
- Investir em tecnologia de ponta
- Garantir que cada mensagem enviada tenha o máximo de relevância

## Como começar

Começar com RevBridge é simples:

1. Crie sua conta (grátis, sem cartão)
2. Conecte sua base de clientes
3. Defina seu objetivo e CPA alvo
4. Lance sua primeira campanha

Em menos de 5 minutos você pode estar gerando resultados.
    `,
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <Section background="white" className="pt-24 md:pt-32">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-4">
              Artigo não encontrado
            </h1>
            <p className="text-gray-600 mb-8">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Link href="/blog">
              <Button>
                <ArrowLeft size={18} className="mr-2" />
                Voltar para o blog
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      {/* Header */}
      <Section background="white" className="pt-24 md:pt-32 pb-12">
        <Container size="md">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-500 mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar para o blog
          </Link>

          <Badge variant="primary" className="mb-4">
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={18} />
              {post.readTime} de leitura
            </span>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section background="gray" className="py-12">
        <Container size="md">
          <Card variant="elevated" className="p-8 md:p-12">
            <article className="prose prose-lg max-w-none">
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-dark mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("1. ") || paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="text-gray-700 ml-4">
                      {paragraph.replace(/^[0-9]+\. /, "").replace(/^- /, "")}
                    </li>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </article>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-dark flex items-center gap-2">
                  <Share2 size={18} />
                  Compartilhar
                </p>
                <div className="flex gap-3">
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      `https://revbridge.ai/blog/${slug}`
                    )}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      `https://revbridge.ai/blog/${slug}`
                    )}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para testar?
            </h2>
            <p className="text-white/80 mb-6">
              Crie sua conta gratuitamente e veja como o CRM pay-per-performance
              pode transformar seus resultados.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Começar Grátis
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
