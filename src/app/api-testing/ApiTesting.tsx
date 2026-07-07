import { TopicPageLayout } from "../shared/components/TopicPageLayout";
import { ToolsSection } from "../shared/components/ToolsSection";
import { apiTestingData, apiTestingSections } from "./data/apiTesting";

export function ApiTesting() {
  return (
    <TopicPageLayout
      title={apiTestingData.title}
      description={apiTestingData.description}
      wideChildren
    >
      <ToolsSection sections={apiTestingSections} />
    </TopicPageLayout>
  );
}
