import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, Globe, TrendingUp, Building2, CheckCircle } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on the quality of products we source and deliver.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our success. We build lasting partnerships based on trust.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Meeting international trade and quality standards in everything we do.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Constantly evolving to serve you better and expand our reach.",
    },
  ];

  const stats = [
    { number: "3", label: "Specialized Divisions" },
    { number: "100+", label: "Products Traded" },
    { number: "Global", label: "Market Reach" },
    { number: "24/7", label: "Support Available" },
  ];

  const highlights = [
    "Direct relationships with trusted suppliers worldwide",
    "Comprehensive logistics and distribution network",
    "Quality assurance at every step of the process",
    "Expertise in international trade regulations",
    "Dedicated customer support team",
    "Competitive pricing and flexible terms",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About
            <span className="block mt-2">
              <span className="text-brand-blue">Fagars</span>
              <span className="text-brand-green"> & Fasheg</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in global trade, connecting markets across continents with excellence and integrity.
          </p>
        </div>
      </section>

      {/* Our Story with Office Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Fagars & Fasheg was founded with a clear vision: to bridge the gap between quality producers
                  and global markets. We recognized the untapped potential in Nigeria's agricultural sector,
                  the growing demand for quality food products, and the need for reliable electronics distribution.
                </p>
                <p>
                  What started as a small import-export venture has grown into a comprehensive trading company
                  with three specialized divisions. Today, we serve clients across multiple continents, maintaining
                  the same commitment to quality and integrity that defined our first transaction.
                </p>
                <p>
                  Our success is built on strong relationships—with farmers who trust us with their harvest,
                  food suppliers who depend on our reliability, and technology partners who value our professionalism.
                </p>
              </div>
            </div>

            {/* Office Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/office.jpg"
                alt="Fagars & Fasheg Office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center gap-3 text-white">
                  <Building2 className="w-6 h-6" />
                  <p className="font-semibold">Our Lagos Office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence in every aspect of international trade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="border-2 border-brand-blue hover:shadow-xl transition-shadow">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To facilitate seamless international trade by connecting quality producers with global markets,
                  ensuring reliability, transparency, and excellence in every transaction.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-2 border-brand-green hover:shadow-xl transition-shadow">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the leading import-export company in West Africa, recognized globally for our
                  commitment to quality, innovation, and sustainable business practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">By The Numbers</h2>
            <p className="text-xl opacity-90">Our impact in global trade</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's discuss how we can support your import and export needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue/90 px-8 py-6 text-lg"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-6 text-lg"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
