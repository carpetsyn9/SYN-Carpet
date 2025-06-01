"use client"

import { motion } from "framer-motion"

export default function AnimatedLogo() {
  return (
    <motion.div
      className="relative w-12 h-12"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Background Circle */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg"
        animate={{
          background: [
            "linear-gradient(135deg, #10b981 0%, #0d9488 100%)",
            "linear-gradient(135deg, #059669 0%, #0f766e 100%)",
            "linear-gradient(135deg, #10b981 0%, #0d9488 100%)",
          ],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Carpet Pattern */}
      <div className="absolute inset-2 flex flex-col justify-center items-center">
        {/* Carpet Fibers */}
        <motion.div
          className="flex space-x-0.5"
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 h-3 bg-white rounded-full"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* PF Text */}
        <motion.div
          className="text-white font-bold text-xs mt-1"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          PF
        </motion.div>
      </div>

      {/* Floating Particles */}
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300 rounded-full"
        animate={{
          y: [0, -4, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-teal-300 rounded-full"
        animate={{
          y: [0, 4, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
      />
    </motion.div>
  )
}
