"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import TopicCard from "./topic-card"

const topics = [
  {
    id: "stoicism",
    name: "Chủ Nghĩa Khắc Kỷ",
    description: "Nghệ thuật bình thản trước biến cố",
    color: "from-blue-500 to-cyan-500",
    philosophers: ["Marcus Aurelius", "Seneca", "Epictetus"],
  },
  {
    id: "epicureanism",
    name: "Chủ Nghĩa Dã Sống",
    description: "Tìm kiếm nirvana qua sự đơn giản",
    color: "from-amber-500 to-orange-500",
    philosophers: ["Epicurus", "Lucretius"],
  },
  {
    id: "platonism",
    name: "Chủ Nghĩa Platon",
    description: "Thế giới của những ý tưởng hoàn hảo",
    color: "from-purple-500 to-pink-500",
    philosophers: ["Plato", "Plotinus"],
  },
  {
    id: "aristotelian",
    name: "Chủ Nghĩa Aristotle",
    description: "Đạo đức qua sự cân bằng",
    color: "from-green-500 to-emerald-500",
    philosophers: ["Aristotle", "Thomas Aquinas"],
  },
  {
    id: "cynicism",
    name: "Chủ Nghĩa Khoa Học",
    description: "Sự tự do qua sự từ bỏ",
    color: "from-red-500 to-rose-500",
    philosophers: ["Diogenes", "Crates"],
  },
  {
    id: "skepticism",
    name: "Chủ Nghĩa Hoài Nghi",
    description: "Tìm kiếm sự thật qua nghi vấn",
    color: "from-indigo-500 to-blue-500",
    philosophers: ["Pyrrho", "Sextus Empiricus"],
  },
]

export default function GalaxyMap({ onSelectTopic }: { onSelectTopic: (id: string) => void }) {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null)

  return (
    <div
      id="galaxy-map"
      className="relative w-full min-h-screen bg-gradient-to-b from-background via-slate-900 to-background py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-4 text-accent"
          style={{ fontFamily: "var(--font-playfair)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Bản Đồ Thiên Hà
        </motion.h2>

        <motion.p
          className="text-center text-foreground/70 mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Khám phá các trường phái triết học qua các chủ đề
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredTopic(topic.id)}
              onMouseLeave={() => setHoveredTopic(null)}
            >
              <TopicCard
                topic={topic}
                isHovered={hoveredTopic === topic.id}
                onExplore={() => onSelectTopic(topic.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
