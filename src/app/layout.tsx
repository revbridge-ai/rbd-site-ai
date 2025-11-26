import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RevBridge | Pay-Per-Performance CRM",
  description:
    "Create CRM campaigns as easily as Google Ads. AI-powered automated journeys, dynamic creatives, and you only pay for performance.",
  keywords: [
    "CRM",
    "pay-per-performance",
    "automation",
    "marketing",
    "journeys",
    "AI",
    "artificial intelligence",
  ],
  authors: [{ name: "RevBridge" }],
  openGraph: {
    title: "RevBridge | Pay-Per-Performance CRM",
    description:
      "Create CRM campaigns as easily as Google Ads. AI-powered automated journeys, dynamic creatives.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-50">
      <body className={`${inter.variable} antialiased bg-gray-50 min-h-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
