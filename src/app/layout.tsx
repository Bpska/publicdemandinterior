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
    default: "Public Demand Interior | Best Interior Designer in Odisha & Interior Solutions",
    template: "%s | Public Demand Interior"
  },
  description: "Public Demand Interior is the leading interior designer in Odisha offering premium modular kitchens, damp-resistant aluminium wardrobes, false ceilings, and complete interior solutions.",
  metadataBase: new URL("https://publicdemandinterior.com"),
  keywords: [
    "interior designer in Odisha",
    "bcs interior company Odisha",
    "complete interior solutions Odisha",
    "aluminium modular kitchen in Odisha",
    "modular kitchen in Odisha",
    "aluminium wardrobe in Odisha",
    "false ceiling design in Odisha",
    "interior design company Odisha",
    "home renovation Odisha"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Public Demand Interior | Best Interior Designer in Odisha & Interior Solutions",
    description: "Public Demand Interior offers premium modern modular kitchens, aluminium wardrobes, false ceilings, and complete interior design solutions in Odisha.",
    url: "https://publicdemandinterior.com",
    siteName: "Public Demand Interior",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GWf4vLV-7Jk4TiMKOeYv9_h9rdCx54ybmNEWukAyW7I",
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
