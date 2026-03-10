"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { personal } from "@/lib/data"
import { Github, Mail, Check } from "lucide-react"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
          <motion.button
            onClick={copyEmail}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-colors group text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              {copied ? <Check className="w-5 h-5 text-primary" /> : <Mail className="w-5 h-5 text-primary" />}
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Email</p>
              <p className="text-sm font-medium group-hover:text-primary transition-colors">
                {copied ? "¡Copiado!" : personal.email}
              </p>
            </div>
          </motion.button>

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
