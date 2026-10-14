"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

const fieldClass =
  "mt-2 block w-full border-0 border-b-2 border-ink bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink/55 focus:border-cobalt focus:outline-none focus-visible:outline-none"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Sem backend: abre o app de email do visitante com a mensagem pronta.
    const body = `${formData.message}\n\n${formData.name} <${formData.email}>`
    window.location.href = `mailto:contato@devfernandes.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSent(false)
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const info = [
    { icon: Mail, label: "Email", value: "contato@devfernandes.com", href: "mailto:contato@devfernandes.com" },
    { icon: Phone, label: "Telefone", value: "+55 (67) 99953-3807", href: "tel:+5567999533807" },
    { icon: MapPin, label: "Localização", value: "Campo Grande, Mato Grosso do Sul" },
  ]

  return (
    <section id="contact" className="on-signal relative overflow-hidden bg-signal py-24 text-ink md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[28rem] rounded-full bg-signal-deep md:size-[40rem]"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <h2 className="font-display max-w-[12ch] text-[clamp(2.75rem,8vw,5.75rem)]">Vamos Trabalhar Juntos</h2>
        <p className="mt-8 max-w-[52ch] text-xl leading-snug">
          Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato e vamos conversar sobre
          como posso ajudar!
        </p>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h3 className="font-wide text-lg font-bold">Informações de Contato</h3>
            <ul className="mt-6 border-t-2 border-ink">
              {info.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 border-b border-ink/25 py-5">
                  <Icon className="mt-1 size-5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">{label}</p>
                    {href ? (
                      <a href={href} className="font-wide text-xl font-semibold break-words text-ink hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="font-wide text-xl font-semibold">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <h4 className="font-wide mt-12 text-lg font-bold">Disponibilidade</h4>
            <p className="mt-3 max-w-[44ch] leading-relaxed">
              Atualmente disponível para projetos freelance e oportunidades de trabalho remoto. Respondo a todas as
              mensagens em até 24 horas.
            </p>
          </div>

          <div className="bg-paper p-6 shadow-[0_24px_48px_-24px_oklch(0.2_0.03_265/0.45)] sm:p-10 lg:col-span-7">
            <h3 className="font-display text-3xl md:text-4xl">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="mt-8 space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Nome
                  <input name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required autoComplete="name" className={fieldClass} />
                </label>
                <label className="block text-sm font-semibold">
                  Email
                  <input name="email" type="email" placeholder="Seu email" value={formData.email} onChange={handleChange} required autoComplete="email" className={fieldClass} />
                </label>
              </div>

              <label className="block text-sm font-semibold">
                Assunto
                <input name="subject" placeholder="Assunto" value={formData.subject} onChange={handleChange} required className={fieldClass} />
              </label>

              <label className="block text-sm font-semibold">
                Mensagem
                <textarea name="message" placeholder="Sua mensagem..." rows={5} value={formData.message} onChange={handleChange} required className={`${fieldClass} resize-y`} />
              </label>

              <button
                type="submit"
                className="font-wide group flex w-full items-center justify-between bg-cobalt px-7 py-5 text-lg font-bold text-paper transition-colors duration-200 hover:bg-ink"
              >
                Enviar Mensagem
                <ArrowRight className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
              </button>
              <p className="min-h-6 text-sm text-ink-soft" role="status" aria-live="polite">
                {sent ? "Abrimos seu app de email com a mensagem pronta. É só enviar por lá." : ""}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
