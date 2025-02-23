import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

const testimonials = [
  {
    name: "Marcel Martins",
    content:
      "Trabalhei com o engenheiro da João Eduardo Engenharia e Imóveis em um projeto recente e fiquei muito satisfeito com o serviço prestado. O profissional foi altamente qualificado, comprometido com os prazos e entregou resultados de excelência.",
  },
  {
    name: "José Eduardo Perozim",
    content:
      "Excelente profissional!! Muito competente e com muito conhecimento!",
  },
  {
    name: "Pedro Biziachi",
    content:
      "Ótimo profissional, sério e dedicado. Trabalho de excelência.",
  },
  {
    name: "Wellington Ziatti",
    content:
      "Profissional qualificado e prestativo. Atendeu todas as minhas expectativas. Indico sempre.",
  },
  {
    name: "Lazaro Oliveira",
    content:
      "Fiz um trabalho com ele. Comprometido e responsável.",
  },
  {
    name: "Gustavo Leite",
    content:
      "Responsável, criterioso e parceiro!",
  },
];

const partners = [
  {
    name: "Mercado Livre",
    logo: "/logos/mercado-livre.png",
    description: "Centro de Distribuição SJRP",
  },
  {
    name: "Decathlon",
    logo: "/logos/decathlon.png",
    description: "Reforma e Modernização",
  },
  {
    name: "Shopping Iguatemi",
    logo: "/logos/iguatemi.png",
    description: "Expansão e Adequação",
  }
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
          className="text-3xl font-light text-center mb-16 text-foreground"
        >
          O que nossos clientes dizem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{testimonial.name}</h3>
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

        {/* Partners Section */}
        <Separator className="my-16" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-light mb-4">Grandes Parceiros</h2>
          <p className="text-muted-foreground">
            Empresas que confiam em nossa experiência
          </p>
        </motion.div>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-44 aspect-[4/2] flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="max-w-full max-h-40 object-contain p-10"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-sm font-medium text-foreground">{partner.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{partner.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
