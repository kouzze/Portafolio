import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  longDescription?: string;
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-lg bg-secondary/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 card-glow">
          <div className="aspect-video w-full">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
            <p className="mb-4 text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/10">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg object-cover"
            />
            <div className="mt-6 space-y-4">
              <p className="text-lg text-muted-foreground">
                {project.longDescription || project.description}
              </p>
              {project.features && (
                <div className="mt-4">
                  <h4 className="mb-2 text-lg font-semibold">Características Principales</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/10">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                {project.githubUrl && (
                  <Button variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
                    <Github className="mr-2 h-4 w-4" />
                    Ver Código
                  </Button>
                )}
                {project.liveUrl && (
                  <Button onClick={() => window.open(project.liveUrl, '_blank')}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}