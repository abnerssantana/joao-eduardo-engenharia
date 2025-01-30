"use client"

import { motion } from "framer-motion"

export default function LogoAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-32 h-32 relative"
    >
      {/* Cube top */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-gray-400 transform rotate-45"
      />

      {/* Cube right */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-24 bg-[#7FB9A2]"
      >
        {/* E parts */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute top-2 right-0 w-8 h-2 bg-[#1B332C]"
        />
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-2 bg-[#1B332C]"
        />
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-2 right-0 w-8 h-2 bg-[#1B332C]"
        />
      </motion.div>

      {/* Cube left */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-24 bg-[#7FB9A2] opacity-80"
      />
    </motion.div>
  )
}

