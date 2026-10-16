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
    images: [
      {
        url: "/images/logo-light.png",
        width: 1200,
        height: 630,
        alt: "Public Demand Interior - Best Interior Designer in Bhubaneswar",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Public Demand Interior | Best Interior Designer in Bhubaneswar, Odisha",
    description: "Top-rated interior designer in Bhubaneswar. Aluminium modular kitchens, wardrobes, false ceilings & complete 2BHK/3BHK turnkey interiors.",
    images: ["/images/logo-light.png"],
  },
  other: {
    "geo.region": "IN-OR",
    "geo.placename": "Bhubaneswar, Odisha, India",
    "geo.position": "20.2961;85.8245",
    "ICBM": "20.2961, 85.8245",
    // hreflang for Indian English
    "og:locale:alternate": "en_IN",
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

// ─── Schema 1: LocalBusiness / HomeAndConstructionBusiness ───────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "InteriorDesigner", "LocalBusiness"],
  "name": "Public Demand Interior",
  "alternateName": ["Public Demand Interior Bhubaneswar", "Raghunath Interiors"],
  "description": "Public Demand Interior is Bhubaneswar's premier interior design company. We specialize in aluminium modular kitchens, custom wardrobes, false ceilings and complete 2BHK/3BHK turnkey interiors across Patia, Chandrasekharpur, Jaydev Vihar, Khandagiri, Cuttack and Puri.",
  "image": "https://publicdemandinterior.com/images/logo-light.png",
  "logo": "https://publicdemandinterior.com/images/logo-light.png",
  "@id": "https://publicdemandinterior.com/#localbusiness",
  "url": "https://publicdemandinterior.com",
  "telephone": "+918144823652",
  "email": "info@publicdemandinterior.com",
  "priceRange": "₹₹-₹₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Bank Transfer, UPI",
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
  "hasMap": "https://maps.app.goo.gl/your-google-maps-link",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Bhubaneswar", "sameAs": "https://en.wikipedia.org/wiki/Bhubaneswar" },
    { "@type": "City", "name": "Cuttack", "sameAs": "https://en.wikipedia.org/wiki/Cuttack" },
    { "@type": "City", "name": "Puri", "sameAs": "https://en.wikipedia.org/wiki/Puri" },
    { "@type": "City", "name": "Khordha" },
    { "@type": "Place", "name": "Patia, Bhubaneswar" },
    { "@type": "Place", "name": "Chandrasekharpur, Bhubaneswar" },
    { "@type": "Place", "name": "Jaydev Vihar, Bhubaneswar" },
    { "@type": "Place", "name": "Saheed Nagar, Bhubaneswar" },
    { "@type": "Place", "name": "Khandagiri, Bhubaneswar" },
    { "@type": "Place", "name": "Nayapalli, Bhubaneswar" },
    { "@type": "Place", "name": "Sailashree Vihar, Bhubaneswar" },
    { "@type": "Place", "name": "Rasulgarh, Bhubaneswar" },
    { "@type": "Place", "name": "Hanspal, Bhubaneswar" },
    { "@type": "Place", "name": "Sundarpada, Bhubaneswar" }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 20.2961,
      "longitude": 85.8245
    },
    "geoRadius": "60000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Interior Design Services in Bhubaneswar",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aluminium Modular Kitchen Bhubaneswar" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aluminium Wardrobe Bhubaneswar" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "False Ceiling Design Bhubaneswar" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Turnkey Interior Design Bhubaneswar" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sliding Door & Glass Partition Bhubaneswar" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Interior Design Bhubaneswar" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Subhendu Mohanty" },
      "reviewBody": "The aluminium modular kitchen they designed has been a complete lifesaver. Unlike wood which swells in damp weather, the aluminium frame and ACP shutters are extremely easy to clean and look incredibly premium.",
      "datePublished": "2025-03-15"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Dr. Pragyan Senapati" },
      "reviewBody": "Public Demand Interior completed our bedroom wardrobes and false ceiling. The material sheets were clearly detailed in the estimate and the pricing was fully transparent. Highly professional team.",
      "datePublished": "2025-06-20"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Alok Ranjan Rout" },
      "reviewBody": "We hired them to build sliding glass partitions and false ceilings for our office. The visual openness they achieved with the slim black profiles is outstanding.",
      "datePublished": "2025-09-10"
    }
  ],
  // sameAs is the PRIMARY backlinking signal — links to all citation profiles
  // signals Google that this is the same entity across the web
  "sameAs": [
    "https://www.instagram.com/raghunathinteriors",
    "https://www.facebook.com/share/1DTCp7yMQF/",
    "https://youtube.com/@raghunathainteriors",
    "https://www.justdial.com/Bhubaneswar/Interior-Designers",
    "https://www.sulekha.com/interior-designers/bhubaneswar",
    "https://www.indiamart.com/publicdemandinterior",
    "https://www.tradeindia.com/publicdemandinterior",
    "https://www.urbanclap.com/bhubaneswar/interior-designers",
    "https://www.google.com/maps/search/Public+Demand+Interior+Bhubaneswar"
  ]
};

// ─── Schema 2: WebSite with SearchAction ─────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://publicdemandinterior.com/#website",
  "url": "https://publicdemandinterior.com",
  "name": "Public Demand Interior",
  "description": "Best Interior Designer in Bhubaneswar, Odisha — Aluminium Modular Kitchens, Wardrobes, False Ceilings & Turnkey Interiors",
  "publisher": {
    "@id": "https://publicdemandinterior.com/#localbusiness"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://publicdemandinterior.com/gallery?category={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// ─── Schema 3: BreadcrumbList ─────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://publicdemandinterior.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://publicdemandinterior.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Gallery", "item": "https://publicdemandinterior.com/gallery" },
    { "@type": "ListItem", "position": 4, "name": "Projects", "item": "https://publicdemandinterior.com/projects" },
    { "@type": "ListItem", "position": 5, "name": "Contact", "item": "https://publicdemandinterior.com/contact" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <head>
        {/* Schema 1: LocalBusiness / InteriorDesigner */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Schema 2: WebSite with SearchAction (Sitelinks searchbox) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Schema 3: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* hreflang for Indian English */}
        <link rel="alternate" hrefLang="en-IN" href="https://publicdemandinterior.com" />
        <link rel="alternate" hrefLang="x-default" href="https://publicdemandinterior.com" />
        {/* Preconnect for performance (improves Core Web Vitals → ranking factor) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
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

