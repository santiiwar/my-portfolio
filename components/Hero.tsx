"use client"

import { motion } from "framer-motion"
import { Github, Mail, MapPin } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { personal } from "@/lib/data"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium mb-4 tracking-wide">Hola, soy</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
            {personal.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl text-muted-foreground font-light mb-6">
            {personal.role} <span className="text-primary">·</span> {personal.tagline}
          </h2>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {personal.bio}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#contact" className={cn(buttonVariants({ size: "lg" }))}>
            <Mail className="w-4 h-4 mr-2" />
            Contacto
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            {personal.location}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
