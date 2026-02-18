import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-blue-700 to-brand-green"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.2),transparent_50%)]"></div>

      {/* Animated Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-300/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-300/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-semibold mb-8">
            <MessageCircle className="w-4 h-4" />
            <span>Let's Work Together</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Partner
            <span className="block mt-2">with Us?</span>
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help grow your business with our reliable import and export solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-blue hover:bg-blue-50 px-10 py-7 text-lg font-semibold shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 rounded-full"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-10 py-7 text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300 rounded-full"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Email Card */}
            <a 
              href="mailto:Fagars Fasheg2301@gmail.com"
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-blue-200 text-sm font-medium mb-1">Email Us</p>
                  <p className="text-white font-semibold">Fagars Fasheg2301@gmail.com</p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+2348034620625"
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-blue-200 text-sm font-medium mb-1">Call Us</p>
                  <p className="text-white font-semibold">+234 803 462 0625</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
