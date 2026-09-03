import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { services } from "@/data/services";
import { designs } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle, Phone, ArrowLeft, Check, Award, Hammer, HardHat } from "lucide-react";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} Services`,
    description: service.shortDesc || `Learn about our premium ${service.title} services. Custom specifications and damp-resistant modular materials built for you in Odisha.`,
  };
}

// Pre-define all slugs for static site optimization
export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Pre-fill WhatsApp message
  const waMessage = `Hello Public Demand Interior, I would like to enquire about your ${service.title} services.`;
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

  return (
    <div className="space-y-12 py-10">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
        <Link
          href="/services"
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-champagne transition-colors"
        >
          <ArrowLeft size={16} className="mr-1.5" />
          <span>Back to Services</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-brand-stone/20 border border-brand-stone/40">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 space-y-2 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-champagne">
              Service Detail
            </span>
            <h1 className="text-2xl sm:text-5xl font-light font-display text-white">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Detail Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main info */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wide font-display text-brand-charcoal">
                Overview & Description
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-5 bg-white border border-brand-stone/40 p-6 sm:p-8">
              <h3 className="text-base font-bold uppercase tracking-wider text-brand-charcoal flex items-center">
                <Award size={16} className="text-brand-champagne mr-1.5" />
                <span>Key Features</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start text-xs sm:text-sm text-gray-500">
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
                <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
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
                <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
                  {service.benefits.map((ben) => (
                    <li key={ben} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-charcoal rounded-full mr-2" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA panel */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-brand-charcoal text-white p-6 sm:p-8 border border-white/5 space-y-6 text-center sm:text-left select-none">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-champagne">
                  Free Quote Planning
                </span>
                <h3 className="text-lg font-semibold tracking-wide font-display text-white">
                  Get Free Estimate
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We schedule dynamic site inspections, measure space corners, and verify layout calculations before site startup.
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
                  <span>Enquire on WhatsApp</span>
                </a>
                
                <a
                  href="tel:8144823652"
                  className="w-full border border-white/30 hover:bg-white hover:text-brand-charcoal py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone size={14} />
                  <span>Call 8144823652</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Inspiration Section (Multiple Images) */}
      {relatedDesigns.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-stone/40 pt-16 select-none">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-champagne">
                Design Gallery
              </span>
              <h3 className="text-xl sm:text-3xl font-light font-display text-brand-charcoal">
                Related Design Concepts
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
