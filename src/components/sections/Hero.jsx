"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { images } from "@/data/images";
import { copy } from "@/data/copy";
import { getTelHref, getWhatsAppUrl } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-border"
    >
      <div className="frost-shimmer absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative z-10"
        >
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-primary neon-text sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
            {copy.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href={getTelHref()} variant="primary" size="lg">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {copy.hero.callNow}
            </Button>
            <Button
              as="a"
              href={getWhatsAppUrl("Hello, I need help with AC or refrigeration.")}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {copy.hero.whatsapp}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border shadow-[0_0_40px_rgba(225,29,46,0.18)]"
        >
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-primary/10"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      <div className="skew-divider" aria-hidden="true" />
    </section>
  );
}
