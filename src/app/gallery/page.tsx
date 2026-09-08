import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import GalleryView from "@/components/GalleryView";

export const metadata: Metadata = {
  title: "Interior Design Gallery | Modular Kitchen, False Ceiling & Wardrobe Photos – Odisha",
  description: "Browse high-resolution photos of modular kitchens, gypsum & wooden false ceilings, aluminium wardrobes, glass partitions, and office interiors completed by Public Demand Interior across Bhubaneswar, Cuttack & Odisha.",
  keywords: [
    "modular kitchen photos Odisha",
    "false ceiling design photos Odisha",
    "aluminium wardrobe photos Odisha",
    "interior design gallery Odisha",
    "interior design inspiration Odisha",
    "kitchen interior photos Bhubaneswar",
    "bedroom interior Odisha",
    "office interior photos Odisha"
  ],
};

export default function GalleryPage() {
  return (
    <div className="space-y-12 py-12">
      {/* Banner */}
      <section className="bg-brand-charcoal text-white py-20 relative select-none">
        <div className="absolute inset-0">
          <Image
            src="/images/Tv unit and console-1.jpeg"
            alt="Gallery background"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Visual Showroom
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-display text-white tracking-wide">
            Inspiration Gallery
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Browse our curated album of kitchen plans, bedroom layouts, false ceilings, and heavy-duty aluminium windows. Click on any frame to view in full resolution.
          </p>
        </div>
      </section>

      {/* Main Filterable Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center py-20 text-sm text-gray-500 font-medium">Loading gallery data...</div>}>
          <GalleryView />
        </Suspense>
      </section>
    </div>
  );
}
