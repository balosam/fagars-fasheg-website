"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Import Export Excellence"
          fill
          className="object-cover brightness-50"
          priority
          quality={90}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-green-900/70 z-0"></div>

      {/* Background Pattern (subtle) */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-brand-blue rounded-full text-sm font-medium mb-6">
          <Package className="w-4 h-4" />
          <span>Trusted Import & Export Partner</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Delivering Beyond
          <span className="block mt-2">
            <span className="text-blue-300">Borders</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Your trusted partner in import and export excellence across{" "}
          <span className="text-green-300 font-semibold">farm produce</span>,{" "}
          <span className="text-green-300 font-semibold">food products</span>, and{" "}
          <span className="text-blue-300 font-semibold">electronics</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg shadow-xl"
          >
            <Link href="/services" className="flex items-center gap-2">
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-6 text-lg shadow-xl"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-blue-300 mb-2">Global</div>
            <p className="text-blue-100">Worldwide Reach</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-green-300 mb-2">Quality</div>
            <p className="text-green-100">Premium Products</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-blue-300 mb-2">Reliable</div>
            <p className="text-blue-100">Fast Delivery</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
