"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12">
            Experiencia <span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-6 border-l border-border"
            >
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary" />

              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>
              </div>

              <ul className="space-y-1.5 mb-4">
                {job.bullets.map((b, j) => (
                  <li key={j} className="text-muted-foreground text-sm flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              {job.clients.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground">Clientes:</span>
                  {job.clients.map((c) => (
                    <Badge key={c} variant="outline" className="text-xs">
                      {c}
                    </Badge>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
