import type { LucideIcon } from "lucide-react";

export interface TopicHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TopicHighlightsProps {
  items: TopicHighlight[];
}

export function TopicHighlights({ items }: TopicHighlightsProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
        En este módulo aprenderás
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.title}
              className="flex items-start gap-3 rounded-2xl bg-white/[0.04] border border-white/[0.07] px-5 py-4 transition-colors hover:bg-white/[0.07]"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-600/15 text-purple-400">
                <Icon className="size-4" strokeWidth={1.5} />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-white/90 leading-snug">
                  {item.title}
                </span>
                <span className="text-xs text-white/40 leading-snug">
                  {item.description}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
