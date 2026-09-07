"use client";

import React, { useState } from "react";
import { designs } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import { motion, AnimatePresence } from "framer-motion";

export default function DesignCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRoom, setSelectedRoom] = useState("All");
  const [selectedStyle, setSelectedStyle] = useState("All");

  const categories = ["All", "Kitchen", "Bedroom", "Living", "Wardrobe", "TV Unit", "False Ceiling", "Doors & Windows", "Partitions", "Office"];
  const rooms = ["All", "Kitchen", "Bedroom", "Living Room", "Office"];
  const styles = ["All", "Modern", "Minimal", "Contemporary", "Luxury", "Traditional", "Industrial", "Scandinavian"];

  // Filter logic
  const filteredDesigns = designs.filter((item) => {
    const matchCat = selectedCategory === "All" || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchRoom = selectedRoom === "All" || item.room.toLowerCase() === selectedRoom.toLowerCase();
    const matchStyle = selectedStyle === "All" || item.style === selectedStyle;
    return matchCat && matchRoom && matchStyle;
  });

  return (
    <div className="space-y-16">
      {/* Filter panel */}
      <section className="select-none">
        <div className="bg-white border border-brand-stone/40 p-6 space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
            Filters
          </h3>

          <div className="space-y-4 text-xs font-bold uppercase tracking-wider">
            {/* Category Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-gray-400 shrink-0 min-w-[100px]">Category:</span>
              <div className="flex items-center overflow-x-auto no-scrollbar gap-2 py-1">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className={`px-3 py-1.5 shrink-0 transition-colors ${
                      selectedCategory === c
                        ? "bg-brand-champagne text-brand-charcoal"
                        : "bg-brand-stone/20 hover:bg-brand-stone text-brand-charcoal"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Room Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-t border-brand-stone/20 pt-4">
              <span className="text-gray-400 shrink-0 min-w-[100px]">Room:</span>
              <div className="flex items-center overflow-x-auto no-scrollbar gap-2 py-1">
                {rooms.map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedRoom(r)}
                    className={`px-3 py-1.5 shrink-0 transition-colors ${
                      selectedRoom === r
                        ? "bg-brand-champagne text-brand-charcoal"
                        : "bg-brand-stone/20 hover:bg-brand-stone text-brand-charcoal"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-t border-brand-stone/20 pt-4">
              <span className="text-gray-400 shrink-0 min-w-[100px]">Design Style:</span>
              <div className="flex items-center overflow-x-auto no-scrollbar gap-2 py-1">
                {styles.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedStyle(s)}
                    className={`px-3 py-1.5 shrink-0 transition-colors ${
                      selectedStyle === s
                        ? "bg-brand-champagne text-brand-charcoal"
                        : "bg-brand-stone/20 hover:bg-brand-stone text-brand-charcoal"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid listing */}
      <section>
        {filteredDesigns.length === 0 ? (
          <div className="text-center py-20 bg-white border border-brand-stone/40">
            <p className="text-sm text-gray-500">No designs match your filter selections.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedRoom("All");
                setSelectedStyle("All");
              }}
              className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-champagne hover:text-brand-charcoal transition-colors underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredDesigns.map((design) => (
                <DesignCard key={design.slug} design={design} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </div>
  );
}
