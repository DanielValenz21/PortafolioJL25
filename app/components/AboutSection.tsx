"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const skills = [
	{ name: "C#", level: 90 },
	{ name: ".NET", level: 80 },
	{ name: "SQL Server", level: 70 },
	{ name: "React", level: 95 },
	{ name: "Next.js", level: 90 },
	{ name: "TypeScript", level: 88 },
	{ name: "Node.js", level: 85 },
	{ name: "Redux Toolkit", level: 82 },
	{ name: "NestJS", level: 80 },
]

export default function AboutSection() {
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
					<h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
							<CardContent className="p-0">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">
									Mi Propuesta de Valor
								</h3>
								<p className="text-gray-700 text-lg leading-relaxed mb-6">
									Desarrollador Full-Stack apasionado por crear soluciones
									tecnológicas que generen impacto real. Especializado en
									arquitecturas escalables y experiencias de usuario excepcionales.
								</p>
								<p className="text-gray-700 text-lg leading-relaxed mb-8">
									Mi enfoque combina las mejores prácticas de desarrollo con
									metodologías ágiles, garantizando entregas de calidad que
									superan las expectativas del cliente.
								</p>

								<div className="grid grid-cols-2 gap-6 mb-8">
									<div className="col-span-2 flex justify-center">
										<div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
									</div>
									<div className="col-span-2 text-center">
										<div className="text-gray-600">Años de Experiencia</div>
									</div>
								</div>

								<div className="flex flex-wrap gap-2">
									<Badge
										variant="secondary"
										className="bg-blue-100 text-blue-800"
									>
										Guatemala 🇬🇹
									</Badge>
									<Badge
										variant="secondary"
										className="bg-green-100 text-green-800"
									>
										Disponible Remoto
									</Badge>
									<Badge
										variant="secondary"
										className="bg-purple-100 text-purple-800"
									>
										Full-Stack
									</Badge>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
							<CardContent className="p-0">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">
									Habilidades Principales
								</h3>
								<div className="space-y-6">
									{skills.map((skill, index) => (
										<motion.div
											key={skill.name}
											initial={{ width: 0 }}
											whileInView={{ width: "100%" }}
											transition={{ duration: 0.8, delay: index * 0.1 }}
											viewport={{ once: true }}
										>
											<div className="flex justify-between items-center mb-2">
												<span className="font-medium text-gray-700">{skill.name}</span>
												<span className="text-sm text-gray-500">
													{skill.level}%
												</span>
											</div>
											<Progress value={skill.level} className="h-2" />
										</motion.div>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
