"use client"

import { motion } from "framer-motion"
import LogoAnimation from "./logo-animation"
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="scale-75">
              <LogoAnimation />
            </div>
            <h3 className="text-xl font-light mt-4 text-foreground">JOÃO EDUARDO</h3>
            <p className="text-primary">Engenharia</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-foreground font-medium mb-4">Contato</h4>
            <ul className="space-y-2 text-primary">
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 mr-2" />
                (17) 98206-8880
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 mr-2" />
                engenheirojoaoeduardo@gmail.com
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                São José do Rio Preto, São Paulo
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h4 className="text-foreground font-medium mb-4">Redes Sociais</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/joaoeduardoengenharia/" 
                className="text-primary hover:text-foreground transition-colors"
                target="_blank" 
                rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/engenheirojoaoeduardo/" 
                className="text-primary hover:text-foreground transition-colors" 
                target="_blank"
                rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-4 border-border text-center text-primary"
        >
          <p>&copy; {new Date().getFullYear()} João Eduardo Engenharia. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}

