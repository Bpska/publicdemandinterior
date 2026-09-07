"use client";

import React, { useState } from "react";
import SmoothImage from "@/components/SmoothImage";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After – Public Demand Interior",
  aspectRatio = "aspect-[4/5] max-w-2xl mx-auto",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const hasTwoImages = beforeImage && beforeImage !== afterImage;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  // If a single transformation image is supplied (like the architectural Before & After composite)
  if (!hasTwoImages) {
    return (
      <div
        className={`relative w-full ${aspectRatio} overflow-hidden select-none group border border-brand-stone/40 shadow-lg bg-brand-stone/10`}
      >
        {/* Full Transformation Image */}
        <SmoothImage
          src={afterImage}
          alt="Space Transformation"
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Central Golden Divider Seam */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-brand-champagne pointer-events-none shadow-md">
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-brand-charcoal border-2 border-brand-champagne rounded-full flex items-center justify-between px-1.5 shadow-xl">
            <svg
              className="w-2.5 h-2.5 text-brand-champagne fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
            <svg
              className="w-2.5 h-2.5 text-brand-champagne fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </div>
        </div>

        {/* Before Label Badge (Left) */}
        <div className="absolute bottom-4 left-4 bg-brand-charcoal/85 border border-brand-champagne/40 backdrop-blur-md text-brand-champagne px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase shadow-lg">
          {beforeLabel}
        </div>

        {/* After Label Badge (Right) */}
        <div className="absolute bottom-4 right-4 bg-brand-champagne text-brand-charcoal border border-white/50 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase shadow-lg">
          {afterLabel}
        </div>
      </div>
    );
  }

  // Interactive 2-image slider with hardware-accelerated clipPath
  return (
    <div className={`relative w-full ${aspectRatio} overflow-hidden select-none group border border-brand-stone/30`}>
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <SmoothImage
          src={afterImage}
          alt="After Transformation"
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-brand-charcoal/85 border border-brand-champagne/40 backdrop-blur-sm text-brand-champagne px-3 py-1 text-xs font-semibold tracking-wider uppercase shadow-md">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground overlay with smooth clip-path) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <SmoothImage
          src={beforeImage!}
          alt="Before Transformation"
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-brand-champagne backdrop-blur-sm text-brand-charcoal px-3 py-1 text-xs font-semibold tracking-wider uppercase shadow-md">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-brand-champagne pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-brand-charcoal border-2 border-brand-champagne rounded-full flex items-center justify-between px-1.5 shadow-xl transition-transform group-hover:scale-110">
          <svg
            className="w-2.5 h-2.5 text-brand-champagne fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
          <svg
            className="w-2.5 h-2.5 text-brand-champagne fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </div>
      </div>

      {/* Interactive Range Input Overlay */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label="Before after slider"
      />
    </div>
  );
}

