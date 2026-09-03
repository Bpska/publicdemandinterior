import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Phone, MapPin, Tag, Briefcase } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} Case Study`,
    description: project.overview || `View case study details for ${project.title}. Includes design approach, raw site before-after comparison, and completed room showcase in Odisha.`,
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Pre-fill WhatsApp message
  const waMessage = `Hello Public Demand Interior, I just saw your project case study: ${project.title}. I would like to get a quote for a similar space layout.`;
  const waUrl = `https://wa.me/918144823652?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="space-y-12 py-10">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
        <Link
          href="/projects"
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-champagne transition-colors"
        >
          <ArrowLeft size={16} className="mr-1.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Main Image Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-brand-stone/20 border border-brand-stone/40">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 space-y-2 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-champagne">
              Project Case Study
            </span>
            <h1 className="text-2xl sm:text-5xl font-light font-display text-white">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Detail Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main descriptions */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wide font-display text-brand-charcoal">
                Project Overview
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Design Approach */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wide font-display text-brand-charcoal">
                Design Approach
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* Before After slider if available */}
            {project.beforeAfter && (
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-wide font-display text-brand-charcoal">
                  {project.beforeAfter.title}
                </h2>
                <div className="max-w-3xl mx-auto">
                  <BeforeAfterSlider
                    beforeImage={project.beforeAfter.before}
                    afterImage={project.beforeAfter.after}
                    beforeLabel="Raw Site"
                    afterLabel="Finished Setup"
                  />
                </div>
              </div>
            )}

            {/* Room Showcase list */}
            <div className="space-y-8">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wide font-display text-brand-charcoal border-b border-brand-stone/40 pb-4">
                Room Showcase
              </h2>

              <div className="space-y-12">
                {project.showcaseRooms.map((room, idx) => (
                  <div
                    key={room.room}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                  >
                    <div className="md:col-span-7 aspect-[16/10] bg-brand-stone/20 border border-brand-stone/40 overflow-hidden relative">
                      <Image
                        src={room.image}
                        alt={room.room}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="md:col-span-5 space-y-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-champagne">
                        Showcase {idx + 1}
                      </span>
                      <h3 className="text-lg font-semibold tracking-wide font-display text-brand-charcoal">
                        {room.room}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {room.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar parameters */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Spec card */}
            <div className="bg-white border border-brand-stone/40 p-6 sm:p-8 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal border-b border-brand-stone/40 pb-3">
                Project Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Location */}
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-brand-champagne shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Location</p>
                    <p className="font-semibold text-brand-charcoal">{project.location}</p>
                  </div>
                </div>

                {/* Property Type */}
                <div className="flex items-start space-x-3">
                  <Briefcase size={16} className="text-brand-champagne shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Property Type</p>
                    <p className="font-semibold text-brand-charcoal">{project.type}</p>
                  </div>
                </div>

                {/* Services */}
                <div className="flex items-start space-x-3">
                  <Tag size={16} className="text-brand-champagne shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Services Provided</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.services.map((ser) => (
                        <span
                          key={ser}
                          className="bg-brand-stone/30 text-brand-charcoal text-[9px] font-bold px-2 py-0.5"
                        >
                          {ser}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-brand-charcoal text-white p-6 sm:p-8 border border-white/5 space-y-6 text-center sm:text-left select-none">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-champagne">
                  Inspired?
                </span>
                <h3 className="text-base font-semibold tracking-wide font-display text-white">
                  Get a Similar Setup
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We specialize in tailoring custom layouts based on your room corners and preferences.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-champagne text-brand-charcoal hover:bg-white py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={14} className="fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>
                
                <Link
                  href={`/quote?notes=${encodeURIComponent("Inspired by project: " + project.title)}`}
                  className="w-full border border-white/30 hover:bg-white hover:text-brand-charcoal py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center text-center block"
                >
                  Request Similar Quote
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
    </div>
  );
}
