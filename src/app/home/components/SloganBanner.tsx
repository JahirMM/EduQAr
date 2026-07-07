import { Shield } from "lucide-react";

export function SloganBanner() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Fondo difuminado sutil */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full opacity-[0.07] blur-3xl"
        style={{
          background: "radial-gradient(ellipse, #7c3aed, transparent 65%)",
        }}
      />

      <div className="flex justify-center">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          {/* Línea 1: "Un mundo" */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 leading-none mb-3">
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter">
              Un mundo
            </span>
          </div>

          {/* Línea 2: "con proyectos" */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 leading-none mb-3">
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white/20 tracking-tighter italic">
              con
            </span>
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              proyectos
            </span>
          </div>

          {/* Línea 3: icono + "bien"*/}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 leading-none mb-3">
            <Shield
              className="text-purple-500/60 shrink-0"
              style={{
                width: "clamp(2.5rem, 5vw, 5rem)",
                height: "clamp(2.5rem, 5vw, 5rem)",
              }}
              strokeWidth={1.5}
            />
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter">
              bien
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 leading-none">
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white/80">
              probados.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
