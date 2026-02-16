"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "2348034620625"; // Without the + sign for WhatsApp API
  const message = "Hello! I'm interested in your import/export services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
      </a>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}
