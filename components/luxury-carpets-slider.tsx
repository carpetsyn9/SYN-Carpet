"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Award, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"

const carpetCollections = [
  {
    id: 1,
    name: "Classic Elegance Runner",
    category: "Heritage Luxury",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-UawjztARQcL62KWJgIfbkRZz5FlB7b.jpeg",
    price: "From £180/m²",
    description:
      "Sophisticated curved staircase installation featuring premium textured carpet with traditional elegance and timeless appeal.",
    features: ["100% Pure Wool", "Hand-Finished Edges", "Custom Fit", "Heritage Design"],
    colors: ["Warm Beige", "Natural Tan", "Soft Cream", "Classic Ivory"],
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Contemporary Curve",
    category: "Modern Luxury",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-KgmbU80r12IYmerjvPk2FTqGdtPQPn.jpeg",
    price: "From £120/m²",
    description:
      "Modern curved staircase design with sleek black balusters and premium neutral carpet runner for contemporary homes.",
    features: ["Stain Resistant", "Ultra Soft", "Modern Installation", "Easy Care"],
    colors: ["Platinum Grey", "Champagne", "Charcoal", "Pearl"],
    rating: 5,
    featured: false,
  },
  {
    id: 3,
    name: "Architectural Statement",
    category: "Designer Collection",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%282%29-SEccRp4rHJTqA7SiOQblJTjld44shj.jpeg",
    price: "From £200/m²",
    description:
      "Dramatic curved staircase featuring geometric railings and luxury carpet runner, perfect for modern architectural spaces.",
    features: ["Limited Edition", "Designer Crafted", "Premium Materials", "Bespoke Installation"],
    colors: ["Midnight Taupe", "Stone Grey", "Warm Neutral", "Sophisticated Beige"],
    rating: 5,
    featured: true,
  },
  {
    id: 4,
    name: "Chevron Masterpiece",
    category: "Pattern Collection",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Martinique%20Charcoal%20-%205x8%20_%20Narrow%20Binding-tNaMmKJlFpBeOGUSHl7ZusmBQyBcZF.jpeg",
    price: "From £150/m²",
    description:
      "Stunning herringbone pattern carpet runner creating visual interest and luxury appeal on straight staircases.",
    features: ["Chevron Pattern", "Natural Fibers", "Precision Cut", "Professional Binding"],
    colors: ["Charcoal Chevron", "Natural Herringbone", "Graphite Pattern", "Stone Weave"],
    rating: 5,
    featured: false,
  },
  {
    id: 5,
    name: "Minimalist Luxury",
    category: "Contemporary",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Double%20Leather%20Binding%20-%20The%20Carpet%20Workroom-EGNzuSf1UUnBli9YWWLgrO5SSMq14k.jpeg",
    price: "From £95/m²",
    description:
      "Clean, contemporary design with premium neutral carpet and leather binding for modern minimalist interiors.",
    features: ["Leather Binding", "Minimalist Design", "Premium Weave", "Contemporary Style"],
    colors: ["Pure Cream", "Soft Beige", "Natural Linen", "Warm White"],
    rating: 5,
    featured: false,
  },
  {
    id: 6,
    name: "Geometric Precision",
    category: "Modern Pattern",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20love%20story%20for%20stairway%20runners%20%F0%9F%AB%B6__%F0%9F%93%B7%20%40margaretrajic%20_Styling_%20%40studio_officer-a4HRiV679OvnugJzvjZaTIFtRmnNJh.jpeg",
    price: "From £165/m²",
    description:
      "Sophisticated geometric pattern with precise installation and custom binding for discerning homeowners.",
    features: ["Geometric Pattern", "Custom Binding", "Precision Installation", "Modern Aesthetic"],
    colors: ["Geometric Grey", "Pattern Beige", "Structured Taupe", "Linear Stone"],
    rating: 5,
    featured: false,
  },
  {
    id: 7,
    name: "Textured Excellence",
    category: "Premium Texture",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stanton%20%28%40stantoncarpet%29%20%E2%80%A2%20Instagram%20photos%20and%20videos-6MmotjX7K617icfPeXe6sNPjatSg3P.jpeg",
    price: "From £140/m²",
    description:
      "Rich textured carpet runner with sophisticated weave pattern, perfect for adding depth and luxury to any staircase.",
    features: ["Rich Texture", "Premium Weave", "Durable Construction", "Luxury Feel"],
    colors: ["Textured Beige", "Woven Cream", "Natural Texture", "Soft Stone"],
    rating: 5,
    featured: false,
  },
]

export default function LuxuryCarpetsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carpetCollections.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carpetCollections.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carpetCollections.length) % carpetCollections.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentCarpet = carpetCollections[currentIndex]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-slate-100/30 to-emerald-50/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium text-xs sm:text-sm">Luxury Carpet Collections</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-playfair font-bold text-slate-900 mb-4 sm:mb-6 px-4">
            Exquisite Staircase Carpets
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our curated collection of premium staircase carpet runners, where traditional craftsmanship meets
            contemporary luxury
          </p>
        </motion.div>

        {/* Main Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
            >
              {/* Image Side */}
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl group">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }}>
                    <Image
                      src={currentCarpet.image || "/placeholder.svg"}
                      alt={currentCarpet.name}
                      width={800}
                      height={600}
                      className="w-full h-64 sm:h-80 lg:h-[500px] xl:h-[600px] object-cover"
                      priority={currentIndex === 0}
                    />
                  </motion.div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                  {/* Featured Badge */}
                  {currentCarpet.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      className="absolute top-3 sm:top-6 left-3 sm:left-6"
                    >
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Featured
                      </Badge>
                    </motion.div>
                  )}

                  {/* Price Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-white/95 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg"
                  >
                    <span className="font-bold text-slate-900 text-xs sm:text-sm lg:text-base">
                      {currentCarpet.price}
                    </span>
                  </motion.div>

                  {/* Floating Decorative Elements */}
                  <motion.div
                    className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2 px-4 sm:px-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Category */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <Badge
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm"
                  >
                    {currentCarpet.category}
                  </Badge>
                </motion.div>

                {/* Title and Rating */}
                <div>
                  <motion.h3
                    className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-playfair font-bold text-slate-900 mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {currentCarpet.name}
                  </motion.h3>

                  <motion.div
                    className="flex items-center mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {[...Array(currentCarpet.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 200 }}
                      >
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current mr-1" />
                      </motion.div>
                    ))}
                    <span className="text-slate-600 ml-2 text-xs sm:text-sm">Luxury Collection</span>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {currentCarpet.description}
                </motion.p>

                {/* Features */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                  <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {currentCarpet.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center text-slate-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Color Options */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
                  <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Available Colors:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {currentCarpet.colors.map((color, index) => (
                      <motion.span
                        key={color}
                        className="px-2 sm:px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs sm:text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1 + index * 0.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                      >
                        {color}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl group text-sm sm:text-base"
                    >
                      View Collection
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base"
                    >
                      Request Sample
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Hidden on mobile */}
          <motion.button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-2 xl:left-4 top-1/2 -translate-y-1/2 w-10 h-10 xl:w-12 xl:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl items-center justify-center hover:bg-white transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 xl:w-6 xl:h-6 text-slate-700" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-2 xl:right-4 top-1/2 -translate-y-1/2 w-10 h-10 xl:w-12 xl:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl items-center justify-center hover:bg-white transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 xl:w-6 xl:h-6 text-slate-700" />
          </motion.button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex lg:hidden justify-center gap-4 mt-6">
          <motion.button
            onClick={prevSlide}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </motion.button>
        </div>

        {/* Dots Navigation */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {carpetCollections.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentIndex ? "w-8 sm:w-12 h-2 sm:h-3" : "w-2 sm:w-3 h-2 sm:h-3"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-slate-900" : "bg-slate-300"
                }`}
              />
              {index === currentIndex && isAutoPlaying && (
                <motion.div
                  className="absolute inset-0 bg-emerald-500 rounded-full"
                  initial={{ width: index === currentIndex ? "32px" : "12px" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Collection Overview - Responsive Grid */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {carpetCollections.map((carpet, index) => (
            <motion.div
              key={carpet.id}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "ring-1 sm:ring-2 ring-emerald-500 shadow-lg sm:shadow-xl"
                  : "hover:shadow-md sm:hover:shadow-lg"
              }`}
              onClick={() => goToSlide(index)}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={carpet.image || "/placeholder.svg"}
                alt={carpet.name}
                width={300}
                height={200}
                className="w-full h-20 sm:h-24 lg:h-32 object-cover"
              />
              <div className="p-2 sm:p-3 lg:p-4 bg-white">
                <h4 className="font-semibold text-slate-900 mb-1 text-xs sm:text-sm lg:text-base line-clamp-1">
                  {carpet.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-1 sm:mb-2 line-clamp-1">{carpet.category}</p>
                <p className="text-xs sm:text-sm lg:text-base font-bold text-emerald-600">{carpet.price}</p>
              </div>
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-emerald-500/10 border border-emerald-500 rounded-xl sm:rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
