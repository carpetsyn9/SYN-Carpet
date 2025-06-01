"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const galleryItems = [
  {
    id: 1,
    title: "Luxury Hardwood",
    category: "hardwood",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Designer Carpet",
    category: "carpet",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Modern Laminate",
    category: "laminate",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Luxury Vinyl",
    category: "vinyl",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our Recent Work</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Browse our gallery of premium flooring installations across Birmingham
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <Badge className="mb-2 bg-amber-600">{item.category}</Badge>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 group">
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
