"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const projectManagementInfo = [
  {
    title: "Complexidade da Construção",
    content:
      "Construir ou reformar um imóvel envolve uma série de etapas que exigem coordenação, planejamento e execução minuciosa. A complexidade vai além da simples execução de um projeto, englobando desde a escolha dos materiais até o cumprimento de prazos, gestão de mão de obra e adequação orçamentária.",
    image: "/complexidade.jpg?height=400&width=600",
  },
  {
    title: "Desafios do Gerenciamento",
    content:
      "Gerenciamento de custos, cumprimento de prazos, coordenação de equipes e segurança do trabalho são alguns dos principais desafios enfrentados em uma obra. Um gerenciamento inadequado pode levar a custos extras, atrasos, retrabalhos e riscos à segurança dos trabalhadores.",
    image: "/desafios.jpg?height=400&width=600",
  },
  {
    title: "Importância do Gerenciamento",
    content:
      "O gerenciamento de obras não é apenas uma questão de garantir que o projeto seja concluído, mas sim de assegurar que ele seja executado da forma mais eficiente possível. Sem um gerenciamento adequado, os riscos de erros, atrasos e aumento de custos aumentam significativamente.",
    image: "/importancia.jpg?height=400&width=600",
  },
  {
    title: "Benefícios do Gerenciamento Profissional",
    content:
      "Um gerenciamento profissional garante eficiência no uso de recursos, visão estratégica do projeto, tomada de decisão rápida e assertiva, e maior satisfação do cliente. Isso resulta em obras entregues no prazo, dentro do orçamento e com alta qualidade.",
    image: "/beneficio.jpg?height=400&width=600",
  },
]

export default function ProjectManagement() {
  return (
    <section id="project-management" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-center mb-12 text-foreground"
        >
          Gerenciamento de Projetos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectManagementInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index === 0 ? "md:col-span-2 md:row-span-2" : ""} ${index === 3 ? "md:col-span-2" : ""}`}
            >
              <Card className="overflow-hidden h-full flex flex-col">
              <div className={`relative ${index === 0 ? "h-80 md:h-[520px]" : "h-48 md:h-64"}`}>
                  <Image src={info.image || "/placeholder.svg"} alt={info.title} layout="fill" objectFit="cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-foreground">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

