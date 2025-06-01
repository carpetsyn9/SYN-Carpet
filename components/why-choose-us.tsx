"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Users, Shield } from "lucide-react"

const features = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certified Experts",
    description: "Our team consists of certified professionals with extensive training and experience.",
    color: "emerald",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your flooring needs and concerns.",
    color: "teal",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "13+ Years Experience",
    description: "Over a decade of excellence in premium flooring installation and service.",
    color: "green",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "500+ Homes",
    description: "Successfully transformed hundreds of homes across Birmingham and beyond.",
    color: "emerald",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Why Choose
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with Birmingham's premier flooring specialists
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
