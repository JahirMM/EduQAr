import { TopicPageLayout } from "../shared/components/TopicPageLayout";
import { ToolsSection } from "../shared/components/ToolsSection";
import { pruebasPerformanceData, pruebasPerformanceSections } from "./data/pruebasPerformance";

export function PruebasPerformance() {
  return (
    <TopicPageLayout
      title={pruebasPerformanceData.title}
      description={pruebasPerformanceData.description}
      wideChildren
    >
      <ToolsSection sections={pruebasPerformanceSections} />
    </TopicPageLayout>
  );
}
