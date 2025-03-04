"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [open, setOpen] = useState(false);

  const sections = [
    { name: 'Inicio', href: '#' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-background/95 backdrop-blur-lg border-r-primary/20">
          <nav className="flex flex-col gap-4 mt-8">
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => handleClick(section.href)}
                className="text-left px-4 py-2 hover:bg-primary/10 rounded-md transition-colors"
              >
                {section.name}
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}