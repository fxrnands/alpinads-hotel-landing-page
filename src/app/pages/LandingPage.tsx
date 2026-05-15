import { lazy } from "react";

import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { SectionSuspense } from "../components/SectionSuspense";

const OurHeritage = lazy(() =>
  import("../components/OurHeritage").then((module) => ({ default: module.OurHeritage })),
);
const YourPrivateSanctuary = lazy(() =>
  import("../components/YourPrivateSanctuary").then((module) => ({
    default: module.YourPrivateSanctuary,
  })),
);
const Amenities = lazy(() =>
  import("../components/Amenities").then((module) => ({ default: module.Amenities })),
);
const VisualMemories = lazy(() =>
  import("../components/VisualMemories").then((module) => ({ default: module.VisualMemories })),
);
const Faq = lazy(() =>
  import("../components/Faq").then((module) => ({ default: module.Faq })),
);
const PersonalQuote = lazy(() =>
  import("../components/PersonalQuote").then((module) => ({ default: module.PersonalQuote })),
);

export function LandingPage() {
  return (
    <>
      <Hero />
      <SectionSuspense minHeight="70vh">
        <OurHeritage />
      </SectionSuspense>
      <SectionSuspense minHeight="80vh">
        <YourPrivateSanctuary />
      </SectionSuspense>
      <SectionSuspense minHeight="60vh">
        <Amenities />
      </SectionSuspense>
      <SectionSuspense minHeight="70vh">
        <VisualMemories />
      </SectionSuspense>
      <SectionSuspense minHeight="50vh">
        <Faq />
      </SectionSuspense>
      <SectionSuspense minHeight="80vh">
        <PersonalQuote />
      </SectionSuspense>
      <Footer />
    </>
  );
}
