"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { sections } from "@/lib/site"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isMenuOpen])

  return (
    <header className="on-paper fixed top-0 z-50 w-full border-b-2 border-ink bg-paper">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#hero" className="font-mono text-lg font-semibold text-ink no-underline" aria-label="Início">
          {"<Jops/>"}
        </a>

        <nav className="hidden md:block" aria-label="Seções">
          <ul className="flex items-center gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="font-wide block px-4 py-2 text-[0.95rem] font-semibold text-ink no-underline transition-colors duration-200 hover:bg-ink hover:text-paper"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center text-ink md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" className="border-t-2 border-ink bg-paper md:hidden" aria-label="Seções">
          <ul>
            {sections.map((s) => (
              <li key={s.id} className="border-b border-border last:border-b-0">
                <a
                  href={`#${s.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display block px-5 py-4 text-3xl text-ink no-underline active:bg-signal"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
