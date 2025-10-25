"use client"

import { motion } from "framer-motion"

interface Topic {
  id: string
  name: string
  description: string
  color: string
  philosophers: string[]
}

export default function TopicCard({
  topic,
  isHovered,
  onExplore,
}: {
  topic: Topic
  isHovered: boolean
  onExplore: () => void
}) {
  return (
    <motion.div className="relative group cursor-pointer" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      {/* Main circle */}
      <div className={`relative w-full aspect-square rounded-full bg-gradient-to-br ${topic.color} p-1 shadow-2xl`}>
        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
          <div className="text-center px-6">
            <h3 className="text-2xl font-bold text-accent mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              {topic.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Info card on hover */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        pointerEvents={isHovered ? "auto" : "none"}
      >
        <div className="bg-card border border-primary/50 rounded-lg p-6 w-80 shadow-2xl backdrop-blur-sm">
          <h4 className="text-lg font-semibold text-accent mb-2">{topic.name}</h4>
          <p className="text-foreground/80 text-sm mb-4">{topic.description}</p>
          <button
            onClick={onExplore}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            KHÁM PHÁ
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
