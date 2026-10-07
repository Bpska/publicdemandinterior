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
    default: "Public Demand Interior | Best Interior Designer in Bhubaneswar, Odisha",
    template: "%s | Public Demand Interior Bhubaneswar"
  },
  description: "Public Demand Interior is the top-rated local interior designer in Bhubaneswar, Odisha. We specialize in damp-resistant aluminium modular kitchens, custom wardrobes, false ceilings, and complete 2BHK/3BHK turnkey interiors across Patia, Chandrasekharpur, Jaydev Vihar, Khandagiri, Cuttack & Puri.",
  metadataBase: new URL("https://publicdemandinterior.com"),
  keywords: [
    "interior designer in Bhubaneswar",
    "best interior designer in Bhubaneswar",
    "interior design company Bhubaneswar",
    "top interior designer Bhubaneswar",
    "modular kitchen in Bhubaneswar",
    "aluminium modular kitchen Bhubaneswar",
    "modular kitchen price per sq ft Bhubaneswar",
    "interior designer in Patia Bhubaneswar",
    "interior designer in Chandrasekharpur",
    "interior designer Jaydev Vihar",
    "interior contractor Khandagiri",
    "aluminium wardrobe Bhubaneswar",
    "false ceiling design Bhubaneswar",
    "false ceiling price Bhubaneswar",
    "gypsum false ceiling Bhubaneswar",
    "turnkey interior contractor Bhubaneswar",
    "home interior Bhubaneswar",
    "home renovation Bhubaneswar",
    "3BHK interior cost Bhubaneswar",
    "2BHK interior design Bhubaneswar",
    "office interior design Bhubaneswar",
    "retail shop design Bhubaneswar",
    "glass partition Bhubaneswar",
    "mosquito net installation Bhubaneswar",
    "plumber service Bhubaneswar",
    "electrical wiring Bhubaneswar",
    "interior contractor Cuttack",
    "interior contractor Puri",
    "Public Demand Interior Bhubaneswar",
    "bcs interior company Odisha"
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Public Demand Interior | Best Interior Designer in Bhubaneswar, Odisha",
    description: "Top-rated local interior designer in Bhubaneswar offering premium modular kitchens, damp-resistant aluminium wardrobes, false ceilings, and complete interior solutions.",
    url: "https://publicdemandinterior.com",
    siteName: "Public Demand Interior",
    locale: "en_IN",
    type: "website",
  },
  other: {
    "geo.region": "IN-OR",
    "geo.placename": "Bhubaneswar, Odisha, India",
    "geo.position": "20.2961;85.8245",
    "ICBM": "20.2961, 85.8245",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Public Demand Interior",
  "alternateName": ["Public Demand Interior Bhubaneswar", "Raghunath Interiors"],
  "image": "https://publicdemandinterior.com/images/logo-light.png",
  "@id": "https://publicdemandinterior.com/#organization",
  "url": "https://publicdemandinterior.com",
  "telephone": "+918144823652",
  "priceRange": "₹₹-₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bhubaneswar",
    "addressLocality": "Bhubaneswar",
    "addressRegion": "Odisha",
    "postalCode": "751024",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.2961,
    "longitude": 85.8245
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  },
  "areaServed": [
    { "@type": "City", "name": "Bhubaneswar" },
    { "@type": "City", "name": "Patia" },
    { "@type": "City", "name": "Chandrasekharpur" },
    { "@type": "City", "name": "Jaydev Vihar" },
    { "@type": "City", "name": "Saheed Nagar" },
    { "@type": "City", "name": "Khandagiri" },
    { "@type": "City", "name": "Cuttack" },
    { "@type": "City", "name": "Puri" }
  ],
  "sameAs": [
    "https://www.instagram.com/raghunathinteriors",
    "https://www.facebook.com/share/1DTCp7yMQF/",
    "https://youtube.com/@raghunathainteriors"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
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

