"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Grid3X3, Layers, Zap, Square, Sparkles, Shield } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: <Grid3X3 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "Herringbone Flooring",
    description:
      "Timeless elegance with precision-crafted herringbone patterns that transform any space into a work of art.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Herringbone%20Flooring-18LdfRt2nmjhLgbpJFhnnTQc7iLivJ.webp",
    features: ["Premium hardwood", "Expert installation", "Custom patterns", "Lifetime warranty"],
  },
  {
    icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "Luxury Carpet",
    description: "Indulgent comfort meets sophisticated design with our curated collection of premium carpets.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luxury%20Carpet%20banner.jpg-Pb48jybsDl0sjZqv0LF69mRWYMF0Jb.jpeg",
    features: ["Designer collections", "Stain resistance", "Eco-friendly options", "Professional fitting"],
  },
  {
    icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "Luxury Vinyl",
    description: "Revolutionary flooring technology that delivers stunning aesthetics with unmatched durability.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luxury%20Vinyl.jpg-a5f7gzbqAUSpT7S33dbkNS5uSfvLxV.jpeg",
    features: ["Waterproof design", "Realistic textures", "Easy maintenance", "Quick installation"],
  },
  {
    icon: <Square className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "Premium Laminate",
    description: "Sophisticated laminate solutions that combine beauty, durability, and exceptional value.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Premium%20Laminate-f50bG6iTGbyDrU6COQX5kJ25NYvmxv.avif",
    features: ["AC5 commercial grade", "Scratch resistant", "Fade protection", "Click-lock system"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium text-xs sm:text-sm">Our Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-slate-900 mb-4 sm:mb-6">
            Crafted to Perfection
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Every project is a masterpiece. We combine traditional craftsmanship with modern innovation to deliver
            flooring solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-slate-50 h-full">
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                    <div className="relative w-full h-48 sm:h-56 lg:h-64">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        className="object-cover transition-transform duration-700"
                        priority={index < 2}
                      />
                    </div>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Overlay with animation */}
                  <motion.div
                    className="absolute top-4 sm:top-6 left-4 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400, damping: 10 },
                    }}
                  >
                    <motion.div className="text-emerald-600" whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                      {service.icon}
                    </motion.div>
                  </motion.div>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <motion.h3
                    className="text-xl sm:text-2xl font-playfair font-bold text-slate-900 mb-3 sm:mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Features with staggered animation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-slate-600"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                          <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 mr-2 sm:mr-3 flex-shrink-0" />
                        </motion.div>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full border-slate-200 hover:bg-slate-50 group/btn text-sm sm:text-base py-2 sm:py-3"
                    >
                      Learn More
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <motion.div
            className="bg-gradient-to-r from-slate-900 to-emerald-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Floating background elements */}
            <motion.div
              className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-16 h-16 sm:w-24 sm:h-24 bg-emerald-400/10 rounded-full"
              animate={{
                scale: [1.2, 1, 1.2],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            <motion.h3
              className="text-2xl sm:text-3xl font-playfair font-bold mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Transform Your Space?
            </motion.h3>
            <motion.p
              className="text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Let our experts guide you through the perfect flooring solution for your unique vision.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl text-sm sm:text-base"
              >
                Schedule Consultation
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
