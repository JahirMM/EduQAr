import { TopicPageLayout } from "../shared/components/TopicPageLayout";
import { automatizacionData } from "./data/automatizacion";

export function Automatizacion() {
  return (
    <TopicPageLayout
      title={automatizacionData.title}
      description={automatizacionData.description}
      cta={automatizacionData.cta}
    />
  );
}
