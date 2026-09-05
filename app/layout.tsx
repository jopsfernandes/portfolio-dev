import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  metadataBase: new URL('https://devfernandes.com'),
  title: 'João Fernandes - Dev Fullstack',
  description: 'Criado com Next.js e muito café',
  icons: {
    icon: './professional-developer-portrait.png',
  },
  openGraph: {
    title: 'João Fernandes - Dev Fullstack',
    description: 'Criado com Next.js e muito café',
    url: 'https://devfernandes.com',
    siteName: 'João Fernandes - Dev Fullstack',
    locale: 'pt_BR',
    type: 'website',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
