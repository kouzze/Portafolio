"use client";

import { motion } from "framer-motion";
import { Code2, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <div className="flex justify-center gap-4 mb-6">
          <Code2 className="w-12 h-12 text-primary" />
          <Terminal className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 neon-glow">
          NICOLÁS JARA
        </h1>
        <p className="text-xl md:text-2xl text-primary tracking-wide">
          INGENIERO CIVIL EN COMPUTACIÓN
        </p>
      </motion.div>
    </section>
  );
}