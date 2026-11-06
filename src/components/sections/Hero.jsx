"use client";

import Image from "next/image";
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
      className="relative isolate scroll-mt-24 min-h-[78vh] overflow-hidden border-b border-border sm:min-h-[85vh]"
    >
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/80 via-background/35 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-end px-4 pb-14 pt-28 sm:min-h-[85vh] sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="max-w-xl" data-aos="fade-up">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85 sm:text-xl">
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
              className="border-white/25 bg-black/35 backdrop-blur-sm hover:border-primary hover:bg-black/50"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {copy.hero.whatsapp}
            </Button>
          </div>
        </div>
      </div>

      <div className="section-rule relative z-10" aria-hidden="true" />
    </section>
  );
}
