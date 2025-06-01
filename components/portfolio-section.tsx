"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"

const categories = ["All", "Residential", "Commercial", "Heritage"]

const projects = [
  {
    id: 1,
    title: "Luxury Penthouse",
    category: "Residential",
    image: "/placeholder.svg?height=400&width=600",
    description: "Bespoke herringbone flooring in premium walnut",
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "/placeholder.svg?height=500&width=600",
    description: "Modern luxury vinyl installation across 5 floors",
  },
  {
    id: 3,
    title: "Victorian Restoration",
    category: "Heritage",
    image: "/placeholder.svg?height=350&width=600",
    description: "Period-appropriate oak flooring restoration",
  },
  {
    id: 4,
    title: "Contemporary Villa",
    category: "Residential",
    image: "/placeholder.svg?height=450&width=600",
    description: "Seamless luxury vinyl throughout open-plan living",
  },
  {
    id: 5,
    title: "Boutique Hotel",
    category: "Commercial",
    image: "/placeholder.svg?height=400&width=600",
    description: "Designer carpet installation in 50 guest rooms",
  },
  {
    id: 6,
    title: "Georgian Townhouse",
    category: "Heritage",
    image: "/placeholder.svg?height=380&width=600",
    description: "Traditional parquet flooring restoration",
  },
]

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-slate-900 mb-6">Our Portfolio</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of exceptional projects, each one a testament to our commitment to excellence and
            attention to detail.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-slate-100 rounded-full p-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-slate-900 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute bottom-6 left-6 right-6 text-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredProject === project.id ? 0 : 20,
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="text-sm text-emerald-300 mb-2">{project.category}</div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-slate-300 text-sm mb-4">{project.description}</p>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                        >
                          <Eye className="mr-2 w-4 h-4" />
                          View Project
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Category Badge with animation */}
                  <motion.div
                    className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {project.category}
                  </motion.div>

                  {/* Floating decoration */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full group"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
