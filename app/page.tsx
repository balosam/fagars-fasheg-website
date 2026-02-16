import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import DivisionsSection from "@/components/home/DivisionsSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <DivisionsSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
