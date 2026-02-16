import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Adebayo Okonkwo",
      company: "Golden Harvest Foods Ltd",
      role: "Managing Director",
      content: "Fagars & Fasheg has been instrumental in helping us export our agricultural products to international markets. Their attention to quality standards and timely delivery is exceptional.",
      rating: 5,
      image: "AO", // Initials for avatar
    },
    {
      name: "Chen Wei",
      company: "Pacific Electronics Trading",
      role: "Procurement Manager",
      content: "We've been sourcing electronics through Fagars & Fasheg for over 2 years. Their reliability and competitive pricing have made them our preferred import partner in West Africa.",
      rating: 5,
      image: "CW",
    },
    {
      name: "Amaka Nwosu",
      company: "Fresh Foods Distribution",
      role: "CEO",
      content: "The professionalism and efficiency of Fagars & Fasheg is unmatched. They handle everything from sourcing to delivery, making international trade stress-free for our business.",
      rating: 5,
      image: "AN",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses who trust us with their import and export needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-brand-blue opacity-20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.image}
                  </div>
                  
                  {/* Details */}
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-brand-blue">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
