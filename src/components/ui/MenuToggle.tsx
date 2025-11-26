"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MenuToggleProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
  strokeWidth?: number;
}

export function MenuToggle({
  open,
  onOpenChange,
  className,
  strokeWidth = 2,
}: MenuToggleProps) {
  return (
    <button
      onClick={() => onOpenChange(!open)}
      className={cn("relative flex items-center justify-center", className)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <motion.path
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={false}
          animate={open ? "open" : "closed"}
          variants={{
            closed: { d: "M 4 6 L 20 6" },
            open: { d: "M 6 18 L 18 6" },
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={false}
          animate={open ? "open" : "closed"}
          variants={{
            closed: { d: "M 4 12 L 20 12", opacity: 1 },
            open: { d: "M 4 12 L 20 12", opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={false}
          animate={open ? "open" : "closed"}
          variants={{
            closed: { d: "M 4 18 L 20 18" },
            open: { d: "M 6 6 L 18 18" },
          }}
          transition={{ duration: 0.2 }}
        />
      </svg>
    </button>
  );
}
