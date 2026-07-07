import { TopicPageLayout } from "../shared/components/TopicPageLayout";
import { CtflCard } from "./components/CtflCard";
import { testingFuncionalData } from "./data/testingFuncional";

export function TestingFuncional() {
  const { title, description, cta, ctfl } = testingFuncionalData;

  return (
    <TopicPageLayout title={title} description={description} cta={cta}>
      <CtflCard
        title={ctfl.title}
        description={ctfl.description}
        buttons={ctfl.buttons}
      />
    </TopicPageLayout>
  );
}
