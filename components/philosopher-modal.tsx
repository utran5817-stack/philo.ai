"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

interface Philosopher {
  name: string
  role: string
  description: string
  slug?: string
}

interface PhilosopherModalProps {
  philosopher: Philosopher
  topicId?: string
  onClose: () => void
}

export default function PhilosopherModal({ philosopher, topicId, onClose }: PhilosopherModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full max-w-md bg-card border border-primary/50 rounded-lg shadow-2xl overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        {/* Header with Close Button */}
        <div className="relative p-8 bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border">
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-5 h-5" />
          </motion.button>

          <h2 className="text-3xl font-bold text-accent pr-8" style={{ fontFamily: "var(--font-playfair)" }}>
            {philosopher.name}
          </h2>
          <p className="text-primary text-sm mt-2">{philosopher.role}</p>
        </div>

        <div className="p-8">
          <p className="text-foreground/80 leading-relaxed mb-6">{philosopher.description}</p>
          {topicId && philosopher.slug && (
            <Link
              href={`/topic/${topicId}/${philosopher.slug}`}
              onClick={onClose}
              className="w-full block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              Tìm Hiểu Sâu Về {philosopher.name}
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
