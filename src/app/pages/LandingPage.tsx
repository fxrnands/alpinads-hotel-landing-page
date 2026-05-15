import { Amenities } from "../components/Amenities";
import { Faq } from "../components/Faq";
import { Hero } from "../components/Hero";
import { OurHeritage } from "../components/OurHeritage";
import { VisualMemories } from "../components/VisualMemories";
import { YourPrivateSanctuary } from "../components/YourPrivateSanctuary";

export function LandingPage() {
  return (
    <>
      <Hero />
      <OurHeritage />
      <YourPrivateSanctuary />
      <Amenities />
      <VisualMemories />
      <Faq />
    </>
  );
}
