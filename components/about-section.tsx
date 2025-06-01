"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Clock, Target } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Industry Recognition",
    description: "Multiple awards for excellence in craftsmanship and customer service",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Team",
    description: "Certified professionals with decades of combined experience",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Timely Delivery",
    description: "Consistent on-time project completion with zero compromise on quality",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Precision Focus",
    description: "Meticulous attention to detail in every aspect of our work",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
                <span className="text-emerald-700 font-medium text-sm">About Premium Flooring</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
                Crafting Excellence Since 2008
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  For over 15 years, Premium Flooring has been Birmingham's trusted partner in creating extraordinary
                  spaces. We believe that exceptional flooring is more than just a surface—it's the foundation of your
                  lifestyle.
                </p>
                <p>
                  Our commitment to excellence has earned us recognition as the region's premier flooring specialists,
                  with a portfolio spanning luxury residences, commercial spaces, and heritage properties.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </div>

            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full group">
              Our Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  animate={{ y: [0, -10, 0] }}
                  style={{ animationDuration: "6s", animationIterationCount: "infinite" }}
                >
                  <Image
                    src="/placeholder.svg?height=300&width=250"
                    alt="Craftsman at work"
                    width={250}
                    height={300}
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  animate={{ y: [0, 10, 0] }}
                  style={{ animationDuration: "8s", animationIterationCount: "infinite", animationDelay: "1s" }}
                >
                  <Image
                    src="/placeholder.svg?height=200&width=250"
                    alt="Premium materials"
                    width={250}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-6 pt-12">
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  animate={{ y: [0, -15, 0] }}
                  style={{ animationDuration: "7s", animationIterationCount: "infinite", animationDelay: "2s" }}
                >
                  <Image
                    src="/placeholder.svg?height=250&width=250"
                    alt="Finished installation"
                    width={250}
                    height={250}
                    className="w-full h-60 object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  animate={{ y: [0, 8, 0] }}
                  style={{ animationDuration: "9s", animationIterationCount: "infinite", animationDelay: "3s" }}
                >
                  <Image
                    src="/placeholder.svg?height=180&width=250"
                    alt="Quality inspection"
                    width={250}
                    height={180}
                    className="w-full h-44 object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating Achievement Card with enhanced animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-slate-200"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 1, 0],
              }}
              style={{
                animationDuration: "4s",
                animationIterationCount: "infinite",
                animationDelay: "1s",
              }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Award className="w-6 h-6 text-emerald-600" />
                </motion.div>
                <div>
                  <div className="font-semibold text-slate-900">Award Winning</div>
                  <div className="text-sm text-slate-600">Excellence in Craftsmanship</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  <motion.div className="text-emerald-600" whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                    {achievement.icon}
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold text-slate-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {achievement.title}
                </motion.h3>
                <motion.p
                  className="text-slate-600 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {achievement.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
