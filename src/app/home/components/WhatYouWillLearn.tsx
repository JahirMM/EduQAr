import { Link } from "react-router-dom";
import { learns } from "../data/learns";
import {
  ClipboardCheck,
  Braces,
  Gauge,
  Cpu,
  Terminal,
  Infinity as InfinityIcon,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardCheck,
  Braces,
  Gauge,
  Cpu,
  Terminal,
  Infinity: InfinityIcon,
};

export function WhatYouWillLearn() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-48 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7c3aed, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            ¿Qué aprenderás en{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              EduQAr LATAM
            </span>
            ?
          </h2>
          <p className="text-sm sm:text-base text-white/45 leading-relaxed">
            Formación práctica y especializada para convertirte en el
            profesional de Aseguramiento de Calidad que las empresas
            tecnológicas buscan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learns.map((learn) => {
            const IconComponent = iconMap[learn.icon] || ClipboardCheck;
            return (
              <div
                key={learn.title}
                className="neon-card group flex flex-col p-6 h-full justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/5 border border-purple-500/10 text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {learn.badge && (
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-purple-950/40 text-purple-300/80 border border-purple-800/30">
                        {learn.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 tracking-tight group-hover:text-purple-300 transition-colors">
                    {learn.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light mb-6">
                    {learn.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to={learn.url}
                    className="inline-flex items-center gap-1 text-xs text-white/30 group-hover:text-purple-300 transition-colors font-medium"
                  >
                    Ver
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
