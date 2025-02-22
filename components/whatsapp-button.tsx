// whatsapp-button.tsx
"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton({ className = "" }: { className?: string }) {
  const phoneNumber = "5517982068880"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de mais informações sobre seus serviços.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

  return (
    <Button 
      asChild
      variant="default"
      className={`bg-green-600 hover:bg-green-700 ${className}`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <MessageCircle className="h-4 w-4" />
        <span>WhatsApp</span>
      </a>
    </Button>
  )
}