"use client";

import React from "react";
import Link from "next/link";
import SmoothImage from "@/components/SmoothImage";
import { ArrowRight, FileText } from "lucide-react";
import { Service } from "@/data/services";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col bg-white border border-brand-stone/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Image container with hover scaling */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-stone/20">
        <SmoothImage
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-charcoal/5 group-hover:bg-brand-charcoal/0 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-wide font-display text-brand-charcoal group-hover:text-brand-champagne transition-colors">
            {service.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
            {service.shortDesc}
          </p>
        </div>

        {/* Buttons */}
        <div className="pt-2 flex items-center justify-between border-t border-brand-stone/30 select-none">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-champagne transition-colors"
          >
            <span>Explore Service</span>
            <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={`/quote?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center text-xs font-semibold tracking-wider text-gray-400 hover:text-brand-champagne transition-colors"
          >
            <FileText size={14} className="mr-1" />
            <span>Get Quote</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
