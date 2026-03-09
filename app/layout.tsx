import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Santiago Guerra — Backend Developer",
  description:
    "Portfolio de Santiago Guerra Boschiero, desarrollador backend especializado en APIs REST/SOAP, Java, Groovy y Axway. Estudiante avanzado de Ingeniería en Computación en UdelaR.",
  keywords: ["Santiago Guerra", "Backend Developer", "Java", "Groovy", "Axway", "APIs", "Uruguay"],
  authors: [{ name: "Santiago Guerra Boschiero" }],
  openGraph: {
    title: "Santiago Guerra — Backend Developer",
    description: "Portfolio personal de Santiago Guerra Boschiero.",
    type: "website",
    locale: "es_UY",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
