"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plataforma completa de comercio electrónico con gestión de inventario, pagos y analytics en tiempo real.",
    problem: "Empresa necesitaba modernizar su sistema de ventas legacy y migrar a una solución escalable.",
    techStack: ["React", "Redux Toolkit", "NestJS", "MySQL", "Stripe", "Docker"],
    achievements: [
      "Implementé autenticación JWT con refresh tokens",
      "Optimicé queries con Dapper reduciendo latencia 60%",
      "Integré pasarela de pagos con Stripe",
    ],
    role: "Full-Stack Developer Lead",
    metrics: {
      performance: "2.3s load time",
      coverage: "85% test coverage",
      conversion: "23% increase",
    },
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/example/ecommerce",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Sistema integral para gestión de pacientes, citas médicas y expedientes clínicos digitales.",
    problem: "Clínica requería digitalizar procesos manuales y mejorar la experiencia del paciente.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Azure AD", "Power BI"],
    achievements: [
      "Desarrollé módulo de telemedicina con WebRTC",
      "Implementé SSO con Azure Active Directory",
      "Creé dashboards interactivos con Power BI",
    ],
    role: "Senior Full-Stack Developer",
    metrics: {
      performance: "1.8s load time",
      coverage: "92% test coverage",
      efficiency: "40% time saved",
    },
    demoUrl: "https://healthcare-demo.example.com",
    repoUrl: "https://github.com/example/healthcare",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    description:
      "Dashboard avanzado para análisis financiero con visualizaciones interactivas y reportes automatizados.",
    problem: "Empresa financiera necesitaba centralizar datos de múltiples fuentes para toma de decisiones.",
    techStack: ["React", "D3.js", "Node.js", "Express", "SQL Server", "Redis", "AWS"],
    achievements: [
      "Desarrollé algoritmos de análisis predictivo",
      "Implementé cache distribuido con Redis",
      "Desplegué infraestructura en AWS con Docker",
    ],
    role: "Full-Stack Developer",
    metrics: {
      performance: "1.5s load time",
      coverage: "88% test coverage",
      accuracy: "94% prediction accuracy",
    },
    demoUrl: "https://finance-demo.example.com",
    repoUrl: "https://github.com/example/finance",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones tecnológicas que han transformado negocios y mejorado la experiencia de miles de usuarios
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{project.title}</CardTitle>
                      <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Problema Resuelto:</h4>
                        <p className="text-gray-700">{project.problem}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Mi Rol: {project.role}</h4>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-700 flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <div className="font-bold text-blue-600">{project.metrics.performance}</div>
                          <div className="text-sm text-gray-600">Load Time</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-green-600">{project.metrics.coverage}</div>
                          <div className="text-sm text-gray-600">Test Coverage</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-purple-600">
                            {project.metrics.conversion || project.metrics.efficiency || project.metrics.accuracy}
                          </div>
                          <div className="text-sm text-gray-600">Impact</div>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                        <Button variant="outline">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </Button>
                        <Button variant="ghost">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Detalles
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
