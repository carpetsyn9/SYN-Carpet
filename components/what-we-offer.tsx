"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Grid3X3, Layers, Zap, Square } from "lucide-react"

const services = [
  {
    icon: <Grid3X3 className="w-8 h-8" />,
    title: "Herringbone",
    description: "Elegant herringbone patterns that add sophistication to any space.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Carpet",
    description: "Luxury carpets with premium underlay for ultimate comfort.",
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Vinyl",
    description: "Durable luxury vinyl flooring with realistic textures.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Square className="w-8 h-8" />,
    title: "Laminate",
    description: "High-quality laminate solutions for modern living.",
    gradient: "from-emerald-600 to-teal-600",
  },
]

export default function WhatWeOffer() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">What We</span>{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium flooring solutions crafted with precision and care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group">
                <CardContent className="p-8 text-center relative">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-white">{service.icon}</div>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
