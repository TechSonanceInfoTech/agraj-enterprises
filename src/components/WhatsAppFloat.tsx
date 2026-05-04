"use client";

import { CONFIG } from "@/config";

export default function WhatsAppFloat() {
  return (
    <a
      href={CONFIG.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 whatsapp-float group"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-2xl" aria-hidden="true"></i>
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
      </span>
    </a>
  );
}
