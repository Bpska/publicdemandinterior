import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects Portfolio",
  description: "Explore our portfolio of completed projects, including modular kitchens, aluminium wardrobes, and designer interiors in Odisha.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Banner */}
      <section className="bg-brand-charcoal text-white py-20 relative select-none">
        <div className="absolute inset-0">
          <Image
            src="/images/Guest House design-.jpeg"
            alt="Projects portfolio background"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Realized Schemes
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-display text-white tracking-wide">
            Portfolio & Case Studies
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Review detailed spatial transformations, materials specifications, and before/after comparisons created for homes and commercial layouts across Odisha.
          </p>
        </div>
      </section>

      {/* Grid listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Trust disclaimer */}
        <div className="p-4 bg-brand-stone/20 border border-brand-stone/40 max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Verification Notice:</strong> The following projects represent design concept portfolios and material schemes prepared for Odisha clients. Fictional project claims are not represented.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
