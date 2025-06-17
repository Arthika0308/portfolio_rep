"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Arthika0308",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/arthika3",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:arthika.v.s.2017@gmail.com",
    },
  ]

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Arthika V S
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI Engineer specializing in Generative AI, LLMs, and intelligent systems. Building the future of
              artificial intelligence, one algorithm at a time.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                )
              })}
            </div>
            <p className="text-gray-400 text-sm">Open to collaborations and exciting AI projects</p>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>Built with LLMs and</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>© 2024 Arthika V S</span>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <a
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
            >
              Powered by v0.dev
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
