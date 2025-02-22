import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "João Eduardo Engenharia",
    template: "%s | João Eduardo Engenharia"
  },
  description: "Excelência em gerenciamento de obras, construções e reformas em São José do Rio Preto/SP e região desde 2009. Especialistas em administração de obras de alto padrão, shopping centers e projetos comerciais.",
  keywords: [
    "engenharia civil",
    "gerenciamento de obras",
    "construção civil",
    "reformas",
    "São José do Rio Preto",
    "administração de obras",
    "obras comerciais",
    "shopping centers",
    "edificações",
    "projetos de alto padrão"
  ],
  authors: [{ name: "João Eduardo Engenharia" }],
  creator: "João Eduardo Engenharia",
  publisher: "João Eduardo Engenharia",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://joaoeduardo.eng.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://joaoeduardo.eng.br",
    title: "João Eduardo Engenharia",
    description: "Excelência em gerenciamento de obras, construções e reformas em São José do Rio Preto/SP e região desde 2009.",
    siteName: "João Eduardo Engenharia",
    images: [{
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: "João Eduardo Engenharia - Construções e Reformas"
    }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}