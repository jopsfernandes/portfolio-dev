export function About() {
  const highlights = [
    {
      title: "Clean Code",
      description: "Escrevo código limpo, testável e bem documentado",
    },
    {
      title: "Performance",
      description: "Otimizo aplicações para máxima performance e UX",
    },
    {
      title: "Colaboração",
      description: "Trabalho bem em equipe e comunico ideias claramente",
    },
    {
      title: "Dedicação",
      description: "Sempre aprendendo e me mantendo atualizado",
    },
  ]

  return (
    <section id="about" className="on-paper bg-paper py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        <h2 className="font-display text-[clamp(2.75rem,7vw,5rem)] text-ink lg:col-span-4">
          Sobre
          <br />
          Mim
        </h2>

        <div className="lg:col-span-8">
          <p className="max-w-[38ch] text-2xl leading-snug font-medium text-ink md:text-[1.75rem]">
            Sou um desenvolvedor full stack com mais de 5 anos de experiência criando aplicações web modernas e
            escaláveis. Tenho prazer em transformar o que antes era um problema em soluções funcionais.
          </p>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
            Especializo-me em React, Node.js, TypeScript e tecnologias modernas do ecossistema JavaScript. Sempre
            busco as melhores práticas e mantenho-me atualizado com as últimas tendências do desenvolvimento web.
          </p>

          <dl className="mt-16 grid border-t-2 border-ink sm:grid-cols-2">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`border-b border-border py-7 sm:pr-8 ${i % 2 === 1 ? "sm:border-l sm:pl-8" : ""}`}
              >
                <dt className="font-wide flex items-center gap-3 text-2xl font-bold text-ink">
                  <span
                    aria-hidden="true"
                    className={`inline-block size-3.5 ${["bg-cobalt", "bg-signal", "bg-ink", "rounded-full bg-cobalt"][i]}`}
                  />
                  {item.title}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-ink-soft">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
