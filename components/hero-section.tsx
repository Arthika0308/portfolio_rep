"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, MessageCircle, Sparkles } from "lucide-react"

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Hi, I'm Arthika, I build intelligent systems with Generative AI, LLMs, and Agents."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Engineer & System Architect</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Arthika V S
          </h1>

          <div className="h-20 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-300 font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore My Projects
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              const link = document.createElement("a")
              link.href = "/Arthika_VS_Resume.pdf"
              link.download = "Arthika_VS_Resume.pdf"
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>

          <Button
            variant="outline"
            onClick={scrollToAbout}
            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Ask My AI Bot
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-cyan-400 font-semibold mb-2">Generative AI</h3>
              <p className="text-gray-300 text-sm">
                Building next-gen AI applications with LLMs and advanced prompt engineering
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-blue-400 font-semibold mb-2">Agentic Systems</h3>
              <p className="text-gray-300 text-sm">
                Designing autonomous agents and multi-agent orchestration frameworks
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-purple-400 font-semibold mb-2">Graph AI</h3>
              <p className="text-gray-300 text-sm">
                Implementing GraphRAG and knowledge graph solutions for complex reasoning
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
