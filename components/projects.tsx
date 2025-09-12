import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "StudyButler",
      description:
        "Plataforma educacional onde consegue ajudar qualquer tipo de aluno, independente da área acadêmica.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["React", "Vite", "PostgreSQL", "Stripe", "Electron", "ShadcnUI", "Langchain"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações push.",
      image: "/task-management-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      demo: "#",
    },
    
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance">Meus Projetos</h2>

          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto text-balance">
            Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e
            domínios de aplicação.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
