import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle,

  Star,
  Flame,
  Droplets,
  Layers,
  Wrench,
  ChevronRight
} from "lucide-react";

import { services } from "@/data/services";
import { designs } from "@/data/designs";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";

import ServiceCard from "@/components/ServiceCard";
import DesignCard from "@/components/DesignCard";
import ProjectCard from "@/components/ProjectCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";
import HeroContent from "@/components/HeroContent";

export const metadata: Metadata = {
  title: "Best Interior Designer in Odisha | Complete Interior Solutions",
  description: "Public Demand Interior is a leading interior designer in Odisha offering complete interior solutions, modular kitchens, damp-resistant aluminium wardrobes, false ceilings, and custom home decor across Odisha.",
  keywords: [
    "interior designer in Odisha",
    "bcs interior company Odisha",
    "complete interior solutions Odisha",
    "best interior design company in Odisha"
  ],
};

export default function Home() {
  const categories = [
    { name: "Kitchen", path: "/gallery?category=Kitchen" },
    { name: "Bedroom", path: "/gallery?category=Bedroom" },
    { name: "Living", path: "/gallery?category=Living" },
    { name: "Wardrobe", path: "/gallery?category=Wardrobe" },
    { name: "TV Unit", path: "/gallery?category=TV%20Unit" },
    { name: "Aluminium", path: "/gallery?category=Aluminium" },
    { name: "Office", path: "/gallery?category=Office" },
    { name: "False Ceiling", path: "/gallery?category=False%20Ceiling" },
    { name: "Doors & Windows", path: "/gallery?category=Doors%20%26%20Windows" },
    { name: "Partitions", path: "/gallery?category=Partitions" },
  ];

  // Benefits blocks (Why Choose Us)
  const benefits = [
    {
      title: "Modern Design",
      desc: "Architectural, sleek visual aesthetics tailored to contemporary luxury standards.",
      icon: <Sparkles className="text-brand-champagne w-6 h-6" />
    },
    {
      title: "Custom Solutions",
      desc: "Tailored spatial planning maximizing corner utilities and storage layouts.",
      icon: <Layers className="text-brand-champagne w-6 h-6" />
    },
    {
      title: "Quality Materials",
      desc: "Waterproof, rust-free aluminium structures combined with premium branded hardware.",
      icon: <ShieldCheck className="text-brand-champagne w-6 h-6" />
    },
    {
      title: "Professional Execution",
      desc: "Accurate site alignments and skilled fabrication by expert design technicians.",
      icon: <Wrench className="text-brand-champagne w-6 h-6" />
    },
    {
      title: "Transparent Communication",
      desc: "Fully itemized estimates and clear material specification sheets.",
      icon: <CheckCircle className="text-brand-champagne w-6 h-6" />
    },
    {
      title: "Complete Solutions",
      desc: "End-to-end turnkey service starting from raw site measurement to final handover.",
      icon: <Zap className="text-brand-champagne w-6 h-6" />
    }
  ];

  const waEnquiryUrl = "https://wa.me/918144823652?text=Hello%20Public Demand%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project.";

  return (
    <div className="space-y-20 pb-16">
      {/* 2. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-charcoal overflow-hidden py-20 select-none">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/luxury-hero-bg.jpg"
            alt="Ultra Luxury Interior Design by Public Demand Interior"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70 scale-105 transition-transform duration-1000"
          />
          {/* Multi-layer gradient: ensures sharp text contrast on left while showcasing the luxury interior design */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/55 to-brand-charcoal/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <HeroContent waEnquiryUrl={waEnquiryUrl} />
        </div>
      </section>

      {/* 3. Category Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 select-none">
        <div className="bg-white border border-brand-stone/40 p-4 shadow-md">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar space-x-6 py-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.path}
                className="text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-champagne transition-colors shrink-0 px-3 py-1 hover:bg-brand-stone/30"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-display text-brand-charcoal leading-tight">
              We design and craft spaces with functional precision and luxury aesthetics.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Based in Odisha, Public Demand Interior specializes in creating robust, damp-resistant interior design and customized aluminium fabrication solutions. We focus on durability, utilizing high-grade extruded metal and modern panels to offer termite-proof modular cabinets, elegant sliding doors, and soundproof window systems.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              We believe a home should reflect the personality of its owners, while offering practical longevity. Every layout represents transparent materials sourcing, meticulous workmanship, and premium hardware.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-champagne transition-colors"
              >
                <span>Read Our Philosophy</span>
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-brand-stone/20 border border-brand-stone/40 overflow-hidden group">
            <Image
              src="/images/modern-bedroom-interior.jpg"
              alt="Luxury bedroom interior by Public Demand Interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Experience overlay badge */}
            <div className="absolute top-4 right-4 z-10 bg-brand-charcoal text-white px-4 py-3 border border-brand-champagne/30 shadow-lg select-none text-center">
              <p className="text-2xl font-bold font-display text-brand-champagne leading-none">7+</p>
              <p className="text-[9px] uppercase tracking-widest font-semibold mt-1 text-gray-300">Years of<br/>Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl font-light font-display text-brand-charcoal">
                Our Specialized Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold uppercase tracking-widest text-brand-champagne hover:text-brand-charcoal transition-colors flex items-center"
            >
              <span>View All 32 Services</span>
              <ChevronRight size={14} className="ml-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Designs Section */}
      <section className="bg-brand-stone/20 py-20 border-y border-brand-stone/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
                Get Inspired
              </span>
              <h2 className="text-3xl sm:text-4xl font-light font-display text-brand-charcoal">
                Featured Design Catalogue
              </h2>
            </div>
            <Link
              href="/designs"
              className="text-xs font-bold uppercase tracking-widest text-brand-champagne hover:text-brand-charcoal transition-colors flex items-center"
            >
              <span>Explore Catalogue</span>
              <ChevronRight size={14} className="ml-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designs.slice(0, 4).map((design) => (
              <DesignCard key={design.slug} design={design} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-12">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-display text-brand-charcoal">
              Portfolio & Concepts
            </h2>
            <p className="text-xs text-gray-400">
              *The following cases represent design concepts and material configurations prepared for Odisha properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Aluminium Specialist Section */}
      <section className="bg-brand-charcoal text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-champagne/20 border border-brand-champagne/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-champagne">
                <span>Core Competency</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light font-display text-white leading-tight">
                Why We Specialize in <br />
                <span className="text-brand-champagne italic">Aluminium Work</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Indian kitchens and coastal climates demand resilient materials. Traditional wood and MDF cabinets swell when exposed to water, harbor termites, and decay. Our precision-engineered aluminium profiles offer a highly modern, dust-free, and lifetime solution.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 select-none">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gray-300">
                  <Droplets className="text-brand-champagne w-5 h-5 shrink-0" />
                  <span>100% Waterproof</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gray-300">
                  <Star className="text-brand-champagne w-5 h-5 shrink-0" />
                  <span>Termite Proof</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gray-300">
                  <Flame className="text-brand-champagne w-5 h-5 shrink-0" />
                  <span>Fire Retardant</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gray-300">
                  <ShieldCheck className="text-brand-champagne w-5 h-5 shrink-0" />
                  <span>Zero Swelling</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 space-y-3">
                <h3 className="text-base font-semibold text-brand-champagne font-display">
                  Aluminium Kitchens
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Extruded metal carcasses fitted with premium glass or ACP panels. Extremely robust against spice stains and daily scrubbing.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 space-y-3">
                <h3 className="text-base font-semibold text-brand-champagne font-display">
                  System Windows & Doors
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Heavy-gauge sliding and casement profiles fitted with airtight rubber gaskets and soundproofing glass blocks.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 space-y-3">
                <h3 className="text-base font-semibold text-brand-champagne font-display">
                  Aluminium Wardrobes
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Sleek framing structures combined with mirrors or toughened glass. They never warp and save bedroom space.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 space-y-3">
                <h3 className="text-base font-semibold text-brand-champagne font-display">
                  Partitions & Sliding Grids
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Slim-sightline glass panels to isolate smells, separate AC cooling zones, or segment commercial workspace sections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Before/After Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <div className="space-y-2 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Before & After
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-display text-brand-charcoal">
            Interactive Space Transformation
          </h2>
          <p className="text-xs text-gray-400">
            Compare an unfinished raw structural site with the premium completed Public Demand Interior luxury architectural finish.
          </p>
        </div>

        <BeforeAfterSlider
          beforeImage="/images/before-transformation.png"
          afterImage="/images/after-transformation.png"
          beforeLabel="Before"
          afterLabel="After – Public Demand Interior"
          aspectRatio="aspect-[16/10] sm:aspect-[16/9] max-w-4xl mx-auto"
        />
      </section>

      {/* 10. How We Work (Timeline) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Our Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-display text-brand-charcoal">
            The Fabrication & Design Journey
          </h2>
        </div>

        <ProcessTimeline />
      </section>

      {/* 11. Why Choose Us */}
      <section className="bg-brand-stone/20 py-20 border-y border-brand-stone/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-2 text-center max-w-xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
              Our Commitments
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-display text-brand-charcoal">
              Why Customers Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-brand-stone/40 p-8 flex flex-col space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-wide font-display text-brand-charcoal">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-display text-brand-charcoal">
            What Homeowners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-brand-stone/40 p-8 flex flex-col justify-between relative shadow-sm"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex space-x-1 text-brand-champagne select-none">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-current" />
                  ))}
                </div>
                <p className="text-sm italic text-gray-500 leading-relaxed">
                  &quot;{t.text}&quot;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-stone/30">
                <p className="text-sm font-semibold text-brand-charcoal">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}, {t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <div className="space-y-2 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-display text-brand-charcoal">
            Frequently Asked Questions
          </h2>
        </div>

        <FAQAccordion items={faqs} />
      </section>

      {/* 14. Consultation CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 select-none">
        <div className="bg-brand-charcoal text-white p-8 sm:p-16 border border-brand-stone/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Accent graphics */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-champagne/10 rounded-full blur-3xl" />
          
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
              Consultation Offer
            </span>
            <h2 className="text-2xl sm:text-4xl font-light font-display text-white">
              Get Free Design Consultation & Estimation
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              We visit your property site to draft custom layout options and provide exact metal/plywood thickness calculations.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4">
            <a
              href={waEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-champagne text-brand-charcoal hover:bg-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle size={14} className="fill-current" />
              <span>Get Free Consultation</span>
            </a>
            <a
              href="tel:8144823652"
              className="border border-white/30 hover:bg-white hover:text-brand-charcoal px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors text-center"
            >
              Call 8144823652
            </a>
          </div>
        </div>
      </section>

      {/* 15. Quote/Contact Section */}
      <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text and Direct Contacts */}
          <div className="lg:col-span-5 space-y-8 text-center sm:text-left">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
                Get a Quote
              </span>
              <h2 className="text-3xl sm:text-4xl font-light font-display text-brand-charcoal">
                Let&apos;s Discuss Your Project Details
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Provide your requirements using the quote planner form. It will construct a structured pricing query that you can trigger directly to us on WhatsApp.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-brand-stone/20 border border-brand-stone/40 flex items-center space-x-4">
                <div className="w-10 h-10 bg-brand-charcoal text-white rounded-full flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Call Us Directly</p>
                  <a href="tel:8144823652" className="text-base font-semibold text-brand-charcoal hover:text-brand-champagne transition-colors">
                    +91 8144823652
                  </a>
                </div>
              </div>

              <div className="p-4 bg-brand-stone/20 border border-brand-stone/40 flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center">
                  <MessageCircle size={18} className="fill-current" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">WhatsApp Direct</p>
                  <a
                    href={waEnquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-brand-charcoal hover:text-brand-champagne transition-colors"
                  >
                    +91 8144823652
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
