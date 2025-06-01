"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Star, Shield, Heart } from "lucide-react"
import Link from "next/link"

const stats = [
  { icon: <Users className="w-8 h-8" />, number: "5000+", label: "Happy Customers" },
  { icon: <Clock className="w-8 h-8" />, number: "25+", label: "Years Experience" },
  { icon: <Award className="w-8 h-8" />, number: "50+", label: "Industry Awards" },
  { icon: <Star className="w-8 h-8" />, number: "4.9", label: "Average Rating" },
]

const team = [
  {
    name: "James Mitchell",
    role: "Founder & Master Craftsman",
    image: "/placeholder.svg?height=300&width=300",
    experience: "25+ years",
    speciality: "Hardwood & Custom Installations",
  },
  {
    name: "Sarah Thompson",
    role: "Design Consultant",
    image: "/placeholder.svg?height=300&width=300",
    experience: "15+ years",
    speciality: "Interior Design & Color Coordination",
  },
  {
    name: "Michael Roberts",
    role: "Installation Manager",
    image: "/placeholder.svg?height=300&width=300",
    experience: "20+ years",
    speciality: "Commercial & Residential Projects",
  },
]

const values = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Quality Guarantee",
    description: "We stand behind every installation with comprehensive warranties and ongoing support.",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Customer First",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "Expert Craftsmanship",
    description: "Our certified technicians bring decades of experience to every project.",
  },
]

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              25+ years of excellence in premium flooring solutions across Birmingham
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-amber-600">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                Crafting Beautiful Floors Since 1998
              </h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <p>
                  Founded in Birmingham over 25 years ago, Premium Carpet & Flooring has grown from a small family
                  business to the West Midlands' most trusted flooring specialist.
                </p>
                <p>
                  Our journey began with a simple mission: to provide exceptional quality flooring with unmatched
                  customer service. Today, we've completed over 5,000 installations and earned numerous industry awards.
                </p>
                <p>
                  We believe that every floor tells a story, and we're honored to be part of creating beautiful, lasting
                  spaces for families and businesses across Birmingham.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our workshop"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">25+</div>
                  <div className="text-sm text-slate-600">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our Achievements</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                  <div className="text-amber-600 mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Meet Our Expert Team</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Passionate professionals dedicated to bringing your flooring vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-amber-600">{member.experience}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                    <p className="text-slate-600 text-sm">{member.speciality}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="text-amber-600 mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Certifications & Partnerships</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Trusted by leading manufacturers and certified by industry bodies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder-logo.svg"
                  alt={`Certification ${i}`}
                  width={120}
                  height={60}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Experience the Difference</h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Join thousands of satisfied customers who chose quality, expertise, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-slate-100">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600"
              >
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
