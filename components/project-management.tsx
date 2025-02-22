import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  Clock, 
  Calculator, 
  Users, 
  ShieldCheck, 
  ClipboardCheck, 
  FileText,
  Wrench
} from "lucide-react"

const managementInfo = [
  {
    title: "Desafios do Gerenciamento",
    content: `Gerenciar uma obra envolve superar diversos obstáculos que podem impactar o sucesso do projeto.

O controle de custos exige planejamento para evitar despesas extras e manter o orçamento equilibrado. O cumprimento de prazos depende de um cronograma eficiente e de uma execução organizada.

A coordenação de equipes é fundamental para evitar falhas de comunicação e retrabalhos. A gestão da segurança no canteiro de obras deve ser rigorosa, garantindo a proteção dos trabalhadores e o cumprimento das normas.`,
    icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
    features: [
      "Controle de custos e orçamentos",
      "Cumprimento de prazos",
      "Coordenação de equipes",
      "Gestão da segurança"
    ]
  },
  {
    title: "Serviços de Gerenciamento",
    content: `O gerenciamento de obras é essencial para garantir que todas as etapas do projeto ocorram com eficiência e qualidade.

Nossos serviços incluem planejamento construtivo, gestão da execução, estudo comparativo de propostas, gestão de mão de obra, materiais e suprimentos, além de elaboração de relatórios e cronogramas.`,
    icon: <Wrench className="w-8 h-8 text-primary" />,
    features: [
      "Planejamento construtivo",
      "Gestão de mão de obra",
      "Controle de materiais",
      "Elaboração de relatórios"
    ]
  },
  {
    title: "Gestão Completa",
    content: `Oferecemos um pacote completo de serviços que inclui:

• Gestão de Materiais e Suprimentos: Levantamentos, Detalhamento Técnico e Assessoria na escolha e Armazenamento de Materiais, Equipamentos e Ferramentas
• Gerenciamento e Administração de Contratos, documentação de Pessoal e Financeira
• Elaboração de Relatórios por Etapas e Periódicos
• Cronogramas, Planilhas Orçamentárias e Medições Física e Financeira`,
    icon: <FileText className="w-8 h-8 text-primary" />,
    features: [
      "Gestão de contratos",
      "Supervisão técnica",
      "Medições e relatórios",
      "Controle documental"
    ]
  }
]

const keyFeatures = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Estudo Comparativo",
    description: "Nivelamento de propostas e orçamentos para melhor custo-benefício"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Gestão de Equipes",
    description: "Captação, contratação e fiscalização de mão de obra"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Cronogramas",
    description: "Planejamento e controle de prazos e etapas"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Segurança",
    description: "Supervisão de segurança do trabalho e canteiro de obras"
  }
]

export default function ProjectManagement() {
  return (
    <section id="project-management" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light mb-4">Gerenciamento de Projetos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Construindo o futuro com engenharia de excelência desde 2009
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {managementInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4">{info.icon}</div>
                  <CardTitle className="text-xl mb-2">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm whitespace-pre-line mb-4">
                    {info.content}
                  </p>
                  <ul className="space-y-2">
                    {info.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-primary flex items-start">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFeatures.map((feature, index) => (
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