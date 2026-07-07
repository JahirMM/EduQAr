import { useState, type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  ClipboardCheckIcon,
  NetworkIcon,
  GaugeIcon,
  BotIcon,
  ShieldAlertIcon,
  GitMergeIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { learn } from "../data/navbar/learn";
import { resources } from "../data/navbar/resources";

const learnIcons: Record<string, LucideIcon> = {
  "Testing Funcional": ClipboardCheckIcon,
  "API Testing": NetworkIcon,
  "Pruebas de Performance": GaugeIcon,
  Automatización: BotIcon,
  Pentesting: ShieldAlertIcon,
  "CI/CD": GitMergeIcon,
};

export function NavBar() {
  const navigate = useNavigate();
  // Controla qué menú está abierto; string vacío = todos cerrados
  const [openMenu, setOpenMenu] = useState<string>("");

  function handleNavClick(href: string, event?: MouseEvent<HTMLButtonElement>) {
    event?.currentTarget.blur();
    setOpenMenu(""); // cierra el dropdown
    navigate(href);
  }

  return (
    <NavigationMenu
      value={openMenu}
      onValueChange={setOpenMenu}
    >
      <NavigationMenuList className="space-x-1 text-white">
        {/* ¿Qué aprenderás? */}
        <NavigationMenuItem value="learn">
          <NavigationMenuTrigger>¿Qué aprenderás?</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[520px] p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 px-1">
                Áreas de aprendizaje
              </p>
              <ul className="grid grid-cols-2 gap-1">
                {learn.map((item) => {
                  const Icon = learnIcons[item.title] ?? ClipboardCheckIcon;
                  return (
                    <li key={item.title}>
                      <button
                        onClick={(event) => handleNavClick(item.href, event)}
                        className="group flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-white/5"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-purple-600/15 text-purple-400 group-hover:bg-purple-600/25 transition-colors">
                          <Icon className="size-3.5" />
                        </span>
                        <div>
                          <div className="text-sm font-medium text-white/90 leading-snug">
                            {item.title}
                          </div>
                          <div className="text-xs text-white/40 mt-0.5 leading-snug">
                            {item.description}
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Simuladores */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => handleNavClick("#")}
            style={{ cursor: "pointer" }}
          >
            Simuladores
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Recursos */}
        <NavigationMenuItem value="recursos">
          <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[220px] p-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2 px-1">
                Recursos
              </p>
              <ul className="flex flex-col gap-0.5">
                {resources.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <button
                        onClick={(event) => handleNavClick(item.href, event)}
                        className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        <Icon className="size-4 text-purple-400 shrink-0" />
                        {item.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Contacto */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => handleNavClick("#")}
            style={{ cursor: "pointer" }}
          >
            Contacto
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
