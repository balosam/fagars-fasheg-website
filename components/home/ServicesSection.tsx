import { Card, CardContent } from "@/components/ui/card";
import { Ship, Plane, Truck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Ship,
      title: "Importation",
      description:
        "Bringing high-quality products from trusted global suppliers straight to local markets — efficiently and affordably.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Plane,
      title: "Exportation",
      description:
        "Delivering Nigeria's finest farm produce and goods to international partners with reliability and transparency.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description:
        "Seamless movement of goods from port to destination — ensuring timely delivery and professional handling every step of the way.",
      color: "text-brand-blue",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive import and export solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-brand-blue hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
