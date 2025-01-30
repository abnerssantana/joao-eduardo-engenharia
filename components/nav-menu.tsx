"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "./logo"

const sections = [
  { name: "Serviços", href: "#services" },
  { name: "Projetos", href: "#projects-timeline" },
  { name: "Galeria", href: "#gallery" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Equipe", href: "#team" },
  { name: "Contato", href: "#contact" },
]

export function NavMenu() {
  return (
    <div className="w-full flex justify-between items-center">
      <Link href="/" className="text-primary">
        <Logo />
      </Link>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex mx-auto">
        <NavigationMenuList>
          {sections.map((section) => (
            <NavigationMenuItem key={section.name}>
              <Link href={section.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>{section.name}</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col space-y-4 mt-4">
            {sections.map((section) => (
              <Link
                key={section.name}
                href={section.href}
                className="text-foreground hover:text-primary transition-colors text-lg"
              >
                {section.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

