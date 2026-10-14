"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { links } from "@/lib/site"

type Shape = "quarter" | "half" | "square" | "circle" | "bar"

type Tile = {
  x: number
  y: number
  shape: Shape
  fg: string
  bg: string
  rot: number
}

const C = {
  paper: "var(--paper)",
  ink: "var(--ink)",
  signal: "var(--signal)",
  deep: "var(--cobalt-deep)",
  cobalt: "var(--cobalt)",
}

// Grade 4x4; o miolo 2x2 é o retrato. As peças em volta seguem a gramática concretista:
// quartos de círculo, semicírculos, quadrados e barras em quatro cores.
const TILES: Tile[] = [
  { x: 0, y: 0, shape: "quarter", fg: C.signal, bg: C.deep, rot: 0 },
  { x: 1, y: 0, shape: "half", fg: C.paper, bg: C.cobalt, rot: 180 },
  { x: 2, y: 0, shape: "square", fg: C.ink, bg: C.paper, rot: 0 },
  { x: 3, y: 0, shape: "quarter", fg: C.ink, bg: C.signal, rot: 90 },
  { x: 0, y: 1, shape: "bar", fg: C.paper, bg: C.cobalt, rot: 0 },
  { x: 3, y: 1, shape: "half", fg: C.signal, bg: C.ink, rot: 270 },
  { x: 0, y: 2, shape: "circle", fg: C.signal, bg: C.ink, rot: 0 },
  { x: 3, y: 2, shape: "quarter", fg: C.paper, bg: C.deep, rot: 180 },
  { x: 0, y: 3, shape: "quarter", fg: C.cobalt, bg: C.paper, rot: 270 },
  { x: 1, y: 3, shape: "half", fg: C.ink, bg: C.signal, rot: 0 },
  { x: 2, y: 3, shape: "bar", fg: C.signal, bg: C.deep, rot: 90 },
  { x: 3, y: 3, shape: "quarter", fg: C.signal, bg: C.cobalt, rot: 270 },
]

const S = 100

function ShapePath({ shape, fill }: { shape: Shape; fill: string }) {
  switch (shape) {
    case "quarter":
      return <path d={`M0 0 H${S} A${S} ${S} 0 0 1 0 ${S} Z`} fill={fill} />
    case "half":
      return <path d={`M0 ${S} A${S / 2} ${S / 2} 0 0 1 ${S} ${S} Z`} fill={fill} />
    case "square":
      return <rect x={S * 0.25} y={S * 0.25} width={S * 0.5} height={S * 0.5} fill={fill} />
    case "circle":
      return <circle cx={S / 2} cy={S / 2} r={S * 0.3} fill={fill} />
    case "bar":
      return <rect x={0} y={S * 0.36} width={S} height={S * 0.28} fill={fill} />
  }
}

function Composition() {
  const [turns, setTurns] = useState<number[]>(() => TILES.map(() => -1))
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setTurns(TILES.map(() => 0)))
    const t = window.setTimeout(() => setSettled(true), 1800)
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(t)
    }
  }, [])

  const turn = (i: number) => setTurns((prev) => prev.map((v, j) => (j === i ? v + 1 : v)))

  return (
    <svg viewBox="0 0 400 400" className="block h-auto w-full" aria-hidden="true" focusable="false">
      {TILES.map((t, i) => (
        <g key={i} transform={`translate(${t.x * S} ${t.y * S})`}>
          <rect width={S} height={S} fill={t.bg} />
          <g
            className="tile cursor-pointer"
            style={{
              ["--rot" as string]: `${t.rot + turns[i] * 90}deg`,
              transitionDelay: settled ? "0ms" : `${120 + i * 55}ms`,
              transitionDuration: settled ? undefined : "1.1s",
            }}
            onPointerEnter={() => settled && turn(i)}
          >
            <rect width={S} height={S} fill="transparent" />
            <ShapePath shape={t.shape} fill={t.fg} />
          </g>
        </g>
      ))}

      <rect x={S} y={S} width={S * 2} height={S * 2} fill="var(--cobalt-tint)" />
      <circle cx={S * 2} cy={S * 2} r={S * 0.96} fill="var(--signal)" />
      <image
        href="./professional-developer-portrait.png"
        x={S * 1.08}
        y={S * 1.08}
        width={S * 1.84}
        height={S * 1.84}
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-cobalt pt-16 text-paper">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-5 py-14 md:px-10 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-7">
          <h1 className="text-balance">
            <span className="font-wide mb-5 block text-xl font-semibold text-paper/90 md:text-2xl">
              Olá, meu nome é
            </span>
            <span className="font-display block text-[clamp(2.75rem,10.5vw,6rem)] text-signal">
              João
              <br />
              Fernandes
            </span>
          </h1>

          <p className="mt-8 max-w-[34ch] text-xl leading-snug text-paper/90 md:text-2xl">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="font-wide group inline-flex items-center justify-between gap-6 bg-signal px-7 py-4 text-lg font-bold text-ink no-underline transition-colors duration-200 hover:bg-paper"
            >
              Ver Projetos
              <ArrowRight className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="font-wide inline-flex items-center justify-center border-2 border-paper px-7 py-4 text-lg font-bold text-paper no-underline transition-colors duration-200 hover:bg-paper hover:text-cobalt"
            >
              Entre em Contato
            </a>
          </div>

          <ul className="mt-10 flex items-center gap-2" aria-label="Redes">
            <li>
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="grid size-12 place-items-center text-paper transition-colors hover:bg-paper hover:text-cobalt">
                <Github className="size-6" />
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="grid size-12 place-items-center text-paper transition-colors hover:bg-paper hover:text-cobalt">
                <Linkedin className="size-6" />
              </a>
            </li>
            <li>
              <a href={links.email} target="_blank" rel="noopener noreferrer" aria-label="Email"
                className="grid size-12 place-items-center text-paper transition-colors hover:bg-paper hover:text-cobalt">
                <Mail className="size-6" />
              </a>
            </li>
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[22rem] sm:max-w-md lg:col-span-5 lg:max-w-none">
          <Composition />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Ir para Sobre"
        className="absolute bottom-6 left-1/2 hidden size-12 -translate-x-1/2 place-items-center text-paper/80 transition-colors hover:text-signal lg:grid"
      >
        <ArrowDown className="size-6" />
      </a>
    </section>
  )
}
