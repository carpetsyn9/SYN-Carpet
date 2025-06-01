"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight, Award, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Interior Designer",
    company: "Mitchell Design Studio",
    location: "Edgbaston, Birmingham",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    text: "Premium Flooring transformed our client's penthouse with exceptional herringbone installation. Their attention to detail and craftsmanship exceeded all expectations. The team's professionalism and expertise made this our most successful project to date.",
    project: "Luxury Penthouse Renovation",
    projectValue: "£85,000",
    completionDate: "March 2024",
    featured: true,
  },
  {
    id: 2,
    name: "James Richardson",
    role: "Property Developer",
    company: "Richardson Developments",
    location: "Birmingham City Centre",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    text: "We've worked with Premium Flooring on multiple high-end developments. Their ability to deliver exceptional quality on time and within budget is unmatched. They're our go-to flooring specialists for all luxury projects.",
    project: "Commercial Development",
    projectValue: "£250,000",
    completionDate: "January 2024",
    featured: false,
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Homeowner",
    company: "Private Residence",
    location: "Harborne, Birmingham",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    text: "The transformation of our Victorian home is absolutely stunning. Premium Flooring's expertise in heritage properties is remarkable. Every detail was perfect, from the initial consultation to the final installation.",
    project: "Victorian Home Restoration",
    projectValue: "£45,000",
    completionDate: "February 2024",
    featured: false,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
            <Award className="w-4 h-4 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium text-sm">Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-slate-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover why Birmingham's most discerning clients choose Premium Flooring for their most important projects
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Client Info Side */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-emerald-900 p-8 lg:p-12 text-white relative overflow-hidden">
                      {/* Background Pattern */}
                      <motion.div
                        className="absolute top-4 right-4 w-32 h-32 bg-white/5 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />

                      <div className="relative z-10">
                        {/* Client Photo */}
                        <motion.div
                          className="relative mb-6"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                            <Image
                              src={testimonials[currentIndex].image || "/placeholder.svg"}
                              alt={testimonials[currentIndex].name}
                              width={120}
                              height={120}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {testimonials[currentIndex].featured && (
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                              <Award className="w-4 h-4 text-slate-900" />
                            </div>
                          )}
                        </motion.div>

                        {/* Client Details */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl font-playfair font-bold mb-1">{testimonials[currentIndex].name}</h3>
                            <p className="text-emerald-300 font-medium">{testimonials[currentIndex].role}</p>
                            <p className="text-white/80 text-sm">{testimonials[currentIndex].company}</p>
                          </div>

                          <div className="flex items-center text-white/70 text-sm">
                            <MapPin className="w-4 h-4 mr-2" />
                            {testimonials[currentIndex].location}
                          </div>

                          {/* Project Details */}
                          <div className="space-y-3 pt-4 border-t border-white/20">
                            <div>
                              <div className="text-white/70 text-xs uppercase tracking-wider mb-1">Project</div>
                              <div className="text-white font-medium">{testimonials[currentIndex].project}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <div className="text-white/70 text-xs uppercase tracking-wider mb-1">Value</div>
                                <div className="text-emerald-300 font-bold">
                                  {testimonials[currentIndex].projectValue}
                                </div>
                              </div>
                              <div>
                                <div className="text-white/70 text-xs uppercase tracking-wider mb-1">Completed</div>
                                <div className="text-white font-medium text-sm">
                                  {testimonials[currentIndex].completionDate}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="lg:col-span-3 p-8 lg:p-12 relative">
                      {/* Quote Icon */}
                      <div className="absolute top-8 right-8 text-slate-200">
                        <Quote className="w-16 h-16" />
                      </div>

                      <div className="relative z-10">
                        {/* Stars */}
                        <div className="flex items-center mb-6">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                            >
                              <Star className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                            </motion.div>
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed italic mb-8 font-light">
                          "{testimonials[currentIndex].text}"
                        </blockquote>

                        {/* Additional Info */}
                        <div className="flex items-center text-slate-500 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>Project completed {testimonials[currentIndex].completionDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-slate-300 hover:bg-slate-50 w-12 h-12"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Dots with enhanced design */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative transition-all duration-300 ${index === currentIndex ? "w-12 h-3" : "w-3 h-3"}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div
                    className={`w-full h-full rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-slate-900" : "bg-slate-300"
                    }`}
                  />
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-emerald-500 rounded-full"
                      initial={{ width: "12px" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-slate-300 hover:bg-slate-50 w-12 h-12"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            { number: "98%", label: "Client Satisfaction", sublabel: "Based on 500+ reviews" },
            { number: "£2.5M+", label: "Projects Completed", sublabel: "Total project value" },
            { number: "24hr", label: "Response Time", sublabel: "Average inquiry response" },
            { number: "15+", label: "Years Experience", sublabel: "Industry expertise" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-700 font-semibold mb-1">{stat.label}</div>
              <div className="text-slate-500 text-sm">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
