'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
        { name: "React/Next.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "React Native" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Python" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker" },
        { name: "AWS" },
        { name: "Git" },
        { name: "CI/CD" },
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
                <CardContent className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm font-medium">
                      {skill.name}
                    </Badge>
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
