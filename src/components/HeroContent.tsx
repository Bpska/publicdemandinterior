"use client";

import React, { useState, useEffect, useReducer } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";

interface HeroContentProps {
  waEnquiryUrl: string;
}

const rotatingTexts = [
  "Crafted for Luxury.",
  "Designed to Inspire.",
  "Built to Last."
];

export default function HeroContent({ waEnquiryUrl }: HeroContentProps) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return; // Don't rotate text for users who prefer reduced motion
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
      className="max-w-2xl space-y-6 sm:space-y-8"
    >
      <div className="inline-flex items-center space-x-2 bg-brand-champagne/15 border border-brand-champagne/40 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
        <Sparkles size={12} />
        <span>Luxury Interiors &amp; Aluminium Systems</span>
      </div>

      {/* H1 — visible, semantically correct, SEO-optimised */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light font-display text-white leading-tight">
        Interior Design for Homes and Offices in Bhubaneswar.{" "}
        <span className="inline-block relative">
          {shouldReduceMotion ? (
            <span className="text-brand-champagne font-normal italic block">
              {rotatingTexts[0]}
            </span>
          ) : (
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-brand-champagne font-normal italic block"
              >
                {rotatingTexts[index]}
              </motion.span>
            </AnimatePresence>
          )}
        </span>
      </h1>

      <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-lg">
        Trusted interior designer in Bhubaneswar, Odisha — offering modular kitchens, false ceilings, aluminium wardrobes &amp; complete interior solutions across Bhubaneswar, Cuttack &amp; Puri.
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
      </div>
    </motion.div>
  );
}
