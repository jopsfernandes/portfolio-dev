import { ArrowUpRight, Github } from "lucide-react"

export function Projects() {
  const projects: {
    title: string
    description: string
    preview: { gif: string; poster: string; alt: string }
    technologies: string[]
    github?: string
    demo?: string
  }[] = [
    {
      title: "Personare",
      description:
        "App desktop de estudos que reúne links, PDFs, quizzes e flashcards e agenda cada revisão para o dia em que você estaria prestes a esquecer, com o algoritmo de repetição espaçada FSRS. Funciona offline, com os dados no computador do estudante.",
      preview: {
        gif: "./projects/personare.gif",
        poster: "./projects/personare.png",
        alt: "Gravação do Personare: lista de programas, um módulo de Direito Constitucional, um quiz respondido e o calendário de revisões",
      },
      technologies: ["Electron", "React 19", "TypeScript", "SQLite", "Drizzle ORM", "ts-fsrs", "Tailwind CSS"],
      github: "https://github.com/Personare-Education/Personare",
    },
  ]

  return (
    <section id="projects" className="on-paper bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h2 className="font-display text-[clamp(2.75rem,7vw,5rem)] text-ink lg:col-span-5">
            Meus
            <br />
            Projetos
          </h2>
          <p className="max-w-[48ch] self-end text-xl leading-snug text-ink-soft lg:col-span-7">
            Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e
            domínios de aplicação.
          </p>
        </div>

        <ol className="mt-20 space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const flip = index % 2 === 1
            return (
              <li key={project.title} className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
                <div className={`relative lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <div
                    aria-hidden="true"
                    className={`absolute -bottom-4 size-24 md:-bottom-6 md:size-36 ${
                      flip ? "-left-4 rounded-tr-full bg-cobalt md:-left-6" : "-right-4 rounded-tl-full bg-signal md:-right-6"
                    }`}
                  />
                  <div className="relative aspect-[16/10] overflow-hidden border-2 border-ink bg-paper-deep">
                    <picture>
                      <source srcSet={project.preview.poster} media="(prefers-reduced-motion: reduce)" />
                      <img
                        src={project.preview.gif}
                        alt={project.preview.alt}
                        width={960}
                        height={600}
                        className="size-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <h3 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] text-ink">{project.title}</h3>
                  <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-soft">{project.description}</p>

                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm text-ink" aria-label="Tecnologias">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="after:ml-4 after:text-cobalt after:content-['/'] last:after:hidden">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-wide inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-bold text-paper no-underline transition-colors duration-200 hover:bg-cobalt"
                      >
                        <Github className="size-5" />
                        Código
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-wide inline-flex items-center gap-3 border-2 border-ink px-6 py-3 font-bold text-ink no-underline transition-colors duration-200 hover:bg-signal"
                      >
                        Demo
                        <ArrowUpRight className="size-5" />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
