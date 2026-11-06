"use client";

import {
  Wrench,
  Hammer,
  Fan,
  Refrigerator,
  Snowflake,
  ArrowLeftRight,
} from "lucide-react";
import { services } from "@/data/services";
import { copy } from "@/data/copy";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const iconMap = {
  Wrench,
  Hammer,
  Fan,
  Refrigerator,
  Snowflake,
  ArrowLeftRight,
};

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={copy.services.title}
          subtitle={copy.services.subtitle}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <Card
                key={service.id}
                className="h-full"
                data-aos="fade-up"
                data-aos-delay={String((index % 3) * 80)}
              >
                <div className="mb-4 inline-flex rounded-md border border-border bg-background p-2.5 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="section-rule section-rule--inverse mt-16 sm:mt-20" aria-hidden="true" />
    </section>
  );
}
