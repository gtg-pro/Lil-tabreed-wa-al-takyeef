"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { copy } from "@/data/copy";

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={copy.gallery.closeLightbox}
        className="absolute end-4 top-4 rounded-md border border-border bg-surface p-2 text-white transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <div
        className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-lg border border-border"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
