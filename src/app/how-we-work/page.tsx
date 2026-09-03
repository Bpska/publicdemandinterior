import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ProcessTimeline from "@/components/ProcessTimeline";
import { MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work - Execution Timeline",
  description: "Discover our 6-step turnkey interior design and fabrication process, ensuring precise site measurement, quality hardware alignment, and transparent estimates in Odisha.",
};

export default function HowWeWorkPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Page Header */}
      <section className="bg-brand-charcoal text-white py-20 relative select-none">
        <div className="absolute inset-0">
          <Image
            src="/images/false-ceiling-1.jpeg"
            alt="Timeline workflow background"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Execution Method
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-display text-white tracking-wide">
            How We Work
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            From the initial conversation to the final keys handover, we follow a rigorous, 6-step structured sequence to ensure error-free measurements, material honesty, and premium finishing.
          </p>
        </div>
      </section>

      {/* Main Process Timeline Component Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProcessTimeline />
      </section>

      {/* Expanded Walkthrough Details */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-brand-stone/20 border border-brand-stone/40 p-8 sm:p-12 space-y-8">
        <h2 className="text-2xl font-light font-display text-brand-charcoal text-center">
          What Sets Our Process Apart?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold text-brand-charcoal font-display text-base">
              Precise Site Calibration
            </h3>
            <p className="text-gray-500 leading-relaxed">
              We never construct cabinets based on telephone values or raw blueprints. Our technical experts measure walls from multiple height coordinates to adjust for minor masonry tilts, preventing cabinet misalignments.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-brand-charcoal font-display text-base">
              Hardware Testing & Alignment
            </h3>
            <p className="text-gray-500 leading-relaxed">
              All tandem runners, hydraulic hinges, and sliding door rollers are calibrated on-site. We ensure doors open with zero screeching and drawers slide with soft-closing dampers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 select-none">
        <div className="bg-brand-charcoal text-white p-8 sm:p-12 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Ready to Begin Phase 1?
          </span>
          <h2 className="text-2xl sm:text-3xl font-light font-display text-white">
            Schedule Your Free Consultation Site Visit
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
            Contact our coordinators to arrange site visits, take raw measurements, and discuss layout ideas.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918144823652?text=Hello%20Public Demand%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-champagne text-brand-charcoal hover:bg-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle size={14} className="fill-current" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:8144823652"
              className="border border-white/30 hover:bg-white hover:text-brand-charcoal px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors"
            >
              Call 8144823652
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
