"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Edgbaston, Birmingham",
    rating: 5,
    text: "Absolutely exceptional service! The team transformed our entire ground floor with beautiful hardwood flooring. Professional, punctual, and the quality is outstanding.",
    image: "/placeholder.svg?height=80&width=80",
    service: "Hardwood Flooring",
  },
  {
    id: 2,
    name: "Michael Thompson",
    location: "Harborne, Birmingham",
    rating: 5,
    text: "From consultation to completion, everything was perfect. The luxury vinyl in our kitchen looks amazing and has been incredibly durable. Highly recommend!",
    image: "/placeholder.svg?height=80&width=80",
    service: "Luxury Vinyl",
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "Moseley, Birmingham",
    rating: 5,
    text: "The carpet installation was flawless. The team was respectful of our home and the attention to detail was impressive. Worth every penny!",
    image: "/placeholder.svg?height=80&width=80",
    service: "Carpet Installation",
  },
  {
    id: 4,
    name: "David Brown",
    location: "Solihull, Birmingham",
    rating: 5,
    text: "Professional service from start to finish. The laminate flooring looks fantastic and was installed quickly with minimal disruption. Excellent value!",
    image: "/placeholder.svg?height=80&width=80",
    service: "Laminate Flooring",
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">What Our Customers Say</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Birmingham
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-lg text-slate-800">{testimonials[currentIndex].name}</div>
                    <div className="text-slate-600">{testimonials[currentIndex].location}</div>
                    <div className="text-amber-600 text-sm font-medium">{testimonials[currentIndex].service}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-amber-600" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
