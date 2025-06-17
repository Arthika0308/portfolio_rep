"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/components/hero-section"
import AboutAgent from "@/components/about-agent"
import ProjectsShowcase from "@/components/projects-showcase"
import ExperienceTimeline from "@/components/experience-timeline"
import BlogInsights from "@/components/blog-insights"
import AvatarAgent from "@/components/avatar-agent"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const [currentSection, setCurrentSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "experience", "blog", "avatar", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation currentSection={currentSection} />

      <main className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutAgent />
        </section>

        <section id="projects">
          <ProjectsShowcase />
        </section>

        <section id="experience">
          <ExperienceTimeline />
        </section>

        <section id="blog">
          <BlogInsights />
        </section>

        <section id="avatar">
          <AvatarAgent />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}
