"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import { copy } from "@/data/copy";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Products() {
  return (
    <section id="products" className="relative scroll-mt-24 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={copy.products.title}
          subtitle={copy.products.subtitle}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden p-0">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={product.image.src}
                  alt={`${product.name} — ${product.image.alt}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-5">
                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                <Button
                  as="a"
                  href={getWhatsAppUrl(product.inquireMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {copy.products.inquire}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="skew-divider mt-16 sm:mt-20" aria-hidden="true" />
    </section>
  );
}
