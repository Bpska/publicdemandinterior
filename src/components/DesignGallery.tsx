"use client";

import React, { useState } from "react";
import Lightbox from "@/components/Lightbox";
import { Maximize2 } from "lucide-react";
import SmoothImage from "@/components/SmoothImage";

interface DesignGalleryProps {
  images: string[];
}

export default function DesignGallery({ images }: DesignGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNavigateLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold tracking-wide font-display text-brand-charcoal">
        Design Showcase Gallery
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div
            key={img + "-" + idx}
            onClick={() => handleOpenLightbox(idx)}
            className="group relative aspect-[4/3] bg-brand-stone/20 border border-brand-stone/40 overflow-hidden cursor-pointer shadow-sm"
          >
            <SmoothImage
              src={img}
              alt={`Showcase frame ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-103"
            />
            {/* Hover look */}
            <div className="absolute inset-0 bg-brand-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-white/95 text-brand-charcoal p-2 rounded-full shadow-lg">
                <Maximize2 size={16} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={lightboxIndex !== null}
        onClose={handleCloseLightbox}
        images={images}
        currentIndex={lightboxIndex || 0}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
