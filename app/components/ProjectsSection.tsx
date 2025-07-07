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
		title: "Gestor de Boletas",
		description:
			"Plataforma web de gestión de multas de tránsito con registro, cobro y analítica en tiempo real.",
		problem:
			"Municipalidades y PMT tenían procesos 100 % manuales (talonarios de papel, cajas físicas). Se necesitaba digitalizar todo el flujo para reducir errores, acelerar cobros y ofrecer KPIs a los directivos.",
		techStack: [
			"React 19 & Vite",
			"Redux Toolkit",
			"TailwindCSS",
			"Express 5",
			"MySQL",
			"JWT",
			"PDFKit",
			"Docker",
		],
		achievements: [
			"Diseñé la arquitectura limpia React + Express con Knex y JWT (access/refresh).",
			"Creé wizard de 4 pasos, tabla dinámica y PDF con QR — paperless desde el día 1.",
			"Añadí guardas de rol (admin, agente, cajero) en frontend y backend.",
			"Instrumenté métricas y logs: tiempo medio de registro, % de pagos ≤ 7 días.",
		],
		role: "Full-Stack Lead",
		metrics: {
			performance: "150 boletas/día procesadas",
			coverage: "120 ms generación de PDF",
			conversion: "99.7 % uptime del API",
		},
		demoUrl: "#",
		repoUrl: "#",
		image: "/placeholder.svg?height=300&width=500",
	},
	{
		id: 2,
		title: "Healthcare Management System",
		description:
			"Sistema integral para gestión de pacientes, citas médicas y expedientes clínicos digitales.",
		problem:
			"Clínica requería digitalizar procesos manuales y mejorar la experiencia del paciente.",
		techStack: [
			"Next.js",
			"TypeScript",
			"Prisma",
			"PostgreSQL",
			"Azure AD",
			"Power BI",
		],
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
		problem:
			"Empresa financiera necesitaba centralizar datos de múltiples fuentes para toma de decisiones.",
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
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Proyectos Destacados
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Soluciones tecnológicas que han transformado negocios y mejorado la
						experiencia de miles de usuarios
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
											<CardTitle className="text-2xl font-bold text-gray-900 mb-2">
												{project.title}
											</CardTitle>
											<p className="text-gray-600 text-lg leading-relaxed">
												{project.description}
											</p>
										</CardHeader>

										<CardContent className="p-0 space-y-6">
											<div>
												<h4 className="font-semibold text-gray-900 mb-2">
													Problema Resuelto:
												</h4>
												<p className="text-gray-700">{project.problem}</p>
											</div>

											<div>
												<h4 className="font-semibold text-gray-900 mb-3">
													Tech Stack:
												</h4>
												<div className="flex flex-wrap gap-2">
													{project.techStack.map((tech) => (
														<Badge
															key={tech}
															variant="secondary"
															className="bg-blue-100 text-blue-800"
														>
															{tech}
														</Badge>
													))}
												</div>
											</div>

											<div>
												<h4 className="font-semibold text-gray-900 mb-2">
													Mi Rol: {project.role}
												</h4>
												<ul className="space-y-1">
													{project.achievements.map((achievement, i) => (
														<li
															key={i}
															className="text-gray-700 flex items-start"
														>
															<span className="text-blue-600 mr-2">•</span>
															{achievement}
														</li>
													))}
												</ul>
											</div>

											<div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
												<div className="text-center">
													<div className="font-bold text-blue-600">
														{project.metrics.performance}
													</div>
												</div>
												<div className="text-center">
													<div className="font-bold text-green-600">
														{project.metrics.coverage}
													</div>
												</div>
												<div className="text-center">
													<div className="font-bold text-purple-600">
														{
															project.metrics.conversion ||
															project.metrics.efficiency ||
															project.metrics.accuracy
														}
													</div>
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
