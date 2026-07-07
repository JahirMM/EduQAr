import { TopicPageLayout } from "../shared/components/TopicPageLayout";
import { ciCdData } from "./data/ciCd";

export function CiCd() {
  return (
    <TopicPageLayout
      title={ciCdData.title}
      description={ciCdData.description}
      cta={ciCdData.cta}
    />
  );
}
