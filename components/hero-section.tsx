"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Award, Shield, Phone, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const carpetShowcase = [
  {
    id: 1,
    name: "Luxury Persian Collection",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-UawjztARQcL62KWJgIfbkRZz5FlB7b.jpeg",
    price: "From £180/m²",
    description: "Hand-knotted Persian carpets with intricate traditional patterns",
  },
  {
    id: 2,
    name: "Contemporary Designer Range",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-KgmbU80r12IYmerjvPk2FTqGdtPQPn.jpeg",
    price: "From £120/m²",
    description: "Modern carpet designs for contemporary living spaces",
  },
  {
    id: 3,
    name: "Premium Stair Runners",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%282%29-SEccRp4rHJTqA7SiOQblJTjld44shj.jpeg",
    price: "From £95/m²",
    description: "Elegant stair runners with professional installation",
  },
]

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carpetShowcase.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Professional Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/95 backdrop-blur-xl shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">PF</span>
                </div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <div>
                <div className={`font-bold text-xl ${isScrolled ? "text-slate-900" : "text-white"}`}>
                  Premium Flooring
                </div>
                <div className={`text-xs uppercase tracking-wider ${isScrolled ? "text-slate-600" : "text-slate-300"}`}>
                  Birmingham
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`font-medium transition-all duration-300 relative group ${
                      isScrolled ? "text-slate-700 hover:text-emerald-600" : "text-white hover:text-emerald-400"
                    }`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:flex items-center space-x-4"
            >
              <div className={`flex items-center space-x-2 ${isScrolled ? "text-slate-700" : "text-white"}`}>
                <Phone className="w-4 h-4" />
                <span className="font-medium">0121 234 5678</span>
              </div>
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Get Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-slate-700 hover:text-emerald-600 font-medium py-2 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center text-slate-700 mb-4">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>0121 234 5678</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white">
                    Get Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Background Carpet Images with Animation */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {carpetShowcase.map((carpet, index) => (
            <motion.div
              key={carpet.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={carpet.image || "/placeholder.svg"}
                alt={carpet.name}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white"
            >
              {/* Premium Badge with Animation */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="mb-8"
              >
                <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 text-sm font-medium rounded-full shadow-lg">
                  <Award className="w-4 h-4 mr-2" />
                  Birmingham's Premier Carpet Specialists
                </Badge>
              </motion.div>

              {/* Animated Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="block"
                >
                  Transform Your Space
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="block bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent"
                >
                  with Luxury Carpets
                </motion.span>
              </motion.h1>

              {/* Animated Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl"
              >
                From exquisite Persian rugs to contemporary designs, discover Birmingham's finest collection of premium
                carpets with expert installation.
              </motion.p>

              {/* Animated Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="grid sm:grid-cols-3 gap-6 mb-12"
              >
                {[
                  { icon: <Star className="w-5 h-5" />, text: "25+ Years Experience" },
                  { icon: <Shield className="w-5 h-5" />, text: "Lifetime Warranty" },
                  { icon: <Award className="w-5 h-5" />, text: "Expert Installation" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3"
                  >
                    <div className="text-emerald-400">{feature.icon}</div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Animated CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl group"
                  >
                    Explore Our Collection
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Get Free Quote
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Animated Carpet Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="relative"
            >
              {/* Animated Carpet Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Badge className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-4 py-2 font-medium">
                      Featured Collection
                    </Badge>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                    className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent"
                  >
                    {carpetShowcase[currentSlide].price}
                  </motion.div>
                </div>

                <motion.h3
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold text-slate-900 mb-3"
                >
                  {carpetShowcase[currentSlide].name}
                </motion.h3>

                <motion.p
                  key={`desc-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-slate-600 mb-8 leading-relaxed"
                >
                  {carpetShowcase[currentSlide].description}
                </motion.p>

                <div className="flex space-x-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white">
                      View Details
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button variant="outline" className="w-full border-slate-300 hover:bg-slate-50">
                      Request Sample
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Animated Slide Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="flex justify-center mt-8 space-x-3"
              >
                {carpetShowcase.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative transition-all duration-500 ${
                      currentSlide === index ? "w-12 h-3" : "w-3 h-3"
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full transition-all duration-500 ${
                        currentSlide === index
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                    {currentSlide === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
                        initial={{ width: "12px" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 6, ease: "linear" }}
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 mb-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { number: "25+", label: "Years Experience" },
              { number: "2,500+", label: "Carpets Installed" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="p-2"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.4 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
