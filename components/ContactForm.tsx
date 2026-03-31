"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ nombre: "", empresa: "", email: "", mensaje: "" });
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <span className="gold-line mb-6 block" />
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Empieza<br />
            <span className="text-[#65B8DD]">tu historia</span>
          </h2>
          <p className="text-[#888] text-lg">
            Cuéntanos sobre tu empresa. Te escribimos en menos de 24 horas.
          </p>
        </div>

        {status === "ok" ? (
          <div className="bg-[#111] border border-[#65B8DD]/30 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-bold text-white mb-2">¡Acción!</h3>
            <p className="text-[#888]">
              Hemos recibido tu mensaje. Nos ponemos en contacto contigo muy pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#888] mb-2">
                  Nombre <span className="text-[#65B8DD]">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full bg-[#111] border border-[#222] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#65B8DD] transition-colors placeholder:text-[#444] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#888] mb-2">
                  Empresa <span className="text-[#65B8DD]">*</span>
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  required
                  placeholder="Nombre de tu empresa"
                  className="w-full bg-[#111] border border-[#222] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#65B8DD] transition-colors placeholder:text-[#444] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#888] mb-2">
                Email <span className="text-[#65B8DD]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="tu@empresa.com"
                className="w-full bg-[#111] border border-[#222] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#65B8DD] transition-colors placeholder:text-[#444] text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#888] mb-2">
                ¿Cuéntanos sobre tu empresa?
              </label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={4}
                placeholder="A qué os dedicáis, cuántos sois, qué historia queréis contar..."
                className="w-full bg-[#111] border border-[#222] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#65B8DD] transition-colors placeholder:text-[#444] text-sm resize-none"
              />
            </div>

            {status === "err" && (
              <p className="text-red-400 text-sm">
                Ha ocurrido un error. Escríbenos directamente a hola@ideasmakers.com
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#65B8DD] hover:bg-[#A0D5EC] disabled:opacity-50 text-black font-bold rounded-lg px-6 py-4 transition-colors text-sm tracking-wide uppercase"
            >
              {status === "sending" ? "Enviando..." : "Quiero mi serie →"}
            </button>

            <p className="text-[#444] text-xs text-center">
              Sin compromisos. Te respondemos en menos de 24h.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
