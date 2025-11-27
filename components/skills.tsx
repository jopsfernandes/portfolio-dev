'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import LogoLoop from "./LogoLoop"
import { SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiElectron,
    SiVite,
    SiPostgresql,
    SiMongodb,
    SiPython,
    SiReacthookform,
    SiGit,
    SiNodedotjs,
    SiDocker,
    SiVercel,
    SiAmazon,
    SiShadcnui,
    SiStripe,
    SiLangchain,
    SiN8N,
    SiPrisma,
    SiDrizzle,
    
    
 } from 'react-icons/si';



export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "React Native", level: 75 },
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
  const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiElectron />, title: "Electron", href: "https://www.electronjs.org" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiReacthookform />, title: "React Hook Form", href: "https://react-hook-form.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiAmazon />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiShadcnui />, title: "Shadcn UI", href: "https://ui.shadcn.com/" },
  { node: <SiStripe />, title: "Stripe", href: "https://stripe.com" },
  { node: <SiLangchain />, title: "Langchain", href: "https://langchain.com" },
  { node: <SiN8N />, title: "n8n", href: "https://n8n.io" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiDrizzle />, title: "Drizzle ORM", href: "https://orm.drizzle.team/" },


];

 

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
                <CardContent className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-10">
            <CardHeader className="mb-10">
              <CardTitle className="text-2xl text-center">Ferramentas & Plataformas</CardTitle>
            </CardHeader>
            <CardContent>
              <LogoLoop
                logos={techLogos}
                speed={60}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor=""
                ariaLabel="Technology used"
              />
              
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
