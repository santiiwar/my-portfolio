"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { personal } from "@/lib/data"
import { Github, Mail, Send } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("ok")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
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
            ¿Tenés una propuesta o querés ponerte en contacto? Mandame un mensaje y te respondo lo antes posible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Nombre</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Mensaje</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>

            <Button type="submit" disabled={status === "sending"} className="w-full">
              <Send className="w-4 h-4 mr-2" />
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </Button>

            {status === "ok" && (
              <p className="text-sm text-green-400 text-center">¡Mensaje enviado! Te respondo pronto.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 text-center">Algo salió mal. Intentá de nuevo o escribime directo.</p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 pt-2"
          >
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm">{personal.email}</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-sm">github.com/santiiwar</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
