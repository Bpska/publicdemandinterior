import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Public Demand Interior for premium modular kitchens, wardrobes, and aluminium work in Bhubaneswar, Cuttack, and Puri. Call or WhatsApp 8144823652.",
};

export default function ContactPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Header Banner */}
      <section className="bg-brand-charcoal text-white py-20 relative select-none">
        <div className="absolute inset-0">
          <Image
            src="/images/Retail shop design.jpeg"
            alt="Contact us background"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-display text-white tracking-wide">
            Contact Public Demand Interior
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Have questions about materials, budgets, or design workflows? Let&apos;s discuss your project. Submit an enquiry to direct-message us on WhatsApp or call our line.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-light font-display text-brand-charcoal">
                Direct Communication
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                We operate as a direct site fabrication service across Odisha. You can coordinate meetings and site inspection visits by using these direct channels.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone card */}
              <div className="p-6 bg-white border border-brand-stone/40 flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center text-brand-charcoal shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Call Coordinator</p>
                  <a href="tel:8144823652" className="text-lg font-semibold text-brand-charcoal hover:text-brand-champagne transition-colors">
                    8144823652
                  </a>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="p-6 bg-white border border-brand-stone/40 flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="fill-current" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">WhatsApp Direct</p>
                  <a
                    href="https://wa.me/918144823652?text=Hello%20Public Demand%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-brand-charcoal hover:text-brand-champagne transition-colors"
                  >
                    8144823652
                  </a>
                </div>
              </div>

              {/* YouTube card */}
              <div className="p-6 bg-white border border-brand-stone/40 flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-charcoal text-white rounded-full flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.002 3.002 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Official Channel</p>
                  <a
                    href="https://youtube.com/@Publicdemandinterior"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-brand-charcoal hover:text-brand-champagne transition-colors"
                  >
                    @Publicdemandinterior
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-brand-stone/20 border border-brand-stone/40 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                Coverage Area
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Direct site consultation and execution services are available in Bhubaneswar, Cuttack, Puri, Khurda, and nearby areas across Odisha.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
