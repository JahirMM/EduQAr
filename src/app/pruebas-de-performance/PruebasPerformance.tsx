import { TopicPageLayout } from "../shared/components/TopicPageLayout";
import { pruebasPerformanceData } from "./data/pruebasPerformance";

export function PruebasPerformance() {
  return (
    <TopicPageLayout
      title={pruebasPerformanceData.title}
      description={pruebasPerformanceData.description}
      cta={pruebasPerformanceData.cta}
    />
  );
}
