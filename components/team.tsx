"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "João Eduardo",
    role: "Engenheiro Civil, Fundador",
    bio: "Com mais de 20 anos de experiência, João lidera a empresa com visão inovadora e compromisso com a excelência.",
    avatar: "/placeholder.svg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/joao-eduardo",
  },
  {
    name: "Maria Silva",
    role: "Arquiteta Chefe",
    bio: "Especialista em design sustentável, Maria traz criatividade e consciência ambiental para cada projeto.",
    avatar: "/placeholder.svg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/maria-silva",
  },
  {
    name: "Pedro Santos",
    role: "Gerente de Projetos",
    bio: "Com vasta experiência em gestão de grandes obras, Pedro garante a entrega pontual e dentro do orçamento.",
    avatar: "/placeholder.svg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/pedro-santos",
  },
  {
    name: "Ana Oliveira",
    role: "Engenheira Ambiental",
    bio: "Ana lidera nossas iniciativas de sustentabilidade, garantindo que nossos projetos sejam ecologicamente responsáveis.",
    avatar: "/placeholder.svg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/ana-oliveira",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-center mb-12 text-foreground"
        >
          Nossa Equipe
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-card border-border">
                <CardHeader>
                  <Avatar className="w-32 h-32 mx-auto">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-medium text-center text-foreground mt-4">{member.name}</h3>
                  <p className="text-sm text-center text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-primary text-center mb-4">{member.bio}</p>
                  <div className="flex justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

