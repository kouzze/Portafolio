import { useState } from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink } from 'lucide-react';

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

export function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer rounded-lg bg-secondary/50 backdrop-blur-sm overflow-hidden card-glow hover:bg-secondary/70 transition-colors"
      >
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            layout="responsive"
            width={700}
            height={475}
            className="w-full aspect-video object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-primary/10"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="secondary" className="bg-primary/10">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          </DialogHeader>
          
          <Image
            src={project.image}
            alt={project.title}
            layout="responsive"
            width={700}
            height={475}
            className="rounded-lg"
          />
            
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              {project.longDescription || project.description}
            </p>

            {project.features && (
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Características Principales</h4>
                <ul className="grid gap-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-3 bg-secondary/30 rounded-lg p-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-primary/10"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Ver Código
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Demo
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}