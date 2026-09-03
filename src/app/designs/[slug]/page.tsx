import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { designs } from "@/data/designs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle, Phone, ArrowLeft, Check, Layers, Sparkles } from "lucide-react";
import DesignGallery from "@/components/DesignGallery";
import DesignCard from "@/components/DesignCard";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const design = designs.find((d) => d.slug === slug);
  if (!design) return {};
  return {
    title: `${design.title} Design Concept`,
    description: design.description || `Explore our ${design.title} design concept. Includes details on key features, materials used, and high-resolution visual layout.`,
  };
}

export async function generateStaticParams() {
  return designs.map((d) => ({
    slug: d.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DesignDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const design = designs.find((d) => d.slug === slug);

  if (!design) {
    notFound();
  }

  // Pre-fill WhatsApp message
  const waMessage = `Hello Public Demand Interior, I am interested in this design concept: ${design.title}.`;
  const waUrl = `https://wa.me/918144823652?text=${encodeURIComponent(waMessage)}`;

  // Find related designs (same category/style, excluding self)
  const related = designs
    .filter((d) => d.slug !== design.slug && (d.category === design.category || d.style === design.style))
    .slice(0, 3);

  return (
    <div className="space-y-12 py-10">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
        <Link
          href="/designs"
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-champagne transition-colors"
        >
          <ArrowLeft size={16} className="mr-1.5" />
          <span>Back to Catalogue</span>
        </Link>
      </div>

      {/* Main Image and Title Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Info Columns */}
          <div className="lg:col-span-8 space-y-10">
            {/* Visual Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-stone/20 border border-brand-stone/40">
              <Image
                src={design.image}
                alt={design.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2 select-none">
                <span className="bg-brand-charcoal text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  {design.style}
                </span>
                <span className="bg-brand-champagne text-brand-charcoal text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  {design.category}
                </span>
              </div>
            </div>

            {/* Typography Details */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-4xl font-light font-display text-brand-charcoal">
                {design.title}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {design.description}
              </p>
            </div>

            {/* Features and Materials panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Features */}
              <div className="space-y-4 bg-white border border-brand-stone/40 p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal flex items-center">
                  <Sparkles size={16} className="text-brand-champagne mr-1.5" />
                  <span>Key Features</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
                  {design.features.map((feat) => (
                    <li key={feat} className="flex items-start">
                      <Check size={16} className="text-brand-champagne mr-2 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div className="space-y-4 bg-white border border-brand-stone/40 p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal flex items-center">
                  <Layers size={16} className="text-brand-champagne mr-1.5" />
                  <span>Materials Used</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
                  {design.materials.map((mat) => (
                    <li key={mat} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-brand-charcoal rounded-full mr-2 mt-2 shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive Gallery */}
            <DesignGallery images={design.images} />
          </div>

          {/* Right Action panel */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 select-none">
            <div className="bg-brand-charcoal text-white p-6 sm:p-8 border border-white/5 space-y-6 text-center sm:text-left shadow-sm">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-champagne">
                  Catalogue Redirection
                </span>
                <h3 className="text-lg font-semibold tracking-wide font-display text-white">
                  Get This Layout
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Love this layout design? Fill out our quote planner or click below to message us directly on WhatsApp for customized pricing.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-champagne text-brand-charcoal hover:bg-white py-3.5 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={14} className="fill-current" />
                  <span>Request Quote on WhatsApp</span>
                </a>
                <Link
                  href={`/quote?service=${encodeURIComponent(design.category)}&notes=${encodeURIComponent("Interested in: " + design.title)}`}
                  className="w-full border border-white/30 hover:bg-white hover:text-brand-charcoal py-3.5 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center text-center block"
                >
                  Fill Estimate Form
                </Link>
                <a
                  href="tel:8144823652"
                  className="w-full text-xs font-bold text-gray-400 hover:text-brand-champagne transition-colors flex items-center justify-center space-x-1"
                >
                  <Phone size={12} />
                  <span>Call Us: 8144823652</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Designs Section */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-stone/40 pt-16">
          <div className="space-y-8">
            <h3 className="text-lg sm:text-xl font-semibold tracking-wide font-display text-brand-charcoal">
              Related Design Ideas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((item) => (
                <DesignCard key={item.slug} design={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
