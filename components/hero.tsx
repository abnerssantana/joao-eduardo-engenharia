"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import LogoAnimation from "./logo-animation"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { NavMenu } from "./nav-menu"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY === 0) {
          setIsVisible(true)
        } else if (window.scrollY > lastScrollY) {
          setIsVisible(false)
        } else {
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
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-background text-foreground py-8 sm:py-12 md:py-16 lg:py-20">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Navbar with animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-10"
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-44 py-3 sm:py-4 mx-auto flex justify-between items-center">
          <NavMenu />
          <ThemeToggle />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center relative z-1 w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <LogoAnimation />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-4 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 md:space-y-6"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-1xl font-light tracking-wider text-white drop-shadow-lg">
            JOÃO EDUARDO
            <span
              className="block text-base sm:text-lg md:text-xl lg:text-2xl text-primary mt-2 font-medium"
              style={{
                textShadow: '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)'
              }}
            >
              Engenharia
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-base text-gray-200 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto drop-shadow-md px-2 sm:px-4">
            Construindo o futuro com engenharia de excelência
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-12"
        >
          <Button
            variant="outline"
            className="text-sm sm:text-base text-primary border-primary hover:bg-primary hover:text-primary-foreground backdrop-blur-sm py-2 px-4 sm:py-3 sm:px-6"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Conheça Nossos Serviços
            <ArrowDown className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}