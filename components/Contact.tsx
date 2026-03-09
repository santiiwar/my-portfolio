"use client"

import { motion } from "framer-motion"
import { personal } from "@/lib/data"
import { Github, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Contacto <span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            ¿Tenés una propuesta o querés ponerte en contacto? Escribime directo.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href={`mailto:${personal.email}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Email</p>
              <p className="text-sm font-medium group-hover:text-primary transition-colors">{personal.email}</p>
            </div>
          </motion.a>

          <motion.a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Github className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">GitHub</p>
              <p className="text-sm font-medium group-hover:text-primary transition-colors">github.com/santiiwar</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
