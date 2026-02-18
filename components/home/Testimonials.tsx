"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Adebayo Okonkwo",
      company: "Golden Harvest Foods Ltd",
      role: "Managing Director",
      content: "Fagars Fasheg has been instrumental in helping us export our agricultural products to international markets. Their attention to quality standards and timely delivery is exceptional. We've grown our export business by 300% since partnering with them.",
      rating: 5,
      initials: "AO",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Chen Wei",
      company: "Pacific Electronics Trading",
      role: "Procurement Manager",
      content: "We've been sourcing electronics through Fagars Fasheg for over 2 years. Their reliability and competitive pricing have made them our preferred import partner in West Africa. The quality assurance process is top-notch.",
      rating: 5,
      initials: "CW",
      color: "from-green-600 to-green-800",
    },
    {
      name: "Amaka Nwosu",
      company: "Fresh Foods Distribution",
      role: "CEO",
      content: "The professionalism and efficiency of Fagars Fasheg is unmatched. They handle everything from sourcing to delivery, making international trade stress-free for our business. Their customer service is outstanding.",
      rating: 5,
      initials: "AN",
      color: "from-orange-600 to-orange-800",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-yellow-500" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our
            <span className="block mt-2 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from businesses who trust us with their trade needs
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <Card className="border-2 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-12">
                {/* Quote Icon */}
                <Quote className="w-16 h-16 text-brand-blue opacity-20 mb-6" />

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-6">
                  {/* Avatar */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${testimonials[activeIndex].color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-white font-bold text-2xl">
                      {testimonials[activeIndex].initials}
                    </span>
                  </div>
                  
                  {/* Details */}
                  <div>
                    <p className="font-bold text-xl text-gray-900">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-brand-blue font-semibold">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 -mx-20 pointer-events-none">
              <Button
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full bg-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 pointer-events-auto"
                variant="outline"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 pointer-events-auto"
                variant="outline"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-12 bg-brand-blue' 
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "10K+", label: "Shipments" },
              { value: "50+", label: "Countries" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-brand-blue mb-2">{stat.value}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
