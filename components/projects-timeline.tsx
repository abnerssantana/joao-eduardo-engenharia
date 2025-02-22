"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Building2, MapPin, Building, HardHat } from "lucide-react"

const projects = [
  {
    year: "2020",
    title: "Edifício Ankaá",
    description: "Gestão do término da construção de edifício residencial de alto padrão com 32 unidades em São José do Rio Preto.",
    icon: Building2
  },
  {
    year: "2020",
    title: "Mercado Livre",
    description: "Gerenciamento de ampliação de escritório e área de vivência no Centro de Distribuição em São José do Rio Preto.",
    icon: Building
  },
  {
    year: "2019-2020",
    title: "Martrip Alimentos",
    description: "Gerenciamento total de reforma e reforço estrutural do antigo Frigorífico Guapiassuíno em Guapiaçu/SP.",
    icon: HardHat
  },
  {
    year: "2019",
    title: "Decathlon",
    description: "Restauração e pintura externa, substituição de painéis luminosos e sistema de iluminação em São José do Rio Preto.",
    icon: Building
  },
  {
    year: "2013-2016",
    title: "Tessler Engenharia",
    description: "Gerenciamento de diversas obras comerciais e residenciais em São José do Rio Preto/SP.",
    icon: MapPin
  },
  {
    year: "2009-2012",
    title: "Later Engenharia",
    description: "Administração de obras de shoppings e edifícios residenciais de alto padrão em Goiânia/GO.",
    icon: MapPin
  }
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
          className="text-4xl font-light text-center mb-16 text-foreground"
        >
          Linha do Tempo de Projetos
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30 hidden md:block" />
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } mb-12 relative`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 md:block z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <Card
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  } bg-card hover:shadow-lg transition-shadow duration-300 border-primary/10`}
                >
                  <CardHeader className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <CardTitle className="text-primary text-lg">{project.year}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}