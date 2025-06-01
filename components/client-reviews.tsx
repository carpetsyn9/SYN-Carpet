"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Edgbaston",
    rating: 5,
    text: "Exceptional service from start to finish. The team was professional, punctual, and the quality of work exceeded our expectations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Harborne",
    rating: 5,
    text: "Transformed our entire ground floor with beautiful hardwood. The attention to detail and craftsmanship is outstanding.",
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "Moseley",
    rating: 5,
    text: "Professional installation and premium materials. Our new carpet looks amazing and feels incredibly comfortable.",
  },
]

export default function ClientReviews() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Client</span>{" "}
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hear what our satisfied customers have to say</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-emerald-200">
                    <Quote className="w-8 h-8" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed italic">"{review.text}"</p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-lg">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-gray-500 text-sm">{review.location}</div>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
