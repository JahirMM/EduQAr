import {
  BookOpenIcon,
  FlaskConicalIcon,
  BookMarkedIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Resource = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const resources: Resource[] = [
  {
    title: "Simulador CTFL 4.0",
    href: "#",
    icon: FlaskConicalIcon,
  },
  {
    title: "Syllabus Oficial CTFL 4.0",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    title: "Glosario ISTQB",
    href: "#",
    icon: BookMarkedIcon,
  },
];

