"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

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
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-200 hover:scale-110 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        style={{ animation: "wa-bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both" }}
      >
        <MessageCircle size={30} className="fill-current" />
      </a>
      <style>{`
        @keyframes wa-bounce-in {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          a[aria-label="Chat on WhatsApp"] {
            animation: none;
            transition: none;
          }
          a[aria-label="Chat on WhatsApp"]:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
