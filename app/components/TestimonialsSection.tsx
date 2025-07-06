"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "María González",
    role: "CTO, TechCorp Solutions",
    company: "TechCorp Solutions",
    content:
      "Excepcional desarrollador con una capacidad única para transformar ideas complejas en soluciones elegantes. Su expertise técnico y liderazgo han sido fundamentales para nuestro crecimiento.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Carlos Mendoza",
    role: "Product Manager, Digital Innovations",
    company: "Digital Innovations Ltd.",
    content:
      "Trabajar con él ha sido una experiencia extraordinaria. Su atención al detalle y capacidad para entregar proyectos complejos a tiempo lo convierte en un activo invaluable.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Ana Rodríguez",
    role: "CEO, StartupTech",
    company: "StartupTech",
    content:
      "Su contribución fue clave en la transformación digital de nuestra empresa. No solo es un excelente desarrollador, sino también un gran mentor para el equipo.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonios</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lo que dicen mis clientes y colegas sobre mi trabajo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 relative">
                <CardContent className="p-8">
                  <div className="absolute top-4 right-4 text-blue-200">
                    <Quote className="w-8 h-8" />
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-blue-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-blue-600 font-medium">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
