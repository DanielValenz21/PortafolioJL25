"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const referencias = [
	{
		name: "Alex Escobedo",
		role: "Supervisor Técnico – Xecasoft",
		company: "Xecasoft",
		content:
			"Durante su tiempo en Xecasoft, Daniel demostró gran compromiso y responsabilidad en tareas clave como el soporte y mantenimiento de sistemas desarrollados, gestión de bases de datos en SQL Server y MySQL, y desarrollo backend con .NET 6. Destacó también por su iniciativa en capacitar usuarios internos, mostrando habilidades técnicas y de comunicación que aportaron valor al equipo.",
		rating: 5,
		avatar: "/placeholder.svg?height=80&width=80",
		phone: "+502 4192 5033",
	},
	{
		name: "Roberto Padilla",
		role: "Jefe Caporal – Finca Santa Catalina",
		company: "Finca Santa Catalina",
		content:
			"Daniel fue un gran apoyo en Finca Santa Catalina. Siempre estuvo dispuesto a asumir responsabilidades importantes como la coordinación de pagos y el control de inventarios. Lo que más destaco es su actitud: proactivo, respetuoso y con muchas ganas de aprender. Se notaba que no solo hacía el trabajo, sino que lo hacía bien y con compromiso. Sin duda, alguien en quien se puede confiar.",
		rating: 5,
		avatar: "/placeholder.svg?height=80&width=80",
		phone: "5482-8151",
	},
	{
		name: "Pablo Hernández",
		role: "Tech Lead BDG",
		company: "BDG",
		content:
			"Tuve la oportunidad de trabajar con Daniel y no solo lo recomiendo por sus habilidades técnicas como desarrollador, sino también por su calidad humana. Es responsable, se adapta rápido y aporta soluciones con criterio. Es de esas personas que sabés que podés confiar tanto en lo profesional como en lo personal, y eso no es común.",
		rating: 5,
		avatar: "/placeholder.svg?height=80&width=80",
		phone: "+502 4103 3610",
	},
]

export default function ReferenciasSection() {
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
						Referencias
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Lo que dicen mis clientes y colegas sobre mi trabajo
					</p>
				</motion.div>

				<div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
					{referencias.map((ref, index) => (
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
										{[...Array(ref.rating)].map((_, i) => (
											<Star
												key={i}
												className="w-5 h-5 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
									<p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
										"{ref.content}"
									</p>
									<div className="flex items-center gap-4">
										<Image
											src={ref.avatar || "/placeholder.svg"}
											alt={ref.name}
											width={60}
											height={60}
											className="rounded-full border-2 border-blue-100"
										/>
										<div>
											<h4 className="font-bold text-gray-900">
												{ref.name}
											</h4>
											<p className="text-blue-600 font-medium">
												{ref.role}
											</p>
											<p className="text-gray-500 text-sm">
												{ref.company}
											</p>
											<p className="text-gray-500 text-sm">
												{ref.phone}
											</p>
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
