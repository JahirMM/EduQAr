import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ClipboardCheckIcon,
  NetworkIcon,
  GaugeIcon,
  BotIcon,
  ShieldAlertIcon,
  GitMergeIcon,
} from "lucide-react";
import { NavBar } from "./NavBar";
import { learn } from "../data/navbar/learn";
import { resources } from "../data/navbar/resources";
import type { LucideIcon } from "lucide-react";

const learnIcons: Record<string, LucideIcon> = {
  "Testing Funcional": ClipboardCheckIcon,
  "API Testing": NetworkIcon,
  "Pruebas de Performance": GaugeIcon,
  Automatización: BotIcon,
  Pentesting: ShieldAlertIcon,
  "CI/CD": GitMergeIcon,
};

type AccordionSection = "learn" | "recursos" | null;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<AccordionSection>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleSection = (section: AccordionSection) =>
    setExpanded((prev) => (prev === section ? null : section));

  // Cerrar menú móvil al hacer click fuera del panel móvil
  useEffect(() => {
    if (!mobileOpen) return;
    function handlePointerDown(e: PointerEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [mobileOpen]);

  return (
    <>
      {/* Header fijo */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
        style={{ background: "rgba(8,7,12,0.85)", backdropFilter: "blur(16px)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src="/EduQAr_LATAM.png" alt="EduQAr" className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 rounded-xl border border-white/10 px-2 py-1">
            <NavBar />
          </div>



          {/* Hamburger button (mobile) */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all"
          >
            <span
              className="transition-all duration-300"
              style={{
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)",
                position: mobileOpen ? "absolute" : "relative",
              }}
            >
              <MenuIcon className="size-5" />
            </span>
            <span
              className="transition-all duration-300"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)",
                position: mobileOpen ? "relative" : "absolute",
              }}
            >
              <XIcon className="size-5" />
            </span>
          </button>
        </div>

        {/* Mobile menu — slide down */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: mobileOpen ? "600px" : "0px",
            opacity: mobileOpen ? 1 : 0,
          }}
        >
          <div
            className="border-t border-white/5 px-4 py-4 flex flex-col gap-1"
            style={{ background: "#100E1A" }}
          >
            {/* ¿Qué aprenderás? acordeón */}
            <button
              onClick={() => toggleSection("learn")}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 transition-colors text-left"
            >
              ¿Qué aprenderás?
              <ChevronDownIcon
                className="size-4 text-white/40 transition-transform duration-200"
                style={{ transform: expanded === "learn" ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: expanded === "learn" ? "400px" : "0px" }}
            >
              <ul className="pt-1 pb-2 pl-3 flex flex-col gap-0.5">
                {learn.map((item) => {
                  const Icon = learnIcons[item.title] ?? ClipboardCheckIcon;
                  return (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <Icon className="size-4 text-purple-400 shrink-0" />
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Simuladores */}
            <Link
              to="#"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-colors"
            >
              Simuladores
            </Link>

            {/* Recursos acordeón */}
            <button
              onClick={() => toggleSection("recursos")}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 transition-colors text-left"
            >
              Recursos
              <ChevronDownIcon
                className="size-4 text-white/40 transition-transform duration-200"
                style={{ transform: expanded === "recursos" ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: expanded === "recursos" ? "200px" : "0px" }}
            >
              <ul className="pt-1 pb-2 pl-3 flex flex-col gap-0.5">
                {resources.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <Icon className="size-4 text-purple-400 shrink-0" />
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contacto */}
            <Link
              to="#"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-colors"
            >
              Contacto
            </Link>


          </div>
        </div>
      </header>

      {/* Spacer para que el contenido no quede debajo del header fijo */}
      <div className="h-[60px] md:h-[60px]" />
    </>
  );

}


