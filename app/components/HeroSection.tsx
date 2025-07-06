"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Eye, Github, Linkedin, MapPin } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Foto profesional"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Desarrollador{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Full-Stack
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4">React, Next.js & Node.js</p>

          <div className="flex items-center justify-center gap-2 text-gray-500 mb-8">
            <MapPin className="w-5 h-5" />
            <span>Guatemala 🇬🇹</span>
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Especialista en crear aplicaciones web escalables y experiencias de usuario excepcionales. Con más de 5 años
            transformando ideas en soluciones digitales robustas que impulsan el crecimiento empresarial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Eye className="w-5 h-5 mr-2" />
              Ver Proyectos
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Download className="w-5 h-5 mr-2" />
              Descargar CV
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/DanielValenz21"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/daniel-valenzuelagt/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
