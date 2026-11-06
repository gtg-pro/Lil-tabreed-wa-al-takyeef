/**
 * Cloudinary image inventory.
 * Assignments based on visual content of each photo.
 */
const base = "https://res.cloudinary.com/dxxwzp4qs/image/upload";

export const images = {
  hero: {
    src: `${base}/v1793953673/Gemini_Generated_Image_em22wiem22wiem22_jnht2u.jpg`,
    alt: "AC and refrigeration shop hero visual",
  },
  storefrontNight: {
    src: `${base}/v1793948721/WhatsApp_Image_2026-10-04_at_19.52.28_dsee5n.jpg`,
    alt: "Shop storefront at night with red neon Arabic signboard",
  },
  neonCloseup: {
    src: `${base}/v1793948721/WhatsApp_Image_2026-10-04_at_19.52.27_6_dbwbz0.jpg`,
    alt: "Close-up of red neon cooling shop signboard",
  },
  storefrontWide: {
    src: `${base}/v1793948722/WhatsApp_Image_2026-10-04_at_19.52.27_5_mfe66z.jpg`,
    alt: "Red neon signboard close-up for cooling and AC shop",
  },
  workshop: {
    src: `${base}/v1793948721/WhatsApp_Image_2026-10-04_at_19.52.27_2_nnyn7u.jpg`,
    alt: "Workshop entrance with stacked AC outdoor units on display",
  },
  streetNeighborLaundry: {
    src: `${base}/v1793948721/WhatsApp_Image_2026-10-04_at_19.52.27_fg6por.jpg`,
    alt: "Night street view near the shop in Riyadh",
  },
  streetNeighborHardware: {
    src: `${base}/v1793948721/WhatsApp_Image_2026-10-04_at_19.52.27_1_jgmdlt.jpg`,
    alt: "Night street view of neighboring shops in Riyadh",
  },
  license: {
    src: `${base}/v1793948721/WhatsApp_Image_2026-10-04_at_19.52.27_4_flgjti.jpg`,
    alt: "Commercial activity license for AC and refrigeration services",
  },
};

/** Ordered gallery set — uses every provided image */
export const galleryImages = [
  { ...images.storefrontNight, id: "gallery-1" },
  { ...images.workshop, id: "gallery-2" },
  { ...images.neonCloseup, id: "gallery-3" },
  { ...images.storefrontWide, id: "gallery-4" },
  { ...images.streetNeighborLaundry, id: "gallery-5" },
  { ...images.streetNeighborHardware, id: "gallery-6" },
  { ...images.license, id: "gallery-7" },
];
