import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-60px)] flex items-center overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7c3aed, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #a855f7, transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: copy ── */}
        <div className="flex flex-col gap-6">
          {/* Badge pill */}
          <div className="inline-flex w-fit items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse" />
            <span className="text-xs font-medium text-purple-300">
              EduQAr LATAM · Nueva comunidad QA
            </span>
            <ArrowRightIcon className="size-3 text-purple-400" />
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white">
              SQCorE:
              <br />
              <span className="text-white/40">Núcleo de Excelencia</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                en Calidad de Software
              </span>
            </h1>
          </div>

          {/* Accent line */}
          <p className="text-base text-purple-400 font-medium">
            Impulsando la excelencia en pruebas de software.
          </p>

          {/* Description */}
          <p className="text-sm text-white/45 leading-relaxed max-w-md">
            Aprende Testing Funcional, API Testing, Performance, Automatización,
            Pentesting y CI/CD. Contenido práctico, directo y enfocado en el
            mercado latinoamericano.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              to="#"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-500 transition-colors"
            >
              Explorar cursos
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>

          {/* Quote */}
          <blockquote className="mt-2 border-l-2 border-purple-500/40 pl-4">
            <p className="text-xs text-white/35 italic leading-relaxed">
              "Impulsando la excelencia en pruebas de software"
            </p>
            <footer className="text-xs text-white/25 mt-1">
              — Diego Delgado
            </footer>
          </blockquote>
        </div>

        <div className="hidden lg:flex relative h-[480px] items-center justify-center">
          img
        </div>
      </div>
    </section>
  );
}
