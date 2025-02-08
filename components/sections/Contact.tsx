"use client";

import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">CONTACTO</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <Link href="mailto:nicolasignacio.j.c@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Mail className="w-5 h-5" />
          <span>nicolasignacio.j.c@gmail.com</span>
        </Link>
        <Link href="https://github.com/kouzze" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Github className="w-5 h-5" />
          <span>github.com/kouzze</span>
        </Link>
        <Link href="https://linkedin.com/in/nicolas-jc" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Linkedin className="w-5 h-5" />
          <span>linkedin.com/in/nicolas-jc</span>
        </Link>
      </div>
    </section>
  );
}