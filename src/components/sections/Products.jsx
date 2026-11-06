"use client";

import {
  AirVent,
  AppWindow,
  Fan,
  Refrigerator,
  Snowflake,
  Store,
  MessageCircle,
} from "lucide-react";
import { products } from "@/data/products";
import { copy } from "@/data/copy";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const iconMap = {
  AirVent,
  AppWindow,
  Fan,
  Refrigerator,
  Snowflake,
  Store,
};

export default function Products() {
  return (
    <section id="products" className="relative scroll-mt-24 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={copy.products.title}
          subtitle={copy.products.subtitle}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = iconMap[product.icon] || AirVent;
            return (
              <Card
                key={product.id}
                className="space-y-4"
                data-aos="fade-up"
                data-aos-delay={String((index % 3) * 80)}
              >
                <div className="inline-flex rounded-md border border-border bg-background p-2.5 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
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
              </Card>
            );
          })}
        </div>
      </div>

      <div className="section-rule mt-16 sm:mt-20" aria-hidden="true" />
    </section>
  );
}
