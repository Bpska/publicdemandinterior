"use client";

import React from "react";
import Link from "next/link";
import SmoothImage from "@/components/SmoothImage";
import { ArrowUpRight } from "lucide-react";
import { DesignItem } from "@/data/designs";
import { motion } from "framer-motion";

interface DesignCardProps {
  design: DesignItem;
}

export default function DesignCard({ design }: DesignCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col bg-white border border-brand-stone/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-stone/20">
        <SmoothImage
          src={design.image}
          alt={design.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-brand-charcoal/0 transition-colors duration-300" />

        {/* Badge details */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="bg-brand-charcoal/70 backdrop-blur-sm text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
            {design.style}
          </span>
          <span className="bg-brand-champagne/80 backdrop-blur-sm text-brand-charcoal px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
            {design.category}
          </span>
        </div>
      </div>

      {/* Details info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <h3 className="text-base font-semibold tracking-wide font-display text-brand-charcoal line-clamp-1">
            {design.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
            {design.description}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-2 border-t border-brand-stone/30 select-none">
          <Link
            href={`/designs/${design.slug}`}
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-champagne transition-colors"
          >
            <span>View Design</span>
            <ArrowUpRight size={14} className="ml-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
