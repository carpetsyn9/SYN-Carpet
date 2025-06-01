"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Shield, Clock } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Premium Carpet Installation",
    description: "Luxury carpets with professional installation and premium underlay",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Premium underlay included",
      "Stain-resistant treatments",
      "Lifetime installation warranty",
      "Free furniture moving",
    ],
    price: "From £25/m²",
    popular: true,
  },
  {
    title: "Hardwood Flooring",
    description: "Solid and engineered hardwood flooring from premium suppliers",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Solid & engineered options", "Professional sanding", "Eco-friendly finishes", "25-year warranty"],
    price: "From £45/m²",
    popular: false,
  },
  {
    title: "Luxury Vinyl Flooring",
    description: "Waterproof luxury vinyl with realistic wood and stone effects",
    image: "/placeholder.svg?height=300&width=400",
    features: ["100% waterproof", "Click-lock installation", "Scratch resistant", "Pet-friendly"],
    price: "From £20/m²",
    popular: false,
  },
  {
    title: "Laminate Flooring",
    description: "High-quality laminate flooring with superior durability",
    image: "/placeholder.svg?height=300&width=400",
    features: ["AC4/AC5 rated", "Quick installation", "Easy maintenance", "15-year warranty"],
    price: "From £15/m²",
    popular: false,
  },
]

const additionalServices = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Free Design Consultation",
    description: "Expert advice on flooring selection and room design",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Insurance Work",
    description: "Direct insurance billing for flood and damage claims",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Emergency Repairs",
    description: "24/7 emergency flooring repair and restoration",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Premium flooring solutions with expert installation and lifetime support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Premium Flooring Solutions</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Transform your space with our comprehensive range of premium flooring options
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 h-full">
                  {service.popular && (
                    <div className="bg-amber-600 text-white text-center py-2">
                      <Badge className="bg-amber-700">Most Popular</Badge>
                    </div>
                  )}

                  <div className="relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="font-semibold text-slate-800">{service.price}</span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-playfair">{service.title}</CardTitle>
                    <p className="text-slate-600">{service.description}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-amber-600 hover:bg-amber-700">Get Quote</Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Additional Services</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Complete flooring solutions with comprehensive support services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="text-amber-600 mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our Process</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From consultation to completion, we ensure a seamless experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Consultation", description: "Visit our showroom or book a home consultation" },
              { step: "02", title: "Design & Quote", description: "Receive detailed quote with 3D visualization" },
              {
                step: "03",
                title: "Professional Installation",
                description: "Expert installation by certified technicians",
              },
              { step: "04", title: "Aftercare Support", description: "Ongoing maintenance and warranty support" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Get your free consultation and quote today. No obligation, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-slate-100">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600"
              >
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
