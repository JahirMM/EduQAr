import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

interface TopicCta {
  label: string;
  href: string;
  note?: string;
}

interface TopicPageLayoutProps {
  title: string;
  description: string;
  cta?: TopicCta;
  children?: ReactNode;
  wideChildren?: boolean;
}

export function TopicPageLayout({
  title,
  description,
  cta,
  children,
  wideChildren = false,
}: TopicPageLayoutProps) {
  const { displayed, done } = useTypewriter(title);

  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      {/* Ambient blob */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[480px] w-[600px] rounded-full opacity-10 blur-3xl bg-[radial-gradient(circle,#7c3aed,transparent_70%)]" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center gap-5 px-6 pt-20 pb-12 max-w-2xl mx-auto w-full">
        <h1 className="font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.1] tracking-tight text-white min-h-[1.2em]">
          {displayed}
          <span
            className={`inline-block w-[3px] h-[0.85em] bg-purple-500 ml-1 align-middle rounded-sm ${
              done ? "animate-pulse" : "opacity-100"
            }`}
          />
        </h1>

        <p className="text-sm text-white/45 leading-relaxed max-w-lg">
          {description}
        </p>

        {cta && (
          <div className="flex flex-col items-center gap-2 mt-1">
            <Link
              to={cta.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white hover:border-purple-500/40 transition-all duration-200"
            >
              {cta.label}
              <ArrowRightIcon className="size-3.5" />
            </Link>
            {cta.note && (
              <span className="text-xs text-white/25">{cta.note}</span>
            )}
          </div>
        )}
      </section>

      {children && (
        <div
          className={`relative z-10 w-full mx-auto px-6 pb-20 ${
            wideChildren ? "max-w-5xl" : "max-w-2xl"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
