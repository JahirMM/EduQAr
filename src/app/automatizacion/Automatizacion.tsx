import { TopicPageLayout } from "../shared/components/TopicPageLayout";
import { ToolsSection } from "../shared/components/ToolsSection";
import { automatizacionData, automatizacionSections } from "./data/automatizacion";

export function Automatizacion() {
  return (
    <TopicPageLayout
      title={automatizacionData.title}
      description={automatizacionData.description}
      wideChildren
    >
      <ToolsSection sections={automatizacionSections} />
    </TopicPageLayout>
  );
}
