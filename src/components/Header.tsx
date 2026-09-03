"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Designs", path: "/designs" },
    { name: "Projects", path: "/projects" },
    { name: "Process", path: "/how-we-work" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-brand-beige/85 backdrop-blur-md py-3 shadow-md border-b border-brand-stone/30"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col group">
              <span className="text-xl sm:text-2xl font-semibold tracking-wider font-display text-brand-charcoal transition-colors group-hover:text-brand-champagne">
                PUBLIC DEMAND
              </span>
              <span className="text-[10px] tracking-[0.25em] text-brand-champagne uppercase -mt-1 font-sans">
                Interiors
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-champagne relative py-1 ${
                      isActive ? "text-brand-champagne" : "text-brand-charcoal/80"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-champagne" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/quote"
                className="bg-brand-charcoal text-white hover:bg-brand-champagne px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Header Elements: WhatsApp and Hamburger */}
            <div className="flex lg:hidden items-center space-x-4">
              {/* Floating style WhatsApp icon right in header */}
              <a
                href="https://wa.me/918144823652?text=Hello%20Public Demand%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
                className="text-brand-champagne hover:text-brand-charcoal transition-colors p-2"
              >
                <MessageCircle size={24} className="fill-current" />
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
                className="text-brand-charcoal hover:text-brand-champagne transition-colors p-2"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-charcoal/40 backdrop-blur-sm lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-brand-beige shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-out border-l border-brand-stone/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-lg font-semibold font-display tracking-wider text-brand-charcoal">
                NAVIGATION
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-charcoal hover:text-brand-champagne transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation links inside mobile drawer */}
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={handleLinkClick}
                    className={`text-base font-semibold tracking-wider uppercase transition-colors hover:text-brand-champagne ${
                      isActive ? "text-brand-champagne border-l-2 border-brand-champagne pl-3" : "text-brand-charcoal/80 pl-3"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto space-y-4 pt-6 border-t border-brand-stone/50">
              <Link
                href="/quote"
                onClick={handleLinkClick}
                className="block text-center bg-brand-charcoal text-white hover:bg-brand-champagne py-3 px-4 text-sm font-semibold tracking-wider uppercase transition-colors"
              >
                Get Free Quote
              </Link>
              
              <a
                href="tel:8144823652"
                className="flex items-center justify-center space-x-2 text-brand-charcoal hover:text-brand-champagne py-2 text-sm font-medium tracking-wide uppercase transition-colors"
              >
                <Phone size={16} />
                <span>Call 8144823652</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
