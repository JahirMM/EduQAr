import { Link } from "react-router-dom";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import { learn } from "../data/navbar/learn";
import { resources } from "../data/navbar/resources";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] mt-auto">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Link to="/" className="w-fit">
            <img src="/EduQAr_LATAM.png" alt="EduQAr LATAM" className="h-7 w-auto" />
          </Link>
          <p className="text-xs text-white/35 leading-relaxed max-w-[220px]">
            Impulsando la excelencia en pruebas de software para el mercado latinoamericano.
          </p>
        </div>

        {/* Qué aprenderás */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
            Qué aprenderás
          </p>
          <ul className="flex flex-col gap-2">
            {learn.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recursos */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
            Recursos
          </p>
          <ul className="flex flex-col gap-2">
            {resources.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
            Contacto
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="tel:+56984013391"
                className="flex items-center gap-2.5 text-sm text-white/45 hover:text-white transition-colors"
              >
                <PhoneIcon className="size-3.5 text-purple-400 shrink-0" />
                9 8401 3391
              </a>
            </li>
            <li>
              <a
                href="mailto:eduqarlatam@gmail.com"
                className="flex items-center gap-2.5 text-sm text-white/45 hover:text-white transition-colors"
              >
                <MailIcon className="size-3.5 text-purple-400 shrink-0" />
                eduqarlatam@gmail.com
              </a>
            </li>
            <li>
              <span className="flex items-center gap-2.5 text-sm text-white/45">
                <MapPinIcon className="size-3.5 text-purple-400 shrink-0" />
                Santiago de Chile
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-center">
          <p className="text-xs text-white/25">
            Copyright © {year} EduQAr LATAM
          </p>
        </div>
      </div>
    </footer>
  );
}
