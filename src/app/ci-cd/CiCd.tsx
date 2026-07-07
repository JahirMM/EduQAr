import { TopicPageLayout } from "../shared/components/TopicPageLayout";
import { ToolsSection } from "../shared/components/ToolsSection";
import { ciCdData, ciCdSections } from "./data/ciCd";

export function CiCd() {
  return (
    <TopicPageLayout
      title={ciCdData.title}
      description={ciCdData.description}
      wideChildren
    >
      <ToolsSection sections={ciCdSections} />
    </TopicPageLayout>
  );
}
