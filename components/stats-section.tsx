"use client"

import { motion } from "framer-motion"
import { Users, Award, Clock, Star } from "lucide-react"

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "5000+",
    label: "Happy Customers",
    description: "Satisfied homeowners across Birmingham",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "25+",
    label: "Years Experience",
    description: "Decades of flooring expertise",
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "50+",
    label: "Industry Awards",
    description: "Recognition for excellence",
  },
  {
    icon: <Star className="w-8 h-8" />,
    number: "4.9",
    label: "Average Rating",
    description: "Consistently excellent reviews",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-white mb-4">
            Trusted by Birmingham Homeowners
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Our commitment to excellence has earned us the trust of thousands of customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-4 text-amber-200">{stat.icon}</div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-amber-100 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
