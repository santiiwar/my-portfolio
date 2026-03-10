"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12">
            Proyectos <span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs text-muted-foreground">{project.context}</span>
                <span className="text-xs text-muted-foreground">{project.year}</span>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                {"repo" in project && project.repo && (
                  <a
                    href={project.repo as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    Repositorio
                  </a>
                )}
                {"demo" in project && project.demo && (
                  <a
                    href={project.demo as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Demo <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
