"use client";

import { motion } from "framer-motion";
import { BarChart3, LineChart, PieChart, TrendingUp, Activity } from "lucide-react";
import Image from "next/image";

export function Analytics() {
  return (
    <section className="py-24 bg-secondary/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-glow">ANALYTICS INTEGRADO</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            En este portafolio está incluída la integración de herramientas avanzadas de análisis para 
            monitorear el rendimiento y comportamiento de los usuarios en tiempo real.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/50 backdrop-blur-sm card-glow">
                <BarChart3 className="w-6 h-6 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold mb-2">Google Analytics 4</h3>
                  <p className="text-muted-foreground">
                    Implementación completa de GA4 para seguimiento avanzado de eventos, conversiones y comportamiento de usuarios.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/50 backdrop-blur-sm card-glow">
                <LineChart className="w-6 h-6 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold mb-2">Google Tag Manager</h3>
                  <p className="text-muted-foreground">
                    Gestión centralizada de tags para implementar y actualizar scripts de seguimiento sin modificar el código.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/50 backdrop-blur-sm card-glow">
                <TrendingUp className="w-6 h-6 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold mb-2">Eventos Personalizados</h3>
                  <p className="text-muted-foreground">
                    Configuración de eventos específicos para cada proyecto, permitiendo un seguimiento detallado de las interacciones clave.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden card-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/40 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="grid grid-cols-2 gap-4 p-6">
                  <PieChart className="w-16 h-16 text-primary" />
                  <Activity className="w-16 h-16 text-primary" />
                  <BarChart3 className="w-16 h-16 text-primary" />
                  <LineChart className="w-16 h-16 text-primary" />
                </div>
              </div>
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="Analytics Dashboard" 
                fill 
                className="object-cover opacity-20"
              />
            </div>
          </div>
          
          <div className="mt-16 p-6 rounded-lg bg-secondary/30 backdrop-blur-sm card-glow">
            <h3 className="font-semibold mb-4 text-center">Beneficios de la Integración Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-md bg-secondary/50">
                <h4 className="font-medium mb-2 text-primary">Toma de Decisiones</h4>
                <p className="text-sm text-muted-foreground">
                  Datos en tiempo real para optimizar la experiencia del usuario y mejorar la conversión.
                </p>
              </div>
              <div className="p-4 rounded-md bg-secondary/50">
                <h4 className="font-medium mb-2 text-primary">Seguimiento de KPIs</h4>
                <p className="text-sm text-muted-foreground">
                  Monitoreo constante de métricas clave para evaluar el rendimiento del proyecto.
                </p>
              </div>
              <div className="p-4 rounded-md bg-secondary/50">
                <h4 className="font-medium mb-2 text-primary">Optimización Continua</h4>
                <p className="text-sm text-muted-foreground">
                  Mejora iterativa basada en datos reales de comportamiento de usuarios.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}