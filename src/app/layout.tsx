import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Public Demand Interior | Interior Design & Aluminium Work",
    template: "%s | Public Demand Interior"
  },
  description: "Beautiful Spaces. Smart Designs. Built for You. Public Demand Interior offers premium modern modular kitchens, aluminium wardrobes, false ceilings, and complete interior solutions.",
  metadataBase: new URL("https://publicdemandinterior.com"), // placeholder production URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Public Demand Interior | Interior Design & Aluminium Work",
    description: "Beautiful Spaces. Smart Designs. Built for You. Premium modern modular kitchens, aluminium wardrobes, false ceilings, and complete interior solutions.",
    url: "https://publicdemandinterior.com",
    siteName: "Public Demand Interior",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-beige text-brand-charcoal font-sans selection:bg-brand-champagne/30">
        <Header />
        <main className="flex-1 pb-24 lg:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCTA />
      </body>
    </html>
  );
}
