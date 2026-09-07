"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const pathname = usePathname();

  // Customize message based on current page
  let message = "Hello Public Demand Interior, I would like to discuss my interior project.";
  if (pathname.includes("/services/")) {
    const serviceSlug = pathname.split("/").pop();
    const serviceName = serviceSlug
      ? serviceSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
      : "";
    message = `Hello Public Demand Interior, I would like to enquire about your ${serviceName} services.`;
  } else if (pathname.includes("/designs/")) {
    const designSlug = pathname.split("/").pop();
    const designName = designSlug
      ? designSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
      : "";
    message = `Hello Public Demand Interior, I am interested in the design style: ${designName}.`;
  } else if (pathname.includes("/projects/")) {
    const projectSlug = pathname.split("/").pop();
    const projectName = projectSlug
      ? projectSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
      : "";
    message = `Hello Public Demand Interior, I just saw your project: ${projectName} and would like to discuss a similar layout.`;
  }

  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/918144823652?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-24 sm:bottom-6 right-6 z-40">
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <MessageCircle size={30} className="fill-current" />
      </motion.a>
    </div>
  );
}
