"use client";

import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: LightboxProps) {
  const router = useRouter();
  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handlePrev = React.useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIndex);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = React.useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(nextIndex);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard navigation listeners
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  const currentImage = images[currentIndex] || "";

  // Contact redirection
  const handleQuoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
    // Redirect to quote page
    router.push("/quote");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 select-none"
          onClick={onClose}
        >
          {/* Header Controls */}
          <div className="flex justify-between items-center text-white py-2 z-10">
            <div className="text-xs tracking-widest text-brand-stone/60">
              {currentIndex + 1} / {images.length}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:text-brand-champagne transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center justify-between relative max-w-5xl mx-auto w-full">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 p-3 hover:text-brand-champagne text-white/80 hover:bg-white/5 transition-colors rounded-full z-10 focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Current Image Container */}
            <div className="w-full h-full flex items-center justify-center p-6 relative">
              <motion.img
                key={currentIndex}
                src={currentImage}
                alt={`Gallery view ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="max-w-full max-h-[75vh] object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 p-3 hover:text-brand-champagne text-white/80 hover:bg-white/5 transition-colors rounded-full z-10 focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight size={36} />
            </button>
          </div>

          {/* Footer Conversion Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-4 border-t border-white/10 z-10 max-w-5xl mx-auto w-full text-white gap-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-stone/70">
              Inspired by this design?
            </span>
            <div className="flex space-x-4">
              <button
                onClick={handleQuoteClick}
                className="bg-brand-champagne text-brand-charcoal hover:bg-white px-5 py-2 text-xs font-bold tracking-wider uppercase transition-colors"
              >
                Get Quote
              </button>
              <a
                href={`https://wa.me/918144823652?text=${encodeURIComponent(
                  "Hello Public Demand Interior, I am interested in this design: " + currentImage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-white/10 hover:bg-[#25D366] hover:text-white px-5 py-2 text-xs font-bold tracking-wider uppercase flex items-center space-x-1.5 transition-colors"
              >
                <MessageCircle size={14} className="fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
