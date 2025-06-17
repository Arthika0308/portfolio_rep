"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, User, Code, Briefcase, BookOpen, Video, Mail, ChevronRight } from "lucide-react"

interface NavigationProps {
  currentSection: string
}

const navItems = [
  { id: "hero", icon: Bot, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: Code, label: "Projects" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "blog", icon: BookOpen, label: "Insights" },
  { id: "avatar", icon: Video, label: "Avatar" },
  { id: "contact", icon: Mail, label: "Contact" },
]

export default function Navigation({ currentSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Toggle Arrow - Always Visible */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-colors shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronRight size={16} />
        </motion.div>
      </motion.button>

      {/* Navigation Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 border border-cyan-500/20 shadow-xl"
            style={{ marginLeft: "40px" }} // Offset to account for arrow button
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = currentSection === item.id

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id)
                      setIsOpen(false) // Close sidebar after navigation
                    }}
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                  </motion.button>
                )
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
