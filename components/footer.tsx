"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a 
            href="#home"
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Sanjeet Kumar</span>
          </motion.a>

          

          {/* Year */}
          <p className="text-muted-foreground text-sm font-mono">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
