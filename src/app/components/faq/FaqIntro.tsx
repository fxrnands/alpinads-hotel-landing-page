import { FAQ_COPY, FAQ_IMAGE } from "@/constants/faq";
import {
  FAQ_ASIDE_CLASS,
  FAQ_DESCRIPTION_CLASS,
  FAQ_DESCRIPTION_TO_IMAGE_GAP_CLASS,
  FAQ_IMAGE_ASPECT_CLASS,
  FAQ_TITLE_CLASS,
  FAQ_TITLE_TO_DESCRIPTION_GAP_CLASS,
} from "@/lib/faq";

import { ImageWithFallback } from "../media/ImageWithFallback";
import { cn } from "../ui/utils";

export function FaqIntro() {
  return (
    <aside className={FAQ_ASIDE_CLASS}>
      <h2 className={FAQ_TITLE_CLASS}>{FAQ_COPY.title}</h2>
      <p className={cn(FAQ_DESCRIPTION_CLASS, FAQ_TITLE_TO_DESCRIPTION_GAP_CLASS)}>
        {FAQ_COPY.description}
      </p>
      <div className={cn("w-full overflow-hidden", FAQ_DESCRIPTION_TO_IMAGE_GAP_CLASS)}>
        <ImageWithFallback
          src={FAQ_IMAGE.src}
          alt={FAQ_IMAGE.alt}
          width={FAQ_IMAGE.width}
          height={FAQ_IMAGE.height}
          className={cn("h-full w-full object-cover", FAQ_IMAGE_ASPECT_CLASS)}
          draggable={false}
        />
      </div>
    </aside>
  );
}
