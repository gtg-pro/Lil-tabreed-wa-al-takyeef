import { site } from "@/config/site";

/**
 * Build a wa.me URL for the shop WhatsApp number.
 * @param {string} [message] Prefill text
 * @returns {string}
 */
export function getWhatsAppUrl(message = "") {
  const phone = String(site.whatsapp || "").replace(/\D/g, "");
  const base = `https://wa.me/${phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * tel: link from display phone
 * @returns {string}
 */
export function getTelHref() {
  const digits = String(site.phone || "").replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}
