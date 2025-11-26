import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
  hover?: boolean;
}

export function Card({
  className,
  variant = "default",
  hover = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6",
        variant === "default" && "bg-white",
        variant === "bordered" && "bg-white border border-gray-200",
        variant === "elevated" && "bg-white shadow-lg shadow-gray-200/50",
        hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
