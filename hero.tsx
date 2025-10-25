"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToMap = () => {
    const mapElement = document.getElementById("galaxy-map")
    mapElement?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-background"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary rounded-full mix-blend-screen filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Stars effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Number.POSITIVE_INFINITY }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 text-accent"
          style={{ fontFamily: "var(--font-playfair)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bạn đang trăn trở điều gì?
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-foreground/80 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Khám phá các trường phái triết học cổ điển và tìm câu trả lời cho những câu hỏi của bạn
        </motion.p>

        <motion.button
          onClick={scrollToMap}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 animate-pulse-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Bắt Đầu Hành Trình
        </motion.button>
      </div>
    </div>
  )
}
