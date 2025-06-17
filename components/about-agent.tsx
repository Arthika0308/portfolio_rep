"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function AboutAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Arthika's AI assistant. Ask me anything about her background, skills, or experience!",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const responses: Record<string, string> = {
    skills:
      "Arthika specializes in AI Development with expertise in LLMs (Hugging Face, vLLM, Ollama), AI Agents (Crew AI), GraphRAG systems, and deployment technologies (Docker, Nginx, AWS, Azure). She's proficient in Python, JavaScript, and has experience with frameworks like Flask, FastAPI, Streamlit, and Gradio.",
    experience:
      "She currently works as an AI Developer at ConceptVines (Dec 2024 - Present) in Chennai, developing AI workflows with Crew AI and AWS Bedrock. Previously, she was a Frontend Developer & Digital Marketer at Skanda Marketing (May 2023 - Nov 2024) in Coimbatore, focusing on responsive web design and digital marketing strategies.",
    projects:
      "Her key projects include: GraphRAG Knowledge System with Intel (Neo4j, OpenAI embeddings), Fraud Detection using GAT-GAN models, Fall Risk Prediction using DQN for elderly patients, and Diagnosis Code Validation & Auto-JIRA Agent for IQVIA. She's worked extensively with graph databases, reinforcement learning, and NLP systems.",
    education:
      "Arthika has a B.Tech in Information Technology from KGiSL Institute of Technology, Tamil Nadu (2019-2023) with 8.4 CGPA. She has completed several professional courses including Programming with JavaScript and Python from Meta (Coursera), and C Programming from GUVI.",
    tools:
      "She works with a comprehensive tech stack including: LLMs & AI Tools (Hugging Face, vLLM, Ollama, LangChain, LangGraph, GraphRAG), Databases (Neo4j, SQL, ChromaDB), AI Agents & Video Avatars (Crew AI, Elai.io, D-ID), Deployment (Docker, Nginx, AWS, Azure), and ML Libraries (TensorFlow, PyTorch, Scikit-learn).",
    contact:
      "You can reach Arthika at arthika.v.s.2017@gmail.com, phone: 6385526623, or connect with her on LinkedIn at linkedin.com/in/arthika3. She's based in Coimbatore, Tamil Nadu, India.",
    default:
      "I can tell you about Arthika's skills, experience, projects, education, tools she works with, or her contact information. What would you like to know?",
  }

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("skill") || lowerQuery.includes("technology") || lowerQuery.includes("tech")) {
      return responses.skills
    } else if (lowerQuery.includes("experience") || lowerQuery.includes("work") || lowerQuery.includes("job")) {
      return responses.experience
    } else if (lowerQuery.includes("project") || lowerQuery.includes("build") || lowerQuery.includes("created")) {
      return responses.projects
    } else if (lowerQuery.includes("education") || lowerQuery.includes("study") || lowerQuery.includes("degree")) {
      return responses.education
    } else if (lowerQuery.includes("tool") || lowerQuery.includes("framework") || lowerQuery.includes("library")) {
      return responses.tools
    } else if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("phone")) {
      return responses.contact
    } else {
      return responses.default
    }
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(input),
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Interactive AI Agent
          </h2>
          <p className="text-gray-300 text-lg">
            Chat with my AI assistant to learn more about my background and expertise
          </p>
        </motion.div>

        <Card className="bg-gray-800/50 backdrop-blur-sm border-cyan-500/20 p-6">
          <div className="h-96 overflow-y-auto mb-4 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.isUser ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <div className={`p-2 rounded-full ${message.isUser ? "bg-cyan-500" : "bg-purple-500"}`}>
                      {message.isUser ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${message.isUser ? "bg-cyan-500/20 text-cyan-100" : "bg-gray-700 text-gray-100"}`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="p-2 rounded-full bg-purple-500">
                    <Bot size={16} />
                  </div>
                  <div className="p-3 rounded-lg bg-gray-700">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about skills, experience, projects, contact..."
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
            <Button
              onClick={handleSend}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
            >
              <Send size={16} />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
