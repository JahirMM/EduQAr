import { Hero } from "./components/Hero";
import { WhatYouWillLearn } from "./components/WhatYouWillLearn";
import { SloganBanner } from "./components/SloganBanner";

export function Home() {
  return (
    <main>
      <Hero />
      <WhatYouWillLearn />
      <SloganBanner />
    </main>
  );
}
