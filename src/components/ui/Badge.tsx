import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Badge({
  className,
  variant = "primary",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variant === "primary" && "bg-primary-100 text-primary-700",
        variant === "secondary" && "bg-gray-100 text-gray-700",
        variant === "outline" && "border border-primary-500 text-primary-500",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
