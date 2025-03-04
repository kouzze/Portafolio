import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/sections/Navigation";
import { Analytics } from "@/components/sections/Analytics";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="analytics">
        <Analytics />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}