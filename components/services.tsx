import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Building2, HardHat, Wrench, Clock, CheckCircle, Building, BarChart3, ShieldCheck } from "lucide-react"

const specialties = [
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    title: "Gerenciamento de Obras Complexas",
    description: "Coordenação completa de grandes empreendimentos, desde o planejamento até a entrega.",
    features: [
      "Gestão de cronograma e orçamento",
      "Coordenação de equipes e fornecedores",
      "Controle de qualidade rigoroso",
      "Relatórios e documentação completa"
    ],
    projects: [
      "Shopping Iguatemi São José do Rio Preto",
      "Edifício Ankaá - 32 unidades de alto padrão",
      "Centro de Distribuição Mercado Livre"
    ]
  },
  {
    icon: <Building className="w-8 h-8 text-primary" />,
    title: "Construções de Alto Padrão",
    description: "Execução e gerenciamento de empreendimentos residenciais e comerciais premium.",
    features: [
      "Acabamento de alta qualidade",
      "Tecnologias construtivas avançadas",
      "Gestão de projetos complexos",
      "Supervisão especializada"
    ],
    projects: [
      "Twenty Three Park",
      "Twenty Five Park",
      "New York Square"
    ]
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Reformas e Adaptações Corporativas",
    description: "Transformação e revitalização de espaços comerciais e industriais.",
    features: [
      "Planejamento detalhado",
      "Execução sem interrupção das operações",
      "Adequação às normas técnicas",
      "Otimização de espaços"
    ],
    projects: [
      "Reforma Decathlon",
      "Ampliação Mercado Livre",
      "Reforma Martrip Alimentos"
    ]
  }
]

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Controle de Prazos",
    description: "Cronogramas detalhados e monitoramento constante para garantir entregas no prazo"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Gestão de Custos",
    description: "Controle rigoroso do orçamento e otimização de recursos"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Garantia de Qualidade",
    description: "Processos e materiais certificados, com supervisão constante"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Segurança",
    description: "Cumprimento rigoroso das normas de segurança do trabalho"
  }
]

export default function Specialties() {
  return (
    <section id="specialties" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light mb-4">Nossas Especialidades</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mais de 15 anos de experiência em gerenciamento, construção e reforma de grandes empreendimentos
          </p>
        </motion.div>

        {/* Main Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4">{specialty.icon}</div>
                  <CardTitle className="text-xl mb-2">{specialty.title}</CardTitle>
                  <CardDescription>{specialty.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-sm text-primary">Principais Características</h4>
                      <ul className="space-y-2">
                        {specialty.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm text-primary">Projetos Destacados</h4>
                      <ul className="space-y-2">
                        {specialty.projects.map((project, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted p-6 rounded-lg"
            >
              <div className="text-primary mb-3">
                {feature.icon}
              </div>
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}