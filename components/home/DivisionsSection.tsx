import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, UtensilsCrossed, Zap, ArrowRight } from "lucide-react";

export default function DivisionsSection() {
  const divisions = [
    {
      icon: Sprout,
      title: "Farm Division",
      description:
        "Focused on sourcing, processing, and exporting premium agricultural produce that meet global standards.",
      link: "/divisions/farm",
      image: "/images/hero/farm-hero.jpg",
      color: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "hover:border-green-600",
      overlayColor: "from-green-900/90 to-green-800/80",
    },
    {
      icon: UtensilsCrossed,
      title: "Food Division",
      description:
        "Supplying high-quality, locally sourced and imported food products to nourish homes and businesses worldwide.",
      link: "/divisions/food",
      image: "/images/hero/food-hero.jpg",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "hover:border-orange-600",
      overlayColor: "from-orange-900/90 to-orange-800/80",
    },
    {
      icon: Zap,
      title: "Electronics Division",
      description:
        "Importing and distributing durable, cutting-edge electronic devices and appliances from trusted global brands.",
      link: "/divisions/electronics",
      image: "/images/hero/electronics-hero.jpg",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "hover:border-blue-600",
      overlayColor: "from-blue-900/90 to-blue-800/80",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Divisions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized expertise across three key sectors
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <Card
                key={index}
                className={`border-2 ${division.borderColor} hover:shadow-xl transition-all duration-300 group overflow-hidden`}
              >
                <CardContent className="p-0">
                  {/* Image Section with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={division.image}
                      alt={division.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${division.overlayColor}`}></div>
                    
                    {/* Icon on Image */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {division.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {division.description}
                    </p>

                    {/* Learn More Button */}
                    <Button
                      asChild
                      variant="ghost"
                      className={`${division.color} hover:bg-transparent group-hover:translate-x-2 transition-transform p-0`}
                    >
                      <Link href={division.link} className="flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
