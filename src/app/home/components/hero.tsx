import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden min-h-[calc(100vh-60px)]">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl bg-[radial-gradient(circle,#7c3aed,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl bg-[radial-gradient(circle,#a855f7,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-2xl mx-auto">
        {/* Headline */}
        <h1 className="font-bold text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] tracking-tight text-white">
          EduQAr LATAM: Potenciando profesionales{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            en el área QA
          </span>
        </h1>

        {/* Subline */}
        <p className="text-[0.95rem] text-white/45 leading-[1.7] max-w-[480px]">
          Aprende Testing Funcional, API Testing, Performance, Automatización,
          Pentesting y CI/CD. Contenido práctico, directo y enfocado en el
          mercado latinoamericano.
        </p>

        {/* CTA */}
        <Link
          to="#"
          className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-500 transition-colors"
        >
          Explorar cursos
          <ArrowRightIcon className="size-4" />
        </Link>

        {/* Quote */}
        <p className="text-xs text-white/25 italic mt-2">
          "Impulsando la excelencia en pruebas de software" — Diego Delgado
        </p>
      </div>
    </section>
  );
}
