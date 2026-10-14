import { Coffee, Github, Heart, Linkedin, Mail } from "lucide-react"
import { links, sections } from "@/lib/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const social = [
    { href: links.github, label: "GitHub", icon: Github },
    { href: links.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: links.email, label: "Email", icon: Mail },
  ]

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-2xl font-semibold text-signal">{"<Jops />"}</p>
            <p className="font-wide mt-4 max-w-[22ch] text-2xl leading-snug font-semibold">
              Fazendo o futuro com tecnologia.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Links Rápidos">
            <h4 className="text-sm font-semibold text-paper/70">Links Rápidos</h4>
            <ul className="mt-4 space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-lg text-paper no-underline hover:text-signal hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-paper/70">Conecte-se</h4>
            <ul className="mt-4 flex gap-2">
              {social.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-12 place-items-center border border-paper/25 text-paper transition-colors hover:border-signal hover:bg-signal hover:text-ink"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-paper/70">
              Sempre aberto para novas oportunidades e colaborações interessantes.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-paper/20 pt-8 text-sm text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} João Pedro Fernandes. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart className="size-4 text-signal" aria-label="amor" /> &amp;
            <Coffee className="size-4 text-signal" aria-label="café" />
          </p>
        </div>
      </div>
    </footer>
  )
}
