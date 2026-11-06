"use client";

import { MessageCircle } from "lucide-react";
import { copy } from "@/data/copy";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl("Hello, I would like to inquire about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.whatsappFloat}
      className="fixed bottom-5 end-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
