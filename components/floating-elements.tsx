"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, X, ArrowUp } from "lucide-react"

export default function FloatingElements() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show scroll to top button when scrolled
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Floating Contact */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isContactOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="mb-4 flex flex-col gap-3"
            >
              <motion.a
                href="https://wa.me/441212345678"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-xl transition-colors group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">WhatsApp</span>
              </motion.a>

              <motion.a
                href="tel:01212345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-full shadow-xl transition-colors group"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-medium">Call Now</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsContactOpen(!isContactOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
            isContactOpen ? "bg-slate-600 hover:bg-slate-700" : "bg-emerald-600 hover:bg-emerald-700"
          } text-white`}
        >
          {isContactOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-xl transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5 text-slate-600" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
