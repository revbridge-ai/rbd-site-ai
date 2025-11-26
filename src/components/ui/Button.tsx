"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer",
          // Variants
          variant === "primary" &&
            "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40",
          variant === "secondary" &&
            "bg-dark text-white hover:bg-dark-light",
          variant === "outline" &&
            "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
          variant === "ghost" &&
            "text-gray-600 hover:text-primary-500 hover:bg-gray-100",
          // Sizes
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
