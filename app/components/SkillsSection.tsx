"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Wrench, Users, Lightbulb } from "lucide-react"

const skillCategories = [
	{
		title: "Lenguajes de Programación",
		icon: Code,
		color: "blue",
		skills: [
			{ name: "C#", level: "Experto" },
			{ name: ".NET", level: "Avanzado" },
			{ name: "JavaScript (ES6+)", level: "Experto" },
			{ name: "TypeScript", level: "Avanzado" },
			{ name: "SQL", level: "Avanzado" },
			{ name: "Python", level: "Intermedio" },
		],
	},
	{
		title: "Frameworks & Librerías",
		icon: Wrench,
		color: "green",
		skills: [
			{ name: "React", level: "Experto" },
			{ name: "Next.js", level: "Experto" },
			{ name: "React Native", level: "Avanzado" },
			{ name: "NestJS", level: "Avanzado" },
			{ name: "Redux Toolkit", level: "Avanzado" },
			{ name: "Express.js", level: "Avanzado" },
		],
	},
	{
		title: "Bases de Datos",
		icon: Database,
		color: "purple",
		skills: [
			{ name: "SQL Server", level: "Avanzado" },
			{ name: "MySQL", level: "Avanzado" },
			{ name: "PostgreSQL", level: "Intermedio" },
		],
	},
	{
		title: "DevOps & Cloud",
		icon: Cloud,
		color: "orange",
		skills: [
			{ name: "Docker", level: "Avanzado" },
			{ name: "AWS (EC2, S3, RDS)", level: "Intermedio" },
			{ name: "Azure", level: "Intermedio" },
			{ name: "Git & GitHub", level: "Experto" },
			{ name: "Vercel/Netlify", level: "Avanzado" },
		],
	},
	{
		title: "Herramientas & Otros",
		icon: Lightbulb,
		color: "indigo",
		skills: [
			{ name: "Power BI", level: "Intermedio" },
			{ name: "Swagger/OpenAPI", level: "Avanzado" },
			{ name: "Figma", level: "Intermedio" },
			{ name: "Postman", level: "Avanzado" },
		],
	},
	{
		title: "Metodologías",
		icon: Users,
		color: "pink",
		skills: [
			{ name: "SOLID Principles", level: "Avanzado" },
			{ name: "Clean Architecture", level: "Avanzado" },
			{ name: "Scrum/Agile", level: "Avanzado" },
			{ name: "API RESTful", level: "Avanzado" },
			{ name: "Code Review", level: "Experto" },
		],
	},
]

const getLevelColor = (level: string) => {
	switch (level) {
		case "Experto":
			return "bg-green-100 text-green-800 border-green-200"
		case "Avanzado":
			return "bg-blue-100 text-blue-800 border-blue-200"
		case "Intermedio":
			return "bg-yellow-100 text-yellow-800 border-yellow-200"
		default:
			return "bg-gray-100 text-gray-800 border-gray-200"
	}
}

const getCardColor = (color: string) => {
	const colors = {
		blue: "border-l-blue-500",
		green: "border-l-green-500",
		purple: "border-l-purple-500",
		orange: "border-l-orange-500",
		indigo: "border-l-indigo-500",
		pink: "border-l-pink-500",
	}
	return colors[color as keyof typeof colors] || "border-l-gray-500"
}

export default function SkillsSection() {
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
						Habilidades Técnicas
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Stack tecnológico completo para desarrollo de aplicaciones modernas y
						escalables
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, index) => {
						const IconComponent = category.icon
						return (
							<motion.div
								key={category.title}
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card
									className={`h-full shadow-xl border-0 border-l-4 ${getCardColor(
										category.color
									)} bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300`}
								>
									<CardHeader className="pb-4">
										<div className="flex items-center gap-3 mb-2">
											<div
												className={`p-2 rounded-lg bg-${category.color}-100`}
											>
												<IconComponent
													className={`w-6 h-6 text-${category.color}-600`}
												/>
											</div>
											<CardTitle className="text-lg font-bold text-gray-900">
												{category.title}
											</CardTitle>
										</div>
									</CardHeader>
									<CardContent className="pt-0">
										<div className="space-y-3">
											{category.skills.map((skill) => (
												<div
													key={skill.name}
													className="flex items-center justify-between"
												>
													<span className="text-gray-700 font-medium">
														{skill.name}
													</span>
													<Badge
														variant="outline"
														className={`text-xs ${getLevelColor(
															skill.level
														)}`}
													>
														{skill.level}
													</Badge>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
