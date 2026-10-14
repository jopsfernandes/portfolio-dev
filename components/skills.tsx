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
    <section id="skills" className="bg-ink py-24 text-paper md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <h2 className="font-display max-w-[14ch] text-[clamp(2.75rem,7vw,5rem)] text-paper">
          Habilidades &amp; Tecnologias
        </h2>

        <div className="mt-16 grid gap-px bg-paper/15 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-ink pt-8 pb-10 md:px-8 md:first:pl-0">
              <h3 className="font-wide text-lg font-bold text-signal">{category.title}</h3>
              <ul className="mt-6 space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="font-wide text-3xl font-semibold tracking-tight text-paper md:text-[2rem]">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="font-wide mt-24 text-2xl font-bold text-paper">Ferramentas &amp; Plataformas</h3>
        <ul className="mt-8 grid grid-cols-2 border-t border-l border-paper/20 sm:grid-cols-3 lg:grid-cols-7">
          {techLogos.map((logo) => (
            <li key={logo.title} className="border-r border-b border-paper/20">
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-28 flex-col justify-between gap-6 p-4 text-paper no-underline transition-colors duration-200 hover:bg-cobalt"
              >
                <span className="text-3xl text-paper/85 transition-colors duration-200 group-hover:text-signal" aria-hidden="true">
                  {logo.node}
                </span>
                <span className="text-sm font-medium leading-tight">{logo.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
