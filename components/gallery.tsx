"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const galleryItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=600",
    title: "Modern Living Room",
    category: "Hardwood",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=500&width=600",
    title: "Luxury Bedroom",
    category: "Carpet",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=600",
    title: "Contemporary Kitchen",
    category: "Vinyl",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=450&width=600",
    title: "Elegant Hallway",
    category: "Laminate",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=350&width=600",
    title: "Stylish Office",
    category: "Herringbone",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=400&width=600",
    title: "Cozy Lounge",
    category: "Carpet",
  },
]

export default function Gallery() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Our</span>{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of stunning flooring transformations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ y: -5 }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-600/40 to-transparent transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-medium text-emerald-200 mb-1">{item.category}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
