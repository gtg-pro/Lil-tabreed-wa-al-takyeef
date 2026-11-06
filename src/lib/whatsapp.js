import { site } from "@/config/site";

/**
 * Digits only, with Saudi local 05… converted to 9665… for wa.me.
 * @param {string} value
 * @returns {string}
 */
function toWhatsAppDigits(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.startsWith("05") && digits.length === 10) {
    digits = `966${digits.slice(1)}`;
  } else if (digits.startsWith("5") && digits.length === 9) {
    digits = `966${digits}`;
  }
  return digits;
}

/**
 * Build a wa.me URL for the shop WhatsApp number.
 * Uses the same site number as phone / hero Call & WhatsApp CTAs.
 * @param {string} [message] Prefill text
 * @returns {string}
 */
export function getWhatsAppUrl(message = "") {
  const phone = toWhatsAppDigits(site.whatsapp || site.phone);
  const base = `https://wa.me/${phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * tel: link from display phone (same number as hero Call Now)
 * @returns {string}
 */
export function getTelHref() {
  const digits = String(site.phone || "").replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}
