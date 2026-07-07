import { Link } from "react-router-dom";
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
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-1 text-white">
        {/* ¿Qué aprenderás? */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>¿Qué aprenderás?</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[520px] p-4" style={{ background: "#100E1A" }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 px-1">
                Áreas de aprendizaje
              </p>
              <ul className="grid grid-cols-2 gap-1">
                {learn.map((item) => {
                  const Icon = learnIcons[item.title] ?? ClipboardCheckIcon;
                  return (
                    <li key={item.title}>
                      <NavigationMenuLink
                        render={
                          <Link
                            to={item.href}
                            className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
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
                          </Link>
                        }
                      />
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
            render={<Link to="#">Simuladores</Link>}
          />
        </NavigationMenuItem>

        {/* Recursos */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[220px] p-3" style={{ background: "#100E1A" }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2 px-1">
                Recursos
              </p>
              <ul className="flex flex-col gap-0.5">
                {resources.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <NavigationMenuLink
                        render={
                          <Link
                            to={item.href}
                            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white transition-colors"
                          >
                            <Icon className="size-4 text-purple-400 shrink-0" />
                            {item.title}
                          </Link>
                        }
                      />
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
            render={<Link to="#">Contacto</Link>}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
