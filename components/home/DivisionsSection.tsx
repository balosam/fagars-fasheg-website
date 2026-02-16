"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, UtensilsCrossed, Zap, ArrowRight, TrendingUp } from "lucide-react";

export default function DivisionsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const divisions = [
    {
      icon: Sprout,
      title: "Farm Division",
      description: "Premium agricultural exports meeting international standards. From cocoa to cashews, we deliver Nigeria's finest produce globally.",
      image: "/images/hero/farm-hero.jpg",
      link: "/divisions/farm",
      gradient: "from-green-600 to-green-800",
      products: ["Cocoa", "Palm Oil", "Cashew", "Coffee"],
    },
    {
      icon: UtensilsCrossed,
      title: "Food Division",
      description: "Quality food products with strict hygiene standards. Sourcing and distributing staples and specialty items worldwide.",
      image: "/images/hero/food-hero.jpg",
      link: "/divisions/food",
      gradient: "from-orange-600 to-orange-800",
      products: ["Rice", "Beans", "Pasta", "Spices"],
    },
    {
      icon: Zap,
      title: "Electronics Division",
      description: "Cutting-edge technology from trusted global brands. Authentic products with full support and warranty services.",
      image: "/images/hero/electronics-hero.jpg",
      link: "/divisions/electronics",
      gradient: "from-blue-600 to-blue-800",
      products: ["Smartphones", "Laptops", "TVs", "Appliances"],
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-brand-blue rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Specialized Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="block mt-2 bg-gradient-to-r from-brand-blue via-green-600 to-brand-green bg-clip-text text-transparent">
              Three Divisions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated teams for each sector ensuring expert knowledge and quality service
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group"
              >
                <Card className="border-2 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden h-full rounded-3xl">
                  <CardContent className="p-0">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={division.image}
                        alt={division.title}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          isHovered ? 'scale-110' : 'scale-100'
                        }`}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}></div>
                      
                      {/* Icon Badge */}
                      <div className="absolute top-6 left-6">
                        <div className={`w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center transform transition-all duration-500 ${
                          isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                        }`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Title on Image */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                          {division.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {division.description}
                      </p>

                      {/* Products Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {division.products.map((product, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                          >
                            {product}
                          </span>
                        ))}
                      </div>

                      {/* Learn More Button */}
                      <Button
                        asChild
                        variant="ghost"
                        className={`w-full justify-between group-hover:bg-gradient-to-r group-hover:${division.gradient} group-hover:text-white transition-all duration-300 rounded-xl h-12`}
                      >
                        <Link href={division.link} className="flex items-center justify-between">
                          <span className="font-semibold">Explore Division</span>
                          <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                            isHovered ? 'translate-x-2' : ''
                          }`} />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Statistics Bar */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">100+</div>
            <p className="text-gray-400">Products Traded</p>
          </div>
          <div className="text-center border-l border-r border-gray-700">
            <div className="text-5xl font-bold text-white mb-2">3</div>
            <p className="text-gray-400">Specialized Divisions</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">24/7</div>
            <p className="text-gray-400">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
