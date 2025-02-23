import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar, Building2, MapPin, Building, HardHat, Wrench, Store, Briefcase } from "lucide-react"

const projects = [
  {
    year: "2020",
    title: "Edifício Ankaá",
    location: "São José do Rio Preto/SP",
    description: "Gestão do término da construção de edifício residencial de alto padrão",
    details: [
      "20 pavimentos com 30 apartamentos de 277m² cada",
      "2 coberturas duplex de 650,31m² cada",
      "Área comum com academia, sauna, piscina, espaço kids",
      "Salão de festas para 300 pessoas",
      "Espaço gourmet e lounge",
    ],
    icon: Building2,
    type: "Residencial",
    period: "Agosto/2019 a Junho/2020"
  },
  {
    year: "2020",
    title: "Mercado Livre",
    location: "São José do Rio Preto/SP",
    description: "Gerenciamento de ampliação do Centro de Distribuição",
    details: [
      "Ampliação de escritório",
      "Reforma da área de vivência",
      "Adequação do espaço operacional"
    ],
    icon: Building,
    type: "Comercial",
    period: "Outubro/2020"
  },
  {
    year: "2020",
    title: "Ortoteen",
    location: "São José do Rio Preto/SP",
    description: "Gerenciamento da execução de consultório odontológico",
    details: [
      "Projeto completo de interiores",
      "Instalações específicas para consultório",
      "Acabamentos de alto padrão"
    ],
    icon: Briefcase,
    type: "Comercial",
    period: "Outubro/2020 a Dezembro/2020"
  },
  {
    year: "2019-2020",
    title: "Martrip Alimentos (Tripama)",
    location: "Guapiaçu/SP",
    description: "Gerenciamento total de reforma do antigo Frigorífico Guapiassuíno",
    details: [
      "Reforço de fundação",
      "Reforma geral",
      "Tratamento e restauração de estruturas de concreto",
      "Impermeabilização e tratamento de trincas"
    ],
    icon: HardHat,
    type: "Industrial",
    period: "Dezembro/2019 em diante"
  },
  {
    year: "2019",
    title: "Decathlon",
    location: "São José do Rio Preto/SP",
    description: "Reforma completa da loja",
    details: [
      "Restauração e pintura externa",
      "Substituição de painéis luminosos",
      "Modernização do sistema de iluminação",
      "Reforma de docas e áreas técnicas"
    ],
    icon: Store,
    type: "Comercial",
    period: "Julho a Outubro/2019"
  },
  {
    year: "2019",
    title: "Shopping Iguatemi",
    location: "São José do Rio Preto/SP",
    description: "Gerenciamento de obras de adequação",
    details: [
      "Novo acesso para Doca 2",
      "Nova saída de veículos",
      "Remanejamento de estacionamento",
      "Adequação para novo prédio"
    ],
    icon: Building2,
    type: "Comercial",
    period: "2019"
  },
  {
    year: "2013-2016",
    title: "Tessler Engenharia",
    location: "São José do Rio Preto/SP",
    description: "Gerenciamento de múltiplas obras",
    details: [
      "Gestão de obras comerciais",
      "Supervisão de construções residenciais",
      "Coordenação de equipes e fornecedores"
    ],
    icon: Briefcase,
    type: "Diversos",
    period: "Fevereiro/2013 a Agosto/2016"
  },
  {
    year: "2009-2012",
    title: "Later Engenharia",
    location: "Goiânia/GO",
    description: "Administração de obras de grande porte",
    details: [
      "Águas Lindas Shopping",
      "Portal Shopping",
      "Portal Sul Shopping",
      "Twenty Three Park e Twenty Five Park",
      "New York Square"
    ],
    icon: Building2,
    type: "Diversos",
    period: "Março/2009 a Fevereiro/2012"
  }
]

export default function ProjectsTimeline() {
  return (
    <section id="projects-timeline" className="py-4 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light mb-4 text-foreground">Nossa Trajetória</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mais de uma década de experiência em projetos de diferentes complexidades e segmentos
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30 hidden lg:block" />

          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                } mb-12 relative`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <Card
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                  } bg-card hover:shadow-lg transition-shadow duration-300 border-primary/10`}
                >
                  <CardHeader className="space-y-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <CardTitle className="text-primary text-lg">{project.year}</CardTitle>
                    </div>
                    <div className="flex items-start gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                      <CardDescription>{project.location}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {project.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {project.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <ul className="space-y-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
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