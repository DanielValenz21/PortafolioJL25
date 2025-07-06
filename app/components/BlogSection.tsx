"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "Optimización de Performance en Next.js 15",
    excerpt:
      "Técnicas avanzadas para mejorar el rendimiento de aplicaciones Next.js usando Server Components y streaming.",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Next.js",
    image: "/placeholder.svg?height=200&width=400",
    slug: "optimizacion-nextjs-15",
  },
  {
    title: "Algoritmos Genéticos en JavaScript",
    excerpt: "Implementación práctica de algoritmos genéticos para resolver problemas de optimización complejos.",
    date: "2024-01-08",
    readTime: "12 min",
    category: "Algoritmos",
    image: "/placeholder.svg?height=200&width=400",
    slug: "algoritmos-geneticos-js",
  },
  {
    title: "Power BI: Dashboards Interactivos",
    excerpt: "Guía completa para crear dashboards empresariales con Power BI y integración con APIs REST.",
    date: "2024-01-01",
    readTime: "10 min",
    category: "Power BI",
    image: "/placeholder.svg?height=200&width=400",
    slug: "power-bi-dashboards",
  },
  {
    title: "Clean Architecture en NestJS",
    excerpt: "Implementación de principios de arquitectura limpia en aplicaciones NestJS para máxima escalabilidad.",
    date: "2023-12-20",
    readTime: "15 min",
    category: "Architecture",
    image: "/placeholder.svg?height=200&width=400",
    slug: "clean-architecture-nestjs",
  },
]

const getCategoryColor = (category: string) => {
  const colors = {
    "Next.js": "bg-black text-white",
    Algoritmos: "bg-purple-100 text-purple-800",
    "Power BI": "bg-yellow-100 text-yellow-800",
    Architecture: "bg-blue-100 text-blue-800",
  }
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
}

export default function BlogSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog & Artículos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comparto conocimientos técnicos y experiencias del desarrollo de software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                  >
                    Leer artículo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors bg-transparent"
          >
            Ver todos los artículos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
