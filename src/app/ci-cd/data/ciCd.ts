import type { ToolSection } from "../../shared/components/ToolsSection";

export const ciCdData = {
  title: "CI/CD",
  description:
    "Explora herramientas de CI/CD, calidad de software y seguridad. Todos los enlaces se abrirán en una pestaña nueva.",
} as const;

export const ciCdSections: ToolSection[] = [
  {
    title: "CI/CD, GitOps y orquestación",
    tools: [
      { name: "GitHub Actions", href: "https://github.com/features/actions", level: "Intermedio", category: "CI/CD", action: "Abrir" },
      { name: "GitLab CI", href: "https://about.gitlab.com/solutions/continuous-integration", level: "Intermedio", category: "CI/CD", action: "Abrir" },
      { name: "Jenkins", href: "https://www.jenkins.io", level: "Intermedio", category: "CI/CD", action: "Abrir" },
      { name: "Azure Pipelines", href: "https://azure.microsoft.com/en-us/products/devops/pipelines", level: "Intermedio", category: "CI/CD", action: "Abrir" },
      { name: "CircleCI", href: "https://circleci.com", level: "Básico", category: "CI/CD", action: "Abrir" },
      { name: "Argo CD", href: "https://argoproj.github.io/cd", level: "Avanzado", category: "GitOps", action: "Abrir" },
      { name: "Flux", href: "https://fluxcd.io", level: "Avanzado", category: "GitOps", action: "Abrir" },
      { name: "Helm", href: "https://helm.sh", level: "Intermedio", category: "Kubernetes", action: "Abrir" },
    ],
  },
  {
    title: "Calidad de código y seguridad",
    tools: [
      { name: "SonarQube", href: "https://www.sonarsource.com/products/sonarqube", level: "Intermedio", category: "Calidad", action: "Abrir" },
      { name: "Semgrep", href: "https://semgrep.dev", level: "Básico", category: "Seguridad", action: "Abrir" },
      { name: "OWASP Dependency-Check", href: "https://owasp.org/www-project-dependency-check", level: "Básico", category: "Seguridad", action: "Abrir" },
      { name: "Snyk", href: "https://snyk.io", level: "Intermedio", category: "Seguridad", action: "Abrir" },
      { name: "Trivy", href: "https://trivy.dev", level: "Intermedio", category: "Seguridad", action: "Abrir" },
    ],
  },
];
