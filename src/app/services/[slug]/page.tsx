import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { services } from "@/data/services";
import { designs } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  ArrowLeft,
  Check,
  Award,
  Hammer,
  HardHat,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  HelpCircle
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.title} in Bhubaneswar, Odisha | Public Demand Interior`;
  const description = `Top-rated ${service.title} in Bhubaneswar, Odisha. Custom ${service.title.toLowerCase()} designs, damp-resistant materials, and professional site installation across Patia, Chandrasekharpur, Jaydev Vihar, Khandagiri, Cuttack & Puri. Call +91 8144823652.`;

  return {
    title,
    description,
    keywords: [
      `${service.title} in Bhubaneswar`,
      `best ${service.title} Bhubaneswar`,
      `${service.title} price per sq ft Bhubaneswar`,
      `${service.title} Patia Bhubaneswar`,
      `${service.title} Chandrasekharpur`,
      `${service.title} Jaydev Vihar`,
      `${service.title} contractor Odisha`,
      `interior designer in Bhubaneswar`,
      `Public Demand Interior`
    ],
    alternates: {
      canonical: `https://publicdemandinterior.com/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://publicdemandinterior.com/services/${service.slug}`,
      siteName: "Public Demand Interior",
      locale: "en_IN",
      type: "article",
    },
  };
}

// Pre-define all slugs for static site optimization
export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Pre-fill WhatsApp message
  const waMessage = `Hello Public Demand Interior, I am looking for ${service.title} service in Bhubaneswar. Please share details and site inspection schedule.`;
  const waUrl = `https://wa.me/918144823652?text=${encodeURIComponent(waMessage)}`;

  // Find related designs (same category/theme)
  const serviceKeyword = service.title.toLowerCase();
  const relatedDesigns = designs.filter((design) => {
    const category = design.category.toLowerCase();
    if (serviceKeyword.includes("kitchen") && category.includes("kitchen")) return true;
    if (serviceKeyword.includes("wardrobe") && category.includes("wardrobe")) return true;
    if (serviceKeyword.includes("bedroom") && category.includes("bedroom")) return true;
    if (serviceKeyword.includes("living") && category.includes("living")) return true;
    if (serviceKeyword.includes("ceiling") && category.includes("ceiling")) return true;
    if (serviceKeyword.includes("door") || serviceKeyword.includes("window")) {
      return category.includes("door") || category.includes("window");
    }
    if (serviceKeyword.includes("partition") && category.includes("partition")) return true;
    if (serviceKeyword.includes("office") && category.includes("office")) return true;
    return false;
  }).slice(0, 4);

  // Other related services for internal linking
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  // Local FAQs for structured schema
  const localFaqs = [
    {
      question: `What is the average price of ${service.title} in Bhubaneswar?`,
      answer: `Pricing for ${service.title} in Bhubaneswar depends on material selection (extruded aluminium, BWP marine ply, HDMR) and square footage. We offer free on-site measurement and exact cost breakdown without hidden charges.`
    },
    {
      question: `Why choose Public Demand Interior for ${service.title} in Patia & Jaydev Vihar?`,
      answer: `We specialize in 100% damp-resistant and termite-proof materials engineered specifically for Bhubaneswar's humid coastal climate. Our local fabrication team ensures 7 to 14 day rapid site installation with 10-year structural warranty support.`
    },
    {
      question: `Do you provide site visits in apartment societies like DN Regalia, Tata Ariana, and Assotech One?`,
      answer: `Yes, we provide direct on-site design consultation, 3D visual rendering previews, and material sampling across all major Bhubaneswar gated societies and flat complexes.`
    }
  ];

  // Structured Data Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.title} in Bhubaneswar`,
    "serviceType": service.title,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Public Demand Interior",
      "telephone": "+918144823652",
      "url": "https://publicdemandinterior.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "postalCode": "751024",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Bhubaneswar" },
      { "@type": "City", "name": "Patia" },
      { "@type": "City", "name": "Chandrasekharpur" },
      { "@type": "City", "name": "Jaydev Vihar" },
      { "@type": "City", "name": "Khandagiri" },
      { "@type": "City", "name": "Cuttack" },
      { "@type": "City", "name": "Puri" }
    ],
    "description": service.description,
    "image": `https://publicdemandinterior.com${service.image}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://publicdemandinterior.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://publicdemandinterior.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://publicdemandinterior.com/services/${service.slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": localFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localities = [
    "Patia",
    "Chandrasekharpur",
    "Jaydev Vihar",
    "Saheed Nagar",
    "Nayapalli",
    "Khandagiri",
    "Dumduma",
    "Sundarpada",
    "Old Town",
    "Hanspal",
    "Rasulgarh",
    "Cuttack Road"
  ];

  return (
    <div className="space-y-12 py-10">
      {/* Head Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
        <nav className="flex items-center space-x-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-brand-champagne transition-colors">Home</Link>
          <ChevronRight size={12} className="text-gray-400" />
          <Link href="/services" className="hover:text-brand-champagne transition-colors">Services</Link>
          <ChevronRight size={12} className="text-gray-400" />
          <span className="font-semibold text-brand-charcoal">{service.title}</span>
        </nav>
      </div>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-brand-stone/20 border border-brand-stone/40">
          <Image
            src={service.image}
            alt={`${service.title} in Bhubaneswar Odisha`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 space-y-2 text-white max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-champagne">
              Bhubaneswar Local Service
            </span>
            <h1 className="text-2xl sm:text-5xl font-light font-display text-white">
              {service.title} in Bhubaneswar, Odisha
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
              {service.shortDesc} Specially engineered for Bhubaneswar climate & modern luxury aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Detail Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info & Localized Data */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wide font-display text-brand-charcoal">
                Overview & Design Execution
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our local fabrication team in Bhubaneswar ensures exact site measurements, 3D visual preview approvals, and dust-free precision installation across flats, apartments, and commercial setups in Patia, Chandrasekharpur, Jaydev Vihar, and Khandagiri.
              </p>
            </div>

            {/* Quick Specs Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white border border-brand-stone/40 space-y-1">
                <div className="flex items-center text-brand-champagne text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck size={16} className="mr-1" />
                  <span>Durability</span>
                </div>
                <p className="text-sm font-semibold text-brand-charcoal">100% Damp & Termite Proof</p>
                <p className="text-[11px] text-gray-500">Built for coastal humidity</p>
              </div>

              <div className="p-4 bg-white border border-brand-stone/40 space-y-1">
                <div className="flex items-center text-brand-champagne text-xs font-bold uppercase tracking-wider">
                  <Clock size={16} className="mr-1" />
                  <span>Execution Time</span>
                </div>
                <p className="text-sm font-semibold text-brand-charcoal">7 to 14 Days</p>
                <p className="text-[11px] text-gray-500">Fast Bhubaneswar delivery</p>
              </div>

              <div className="p-4 bg-white border border-brand-stone/40 space-y-1">
                <div className="flex items-center text-brand-champagne text-xs font-bold uppercase tracking-wider">
                  <Award size={16} className="mr-1" />
                  <span>Warranty</span>
                </div>
                <p className="text-sm font-semibold text-brand-charcoal">10-Year Warranty</p>
                <p className="text-[11px] text-gray-500">Structural peace of mind</p>
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-5 bg-white border border-brand-stone/40 p-6 sm:p-8">
              <h3 className="text-base font-bold uppercase tracking-wider text-brand-charcoal flex items-center">
                <Award size={16} className="text-brand-champagne mr-1.5" />
                <span>Key Features & Specifications</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start text-xs sm:text-sm text-gray-600">
                    <Check size={16} className="text-brand-champagne mr-2 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials and benefits split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Materials */}
              <div className="space-y-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-brand-charcoal flex items-center">
                  <Hammer size={16} className="text-brand-champagne mr-1.5" />
                  <span>Materials We Use</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {service.materials.map((mat) => (
                    <li key={mat} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-champagne rounded-full mr-2" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-brand-charcoal flex items-center">
                  <HardHat size={16} className="text-brand-champagne mr-1.5" />
                  <span>Your Advantages</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {service.benefits.map((ben) => (
                    <li key={ben} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-charcoal rounded-full mr-2" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Local Neighborhood Coverage Badges */}
            <div className="p-6 bg-brand-stone/20 border border-brand-stone/40 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal flex items-center">
                <MapPin size={16} className="text-brand-champagne mr-1.5" />
                <span>Service Coverage in Bhubaneswar Localities</span>
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We provide direct site visits and installation for {service.title} across all major Bhubaneswar neighborhoods and gated societies:
              </p>
              <div className="flex flex-wrap gap-2">
                {localities.map((loc) => (
                  <span
                    key={loc}
                    className="px-2.5 py-1 bg-white text-brand-charcoal text-[11px] font-medium border border-brand-stone/30"
                  >
                    📍 {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Local FAQ Section */}
            <div className="space-y-4 border-t border-brand-stone/30 pt-8">
              <h3 className="text-xl font-light font-display text-brand-charcoal flex items-center">
                <HelpCircle size={20} className="text-brand-champagne mr-2" />
                <span>Frequently Asked Questions – {service.title} in Bhubaneswar</span>
              </h3>
              <div className="space-y-4">
                {localFaqs.map((faq) => (
                  <div key={faq.question} className="p-5 bg-white border border-brand-stone/40 space-y-2">
                    <h4 className="text-sm font-semibold text-brand-charcoal">
                      {faq.question}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-brand-charcoal text-white p-6 sm:p-8 border border-white/5 space-y-6 text-center sm:text-left select-none">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-champagne">
                  Bhubaneswar Direct Service
                </span>
                <h3 className="text-lg font-semibold tracking-wide font-display text-white">
                  Get Free Estimate
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Book a direct site consultation in Patia, Chandrasekharpur, Jaydev Vihar, Khandagiri, or anywhere in Bhubaneswar.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-champagne text-brand-charcoal hover:bg-white py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={14} className="fill-current" />
                  <span>WhatsApp Consultation</span>
                </a>
                
                <a
                  href="tel:8144823652"
                  className="w-full border border-white/30 hover:bg-white hover:text-brand-charcoal py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone size={14} />
                  <span>Call +91 8144823652</span>
                </a>
              </div>
            </div>

            {/* Other Services Navigation Box */}
            <div className="p-6 bg-white border border-brand-stone/40 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                Explore Other Services
              </h4>
              <ul className="space-y-2 text-xs">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-gray-600 hover:text-brand-champagne transition-colors flex items-center justify-between"
                    >
                      <span>{s.title}</span>
                      <ChevronRight size={12} className="text-gray-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Gallery Inspiration Section */}
      {relatedDesigns.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-stone/40 pt-16 select-none">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-champagne">
                Design Gallery
              </span>
              <h3 className="text-xl sm:text-3xl font-light font-display text-brand-charcoal">
                Related Design Concepts for {service.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedDesigns.map((item) => (
                <DesignCard key={item.slug} design={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

