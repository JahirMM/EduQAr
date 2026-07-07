export interface LearnItem {
  title: string;
  description: string;
  icon: string;
  url: string;
  badge?: string;
}

export const learns: LearnItem[] = [
  {
    title: "Testing Funcional",
    description:
      "Domina el diseño de casos de prueba, ejecución manual y reporte de bugs bajo estándares internacionales.",
    icon: "ClipboardCheck",
    url: "#",
  },
  {
    title: "API Testing",
    description:
      "Aprende a validar servicios y APIs REST/GraphQL utilizando herramientas líderes como Postman y Bruno.",
    icon: "Braces",
    url: "#",
  },
  {
    title: "Pruebas de Performance",
    description:
      "Evalúa la velocidad, escalabilidad y estabilidad de tus aplicaciones bajo carga extrema usando K6.",
    icon: "Gauge",
    url: "#",
  },
  {
    title: "Automatización",
    description:
      "Desarrolla frameworks de pruebas automatizadas modernos y robustos con Playwright y Cypress.",
    icon: "Cpu",
    url: "#",
  },
  {
    title: "Pentesting",
    description:
      "Identifica vulnerabilidades críticas de seguridad en aplicaciones web para mitigar riesgos y ataques.",
    icon: "Terminal",
    url: "#",
  },
  {
    title: "CI/CD",
    description:
      "Integra suites de pruebas automatizadas en flujos de despliegue continuo con GitHub Actions.",
    icon: "Infinity",
    url: "#",
  },
];
