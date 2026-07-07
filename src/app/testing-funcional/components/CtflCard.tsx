import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

interface CtflButton {
  label: string;
  href: string;
  primary: boolean;
}

interface CtflCardProps {
  title: string;
  description: string;
  buttons: readonly CtflButton[];
}

export function CtflCard({ title, description, buttons }: CtflCardProps) {
  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-8 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-semibold text-white leading-snug">
          {title}
        </h2>
        <p className="text-sm text-white/45 leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {buttons.map((btn) =>
          btn.primary ? (
            <Link
              key={btn.label}
              to={btn.href}
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500 transition-colors"
            >
              {btn.label}
              <ArrowRightIcon className="size-3.5" />
            </Link>
          ) : (
            <Link
              key={btn.label}
              to={btn.href}
              className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-purple-400 transition-colors"
            >
              <ArrowRightIcon className="size-3" />
              {btn.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
