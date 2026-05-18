import {
  PERSONAL_QUOTE_BACKGROUND_URL,
  PERSONAL_QUOTE_COPY,
} from "@/constants/personalQuote";
import {
  PERSONAL_QUOTE_DESCRIPTION_CLASS,
  PERSONAL_QUOTE_EYEBROW_CLASS,
  PERSONAL_QUOTE_FORM_MAX_WIDTH_CLASS,
  PERSONAL_QUOTE_OVERLAY_BG,
  PERSONAL_QUOTE_SECTION_PADDING_CLASS,
  PERSONAL_QUOTE_TITLE_CLASS,
} from "@/lib/personalQuote/layout";

import { ImageWithFallback } from "./media/ImageWithFallback";
import { PersonalQuoteForm } from "./personal-quote/PersonalQuoteForm";
import { cn } from "./ui/utils";

export function PersonalQuote() {
  return (
    <div
      className={cn("relative w-full overflow-hidden", PERSONAL_QUOTE_SECTION_PADDING_CLASS)}
    >
      <ImageWithFallback
        src={PERSONAL_QUOTE_BACKGROUND_URL}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: PERSONAL_QUOTE_OVERLAY_BG }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1920px] px-4 md:px-8">
        <header className={cn("mx-auto text-center", PERSONAL_QUOTE_FORM_MAX_WIDTH_CLASS)}>
          <p className={PERSONAL_QUOTE_EYEBROW_CLASS}>{PERSONAL_QUOTE_COPY.eyebrow}</p>
          <h2 className={PERSONAL_QUOTE_TITLE_CLASS}>{PERSONAL_QUOTE_COPY.title}</h2>
          <p className={PERSONAL_QUOTE_DESCRIPTION_CLASS}>{PERSONAL_QUOTE_COPY.description}</p>
        </header>

        <div className={cn("mx-auto mt-10 w-full md:mt-12", PERSONAL_QUOTE_FORM_MAX_WIDTH_CLASS)}>
          <PersonalQuoteForm />
        </div>
      </div>
    </div>
  );
}
