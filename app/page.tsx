"use client";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ThemeToggle } from "./components/ThemeToggle";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SN
            </span>
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#experience" className="text-gray-400 hover:text-purple-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <Hero />
      <About />
      <div id="experience" className="scroll-mt-20">
        <Experience />
      </div>
      <Achievements />
      <Projects />
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
    </main>
  );
}

