"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Filter, Brain, Network, Zap, Bot, Shield } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
  image: string
  icon: React.ComponentType<{ className?: string }>
}

const projects: Project[] = [
  {
    id: "1",
    title: "GraphRAG Implementation",
    description: "Advanced retrieval-augmented generation using knowledge graphs",
    longDescription:
      "Built a sophisticated GraphRAG system that combines graph databases with LLMs for enhanced context-aware responses. Implemented using Neo4j, LangChain, and custom embedding strategies.",
    tags: ["GraphRAG", "Neo4j", "LangChain", "Python", "LLMs"],
    category: "GraphRAG",
    githubUrl: "https://github.com/Arthika0308",
    image: "/placeholder.svg?height=200&width=300&text=GraphRAG System",
    icon: Network,
  },
  {
    id: "2",
    title: "GAT-GAN Fraud Detection",
    description: "Graph Attention Networks with GANs for financial fraud detection",
    longDescription:
      "Developed a hybrid model combining Graph Attention Networks with Generative Adversarial Networks to detect fraudulent transactions with 95% accuracy.",
    tags: ["GANs", "Graph Neural Networks", "PyTorch", "Fraud Detection"],
    category: "GANs",
    githubUrl: "https://github.com/Arthika0308",
    image: "/placeholder.svg?height=200&width=300&text=Fraud Detection",
    icon: Shield,
  },
  {
    id: "3",
    title: "Fall Risk Prediction System",
    description: "ML model for predicting fall risk in elderly patients",
    longDescription:
      "Created a comprehensive machine learning pipeline to predict fall risk using sensor data and patient history, achieving 92% prediction accuracy.",
    tags: ["Machine Learning", "Healthcare", "Python", "Scikit-learn"],
    category: "LLMs",
    githubUrl: "https://github.com/Arthika0308",
    image: "/placeholder.svg?height=200&width=300&text=Fall Risk Prediction",
    icon: Brain,
  },
  {
    id: "4",
    title: "Auto-JIRA Agent",
    description: "Intelligent agent for automated JIRA task management",
    longDescription:
      "Built an autonomous agent that automatically creates, assigns, and tracks JIRA tickets based on natural language inputs and project context.",
    tags: ["Agents", "Automation", "JIRA API", "NLP"],
    category: "Agents",
    githubUrl: "https://github.com/Arthika0308",
    image: "/placeholder.svg?height=200&width=300&text=JIRA Agent",
    icon: Bot,
  },
  {
    id: "5",
    title: "Multi-Agent Orchestration",
    description: "Framework for coordinating multiple AI agents",
    longDescription:
      "Designed and implemented a multi-agent system that coordinates specialized AI agents for complex task execution and decision making.",
    tags: ["Multi-Agent", "Orchestration", "Python", "Microservices"],
    category: "Agents",
    githubUrl: "https://github.com/Arthika0308",
    image: "/placeholder.svg?height=200&width=300&text=Multi-Agent System",
    icon: Network,
  },
  {
    id: "6",
    title: "LLM Fine-tuning Pipeline",
    description: "Automated pipeline for fine-tuning large language models",
    longDescription:
      "Created an end-to-end pipeline for fine-tuning LLMs on domain-specific data with automated hyperparameter optimization and evaluation.",
    tags: ["LLMs", "Fine-tuning", "Hugging Face", "MLOps"],
    category: "LLMs",
    githubUrl: "https://github.com/Arthika0308",
    image: "/placeholder.svg?height=200&width=300&text=LLM Pipeline",
    icon: Zap,
  },
]

const categories = ["All", "LLMs", "GraphRAG", "GANs", "Agents"]

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [flippedCard, setFlippedCard] = useState<string | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects Showcase
          </h2>
          <p className="text-gray-300 text-lg mb-8">Explore my AI projects and intelligent systems</p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                } transition-all duration-300`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-80"
                >
                  <div
                    className="relative w-full h-full cursor-pointer"
                    onMouseEnter={() => setFlippedCard(project.id)}
                    onMouseLeave={() => setFlippedCard(null)}
                  >
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      style={{ transformStyle: "preserve-3d" }}
                      animate={{ rotateY: flippedCard === project.id ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Front of card */}
                      <Card
                        className="absolute inset-0 w-full h-full bg-gray-800/50 backdrop-blur-sm border-cyan-500/20 p-6 flex flex-col"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <div className="flex items-center justify-start mb-4">
                          <div className="p-3 bg-cyan-500/20 rounded-lg">
                            <IconComponent className="w-6 h-6 text-cyan-400" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-cyan-500/20 text-cyan-400 text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge variant="secondary" className="bg-gray-600 text-gray-300 text-xs">
                              +{project.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </Card>

                      {/* Back of card */}
                      <Card
                        className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border-cyan-500/20 p-6 flex flex-col"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-cyan-500/20 rounded-lg mr-3">
                            <IconComponent className="w-5 h-5 text-cyan-400" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-4 flex-grow">{project.longDescription}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-cyan-500/20 text-cyan-400 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-cyan-500 to-blue-600"
                              onClick={() => window.open(project.liveUrl, "_blank")}
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Live
                            </Button>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
