import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Linkedin, Twitter } from "lucide-react";

// This would typically come from a CMS or MDX files
const posts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  "how-pay-per-performance-crm-works": {
    title: "How Pay-Per-Performance CRM Works",
    excerpt: "Understand the revolutionary model that's changing how companies invest in CRM.",
    category: "CRM",
    date: "2024-01-15",
    readTime: "5 min",
    content: `
## The Problem with Traditional CRMs

Most CRMs charge by number of stored contacts or messages sent. This creates a model where you pay regardless of whether you generate results or not.

Imagine paying rent for a billboard without knowing how many people saw it or bought because of it. That's how most CRMs work today.

## The Pay-Per-Performance Model

With the pay-per-performance model, you define:

1. **What is a conversion** - Can be a sale, a signup, a download
2. **How much you're willing to pay** - Your maximum CPA (cost per acquisition)
3. **Your budget** - How much you want to invest in total

From there, our platform optimizes all campaigns to generate maximum conversions within your target CPA.

## Why This Works

The incentive alignment is perfect: we only win when you win. If we don't generate results, we don't charge.

This forces us to:
- Constantly optimize campaigns
- Invest in cutting-edge technology
- Ensure every message sent has maximum relevance

## How to Get Started

Getting started with RevBridge is simple:

1. Create your account (free, no credit card)
2. Connect your customer base
3. Define your goal and target CPA
4. Launch your first campaign

In less than 5 minutes you can be generating results.
    `,
  },
  "ai-creative-generation-marketing": {
    title: "How AI is Revolutionizing Creative Generation",
    excerpt: "Discover how artificial intelligence can create personalized copy, emails, and messages at scale.",
    category: "AI",
    date: "2024-01-10",
    readTime: "7 min",
    content: `
## The Creative Bottleneck

Creating personalized content for thousands of customers is one of the biggest challenges in marketing. Traditional methods require dedicated teams, long timelines, and often result in generic messages.

## Enter AI-Powered Creatives

With AI, we can now generate:

1. **Personalized email copy** - Tailored to each customer segment
2. **Optimized subject lines** - A/B tested automatically
3. **Push notification messages** - Short, impactful, personalized
4. **WhatsApp messages** - Conversational and engaging

## How It Works

Our AI analyzes:
- Your brand's tone of voice
- Historical performance data
- Customer behavior patterns
- Industry best practices

Then generates creatives that are optimized for conversion from day one.

## Real Results

Companies using AI-generated creatives see:
- 40% higher open rates
- 25% better click-through rates
- 3x faster campaign launch times

## Getting Started

Upload your brand guidelines, connect your data, and let the AI do the heavy lifting.
    `,
  },
  "automated-vs-manual-journeys": {
    title: "Automated vs Manual Journeys: Which to Choose?",
    excerpt: "We compare both models and show when it makes sense to fully automate your CRM journeys.",
    category: "Automation",
    date: "2024-01-05",
    readTime: "6 min",
    content: `
## The Automation Debate

Should you automate everything or maintain manual control? The answer depends on your specific situation.

## When to Use Manual Journeys

Manual journeys work best when:
- You have a small, highly segmented audience
- Each customer requires unique handling
- You're testing new approaches

## When to Automate

Automation excels when:
- You have thousands of customers
- Patterns are predictable
- Speed and scale matter

## The Hybrid Approach

The best strategy often combines both:

1. **Automate the predictable** - Welcome sequences, abandoned carts
2. **Keep manual control for VIPs** - High-value customer interactions
3. **Let AI optimize** - Timing, frequency, channel selection

## Our Recommendation

Start with automation as your default, then add manual touchpoints where they truly add value.
    `,
  },
  "case-study-ecommerce-3x-conversions": {
    title: "Case Study: E-commerce Increased Conversions by 3x",
    excerpt: "Learn how a fashion e-commerce tripled their conversions using our pay-per-performance model.",
    category: "Case Studies",
    date: "2024-01-01",
    readTime: "4 min",
    content: `
## The Challenge

A mid-sized fashion e-commerce was struggling with:
- Low email engagement rates
- High CPA on retention campaigns
- Limited team bandwidth

## The Solution

They switched to RevBridge with:
- Pay-per-performance pricing
- AI-generated creatives
- Automated journey optimization

## The Results

After 3 months:
- **3x increase in conversions**
- **45% reduction in CPA**
- **60% time saved** on campaign management

## Key Takeaways

1. Automation doesn't mean losing control
2. Pay-per-performance aligns incentives
3. AI can outperform manual optimization
    `,
  },
  "crm-metrics-to-track": {
    title: "7 CRM Metrics You Should Be Tracking",
    excerpt: "Sending messages isn't enough. Learn which metrics really matter for measuring campaign success.",
    category: "CRM",
    date: "2023-12-28",
    readTime: "8 min",
    content: `
## Beyond Open Rates

Open rates don't pay the bills. Here are the metrics that actually matter:

## 1. Revenue per Email

How much revenue does each email generate? This is the ultimate metric.

## 2. Customer Lifetime Value (LTV)

Are your CRM efforts increasing how much customers spend over time?

## 3. Cost per Acquisition (CPA)

How much does it cost to convert a customer through CRM channels?

## 4. Engagement Score

A composite metric combining opens, clicks, and conversions.

## 5. Unsubscribe Rate

Are you burning your list or building relationships?

## 6. Attribution Rate

Can you accurately attribute revenue to CRM touchpoints?

## 7. Time to Conversion

How quickly do customers convert after entering a journey?

## Action Steps

1. Set up proper tracking
2. Create dashboards for each metric
3. Review weekly and optimize
    `,
  },
  "new-channels-launch": {
    title: "New: WhatsApp Business API Now Available",
    excerpt: "We're announcing WhatsApp Business API integration. Now you can reach your customers on one more channel.",
    category: "Product",
    date: "2023-12-20",
    readTime: "3 min",
    content: `
## Exciting News!

We're thrilled to announce our integration with WhatsApp Business API.

## What This Means

You can now:
- Send automated WhatsApp messages
- Include WhatsApp in your journeys
- Track WhatsApp conversions

## Why WhatsApp?

- 98% open rates
- 45% response rates
- Preferred channel for many customers

## Getting Started

1. Connect your WhatsApp Business account
2. Create message templates
3. Add WhatsApp to your journeys

Contact support if you need help setting up.
    `,
  },
};

// Required for static export
export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <Section background="gray" className="pt-24 md:pt-32">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The article you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link href="/blog">
              <Button>
                <ArrowLeft size={18} className="mr-2" />
                Back to Blog
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
      <Section background="gray" className="pt-24 md:pt-32 pb-12">
        <Container size="md">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-500 mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Blog
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
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={18} />
              {post.readTime} read
            </span>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section background="white" className="py-12">
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
                  Share
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
              Ready to Try It?
            </h2>
            <p className="text-white/80 mb-6">
              Create your free account and see how pay-per-performance CRM
              can transform your results.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Get $300 free to start
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
