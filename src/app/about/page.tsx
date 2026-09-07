import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

import { ShieldCheck, MessageCircle, Sparkles, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Public Demand Interior' story, our commitment to waterproof and damp-resistant modular materials, and our direct site design and fabrication process in Odisha.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Design Philosophy",
      desc: "We prioritize minimalist aesthetics and clean sightlines. Every drawer slider, door hinge, and material profile is selected to maximize visual breathing room while offering complete structural utility.",
      icon: <Sparkles className="w-5 h-5 text-brand-champagne" />
    },
    {
      title: "Material Transparency",
      desc: "We share clear specification sheets with our clients. Whether it is premium-gauge aluminium, moisture-resistant HDMR board, or soft-close German drawers, you know exactly what is going into your space.",
      icon: <ShieldCheck className="w-5 h-5 text-brand-champagne" />
    },
    {
      title: "turnkey Execution",
      desc: "Our installers oversee every aspect on-site from initial wall leveling, electrical layout, gypsum installation, to the final check of glass alignments, giving you a hassle-free, turnkey handover.",
      icon: <Wrench className="w-5 h-5 text-brand-champagne" />
    }
  ];

  return (
    <div className="space-y-20 py-12">
      {/* Hero section */}
      <section className="bg-brand-charcoal text-white py-20 relative select-none">
        <div className="absolute inset-0">
          <Image
            src="/images/Beauty parlour and salon design.jpeg"
            alt="Public Demand Interior - Premium interior design work"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Crafting Spaces
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-display text-white tracking-wide">
            Our Brand Story & Approach
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Public Demand Interior was founded in Odisha to bridge the gap between fragile wooden carpentry and long-lasting modular structures. We specialize in luxury design and premium aluminium fabrication.
          </p>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-light font-display text-brand-charcoal leading-snug">
              Providing damp-resistant fabrication that lasts a lifetime.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We recognized that traditional particle board and MDF kitchens decay rapidly in coastal humidity and Indian cooking conditions. Over the years, we have mastered aluminium profiling—curating waterproof modular kitchens and glass wardrobe sliders that bring sleek, industrial durability into a luxury home.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              We never cut corners. From heavy-duty extruded aluminium to toughened glass, every element is designed to resist water, rust, heat, and pests, keeping your home hygienic and pristine for decades.
            </p>
          </div>
          <div className="aspect-[4/3] bg-brand-stone/20 border border-brand-stone/40 overflow-hidden relative">
            <Image
              src="/images/Aluminium modular kitchen.jpeg"
              alt="Aluminium modular kitchen by Public Demand Interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values & Core Approach */}
      <section className="bg-brand-stone/20 py-20 border-y border-brand-stone/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
              Our Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-light font-display text-brand-charcoal">
              Core Principles of Public Demand Interior
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-brand-stone/40 p-8 space-y-4 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 bg-brand-beige rounded-full flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-wide font-display text-brand-charcoal">
                  {v.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 select-none">
        <div className="bg-brand-charcoal text-white p-8 sm:p-12 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Ready to Begin?
          </span>
          <h2 className="text-2xl sm:text-3xl font-light font-display text-white">
            Let&apos;s Shape Your Dream Space Together
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
            Schedule a site visit in Bhubaneswar/Cuttack. Our team will measure your space and offer functional layout suggestions.
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
