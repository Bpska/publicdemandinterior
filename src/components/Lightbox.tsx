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
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  // Minimum swipe distance in px
  const minSwipeDistance = 50;

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

  // Touch Swipe Handler for Mobile
  const onTouchStartHandler = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHandler = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

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
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-3 sm:p-6 select-none overflow-hidden"
          onClick={onClose}
          onTouchStart={onTouchStartHandler}
          onTouchMove={onTouchMoveHandler}
          onTouchEnd={onTouchEndHandler}
        >
          {/* Header Controls */}
          <div className="flex justify-between items-center text-white pt-2 pb-1 sm:py-2 z-10 max-w-5xl mx-auto w-full">
            <div className="text-xs font-semibold tracking-widest text-brand-stone/70 bg-white/10 px-3 py-1 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 text-white hover:text-brand-champagne transition-colors rounded-full focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X size={22} className="sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center justify-between relative max-w-5xl mx-auto w-full my-auto">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-1 sm:left-2 p-2 sm:p-3 text-white bg-black/50 hover:bg-black/80 hover:text-brand-champagne transition-all rounded-full z-20 focus:outline-none border border-white/20"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} className="sm:w-9 sm:h-9" />
            </button>

            {/* Current Image Container */}
            <div className="w-full flex items-center justify-center p-2 sm:p-4 relative">
              <motion.img
                key={currentIndex}
                src={currentImage}
                alt={`Gallery view ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="max-w-full max-h-[58vh] sm:max-h-[72vh] object-contain rounded-md shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-1 sm:right-2 p-2 sm:p-3 text-white bg-black/50 hover:bg-black/80 hover:text-brand-champagne transition-all rounded-full z-20 focus:outline-none border border-white/20"
              aria-label="Next Image"
            >
              <ChevronRight size={24} className="sm:w-9 sm:h-9" />
            </button>
          </div>

          {/* Footer Conversion Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-3 pb-2 border-t border-white/10 z-10 max-w-5xl mx-auto w-full text-white gap-2.5 sm:gap-4">
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-brand-stone/70 text-center sm:text-left">
              Inspired by this design?
            </span>
            <div className="flex w-full sm:w-auto justify-center gap-3">
              <button
                onClick={handleQuoteClick}
                className="flex-1 sm:flex-initial bg-brand-champagne text-brand-charcoal hover:bg-white px-4 sm:px-6 py-2.5 sm:py-2 text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-colors text-center"
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
                className="flex-1 sm:flex-initial bg-[#25D366] text-white hover:bg-white hover:text-brand-charcoal px-4 sm:px-6 py-2.5 sm:py-2 text-[11px] sm:text-xs font-bold tracking-wider uppercase flex items-center justify-center space-x-1.5 transition-colors"
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
