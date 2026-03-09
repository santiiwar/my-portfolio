"use client"

import { motion } from "framer-motion"
import { education, certifications } from "@/lib/data"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12">
            Educación <span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Formación
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((ed, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="pl-4 border-l border-border"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold">{ed.degree}</h4>
                    <span className="text-xs text-muted-foreground shrink-0">{ed.period}</span>
                  </div>
                  <p className="text-primary text-sm mt-0.5">{ed.institution}</p>
                  <p className="text-muted-foreground text-sm mt-1">{ed.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Certificaciones
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start justify-between gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{cert.date}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
