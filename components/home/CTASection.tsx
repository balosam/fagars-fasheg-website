import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
            Let's discuss how we can help grow your business with our reliable import and export solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-6 text-lg font-semibold"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg opacity-90">
              Or reach us directly at{" "}
              <a
                href="mailto:fagarsfasheg2301@gmail.com"
                className="font-semibold underline hover:opacity-80"
              >
                fagarsfasheg2301@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
