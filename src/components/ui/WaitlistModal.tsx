"use client";

import * as React from "react";
import { X, Sparkles, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const budgetOptions = [
  { value: "under-5k", label: "Under $5,000/month" },
  { value: "5k-15k", label: "$5,000 - $15,000/month" },
  { value: "15k-50k", label: "$15,000 - $50,000/month" },
  { value: "over-50k", label: "Over $50,000/month" },
  { value: "not-sure", label: "Not sure yet" },
];

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        consent: false,
      });
      onOpenChange(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const isValid =
    formData.name &&
    formData.email &&
    formData.company &&
    formData.budget &&
    formData.consent;

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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-4"
          >
            <div className="relative rounded-2xl bg-white shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => onOpenChange(false)}
                className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-8 text-center text-white">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Be the First to Use RevBridge in 2026
                </h2>
                <p className="text-white/80 text-sm">
                  Join our exclusive early access list and get $300 in free
                  credits when we launch.
                </p>
              </div>

              {/* Form */}
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">
                      You&apos;re on the list!
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ll be in touch soon with exclusive early access.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Estimated Monthly Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className={cn(
                          "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors appearance-none bg-white",
                          !formData.budget && "text-gray-400"
                        )}
                      >
                        <option value="" disabled>
                          Select your budget range
                        </option>
                        {budgetOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-gray-600"
                      >
                        I agree to receive communications from RevBridge about
                        product updates and early access opportunities.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={!isValid || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        "Join the Waitlist"
                      )}
                    </Button>

                    <p className="text-xs text-center text-gray-500">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Context for global waitlist modal state
const WaitlistContext = React.createContext<{
  openWaitlist: () => void;
  closeWaitlist: () => void;
  isOpen: boolean;
}>({
  openWaitlist: () => {},
  closeWaitlist: () => {},
  isOpen: false,
});

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openWaitlist = React.useCallback(() => setIsOpen(true), []);
  const closeWaitlist = React.useCallback(() => setIsOpen(false), []);

  return (
    <WaitlistContext.Provider value={{ openWaitlist, closeWaitlist, isOpen }}>
      {children}
      <WaitlistModal open={isOpen} onOpenChange={setIsOpen} />
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = React.useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}
