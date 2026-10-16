import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Phone, MessageCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Interior Designer in Bhubaneswar | Public Demand Interior – Top Rated",
  description:
    "Looking for the best interior designer in Bhubaneswar? Public Demand Interior offers award-winning aluminium modular kitchens, wardrobes, false ceilings & complete 2BHK/3BHK turnkey interiors in Patia, Chandrasekharpur, Jaydev Vihar, Khandagiri & all of Bhubaneswar.",
  alternates: {
    canonical: "https://publicdemandinterior.com/bhubaneswar-interior-designer",
  },
  keywords: [
    "best interior designer in Bhubaneswar",
    "top interior designer Bhubaneswar",
    "interior designer in Bhubaneswar",
    "interior design company Bhubaneswar",
    "Bhubaneswar interior design",
    "modular kitchen Bhubaneswar",
    "aluminium kitchen Bhubaneswar",
    "false ceiling Bhubaneswar",
    "wardrobe designer Bhubaneswar",
    "interior contractor Bhubaneswar",
  ],
  openGraph: {
    title: "Best Interior Designer in Bhubaneswar | Public Demand Interior",
    description:
      "Bhubaneswar's #1 rated interior design company. Premium aluminium modular kitchens, custom wardrobes, false ceilings & turnkey 2BHK/3BHK interiors.",
    url: "https://publicdemandinterior.com/bhubaneswar-interior-designer",
    siteName: "Public Demand Interior",
    locale: "en_IN",
    type: "website",
  },
};

// LocalBusiness + Service schema for this specific page
const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Interior Design Services in Bhubaneswar",
  "description": "Complete list of interior design services offered by Public Demand Interior in Bhubaneswar, Odisha",
  "url": "https://publicdemandinterior.com/bhubaneswar-interior-designer",
  "numberOfItems": 8,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Aluminium Modular Kitchen in Bhubaneswar",
        "description": "100% waterproof, termite-proof aluminium modular kitchens designed for Bhubaneswar's humid coastal climate.",
        "provider": { "@id": "https://publicdemandinterior.com/#localbusiness" },
        "areaServed": { "@type": "City", "name": "Bhubaneswar" },
        "url": "https://publicdemandinterior.com/services/aluminium-modular-kitchen"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Aluminium Wardrobe in Bhubaneswar",
        "description": "Custom aluminium wardrobes with glass, mirror, or ACP inserts. Zero swelling, zero termites.",
        "provider": { "@id": "https://publicdemandinterior.com/#localbusiness" },
        "areaServed": { "@type": "City", "name": "Bhubaneswar" },
        "url": "https://publicdemandinterior.com/services/aluminium-wardrobe"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "False Ceiling Design in Bhubaneswar",
        "description": "Premium gypsum false ceilings with LED cove lighting, POP borders, and custom designs.",
        "provider": { "@id": "https://publicdemandinterior.com/#localbusiness" },
        "areaServed": { "@type": "City", "name": "Bhubaneswar" },
        "url": "https://publicdemandinterior.com/services/false-ceiling"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Turnkey Interior Design in Bhubaneswar",
        "description": "Complete 2BHK and 3BHK interior solutions from design to handover in Bhubaneswar.",
        "provider": { "@id": "https://publicdemandinterior.com/#localbusiness" },
        "areaServed": { "@type": "City", "name": "Bhubaneswar" },
        "url": "https://publicdemandinterior.com/services/home-decoration-complete-interior"
      }
    }
  ]
};

const localities = [
  { name: "Patia", desc: "Tech hub & luxury apartments", icon: "🏙️" },
  { name: "Chandrasekharpur", desc: "Prime residential area", icon: "🏘️" },
  { name: "Jaydev Vihar", desc: "Upscale commercial & residential", icon: "🏢" },
  { name: "Saheed Nagar", desc: "Central retail & luxury homes", icon: "🏠" },
  { name: "Khandagiri", desc: "Rapid residential expansion", icon: "🏗️" },
  { name: "Dumduma", desc: "Family residential zones", icon: "🏡" },
  { name: "Sailashree Vihar", desc: "Family residential zones", icon: "🌳" },
  { name: "Nayapalli", desc: "Premium locality", icon: "⭐" },
  { name: "Rasulgarh", desc: "Bhubaneswar-Cuttack corridor", icon: "🔗" },
  { name: "Hanspal", desc: "Bhubaneswar-Cuttack corridor", icon: "🏘️" },
  { name: "Sundarpada", desc: "Expanding housing hub", icon: "🌱" },
  { name: "Old Town", desc: "Heritage & housing hub", icon: "🏛️" },
];

const services = [
  { name: "Aluminium Modular Kitchen", slug: "aluminium-modular-kitchen", desc: "Waterproof, termite-proof kitchens for Bhubaneswar homes" },
  { name: "Modular Kitchen", slug: "modular-kitchen", desc: "Premium wood & laminate modular kitchens" },
  { name: "Aluminium Wardrobe", slug: "aluminium-wardrobe", desc: "Custom aluminium wardrobes with glass inserts" },
  { name: "False Ceiling & Lighting", slug: "false-ceiling", desc: "Gypsum false ceilings with LED cove lighting" },
  { name: "Sliding Doors & Partitions", slug: "sliding-doors-partitions", desc: "Slim-profile glass partitions & sliding doors" },
  { name: "Complete Interior Design", slug: "home-decoration-complete-interior", desc: "Full 2BHK/3BHK turnkey interior packages" },
];

const waEnquiryUrl = "https://wa.me/918144823652?text=Hello%20Public%20Demand%20Interior%2C%20I%20am%20looking%20for%20the%20best%20interior%20designer%20in%20Bhubaneswar.%20Please%20share%20details.";

export default function BhubaneswarInteriorDesignerPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-charcoal text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 text-brand-champagne">
            <MapPin size={16} />
            <span className="text-[11px] font-bold uppercase tracking-widest">Bhubaneswar, Odisha</span>
          </div>
          {/* H1 — exact match keyword in heading */}
          <h1 className="text-3xl sm:text-5xl font-light font-display text-white leading-tight">
            Best Interior Designer in{" "}
            <span className="text-brand-champagne italic">Bhubaneswar</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Public Demand Interior is Bhubaneswar&apos;s top-rated interior design company with 200+ completed
            projects across Patia, Chandrasekharpur, Jaydev Vihar, Khandagiri, Cuttack & Puri. We
            specialize in aluminium modular kitchens, custom wardrobes, false ceilings, and complete
            2BHK/3BHK turnkey interiors.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-champagne fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9/5 (47+ Reviews)</span>
            </div>
            <div className="w-px h-5 bg-white/20 hidden sm:block" />
            <span className="text-sm text-gray-300">200+ Projects in Bhubaneswar</span>
            <div className="w-px h-5 bg-white/20 hidden sm:block" />
            <span className="text-sm text-gray-300">7+ Years Experience</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={waEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-champagne text-brand-charcoal hover:bg-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors flex items-center space-x-2"
            >
              <MessageCircle size={14} className="fill-current" />
              <span>Free Consultation – WhatsApp</span>
            </a>
            <a
              href="tel:8144823652"
              className="border border-white/40 hover:bg-white hover:text-brand-charcoal px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors flex items-center space-x-2"
            >
              <Phone size={14} />
              <span>Call: 8144823652</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Bhubaneswar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">Why #1 in Bhubaneswar</span>
          <h2 className="text-2xl sm:text-3xl font-light font-display text-brand-charcoal">
            What Makes Us Bhubaneswar&apos;s Best Interior Designer
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Bhubaneswar-specific climate-proof designs — damp & termite resistant aluminium structures",
            "Free on-site design consultation across all Bhubaneswar localities",
            "Itemized transparent pricing — no hidden charges",
            "Factory-fabricated precision components — faster installation, better finish",
            "200+ successfully completed projects in Bhubaneswar & Odisha",
            "4.9-star average rating from verified Bhubaneswar clients",
            "Serving Patia, Chandrasekharpur, Jaydev Vihar, Khandagiri, Nayapalli & more",
            "7+ years of experience — Odisha's most trusted interior brand",
          ].map((point, i) => (
            <div key={i} className="flex items-start space-x-3 p-4 bg-brand-stone/10 border border-brand-stone/30">
              <CheckCircle size={16} className="text-brand-champagne shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services we offer in Bhubaneswar */}
      <section className="bg-brand-stone/10 py-16 border-y border-brand-stone/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">Interior Services</span>
            <h2 className="text-2xl sm:text-3xl font-light font-display text-brand-charcoal">
              Interior Design Services in Bhubaneswar
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-brand-stone/40 p-6 hover:border-brand-champagne hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-brand-charcoal group-hover:text-brand-champagne transition-colors font-display">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{service.desc}</p>
                <div className="flex items-center space-x-1 mt-4 text-brand-champagne">
                  <span className="text-xs font-bold uppercase tracking-widest">View Service</span>
                  <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Localities we serve */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">Hyper-Local Coverage</span>
          <h2 className="text-2xl sm:text-3xl font-light font-display text-brand-charcoal">
            Interior Designer Serving All Localities in Bhubaneswar
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            We provide free on-site consultations across every major locality in Bhubaneswar.
            No travel charges within city limits.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {localities.map((loc) => (
            <Link
              key={loc.name}
              href={`/contact?area=${loc.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-white border border-brand-stone/30 p-4 text-center hover:border-brand-champagne hover:shadow-sm transition-all duration-300"
              aria-label={`Interior Designer in ${loc.name}, Bhubaneswar`}
            >
              <div className="text-2xl mb-2">{loc.icon}</div>
              <p className="text-sm font-semibold text-brand-charcoal group-hover:text-brand-champagne transition-colors">
                {loc.name}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">{loc.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO-rich content block */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <h2 className="text-2xl font-light font-display text-brand-charcoal">
          Why Public Demand Interior is the Best Interior Designer in Bhubaneswar
        </h2>
        <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
          <p>
            Finding a reliable interior designer in Bhubaneswar who understands the unique climate challenges
            of Odisha is critical. Bhubaneswar experiences high humidity levels during the monsoon season
            (July–October), which causes traditional wood and MDF furniture to swell, warp, and develop
            termite infestations within 3–5 years.
          </p>
          <p>
            At <strong>Public Demand Interior</strong>, we have spent 7+ years perfecting a climate-specific
            interior design approach built around <strong>aluminium modular kitchens</strong>, aluminium
            wardrobes, and rust-proof hardware that is 100% damp-proof, termite-proof, and fire-retardant.
            This makes our interiors uniquely suited for <strong>Bhubaneswar homes</strong>.
          </p>
          <p>
            Whether you are looking for an interior designer in <strong>Patia</strong>,{" "}
            <strong>Chandrasekharpur</strong>, <strong>Jaydev Vihar</strong>, <strong>Khandagiri</strong>,
            or any other Bhubaneswar locality, our team offers free on-site design consultations,
            transparent material quotations, and precision factory fabrication.
          </p>
          <p>
            Our turnkey interior packages cover the complete 2BHK and 3BHK interior transformation —
            from raw site measurement to final handover — including modular kitchen, bedrooms,
            living room, TV unit, false ceiling, and lighting.
          </p>
        </div>

        {/* Internal links to service pages */}
        <div className="pt-4 border-t border-brand-stone/30 space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-champagne">Explore Our Services</p>
          <div className="flex flex-wrap gap-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="text-xs text-brand-charcoal hover:text-brand-champagne underline underline-offset-2 transition-colors"
              >
                {s.name} in Bhubaneswar
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-charcoal text-white p-10 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light font-display">
            Get a Free Design Consultation in Bhubaneswar
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Our designers will visit your Bhubaneswar home, take measurements, and provide
            a full 3D layout with transparent material costing — all for free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-champagne text-brand-charcoal hover:bg-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors flex items-center space-x-2"
            >
              <MessageCircle size={14} className="fill-current" />
              <span>WhatsApp Us Now</span>
            </a>
            <a
              href="tel:8144823652"
              className="border border-white/40 hover:bg-white hover:text-brand-charcoal px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors"
            >
              Call +91 8144823652
            </a>
          </div>
          <p className="text-gray-500 text-xs">
            Serving Patia · Chandrasekharpur · Jaydev Vihar · Khandagiri · Nayapalli · Rasulgarh · Hanspal · Cuttack · Puri
          </p>
        </div>
      </section>
    </div>
  );
}
