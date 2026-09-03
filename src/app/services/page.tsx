import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Discover our range of 32 premium interior and construction services including modular kitchens, aluminium wardrobes, system windows, and glass partitions in Odisha.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Banner */}
      <section className="bg-brand-charcoal text-white py-20 relative select-none">
        <div className="absolute inset-0">
          <Image
            src="/images/Aluminium modular kitchen.jpeg"
            alt="Services background"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Solutions Suite
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-display text-white tracking-wide">
            Our 32 Core Services
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            From heavy-gauge aluminium modular kitchens and glass wardrobe sliders to turn-key bedroom renovations, false ceiling designs, and soundproof casement window structures.
          </p>
        </div>
      </section>

      {/* Grid listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
