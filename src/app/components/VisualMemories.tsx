import { SECTION_IDS } from "../sections";
import { SectionIntro } from "./SectionIntro";
import { VisualMemoriesMasonry } from "./visual-memories/VisualMemoriesMasonry";

export function VisualMemories() {
  return (
    <section
      id={SECTION_IDS.visualMemories}
      className="w-full bg-white py-[80px] md:py-[88px]"
    >
      <div className="mx-auto flex max-w-[1920px] flex-col gap-10 px-4 md:px-8">
        <SectionIntro
          desktopAlign="left"
          eyebrow="— Visual Memories —"
          title="A Glimpse of Paradise"
          description="From golden sunrises on the terrace to cozy evenings by the fireplace."
          className="md:pb-0"
        />

        <VisualMemoriesMasonry />
      </div>
    </section>
  );
}
