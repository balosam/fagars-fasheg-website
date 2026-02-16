"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package, TrendingUp, Globe2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Globe2, value: "50+", label: "Countries Served" },
    { icon: Package, value: "10K+", label: "Shipments Delivered" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Import Export Excellence"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
          quality={90}
        />
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-green-900/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.3),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Trust Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium mb-8 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Shield className="w-4 h-4 text-green-300 animate-pulse" />
            <span>Trusted by 500+ Businesses Worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transform transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block drop-shadow-2xl">Delivering Beyond</span>
            <span className="block mt-3 bg-gradient-to-r from-blue-300 via-white to-green-300 bg-clip-text text-transparent drop-shadow-2xl">
              Borders
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg transform transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Your trusted partner in{" "}
            <span className="text-green-300 font-semibold">international trade</span> excellence
            across farm produce, food products, and electronics.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-blue hover:bg-blue-50 px-10 py-7 text-lg font-semibold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 group rounded-full"
            >
              <Link href="/services" className="flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-7 text-lg font-semibold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 rounded-full"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transform transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <Icon className="w-10 h-10 text-green-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-5xl font-bold text-white mb-2 font-mono">{stat.value}</div>
                    <p className="text-blue-200">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-white/60 text-xs font-medium">Scroll</span>
        </div>
      </div>
    </section>
  );
}
