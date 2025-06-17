"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, Award, Bot, Code, Network, Shield, Brain, Zap } from "lucide-react"

interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  logo: string
  icon: React.ComponentType<{ className?: string }>
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "ConceptVines",
    position: "AI Developer",
    duration: "12/2024 - Present",
    location: "Chennai, Tamil Nadu",
    description: "Developing AI workflows and intelligent solutions using cutting-edge technologies and frameworks.",
    achievements: [
      "Developed AI workflows using Crew AI and integrated AWS Bedrock",
      "Created GraphRAG systems with Neo4j and used sentence transformers for retrieval",
      "Built and deployed AI apps using Flask, FastAPI, Streamlit, and Gradio",
      "Used Nginx, Docker, and VMs for secure model deployment",
      "Built conversational AI using avatars and TTS with Elai.io and D-ID",
      "Worked on proposal evaluation, fraud detection (GAT, GAN), and synthetic data generation",
    ],
    technologies: [
      "Crew AI",
      "AWS Bedrock",
      "Neo4j",
      "Flask",
      "FastAPI",
      "Streamlit",
      "Gradio",
      "Docker",
      "Nginx",
      "Elai.io",
      "D-ID",
    ],
    logo: "/placeholder.svg?height=60&width=60&text=CV",
    icon: Bot,
  },
  {
    id: "2",
    company: "Skanda Marketing",
    position: "Frontend Developer & Digital Marketer",
    duration: "05/2023 - 11/2024",
    location: "Coimbatore, Tamil Nadu",
    description:
      "Full-stack development and digital marketing with focus on responsive web design and user engagement.",
    achievements: [
      "Designed responsive websites using HTML, CSS, Bootstrap, and JavaScript",
      "Improved UX/UI and website SEO for increased user engagement",
      "Managed lead generation and social media strategies to grow the business",
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "SEO", "Digital Marketing"],
    logo: "/placeholder.svg?height=60&width=60&text=SM",
    icon: Code,
  },
]

const projects: Experience[] = [
  {
    id: "3",
    company: "Intel",
    position: "GraphRAG Knowledge System",
    duration: "Project",
    location: "AI Developer",
    description:
      "Built a Graph-based RAG system integrating Neo4j, vector databases, and OpenAI embeddings to enable contextual knowledge retrieval across structured and unstructured data sources.",
    achievements: [
      "Integrated Neo4j with vector databases for hybrid knowledge retrieval",
      "Implemented OpenAI embeddings for semantic search capabilities",
      "Built scalable API using Flask and deployed with Docker",
      "Achieved contextual knowledge retrieval across multiple data sources",
    ],
    technologies: [
      "Neo4j",
      "OpenAI Embeddings",
      "Sentence Transformers",
      "Python",
      "FlaskAPI",
      "Docker",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "ChromaDB",
    ],
    logo: "/placeholder.svg?height=60&width=60&text=Intel",
    icon: Network,
  },
  {
    id: "4",
    company: "Intel",
    position: "Fraud Detection Using GAT and GAN",
    duration: "Project",
    location: "Machine Learning Engineer",
    description:
      "Implemented a hybrid GAT-GAN model to detect fraudulent transactions by learning graph-structured behavior patterns and generating synthetic anomalies for model training.",
    achievements: [
      "Developed hybrid GAT-GAN architecture for fraud detection",
      "Implemented graph-structured behavior pattern analysis",
      "Generated synthetic anomalies for enhanced model training",
      "Achieved high accuracy in fraudulent transaction detection",
    ],
    technologies: ["PyTorch", "DGL", "GAN", "GAT", "Python", "Cypher (CQL)", "Neo4j"],
    logo: "/placeholder.svg?height=60&width=60&text=Intel",
    icon: Shield,
  },
  {
    id: "5",
    company: "Intel",
    position: "Fall Risk Prediction Using DQN",
    duration: "Project",
    location: "Reinforcement Learning Engineer",
    description:
      "Designed a DQN-based agent to classify fall risk levels in elderly patients using synthetic health data, trained in a custom RL environment for optimal clinical decision simulation.",
    achievements: [
      "Designed DQN-based agent for fall risk classification",
      "Created custom RL environment for clinical decision simulation",
      "Processed synthetic health data for model training",
      "Achieved optimal clinical decision-making accuracy",
    ],
    technologies: ["Python", "PyTorch", "DQN", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    logo: "/placeholder.svg?height=60&width=60&text=Intel",
    icon: Brain,
  },
  {
    id: "6",
    company: "IQVIA",
    position: "Diagnosis Code Validation & Auto-JIRA Agent",
    duration: "Project",
    location: "AI Automation Engineer",
    description:
      "Created an NLP-based system to detect invalid diagnosis codes and auto-fill missing values. Automated JIRA ticket creation for anomalies to streamline healthcare data workflows.",
    achievements: [
      "Built NLP-based system for diagnosis code validation",
      "Implemented auto-fill functionality for missing values",
      "Automated JIRA ticket creation for anomaly detection",
      "Streamlined healthcare data workflows significantly",
    ],
    technologies: ["Python", "spaCy", "Regex", "FastAPI", "Jira API", "Pandas", "NumPy"],
    logo: "/placeholder.svg?height=60&width=60&text=IQVIA",
    icon: Zap,
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Experience & Projects
          </h2>
          <p className="text-gray-300 text-lg">My journey through AI development and professional projects</p>
        </motion.div>

        <div className="space-y-16">
          {/* Work Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Building className="w-6 h-6 mr-3 text-cyan-400" />
              Work Experience
            </h3>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => {
                  const IconComponent = exp.icon
                  return (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="relative"
                    >
                      <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                      <div className="ml-20">
                        <Card className="bg-gray-800/50 backdrop-blur-sm border-cyan-500/20 p-6 hover:border-cyan-400/40 transition-all duration-300">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="p-2 bg-cyan-500/20 rounded-lg">
                                <IconComponent className="w-5 h-5 text-cyan-400" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                                <div className="flex items-center text-cyan-400 text-sm">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {exp.duration}
                                </div>
                              </div>
                              <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
                                <div className="flex items-center">
                                  <Building className="w-4 h-4 mr-1" />
                                  {exp.company}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {exp.location}
                                </div>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-300 mb-4">{exp.description}</p>

                          <div className="mb-4">
                            <h4 className="text-white font-semibold mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-2 text-yellow-400" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="text-gray-300 text-sm flex items-start">
                                  <span className="text-cyan-400 mr-2">•</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-white font-semibold mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Professional Projects Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-purple-400" />
              Professional Projects
            </h3>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-500 to-red-600"></div>

              <div className="space-y-12">
                {projects.map((project, index) => {
                  const IconComponent = project.icon
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-4 border-gray-900 z-10"></div>

                      <div className="ml-20">
                        <Card className="bg-gray-800/50 backdrop-blur-sm border-purple-500/20 p-6 hover:border-purple-400/40 transition-all duration-300">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="p-2 bg-purple-500/20 rounded-lg">
                                <IconComponent className="w-5 h-5 text-purple-400" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">{project.position}</h3>
                                <div className="flex items-center text-purple-400 text-sm">
                                  <Building className="w-4 h-4 mr-1" />
                                  {project.company}
                                </div>
                              </div>
                              <div className="text-gray-400 text-sm mb-3">
                                <span className="text-purple-400 font-medium">Role:</span> {project.location}
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-300 mb-4">{project.description}</p>

                          <div className="mb-4">
                            <h4 className="text-white font-semibold mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-2 text-yellow-400" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1">
                              {project.achievements.map((achievement, i) => (
                                <li key={i} className="text-gray-300 text-sm flex items-start">
                                  <span className="text-purple-400 mr-2">•</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-white font-semibold mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
