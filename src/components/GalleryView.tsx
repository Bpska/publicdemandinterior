"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { designs } from "@/data/designs";
import Lightbox from "@/components/Lightbox";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import SmoothImage from "@/components/SmoothImage";

export default function GalleryView() {
  const searchParams = useSearchParams();


  const categories = [
    "All",
    "Kitchen",
    "Bedroom",
    "Living",
    "Wardrobe",
    "TV Unit",
    "Aluminium",
    "Office",
    "False Ceiling",
    "Doors & Windows",
    "Partitions",
  ];

  const router = useRouter();
  const activeCategory = searchParams.get("category") || "All";

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleCategoryChange = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    // Using replace to avoid filling history with tab clicks
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  // Flatten images from designs and preserve design slug for navigation
  const allImages = designs.flatMap((design) =>
    design.images.map((img) => ({
      url: img,
      slug: design.slug,
      category: design.category,
      title: design.title,
      style: design.style,
      isAluminium:
        (design.category.toLowerCase().includes("aluminium") ||
          design.title.toLowerCase().includes("aluminium")) &&
        !img.toLowerCase().includes("modular kitchen.jpeg"),
    }))
  );

  // Filter images based on selected tag
  const filteredImages = allImages.filter((item) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Aluminium") return item.isAluminium;
    if (activeCategory === "Doors & Windows") {
      return item.category === "Doors & Windows" || item.category === "Doors" || item.category === "Windows";
    }
    return item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNavigateLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const imageUrls = filteredImages.map((img) => img.url);

  return (
    <div className="space-y-12">
      {/* Horizontal filter tabs */}
      <div className="flex items-center overflow-x-auto no-scrollbar space-x-3 py-2 border-b border-brand-stone/40 select-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors shrink-0 ${
              activeCategory === cat
                ? "bg-brand-charcoal text-white"
                : "bg-white border border-brand-stone/40 text-brand-charcoal hover:border-brand-champagne hover:text-brand-champagne"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of images */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-20 bg-white border border-brand-stone/40">
          <p className="text-sm text-gray-500">No images found for this category.</p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.url + "-" + idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="group relative aspect-[4/3] bg-brand-stone/20 overflow-hidden border border-brand-stone/40 shadow-sm"
              >
                {/* Main Link navigates to different page */}
                <Link href={`/designs/${img.slug}`} className="block w-full h-full relative cursor-pointer">
                  <SmoothImage
                    src={img.url}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-champagne">
                        {img.style}
                      </p>
                      <h3 className="text-sm font-semibold tracking-wide font-display line-clamp-1">
                        {img.title}
                      </h3>
                      <p className="text-[10px] text-gray-300 mt-1 uppercase tracking-widest font-semibold flex items-center">
                        View Details &rarr;
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Floating zoom button triggers Lightbox in the same page context */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleOpenLightbox(idx);
                  }}
                  className="absolute top-3 right-3 z-10 w-8 h-8 bg-brand-charcoal/80 hover:bg-brand-champagne text-white hover:text-brand-charcoal flex items-center justify-center rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md cursor-pointer"
                  title="View Fullscreen"
                  aria-label="View Fullscreen"
                >
                  <Maximize2 size={14} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Lightbox widget integration */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        onClose={handleCloseLightbox}
        images={imageUrls}
        currentIndex={lightboxIndex || 0}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
