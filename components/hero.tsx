"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="./professional-developer-portrait.png"
              alt="Foto do desenvolvedor"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-primary/20"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Olá, meu nome é <span className="text-primary">João Fernandes</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="text-lg px-8 cursor-pointer">
              Ver Projetos
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="text-lg px-8 cursor-pointer">
              Entre em Contato
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/jopsfernandes" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-12 w-12">
              <Github className="h-6 w-6" />
              </Button>
            </a>
            

            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-fernandes-4959b419a/" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-12 w-12">
              <Linkedin className="h-6 w-6" />
            </Button>

            </a>

            
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=joaopfernandessantos@gmail.com&su=Contato%20via%20Portfólio" target="_blank" className="cursor-pointer">
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Mail className="h-6 w-6" />
            </Button>
          </a>
            

          </div>

          <Button variant="ghost" onClick={() => scrollToSection("about")} className="animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
