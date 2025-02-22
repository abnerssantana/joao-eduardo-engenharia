"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { WhatsAppButton } from "./whatsapp-button"

const sections = [
  { name: "Serviços", href: "#services" },
  { name: "Gerenciamento", href: "#project-management" },
  { name: "Projetos", href: "#projects-timeline" },
  { name: "Galeria", href: "#gallery" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Contato", href: "#contact" },
]

export function NavMenu() {
  return (
    <div className="w-full flex items-center justify-between relative">
      <Link href="/" className="text-primary">
        <h2 className="text-1xl font-light tracking-wider text-[#201f1e] dark:text-[#7ba993]">
          <strong>JOÃO EDUARDO</strong>
        </h2>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 absolute left-1/2 transform -translate-x-1/2">
        <NavigationMenu>
          <NavigationMenuList>
            {sections.map((section) => (
              <NavigationMenuItem key={section.name}>
                <Link href={section.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {section.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden md:block">
        <WhatsAppButton />
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col space-y-4 mt-4">
            {sections.map((section) => (
              <Link
                key={section.name}
                href={section.href}
                className="text-foreground hover:text-primary active:bg-accent focus:bg-accent transition-colors text-lg px-4 py-2 rounded-md"
              >
                {section.name}
              </Link>
            ))}
            <div className="pt-4">
              <WhatsAppButton className="w-full" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}