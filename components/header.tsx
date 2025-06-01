"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ArrowRight } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-slate-200/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-emerald-900 rounded-xl flex items-center justify-center shadow-xl">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-sm">PF</span>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
            </motion.div>
            <div className="hidden sm:block">
              <div className="font-playfair text-2xl font-bold text-slate-900">Premium Flooring</div>
              <div className="text-xs text-slate-600 tracking-wider uppercase">Birmingham</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-slate-700 hover:text-emerald-600 font-medium transition-all duration-300 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:01212345678"
              className="flex items-center text-slate-700 hover:text-emerald-600 transition-colors group"
            >
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-emerald-50 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500">Call us</div>
                <div className="font-semibold">0121 234 5678</div>
              </div>
            </a>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              Get Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50"
          >
            <div className="px-6 py-8 space-y-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-slate-700 hover:text-emerald-600 font-medium py-2 transition-colors text-lg"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 border-t border-slate-200">
                <a href="tel:01212345678" className="flex items-center text-slate-700 mb-6">
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="font-semibold">0121 234 5678</span>
                </a>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-full">
                  Get Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
