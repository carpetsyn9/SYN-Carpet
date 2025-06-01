"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
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
    // Handle form submission here
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
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your space? Get in touch for a free consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">Get Your Free Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                      <p className="text-slate-600">We'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Service Interest</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                          >
                            <option value="">Select a service</option>
                            <option value="carpet">Carpet Installation</option>
                            <option value="hardwood">Hardwood Flooring</option>
                            <option value="laminate">Laminate Flooring</option>
                            <option value="vinyl">Luxury Vinyl</option>
                            <option value="consultation">Free Consultation</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold font-playfair mb-6">Get In Touch</h2>
                <p className="text-slate-600 text-lg mb-8">
                  Ready to transform your space with premium flooring? Contact our expert team for a free consultation
                  and quote.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Visit Our Showroom</h3>
                      <p className="text-slate-600">
                        123 High Street
                        <br />
                        Birmingham, B1 2AB
                        <br />
                        West Midlands
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-slate-600">
                        <a href="tel:01212345678" className="hover:text-amber-600 transition-colors">
                          0121 234 5678
                        </a>
                      </p>
                      <p className="text-sm text-slate-500">Free consultation available</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-slate-600">
                        <a href="mailto:info@premiumflooring.co.uk" className="hover:text-amber-600 transition-colors">
                          info@premiumflooring.co.uk
                        </a>
                      </p>
                      <p className="text-sm text-slate-500">We respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Opening Hours</h3>
                      <div className="text-slate-600 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Emergency Contact */}
              <Card className="p-6 bg-amber-50 border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2">Emergency Repairs</h3>
                <p className="text-amber-700 mb-2">24/7 emergency flooring repair service available</p>
                <a href="tel:07123456789" className="text-amber-600 font-semibold hover:underline">
                  07123 456 789
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-playfair mb-4">Find Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Visit our showroom in the heart of Birmingham to see our premium flooring collection
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-300 h-96 rounded-xl flex items-center justify-center"
          >
            <p className="text-slate-600">Interactive Map Placeholder</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
