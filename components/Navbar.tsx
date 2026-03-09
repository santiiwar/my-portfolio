"use client"

import { useState, useEffect } from "react"
import { personal } from "@/lib/data"

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
          {personal.name}
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur border-b border-border px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
