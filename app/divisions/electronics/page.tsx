import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Package, CheckCircle, Headphones, ArrowRight } from "lucide-react";

export default function ElectronicsDivisionPage() {
  const products = [
    { name: "Smartphones", image: "/images/products/electronics/smartphones.jpg" },
    { name: "Laptops", image: "/images/products/electronics/laptops.jpg" },
    { name: "Tablets", image: "/images/products/electronics/tablets.jpg" },
    { name: "TVs", image: "/images/products/electronics/tvs.jpg" },
    { name: "Home Appliances", image: "/images/products/electronics/home-appliances.jpg" },
    { name: "Audio Devices", image: "/images/products/electronics/audio-devices.jpg" },
    { name: "Gaming Consoles", image: "/images/products/electronics/gaming-consoles.jpg" },
    { name: "Accessories", image: "/images/products/electronics/accessories.jpg" },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Authentic Products",
      description: "100% genuine products from trusted global manufacturers.",
    },
    {
      icon: Package,
      title: "Secure Delivery",
      description: "Carefully packaged and insured for safe transit.",
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "Access to cutting-edge devices and innovations.",
    },
    {
      icon: Headphones,
      title: "Support & Service",
      description: "Dedicated customer support for all your needs.",
    },
  ];

  const brands = [
    "Samsung",
    "Apple",
    "LG",
    "Sony",
    "HP",
    "Dell",
    "Panasonic",
    "Philips",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/electronics-hero.jpg"
            alt="Electronics Division - Cutting-Edge Technology"
            fill
            className="object-cover brightness-50"
            priority
            quality={90}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-900/80 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Electronics Division</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cutting-Edge Electronics
            <span className="block mt-2 text-blue-300">Distribution</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto">
            Importing and distributing durable, cutting-edge electronic devices and appliances from trusted global brands.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-xl"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Request a Quote
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
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of electronic devices and appliances
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-2 hover:border-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
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

      {/* Trusted Brands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted Global Brands
            </h2>
            <p className="text-xl text-gray-600">
              We partner with leading manufacturers worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-blue-600 hover:shadow-md transition-all duration-300"
              >
                <p className="text-xl font-bold text-gray-700">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your reliable partner for quality electronics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
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

      {/* Innovation Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Innovation Meets Reliability
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We stay ahead of technology trends to bring you the latest and most reliable electronic
              products. From smartphones to home appliances, every product we distribute is carefully
              selected for quality, durability, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Quality Electronics?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Partner with us for authentic, reliable electronic products from top global brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
