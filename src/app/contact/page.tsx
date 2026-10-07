import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Interior Designer in Bhubaneswar – Public Demand Interior",
  description: "Contact Public Demand Interior in Bhubaneswar, Odisha for modular kitchens, aluminium wardrobes, false ceilings, and turnkey 2BHK/3BHK interior design. Visit our studio or call/WhatsApp +91 8144823652 for a free site visit.",
  keywords: [
    "interior designer contact Bhubaneswar",
    "interior designer near Patia Bhubaneswar",
    "interior design company address Bhubaneswar",
    "modular kitchen consultation Bhubaneswar",
    "false ceiling estimate Bhubaneswar",
    "interior contractor phone number Bhubaneswar",
    "WhatsApp interior designer Bhubaneswar"
  ],
};

export default function ContactPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-brand-charcoal text-white py-20 relative select-none">
        <div className="absolute inset-0">
          <Image
            src="/images/Retail shop design.jpeg"
            alt="Contact Public Demand Interior Bhubaneswar"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
            Bhubaneswar Local Studio & Consultation
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-display text-white tracking-wide">
            Contact Public Demand Interior
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Get expert site consultation, 3D interior design layouts, and material estimates for your home in Bhubaneswar, Patia, Chandrasekharpur, Cuttack & Puri.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct channels & Address */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-light font-display text-brand-charcoal">
                Direct Contact & Studio Location
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Connect with our team to schedule a site inspection visit at your flat, apartment, or villa in Bhubaneswar.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address card */}
              <div className="p-6 bg-white border border-brand-stone/40 flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center text-brand-charcoal shrink-0 mt-1">
                  <MapPin size={20} className="text-brand-champagne" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Bhubaneswar Head Office / Workshop</p>
                  <p className="text-base font-semibold text-brand-charcoal mt-1">
                    Public Demand Interior
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-0.5">
                    Bhubaneswar, Odisha - 751024
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Serving Patia, Chandrasekharpur, Jaydev Vihar, Saheed Nagar, Khandagiri, Cuttack & Puri
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="p-6 bg-white border border-brand-stone/40 flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center text-brand-charcoal shrink-0">
                  <Phone size={20} className="text-brand-champagne" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Call Coordinator</p>
                  <a href="tel:8144823652" className="text-lg font-semibold text-brand-charcoal hover:text-brand-champagne transition-colors">
                    +91 8144823652
                  </a>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="p-6 bg-white border border-brand-stone/40 flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="fill-current" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">WhatsApp Instant Enquiry</p>
                  <a
                    href="https://wa.me/918144823652?text=Hello%20Public Demand%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project%20in%20Bhubaneswar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-brand-charcoal hover:text-brand-champagne transition-colors"
                  >
                    +91 8144823652
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-6 bg-white border border-brand-stone/40 flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center text-brand-charcoal shrink-0">
                  <Clock size={20} className="text-brand-champagne" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Operating Hours</p>
                  <p className="text-sm font-semibold text-brand-charcoal">
                    Monday - Sunday: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-brand-stone/20 border border-brand-stone/40 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                Prime Localities & Apartment Societies Covered
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Site consultation and execution services available in Patia, Chandrasekharpur, Jaydev Vihar, Saheed Nagar, Nayapalli, Khandagiri, Dumduma, Sundarpada, DN Regalia, Tata Ariana, Assotech One, Falcon Residency, Royal Lagoon, Z1 Apartments, Metro Satellite City & surrounding areas.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="space-y-4">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-champagne">
              Find Us On Google Maps
            </span>
            <h3 className="text-2xl font-light font-display text-brand-charcoal">
              Bhubaneswar Service Area Map
            </h3>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden border border-brand-stone/40 shadow-sm">
            <iframe
              title="Public Demand Interior Bhubaneswar Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.53384234057!2d85.74836484838612!3d20.30103138883675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

