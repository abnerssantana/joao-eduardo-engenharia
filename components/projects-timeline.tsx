"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    year: "2023",
    title: "Edifício Corporativo Sustentável",
    description: "Construção de um edifício de escritórios com certificação LEED Gold.",
  },
  {
    year: "2022",
    title: "Revitalização de Centro Histórico",
    description: "Restauração e modernização de um quarteirão histórico no centro da cidade.",
  },
  {
    year: "2021",
    title: "Complexo Residencial Inteligente",
    description: "Desenvolvimento de um condomínio com 200 unidades e tecnologia de automação residencial.",
  },
  {
    year: "2020",
    title: "Ponte Estaiada",
    description: "Projeto e construção de uma ponte estaiada de 500 metros sobre o Rio Grande.",
  },
]

export default function ProjectsTimeline() {
  return (
    <section id="projects-timeline" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-center mb-12 text-foreground"
        >
          Linha do Tempo de Projetos
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary" />

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} mb-8`}
            >
              <Card className={`w-full max-w-md ${index % 2 === 0 ? "mr-8" : "ml-8"} bg-card border-border`}>
                <CardHeader>
                  <CardTitle className="text-primary">{project.year}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-medium mb-2 text-foreground">{project.title}</h3>
                  <p className="text-primary">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

