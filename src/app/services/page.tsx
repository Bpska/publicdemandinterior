import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { MapPin, ShieldCheck, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Services in Bhubaneswar | Modular Kitchen, False Ceiling, Wardrobes",
  description: "Browse 28+ custom interior design services by Public Demand Interior in Bhubaneswar, Odisha. Specialist in damp-proof aluminium modular kitchens, wardrobes, false ceilings, electrical wiring, plumbing, and turnkey home interiors across Patia, Chandrasekharpur, Jaydev Vihar, Khandagiri, Cuttack & Puri.",
  keywords: [
    "interior services in Bhubaneswar",
    "modular kitchen Bhubaneswar",
    "aluminium modular kitchen Bhubaneswar",
    "aluminium wardrobe Bhubaneswar",
    "false ceiling contractor Bhubaneswar",
    "interior design services Patia",
    "interior contractor Chandrasekharpur",
    "interior company Jaydev Vihar",
    "turnkey interior designer Bhubaneswar",
    "mosquito net installation Bhubaneswar",
    "plumber work Bhubaneswar",
    "electrical wiring Bhubaneswar",
    "interior contractor Cuttack",
    "interior contractor Puri"
  ],
  alternates: {
    canonical: "./",
  },
};

export default function ServicesPage() {
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
    "Cuttack Road",
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Banner */}
      <section className="bg-brand-charcoal text-white py-20 relative select-none">
        <div className="absolute inset-0">
          <Image
            src="/images/Aluminium modular kitchen.jpeg"
            alt="Interior design services in Bhubaneswar Odisha"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Bhubaneswar Full-Service Interior Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-display text-white tracking-wide">
            Our Interior & Fabrication Services
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            From heavy-gauge damp-proof aluminium modular kitchens and glass wardrobe sliders to false ceilings, electrical wiring, plumbing, and complete 2BHK/3BHK turnkey interiors in Bhubaneswar, Cuttack & Puri.
          </p>
        </div>
      </section>

      {/* Local Geo Coverage Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-brand-stone/40 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-brand-stone/20 pb-4">
            <div>
              <h2 className="text-xl font-display font-semibold text-brand-charcoal flex items-center">
                <MapPin size={20} className="text-brand-champagne mr-2" />
                <span>Active Service Neighborhoods in Bhubaneswar</span>
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Direct site consultation, 3D design planning, and quick installation across all prime localities:
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-brand-charcoal text-white hover:bg-brand-champagne hover:text-brand-charcoal px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors shrink-0"
            >
              Book Site Visit
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {localities.map((loc) => (
              <span
                key={loc}
                className="px-3 py-1.5 bg-brand-beige text-brand-charcoal text-xs font-medium border border-brand-stone/40"
              >
                📍 {loc}, Bhubaneswar
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-gray-600">
            <div className="flex items-center space-x-2">
              <ShieldCheck size={16} className="text-brand-champagne shrink-0" />
              <span>100% Damp-Proof & Termite-Proof Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-brand-champagne shrink-0" />
              <span>Fast 7 to 14 Days Site Execution</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award size={16} className="text-brand-champagne shrink-0" />
              <span>Transparent Price per Sq Ft in Odisha</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-light font-display text-brand-charcoal">
            Explore All Services ({services.length})
          </h2>
          <p className="text-sm text-gray-500">
            Click on any service to view material specifications, price estimations, photo gallery, and local client FAQs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

