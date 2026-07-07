import type { ToolSection } from "../../shared/components/ToolsSection";

export const apiTestingData = {
  title: "API Testing",
  description:
    "Explora y practica pruebas de APIs utilizando las siguientes herramientas y sandboxes. Todos los enlaces se abrirán en una pestaña nueva.",
} as const;

export const apiTestingSections: ToolSection[] = [
  {
    title: "Herramientas clientes para pruebas de APIs",
    tools: [
      { name: "Postman", href: "https://www.postman.com", level: "Intermedio", category: "Cliente", action: "Ir" },
      { name: "Hoppscotch", href: "https://hoppscotch.io", level: "Básico", category: "Cliente", action: "Ir" },
      { name: "Insomnia", href: "https://insomnia.rest", level: "Intermedio", category: "Cliente", action: "Ir" },
      { name: "ReqBin", href: "https://reqbin.com", level: "Básico", category: "Cliente", action: "Ir" },
      { name: "SoapUI", href: "https://www.soapui.org", level: "Avanzado", category: "Cliente", action: "Ir" },
    ],
  },
  {
    title: "Diseño, documentación y pruebas de APIs",
    tools: [
      { name: "Swagger Editor", href: "https://editor.swagger.io", level: "Intermedio", category: "Contrato", action: "Ver guía" },
    ],
  },
  {
    title: "Sandboxes y pruebas de APIs",
    tools: [
      { name: "HTTPBin", href: "https://httpbin.org", level: "Básico", category: "Sandbox", action: "Probar" },
      { name: "JSONPlaceholder", href: "https://jsonplaceholder.typicode.com", level: "Básico", category: "Sandbox", action: "Probar" },
      { name: "DummyJSON", href: "https://dummyjson.com", level: "Intermedio", category: "Sandbox", action: "Probar" },
      { name: "ReqRes", href: "https://reqres.in", level: "Intermedio", category: "Sandbox", action: "Probar" },
    ],
  },
];
