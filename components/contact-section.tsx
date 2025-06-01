"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Send, MapPin, Phone, Mail, Clock, Calendar, Award, Shield } from "lucide-react"

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Our Showroom",
    details: ["123 High Street", "Birmingham B1 2AB", "West Midlands"],
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us Today",
    details: ["0121 234 5678", "Free consultation", "Expert advice"],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    details: ["info@premiumflooring.co.uk", "24hr response", "Detailed quotes"],
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Opening Hours",
    details: ["Mon-Fri: 8AM-6PM", "Saturday: 9AM-4PM", "Sunday: Closed"],
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-slate-900 mb-6">Start Your Project</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Get in touch with our experts for a personalized consultation and detailed
            quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-semibold text-slate-900 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Thank You!
                    </motion.h3>
                    <motion.p
                      className="text-slate-600 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      We've received your message and will get back to you within 24 hours.
                    </motion.p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-slate-300">
                        Send Another Message
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <>
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-2">Get Your Free Quote</h3>
                      <p className="text-slate-600">
                        Tell us about your project and we'll provide a detailed estimate.
                      </p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div
                        className="grid md:grid-cols-2 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300"
                            placeholder="Your full name"
                          />
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300"
                            placeholder="your@email.com"
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        className="grid md:grid-cols-2 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300"
                            placeholder="Your phone number"
                          />
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Service Interest</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                          >
                            <option value="">Select a service</option>
                            <option value="herringbone">Herringbone Flooring</option>
                            <option value="carpet">Luxury Carpeting</option>
                            <option value="vinyl">Luxury Vinyl</option>
                            <option value="laminate">Premium Laminate</option>
                            <option value="consultation">Free Consultation</option>
                          </select>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileFocus={{ scale: 1.02 }}
                      >
                        <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300"
                          placeholder="Tell us about your project, room size, timeline, and any specific requirements..."
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-full shadow-xl group"
                        >
                          <motion.div
                            className="mr-2"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          >
                            <Send className="w-5 h-5" />
                          </motion.div>
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { type: "spring", stiffness: 400, damping: 10 },
                        }}
                      >
                        <motion.div
                          className="text-emerald-600"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {info.icon}
                        </motion.div>
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <motion.p
                            key={idx}
                            className="text-slate-600 text-sm mb-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                          >
                            {detail}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
                <motion.div
                  className="absolute top-2 right-2 w-16 h-16 bg-emerald-200/30 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <CardContent className="p-6 relative z-10">
                  <h3 className="font-semibold text-emerald-900 mb-2">Emergency Service</h3>
                  <p className="text-emerald-700 mb-3 text-sm">24/7 emergency flooring repairs available</p>
                  <motion.a
                    href="tel:07123456789"
                    className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    07123 456 789
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section - Fills the empty space */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-slate-900 to-emerald-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Elements */}
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
            <motion.div
              className="absolute bottom-4 left-4 w-24 h-24 bg-emerald-400/10 rounded-full"
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

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h3
                  className="text-3xl lg:text-4xl font-playfair font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Why Choose Premium Flooring?
                </motion.h3>
                <motion.p
                  className="text-slate-300 mb-6 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Join hundreds of satisfied clients who trust us with their most important projects. Experience the
                  difference of working with Birmingham's premier flooring specialists.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full shadow-xl"
                    >
                      <Calendar className="mr-2 w-5 h-5" />
                      Book Consultation
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Award className="w-8 h-8" />, title: "Award Winning", desc: "Industry recognition" },
                  { icon: <Shield className="w-8 h-8" />, title: "Fully Insured", desc: "Complete protection" },
                  { icon: <Calendar className="w-8 h-8" />, title: "Free Quotes", desc: "No obligation" },
                  { icon: <Clock className="w-8 h-8" />, title: "24hr Response", desc: "Quick turnaround" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl"
                  >
                    <div className="text-emerald-300 mb-2 flex justify-center">{item.icon}</div>
                    <div className="font-semibold mb-1">{item.title}</div>
                    <div className="text-slate-300 text-sm">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
