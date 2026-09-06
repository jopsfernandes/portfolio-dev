import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "StudyButler",
      tagline: "App desktop pra organizar estudos e lidar com TDAH — hoje também usado por um grupo de colegas de faculdade.",
      image: null,
      technologies: ["React", "Vite", "PostgreSQL", "Stripe", "Electron", "ShadcnUI", "Langchain"],
      github: "https://github.com/jopsfernandes/study-butler-dftv",
      demo: undefined,
      problema:
        "Comecei o StudyButler pra me ajudar a lidar com TDAH nos estudos — organizar material e manter o foco. Hoje também é usado por um grupo de colegas da faculdade, que já passa mais tempo no computador do que no celular.",
      decisoes:
        "Escolhi Electron em vez de uma versão web justamente porque o público-alvo já vive no desktop. O LangChain entra pra ler os PDFs que o estudante importa na ferramenta.",
      resultado: "Uso pessoal e uso real por um grupo de colegas de faculdade — não ficou parado só de portfólio.",
    },
    {
      title: "Restaurant Manager",
      tagline: "App desktop que substituiu comandas escritas à mão por impressão automática na térmica, usado num restaurante de verdade.",
      image: "./task-management-dashboard.png",
      technologies: ["Electron", "TypeScript", "Prisma", "IPC", "ShadcnUI", "SWC"],
      github: "https://github.com/jopsfernandes/electron-receipt-printer",
      demo: undefined,
      problema:
        "Trabalhava no restaurante japonês da minha família e vivia anotando pedido à mão — no balcão e nos pedidos por WhatsApp — sem nenhuma forma de mandar isso direto pra impressora térmica.",
      decisoes:
        "Usei IPC do Electron pra fazer a aplicação conversar com a impressora térmica e imprimir a comanda automaticamente, tanto no atendimento presencial quanto no delivery.",
      resultado: "Entrou em uso real no restaurante — ajudou no meu trabalho, no dos meus colegas e do meu patrão na época.",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance">Meus Projetos</h2>

          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto text-balance">
            Dois projetos que nasceram de problemas reais que eu mesmo vivia — não protótipos de estudo.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Dialog key={index}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <Skeleton className="w-full h-full rounded-none bg-muted" />
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.tagline}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <DialogTrigger asChild>
                        <Button size="sm" className="flex-1">
                          Ver case study
                        </Button>
                      </DialogTrigger>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">Código de {project.title}</span>
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <DialogContent className="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  </DialogHeader>

                  <div className="aspect-video overflow-hidden rounded-md -mt-2">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <Skeleton className="w-full h-full bg-muted" />
                    )}
                  </div>

                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      <span className="font-semibold text-foreground">O problema: </span>
                      <span className="text-muted-foreground">{project.problema}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">As decisões: </span>
                      <span className="text-muted-foreground">{project.decisoes}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">O resultado: </span>
                      <span className="text-muted-foreground">{project.resultado}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
