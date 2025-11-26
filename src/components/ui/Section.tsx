"use client";

import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";
import { Tiles } from "./Tiles";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: "white" | "gray" | "dark" | "gradient";
  showTiles?: boolean;
}

export function Section({
  className,
  background = "white",
  showTiles,
  children,
  ...props
}: SectionProps) {
  const isLightBackground = background === "white" || background === "gray";
  const shouldShowTiles = showTiles ?? isLightBackground;

  return (
    <section
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        background === "white" && "bg-white",
        background === "gray" && "bg-gray-50",
        background === "dark" && "bg-dark text-white",
        background === "gradient" && "gradient-primary text-white",
        className
      )}
      {...props}
    >
      {shouldShowTiles && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Tiles
            rows={50}
            cols={20}
            tileSize="lg"
            className="opacity-[0.02]"
          />
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
