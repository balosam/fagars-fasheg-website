"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Ship, Plane, Truck, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Ship,
      title: "Importation",
      description: "Bringing world-class products to your doorstep with seamless customs clearance and quality assurance.",
      color: "from-blue-600 to-blue-800",
      hoverColor: "from-blue-500 to-blue-700",
      accentColor: "text-blue-400",
      link: "/services#importation"
    },
    {
      icon: Plane,
      title: "Exportation",
      description: "Connecting Nigeria's finest products to global markets with international certifications and reliable delivery.",
      color: "from-green-600 to-green-800",
      hoverColor: "from-green-500 to-green-700",
      accentColor: "text-green-400",
      link: "/services#exportation"
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description: "End-to-end supply chain solutions with real-time tracking and professional warehousing services.",
      color: "from-orange-600 to-orange-800",
      hoverColor: "from-orange-500 to-orange-700",
      accentColor: "text-orange-400",
      link: "/services#logistics"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-brand-blue rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Core
            <span className="block mt-2 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive trade solutions designed to power your global business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <Link 
                key={index} 
                href={service.link}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative group h-full">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-500`}></div>
                  
                  {/* Card */}
                  <Card className="relative h-full border-2 border-gray-200 hover:border-transparent rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                    <CardContent className="p-8">
                      {/* Icon Container */}
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transform transition-all duration-500 ${
                        isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                      } shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="flex items-center gap-2 text-brand-blue font-semibold group-hover:gap-4 transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight className={`w-5 h-5 ${service.accentColor} transition-transform duration-300 ${
                          isHovered ? 'translate-x-2' : ''
                        }`} />
                      </div>

                      {/* Bottom Accent */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform origin-left transition-transform duration-500 ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                      }`}></div>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-blue to-blue-700 hover:from-blue-700 hover:to-brand-blue text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
