"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import GalaxyMap3D from "@/components/galaxy-map-3d"
import TopicPage from "@/components/topic-page"

export default function Home() {
  const [currentTopic, setCurrentTopic] = useState<string | null>(null)

  if (currentTopic) {
    return <TopicPage topicId={currentTopic} onBack={() => setCurrentTopic(null)} />
  }

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <GalaxyMap3D onSelectTopic={setCurrentTopic} />
    </main>
  )
}
