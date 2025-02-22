"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Diretor de Operações, TechCorp",
    content:
      "A João Eduardo Engenharia superou todas as nossas expectativas. Seu compromisso com a qualidade e prazos é impressionante.",
    avatar: "/perfil1.jpg?height=40&width=40",
  },
  {
    name: "Ana Rodrigues",
    role: "Proprietária, Residencial Bela Vista",
    content:
      "Estamos extremamente satisfeitos com o resultado final do nosso condomínio. A atenção aos detalhes foi excepcional.",
    avatar: "/perfil2.jpg?height=40&width=40",
  },
  {
    name: "Marcelo Santos",
    role: "Secretário de Infraestrutura, Prefeitura Municipal",
    content:
      "A equipe da João Eduardo Engenharia demonstrou grande expertise na revitalização do nosso centro histórico. Um trabalho primoroso.",
    avatar: "/perfil3.jpg?height=40&width=40",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-center mb-12 text-foreground"
        >
          O que nossos clientes dizem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-primary">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

