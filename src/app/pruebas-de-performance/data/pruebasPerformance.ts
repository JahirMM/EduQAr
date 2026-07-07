import type { ToolSection } from "../../shared/components/ToolsSection";

export const pruebasPerformanceData = {
  title: "Pruebas de Performance",
  description:
    "Explora y practica pruebas de performance y observabilidad mediante el uso de estas herramientas. Todos los enlaces se abrirán en una pestaña nueva.",
} as const;

export const pruebasPerformanceSections: ToolSection[] = [
  {
    title: "Herramientas de pruebas de performance",
    tools: [
      { name: "Apache JMeter", href: "https://jmeter.apache.org", level: "Intermedio", category: "Carga", action: "Probar" },
      { name: "k6", href: "https://k6.io", level: "Intermedio", category: "Carga", action: "Probar" },
      { name: "Gatling", href: "https://gatling.io", level: "Avanzado", category: "Carga", action: "Probar" },
      { name: "Locust", href: "https://locust.io", level: "Intermedio", category: "Carga", action: "Probar" },
      { name: "Artillery", href: "https://www.artillery.io", level: "Intermedio", category: "Carga", action: "Probar" },
      { name: "Vegeta", href: "https://github.com/tsenart/vegeta", level: "Intermedio", category: "Carga", action: "Probar" },
    ],
  },
  {
    title: "Herramientas de observabilidad y visualización de métricas",
    tools: [
      { name: "Lighthouse", href: "https://developer.chrome.com/docs/lighthouse", level: "Básico", category: "Web Perf", action: "Abrir" },
      { name: "Core Web Vitals", href: "https://web.dev/vitals", level: "Básico", category: "Web Perf", action: "Abrir" },
      { name: "WebPageTest", href: "https://www.webpagetest.org", level: "Intermedio", category: "Web Perf", action: "Abrir" },
      { name: "Prometheus", href: "https://prometheus.io", level: "Avanzado", category: "Observabilidad", action: "Abrir" },
      { name: "Grafana", href: "https://grafana.com", level: "Intermedio", category: "Observabilidad", action: "Abrir" },
      { name: "Sentry", href: "https://sentry.io", level: "Intermedio", category: "Observabilidad", action: "Abrir" },
    ],
  },
];
