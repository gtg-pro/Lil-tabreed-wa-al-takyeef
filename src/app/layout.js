import { Poppins } from "next/font/google";
import { site } from "@/config/site";
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
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={poppins.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
