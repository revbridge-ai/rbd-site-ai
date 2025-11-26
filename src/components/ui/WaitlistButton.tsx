"use client";

import { Button } from "./Button";
import { useWaitlist } from "./WaitlistModal";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WaitlistButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
}

export function WaitlistButton({
  children = "Join the Waitlist",
  variant = "primary",
  size = "lg",
  className,
  showArrow = true,
}: WaitlistButtonProps) {
  const { openWaitlist } = useWaitlist();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={openWaitlist}
      className={cn(className)}
    >
      {children}
      {showArrow && <ArrowRight size={18} className="ml-2" />}
    </Button>
  );
}
