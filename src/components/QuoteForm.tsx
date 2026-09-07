"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    propertyType: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const servicesList = [
    "Aluminium Modular Kitchen",
    "Modular Kitchen",
    "Aluminium Wardrobe",
    "Cupboard & Storage",
    "TV Unit",
    "Bedroom Interior",
    "Living Room Interior",
    "False Ceiling",
    "Aluminium Doors & Windows",
    "Sliding Doors & Partitions",
    "Office Interior",
    "Home Decoration / Complete Interior",
    "Other Services",
  ];

  const propertyTypes = [
    "1BHK Apartment",
    "2BHK Apartment",
    "3BHK Apartment",
    "Independent Villa / House",
    "Office WorkSpace",
    "Commercial Store",
    "Renovation Site",
    "Other",
  ];

  const budgetRanges = [
    "Under ₹1 Lakh",
    "₹1 Lakh - ₹3 Lakhs",
    "₹3 Lakhs - ₹5 Lakhs",
    "₹5 Lakhs - ₹10 Lakhs",
    "₹10 Lakhs+",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s+-]/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-digit number";
    }
    if (!formData.location.trim()) tempErrors.location = "Location is required";
    if (!formData.propertyType) tempErrors.propertyType = "Select property type";
    if (!formData.service) tempErrors.service = "Select required service";
    if (!formData.budget) tempErrors.budget = "Select budget range";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the WhatsApp message format
    const textMsg = `Hello Public Demand Interior, I would like to request an estimate quote.
    
*Details:*
- *Name:* ${formData.name.trim()}
- *Phone:* ${formData.phone.trim()}
- *Location:* ${formData.location.trim()}
- *Property:* ${formData.propertyType}
- *Service:* ${formData.service}
- *Budget Range:* ${formData.budget}
${formData.message.trim() ? `- *Message/Notes:* ${formData.message.trim()}` : ""}`;

    const encoded = encodeURIComponent(textMsg);
    const waLink = `https://wa.me/918144823652?text=${encoded}`;
    
    // Open WhatsApp link
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-brand-stone/40 p-6 sm:p-10 shadow-sm space-y-6">
      <div className="text-center sm:text-left space-y-2">
        <h3 className="text-2xl font-semibold tracking-wide font-display text-brand-charcoal">
          Request an Estimate
        </h3>
        <p className="text-sm text-gray-500 max-w-md">
          Fill out this form, and send the generated quotation details directly to us on WhatsApp to start planning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`border px-4 py-2.5 text-sm bg-brand-beige/20 focus:outline-none focus:ring-1 focus:ring-brand-champagne transition-all ${
              errors.name ? "border-red-500" : "border-brand-stone"
            }`}
          />
          {errors.name && <span className="text-[10px] text-red-500 font-medium">{errors.name}</span>}
        </div>

        {/* Phone */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 8144823652"
            className={`border px-4 py-2.5 text-sm bg-brand-beige/20 focus:outline-none focus:ring-1 focus:ring-brand-champagne transition-all ${
              errors.phone ? "border-red-500" : "border-brand-stone"
            }`}
          />
          {errors.phone && <span className="text-[10px] text-red-500 font-medium">{errors.phone}</span>}
        </div>

        {/* Location */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
            Project Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Jayadev Vihar, Bhubaneswar"
            className={`border px-4 py-2.5 text-sm bg-brand-beige/20 focus:outline-none focus:ring-1 focus:ring-brand-champagne transition-all ${
              errors.location ? "border-red-500" : "border-brand-stone"
            }`}
          />
          {errors.location && <span className="text-[10px] text-red-500 font-medium">{errors.location}</span>}
        </div>

        {/* Property Type */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="propertyType" className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
            Property Type <span className="text-red-500">*</span>
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className={`border px-4 py-2.5 text-sm bg-brand-beige/20 focus:outline-none focus:ring-1 focus:ring-brand-champagne transition-all ${
              errors.propertyType ? "border-red-500" : "border-brand-stone"
            }`}
          >
            <option value="">Select Property Type</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.propertyType && <span className="text-[10px] text-red-500 font-medium">{errors.propertyType}</span>}
        </div>

        {/* Service */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
            Required Service <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`border px-4 py-2.5 text-sm bg-brand-beige/20 focus:outline-none focus:ring-1 focus:ring-brand-champagne transition-all ${
              errors.service ? "border-red-500" : "border-brand-stone"
            }`}
          >
            <option value="">Select Service</option>
            {servicesList.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <span className="text-[10px] text-red-500 font-medium">{errors.service}</span>}
        </div>

        {/* Budget */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
            Estimated Budget <span className="text-red-500">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`border px-4 py-2.5 text-sm bg-brand-beige/20 focus:outline-none focus:ring-1 focus:ring-brand-champagne transition-all ${
              errors.budget ? "border-red-500" : "border-brand-stone"
            }`}
          >
            <option value="">Select Budget Range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {errors.budget && <span className="text-[10px] text-red-500 font-medium">{errors.budget}</span>}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
          Tell us about your space (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. Dimensions of my kitchen are 10x8 ft, I need sliding soft-close racks..."
          className="border border-brand-stone px-4 py-2.5 text-sm bg-brand-beige/20 focus:outline-none focus:ring-1 focus:ring-brand-champagne transition-all"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-charcoal hover:bg-brand-champagne text-white py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <MessageCircle size={16} className="fill-current" />
        <span>Generate & Enquire on WhatsApp</span>
      </button>
    </form>
  );
}
