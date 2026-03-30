import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="bg-[#080808] text-[#F0EDE8] overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between"
           style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.95) 0%, transparent 100%)" }}>
        <span className="text-white font-black text-lg tracking-widest uppercase">
          IDEAS<span className="text-[#E8A020]">MAKERS</span>
        </span>
        <a
          href="#contacto"
          className="text-xs font-bold uppercase tracking-widest border border-[#E8A020] text-[#E8A020] hover:bg-[#E8A020] hover:text-black px-4 py-2 transition-colors rounded"
        >
          Empieza tu serie
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Fondo con brillo suave */}
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="absolute inset-0"
             style={{ background: "radial-gradient(ellipse at center, rgba(232,160,32,0.06) 0%, transparent 70%)" }} />

        {/* Bordes laterales cinematográficos */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E8A020]/20 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E8A020]/20 to-transparent" />

        {/* Sprockets de película */}
        <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-around pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-2 h-3 bg-[#E8A020]/10 rounded-sm" />
          ))}
        </div>
        <div className="absolute right-3 top-0 bottom-0 flex flex-col justify-around pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-2 h-3 bg-[#E8A020]/10 rounded-sm" />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-up">
            <div className="w-6 h-px bg-[#E8A020]" />
            <span className="text-[#E8A020] text-xs font-bold uppercase tracking-[0.3em]">
              El documental de tu empresa
            </span>
            <div className="w-6 h-px bg-[#E8A020]" />
          </div>

          {/* Slogan principal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8 animate-fade-up-delay">
            <span className="text-white">No hay serie de</span>{" "}
            <span className="text-[#E8A020]">Netflix</span>
            <br />
            <span className="text-white">que supere la épica</span>
            <br />
            <span className="text-white">de tu trabajo</span>{" "}
            <span className="italic font-light text-[#888]">cada día.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-12 animate-fade-up-delay-2 leading-relaxed">
            Filmamos el día a día de tu empresa y lo convertimos en una serie
            que inspira, motiva y une a tu equipo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
            <a
              href="#contacto"
              className="inline-block bg-[#E8A020] hover:bg-[#F5C55A] text-black font-bold px-8 py-4 rounded transition-colors text-sm uppercase tracking-widest pulse-amber"
            >
              Quiero mi serie →
            </a>
            <a
              href="#como-funciona"
              className="inline-block border border-[#333] hover:border-[#E8A020] text-[#888] hover:text-white px-8 py-4 rounded transition-colors text-sm uppercase tracking-widest"
            >
              Cómo funciona
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444] text-xs">
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#444] to-transparent" />
        </div>
      </section>

      {/* ── CONCEPTO ── */}
      <section className="py-24 px-6 border-t border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-line mb-6 block" />
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Tu empresa ya tiene<br />
                <span className="text-[#E8A020]">la mejor historia.</span><br />
                Solo falta contarla.
              </h2>
              <p className="text-[#888] text-lg leading-relaxed mb-6">
                Cada empresa tiene momentos que merecen ser vistos: el reto del lanzamiento,
                el equipo que no se rinde, la celebración inesperada, el cliente que cambia
                todo. Eso es contenido real. Eso engancha.
              </p>
              <p className="text-[#888] text-lg leading-relaxed">
                Lo filmamos. Lo producimos. Lo convertimos en tu serie interna —
                el contenido que tus empleados querrán ver.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "87%", label: "de empleados más comprometidos en empresas con narrativa interna" },
                { num: "3×", label: "más retención de talento en culturas donde el equipo se siente protagonista" },
                { num: "100%", label: "real. Sin actores. Sin guion. Solo tu historia." },
                { num: "∞", label: "episodios posibles. Tu empresa nunca para de crear contenido." },
              ].map((stat) => (
                <div key={stat.num} className="bg-[#111] border border-[#1a1a1a] rounded-lg p-5">
                  <div className="text-3xl font-black text-[#E8A020] mb-2">{stat.num}</div>
                  <p className="text-xs text-[#888] leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section id="como-funciona" className="py-24 px-6 bg-[#0a0a0a] border-t border-[#111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="gold-line mb-6 block mx-auto" />
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Así de sencillo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Filmamos",
                desc: "Venimos a tu empresa con nuestro equipo de filmación. Captamos lo que pasa de verdad: reuniones, proyectos, personas, momentos. Sin interrumpir. Sin guion.",
                icon: "🎥",
              },
              {
                step: "02",
                title: "Producimos",
                desc: "Editamos, montamos y añadimos música y efectos cinematográficos. El resultado: episodios de entre 5 y 20 minutos con calidad de producción profesional.",
                icon: "✂️",
              },
              {
                step: "03",
                title: "Distribuís",
                desc: "Recibís los episodios listos para compartir internamente: en reuniones, canales internos, o en vuestra propia plataforma. El impacto se mide desde el primer visionado.",
                icon: "📺",
              },
            ].map((item, idx) => (
              <div key={item.step} className="relative">
                <div className="bg-[#111] border border-[#1a1a1a] rounded-lg p-8 h-full">
                  <div className="text-xs font-black text-[#E8A020] tracking-[0.3em] mb-4">
                    {item.step}
                  </div>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-[#333] text-2xl z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO EJEMPLO ── */}
      <section className="py-24 px-6 border-t border-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="gold-line mb-6 block mx-auto" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Así suena<br />
              <span className="text-[#E8A020]">la épica real</span>
            </h2>
            <p className="text-[#888] text-lg">
              Un ejemplo de lo que puede ser la serie de tu empresa.
            </p>
          </div>

          <div className="relative w-full rounded-lg overflow-hidden border border-[#1a1a1a]" style={{ aspectRatio: "16/9" }}>
            <iframe
              src="https://www.youtube.com/embed/LXb3EKWsInQ?rel=0&modestbranding=1&color=white"
              title="Ejemplo — La serie de tu empresa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-center text-[#444] text-xs mt-4">
            Vídeo de ejemplo. Tu serie será única para tu empresa.
          </p>
        </div>
      </section>

      {/* ── POR QUÉ FUNCIONA ── */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-[#111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="gold-line mb-6 block mx-auto" />
            <h2 className="text-4xl md:text-5xl font-black text-white">
              El efecto<br />
              <span className="text-[#E8A020]">serie</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "❤️",
                title: "Sentido de pertenencia",
                desc: "Cuando los empleados se ven en pantalla como protagonistas de algo grande, su conexión con la empresa cambia para siempre.",
              },
              {
                icon: "🔥",
                title: "Motivación real",
                desc: "No hay speech de empresa que motive más que ver a tus compañeros superar un reto real filmado con calidad cinematográfica.",
              },
              {
                icon: "🏆",
                title: "Orgullo de equipo",
                desc: "Compartir los episodios se convierte en un ritual. Cada estreno genera conversación, recuerdo y cultura.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-white mb-4">{item.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="py-24 px-6 border-t border-[#111]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-line mb-6 block" />
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Al alcance de<br />
                <span className="text-[#E8A020]">toda empresa</span>
              </h2>
              <p className="text-[#888] text-lg leading-relaxed mb-8">
                No hace falta ser una multinacional. La épica existe en cualquier empresa
                que tenga personas haciendo algo que importa. Startups, pymes, talleres,
                consultas, despachos, tiendas, obras, cocinas.
              </p>
              <p className="text-white font-bold text-lg">
                Si tu empresa existe, tiene una historia que contar.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Startups en pleno crecimiento",
                "Pymes con historia y con futuro",
                "Equipos de proyecto con un reto concreto",
                "Empresas en transformación",
                "Negocios familiares con alma",
                "Cualquier empresa que cuide a su gente",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 bg-[#111] border border-[#1a1a1a] rounded-lg px-5 py-4">
                  <div className="w-5 h-5 rounded-full bg-[#E8A020]/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#E8A020]" />
                  </div>
                  <span className="text-[#F0EDE8] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-24 px-6 bg-[#E8A020]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
            &ldquo;No hay serie de Netflix que supere la épica de tu trabajo cada día.&rdquo;
          </p>
          <p className="mt-8 text-black/60 font-medium tracking-widest uppercase text-sm">
            — Ideasmakers
          </p>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <ContactForm />

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#111] px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-black tracking-widest uppercase text-sm">
            IDEAS<span className="text-[#E8A020]">MAKERS</span>
          </span>
          <p className="text-[#444] text-xs text-center">
            © {new Date().getFullYear()} Ideasmakers. Todos los derechos reservados.
          </p>
          <a href="mailto:hola@ideasmakers.com" className="text-[#444] hover:text-[#E8A020] text-xs transition-colors">
            hola@ideasmakers.com
          </a>
        </div>
      </footer>

    </main>
  );
}
