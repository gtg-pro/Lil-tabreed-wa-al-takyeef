"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import { navigation } from "@/data/navigation";
import { copy } from "@/data/copy";
import { getTelHref } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";

export default function MobileMenu({ open, onClose, activeId }) {
  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/70 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-y-0 end-0 z-[70] flex w-[min(100%,20rem)] flex-col border-s border-border bg-background p-6 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-medium text-muted">Menu</span>
              <button
                type="button"
                onClick={onClose}
                aria-label={copy.nav.closeMenu}
                className="rounded-md border border-border p-2 text-white hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2" aria-label="Mobile">
              {navigation.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className={`rounded-md px-3 py-3 text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      isActive
                        ? "bg-surface text-primary"
                        : "text-white hover:bg-surface hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <Button
              as="a"
              href={getTelHref()}
              variant="primary"
              className="mt-6 w-full"
              aria-label={copy.nav.callNow}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {copy.nav.callNow}
            </Button>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
