"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";

export function Experience() {
  return (
    <AnimatedSection className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400">{exp.role}</h3>
                    <p className="text-lg text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.duration}</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <span className="text-purple-400 mr-2">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-900/30 border border-purple-700/50 rounded-full text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

