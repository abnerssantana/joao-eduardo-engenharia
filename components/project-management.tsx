"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const projectManagementInfo = [
  {
    title: "Desafios do Gerenciamento",
    content:
      "Gerenciar uma obra envolve superar diversos obstáculos que podem impactar o sucesso do projeto. O controle de custos exige planejamento para evitar despesas extras e manter o orçamento equilibrado. O cumprimento de prazos depende de um cronograma eficiente e de uma execução organizada. A coordenação de equipes é fundamental para evitar falhas de comunicação e retrabalhos. A gestão da segurança no canteiro de obras deve ser rigorosa, garantindo a proteção dos trabalhadores e o cumprimento das normas.",
    image: "/complexidade.jpg?height=400&width=600",
  },
  {
    title: "Complexidade da Construção",
    content:
      "Construir ou reformar um imóvel envolve uma série de etapas que exigem coordenação, planejamento e execução minuciosa. A complexidade vai além da simples execução de um projeto, englobando desde a escolha dos materiais até o cumprimento de prazos, gestão de mão de obra e adequação orçamentária.",
    image: "/desafios.jpg?height=400&width=600",
  },
  {
    title: "Importância do Gerenciamento",
    content:
      "O gerenciamento de obras é essencial para garantir que todas as etapas do projeto ocorram com eficiência e qualidade. Uma boa gestão reduz riscos, como erros de execução, atrasos no cronograma e aumento de custos. Além disso, proporciona uma visão clara do andamento da obra, facilitando a tomada de decisões e o cumprimento das expectativas do cliente.",
    image: "/importancia.jpg?height=400&width=600",
  },
  {
    title: "Benefícios do Gerenciamento Profissional",
    content:
      "O gerenciamento profissional garante o uso eficiente de recursos, otimizando materiais, mão de obra e equipamentos. Com uma gestão estratégica, é possível antecipar problemas e propor soluções antes que afetem o projeto. Decisões rápidas e assertivas mantêm a qualidade, o prazo e o orçamento sob controle. Além de assegurar uma execução eficiente, o bom gerenciamento fortalece a confiança do cliente e abre portas para novas oportunidades.",
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

