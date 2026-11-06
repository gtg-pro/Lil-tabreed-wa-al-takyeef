import { Poppins } from "next/font/google";
import { site } from "@/config/site";
import AosInit from "@/components/AosInit";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${site.name} | AC & Refrigeration — Riyadh`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${site.name} | AC & Refrigeration — Riyadh`,
    description: site.description,
    locale: "en_US",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | AC & Refrigeration — Riyadh`,
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={poppins.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <AosInit />
        {children}
      </body>
    </html>
  );
}
