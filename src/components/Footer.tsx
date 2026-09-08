import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Designs", path: "/designs" },
    { name: "Projects", path: "/projects" },
    { name: "How We Work", path: "/how-we-work" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const featuredServices = [
    { name: "Aluminium Modular Kitchen", path: "/services/aluminium-modular-kitchen" },
    { name: "Modular Kitchen", path: "/services/modular-kitchen" },
    { name: "Aluminium Wardrobe", path: "/services/aluminium-wardrobe" },
    { name: "False Ceiling & Lighting", path: "/services/false-ceiling" },
    { name: "Home Decoration & Complete Interior", path: "/services/home-decoration-complete-interior" },
    { name: "Sliding Doors & Partitions", path: "/services/sliding-doors-partitions" },
  ];

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t border-brand-stone/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group" aria-label="Public Demand Interior Home">
              <Image
                src="/images/logo-light.png"
                alt="Public Demand Interior Logo"
                width={220}
                height={158}
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your Dream Home, Our Design! Premium custom modular kitchens, wardrobes, and high-end aluminium space partitioning.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/918144823652?text=Hello%20Public Demand%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-champagne hover:border-brand-champagne transition-all duration-300 group"
              >
                <MessageCircle size={18} className="text-gray-400 group-hover:text-brand-charcoal fill-current" />
              </a>
              <a
                href="tel:8144823652"
                aria-label="Call Us"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-champagne hover:border-brand-champagne transition-all duration-300 group"
              >
                <Phone size={18} className="text-gray-400 group-hover:text-brand-charcoal" />
              </a>
              <a
                href="https://youtube.com/@raghunathainteriors?si=UrEZN1pW4Zqmzs3o"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-champagne hover:border-brand-champagne transition-all duration-300 group"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-gray-400 group-hover:text-brand-charcoal transition-colors">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.002 3.002 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/raghunathinteriors?stkn=MXVnbmNqZG53enZzMA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-champagne hover:border-brand-champagne transition-all duration-300 group"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-brand-charcoal transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1DTCp7yMQF/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-champagne hover:border-brand-champagne transition-all duration-300 group"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-brand-charcoal transition-colors">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold tracking-widest text-brand-champagne uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-brand-champagne text-sm transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold tracking-widest text-brand-champagne uppercase">
              Our Services
            </h3>
            <ul className="space-y-3">
              {featuredServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="text-gray-400 hover:text-brand-champagne text-sm transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold tracking-widest text-brand-champagne uppercase">
              Direct Contact
            </h3>
            <div className="space-y-4">
              <a
                href="tel:8144823652"
                className="flex items-center space-x-3 text-gray-400 hover:text-brand-champagne group"
              >
                <Phone size={18} className="text-brand-champagne" />
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest">Call Anytime</p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-champagne transition-colors">8144823652</p>
                </div>
              </a>

              <a
                href="https://wa.me/918144823652?text=Hello%20Public Demand%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-brand-champagne group"
              >
                <MessageCircle size={18} className="text-brand-champagne fill-current" />
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest">WhatsApp Enquiries</p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-champagne transition-colors">8144823652</p>
                </div>
              </a>

              <a
                href="https://youtube.com/@raghunathainteriors?si=UrEZN1pW4Zqmzs3o"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-brand-champagne group"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-brand-champagne shrink-0 mt-0.5">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.002 3.002 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest">YouTube Channel</p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-champagne transition-colors flex items-center">
                    @raghunathainteriors
                    <ArrowUpRight size={14} className="ml-1 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/raghunathinteriors?stkn=MXVnbmNqZG53enZzMA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-brand-champagne group"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-champagne shrink-0 mt-0.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest">Instagram</p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-champagne transition-colors flex items-center">
                    @raghunathinteriors
                    <ArrowUpRight size={14} className="ml-1 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/share/1DTCp7yMQF/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-brand-champagne group"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-champagne shrink-0 mt-0.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest">Facebook</p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-champagne transition-colors flex items-center">
                    Follow us on Facebook
                    <ArrowUpRight size={14} className="ml-1 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} Public Demand Interior. All Rights Reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs">
            <span>Modern Interior & Aluminium Specialists</span>
            <span className="hidden sm:inline text-gray-700">•</span>
            <p className="text-gray-400">
              Designed & Developed by{" "}
              <a
                href="https://logisaaar.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-champagne font-semibold hover:underline"
              >
                logisaaar.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
