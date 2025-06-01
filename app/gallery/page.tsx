"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Luxury Hardwood Installation",
    category: "hardwood",
    image: "/placeholder.svg?height=400&width=600",
    description: "Premium oak hardwood flooring in Birmingham residence",
  },
  {
    id: 2,
    title: "Designer Carpet Suite",
    category: "carpet",
    image: "/placeholder.svg?height=400&width=600",
    description: "Bespoke carpet installation in luxury home",
  },
  {
    id: 3,
    title: "Modern Laminate Office",
    category: "laminate",
    image: "/placeholder.svg?height=400&width=600",
    description: "Commercial laminate flooring installation",
  },
  {
    id: 4,
    title: "Luxury Vinyl Bathroom",
    category: "vinyl",
    image: "/placeholder.svg?height=400&width=600",
    description: "Waterproof luxury vinyl in modern bathroom",
  },
  {
    id: 5,
    title: "Traditional Carpet Living Room",
    category: "carpet",
    image: "/placeholder.svg?height=400&width=600",
    description: "Classic carpet installation with underlay",
  },
  {
    id: 6,
    title: "Engineered Wood Kitchen",
    category: "hardwood",
    image: "/placeholder.svg?height=400&width=600",
    description: "Engineered hardwood in open-plan kitchen",
  },
]

const categories = ["all", "hardwood", "carpet", "laminate", "vinyl"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (id: number) => {
    setSelectedImage(id)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredItems[newIndex].id)
  }

  const selectedItem = selectedImage ? filteredItems.find((item) => item.id === selectedImage) : null

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
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Our Gallery</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Discover our premium flooring installations across Birmingham
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize px-6 py-2 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(item.id)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <Badge className="mb-2 bg-amber-600">{item.category}</Badge>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-200">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <Image
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.title}
                width={800}
                height={600}
                className="w-full h-auto max-h-[70vh] object-cover"
              />

              <div className="p-6">
                <Badge className="mb-2 bg-amber-600">{selectedItem.category}</Badge>
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-slate-600">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
