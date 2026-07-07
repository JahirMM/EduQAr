import { Hero } from "./components/Hero";
import { WhatYouWillLearn } from "./components/WhatYouWillLearn";
import { SloganBanner } from "./components/SloganBanner";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";

export function Home() {
  return (
    <main>
      <Hero />
      <WhatYouWillLearn />
      <SloganBanner />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
