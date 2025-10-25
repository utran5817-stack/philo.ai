"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Topic {
  id: string
  name: string
  tagline: string
}

const topics: Topic[] = [
  {
    id: "stoicism",
    name: "Chủ Nghĩa Khắc Kỷ",
    tagline: "Bình thản trước nghịch cảnh, tập trung vào những gì có thể kiểm soát.",
  },
  {
    id: "existentialism",
    name: "Chủ Nghĩa Hiện Sinh",
    tagline: "Tự do tạo ra ý nghĩa cuộc đời mình trong một vũ trụ phi lý.",
  },
  {
    id: "nihilism",
    name: "Chủ Nghĩa Hư Vô",
    tagline: "Hoài nghi về mọi giá trị và ý nghĩa khách quan của cuộc sống.",
  },
  {
    id: "utilitarianism",
    name: "Chủ Nghĩa Vị Lợi",
    tagline: "Hành động đúng là hành động mang lại hạnh phúc cho nhiều người nhất.",
  },
  {
    id: "rationalism",
    name: "Chủ Nghĩa Duy Lý",
    tagline: "Lý trí và logic là nguồn gốc của mọi tri thức chân thực.",
  },
  {
    id: "empiricism",
    name: "Chủ Nghĩa Kinh Nghiệm",
    tagline: "Mọi tri thức đều bắt nguồn từ kinh nghiệm và giác quan.",
  },
  {
    id: "postmodernism",
    name: "Chủ Nghĩa Hậu Hiện Đại",
    tagline: "Hoài nghi các 'đại tự sự' và sự thật khách quan.",
  },
]

export default function GalaxyMap3D({ onSelectTopic }: { onSelectTopic: (id: string) => void }) {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null)

  return (
    <div
      id="galaxy-map"
      className="relative w-full min-h-screen bg-gradient-to-b from-background via-slate-900 to-background py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-4"
          style={{ fontFamily: "var(--font-playfair)", color: "#D4AF37" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Bản Đồ Thiên Hà
        </motion.h2>

        <motion.p
          className="text-center mb-16 text-lg"
          style={{ color: "#E0E1DD" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Khám phá các trường phái triết học qua các chủ đề
        </motion.p>

        {/* Topic cards grid with nebula core design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredTopic(topic.id)}
              onMouseLeave={() => setHoveredTopic(null)}
              className="relative group cursor-pointer h-80"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden">
                {/* Outer blur layer */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.4), rgba(80, 200, 120, 0.2), transparent)",
                    filter: "blur(40px)",
                  }}
                  animate={hoveredTopic === topic.id ? { opacity: [0.6, 0.8, 0.6] } : { opacity: 0.4 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Middle blur layer */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 40%, rgba(80, 200, 120, 0.3), rgba(212, 175, 55, 0.1), transparent)",
                    filter: "blur(25px)",
                  }}
                  animate={hoveredTopic === topic.id ? { opacity: [0.5, 0.7, 0.5] } : { opacity: 0.3 }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                />

                {/* Inner core layer */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.5), rgba(80, 200, 120, 0.2), transparent)",
                    filter: "blur(15px)",
                  }}
                  animate={
                    hoveredTopic === topic.id
                      ? { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }
                      : { scale: 1, opacity: 0.5 }
                  }
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  {/* Title with slide-up animation */}
                  <motion.h3
                    className="text-2xl font-bold text-center px-6"
                    style={{ fontFamily: "var(--font-playfair)", color: "#D4AF37" }}
                    animate={hoveredTopic === topic.id ? { y: -20, opacity: 1 } : { y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {topic.name}
                  </motion.h3>

                  <motion.div
                    className="mt-4 text-center"
                    animate={hoveredTopic === topic.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    pointerEvents={hoveredTopic === topic.id ? "auto" : "none"}
                  >
                    <p className="text-sm mb-4" style={{ color: "#E0E1DD" }}>
                      {topic.tagline}
                    </p>
                    <button
                      onClick={() => onSelectTopic(topic.id)}
                      className="px-6 py-2 rounded-lg font-semibold transition-all"
                      style={{
                        backgroundColor: "#50C878",
                        color: "#0D1B2A",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)"
                      }}
                    >
                      KHÁM PHÁ
                    </button>
                  </motion.div>
                </div>
              </div>

              {hoveredTopic && hoveredTopic !== topic.id && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-black"
                  animate={{ opacity: 0.5, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
