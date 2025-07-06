"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Users, TrendingUp, Clock, Shield } from "lucide-react"

export default function CaseStudySection() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Study Detallado</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Análisis profundo: E-Commerce Platform - Transformación Digital Completa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Arquitectura del Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <pre className="text-sm text-gray-700 overflow-x-auto">
                    {`@startuml
!theme plain

package "Frontend" {
  [React SPA] as frontend
  [Redux Store] as store
  [React Router] as router
}

package "Backend Services" {
  [API Gateway] as gateway
  [Auth Service] as auth
  [Product Service] as products
  [Order Service] as orders
  [Payment Service] as payments
}

package "Database Layer" {
  database "MySQL" as db
  database "Redis Cache" as cache
}

package "External Services" {
  [Stripe API] as stripe
  [Email Service] as email
}

frontend --> gateway : HTTPS/REST
gateway --> auth
gateway --> products
gateway --> orders
gateway --> payments

auth --> db
products --> db
orders --> db
payments --> stripe

products --> cache
auth --> cache

orders --> email
@enduml`}
                  </pre>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Decisiones Arquitectónicas Clave:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Microservicios:</strong> Separación de responsabilidades para escalabilidad
                        independiente
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Cache distribuido:</strong> Redis para optimizar consultas frecuentes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>API Gateway:</strong> Punto único de entrada con rate limiting y autenticación
                      </span>
                    </li>
                  </ul>
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
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">KPIs del Proyecto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">2.3s</div>
                  <div className="text-sm text-gray-600">Tiempo de Carga</div>
                  <div className="text-xs text-green-600 mt-1">↓ 60% mejora</div>
                </div>

                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">23%</div>
                  <div className="text-sm text-gray-600">Conversión</div>
                  <div className="text-xs text-green-600 mt-1">↑ Incremento</div>
                </div>

                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-gray-600">Test Coverage</div>
                  <div className="text-xs text-green-600 mt-1">Alta calidad</div>
                </div>

                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">10K+</div>
                  <div className="text-sm text-gray-600">Usuarios Activos</div>
                  <div className="text-xs text-green-600 mt-1">Escalable</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Implementación Técnica Destacada</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    Hook Personalizado para Carrito
                  </h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <pre>{`// useCart.ts - Custom Hook
import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { addItem, removeItem, updateQuantity } from '@/store/cartSlice'

export const useCart = () => {
  const dispatch = useAppDispatch()
  const { items, total, loading } = useAppSelector(state => state.cart)

  const addToCart = useCallback((product: Product, quantity = 1) => {
    dispatch(addItem({ product, quantity }))
  }, [dispatch])

  const removeFromCart = useCallback((productId: string) => {
    dispatch(removeItem(productId))
  }, [dispatch])

  return {
    items,
    total,
    loading,
    addToCart,
    removeFromCart,
    itemCount: items.length
  }
}`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-green-600" />
                    Optimización de Query con Dapper
                  </h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <pre>{`// ProductRepository.cs
public async Task<IEnumerable<Product>> GetProductsAsync(
    int page, int pageSize, string category = null)
{
    var sql = @"
        SELECT p.*, c.Name as CategoryName 
        FROM Products p
        INNER JOIN Categories c ON p.CategoryId = c.Id
        WHERE (@category IS NULL OR c.Name = @category)
        ORDER BY p.CreatedAt DESC
        OFFSET @offset ROWS FETCH NEXT @pageSize ROWS ONLY";
    
    return await _connection.QueryAsync<Product>(sql, new {
        category,
        offset = (page - 1) * pageSize,
        pageSize
    });
}`}</pre>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Resultados Técnicos Medibles:</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">60%</div>
                    <div className="text-sm text-gray-700">Reducción en tiempo de consultas DB</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">99.9%</div>
                    <div className="text-sm text-gray-700">Uptime del sistema</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">15min</div>
                    <div className="text-sm text-gray-700">Tiempo de deployment</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                  Ver Proyecto Completo
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
