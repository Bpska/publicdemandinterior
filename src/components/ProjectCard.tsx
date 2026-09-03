"use client";

import React from "react";
import Link from "next/link";
import SmoothImage from "@/components/SmoothImage";
import { ArrowRight, MapPin } from "lucide-react";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col bg-white border border-brand-stone/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-stone/20">
        <SmoothImage
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-charcoal/5 group-hover:bg-brand-charcoal/0 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-1 text-[10px] text-brand-champagne uppercase font-bold tracking-widest">
            <span>{project.type}</span>
          </div>

          <h3 className="text-lg font-semibold tracking-wide font-display text-brand-charcoal group-hover:text-brand-champagne transition-colors">
            {project.title}
          </h3>

          <div className="flex items-center text-xs text-gray-500 space-x-1 select-none">
            <MapPin size={12} className="text-gray-400" />
            <span>{project.location}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.services.map((service) => (
              <span
                key={service}
                className="bg-brand-stone/40 text-brand-charcoal text-[9px] font-semibold tracking-wide px-2 py-0.5"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* View Project Link */}
        <div className="pt-3 border-t border-brand-stone/30 select-none">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-champagne transition-colors"
          >
            <span>View Project Details</span>
            <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
