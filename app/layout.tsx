import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.devfernandes.com'),
  title: 'João Fernandes - Dev Fullstack',
  description: 'Criado com Next.js e muito café',
  icons: {
    icon: './professional-developer-portrait.png',
  },
  openGraph: {
    title: 'João Fernandes - Dev Fullstack',
    description: 'Criado com Next.js e muito café',
    url: 'https://www.devfernandes.com',
    siteName: 'João Fernandes - Dev Fullstack',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${archivo.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
