import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import { MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a cost estimation for your home interior project. Pre-fill your room parameters and receive a direct estimate on WhatsApp.",
};

export default function QuotePage() {
  return (
    <div className="space-y-20 py-12">
      {/* Header Banner */}
      <section className="bg-brand-charcoal text-white py-20 relative select-none">
        <div className="absolute inset-0">
          <Image
            src="/images/Aluminium wardrobe.jpeg"
            alt="Quotation background"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Cost Planner
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-display text-white tracking-wide">
            Request an Estimate
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Fill in your room parameters, property details, and preferred service. The system will pre-fill a detailed inquiry, allowing you to direct-message our team on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Instructions */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-light font-display text-brand-charcoal">
              How Estimation Works
            </h2>
            
            <div className="space-y-4 text-sm text-gray-500">
              <p>
                1. **Submit Details:** Complete the estimate form fields.
              </p>
              <p>
                2. **WhatsApp Redirection:** The form constructs a structured text message and prompts your browser to open WhatsApp.
              </p>
              <p>
                3. **Site Measurement:** Our project estimators review the specs, coordinate a site visit to take exact sizes, and finalize the layout blueprint.
              </p>
              <p>
                4. **Final Quotation:** We send a detailed final bill of quantities showing accurate thicknesses and brand names.
              </p>
            </div>

            <div className="p-6 bg-brand-stone/20 border border-brand-stone/40 space-y-4">
              <div className="flex items-start space-x-2 text-brand-charcoal font-semibold text-xs uppercase tracking-wider">
                <HelpCircle size={16} className="text-brand-champagne shrink-0" />
                <span>Need immediate help?</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                If you prefer not to fill out forms, you can direct-chat or call us to talk immediately with our lead design specialist.
              </p>
              <a
                href="https://wa.me/918144823652?text=Hello%20Public Demand%20Interiors%2C%20I%20would%20like%20to%20request%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-brand-charcoal text-white hover:bg-brand-champagne text-xs font-semibold px-4 py-2.5 transition-colors"
              >
                <MessageCircle size={14} className="fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
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
