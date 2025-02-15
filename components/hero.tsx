"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import LogoAnimation from "./logo-animation"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import NavMenu from "./nav-menu"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY === 0) {
          // At the top of the page
          setIsVisible(true)
        } else if (window.scrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-background text-foreground pt-20 z-0">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/background-image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#1B332C]/85" />
        {/* Adiciona um gradiente sutil para melhorar a legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Navbar with animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm z-10"
      >
        <div className="container mx-auto w-3xl flex justify-between items-center">
          <NavMenu />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center relative z-1"
      >
        <LogoAnimation />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-wider text-white drop-shadow-lg">
            JOÃO EDUARDO
            <span 
              className="block text-xl md:text-2xl text-primary mt-2 font-medium"
              style={{
                textShadow: '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)'
              }}
            >
              Engenharia
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-96 mx-auto drop-shadow-md">
            Construindo o futuro com engenharia de excelência
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-12"
        >
          <Button
            variant="outline"
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground backdrop-blur-sm mb-4"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Conheça Nossos Serviços
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}