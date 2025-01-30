"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, HardHat, Wrench } from "lucide-react"

const services = [
  {
    icon: <Building2 className="h-12 w-12 text-custom-light" />,
    title: "Gerenciamento de Obras",
    description: "Gestão completa do seu projeto, desde o planejamento até a entrega final.",
  },
  {
    icon: <HardHat className="h-12 w-12 text-custom-light" />,
    title: "Construções",
    description: "Execução de projetos residenciais e comerciais com excelência e qualidade.",
  },
  {
    icon: <Wrench className="h-12 w-12 text-custom-light" />,
    title: "Reformas",
    description: "Transformação e renovação de espaços com soluções modernas e eficientes.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-custom-light">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-center mb-12 text-custom-dark"
        >
          Nossos Serviços
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-custom-dark border-custom-light/20 hover:border-custom-light/40 transition-colors">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-custom-light">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-custom-light text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

