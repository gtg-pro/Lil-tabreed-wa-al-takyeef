"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/images";
import { copy } from "@/data/copy";
import SectionHeading from "@/components/ui/SectionHeading";
import Lightbox from "@/components/ui/Lightbox";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="relative scroll-mt-24 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={copy.gallery.title}
          subtitle={copy.gallery.subtitle}
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActive(image)}
              aria-label={`${copy.gallery.openImage}: ${image.alt}`}
              data-aos="zoom-in"
              data-aos-delay={String((index % 3) * 70)}
              className={`group relative aspect-square overflow-hidden rounded-lg border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                index === 0 ? "col-span-2 aspect-[16/10] md:col-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox image={active} onClose={() => setActive(null)} />
      <div className="section-rule section-rule--inverse mt-16 sm:mt-20" aria-hidden="true" />
    </section>
  );
}
