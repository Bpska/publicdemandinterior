import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import DesignCatalogue from "@/components/DesignCatalogue";

export const metadata: Metadata = {
  title: "Interior Design Catalogue",
  description: "Browse our premium design catalogue. Filter modern and minimal designs for kitchens, bedrooms, wardrobes, false ceilings, and offices in Odisha.",
};

export default function DesignsPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Banner */}
      <section className="bg-brand-charcoal text-white py-20 relative select-none">
        <div className="absolute inset-0">
          <Image
            src="/images/Bedroom-1interior.jpeg"
            alt="Designs catalogue background"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Style Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-display text-white tracking-wide">
            Design Catalogue
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Filter through premium mockups, materials concepts, and spatial layout inspirations. Click on any design card to review specifications, components, and direct quotes.
          </p>
        </div>
      </section>

      {/* Filterable Catalogue Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DesignCatalogue />
      </section>
    </div>
  );
}
