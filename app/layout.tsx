import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Desarrollador Full-Stack | React, Next.js & Node.js - Guatemala",
  description:
    "Portafolio profesional de desarrollador Full-Stack especializado en React, Next.js, Node.js y tecnologías modernas. Más de 5 años creando soluciones digitales escalables.",
  keywords: "desarrollador full-stack, react, nextjs, nodejs, guatemala, programador, web developer",
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-portfolio.com",
    title: "Desarrollador Full-Stack | React, Next.js & Node.js",
    description: "Portafolio profesional de desarrollador Full-Stack especializado en tecnologías modernas",
    siteName: "Portfolio - Tu Nombre",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollador Full-Stack | React, Next.js & Node.js",
    description: "Portafolio profesional de desarrollador Full-Stack especializado en tecnologías modernas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
            <p className="text-gray-500 mt-2">Desarrollado con Next.js, TailwindCSS y Framer Motion</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
