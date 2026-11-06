import { Phone, MessageCircle, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { copy } from "@/data/copy";
import { getTelHref, getWhatsAppUrl } from "@/lib/whatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function Contact() {
  const { lat, lng } = site.coordinates;
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

  const items = [
    {
      id: "phone",
      icon: Phone,
      label: copy.contact.phone,
      value: site.phone,
      href: getTelHref(),
      external: false,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: copy.contact.whatsapp,
      value: site.phone,
      href: getWhatsAppUrl("Hello, I would like to get in touch."),
      external: true,
    },
    {
      id: "address",
      icon: MapPin,
      label: copy.contact.address,
      value: site.address,
      href: `https://www.google.com/maps?q=${lat},${lng}`,
      external: true,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={copy.contact.title}
          subtitle={copy.contact.subtitle}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="mb-3 inline-flex rounded-md border border-border bg-background p-2 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium text-muted">{item.label}</p>
                  <p className="mt-1 break-words text-base font-semibold text-white">
                    {item.value}
                  </p>
                </>
              );

              return (
                <Card
                  key={item.id}
                  as="a"
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  data-aos="fade-up"
                  data-aos-delay={String((index % 2) * 80)}
                >
                  {content}
                </Card>
              );
            })}
          </div>

          <div
            className="overflow-hidden rounded-lg border border-border bg-background"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <iframe
              title={copy.contact.mapTitle}
              src={mapSrc}
              className="h-80 w-full lg:h-full min-h-[20rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
