import type { HTMLAttributes } from "react";

import { HERITAGE_SLIDE_URLS } from "@/constants/heritageSlides";
import { useHeritageSliderGeometry } from "@/hooks/useHeritageSliderGeometry";
import { useInfiniteLoopSlider } from "@/hooks/useInfiniteLoopSlider";
import { SECTION_IDS } from "../sections";
import { ImageWithFallback } from "./media/ImageWithFallback";
import { SectionGalleryNav } from "./SectionGalleryNav";
import { SectionIntro } from "./SectionIntro";
import { cn } from "./ui/utils";

export function OurHeritage() {
  const sliderOptions = useHeritageSliderGeometry();

  const {
    loopSlides,
    translatePx,
    transitionOn,
    slideWidth,
    slideHeight,
    slideGap,
    goPrev,
    goNext,
    onTrackTransitionEnd,
    onTrackTransitionCancel,
  } = useInfiniteLoopSlider(HERITAGE_SLIDE_URLS, sliderOptions);

  return (
    <section id={SECTION_IDS.heritage} className="w-full py-[80px]">
      <div className="mx-auto flex max-w-[1920px] flex-col md:gap-10">
        <div className="flex flex-col items-center px-6 md:flex-row md:items-end md:justify-between md:px-10">
          <SectionIntro
            eyebrow="— Our Heritage —"
            title="Nature, Design, and Soul"
            description="Born from a passion for architecture and deep respect for the Alpine landscape, L&apos;Aura is more than a hotel—it&apos;s a private retreat where every window frames a masterpiece of nature."
          />
          <SectionGalleryNav
            onPrev={goPrev}
            onNext={goNext}
            prevLabel="Previous image"
            nextLabel="Next image"
            className="hidden w-full justify-end md:flex md:w-auto"
          />
        </div>

        <div
          className={cn(
            "w-full overflow-x-hidden max-md:px-0",
            "md:relative md:left-1/2 md:w-screen md:max-w-none md:-translate-x-1/2",
            "md:overflow-x-clip md:px-0 md:pl-[calc((100vw-min(100vw,1920px))/2+2.5rem)] md:pr-0",
          )}
        >
          <div
            className={cn(
              "flex w-max flex-nowrap",
              transitionOn &&
                cn(
                  "transition-transform will-change-transform",
                  "max-md:duration-300 max-md:ease-[cubic-bezier(0.32,0.72,0,1)]",
                  "md:duration-500 md:ease-out",
                ),
            )}
            style={{
              transform: `translate3d(-${translatePx}px, 0, 0)`,
              gap: slideGap,
            }}
            role="list"
            aria-label="Heritage image gallery"
            onTransitionEnd={onTrackTransitionEnd}
            {...({
              onTransitionCancel: onTrackTransitionCancel,
            } as HTMLAttributes<HTMLDivElement>)}
          >
            {loopSlides.map((src, index) => (
              <div
                key={`${index}-${src}`}
                role="listitem"
                className="relative max-md:aspect-square aspect-[748/519] max-h-[519px] max-w-[748px] shrink-0 overflow-hidden rounded-none bg-muted"
                style={{ width: slideWidth, height: slideHeight }}
              >
                <ImageWithFallback
                  src={src}
                  alt=""
                  width={slideWidth}
                  height={slideHeight}
                  draggable={false}
                  className="h-full w-full rounded-none object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <SectionGalleryNav
          onPrev={goPrev}
          onNext={goNext}
          prevLabel="Previous image"
          nextLabel="Next image"
          className="mt-[24px] flex justify-center md:hidden"
        />
      </div>
    </section>
  );
}
