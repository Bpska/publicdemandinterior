"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";

interface HeroContentProps {
  waEnquiryUrl: string;
}

const rotatingTexts = [
  "Built for You.",
  "Designed to Last.",
  "Crafted with Care.",
  "Termite & Rust Free.",
  "Tailored for Luxury."
];

export default function HeroContent({ waEnquiryUrl }: HeroContentProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl space-y-6 sm:space-y-8"
    >
      <div className="flex flex-wrap gap-3">
        <div className="inline-flex items-center space-x-2 bg-brand-champagne/10 border border-brand-champagne/30 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
          <Sparkles size={12} />
          <span>Modern Interior & Aluminium Specialists</span>
        </div>
        <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
          <span className="w-1.5 h-1.5 bg-brand-champagne rounded-full animate-pulse" />
          <span>7+ Years of Experience</span>
        </div>
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light font-display text-white leading-tight min-h-[170px] sm:min-h-[250px] lg:min-h-[300px]">
        Beautiful Spaces.<br />
        Smart Designs.<br />
        <span className="inline-block relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-brand-champagne font-normal italic block"
            >
              {rotatingTexts[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>

      <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
        From modern modular kitchens and luxury bedrooms to aluminium wardrobes, system windows, and complete interior set-ups in Odisha.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <a
          href={waEnquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-champagne text-brand-charcoal hover:bg-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2 shadow-lg"
        >
          <MessageCircle size={16} className="fill-current" />
          <span>Get Free Consultation</span>
        </a>
        <Link
          href="/designs"
          className="border border-white/40 text-white hover:bg-white hover:text-brand-charcoal px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors text-center"
        >
          Explore Designs
        </Link>
      </div>
    </motion.div>
  );
}
