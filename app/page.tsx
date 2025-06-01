import HeroSection from "@/components/hero-section"
import LuxuryCarpetsSlider from "@/components/luxury-carpets-slider"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import FloatingElements from "@/components/floating-elements"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Carpets Birmingham | Luxury Flooring Specialists",
  description:
    "Transform your space with Birmingham's finest carpet collection. Expert installation, 25+ years experience, lifetime warranty.",
  keywords: "luxury carpets Birmingham, premium flooring, carpet installation, Persian rugs",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LuxuryCarpetsSlider />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingElements />
    </>
  )
}
