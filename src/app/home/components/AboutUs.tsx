import { ArrowRight } from "lucide-react";

export function AboutUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[400px] w-[500px] rounded-full opacity-[0.06] blur-3xl"
        style={{
          background: "radial-gradient(ellipse, #6d28d9, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="w-full border-t border-white/[0.06] mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-purple-400/70 font-medium">
                Sobre nosotros
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                ¿Quiénes somos?
              </h2>
            </div>

            {/* Frase destacada */}
            <p className="text-base text-white/55 leading-relaxed border-l-2 border-purple-500/30 pl-4">
              Un espacio de aprendizaje, colaboración y crecimiento en el área
              QA.
            </p>

            {/* Lema en grande */}
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white/90 leading-tight">
              Impulsando la{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                calidad de software
              </span>
              <br />
              en LATAM.
            </p>

            {/* Descripción larga */}
            <p className="text-sm text-white/40 leading-relaxed max-w-lg">
              En EduQAr LATAM somos una comunidad comprometida con la formación
              y el desarrollo en el área QA. Reunimos a profesionales,
              estudiantes y entusiastas del testing para intercambiar
              conocimientos, experiencias y recursos, con el propósito de
              impulsar el crecimiento de la disciplina y consolidar las mejores
              prácticas de calidad de software en Latinoamérica.
            </p>
          </div>

          {/* ── Columna derecha: Imágenes apiladas ── */}
          <div className="relative flex items-center justify-center h-72 sm:h-96 lg:h-[420px]">
            {/* Tarjeta de fondo (rotada) */}
            <div
              className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
              style={{
                transform: "rotate(6deg) translateY(10px)",
                backdropFilter: "blur(4px)",
              }}
            />
            {/* Tarjeta principal con el logo */}
            <div
              className="relative w-3/4 h-3/4 rounded-2xl overflow-hidden border border-white/[0.10] bg-[#0f0c1a] shadow-2xl flex items-center justify-center"
              style={{ transform: "rotate(-2deg)" }}
            >
              {/* Brillo interno */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 40%, #4c1d95 0%, transparent 65%)",
                }}
              />
              <img
                src="/EduQAr_LATAM.png"
                alt="EduQAr LATAM"
                className="relative z-10 w-2/3 h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Borde inferior decorativo */}
        <div className="w-full border-b border-white/[0.06] mt-16" />
      </div>
    </section>
  );
}
