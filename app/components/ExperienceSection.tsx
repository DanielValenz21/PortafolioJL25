"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import { useState } from "react"

const experiences = [
	{
		company: "Policia Municipal de Transito PMT (San Antonio Suchitepequez)",
		role: "Líder de Desarrollo de Sistema Digital",
		period: "Febrero 2025 - Junio 2025",
		location: "San Antonio Suchitepequez, GT",
		type: "Tiempo Completo",
		responsibilities: [
			"Lideré el desarrollo completo de un sistema digital para el registro, almacenamiento y gestión segura de boletas de tránsito.",
			"Implementé una solución full stack utilizando React, Node.js y MySQL, con autenticación JWT y documentación Swagger.",
			"Capacitación técnica al personal operativo y administrativo en el uso del sistema.",
			"Garantía de trazabilidad de boletas, reducción de errores y eliminación del uso de papel.",
		],
		achievements: [
			" Diseño y creación integral del sistema, abarcando arquitectura de software, experiencia en toma de requerimientos y ejecución completa del proyecto como freelancer.",
		],
		technologies: ["React", "Node.js", "MySQL", "JWT", "Swagger"],
	},
	{
		company: "Business Development Group (BDG)",
		role: "Desarrollador Middle Full Stack",
		period: "Septiembre 2024 - Febrero 2025",
		location: "Guatemala, GT",
		type: "Tiempo Completo",
		responsibilities: [
			"Desarrollador middle full stack en un portal administrativo web y aplicación móvil híbrida (iOS/Android).",
			"Tecnologías utilizadas: React, React Native, Node.js y SQL Server Management Studio.",
			"Encargado del consumo e integración de APIs REST, así como del diseño de interfaces responsivas y experiencia de usuario.",
			"Participación en procesos de control de calidad, pruebas funcionales y despliegue.",
			"Capacitación técnica a usuarios internos sobre el uso y administración de las plataformas desarrolladas.",
		],
		achievements: [
			"Aprendizaje y colaboración efectiva con equipos de QA y desarrolladores de otras empresas, integración de APIs de capa media, y creación de aplicación móvil y portal administrativo.",
		],
		technologies: ["React", "React Native", "Node.js", "SQL Server Management Studio"],
	},
	{
		company: "Finca Santa Catalina",
		role: "Supervisor de Operaciones Agrícolas",
		period: "Septiembre 2023 - Septiembre 2024",
		location: "Guatemala, GT",
		type: "Tiempo Completo",
		responsibilities: [
			"Coordinación de Pagos: Responsable de la organización y ejecución de los pagos a jornaleros, asegurando procesos justos y puntuales en cada ciclo de trabajo.",
			"Gestión de Inventarios: Encargado del control exhaustivo de los productos agrícolas, garantizando una administración precisa y eficiente de los recursos.",
			"Planificación y Proyectos Agrícolas: Participación activa en la planificación y ejecución de proyectos agrícolas, aplicando conocimientos técnicos en cultivos para contribuir al éxito de las iniciativas de producción.",
		],
		achievements: [
			"Creación de un plan de ejecución de proyecto a mediana escala para 7 años, contratación y capacitación de equipo de trabajo para cumplir los objetivos del plan.",
		],
		technologies: ["Excel", "Power BI"],
	},
	{
		company: "Xecasoft",
		role: "Analista Desarrollador Medio",
		period: "Marzo 2023 - Agosto 2023",
		location: "San Antonio Suchitepequez, GT",
		type: "Tiempo Completo",
		responsibilities: [
			"Soporte y mantenimiento a sistemas desarrollados Backend en .NET 6, Java.",
			"Capacitación especializada para la adopción y uso óptimo de software empresarial.",
			"Gestión de base de datos en SQL Server Management Studio y Mysql.",
			"Control de versiones con Git.",
		],
		achievements: [
			"Atención al cliente, toma de requerimientos y validación de bugs reportados por usuarios.",
			"Elaboración de reportes y documentación técnica de proyectos.",
			"Optimización de procesos internos mediante la mejora continua del sistema y soporte proactivo.",
		],
		technologies: [".NET 6", "Java", "SQL Server Management Studio", "MySQL", "Git"],
	},
	{
		company: "Librería y Papelería JYM",
		role: "Vendedor",
		period: "2016 – 2020",
		location: "San Antonio Suchitepequez, GT",
		type: "Tiempo Completo",
		responsibilities: [
			"Responsable de ventas y atención personalizada al cliente.",
			"Encargado de distribución a microempresas asociadas, gestionando pedidos y entregas.",
			"Capacitador de nuevo personal en procesos de venta y gestión operativa.",
			"Supervisor del área de paquetería, controlando inventario, logística interna y despacho de productos.",
		],
		achievements: [
			"Aprendizaje en trabajo con equipos grandes, coordinación de entregas y envíos, comprensión de modelos de negocio y atención a sucursales.",
		],
		technologies: [],
	},
]

export default function ExperienceSection() {
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
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Experiencia Profesional
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Trayectoria profesional construyendo soluciones tecnológicas de alto
						impacto
					</p>
				</motion.div>

				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{
								x: index % 2 === 0 ? -50 : 50,
								opacity: 0,
							}}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
								<CardContent className="p-8">
									<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
										<div className="flex-1">
											<h3 className="text-2xl font-bold text-gray-900 mb-2">
												{exp.role}
											</h3>
											<div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
												<Building className="w-5 h-5" />
												{exp.company}
											</div>
											<div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
												<div className="flex items-center gap-2">
													<Calendar className="w-4 h-4" />
													{exp.period}
												</div>
												<div className="flex items-center gap-2">
													<MapPin className="w-4 h-4" />
													{exp.location}
												</div>
												<Badge variant="secondary" className="w-fit">
													{exp.type}
												</Badge>
											</div>
										</div>
									</div>

									<div className="grid lg:grid-cols-2 gap-8">
										<div>
											<h4 className="font-semibold text-gray-900 mb-4">
												Responsabilidades:
											</h4>
											<ul className="space-y-2">
												{exp.responsibilities.map((resp, i) => (
													<li
														key={i}
														className="text-gray-700 flex items-start"
													>
														<span className="text-blue-600 mr-2 mt-1">•</span>
														<span>{resp}</span>
													</li>
												))}
											</ul>
										</div>

										<div>
											<h4 className="font-semibold text-gray-900 mb-4">
												Logros Destacados:
											</h4>
											<ul className="space-y-2 mb-6">
												{exp.achievements.map((achievement, i) => (
													<li
														key={i}
														className="text-gray-700 flex items-start"
													>
														<span className="text-green-600 mr-2 mt-1">✓</span>
														<span>{achievement}</span>
													</li>
												))}
											</ul>

											<div>
												<h4 className="font-semibold text-gray-900 mb-3">
													Tecnologías:
												</h4>
												<div className="flex flex-wrap gap-2">
													{exp.technologies.map((tech) => (
														<Badge
															key={tech}
															variant="outline"
															className="border-blue-200 text-blue-700"
														>
															{tech}
														</Badge>
													))}
												</div>
											</div>
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
