"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

interface SheetContentProps {
  children: React.ReactNode;
  className?: string;
  showClose?: boolean;
  side?: "left" | "right";
}

interface SheetFooterProps {
  children: React.ReactNode;
  className?: string;
}

const SheetContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>({
  open: false,
  onOpenChange: () => {},
});

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetContent({
  children,
  className,
  showClose = true,
  side = "right",
}: SheetContentProps) {
  const { open, onOpenChange } = React.useContext(SheetContext);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => onOpenChange(false)}
          />

          {/* Sheet */}
          <motion.div
            initial={{ x: side === "left" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: side === "left" ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "fixed inset-y-0 z-50 flex h-full w-3/4 max-w-sm flex-col border-r bg-white shadow-xl",
              side === "left" ? "left-0" : "right-0 border-l border-r-0",
              className
            )}
          >
            {showClose && (
              <button
                onClick={() => onOpenChange(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            )}
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function SheetFooter({ children, className }: SheetFooterProps) {
  return (
    <div
      className={cn(
        "mt-auto flex flex-col gap-2 border-t p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
