import { ExternalLinkIcon } from "lucide-react";

export type ToolLevel = "Básico" | "Intermedio" | "Avanzado";

export interface ToolEntry {
  name: string;
  href: string;
  level: ToolLevel;
  category: string;
  action: string;
}

export interface ToolSection {
  title: string;
  tools: ToolEntry[];
}

interface ToolsSectionProps {
  sections: ToolSection[];
  disclaimer?: string;
}

const levelStyles: Record<ToolLevel, string> = {
  Básico: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Intermedio: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Avanzado: "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

export function ToolsSection({ sections, disclaimer }: ToolsSectionProps) {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-4">
          {/* Section header */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 shrink-0">
              {section.title}
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {/* Tools grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {section.tools.map((tool) => (
              <li key={tool.name}>
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.06] px-4 py-3.5 hover:bg-white/[0.07] hover:border-purple-500/25 transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-white/90 truncate">
                      {tool.name}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-white/35 group-hover:text-purple-400 shrink-0 transition-colors">
                      {tool.action}
                      <ExternalLinkIcon className="size-3" />
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${levelStyles[tool.level]}`}
                    >
                      {tool.level}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 text-[10px] font-medium text-purple-400">
                      {tool.category}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {disclaimer && (
        <p className="text-[11px] text-white/25 leading-relaxed border-t border-white/[0.06] pt-6 italic">
          {disclaimer}
        </p>
      )}
    </div>
  );
}
