"use client";

import React from "react";
import { motion } from "framer-motion";

interface Step {
  num: string;
  title: string;
  desc: string;
}

export default function ProcessTimeline() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Talk to Us",
      desc: "Connect with us on WhatsApp or phone to share your design aspirations, requirements, and ideas.",
    },
    {
      num: "02",
      title: "Understand Your Space",
      desc: "We visit your site to take precise measurements, check wall quality, and inspect humidity variables.",
    },
    {
      num: "03",
      title: "Plan Design",
      desc: "Our design experts conceptualize layouts, choosing modern color themes and visual balances.",
    },
    {
      num: "04",
      title: "Materials & Estimate",
      desc: "Receive a transparent pricing breakdown with explicit details on sheet grades, profiles, and hardware.",
    },
    {
      num: "05",
      title: "Execute",
      desc: "Our skilled fabrication specialists start assembly, maintaining strict quality guidelines and tolerances.",
    },
    {
      num: "06",
      title: "Finish & Handover",
      desc: "We run final inspection checks on slides and soft-closes, cleaning and handing over your pristine space.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      {steps.map((step, idx) => (
        <motion.div
          key={step.num}
          variants={cardVariants}
          className="bg-white border border-brand-stone/40 p-6 sm:p-8 flex flex-col justify-between relative group hover:border-brand-champagne transition-all duration-300 shadow-sm"
        >
          {/* Subtle top indicator bar */}
          <div className="absolute top-0 left-0 w-0 h-1 bg-brand-champagne group-hover:w-full transition-all duration-300" />
          
          <div className="space-y-4">
            <span className="text-4xl sm:text-5xl font-light font-display text-brand-champagne/45 select-none">
              {step.num}
            </span>
            <h3 className="text-lg font-semibold tracking-wide font-display text-brand-charcoal">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {step.desc}
            </p>
          </div>

          <div className="mt-6 flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-brand-champagne select-none">
            <span>Phase {idx + 1}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
