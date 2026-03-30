import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, mensaje } = body;

    if (!nombre || !empresa || !email) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    // Log the lead (en producción aquí iría Resend, Brevo, o Supabase)
    console.log("🎬 Nuevo lead Ideasmakers:", { nombre, empresa, email, mensaje });

    // TODO: integrar con servicio de email o base de datos
    // Ejemplo con Supabase:
    // await supabaseAdmin.from("leads").insert({ nombre, empresa, email, mensaje });
    // Ejemplo con Resend:
    // await resend.emails.send({ from, to, subject, html });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error guardando lead:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
