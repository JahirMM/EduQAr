import { Phone, Mail, MapPin } from "lucide-react";

const contactItems = [
  { icon: Phone, label: "Teléfono", value: "9 8401 3391" },
  { icon: Mail, label: "Email", value: "eduqarlatam@gmail.com" },
  { icon: MapPin, label: "Ubicación", value: "Santiago de Chile" },
];

export function ContactUs() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full opacity-[0.06] blur-3xl"
        style={{
          background: "radial-gradient(ellipse, #7c3aed, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-400/60 font-medium mb-4">
            Contáctanos
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-none">
            Hablemos
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              de QA.
            </span>
          </h2>
        </div>

        {/* ── Pill/Cápsula grande de contacto ── */}
        <div className="relative rounded-[2rem] border border-white/[0.08] overflow-hidden">
          {/* Fondo de la cápsula */}
          <div className="absolute inset-0 bg-white/[0.015]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, #3b0764 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            {/* Datos de contacto */}
            <div className="flex flex-col gap-6">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/15 text-purple-400 flex-shrink-0">
                    <Icon className="w-4.5 h-4.5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/25 mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-white/80">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divisor vertical */}
            <div className="hidden md:block w-px self-stretch bg-white/[0.06]" />

            {/* Tagline lateral */}
            <div className="md:max-w-xs lg:max-w-sm">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90 leading-tight">
                Mejorando la{" "}
                <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                  calidad
                </span>
                <br />
                del software
                <br />
                <span className="text-white/40 font-light">en LATAM</span>
              </p>

              {/* Puntos decorativos estilo paginación */}
              <div className="flex gap-1.5 mt-6">
                <span className="w-6 h-1.5 rounded-full bg-purple-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
