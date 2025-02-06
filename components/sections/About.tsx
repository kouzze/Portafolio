"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Brain } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-secondary/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-glow">SOBRE MÍ</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
            Ingeniero Civil en Computación apasionado por el desarrollo de software y la innovación tecnológica. 
            Especializado en arquitecturas escalables, análisis de datos y desarrollo full-stack.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code className="w-6 h-6 mt-1 text-primary" />,
                title: "Desarrollo Full-Stack",
                skills: "React, Node.js, TypeScript, Python"
              },
              {
                icon: <Database className="w-6 h-6 mt-1 text-primary" />,
                title: "Bases de Datos",
                skills: "PostgreSQL, MongoDB, Redis"
              },
              {
                icon: <Cloud className="w-6 h-6 mt-1 text-primary" />,
                title: "Cloud & DevOps",
                skills: "AWS, Docker, CI/CD"
              },
              {
                icon: <Brain className="w-6 h-6 mt-1 text-primary" />,
                title: "Machine Learning",
                skills: "TensorFlow, Scikit-learn"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-secondary/50 backdrop-blur-sm card-glow">
                {item.icon}
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}