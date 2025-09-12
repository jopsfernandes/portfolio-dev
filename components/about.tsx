import { Card, CardContent } from "@/components/ui/card"
import { Code, Rocket, Users, Coffee } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Escrevo código limpo, testável e bem documentado",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Otimizo aplicações para máxima performance e UX",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho bem em equipe e comunico ideias claramente",
    },
    {
      icon: Coffee,
      title: "Dedicação",
      description: "Sempre aprendendo e me mantendo atualizado",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance">Sobre Mim</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou um desenvolvedor full stack com mais de 5 anos de experiência criando aplicações web modernas e
                escaláveis. Tenho prazer em transformar o que antes era um problema em soluções funcionais.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Especializo-me em React, Node.js, TypeScript e tecnologias modernas do ecossistema JavaScript. Sempre
                busco as melhores práticas e mantenho-me atualizado com as últimas tendências do desenvolvimento web.
              </p>
              
            </div>

            <div>
              <img src="./developer-working-on-computer-setup.jpg" alt="Desenvolvedor trabalhando" className="rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
