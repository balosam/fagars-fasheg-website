import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Globe, Award, TrendingUp, Leaf, ArrowRight } from "lucide-react";

export default function FarmDivisionPage() {
  const products = [
    { name: "Cocoa", image: "/images/products/farm/cocoa.jpg" },
    { name: "Palm Oil", image: "/images/products/farm/palm-oil.jpg" },
    { name: "Cashew Nuts", image: "/images/products/farm/cashew.jpg" },
    { name: "Sesame Seeds", image: "/images/products/farm/sesame.jpg" },
    { name: "Ginger", image: "/images/products/farm/ginger.jpg" },
    { name: "Hibiscus", image: "/images/products/farm/hibiscus.jpg" },
    { name: "Coffee Beans", image: "/images/products/farm/coffee.jpg" },
    { name: "Shea Butter", image: "/images/products/farm/shea-butter.jpg" },
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Standards",
      description: "Our agricultural produce meets international quality and safety certifications.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Sourced from the finest farms with rigorous quality control processes.",
    },
    {
      icon: TrendingUp,
      title: "Export Ready",
      description: "Properly processed, packaged, and documented for international markets.",
    },
    {
      icon: Leaf,
      title: "Sustainable Sourcing",
      description: "Committed to environmentally responsible and ethical farming practices.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/farm-hero.jpg"
            alt="Farm Division - Agricultural Excellence"
            fill
            className="object-cover brightness-50"
            priority
            quality={90}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-green-900/80 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <Sprout className="w-4 h-4" />
            <span>Farm Division</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Premium Agricultural
            <span className="block mt-2 text-green-300">Exports</span>
          </h1>

          <p className="text-xl md:text-2xl text-green-50 mb-10 max-w-3xl mx-auto">
            Focused on sourcing, processing, and exporting premium agricultural produce that meet global standards.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg shadow-xl"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Request Export Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality agricultural commodities ready for export
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-2 hover:border-green-600 hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  {/* Product Name */}
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold text-gray-900 text-center">
                      {product.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Farm Division
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Commitment to excellence in every step of the supply chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Export Premium Produce?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Partner with us for reliable sourcing and export of quality agricultural products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-6 text-lg"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
