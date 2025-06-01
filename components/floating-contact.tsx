"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, X } from "lucide-react"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-4 flex flex-col gap-3"
          >
            <a
              href="https://wa.me/441212345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">WhatsApp</span>
            </a>

            <a
              href="tel:01212345678"
              className="flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">Call Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? "bg-gradient-to-r from-gray-600 to-gray-700" : "bg-gradient-to-r from-emerald-500 to-teal-500"
        }`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Phone className="w-6 h-6 text-white" />}
      </motion.button>
    </div>
  )
}
