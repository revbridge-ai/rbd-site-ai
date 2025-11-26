# RevBridge Site - Resumo da Sessão

## O que foi criado

Site institucional da RevBridge (novo produto CRM pay-per-performance) estilo Braze.com.

### Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animações**: Framer Motion
- **Linguagem**: TypeScript
- **Ícones**: Lucide React

### Identidade Visual
- **Cor primária**: Verde `#0ad848`
- **Cor secundária**: `#00bc58`
- **Fonte**: Inter
- **Estilo**: Minimalista SaaS, inspirado em Braze.com

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          ✅ Layout raiz com Header/Footer
│   ├── page.tsx            ✅ Homepage
│   ├── globals.css         ✅ Tema Tailwind customizado
│   ├── plataforma/
│   │   └── page.tsx        ✅ Página de features
│   ├── pricing/
│   │   └── page.tsx        ✅ Página de preços + calculadora
│   ├── sobre/
│   │   └── page.tsx        ✅ Sobre a empresa
│   └── blog/
│       ├── page.tsx        ✅ Lista de posts
│       └── [slug]/
│           └── page.tsx    ✅ Post individual
├── components/
│   ├── ui/                 ✅ Componentes base
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Badge.tsx
│   │   └── Input.tsx
│   ├── layout/             ✅ Header e Footer
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/home/      ✅ Seções da homepage
│       ├── Hero.tsx
│       ├── AssetSimulator.tsx
│       ├── HowItWorks.tsx
│       ├── ValueProps.tsx
│       ├── Comparison.tsx
│       ├── Metrics.tsx
│       ├── Testimonials.tsx
│       └── FinalCTA.tsx
├── lib/
│   └── utils.ts            ✅ Função cn()
└── data/
    └── navigation.ts       ✅ Links de navegação
```

---

## Homepage - Seções

1. **Hero**: Conceito "CRM como Google Ads" com input de URL
2. **Asset Simulator**: Cola URL → gera criativos (mock, precisa integrar API real)
3. **How It Works**: 5 etapas para criar campanha
4. **Value Props**: 6 diferenciais da plataforma
5. **Comparison**: RevBridge vs CRMs tradicionais
6. **Metrics**: Números de impacto
7. **Testimonials**: Depoimentos (mock)
8. **Final CTA**: Conversão

---

## Próximos Passos

### Pendente:
1. **Testar build** - Rodar `npm run build` e corrigir erros
2. **Integrar API de criativos** - O Asset Simulator usa mock, precisa do endpoint real
3. **Adicionar logo SVG** - Substituir o placeholder pelo logo real
4. **Conteúdo real** - Substituir textos placeholder por conteúdo definitivo
5. **Imagens** - Adicionar screenshots da plataforma
6. **SEO** - Adicionar Open Graph images, favicon real

### Comandos úteis:
```bash
# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

---

## Plano Completo

O plano detalhado está em:
`/Users/julianoscapin/.claude/plans/gentle-hugging-sunrise.md`

---

## Informações da API (necessário fornecer)

O Asset Simulator precisa de um endpoint para gerar criativos.

**Esperado:**
- Endpoint: `POST /api/generate-creatives`
- Body: `{ url: string }`
- Response:
```json
{
  "assets": [
    {
      "channel": "Email",
      "subject": "Assunto do email",
      "preview": "Texto do email..."
    },
    {
      "channel": "Push",
      "preview": "Texto do push..."
    },
    {
      "channel": "WhatsApp",
      "preview": "Texto do WhatsApp..."
    }
  ]
}
```

Quando tiver o endpoint, editar `src/components/sections/home/AssetSimulator.tsx`.
