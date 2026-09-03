"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden select-none group border border-brand-stone/30">
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt="After Transformation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-4 right-4 bg-brand-charcoal/70 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold tracking-wider uppercase">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground overlay with dynamic width clip) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        {/* We keep the image size at 100% of parent, and let the container clip it */}
        <img
          src={beforeImage}
          alt="Before Transformation"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          loading="lazy"
          style={{ width: "100%" }}
        />
        <div className="absolute bottom-4 left-4 bg-brand-champagne/80 backdrop-blur-sm text-brand-charcoal px-3 py-1 text-xs font-semibold tracking-wider uppercase">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-brand-champagne pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Widget */}
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
