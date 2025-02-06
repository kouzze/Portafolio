"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";

export function Projects() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center neon-glow">
            PROYECTOS DESTACADOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}