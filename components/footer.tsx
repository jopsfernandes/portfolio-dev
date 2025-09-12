import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo e Descrição */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-primary">{"<Dev />"}</div>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Links Rápidos</h4>
              <div className="space-y-2">
                <button className="block text-muted-foreground hover:text-primary transition-colors">Sobre</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors">Projetos</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors">
                  Habilidades
                </button>
                <button className="block text-muted-foreground hover:text-primary transition-colors">Contato</button>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Conecte-se</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
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
                Feito com <Heart className="h-4 w-4 mx-1 text-primary" /> usando Next.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
