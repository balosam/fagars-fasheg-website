import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ship, Plane, Truck, FileCheck, Package, CheckCircle, ArrowRight, Globe2, Clock, Shield, DollarSign } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Ship,
      title: "Importation",
      description:
        "Bringing high-quality products from trusted global suppliers straight to local markets — efficiently and affordably.",
      features: [
        "Sourcing from verified international suppliers",
        "Customs clearance and documentation",
        "Quality inspection and verification",
        "Competitive pricing and bulk discounts",
      ],
      color: "blue",
      bgGradient: "from-blue-500 to-blue-700",
    },
    {
      icon: Plane,
      title: "Exportation",
      description:
        "Delivering Nigeria's finest farm produce and goods to international partners with reliability and transparency.",
      features: [
        "Export documentation and compliance",
        "Quality certification for international standards",
        "Secure packaging and handling",
        "Global shipping and delivery tracking",
      ],
      color: "green",
      bgGradient: "from-green-600 to-green-800",
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description:
        "Seamless movement of goods from port to destination — ensuring timely delivery and professional handling every step of the way.",
      features: [
        "End-to-end supply chain management",
        "Warehousing and storage solutions",
        "Last-mile delivery services",
        "Real-time shipment tracking",
      ],
      color: "blue",
      bgGradient: "from-blue-600 to-blue-900",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your specific needs and requirements",
      icon: FileCheck,
    },
    {
      step: "2",
      title: "Quote & Planning",
      description: "Receive a detailed quote and shipment plan",
      icon: Package,
    },
    {
      step: "3",
      title: "Sourcing & Processing",
      description: "We handle procurement and quality verification",
      icon: CheckCircle,
    },
    {
      step: "4",
      title: "Shipping & Delivery",
      description: "Your goods are safely delivered to destination",
      icon: Truck,
    },
  ];

  const benefits = [
    {
      icon: Globe2,
      title: "Global Network",
      description: "Proven track record of on-time deliveries and consistent quality across all our divisions.",
    },
    {
      icon: Shield,
      title: "Trade Expertise",
      description: "Deep knowledge of international trade regulations, customs procedures, and market dynamics.",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Direct relationships with suppliers and efficient operations mean better value for you.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "From initial inquiry to final delivery, we're with you every step of the way.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-brand-blue rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4" />
            <span>Comprehensive Solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="block mt-2 text-brand-blue">Services</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Comprehensive import and export solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Main Services - Enhanced Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-brand-blue hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <CardContent className="p-0">
                    {/* Header with Icon */}
                    <div className={`bg-gradient-to-r ${service.bgGradient} p-8 text-white`}>
                      <Icon className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                      <h2 className="text-3xl font-bold mb-3">
                        {service.title}
                      </h2>
                      <p className="text-blue-100 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="p-8">
                      <h3 className="font-semibold text-gray-900 mb-4 text-lg">What We Offer:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined 4-step process from inquiry to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => {
              const StepIcon = item.icon;
              return (
                <div key={index} className="relative">
                  <Card className="border-2 hover:border-brand-blue hover:shadow-lg transition-all h-full group">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        {item.step}
                      </div>
                      <StepIcon className="w-12 h-12 text-brand-blue mx-auto mb-4 opacity-60" />
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-brand-blue/20 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-brand-blue" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Fagars Fasheg?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The advantages that set us apart in international trade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all">
                    <Icon className="w-10 h-10 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Agriculture & Farming",
              "Food & Beverage",
              "Electronics & Technology",
              "Retail & Wholesale",
              "Manufacturing",
              "Distribution Networks"
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-brand-blue hover:shadow-md transition-all"
              >
                <p className="font-semibold text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how our services can support your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-6 text-lg shadow-xl"
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-6 text-lg"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
