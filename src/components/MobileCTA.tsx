"use client";

import React from "react";
import Link from "next/link";
import { Home, LayoutGrid, Image as ImageIcon, FileText, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MobileCTA() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: LayoutGrid },
    { name: "Gallery", path: "/gallery", icon: ImageIcon },
    { name: "Quote", path: "/quote", icon: FileText },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden select-none">
      <nav className="bg-brand-charcoal/95 backdrop-blur-md border border-white/10 rounded-2xl py-2 px-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-around">
        {navItems.map((item) => {
          const ActiveIcon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-300 relative ${
                active 
                  ? "text-brand-champagne scale-105" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ActiveIcon 
                size={20} 
                className={`transition-all duration-300 ${active ? "stroke-[2.5px] scale-110" : "stroke-[1.8px]"}`} 
              />
              <span className={`text-[9px] font-bold uppercase tracking-wider mt-1 transition-all duration-300 ${active ? "opacity-100" : "opacity-75"}`}>
                {item.name}
              </span>
              {active && (
                <span className="absolute -bottom-1.5 w-1 h-1 bg-brand-champagne rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
