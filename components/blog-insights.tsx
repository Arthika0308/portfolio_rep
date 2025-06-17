"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Lightbulb, Clock, Tag } from "lucide-react"

interface Insight {
  id: string
  title: string
  content: string
  category: string
  readTime: string
  date: string
  tags: string[]
}

const insights: Insight[] = [
  {
    id: "1",
    title: "Why GraphRAG > Basic RAG",
    content:
      "Traditional RAG systems struggle with complex relationships in data. GraphRAG leverages knowledge graphs to understand entity relationships, providing more contextually accurate responses. The key is in the graph structure - it captures semantic relationships that vector embeddings alone miss.",
    category: "AI Architecture",
    readTime: "3 min",
    date: "2024-01-15",
    tags: ["GraphRAG", "Knowledge Graphs", "LLMs"],
  },
  {
    id: "2",
    title: "Multi-Agent Orchestration Patterns",
    content:
      "Building effective multi-agent systems requires careful orchestration patterns. I've found that hierarchical coordination with specialized agents (planner, executor, validator) works better than flat peer-to-peer communication. The key is defining clear interfaces and responsibilities.",
    category: "Agent Systems",
    readTime: "4 min",
    date: "2024-01-10",
    tags: ["Multi-Agent", "Orchestration", "System Design"],
  },
  {
    id: "3",
    title: "LLM Fine-tuning: Quality vs Quantity",
    content:
      "After fine-tuning dozens of models, I've learned that data quality trumps quantity every time. 1000 high-quality, diverse examples often outperform 10,000 repetitive ones. Focus on edge cases and failure modes in your training data.",
    category: "Machine Learning",
    readTime: "5 min",
    date: "2024-01-05",
    tags: ["Fine-tuning", "Data Quality", "LLMs"],
  },
  {
    id: "4",
    title: "GANs for Fraud Detection: Lessons Learned",
    content:
      "Using GANs for fraud detection taught me that adversarial training mirrors real-world fraud evolution. The generator learns to create sophisticated fraud patterns, while the discriminator becomes better at detection. This arms race improves both components.",
    category: "Deep Learning",
    readTime: "6 min",
    date: "2023-12-28",
    tags: ["GANs", "Fraud Detection", "Adversarial Learning"],
  },
  {
    id: "5",
    title: "Prompt Engineering: Beyond Templates",
    content:
      "Effective prompt engineering goes beyond templates. It's about understanding the model's reasoning process, providing context hierarchies, and using techniques like chain-of-thought and few-shot learning strategically. Think of prompts as programming languages.",
    category: "Prompt Engineering",
    readTime: "4 min",
    date: "2023-12-20",
    tags: ["Prompt Engineering", "LLMs", "AI Applications"],
  },
  {
    id: "6",
    title: "Edge AI: Optimization Strategies",
    content:
      "Deploying AI models on edge devices requires aggressive optimization. Model quantization, pruning, and knowledge distillation can reduce model size by 90% while maintaining 95% accuracy. The key is understanding the accuracy-latency-memory trade-offs.",
    category: "Edge Computing",
    readTime: "5 min",
    date: "2023-12-15",
    tags: ["Edge AI", "Model Optimization", "Deployment"],
  },
]

export default function BlogInsights() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextInsight = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % insights.length)
  }

  const prevInsight = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + insights.length) % insights.length)
  }

  const goToInsight = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const currentInsight = insights[currentIndex]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            AI Insights & Learnings
          </h2>
          <p className="text-gray-300 text-lg">Thoughts and discoveries from my AI engineering journey</p>
        </motion.div>

        <div className="relative">
          {/* Main insight card */}
          <div className="relative h-96 mb-8 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Card className="h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-yellow-500/20 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-yellow-500/20 rounded-lg">
                        <Lightbulb className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{currentInsight.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                          <span className="flex items-center">
                            <Tag className="w-4 h-4 mr-1" />
                            {currentInsight.category}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {currentInsight.readTime}
                          </span>
                          <span>{currentInsight.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed flex-grow mb-6">{currentInsight.content}</p>

                  <div className="flex flex-wrap gap-2">
                    {currentInsight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mb-8">
            <Button
              onClick={prevInsight}
              variant="outline"
              className="bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex space-x-2">
              {insights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToInsight(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-yellow-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextInsight}
              variant="outline"
              className="bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Insight grid preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.slice(0, 3).map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer"
                onClick={() => goToInsight(insights.indexOf(insight))}
              >
                <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-600/30 p-4 hover:border-yellow-500/40 transition-all duration-300 h-32">
                  <h4 className="text-white font-semibold text-sm mb-2 line-clamp-2">{insight.title}</h4>
                  <p className="text-gray-400 text-xs line-clamp-3">{insight.content.substring(0, 100)}...</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
