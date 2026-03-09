"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { personal } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12">
            Sobre mí <span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              {personal.bio}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Me apasiona la arquitectura de sistemas, la integración de APIs y la búsqueda de soluciones eficientes
              para problemas complejos. Disfruto trabajar tanto de forma independiente como en equipo, y siempre estoy
              buscando aprender nuevas tecnologías.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Idiomas
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-sm">
                      {lang.name}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Contacto
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href={`mailto:${personal.email}`} className="hover:text-primary transition-colors">
                    {personal.email}
                  </a>
                </li>
                <li>{personal.phone}</li>
                <li>{personal.location}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
