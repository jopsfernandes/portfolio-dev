import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 78 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 82 },
      ],
    },
  ]

  const tools = [
    "VS Code",
    "Figma",
    "Postman",
    "Vercel",
    "GitHub",
    "Slack",
    "Notion",
    "Linear",
    "Prisma",
    "Supabase",
    "Stripe",
    "Auth0",
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance">Habilidades & Tecnologias</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ferramentas & Plataformas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
