"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, X } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function AIChat({
  topicId,
  topicName,
  onClose,
}: {
  topicId: string
  topicName: string
  onClose: () => void
}) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Đây là một câu trả lời mẫu về "${topicName}". Trong một ứng dụng thực tế, đây sẽ là phản hồi từ AI được huấn luyện về triết học. Câu hỏi của bạn là: "${input}"`,
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full max-w-2xl h-96 bg-card border border-primary/50 rounded-lg shadow-2xl flex flex-col"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-accent">Cuộc Đối Thoại Ánh Sáng</h3>
            <p className="text-sm text-foreground/60">Đang thảo luận về {topicName}</p>
          </div>
          <motion.button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                }`}
              >
                {message.content}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="bg-muted text-foreground px-4 py-2 rounded-lg">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Đặt câu hỏi của bạn..."
            className="flex-1 px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
