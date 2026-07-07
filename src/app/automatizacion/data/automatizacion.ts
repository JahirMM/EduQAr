import type { ToolSection } from "../../shared/components/ToolsSection";

export const automatizacionData = {
  title: "Automatización",
  description:
    "Explora y practica automatización E2E, APIs y reporting utilizando estas herramientas. Todos los enlaces se abrirán en una pestaña nueva.",
} as const;

export const automatizacionSections: ToolSection[] = [
  {
    title: "Automatización web y E2E",
    tools: [
      { name: "Playwright", href: "https://playwright.dev", level: "Intermedio", category: "E2E Web", action: "Abrir" },
      { name: "Cypress", href: "https://www.cypress.io", level: "Intermedio", category: "E2E Web", action: "Abrir" },
      { name: "Selenium", href: "https://www.selenium.dev", level: "Avanzado", category: "E2E Web", action: "Abrir" },
      { name: "WebdriverIO", href: "https://webdriver.io", level: "Intermedio", category: "E2E Web", action: "Abrir" },
      { name: "TestCafe", href: "https://testcafe.io", level: "Básico", category: "E2E Web", action: "Abrir" },
      { name: "Cucumber", href: "https://cucumber.io", level: "Básico", category: "BDD", action: "Abrir" },
    ],
  },
  {
    title: "Frameworks para automatización y contratos de APIs",
    tools: [
      { name: "Karate", href: "https://karatelabs.github.io/karate", level: "Intermedio", category: "API/Contratos", action: "Abrir" },
      { name: "REST Assured", href: "https://rest-assured.io", level: "Avanzado", category: "API/Contratos", action: "Abrir" },
      { name: "Pact", href: "https://pact.io", level: "Avanzado", category: "API/Contratos", action: "Abrir" },
      { name: "Newman", href: "https://github.com/postmanlabs/newman", level: "Básico", category: "API/Contratos", action: "Abrir" },
      { name: "WireMock", href: "https://wiremock.org", level: "Intermedio", category: "Mocking", action: "Abrir" },
    ],
  },
  {
    title: "Automatización móvil",
    tools: [
      { name: "Appium", href: "https://appium.io", level: "Intermedio", category: "Móvil", action: "Abrir" },
      { name: "Detox", href: "https://wix.github.io/Detox", level: "Intermedio", category: "Móvil", action: "Abrir" },
      { name: "Espresso", href: "https://developer.android.com/training/testing/espresso", level: "Intermedio", category: "Móvil", action: "Abrir" },
    ],
  },
  {
    title: "Reportería e integración CI/CD",
    tools: [
      { name: "Allure Report", href: "https://allurereport.org", level: "Intermedio", category: "Reporting", action: "Abrir" },
      { name: "ReportPortal", href: "https://reportportal.io", level: "Avanzado", category: "Reporting", action: "Abrir" },
      { name: "GitHub Actions", href: "https://github.com/features/actions", level: "Intermedio", category: "CI", action: "Abrir" },
    ],
  },
];
