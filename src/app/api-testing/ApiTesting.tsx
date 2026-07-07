import { TopicPageLayout } from "../shared/components/TopicPageLayout";
import { apiTestingData } from "./data/apiTesting";

export function ApiTesting() {
  return (
    <TopicPageLayout
      title={apiTestingData.title}
      description={apiTestingData.description}
      cta={apiTestingData.cta}
    />
  );
}
