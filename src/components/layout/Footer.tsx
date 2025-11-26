import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export function Footer() {
  return (
    <footer className="bg-dark text-white py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-1">
              <Image
                src={getAssetPath("/logo.svg")}
                alt="RevBridge"
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <span className="font-bold text-xl">RevBridge</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Handle it for you!
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = socialIcons[item.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {navigation.footer.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {navigation.footer.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {navigation.footer.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {navigation.footer.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RevBridge. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with ❤️ to revolutionize CRM
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
