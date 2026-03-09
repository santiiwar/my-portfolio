import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "guerrasantiago00@gmail.com",
      replyTo: email,
      subject: `Mensaje de ${name} — Portfolio`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Error al enviar" }, { status: 500 })
  }
}
