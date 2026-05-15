import {
  FAQ_COLUMNS_GAP_CLASS,
  FAQ_SECTION_BG,
  FAQ_SECTION_PADDING_CLASS,
} from "@/lib/faq";

import { SECTION_IDS } from "../sections";
import { FaqAccordion } from "./faq/FaqAccordion";
import { FaqIntro } from "./faq/FaqIntro";
import { cn } from "./ui/utils";

export function Faq() {
  return (
    <section
      id={SECTION_IDS.faq}
      className={cn("w-full", FAQ_SECTION_PADDING_CLASS)}
      style={{ backgroundColor: FAQ_SECTION_BG }}
    >
      <div className="mx-auto max-w-[1920px] px-4 md:px-8">
        <div
          className={cn(
            "flex flex-col lg:flex-row lg:items-start",
            FAQ_COLUMNS_GAP_CLASS,
          )}
        >
          <FaqIntro />
          <div className="w-full min-w-0 lg:flex-1">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
