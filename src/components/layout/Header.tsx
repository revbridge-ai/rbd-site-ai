"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import { MenuToggle } from "@/components/ui/MenuToggle";

const links = [
  { label: "Platform", href: "/plataforma" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/sobre" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="bg-white/95 supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 w-full border-b border-gray-100 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="RevBridge"
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <span className="font-bold text-xl text-dark">RevBridge</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4 flex items-center gap-2">
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm">Get $300 free to start</Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <Button
            size="sm"
            variant="outline"
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            <MenuToggle
              strokeWidth={2.5}
              open={open}
              onOpenChange={setOpen}
              className="w-5 h-5"
            />
          </Button>
          <SheetContent
            className="bg-white/95 supports-[backdrop-filter]:bg-white/80 gap-0 backdrop-blur-lg"
            showClose={false}
            side="left"
          >
            {/* Logo in sheet */}
            <div className="flex items-center gap-2 px-4 pt-4 pb-6 border-b border-gray-100">
              <Image
                src="/logo.svg"
                alt="RevBridge"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-lg text-dark">RevBridge</span>
            </div>

            {/* Links */}
            <div className="grid gap-y-1 overflow-y-auto px-4 pt-4 pb-5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <SheetFooter>
              <Button variant="outline" className="w-full">
                Log In
              </Button>
              <Button className="w-full">Get $300 free to start</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
