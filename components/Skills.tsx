"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"

const categories = [
  { label: "Backend", items: skills.backend },
  { label: "Frontend", items: skills.frontend },
  { label: "Bases de Datos", items: skills.databases },
  { label: "DevOps & APIs", items: skills.devops },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12">
            Skills <span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
