import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, ShieldCheck, Truck, Thermometer, ArrowRight } from "lucide-react";

export default function FoodDivisionPage() {
  const products = [
    { name: "Rice", image: "/images/products/food/rice.jpg" },
    { name: "Beans", image: "/images/products/food/beans.jpg" },
    { name: "Pasta", image: "/images/products/food/pasta.jpg" },
    { name: "Cooking Oil", image: "/images/products/food/cooking-oil.jpg" },
    { name: "Spices", image: "/images/products/food/spices.jpg" },
    { name: "Canned Goods", image: "/images/products/food/canned-goods.jpg" },
    { name: "Beverages", image: "/images/products/food/beverages.jpg" },
    { name: "Snacks", image: "/images/products/food/snacks.jpg" },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "All products undergo strict quality control and safety inspections.",
    },
    {
      icon: Thermometer,
      title: "Proper Storage",
      description: "Temperature-controlled facilities ensure freshness and safety.",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Efficient logistics network for fast and reliable distribution.",
    },
    {
      icon: UtensilsCrossed,
      title: "Diverse Selection",
      description: "Wide range of local and imported food products to meet all needs.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/food-hero.jpg"
            alt="Food Division - Quality Food Products"
            fill
            className="object-cover brightness-50"
            priority
            quality={90}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-orange-800/70 to-orange-900/80 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <UtensilsCrossed className="w-4 h-4" />
            <span>Food Division</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Quality Food Products
            <span className="block mt-2 text-orange-300">Worldwide</span>
          </h1>

          <p className="text-xl md:text-2xl text-orange-50 mb-10 max-w-3xl mx-auto">
            Supplying high-quality, locally sourced and imported food products to nourish homes and businesses worldwide.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg shadow-xl"
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
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From staples to specialty items, we supply quality food products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-2 hover:border-orange-600 hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
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

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Commitment to Quality
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Excellence in every product we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-600" />
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

      {/* Hygiene & Safety */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hygiene & Safety First
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              All our food products are handled in compliance with international food safety standards.
              From sourcing to delivery, we maintain strict hygiene protocols to ensure every product
              reaches you in perfect condition.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner with Us for Quality Food Supply
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Whether you need local staples or imported specialty items, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-lg"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
