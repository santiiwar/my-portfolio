export const personal = {
  name: "Santiago Guerra",
  fullName: "Santiago Guerra Boschiero",
  role: "Backend Developer",
  tagline: "Ingeniería en Computación · UdelaR",
  bio: "Desarrollador backend con experiencia en APIs REST y SOAP, integración de sistemas y gestión de contenedores. Actualmente finalizando mi carrera en Ingeniería en Computación mientras trabajo en proyectos reales con clientes internacionales.",
  location: "Montevideo, Uruguay",
  email: "guerrasantiago00@gmail.com",
  phone: "(+598) 99 436 205",
  github: "https://github.com/santiiwar",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio" },
    { name: "Portugués", level: "Básico" },
  ],
}

export const experience = [
  {
    company: "Perceptiva Tech",
    role: "Semi Senior Developer",
    period: "Nov 2023 – Nov 2025",
    location: "Montevideo, Uruguay",
    description: "Desarrollo backend y gestión de APIs para clientes de telecomunicaciones y banca.",
    bullets: [
      "Diseño e implementación de servicios REST y SOAP con Java y Groovy",
      "Administración de APIs con herramientas Axway (API Gateway, API Manager)",
      "Gestión de contenedores Docker para optimización y escalabilidad",
      "Migración y unificación de configuraciones FED a YAML para Telefónica",
      "Desarrollo de soluciones Axway para Banco de la República de Colombia",
    ],
    clients: ["Telefónica", "Banco de la República de Colombia"],
  },
]

export const projects = [
  {
    name: "Task Manager",
    description:
      "Aplicación fullstack de gestión de tareas con tablero kanban y autenticación JWT. Backend desarrollado en Java con Spring Boot y PostgreSQL, frontend en Next.js (demo solo frontend).",
    stack: ["Java", "Spring Boot", "JWT", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS"],
    context: "Proyecto personal",
    year: "2025",
    demo: "https://task-manager-sguerra.vercel.app",
    repo: "https://github.com/santiiwar/task-manager",
  },
  {
    name: "Salud en Cercanía",
    description:
      "Aplicación web para geolocalización de servicios de salud. Permite a usuarios encontrar prestadores cercanos, comparar servicios y gestionar su perfil de salud.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Python", "FastAPI"],
    context: "Proyecto de Grado — FING, UdelaR",
    year: "2025",
  },
  {
    name: "Migración API Telefónica",
    description:
      "Migración y unificación de configuraciones FED a YAML para estandarizar la gestión de servicios en la infraestructura de APIs de Telefónica.",
    stack: ["Axway", "YAML", "Java", "Groovy", "Docker"],
    context: "Perceptiva Tech",
    year: "2024",
  },
  {
    name: "Integración Axway — Colombia",
    description:
      "Diseño, desarrollo y administración de soluciones Axway para el Banco de la República de Colombia, integrando APIs bancarias críticas.",
    stack: ["Axway", "Java", "Groovy", "REST", "SOAP"],
    context: "Perceptiva Tech",
    year: "2024",
  },
]

export const skills = {
  backend: ["Java", "Groovy", "Python", "C", "C++"],
  frontend: ["JavaScript", "TypeScript", "React", "Next.js"],
  databases: ["SQL"],
  devops: ["Docker", "REST APIs", "SOAP", "Axway"],
}

export const education = [
  {
    degree: "Ingeniería en Computación",
    institution: "Facultad de Ingeniería — UdelaR",
    period: "2018 – 2026",
    detail: "90% de créditos aprobados · Promedio 6.68",
  },
  {
    degree: "Bachillerato Científico",
    institution: "Colegio y Liceo Misericordista",
    period: "2017",
    detail: "Orientación científica con énfasis en ingeniería",
  },
]

export const certifications = [
  {
    name: "Google Workspace Sales Credential",
    issuer: "Google",
    date: "Oct 2024",
  },
  {
    name: "Google Cloud Sales Credential",
    issuer: "Google",
    date: "Oct 2024",
  },
  {
    name: "Axway API Management Training",
    issuer: "Axway",
    date: "Mar 2024",
  },
]
