"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "CRM",
  "Automation",
  "AI",
  "Case Studies",
  "Product",
];

const posts = [
  {
    slug: "how-pay-per-performance-crm-works",
    title: "How Pay-Per-Performance CRM Works",
    excerpt:
      "Understand the revolutionary model that's changing how companies invest in CRM. Pay only for results.",
    category: "CRM",
    date: "2024-01-15",
    readTime: "5 min",
    featured: true,
  },
  {
    slug: "ai-creative-generation-marketing",
    title: "How AI is Revolutionizing Creative Generation",
    excerpt:
      "Discover how artificial intelligence can create personalized copy, emails, and messages at scale.",
    category: "AI",
    date: "2024-01-10",
    readTime: "7 min",
    featured: true,
  },
  {
    slug: "automated-vs-manual-journeys",
    title: "Automated vs Manual Journeys: Which to Choose?",
    excerpt:
      "We compare both models and show when it makes sense to fully automate your CRM journeys.",
    category: "Automation",
    date: "2024-01-05",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: "case-study-ecommerce-3x-conversions",
    title: "Case Study: E-commerce Increased Conversions by 3x with RevBridge",
    excerpt:
      "Learn how a fashion e-commerce tripled their conversions using our pay-per-performance model.",
    category: "Case Studies",
    date: "2024-01-01",
    readTime: "4 min",
    featured: false,
  },
  {
    slug: "crm-metrics-to-track",
    title: "7 CRM Metrics You Should Be Tracking",
    excerpt:
      "Sending messages isn't enough. Learn which metrics really matter for measuring campaign success.",
    category: "CRM",
    date: "2023-12-28",
    readTime: "8 min",
    featured: false,
  },
  {
    slug: "new-channels-launch",
    title: "New: WhatsApp Business API Now Available",
    excerpt:
      "We're announcing WhatsApp Business API integration. Now you can reach your customers on one more channel.",
    category: "Product",
    date: "2023-12-20",
    readTime: "3 min",
    featured: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Hero */}
      <Section background="gray" className="pt-24 md:pt-32 pb-12">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Insights on CRM and Automation
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Articles, case studies, and news about CRM, marketing automation,
              and artificial intelligence.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section background="white" className="py-6">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Section background="white" className="pb-0">
          <Container>
            <h2 className="text-2xl font-bold text-dark mb-8">Featured</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card variant="bordered" hover className="h-full">
                    <div className="aspect-video bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                      <Badge variant="primary">{post.category}</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString("en-US")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* All Posts */}
      <Section background="gray">
        <Container>
          <h2 className="text-2xl font-bold text-dark mb-8">
            {activeCategory === "All" ? "All Articles" : activeCategory}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                No articles found for your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="text-primary-500 font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(activeCategory === "All" ? regularPosts : filteredPosts).map(
                (post) => (
                  <motion.div key={post.slug} variants={item}>
                    <Link href={`/blog/${post.slug}`}>
                      <Card variant="bordered" hover className="h-full group">
                        <Badge variant="secondary" className="mb-3">
                          {post.category}
                        </Badge>
                        <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary-500 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString("en-US")}
                          </span>
                          <span className="flex items-center gap-1 text-primary-500 font-medium group-hover:underline">
                            Read more
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                )
              )}
            </motion.div>
          )}
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section background="gradient">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Our Content
            </h2>
            <p className="text-white/80 mb-6">
              Subscribe to receive articles, case studies, and CRM news
              directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
