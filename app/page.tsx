"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ProjectsTimeline from "@/components/projects-timeline"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ProjectManagement from "@/components/project-management"

export default function Home() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
      if (href?.startsWith("#")) {
        const targetId = href.replace("#", "")
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
          behavior: "smooth",
        })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <div className="relative z-0">
          <Services />
        </div>
        <div className="relative z-0">
          <ProjectManagement />
        </div>
        <div className="relative z-0">
          <ProjectsTimeline />
        </div>
        <div className="relative z-0">
          <Gallery />
        </div>
        <div className="relative z-0">
          <Testimonials />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

