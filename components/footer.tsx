import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart, CoffeeIcon, Coffee, LucideCoffee } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

   const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    
  }

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo e Descrição */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-primary">{"<Jops />"}</div>
              <p className="text-muted-foreground leading-relaxed">
                Fazendo o futuro com tecnologia.
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Links Rápidos</h4>
              <div className="space-y-2">
                <button className="block text-muted-foreground hover:text-primary transition-colors"  onClick={() => scrollToSection("about")}>Sobre</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors"  onClick={() => scrollToSection("projects")}>Projetos</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors"  onClick={() => scrollToSection("skills")}>
                  Habilidades
                </button>
                <button className="block text-muted-foreground hover:text-primary transition-colors"  onClick={() => scrollToSection("contact")}>Contato</button>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Conecte-se</h4>
              <div className="flex space-x-4">
                <a href="">
                 <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Github className="h-5 w-5" />
                </Button>
                </a>
               
                <a href=""> <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Linkedin className="h-5 w-5" />
                </Button></a>
               
                <a href=""><Button variant="ghost" size="icon" className="cursor-pointer">
                  <Mail className="h-5 w-5" />
                </Button></a>
                 
              </div>
              <p className="text-sm text-muted-foreground">
                Sempre aberto para novas oportunidades e colaborações interessantes.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-muted-foreground">© {currentYear} João Pedro Fernandes. Todos os direitos reservados.</p>
              <p className="text-sm text-muted-foreground flex items-center">
                Feito com <Heart className="h-4 w-4 mx-1 text-primary" /> & ☕
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
